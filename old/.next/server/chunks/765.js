"use strict";
exports.id = 765;
exports.ids = [765];
exports.modules = {

/***/ 1676:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ markdoc_nodes)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "prism-react-renderer"
var external_prism_react_renderer_ = __webpack_require__(7096);
var external_prism_react_renderer_default = /*#__PURE__*/__webpack_require__.n(external_prism_react_renderer_);
;// CONCATENATED MODULE: ./src/components/Fence.jsx



function Fence({ children , language  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx((external_prism_react_renderer_default()), {
        ...external_prism_react_renderer_.defaultProps,
        code: children.trimEnd(),
        language: language,
        theme: undefined,
        children: ({ className , style , tokens , getTokenProps  })=>/*#__PURE__*/ jsx_runtime_.jsx("pre", {
                className: className,
                style: style,
                children: /*#__PURE__*/ jsx_runtime_.jsx("code", {
                    children: tokens.map((line, lineIndex)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
                            children: [
                                line.filter((token)=>!token.empty).map((token, tokenIndex)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        ...getTokenProps({
                                            token
                                        })
                                    }, tokenIndex)),
                                "\n"
                            ]
                        }, lineIndex))
                })
            })
    });
}

// EXTERNAL MODULE: external "@markdoc/markdoc"
var markdoc_ = __webpack_require__(5360);
;// CONCATENATED MODULE: ./markdoc/nodes.js


const nodes = {
    document: {
        render: undefined
    },
    th: {
        ...markdoc_.nodes.th,
        attributes: {
            ...markdoc_.nodes.th.attributes,
            scope: {
                type: String,
                default: "col"
            }
        }
    },
    fence: {
        render: Fence,
        attributes: {
            language: {
                type: String
            }
        }
    }
};
/* harmony default export */ const markdoc_nodes = (nodes);


/***/ }),

/***/ 3199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ markdoc_tags)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/icons/InstallationIcon.jsx


