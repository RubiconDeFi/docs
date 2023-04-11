const fs = require("fs");
const path = require("path");
const translate = require("@vitalets/google-translate-api");

function replaceMetaData(text, blockArray) {
	const regex = /---([\s\S]*?)---/g;
	const importRegex = /import\s+.*?\s+from\s+['"].*?['"]?;/g;
	const JsxRegex = /<[\s\S]*?>[\s\S]*?<\/[\s\S]*?>/g;
	const JsxRegexEnd = /<\/[\s\S]*?>/g;
	const codeBlockRegex = /```([\s\S]*?)```/g;
	const LinkBlockRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
	const LinkBlockUrlRegex = /<([^>]+)>/g;
	let match;
	const blocks = [];
	let currentIndex = blockArray.length;

	while ((match = regex.exec(text)) !== null) {
		blocks.push({ index: currentIndex++, content: match[0], type: "head" });
	}
	while ((match = LinkBlockUrlRegex.exec(text)) !== null) {
		blocks.push({ index: currentIndex++, content: match[0], type: "url" });
	}
	while ((match = importRegex.exec(text)) !== null) {
		blocks.push({ index: currentIndex++, content: match[0], type: "import" });
	}
	while ((match = JsxRegex.exec(text)) !== null) {
		blocks.push({ index: currentIndex++, content: match[0], type: "jsx" });
	}
	while ((match = JsxRegexEnd.exec(text)) !== null) {
		blocks.push({ index: currentIndex++, content: match[0], type: "jsx" });
	}
	while ((match = codeBlockRegex.exec(text)) !== null) {
		blocks.push({ index: currentIndex++, content: match[0], type: "code" });
	}
	while ((match = LinkBlockRegex.exec(text)) !== null) {
		blocks.push({ index: currentIndex++, content: match[0], type: "link" });
	}

	for (const block of blocks) {
		const blockPlaceholder = `|**** ${block.index} ****|`;
		text = text.replace(`${block.content}`, blockPlaceholder);
		blockArray.push({ index: block.index, content: block.content, type: block.type });
	}

	return { text, blocks: blockArray };
}

const translateMarkdownFile = async (inputFilePath, outputFilePath, languageCode) => {
	const data = fs.readFileSync(inputFilePath, "utf8");

	const codeBlocks = [];

	const result = replaceMetaData(data, codeBlocks);
	let translatedFileContent = "";

	//console.log(result.text);

	if (onlyCopy) {
		translatedFileContent = data;
	} else {
		const translated = await translate.translate(result.text, { to: languageCode });
		translatedFileContent = translated.text;
	}

	for (const block of codeBlocks) {
		const blockPlaceholder = `|**** ${block.index} ****|`;
		translatedFileContent = translatedFileContent.replace(blockPlaceholder, `${block.content}`);
	}

	fs.writeFileSync(outputFilePath, translatedFileContent, "utf8");
};

function processFiles(dirPath, processedFiles) {
	fs.readdir(dirPath, (err, files) => {
		if (err) throw err;

		files.forEach((file) => {
			const filePath = path.join(dirPath, file);
			fs.stat(filePath, (err, stat) => {
				if (err) throw err;

				if (stat.isDirectory()) {
					processFiles(filePath, processedFiles);
				} else if (extensions.includes(path.extname(filePath))) {
					const { name, ext } = path.parse(filePath);
					const nameComponents = name.split(".");

					const hasLanguageCode = nameComponents.some((component) => languageCodes.includes(component));

					if (!hasLanguageCode) {
						const isTargetExtension = extensions.includes(ext);
						const isTargetLanguage = targetLanguageCode ? languageCodes.includes(targetLanguageCode) : true;
						const isProcessed = processedFiles.has(filePath);

						if (isTargetExtension && isTargetLanguage && !isProcessed) {
							const newFileName = `${name}.${targetLanguageCode}${ext}`;
							const newFilePath = path.join(dirPath, newFileName);
							if (!fs.existsSync(newFilePath)) {
								if (path.extname(filePath) === ".md" || path.extname(filePath) === ".mdx") {
									if (!onlyCopy) {
										tileSleep += 60000;
									}
									setTimeout(() => {
										translateMarkdownFile(filePath, newFilePath, targetLanguageCode)
											.then(() => {
												if (!onlyCopy) {
													console.log(`The file has been successfully translated and saved to ${newFilePath}`);
												} else {
													console.log(`The file was copied successfully to ${newFilePath}`);
												}
											})
											.catch((err) => {
												if (!onlyCopy) {
													console.error(`An error occurred while translating the File: ${filePath} | Error: ${err.message}`);
												} else {
													console.error(`Error when copying the File: ${filePath} | Error: ${err.message}`);
												}
											});
									}, tileSleep);
								} else {
									fs.copyFile(filePath, newFilePath, (err) => {
										if (err) throw err;
										console.log(`Copy file: ${filePath} => ${newFilePath}`);
									});
								}
							} else {
								console.log(`Exists file: ${newFilePath}`);
							}

							processedFiles.add(filePath);
						}
					} else {
						console.log(`Exists file Language Code: ${filePath}`);
					}
				}
			});
		});
	});
}

const extensions = [".md", ".mdx", ".json"];
const languageCodes = [
	"af",
	"am",
	"ar",
	"as",
	"az",
	"be",
	"bg",
	"bn",
	"bs",
	"ca",
	"cs",
	"cy",
	"da",
	"de",
	"el",
	"en",
	"eo",
	"es",
	"et",
	"eu",
	"fa",
	"fi",
	"fil",
	"fo",
	"fr",
	"fy",
	"ga",
	"gd",
	"gl",
	"gu",
	"ha",
	"haw",
	"he",
	"hi",
	"hr",
	"ht",
	"hu",
	"hy",
	"id",
	"ig",
	"is",
	"it",
	"ja",
	"ka",
	"kk",
	"kl",
	"km",
	"kn",
	"ko",
	"ku",
	"ky",
	"lb",
	"lo",
	"lt",
	"lv",
	"mg",
	"mi",
	"mk",
	"ml",
	"mn",
	"mr",
	"ms",
	"mt",
	"my",
	"nb",
	"ne",
	"nl",
	"nn",
	"no",
	"ny",
	"or",
	"pa",
	"pl",
	"ps",
	"pt",
	"qu",
	"ro",
	"ru",
	"rw",
	"sd",
	"sh",
	"si",
	"sk",
	"sl",
	"sm",
	"sn",
	"so",
	"sq",
	"sr",
	"st",
	"su",
	"sv",
	"sw",
	"ta",
	"te",
	"tg",
	"th",
	"tk",
	"tl",
	"tn",
	"tr",
	"tt",
	"ug",
	"uk",
	"ur",
	"uz",
	"ve",
	"vi",
	"xh",
	"yi",
	"yo",
	"zh",
	"zu",
];
const targetLanguageCode = process.argv[3];
const onlyCopy = process.argv[4] === "-c" || process.argv[4] === "-C";
let tileSleep = 0;

const dirPath = process.argv[2];
const processedFiles = new Set();
processFiles(dirPath, processedFiles);
