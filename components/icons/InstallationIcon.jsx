import { DarkMode, Gradient, LightMode } from "/components/Icon";
export function InstallationIcon({ id, color }) {
	return (
		<>
			<defs>
				<Gradient id={`${id}-gradient`} color={color} gradientTransform="matrix(0 21 -21 0 12 3)" />
				<Gradient id={`${id}-gradient-dark`} color={color} gradientTransform="matrix(0 21 -21 0 16 7)" />
			</defs>
			<LightMode>
				<path
					d="m4 4 10.286 24 2.285-11.429L28 14.286 4 4Z"
					fill={`url(#${id}-gradient)`}
					stroke={`url(#${id}-gradient)`}
					strokeWidth={2}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</LightMode>
			<DarkMode>
				<path
					d="m4 4 10.286 24 2.285-11.429L28 14.286 4 4Z"
					fill={`url(#${id}-gradient-dark)`}
					stroke={`url(#${id}-gradient-dark)`}
					strokeWidth={2}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</DarkMode>
		</>
	);
}