function InstallationIcon({ id , color  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Gradient, {
                        id: `${id}-gradient`,
                        color: color,
                        gradientTransform: "matrix(0 21 -21 0 12 3)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Gradient, {
                        id: `${id}-gradient-dark`,
                        color: color,
                        gradientTransform: "matrix(0 21 -21 0 16 7)"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LightMode, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                        cx: 12,
                        cy: 12,
                        r: 12,
                        fill: `url(#${id}-gradient)`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "m8 8 9 21 2-10 10-2L8 8Z",
                        fillOpacity: 0.5,
                        className: "fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]",
                        strokeWidth: 2,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(DarkMode, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "m4 4 10.286 24 2.285-11.429L28 14.286 4 4Z",
                    fill: `url(#${id}-gradient-dark)`,
                    stroke: `url(#${id}-gradient-dark)`,
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/icons/LightbulbIcon.jsx


function LightbulbIcon({ id , color  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Gradient, {
                        id: `${id}-gradient`,
                        color: color,
                        gradientTransform: "matrix(0 21 -21 0 20 11)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Gradient, {
                        id: `${id}-gradient-dark`,
                        color: color,
                        gradientTransform: "matrix(0 24.5001 -19.2498 0 16 5.5)"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LightMode, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                        cx: 20,
                        cy: 20,
                        r: 12,
                        fill: `url(#${id}-gradient)`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M20 24.995c0-1.855 1.094-3.501 2.427-4.792C24.61 18.087 26 15.07 26 12.231 26 7.133 21.523 3 16 3S6 7.133 6 12.23c0 2.84 1.389 5.857 3.573 7.973C10.906 21.494 12 23.14 12 24.995V27a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.005Z",
                        className: "fill-[var(--icon-background)]",
                        fillOpacity: 0.5
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M25 12.23c0 2.536-1.254 5.303-3.269 7.255l1.391 1.436c2.354-2.28 3.878-5.547 3.878-8.69h-2ZM16 4c5.047 0 9 3.759 9 8.23h2C27 6.508 21.998 2 16 2v2Zm-9 8.23C7 7.76 10.953 4 16 4V2C10.002 2 5 6.507 5 12.23h2Zm3.269 7.255C8.254 17.533 7 14.766 7 12.23H5c0 3.143 1.523 6.41 3.877 8.69l1.392-1.436ZM13 27v-2.005h-2V27h2Zm1 1a1 1 0 0 1-1-1h-2a3 3 0 0 0 3 3v-2Zm4 0h-4v2h4v-2Zm1-1a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2Zm0-2.005V27h2v-2.005h-2ZM8.877 20.921C10.132 22.136 11 23.538 11 24.995h2c0-2.253-1.32-4.143-2.731-5.51L8.877 20.92Zm12.854-1.436C20.32 20.852 19 22.742 19 24.995h2c0-1.457.869-2.859 2.122-4.074l-1.391-1.436Z",
                        className: "fill-[var(--icon-foreground)]"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M20 26a1 1 0 1 0 0-2v2Zm-8-2a1 1 0 1 0 0 2v-2Zm2 0h-2v2h2v-2Zm1 1V13.5h-2V25h2Zm-5-11.5v1h2v-1h-2Zm3.5 4.5h5v-2h-5v2Zm8.5-3.5v-1h-2v1h2ZM20 24h-2v2h2v-2Zm-2 0h-4v2h4v-2Zm-1-10.5V25h2V13.5h-2Zm2.5-2.5a2.5 2.5 0 0 0-2.5 2.5h2a.5.5 0 0 1 .5-.5v-2Zm2.5 2.5a2.5 2.5 0 0 0-2.5-2.5v2a.5.5 0 0 1 .5.5h2ZM18.5 18a3.5 3.5 0 0 0 3.5-3.5h-2a1.5 1.5 0 0 1-1.5 1.5v2ZM10 14.5a3.5 3.5 0 0 0 3.5 3.5v-2a1.5 1.5 0 0 1-1.5-1.5h-2Zm2.5-3.5a2.5 2.5 0 0 0-2.5 2.5h2a.5.5 0 0 1 .5-.5v-2Zm2.5 2.5a2.5 2.5 0 0 0-2.5-2.5v2a.5.5 0 0 1 .5.5h2Z",
                        className: "fill-[var(--icon-foreground)]"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(DarkMode, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M16 2C10.002 2 5 6.507 5 12.23c0 3.144 1.523 6.411 3.877 8.691.75.727 1.363 1.52 1.734 2.353.185.415.574.726 1.028.726H12a1 1 0 0 0 1-1v-4.5a.5.5 0 0 0-.5-.5A3.5 3.5 0 0 1 9 14.5V14a3 3 0 1 1 6 0v9a1 1 0 1 0 2 0v-9a3 3 0 1 1 6 0v.5a3.5 3.5 0 0 1-3.5 3.5.5.5 0 0 0-.5.5V23a1 1 0 0 0 1 1h.36c.455 0 .844-.311 1.03-.726.37-.833.982-1.626 1.732-2.353 2.354-2.28 3.878-5.547 3.878-8.69C27 6.507 21.998 2 16 2Zm5 25a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1 3 3 0 0 0 3 3h4a3 3 0 0 0 3-3Zm-8-13v1.5a.5.5 0 0 1-.5.5 1.5 1.5 0 0 1-1.5-1.5V14a1 1 0 1 1 2 0Zm6.5 2a.5.5 0 0 1-.5-.5V14a1 1 0 1 1 2 0v.5a1.5 1.5 0 0 1-1.5 1.5Z",
                    fill: `url(#${id}-gradient-dark)`
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/icons/PluginsIcon.jsx


function PluginsIcon({ id , color  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Gradient, {
                        id: `${id}-gradient`,
                        color: color,
                        gradientTransform: "matrix(0 21 -21 0 20 11)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Gradient, {
                        id: `${id}-gradient-dark-1`,
                        color: color,
                        gradientTransform: "matrix(0 22.75 -22.75 0 16 6.25)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Gradient, {
                        id: `${id}-gradient-dark-2`,
                        color: color,
                        gradientTransform: "matrix(0 14 -14 0 16 10)"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LightMode, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                        cx: 20,
                        cy: 20,
                        r: 12,
                        fill: `url(#${id}-gradient)`
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                        fillOpacity: 0.5,
                        className: "fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]",
                        strokeWidth: 2,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M3 9v14l12 6V15L3 9Z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M27 9v14l-12 6V15l12-6Z"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M11 4h8v2l6 3-10 6L5 9l6-3V4Z",
                        fillOpacity: 0.5,
                        className: "fill-[var(--icon-background)]"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                        className: "stroke-[color:var(--icon-foreground)]",
                        strokeWidth: 2,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M20 5.5 27 9l-12 6L3 9l7-3.5"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M20 5c0 1.105-2.239 2-5 2s-5-.895-5-2m10 0c0-1.105-2.239-2-5-2s-5 .895-5 2m10 0v3c0 1.105-2.239 2-5 2s-5-.895-5-2V5"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DarkMode, {
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M17.676 3.38a3.887 3.887 0 0 0-3.352 0l-9 4.288C3.907 8.342 3 9.806 3 11.416v9.168c0 1.61.907 3.073 2.324 3.748l9 4.288a3.887 3.887 0 0 0 3.352 0l9-4.288C28.093 23.657 29 22.194 29 20.584v-9.168c0-1.61-.907-3.074-2.324-3.748l-9-4.288Z",
                        stroke: `url(#${id}-gradient-dark-1)`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M16.406 8.087a.989.989 0 0 0-.812 0l-7 3.598A1.012 1.012 0 0 0 8 12.61v6.78c0 .4.233.762.594.925l7 3.598a.989.989 0 0 0 .812 0l7-3.598c.361-.163.594-.525.594-.925v-6.78c0-.4-.233-.762-.594-.925l-7-3.598Z",
                        fill: `url(#${id}-gradient-dark-2)`,
                        stroke: `url(#${id}-gradient-dark-2)`
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/icons/PresetsIcon.jsx


function PresetsIcon({ id , color  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Gradient, {
                        id: `${id}-gradient`,
                        color: color,
                        gradientTransform: "matrix(0 21 -21 0 20 3)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Gradient, {
                        id: `${id}-gradient-dark`,
                        color: color,
                        gradientTransform: "matrix(0 22.75 -22.75 0 16 6.25)"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LightMode, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                        cx: 20,
                        cy: 12,
                        r: 12,
                        fill: `url(#${id}-gradient)`
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                        className: "fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]",
                        fillOpacity: 0.5,
                        strokeWidth: 2,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M3 5v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M18 17v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V17a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2Z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M18 5v4a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2Z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M3 25v2a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DarkMode, {
                fill: `url(#${id}-gradient-dark)`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M3 17V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm16 10v-9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2Zm0-23v5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1ZM3 28v-3a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M2 4v13h2V4H2Zm2-2a2 2 0 0 0-2 2h2V2Zm8 0H4v2h8V2Zm2 2a2 2 0 0 0-2-2v2h2Zm0 13V4h-2v13h2Zm-2 2a2 2 0 0 0 2-2h-2v2Zm-8 0h8v-2H4v2Zm-2-2a2 2 0 0 0 2 2v-2H2Zm16 1v9h2v-9h-2Zm3-3a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1v-2Zm6 0h-6v2h6v-2Zm3 3a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2Zm0 9v-9h-2v9h2Zm-3 3a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2Zm-6 0h6v-2h-6v2Zm-3-3a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1h-2Zm2-18V4h-2v5h2Zm0 0h-2a2 2 0 0 0 2 2V9Zm8 0h-8v2h8V9Zm0 0v2a2 2 0 0 0 2-2h-2Zm0-5v5h2V4h-2Zm0 0h2a2 2 0 0 0-2-2v2Zm-8 0h8V2h-8v2Zm0 0V2a2 2 0 0 0-2 2h2ZM2 25v3h2v-3H2Zm2-2a2 2 0 0 0-2 2h2v-2Zm9 0H4v2h9v-2Zm2 2a2 2 0 0 0-2-2v2h2Zm0 3v-3h-2v3h2Zm-2 2a2 2 0 0 0 2-2h-2v2Zm-9 0h9v-2H4v2Zm-2-2a2 2 0 0 0 2 2v-2H2Z"
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/icons/ThemingIcon.jsx


function ThemingIcon({ id , color  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Gradient, {
                        id: `${id}-gradient`,
                        color: color,
                        gradientTransform: "matrix(0 21 -21 0 12 11)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Gradient, {
                        id: `${id}-gradient-dark`,
                        color: color,
                        gradientTransform: "matrix(0 24.5 -24.5 0 16 5.5)"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LightMode, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                        cx: 12,
                        cy: 20,
                        r: 12,
                        fill: `url(#${id}-gradient)`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M27 12.13 19.87 5 13 11.87v14.26l14-14Z",
                        className: "fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]",
                        fillOpacity: 0.5,
                        strokeWidth: 2,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M3 3h10v22a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V3Z",
                        className: "fill-[var(--icon-background)]",
                        fillOpacity: 0.5
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M3 9v16a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4V9M3 9V3h10v6M3 9h10M3 15h10M3 21h10",
                        className: "stroke-[color:var(--icon-foreground)]",
                        strokeWidth: 2,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M29 29V19h-8.5L13 26c0 1.5-2.5 3-5 3h21Z",
                        fillOpacity: 0.5,
                        className: "fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]",
                        strokeWidth: 2,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(DarkMode, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3 2a1 1 0 0 0-1 1v21a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H3Zm16.752 3.293a1 1 0 0 0-1.593.244l-1.045 2A1 1 0 0 0 17 8v13a1 1 0 0 0 1.71.705l7.999-8.045a1 1 0 0 0-.002-1.412l-6.955-6.955ZM26 18a1 1 0 0 0-.707.293l-10 10A1 1 0 0 0 16 30h13a1 1 0 0 0 1-1V19a1 1 0 0 0-1-1h-3ZM5 18a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Zm-1-5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm1-7a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H5Z",
                    fill: `url(#${id}-gradient-dark)`
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/icons/WarningIcon.jsx


function WarningIcon({ id , color  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Gradient, {
                        id: `${id}-gradient`,
                        color: color,
                        gradientTransform: "rotate(65.924 1.519 20.92) scale(25.7391)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Gradient, {
                        id: `${id}-gradient-dark`,
                        color: color,
                        gradientTransform: "matrix(0 24.5 -24.5 0 16 5.5)"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LightMode, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                        cx: 20,
                        cy: 20,
                        r: 12,
                        fill: `url(#${id}-gradient)`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M3 16c0 7.18 5.82 13 13 13s13-5.82 13-13S23.18 3 16 3 3 8.82 3 16Z",
                        fillOpacity: 0.5,
                        className: "fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]",
                        strokeWidth: 2,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "m15.408 16.509-1.04-5.543a1.66 1.66 0 1 1 3.263 0l-1.039 5.543a.602.602 0 0 1-1.184 0Z",
                        className: "fill-[var(--icon-foreground)] stroke-[color:var(--icon-foreground)]",
                        strokeWidth: 2,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M16 23a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
                        fillOpacity: 0.5,
                        stroke: "currentColor",
                        className: "fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]",
                        strokeWidth: 2,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(DarkMode, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M2 16C2 8.268 8.268 2 16 2s14 6.268 14 14-6.268 14-14 14S2 23.732 2 16Zm11.386-4.85a2.66 2.66 0 1 1 5.228 0l-1.039 5.543a1.602 1.602 0 0 1-3.15 0l-1.04-5.543ZM16 20a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z",
                    fill: `url(#${id}-gradient-dark)`
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Icon.jsx









const icons = {
    installation: InstallationIcon,
    presets: PresetsIcon,
    plugins: PluginsIcon,
    theming: ThemingIcon,
    lightbulb: LightbulbIcon,
    warning: WarningIcon
};
const iconStyles = {
    blue: "[--icon-foreground:theme(colors.slate.900)] [--icon-background:theme(colors.white)]",
    amber: "[--icon-foreground:theme(colors.amber.900)] [--icon-background:theme(colors.amber.100)]"
};
function Icon({ color ="blue" , icon , className , ...props }) {
    let id = (0,external_react_.useId)();
    let IconComponent = icons[icon];
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 32 32",
        fill: "none",
        className: external_clsx_default()(className, iconStyles[color]),
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx(IconComponent, {
            id: id,
            color: color
        })
    });
}
const gradients = {
    blue: [
        {
            stopColor: "#0EA5E9"
        },
        {
            stopColor: "#22D3EE",
            offset: ".527"
        },
        {
            stopColor: "#818CF8",
            offset: 1
        }, 
    ],
    amber: [
        {
            stopColor: "#FDE68A",
            offset: ".08"
        },
        {
            stopColor: "#F59E0B",
            offset: ".837"
        }, 
    ]
};
function Gradient({ color ="blue" , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("radialGradient", {
        cx: 0,
        cy: 0,
        r: 1,
        gradientUnits: "userSpaceOnUse",
        ...props,
        children: gradients[color].map((stop, stopIndex)=>/*#__PURE__*/ jsx_runtime_.jsx("stop", {
                ...stop
            }, stopIndex))
    });
}
function LightMode({ className , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("g", {
        className: external_clsx_default()("dark:hidden", className),
        ...props
    });
}
function DarkMode({ className , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("g", {
        className: external_clsx_default()("hidden dark:inline", className),
        ...props
    });
}

;// CONCATENATED MODULE: ./src/components/Callout.jsx



const styles = {
    note: {
        container: "bg-sky-50 dark:bg-slate-800/60 dark:ring-1 dark:ring-slate-300/10",
        title: "text-sky-900 dark:text-sky-400",
        body: "text-sky-800 [--tw-prose-background:theme(colors.sky.50)] prose-a:text-sky-900 prose-code:text-sky-900 dark:text-slate-300 dark:prose-code:text-slate-300"
    },
    warning: {
        container: "bg-amber-50 dark:bg-slate-800/60 dark:ring-1 dark:ring-slate-300/10",
        title: "text-amber-900 dark:text-amber-500",
        body: "text-amber-800 [--tw-prose-underline:theme(colors.amber.400)] [--tw-prose-background:theme(colors.amber.50)] prose-a:text-amber-900 prose-code:text-amber-900 dark:text-slate-300 dark:[--tw-prose-underline:theme(colors.sky.700)] dark:prose-code:text-slate-300"
    }
};
const Callout_icons = {
    note: (props)=>/*#__PURE__*/ jsx_runtime_.jsx(Icon, {
            icon: "lightbulb",
            ...props
        }),
    warning: (props)=>/*#__PURE__*/ jsx_runtime_.jsx(Icon, {
            icon: "warning",
            color: "amber",
            ...props
        })
};
function Callout({ type ="note" , title , children  }) {
    let IconComponent = Callout_icons[type];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_clsx_default()("my-8 flex rounded-3xl p-6", styles[type].container),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(IconComponent, {
                className: "h-8 w-8 flex-none"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "ml-4 flex-auto",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: external_clsx_default()("m-0 font-display text-xl", styles[type].title),
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: external_clsx_default()("prose mt-2.5", styles[type].body),
                        children: children
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/QuickLinks.jsx



function QuickLinks({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "not-prose my-12 grid grid-cols-1 gap-6 sm:grid-cols-2",
        children: children
    });
}
function QuickLink({ title , description , href , icon  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "group relative rounded-xl border border-slate-200 dark:border-slate-800",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative overflow-hidden rounded-xl p-6",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                        icon: icon,
                        className: "h-8 w-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "mt-4 font-display text-base text-slate-900 dark:text-white",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                            href: href,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "absolute -inset-px rounded-xl"
                                }),
                                title
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "mt-1 text-sm text-slate-700 dark:text-slate-400",
                        children: description
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./markdoc/tags.js



const tags = {
    callout: {
        attributes: {
            title: {
                type: String
            },
            type: {
                type: String,
                default: "note",
                matches: [
                    "note",
                    "warning"
                ],
                errorLevel: "critical"
            }
        },
        render: Callout
    },
    figure: {
        selfClosing: true,
        attributes: {
            src: {
                type: String
            },
            alt: {
                type: String
            },
            caption: {
                type: String
            }
        },
        render: ({ src , alt ="" , caption  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("figure", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: src,
                        alt: alt
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("figcaption", {
                        children: caption
                    })
                ]
            })
    },
    "quick-links": {
        render: QuickLinks
    },
    "quick-link": {
        selfClosing: true,
        render: QuickLink,
        attributes: {
            title: {
                type: String
            },
            description: {
                type: String
            },
            icon: {
                type: String
            },
            href: {
                type: String
            }
        }
    }
};
/* harmony default export */ const markdoc_tags = (tags);


/***/ })

};
;