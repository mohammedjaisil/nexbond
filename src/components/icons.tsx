import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export const CheckIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="m8 12.5 2.5 2.5L16 9.5" />
  </svg>
);

export const ShieldIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3 5 6v5c0 4.5 3 8.2 7 10 4-1.8 7-5.5 7-10V6l-7-3Z" />
    <path d="m9 11.5 2 2 4-4.5" />
  </svg>
);

export const RulerIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="9" width="18" height="6" rx="1" />
    <path d="M7 9v3M11 9v2.5M15 9v3M19 9v2.5" />
  </svg>
);

export const UsersIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
    <path d="M16 5.2a3.5 3.5 0 0 1 0 5.6M18.5 14.6c1.5 1 2.5 2.6 2.5 4.4" />
  </svg>
);

export const GemIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M7 4h10l4 5-9 11L3 9l4-5Z" />
    <path d="M3 9h18M12 20 8.5 9l2-5M12 20 15.5 9l-2-5" />
  </svg>
);

export const TapeIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="11" cy="11" r="7.5" />
    <circle cx="11" cy="11" r="3" />
    <path d="M18.2 14.5H21v4h-8" />
  </svg>
);

export const ConeIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m12 4 5 14M12 4 7 18M4 18h16" />
    <path d="M9.2 12h5.6" />
  </svg>
);

export const SignIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3v18M12 4h7l2 2.5L19 9h-7M12 11H5l-2 2.5L5 16h7" />
  </svg>
);

export const PaintIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 8V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2" />
    <rect x="4" y="8" width="16" height="4" rx="1" />
    <path d="M12 12v3M12 18v.5" />
    <path d="M10 21h4v-4a2 2 0 0 0-4 0v4Z" />
  </svg>
);

export const RoadStudIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 16 12 7l8 9H4Z" />
    <rect x="9" y="11.5" width="6" height="3" rx="1" />
    <path d="M2 20h20" />
  </svg>
);

export const RoadIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M6 21 10 3M18 21 14 3M12 6v2M12 11v2.5M12 16.5V19" />
  </svg>
);

export const ArrowRightIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 12h16m-6-6 6 6-6 6" />
  </svg>
);

export const PhoneIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);

export const MailIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const PinIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const MenuIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
);

export const XMarkIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="m9 9 6 6M15 9l-6 6" />
  </svg>
);

/* Social */
export const LinkedInIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M6.94 8.5v12H3.56v-12h3.38ZM7.13 5.25a1.88 1.88 0 1 1-1.88-1.87 1.87 1.87 0 0 1 1.88 1.87ZM20.5 13.9v6.6h-3.37v-6.2c0-1.56-.56-2.62-1.96-2.62a2.11 2.11 0 0 0-1.98 1.41 2.62 2.62 0 0 0-.13.94v6.47H9.68v-12h3.38v1.71a3.35 3.35 0 0 1 3.04-1.68c2.22 0 4.4 1.45 4.4 5.37Z" />
  </svg>
);

export const InstagramIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

export const FacebookIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.6c0-.87.28-1.6 1.66-1.6H16.6V4.3a22 22 0 0 0-2.34-.12c-2.4 0-4.01 1.46-4.01 4.1v2.22H7.5v3h2.75V21h3.25Z" />
  </svg>
);

export const WhatsAppIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.65-1.17A9 9 0 1 0 12 3Zm0 1.8a7.2 7.2 0 1 1-3.68 13.39l-.44-.26-2.6.65.68-2.5-.28-.46A7.2 7.2 0 0 1 12 4.8Zm-2.9 3.4c-.18 0-.46.07-.7.33-.24.26-.92.9-.92 2.18 0 1.29.94 2.53 1.07 2.7.13.18 1.84 2.94 4.55 4 2.25.89 2.7.71 3.19.67.49-.05 1.58-.65 1.8-1.27.22-.63.22-1.16.16-1.27-.07-.11-.25-.18-.51-.31-.27-.13-1.58-.78-1.82-.87-.24-.09-.42-.13-.6.13-.18.27-.69.87-.84 1.05-.16.18-.31.2-.58.07a7.33 7.33 0 0 1-2.14-1.32 8 8 0 0 1-1.48-1.85c-.16-.26-.02-.4.11-.54.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.33-.02-.47-.07-.13-.6-1.45-.82-1.98-.22-.52-.44-.45-.6-.46l-.52-.01Z" />
  </svg>
);
