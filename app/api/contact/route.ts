import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import nodemailer from 'nodemailer';

// Strict schema validation for contact submissions
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be 100 characters or fewer'),
  email: z
    .string()
    .trim()
    .email('Please enter a valid email address'),
  subject: z
    .string()
    .trim()
    .min(2, 'Subject must be at least 2 characters')
    .max(150, 'Subject must be 150 characters or fewer'),
  message: z
    .string()
    .trim()
    .min(10, 'Message must be at least 10 characters')
    .max(3000, 'Message must be 3000 characters or fewer'),
});

export type ContactInput = z.infer<typeof contactSchema>;

// In-memory sliding window rate limiting (5 requests per 15 minutes per IP)
interface RateLimitRecord {
  count: number;
  resetAt: number;
}

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS_PER_WINDOW = 5;
const ipRateLimitMap = new Map<string, RateLimitRecord>();

function isRateLimited(ip: string): { limited: boolean; retryAfterSeconds: number } {
  const now = Date.now();
  const record = ipRateLimitMap.get(ip);

  // Clean up expired entry or set new window
  if (!record || now > record.resetAt) {
    ipRateLimitMap.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return { limited: false, retryAfterSeconds: 0 };
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    const retryAfter = Math.ceil((record.resetAt - now) / 1000);
    return { limited: true, retryAfterSeconds: retryAfter };
  }

  record.count += 1;
  return { limited: false, retryAfterSeconds: 0 };
}

export async function POST(req: NextRequest) {
  try {
    // 1. IP determination for rate limiting
    const forwarded = req.headers.get('x-forwarded-for');
    const realIp = req.headers.get('x-real-ip');
    const clientIp = forwarded?.split(',')[0].trim() || realIp || '127.0.0.1';

    const { limited, retryAfterSeconds } = isRateLimited(clientIp);
    if (limited) {
      return NextResponse.json(
        {
          error: `Rate limit exceeded. Please wait ${retryAfterSeconds} seconds before sending another message.`,
        },
        {
          status: 429,
          headers: {
            'Retry-After': String(retryAfterSeconds),
          },
        }
      );
    }

    // 2. Validate payload
    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json(
        { error: 'Invalid JSON request body' },
        { status: 400 }
      );
    }

    const validationResult = contactSchema.safeParse(body);
    if (!validationResult.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of validationResult.error.issues) {
        const path = issue.path[0]?.toString() || 'general';
        fieldErrors[path] = issue.message;
      }
      return NextResponse.json(
        { error: 'Validation failed', fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = validationResult.data;

    // 3. Dispatch via Nodemailer if credentials configured
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpPort = Number(process.env.SMTP_PORT) || 587;
    const recipientEmail = process.env.CONTACT_EMAIL || 'zenitech007@gmail.com';

    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"${name}" <${smtpUser}>`,
        replyTo: email,
        to: recipientEmail,
        subject: `[Portfolio Inquiry] ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
        html: `
          <h3>New Portfolio Message</h3>
          <p><strong>From:</strong> ${escapeHtml(name)} (&lt;${escapeHtml(email)}&gt;)</p>
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <hr />
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        `,
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Your message has been received. I will review and reply within 24 hours.',
    });
  } catch {
    return NextResponse.json(
      { error: 'Internal server error processing message. Please try again or email directly.' },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
