"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 8979:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MarkdocComponent),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(626);
/* harmony import */ var _markdoc_markdoc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5360);
/* harmony import */ var _markdoc_markdoc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_markdoc_markdoc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_Zod_Desktop_Rubicon_docs_overhaul_node_modules_markdoc_next_js_src_runtime_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4266);
/* harmony import */ var C_Users_Zod_Desktop_Rubicon_docs_overhaul_markdoc_tags_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3199);
/* harmony import */ var C_Users_Zod_Desktop_Rubicon_docs_overhaul_markdoc_nodes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1676);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_yaml__WEBPACK_IMPORTED_MODULE_1__]);
js_yaml__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// renderers is imported separately so Markdoc isn't sent to the client


/**
 * Schema is imported like this so end-user's code is compiled using build-in babel/webpack configs.
 * This enables typescript/ESnext support
 */ const config = {};


const functions = {};
const schema = {
    tags: C_Users_Zod_Desktop_Rubicon_docs_overhaul_markdoc_tags_js__WEBPACK_IMPORTED_MODULE_4__ ? C_Users_Zod_Desktop_Rubicon_docs_overhaul_markdoc_tags_js__WEBPACK_IMPORTED_MODULE_4__["default"] || C_Users_Zod_Desktop_Rubicon_docs_overhaul_markdoc_tags_js__WEBPACK_IMPORTED_MODULE_4__ : {},
    nodes: C_Users_Zod_Desktop_Rubicon_docs_overhaul_markdoc_nodes_js__WEBPACK_IMPORTED_MODULE_5__ ? C_Users_Zod_Desktop_Rubicon_docs_overhaul_markdoc_nodes_js__WEBPACK_IMPORTED_MODULE_5__["default"] || C_Users_Zod_Desktop_Rubicon_docs_overhaul_markdoc_nodes_js__WEBPACK_IMPORTED_MODULE_5__ : {},
    functions: functions ? functions.default || functions : {},
    ...config ? config.default || config : {}
};
/**
 * Source will never change at runtime, so parse happens at the file root
 */ const source = '---\ntitle: Overview\npageTitle: Overview\ndescription: Welcome to Rubicon guides and developer documentation\n---\n\nWelcome to Rubicon guides and developer documentation {% .lead %}\n\n{% quick-links %}\n\n{% quick-link title="New to Rubicon?" icon="installation" href="/" description="Visit our Frequently Asked Questions" /%}\n\n{% quick-link title="Traders" icon="presets" href="/" description="Use the Rubicon protocol to trade ERC-20 tokens with Limit and Market Orders. Visit the guides for the Swap and Trade interfaces" /%}\n\n{% quick-link title="Plugins" icon="plugins" href="/" description="Extend the library with third-party plugins or write your own." /%}\n\n{% quick-link title="API reference" icon="theming" href="/" description="Learn to easily customize and modify your app\'s visual design to fit your brand." /%}\n\n{% /quick-links %}\n\nPossimus saepe veritatis sint nobis et quam eos. Architecto consequatur odit perferendis fuga eveniet possimus rerum cumque. Ea deleniti voluptatum deserunt voluptatibus ut non iste.\n\n---\n\n## Quick start\n\nSit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur.\n\n### Installing dependencies\n\nSit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur quaerat exercitationem. Consequatur et cum atque mollitia qui quia necessitatibus.\n\n```shell\nnpm install @tailwindlabs/cache-advance\n```\n\nPossimus saepe veritatis sint nobis et quam eos. Architecto consequatur odit perferendis fuga eveniet possimus rerum cumque. Ea deleniti voluptatum deserunt voluptatibus ut non iste. Provident nam asperiores vel laboriosam omnis ducimus enim nesciunt quaerat. Minus tempora cupiditate est quod.\n\n{% callout type="warning" title="Oh no! Something bad happened!" %}\nThis is what a disclaimer message looks like. You might want to include inline `code` in it. Or maybe you’ll want to include a [link](/) in it. I don’t think we should get too carried away with other scenarios like lists or tables — that would be silly.\n{% /callout %}\n\n### Configuring the library\n\nSit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur quaerat exercitationem. Consequatur et cum atque mollitia qui quia necessitatibus.\n\n```js\n// cache-advance.config.js\nexport default {\n  strategy: \'predictive\',\n  engine: {\n    cpus: 12,\n    backups: [\'./storage/cache.wtf\'],\n  },\n}\n```\n\nPossimus saepe veritatis sint nobis et quam eos. Architecto consequatur odit perferendis fuga eveniet possimus rerum cumque. Ea deleniti voluptatum deserunt voluptatibus ut non iste. Provident nam asperiores vel laboriosam omnis ducimus enim nesciunt quaerat. Minus tempora cupiditate est quod.\n\n{% callout title="You should know!" %}\nThis is what a disclaimer message looks like. You might want to include inline `code` in it. Or maybe you’ll want to include a [link](/) in it. I don’t think we should get too carried away with other scenarios like lists or tables — that would be silly.\n{% /callout %}\n\n---\n\n## Basic usage\n\nPraesentium laudantium magni. Consequatur reiciendis aliquid nihil iusto ut in et. Quisquam ut et aliquid occaecati. Culpa veniam aut et voluptates amet perspiciatis. Qui exercitationem in qui. Vel qui dignissimos sit quae distinctio.\n\n### Your first cache\n\nMinima vel non iste debitis. Consequatur repudiandae et quod accusamus sit molestias consequatur aperiam. Et sequi ipsa eum voluptatibus ipsam. Et quisquam ut.\n\nQui quae esse aspernatur fugit possimus. Quam sed molestiae temporibus. Eum perferendis dignissimos provident ea et. Et repudiandae quasi accusamus consequatur dolore nobis. Quia reiciendis necessitatibus a blanditiis iste quia. Ut quis et amet praesentium sapiente.\n\nAtque eos laudantium. Optio odit aspernatur consequuntur corporis soluta quidem sunt aut doloribus. Laudantium assumenda commodi.\n\n### Clearing the cache\n\nVel aut velit sit dolor aut suscipit at veritatis voluptas. Laudantium tempore praesentium. Qui ut voluptatem.\n\nEa est autem fugiat velit esse a alias earum. Dolore non amet soluta eos libero est. Consequatur qui aliquam qui odit eligendi ut impedit illo dignissimos.\n\nUt dolore qui aut nam. Natus temporibus nisi voluptatum labore est ex error vel officia. Vero repellendus ut. Suscipit voluptate et placeat. Eius quo corporis ab et consequatur quisquam. Nihil officia facere dolorem occaecati alias deleniti deleniti in.\n\n### Adding middleware\n\nOfficia nobis tempora maiores id iusto magni reprehenderit velit. Quae dolores inventore molestiae perspiciatis aut. Quis sequi officia quasi rem officiis officiis. Nesciunt ut cupiditate. Sunt aliquid explicabo enim ipsa eum recusandae. Vitae sunt eligendi et non beatae minima aut.\n\nHarum perferendis aut qui quibusdam tempore laboriosam voluptatum qui sed. Amet error amet totam exercitationem aut corporis accusantium dolorum. Perspiciatis aut animi et. Sed unde error ut aut rerum.\n\nUt quo libero aperiam mollitia est repudiandae quaerat corrupti explicabo. Voluptas accusantium sed et doloribus voluptatem fugiat a mollitia. Numquam est magnam dolorem asperiores fugiat. Soluta et fuga amet alias temporibus quasi velit. Laudantium voluptatum perspiciatis doloribus quasi facere. Eveniet deleniti veniam et quia veritatis minus veniam perspiciatis.\n\n---\n\n## Getting help\n\nConsequuntur et aut quisquam et qui consequatur eligendi. Necessitatibus dolorem sit. Excepturi cumque quibusdam soluta ullam rerum voluptatibus. Porro illo sequi consequatur nisi numquam nisi autem. Ut necessitatibus aut. Veniam ipsa voluptatem sed.\n\n### Submit an issue\n\nInventore et aut minus ut voluptatem nihil commodi doloribus consequatur. Facilis perferendis nihil sit aut aspernatur iure ut dolores et. Aspernatur odit dignissimos. Aut qui est sint sint.\n\nFacere aliquam qui. Dolorem officia ipsam adipisci qui molestiae. Error voluptatem reprehenderit ex.\n\nConsequatur enim quia maiores aperiam et ipsum dicta. Quam ut sit facere sit quae. Eligendi veritatis aut ut veritatis iste ut adipisci illo.\n\n### Join the community\n\nPraesentium facilis iste aliquid quo quia a excepturi. Fuga reprehenderit illo sequi voluptatem voluptatem omnis. Id quia consequatur rerum consectetur eligendi et omnis. Voluptates iusto labore possimus provident praesentium id vel harum quisquam. Voluptatem provident corrupti.\n\nEum et ut. Qui facilis est ipsa. Non facere quia sequi commodi autem. Dicta autem sit sequi omnis impedit. Eligendi amet dolorum magnam repudiandae in a.\n\nMolestiae iusto ut exercitationem dolorem unde iusto tempora atque nihil. Voluptatem velit facere laboriosam nobis ea. Consequatur rerum velit ipsum ipsam. Et qui saepe consequatur minima laborum tempore voluptatum et. Quia eveniet eaque sequi consequatur nihil eos.\n';
