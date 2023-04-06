import { SunIcon, MoonIcon } from "nextra/icons";
import { useMounted } from "nextra/hooks";
import { useTheme } from "next-themes";
import { Select } from "./Select";
import { useConfig } from "nextra-theme-docs";

export function ThemeSwitch(props) {
	const { setTheme, resolvedTheme, theme = "" } = useTheme();
	const mounted = useMounted();
	const config = useConfig().themeSwitch;

	const IconToUse = mounted && resolvedTheme === "dark" ? MoonIcon : SunIcon;
	const options = typeof config.useOptions === "function" ? config.useOptions() : config.useOptions;

	return (
		<Select
			className={props.className}
			title="Change theme"
			options={[
				{ key: "light", name: options.light },
				{ key: "dark", name: options.dark },
				{ key: "system", name: options.system },
			]}
			onChange={(option) => {
				setTheme(option.key);
			}}
			selected={{
				key: theme,
				name: (
					<div className="nx-flex nx-items-center nx-gap-2 nx-capitalize">
						<IconToUse />
						<span className={props.lite ? "md:nx-hidden" : ""}>{mounted ? theme : "light"}</span>
					</div>
				),
			}}
		/>
	);
}
