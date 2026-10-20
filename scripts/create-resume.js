const fs = require('fs');
const path = require('path');

const pdfContent = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length 285 >>
stream
BT
/F1 20 Tf
50 720 Td
(Olanrewaju Sorunke - Senior Frontend Developer) Tj
/F1 12 Tf
0 -30 Td
(Email: zenitech007@gmail.com | Portfolio: zenitech-phi.vercel.app) Tj
0 -25 Td
(Summary: Senior Frontend Engineer with 5+ years of experience specializing) Tj
0 -18 Td
(in Next.js, React, TypeScript, Tailwind CSS, and AI systems integration.) Tj
0 -35 Td
(Selected Core Stack: Next.js 15+, React 19, TypeScript, Tailwind CSS, Node.js) Tj
ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f 
0000000010 00000 n 
0000000060 00000 n 
0000000117 00000 n 
0000000227 00000 n 
0000000565 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
634
%%EOF`;

const target = path.join(__dirname, '..', 'public', 'resume.pdf');
fs.writeFileSync(target, pdfContent);
console.log('Created valid resume.pdf at', target);
