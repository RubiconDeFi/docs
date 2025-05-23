import { LocaleSwitch } from "./components/LocaleSwitch";
import { ThemeSwitch } from "./components/ThemeSwitch";

const Logo = () => (
	<>
		<svg width="38.5" height="40.8" viewBox="0 0 185 208" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M25.7033 25.0782L50.6126 49.9875H72.4337C96.5273 49.9875 95.8863 49.9292 99.6737 51.8812C105.471 54.8237 109.259 60.5047 109.783 67.0016C110.162 71.6921 108.093 76.907 104.393 80.607C102.004 82.9668 100.082 84.2196 97.0808 85.2975L95.1871 85.9676L47.9905 86.1133L0.823079 86.2589L57.3133 146.915L113.833 207.572H149.201L184.54 207.601L183.433 206.348C182.821 205.678 167.031 188.751 148.356 168.707C129.681 148.692 114.445 132.261 114.474 132.203C114.503 132.115 115.756 131.591 117.241 130.979C129.798 125.939 140.665 117.024 148.327 105.458C153.95 97.0093 157.533 87.6574 159.048 77.4897C159.747 72.7118 159.747 63.0685 159.019 58.4362C156.659 42.9954 149.58 29.3025 138.509 18.7853C128.807 9.57903 117.096 3.60661 103.49 0.984573L100.14 0.343643L50.4669 0.256241L0.793945 0.168839L25.7033 25.0782Z"
				fill="#BA2F2A"
			></path>
			<path
				d="M14.0798 172.233C5.25227 174.593 -0.457932 183.246 0.911353 192.131C1.9893 199.094 6.21369 204.222 12.827 206.64C15.4491 207.631 20.0231 207.864 22.9073 207.194C32.2592 204.979 38.3482 195.424 36.3671 186.042C34.9687 179.371 29.8411 173.894 23.3734 172.204C21.3049 171.65 16.1483 171.68 14.0798 172.233Z"
				fill="#BA2F2A"
			></path>
		</svg>
	</>
);

const EditLink = () => (
	<div className="flex items-center">
		<div>
			<svg width="24" height="24" fill="currentColor" viewBox="3 3 18 18">
				<title>GitHub</title>
				<path d="M12 3C7.0275 3 3 7.12937 3 12.2276C3 16.3109 5.57625 19.7597 9.15374 20.9824C9.60374 21.0631 9.77249 20.7863 9.77249 20.5441C9.77249 20.3249 9.76125 19.5982 9.76125 18.8254C7.5 19.2522 6.915 18.2602 6.735 17.7412C6.63375 17.4759 6.19499 16.6569 5.8125 16.4378C5.4975 16.2647 5.0475 15.838 5.80124 15.8264C6.51 15.8149 7.01625 16.4954 7.18499 16.7723C7.99499 18.1679 9.28875 17.7758 9.80625 17.5335C9.885 16.9337 10.1212 16.53 10.38 16.2993C8.3775 16.0687 6.285 15.2728 6.285 11.7432C6.285 10.7397 6.63375 9.9092 7.20749 9.26326C7.1175 9.03257 6.8025 8.08674 7.2975 6.81794C7.2975 6.81794 8.05125 6.57571 9.77249 7.76377C10.4925 7.55615 11.2575 7.45234 12.0225 7.45234C12.7875 7.45234 13.5525 7.55615 14.2725 7.76377C15.9937 6.56418 16.7475 6.81794 16.7475 6.81794C17.2424 8.08674 16.9275 9.03257 16.8375 9.26326C17.4113 9.9092 17.76 10.7281 17.76 11.7432C17.76 15.2843 15.6563 16.0687 13.6537 16.2993C13.98 16.5877 14.2613 17.1414 14.2613 18.0065C14.2613 19.2407 14.25 20.2326 14.25 20.5441C14.25 20.7863 14.4188 21.0746 14.8688 20.9824C16.6554 20.364 18.2079 19.1866 19.3078 17.6162C20.4077 16.0457 20.9995 14.1611 21 12.2276C21 7.12937 16.9725 3 12 3Z"></path>
			</svg>
		</div>
		<div className="p-2">
			<p> Edit page →</p>
		</div>
	</div>
);

const Feedback = () => (
	<div className="flex items-center">
		<div>
			<svg width="24" height="24" fill="currentColor" aria-hidden="true" focusable="false" viewBox="0 0 16 16">
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M7.899 8.46363C7.79424 8.50783 7.67452 8.50783 7.58473 8.46363L1 5.3111V4.35355C1 4.16205 1.16462 4 1.35917 4H14.1096C14.3041 4 14.4688 4.16205 14.4688 4.35355V5.32583L7.899 8.46363ZM1 6.7244V12.6464C1 12.838 1.16462 13 1.35917 13H14.1096C14.3041 13 14.4688 12.838 14.4688 12.6464V6.7244L7.899 9.87693C7.79424 9.92112 7.67452 9.92112 7.58473 9.87693L1 6.7244Z"
				></path>
			</svg>
		</div>
		<div className="p-2">
			<p> Question? Give us feedback →</p>
		</div>
	</div>
);

