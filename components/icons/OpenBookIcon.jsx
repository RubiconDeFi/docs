import { DarkMode, Gradient, LightMode } from '/components/Icon';

export function OpenBookIcon({ id, color }) {
  return (
    <>
      <defs>
        <Gradient
          id={`${id}-gradient`}
          color={color}
          gradientTransform="matrix(0 21 -21 0 20 11)"
        />
        <Gradient
          id={`${id}-gradient-dark`}
          color={color}
          gradientTransform="matrix(0 24.5001 -19.2498 0 16 5.5)"
        />
      </defs>
      <LightMode>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
            fill={`url(#${id}-gradient)`}
            strokeWidth="2"
          />
          <path
            d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
            fill={`url(#${id}-gradient)`}
            strokeWidth="2"
          />
        </svg>
      </LightMode>
      <DarkMode>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
            fill={`url(#${id}-gradient-dark)`}
            strokeWidth="2"
          />
          <path
            d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
            fill={`url(#${id}-gradient-dark)`}
            strokeWidth="2"
          />
        </svg>
      </DarkMode>
    </>
  );
}