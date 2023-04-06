import { useRouter } from "next/router";
import { Select } from "./Select";
import { GlobeIcon } from "nextra/icons";
import { addBasePath } from "next/dist/client/add-base-path";

export function LocaleSwitch(props) {
	const { locale, asPath } = useRouter();
	const selected = props.options.find((l) => locale === l.locale);
	return (
		<Select
			title="Change language"
			className={props.className}
			onChange={(option) => {
				const date = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);
				document.cookie = `NEXT_LOCALE=${option.key}; expires=${date.toUTCString()}; path=/`;
				location.href = addBasePath(asPath);
			}}
			selected={{
				key: selected?.locale || "",
				name: (
					<div className="nx-flex nx-items-center nx-gap-2">
						<GlobeIcon />
						<span className={props.lite ? "nx-hidden" : ""}>{selected?.text}</span>
					</div>
				),
			}}
			options={props.options.map((l) => ({
				key: l.locale,
				name: l.text,
			}))}
		/>
	);
}