const Footer = () => (
	<>
		MIT {new Date().getFullYear()} ©{" "}
		<a href="#" target="_blank">
			Copyright (c) 2022 Rubicon
		</a>
		.
	</>
);

//Link to the git project
const project = "https://github.com/RubiconDeFi/docs/tree/master";

const projectLinkAndSwitch = () => (
	<>
		<LocaleSwitch options={i18n} lite="true" />
		<ThemeSwitch lite="true" />
		<a href={project} target="_blank">
			<div className="flex items-center nx-px-1">
				<div>
					<svg width="24" height="24" fill="currentColor" viewBox="3 3 18 18">
						<title>GitHub</title>
						<path d="M12 3C7.0275 3 3 7.12937 3 12.2276C3 16.3109 5.57625 19.7597 9.15374 20.9824C9.60374 21.0631 9.77249 20.7863 9.77249 20.5441C9.77249 20.3249 9.76125 19.5982 9.76125 18.8254C7.5 19.2522 6.915 18.2602 6.735 17.7412C6.63375 17.4759 6.19499 16.6569 5.8125 16.4378C5.4975 16.2647 5.0475 15.838 5.80124 15.8264C6.51 15.8149 7.01625 16.4954 7.18499 16.7723C7.99499 18.1679 9.28875 17.7758 9.80625 17.5335C9.885 16.9337 10.1212 16.53 10.38 16.2993C8.3775 16.0687 6.285 15.2728 6.285 11.7432C6.285 10.7397 6.63375 9.9092 7.20749 9.26326C7.1175 9.03257 6.8025 8.08674 7.2975 6.81794C7.2975 6.81794 8.05125 6.57571 9.77249 7.76377C10.4925 7.55615 11.2575 7.45234 12.0225 7.45234C12.7875 7.45234 13.5525 7.55615 14.2725 7.76377C15.9937 6.56418 16.7475 6.81794 16.7475 6.81794C17.2424 8.08674 16.9275 9.03257 16.8375 9.26326C17.4113 9.9092 17.76 10.7281 17.76 11.7432C17.76 15.2843 15.6563 16.0687 13.6537 16.2993C13.98 16.5877 14.2613 17.1414 14.2613 18.0065C14.2613 19.2407 14.25 20.2326 14.25 20.5441C14.25 20.7863 14.4188 21.0746 14.8688 20.9824C16.6554 20.364 18.2079 19.1866 19.3078 17.6162C20.4077 16.0457 20.9995 14.1611 21 12.2276C21 7.12937 16.9725 3 12 3Z"></path>
					</svg>
				</div>
			</div>
		</a>
	</>
);

//The set of displayed languages in the switch
const i18n = [
	// { locale: "ar", text: "العربية", direction: "rtl" },
	{ locale: "en", text: "English" },
	// { locale: "es", text: "Español" },
	// { locale: "fa", text: "فارسی", direction: "rtl" },
	// { locale: "fr", text: "Français" },
	// { locale: "hi", text: "हिन्दी" },
	// { locale: "id", text: "Indonesia" },
	// { locale: "ja", text: "日本語" },
	// { locale: "ko", text: "한국어" },
	// { locale: "ru", text: "Русский" },
	// { locale: "vi", text: "Tiếng việt" },
	// { locale: "zh", text: "中文" },
];

//configuring the config
export default {
	logo: Logo,
	toc: {
		float: true,
	},
	//Passed an empty component to hide the default theme switch
	themeSwitch: {
		component: <></>,
	},
	//Add a link to the default project
	//project: {
	//	link: project,
	//},
	docsRepositoryBase: project,
	editLink: {
		text: EditLink,
	},
	feedback: {
		content: Feedback,
	},
	sidebar: {
		defaultMenuCollapseLevel: 1,
	},
	search: {
		placeholder: "Search documentation...",
	},
	useNextSeoProps() {
		return {
			titleTemplate: "%s",
		};
	},
	footer: {
		text: Footer,
	},
	navigation: {
		prev: true,
		next: true,
	},
	navbar: {
		//A custom set of theme and language switches and a link to the project
		extraContent: projectLinkAndSwitch,
	},
	primaryHue: 18,
	//Add a default site localization switch
	//i18n: i18n,
	// ...    
};