const filepath = "\\index.md";
const ast = _markdoc_markdoc__WEBPACK_IMPORTED_MODULE_2___default().parse(source);
/**
 * Like the AST, frontmatter won't change at runtime, so it is loaded at file root.
 * This unblocks future features, such a per-page dataFetchingFunction.
 */ const frontmatter = ast.attributes.frontmatter ? js_yaml__WEBPACK_IMPORTED_MODULE_1__["default"].load(ast.attributes.frontmatter) : {};
const { components , ...rest } = (0,C_Users_Zod_Desktop_Rubicon_docs_overhaul_node_modules_markdoc_next_js_src_runtime_js__WEBPACK_IMPORTED_MODULE_3__/* .getSchema */ .J)(schema);
async function getStaticProps(context) {
    const partials = {};
    // Ensure Node.transformChildren is available
    Object.keys(partials).forEach((key)=>{
        partials[key] = _markdoc_markdoc__WEBPACK_IMPORTED_MODULE_2___default().parse(partials[key]);
    });
    const cfg = {
        ...rest,
        variables: {
            ...rest ? rest.variables : {},
            // user can't override this namespace
            markdoc: {
                frontmatter
            },
            // Allows users to eject from Markdoc rendering and pass in dynamic variables via getServerSideProps
            ...context.variables || {}
        },
        partials,
        source
    };
    /**
   * transform must be called in dataFetchingFunction to support server-side rendering while
   * accessing variables on the server
   */ const content = _markdoc_markdoc__WEBPACK_IMPORTED_MODULE_2___default().transform(ast, cfg);
    return {
        // Removes undefined
        props: JSON.parse(JSON.stringify({
            markdoc: {
                content,
                frontmatter,
                file: {
                    path: filepath
                }
            }
        }))
    };
}
function MarkdocComponent(props) {
    // Only execute HMR code in development
    return _markdoc_markdoc__WEBPACK_IMPORTED_MODULE_2__.renderers.react(props.markdoc.content, (react__WEBPACK_IMPORTED_MODULE_0___default()), {
        components: {
            ...components,
            // Allows users to override default components at runtime, via their _app
            ...props.components
        }
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5360:
/***/ ((module) => {

module.exports = require("@markdoc/markdoc");

/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 7096:
/***/ ((module) => {

module.exports = require("prism-react-renderer");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 626:
/***/ ((module) => {

module.exports = import("js-yaml");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,266,765], () => (__webpack_exec__(8979)));
module.exports = __webpack_exports__;

})();