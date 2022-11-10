"use strict";
(() => {
var exports = {};
exports.id = 271;
exports.ids = [271];
exports.modules = {

/***/ 4403:
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
 */ const source = "---\ntitle: Testing\ndescription: Quidem magni aut exercitationem maxime rerum eos.\n---\n\nQuasi sapiente voluptates aut minima non doloribus similique quisquam. In quo expedita ipsum nostrum corrupti incidunt. Et aut eligendi ea perferendis.\n\n---\n\n## Quis vel iste dicta\n\nSit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur.\n\n### Et pariatur ab quas\n\nSit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur quaerat exercitationem. Consequatur et cum atque mollitia qui quia necessitatibus.\n\n```js\n/** @type {import('@tailwindlabs/lorem').ipsum} */\nexport default {\n  lorem: 'ipsum',\n  dolor: ['sit', 'amet', 'consectetur'],\n  adipiscing: {\n    elit: true,\n  },\n}\n```\n\nPossimus saepe veritatis sint nobis et quam eos. Architecto consequatur odit perferendis fuga eveniet possimus rerum cumque. Ea deleniti voluptatum deserunt voluptatibus ut non iste. Provident nam asperiores vel laboriosam omnis ducimus enim nesciunt quaerat. Minus tempora cupiditate est quod.\n\n### Natus aspernatur iste\n\nSit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur quaerat exercitationem. Consequatur et cum atque mollitia qui quia necessitatibus.\n\nVoluptas beatae omnis omnis voluptas. Cum architecto ab sit ad eaque quas quia distinctio. Molestiae aperiam qui quis deleniti soluta quia qui. Dolores nostrum blanditiis libero optio id. Mollitia ad et asperiores quas saepe alias.\n\n---\n\n## Quos porro ut molestiae\n\nSit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur.\n\n### Voluptatem quas possimus\n\nSit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur quaerat exercitationem. Consequatur et cum atque mollitia qui quia necessitatibus.\n\nPossimus saepe veritatis sint nobis et quam eos. Architecto consequatur odit perferendis fuga eveniet possimus rerum cumque. Ea deleniti voluptatum deserunt voluptatibus ut non iste. Provident nam asperiores vel laboriosam omnis ducimus enim nesciunt quaerat. Minus tempora cupiditate est quod.\n\n### Id vitae minima\n\nSit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur quaerat exercitationem. Consequatur et cum atque mollitia qui quia necessitatibus.\n\nVoluptas beatae omnis omnis voluptas. Cum architecto ab sit ad eaque quas quia distinctio. Molestiae aperiam qui quis deleniti soluta quia qui. Dolores nostrum blanditiis libero optio id. Mollitia ad et asperiores quas saepe alias.\n\n---\n\n## Vitae laborum maiores\n\nSit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur.\n\n### Corporis exercitationem\n\nSit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur quaerat exercitationem. Consequatur et cum atque mollitia qui quia necessitatibus.\n\nPossimus saepe veritatis sint nobis et quam eos. Architecto consequatur odit perferendis fuga eveniet possimus rerum cumque. Ea deleniti voluptatum deserunt voluptatibus ut non iste. Provident nam asperiores vel laboriosam omnis ducimus enim nesciunt quaerat. Minus tempora cupiditate est quod.\n\n### Reprehenderit magni\n\nSit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur quaerat exercitationem. Consequatur et cum atque mollitia qui quia necessitatibus.\n\nVoluptas beatae omnis omnis voluptas. Cum architecto ab sit ad eaque quas quia distinctio. Molestiae aperiam qui quis deleniti soluta quia qui. Dolores nostrum blanditiis libero optio id. Mollitia ad et asperiores quas saepe alias.\n";
const filepath = "\\docs\\testing.md";
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,266,765], () => (__webpack_exec__(4403)));
module.exports = __webpack_exports__;

})();