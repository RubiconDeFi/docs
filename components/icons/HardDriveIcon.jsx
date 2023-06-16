import { DarkMode, Gradient, LightMode } from "/components/Icon";

export function HardDriveIcon({ id, color }) {
  return (
    <>
      <defs>
        <Gradient
          id={`${id}-gradient`}
          color={color}
          gradientTransform="matrix(0 21 -21 0 12 3)"
        />
        <Gradient
          id={`${id}-gradient-dark`}
          color={color}
          gradientTransform="matrix(0 21 -21 0 16 7)"
        />
      </defs>
      <LightMode>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="22" y1="12" x2="2" y2="12" stroke={`url(#${id}-gradient)`} strokeWidth="2" />
          <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" fill={`url(#${id}-gradient)`} strokeWidth="2" />
          <line x1="6" y1="16" x2="6.01" y2="16" stroke={`url(#${id}-gradient)`} strokeWidth="2" />
          <line x1="10" y1="16" x2="10.01" y2="16" stroke={`url(#${id}-gradient)`} strokeWidth="2" />
        </svg>
      </LightMode>
      <DarkMode>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="22" y1="12" x2="2" y2="12" stroke={`url(#${id}-gradient-dark)`} strokeWidth="2" />
          <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" fill={`url(#${id}-gradient-dark)`} strokeWidth="2" />
          <line x1="6" y1="16" x2="6.01" y2="16" stroke={`url(#${id}-gradient-dark)`} strokeWidth="2" />
          <line x1="10" y1="16" x2="10.01" y2="16" stroke={`url(#${id}-gradient-dark)`} strokeWidth="2" />
        </svg>
        </DarkMode>
    </>
    );
}

