'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export type ClayAssetName =
  | 'hero-character'
  | 'plant'
  | 'coffee'
  | 'cloud-mascot'
  | 'unicorn-rainbow'
  | 'avatar-1'
  | 'avatar-2'
  | 'avatar-3'
  | 'icon-tasks'
  | 'icon-bulb'
  | 'icon-chart'
  | 'icon-chat'
  | 'logo-flower';

interface ClayPlaceholderProps {
  name: ClayAssetName;
  width?: number;
  height?: number;
  alt: string;
  priority?: boolean;
  className?: string;
}

export default function ClayPlaceholder({
  name,
  width = 200,
  height = 200,
  alt,
  priority = false,
  className = '',
}: ClayPlaceholderProps) {
  const [hasError, setHasError] = useState(false);

  // Soft SVG 3D clay fallbacks if WebP asset is not yet added to /public/clay/
  const renderFallback = () => {
    switch (name) {
      case 'logo-flower':
        return (
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full drop-shadow-[0_8px_16px_rgba(242,80,138,0.35)]"
          >
            <defs>
              <linearGradient id="flowerPetal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F86E9E" />
                <stop offset="100%" stopColor="#F2508A" />
              </linearGradient>
              <linearGradient id="flowerCenter" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FDE06D" />
                <stop offset="100%" stopColor="#F9D24A" />
              </linearGradient>
              <filter id="clayHighlight" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#ffffff" floodOpacity="0.8" />
              </filter>
            </defs>
            {/* 5 rounded petals */}
            <circle cx="50" cy="22" r="16" fill="url(#flowerPetal)" filter="url(#clayHighlight)" />
            <circle cx="76" cy="41" r="16" fill="url(#flowerPetal)" filter="url(#clayHighlight)" />
            <circle cx="66" cy="72" r="16" fill="url(#flowerPetal)" filter="url(#clayHighlight)" />
            <circle cx="34" cy="72" r="16" fill="url(#flowerPetal)" filter="url(#clayHighlight)" />
            <circle cx="24" cy="41" r="16" fill="url(#flowerPetal)" filter="url(#clayHighlight)" />
            {/* Center pistil */}
            <circle cx="50" cy="50" r="14" fill="url(#flowerCenter)" />
            <circle cx="47" cy="46" r="4" fill="#ffffff" opacity="0.6" />
          </svg>
        );

      case 'hero-character':
        return (
          <svg
            viewBox="0 0 400 400"
            className="w-full h-full drop-shadow-[0_20px_35px_rgba(138,107,212,0.3)]"
          >
            <defs>
              <linearGradient id="skinGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFDFC4" />
                <stop offset="100%" stopColor="#F0B58D" />
              </linearGradient>
              <linearGradient id="hoodieGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C2ABF7" />
                <stop offset="100%" stopColor="#8A6BD4" />
              </linearGradient>
              <linearGradient id="laptopGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFF6E8" />
                <stop offset="100%" stopColor="#EAD8BE" />
              </linearGradient>
              <linearGradient id="deskGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#B49CF0" />
                <stop offset="100%" stopColor="#7E5AC9" />
              </linearGradient>
            </defs>
            {/* Soft clay desk */}
            <path
              d="M40 330 C120 310, 280 310, 390 330 C390 380, 40 380, 40 330 Z"
              fill="url(#deskGrad)"
            />
            {/* Character body (clay hoodie) */}
            <path
              d="M130 240 C130 180, 270 180, 270 240 L285 330 C285 340, 115 340, 115 330 Z"
              fill="url(#hoodieGrad)"
            />
            {/* Head */}
            <circle cx="200" cy="140" r="55" fill="url(#skinGrad)" />
            {/* Hair */}
            <path
              d="M145 130 C145 75, 255 75, 255 130 C255 110, 225 90, 200 90 C175 90, 145 110, 145 130 Z"
              fill="#4B2E25"
            />
            {/* Smiling Face */}
            <circle cx="185" cy="135" r="5" fill="#4B2E25" />
            <circle cx="215" cy="135" r="5" fill="#4B2E25" />
            <path
              d="M190 155 Q200 168 210 155"
              stroke="#4B2E25"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            {/* Rosy cheeks */}
            <circle cx="175" cy="148" r="8" fill="#F8C5D2" opacity="0.8" />
            <circle cx="225" cy="148" r="8" fill="#F8C5D2" opacity="0.8" />
            {/* Waving Hand (Right) */}
            <g transform="translate(265, 150) rotate(-15)">
              <rect x="0" y="0" width="28" height="40" rx="14" fill="url(#skinGrad)" />
              <circle cx="14" cy="4" r="10" fill="url(#skinGrad)" />
              <path
                d="M4 14 Q14 2 24 14"
                stroke="#ffffff"
                strokeWidth="2"
                fill="none"
                opacity="0.6"
              />
            </g>
            {/* Left Hand typing on laptop */}
            <circle cx="160" cy="285" r="16" fill="url(#skinGrad)" />
            {/* Clay Laptop */}
            <rect
              x="135"
              y="265"
              width="130"
              height="65"
              rx="16"
              fill="url(#laptopGrad)"
              stroke="#D8C3A5"
              strokeWidth="2"
            />
            <rect x="150" y="275" width="100" height="40" rx="8" fill="#B49CF0" opacity="0.4" />
            <circle cx="200" cy="295" r="7" fill="#F2508A" />
          </svg>
        );

      case 'plant':
        return (
          <svg viewBox="0 0 160 200" className="w-full h-full drop-shadow-[0_12px_24px_rgba(124,197,137,0.35)]">
            <defs>
              <linearGradient id="potGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F8C5D2" />
                <stop offset="100%" stopColor="#F2508A" />
              </linearGradient>
              <linearGradient id="leafGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#A9DDB0" />
                <stop offset="100%" stopColor="#7CC589" />
              </linearGradient>
            </defs>
            {/* Rounded clay pot */}
            <path
              d="M45 110 L115 110 L105 180 C105 190, 55 190, 55 180 Z"
              fill="url(#potGrad)"
            />
            <rect x="40" y="100" width="80" height="18" rx="9" fill="#FFF6E8" />
            {/* Clay Monstera / Succulent leaves */}
            <ellipse cx="80" cy="65" rx="24" ry="40" fill="url(#leafGrad)" />
            <ellipse cx="50" cy="80" rx="20" ry="32" transform="rotate(-30 50 80)" fill="url(#leafGrad)" />
            <ellipse cx="110" cy="80" rx="20" ry="32" transform="rotate(30 110 80)" fill="url(#leafGrad)" />
            <circle cx="75" cy="50" r="5" fill="#ffffff" opacity="0.5" />
          </svg>
        );

      case 'coffee':
        return (
          <svg viewBox="0 0 160 160" className="w-full h-full drop-shadow-[0_10px_20px_rgba(242,80,138,0.3)]">
            <defs>
              <linearGradient id="mugGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F86E9E" />
                <stop offset="100%" stopColor="#F2508A" />
              </linearGradient>
            </defs>
            {/* Steaming clay loops */}
            <path
              d="M60 30 Q50 20 60 10 M75 30 Q65 18 75 8 M90 30 Q80 20 90 10"
              stroke="#D8B896"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            {/* Mug Body */}
            <rect x="40" y="45" width="70" height="80" rx="26" fill="url(#mugGrad)" />
            {/* Handle */}
            <path
              d="M105 60 C130 60, 130 105, 105 105"
              stroke="url(#mugGrad)"
              strokeWidth="12"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="58" cy="65" r="5" fill="#ffffff" opacity="0.6" />
          </svg>
        );

      case 'cloud-mascot':
        return (
          <svg viewBox="0 0 240 180" className="w-full h-full drop-shadow-[0_14px_28px_rgba(124,197,137,0.35)]">
            <defs>
              <linearGradient id="cloudGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#D4F2D8" />
              </linearGradient>
            </defs>
            {/* Cloud Puffs */}
            <circle cx="80" cy="110" r="45" fill="url(#cloudGrad)" />
            <circle cx="125" cy="80" r="55" fill="url(#cloudGrad)" />
            <circle cx="170" cy="110" r="42" fill="url(#cloudGrad)" />
            {/* Happy Eyes and Smile */}
            <circle cx="108" cy="95" r="5" fill="#4B2E25" />
            <circle cx="142" cy="95" r="5" fill="#4B2E25" />
            <path
              d="M115 110 Q125 124 135 110"
              stroke="#4B2E25"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            {/* Cheeks */}
            <circle cx="98" cy="106" r="7" fill="#F8C5D2" opacity="0.9" />
            <circle cx="152" cy="106" r="7" fill="#F8C5D2" opacity="0.9" />
          </svg>
        );

      case 'unicorn-rainbow':
        return (
          <svg viewBox="0 0 260 200" className="w-full h-full drop-shadow-[0_15px_30px_rgba(242,80,138,0.3)]">
            <defs>
              <linearGradient id="hornGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FDE06D" />
                <stop offset="100%" stopColor="#F9D24A" />
              </linearGradient>
            </defs>
            {/* Rainbow Arch */}
            <path d="M30 190 A100 100 0 0 1 230 190" stroke="#F86E9E" strokeWidth="12" fill="none" />
            <path d="M42 190 A88 88 0 0 1 218 190" stroke="#F9D24A" strokeWidth="12" fill="none" />
            <path d="M54 190 A76 76 0 0 1 206 190" stroke="#A9DDB0" strokeWidth="12" fill="none" />
            <path d="M66 190 A64 64 0 0 1 194 190" stroke="#B49CF0" strokeWidth="12" fill="none" />
            {/* Peeking Unicorn Head */}
            <circle cx="130" cy="135" r="45" fill="#FFF6E8" />
            {/* Golden Horn */}
            <polygon points="130,55 122,95 138,95" fill="url(#hornGrad)" />
            {/* Ears */}
            <polygon points="105,95 95,115 115,115" fill="#F8C5D2" />
            <polygon points="155,95 145,115 165,115" fill="#F8C5D2" />
            {/* Eyes */}
            <path d="M115 135 Q122 142 128 135" stroke="#4B2E25" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M132 135 Q138 142 145 135" stroke="#4B2E25" strokeWidth="3" fill="none" strokeLinecap="round" />
            {/* Muzzle */}
            <ellipse cx="130" cy="155" rx="18" ry="12" fill="#F8C5D2" />
          </svg>
        );

      case 'avatar-1':
      case 'avatar-2':
      case 'avatar-3':
        const avatarColors = {
          'avatar-1': { bg: '#B49CF0', face: '#FFDFC4', hair: '#4B2E25' },
          'avatar-2': { bg: '#A9DDB0', face: '#F0B58D', hair: '#8A6BD4' },
          'avatar-3': { bg: '#F9D24A', face: '#FFDFC4', hair: '#F2508A' },
        }[name];
        return (
          <svg viewBox="0 0 80 80" className="w-full h-full drop-shadow-[0_6px_12px_rgba(75,46,37,0.2)]">
            <circle cx="40" cy="40" r="38" fill={avatarColors.bg} />
            <circle cx="40" cy="42" r="24" fill={avatarColors.face} />
            <path
              d="M24 36 C24 22, 56 22, 56 36 C56 28, 48 24, 40 24 C32 24, 24 28, 24 36 Z"
              fill={avatarColors.hair}
            />
            <circle cx="34" cy="40" r="2.5" fill="#4B2E25" />
            <circle cx="46" cy="40" r="2.5" fill="#4B2E25" />
            <path d="M36 48 Q40 54 44 48" stroke="#4B2E25" strokeWidth="2" strokeLinecap="round" fill="none" />
          </svg>
        );

      case 'icon-tasks':
        return (
          <svg viewBox="0 0 64 64" className="w-12 h-12">
            <rect x="12" y="8" width="40" height="48" rx="14" fill="#FFF6E8" />
            <rect x="20" y="6" width="24" height="8" rx="4" fill="#B49CF0" />
            <path d="M18 24 L24 30 L36 18" stroke="#7CC589" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <line x1="28" y1="36" x2="44" y2="36" stroke="#4B2E25" strokeWidth="4" strokeLinecap="round" />
            <line x1="20" y1="46" x2="44" y2="46" stroke="#D8C3A5" strokeWidth="4" strokeLinecap="round" />
          </svg>
        );

      case 'icon-bulb':
        return (
          <svg viewBox="0 0 64 64" className="w-12 h-12">
            <circle cx="32" cy="26" r="18" fill="#F9D24A" />
            <path d="M26 38 L38 38 L36 46 L28 46 Z" fill="#4B2E25" />
            <rect x="28" y="48" width="8" height="4" rx="2" fill="#D8C3A5" />
            <circle cx="27" cy="22" r="3" fill="#ffffff" opacity="0.6" />
          </svg>
        );

      case 'icon-chart':
        return (
          <svg viewBox="0 0 64 64" className="w-12 h-12">
            <rect x="14" y="36" width="8" height="18" rx="4" fill="#6FCBC4" />
            <rect x="28" y="24" width="8" height="30" rx="4" fill="#A9DDB0" />
            <rect x="42" y="14" width="8" height="40" rx="4" fill="#F2508A" />
          </svg>
        );

      case 'icon-chat':
        return (
          <svg viewBox="0 0 64 64" className="w-12 h-12">
            <rect x="10" y="12" width="44" height="34" rx="16" fill="#F8C5D2" />
            <polygon points="20,44 14,54 30,44" fill="#F8C5D2" />
            <circle cx="24" cy="29" r="3" fill="#F2508A" />
            <circle cx="32" cy="29" r="3" fill="#F2508A" />
            <circle cx="40" cy="29" r="3" fill="#F2508A" />
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className={`relative flex items-center justify-center select-none ${className}`}
      style={{ width, height }}
    >
      {!hasError ? (
        <Image
          src={`/clay/${name}.webp`}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          onError={() => setHasError(true)}
          className="w-full h-full object-contain"
        />
      ) : (
        renderFallback()
      )}
    </div>
  );
}
