"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 461:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4079);
/* harmony import */ var _components_MobileNavigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6067);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(929);
/* harmony import */ var _components_Prose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1104);
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8765);
/* harmony import */ var _components_ThemeSelector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2651);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_MobileNavigation__WEBPACK_IMPORTED_MODULE_6__, _components_ThemeSelector__WEBPACK_IMPORTED_MODULE_10__]);
([_components_MobileNavigation__WEBPACK_IMPORTED_MODULE_6__, _components_ThemeSelector__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const navigation = [
    {
        title: "Introduction",
        links: [
            {
                title: "Overview",
                href: "/docs/introduction/overview"
            },
            {
                title: "Installation",
                href: "/docs/installation"
            }, 
        ]
    },
    {
        title: "Core concepts",
        links: [
            {
                title: "Understanding caching",
                href: "/docs/understanding-caching"
            },
            {
                title: "Predicting user behavior",
                href: "/docs/predicting-user-behavior"
            },
            {
                title: "Basics of time-travel",
                href: "/docs/basics-of-time-travel"
            },
            {
                title: "Introduction to string theory",
                href: "/docs/introduction-to-string-theory"
            },
            {
                title: "The butterfly effect",
                href: "/docs/the-butterfly-effect"
            }, 
        ]
    },
    {
        title: "Advanced guides",
        links: [
            {
                title: "Writing plugins",
                href: "/docs/writing-plugins"
            },
            {
                title: "Neuralink integration",
                href: "/docs/neuralink-integration"
            },
            {
                title: "Temporal paradoxes",
                href: "/docs/temporal-paradoxes"
            },
            {
                title: "Testing",
                href: "/docs/testing"
            },
            {
                title: "Compile-time caching",
                href: "/docs/compile-time-caching"
            },
            {
                title: "Predictive data generation",
                href: "/docs/predictive-data-generation"
            }, 
        ]
    },
    {
        title: "Contributing",
        links: [
            {
                title: "How to contribute",
                href: "/docs/how-to-contribute"
            },
            {
                title: "Architecture guide",
                href: "/docs/architecture-guide"
            },
            {
                title: "Design principles",
                href: "/docs/design-principles"
            }, 
        ]
    }, 
];
function GitHubIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 16 16",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
        })
    });
}
function Header({ navigation  }) {
    let { 0: isScrolled , 1: setIsScrolled  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        function onScroll() {
            setIsScrolled(window.scrollY > 0);
        }
        onScroll();
        window.addEventListener("scroll", onScroll, {
            passive: true
        });
        return ()=>{
            window.removeEventListener("scroll", onScroll, {
                passive: true
            });
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: clsx__WEBPACK_IMPORTED_MODULE_4___default()("sticky top-0 z-50 flex flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 dark:shadow-none sm:px-6 lg:px-8", isScrolled ? "dark:bg-slate-900/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75" : "dark:bg-transparent"),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex mr-6 lg:hidden",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MobileNavigation__WEBPACK_IMPORTED_MODULE_6__/* .MobileNavigation */ .$, {
                    navigation: navigation
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative flex items-center flex-grow basis-0",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/",
                    "aria-label": "Home page",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_5__/* .Logomark */ .c, {
                            className: "h-9 w-9 lg:hidden"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_5__/* .Logo */ .T, {
                            className: "hidden w-auto h-9 fill-slate-700 dark:fill-sky-100 lg:block"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mr-6 -my-5 sm:mr-8 md:mr-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Search__WEBPACK_IMPORTED_MODULE_9__/* .Search */ .o, {})
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative flex justify-end gap-6 basis-0 sm:gap-8 md:flex-grow",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ThemeSelector__WEBPACK_IMPORTED_MODULE_10__/* .ThemeSelector */ .Y, {
                        className: "relative z-10"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "https://github.com",
                        className: "group",
                        "aria-label": "GitHub",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GitHubIcon, {
                            className: "w-6 h-6 fill-slate-400 group-hover:fill-slate-500 dark:group-hover:fill-slate-300"
                        })
                    })
                ]
            })
        ]
    });
}
function useTableOfContents(tableOfContents) {
    let { 0: currentSection , 1: setCurrentSection  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(tableOfContents[0]?.id);
    let getHeadings = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((tableOfContents)=>{
        return tableOfContents.flatMap((node)=>[
                node.id,
                ...node.children.map((child)=>child.id)
            ]).map((id)=>{
            let el = document.getElementById(id);
            if (!el) return;
            let style = window.getComputedStyle(el);
            let scrollMt = parseFloat(style.scrollMarginTop);
            let top = window.scrollY + el.getBoundingClientRect().top - scrollMt;
            return {
                id,
                top
            };
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (tableOfContents.length === 0) return;
        let headings = getHeadings(tableOfContents);
        function onScroll() {
            let top = window.scrollY;
            let current = headings[0].id;
            for (let heading of headings){
                if (top >= heading.top) {
                    current = heading.id;
                } else {
                    break;
                }
            }
            setCurrentSection(current);
        }
        window.addEventListener("scroll", onScroll, {
            passive: true
        });
        onScroll();
        return ()=>{
            window.removeEventListener("scroll", onScroll, {
                passive: true
            });
        };
    }, [
        getHeadings,
        tableOfContents
    ]);
    return currentSection;
}
function Layout({ children , title , tableOfContents  }) {
    let router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    let isHomePage = router.pathname === "/";
    let allLinks = navigation.flatMap((section)=>section.links);
    let linkIndex = allLinks.findIndex((link)=>link.href === router.pathname);
    let previousPage = allLinks[linkIndex - 1];
    let nextPage = allLinks[linkIndex + 1];
    let section = navigation.find((section)=>section.links.find((link)=>link.href === router.pathname));
    let currentSection = useTableOfContents(tableOfContents);
    function isActive(section) {
        if (section.id === currentSection) {
            return true;
        }
        if (!section.children) {
            return false;
        }
        return section.children.findIndex(isActive) > -1;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Header, {
                navigation: navigation
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative flex justify-center mx-auto max-w-8xl sm:px-2 lg:px-8 xl:px-12",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "hidden lg:relative lg:block lg:flex-none",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "absolute bottom-0 right-0 hidden w-px h-12 top-16 bg-gradient-to-t from-slate-800 dark:block"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "absolute bottom-0 right-0 hidden w-px top-28 bg-slate-800 dark:block"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto overflow-x-hidden py-16 pl-0.5",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_7__/* .Navigation */ .W, {
                                    navigation: navigation,
                                    className: "w-64 pr-8 xl:w-72 xl:pr-16"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex-auto max-w-2xl min-w-0 px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                                children: [
                                    (title || section) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                                        className: "space-y-1 mb-9",
                                        children: [
                                            section && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-sm font-medium font-display text-sky-500",
                                                children: section.title
                                            }),
                                            title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "text-3xl tracking-tight font-display text-slate-900 dark:text-white",
                                                children: title
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Prose__WEBPACK_IMPORTED_MODULE_8__/* .Prose */ .M, {
                                        children: children
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("dl", {
                                className: "flex pt-6 mt-12 border-t border-slate-200 dark:border-slate-800",
                                children: [
                                    previousPage && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                className: "text-sm font-medium font-display text-slate-900 dark:text-white",
                                                children: "Previous"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                                className: "mt-1",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: previousPage.href,
                                                    className: "text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            "aria-hidden": "true",
                                                            children: "←"
                                                        }),
                                                        " ",
                                                        previousPage.title
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    nextPage && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "ml-auto text-right",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                className: "text-sm font-medium font-display text-slate-900 dark:text-white",
                                                children: "Next"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                                className: "mt-1",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: nextPage.href,
                                                    className: "text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300",
                                                    children: [
                                                        nextPage.title,
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            "aria-hidden": "true",
                                                            children: "→"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "hidden xl:sticky xl:top-[4.5rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.5rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                            "aria-labelledby": "on-this-page-title",
                            className: "w-56",
                            children: tableOfContents.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        id: "on-this-page-title",
                                        className: "text-sm font-medium font-display text-slate-900 dark:text-white",
                                        children: "On this page"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ol", {
                                        role: "list",
                                        className: "mt-4 space-y-3 text-sm",
                                        children: tableOfContents.map((section)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: `#${section.id}`,
                                                            className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(isActive(section) ? "text-sky-500" : "font-normal text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"),
                                                            children: section.title
                                                        })
                                                    }),
                                                    section.children.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ol", {
                                                        role: "list",
                                                        className: "pl-5 mt-2 space-y-3 text-slate-500 dark:text-slate-400",
                                                        children: section.children.map((subSection)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                    href: `#${subSection.id}`,
                                                                    className: isActive(subSection) ? "text-sky-500" : "hover:text-slate-600 dark:hover:text-slate-300",
                                                                    children: subSection.title
                                                                })
                                                            }, subSection.id))
                                                    })
                                                ]
                                            }, section.id))
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4079:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ Logo),
/* harmony export */   "c": () => (/* binding */ Logomark)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Logomark(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "185",
        height: "208",
        viewBox: "0 0 185 208",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M25.7033 25.0782L50.6126 49.9875H72.4337C96.5273 49.9875 95.8863 49.9292 99.6737 51.8812C105.471 54.8237 109.259 60.5047 109.783 67.0016C110.162 71.6921 108.093 76.907 104.393 80.607C102.004 82.9668 100.082 84.2196 97.0808 85.2975L95.1871 85.9676L47.9905 86.1133L0.823079 86.2589L57.3133 146.915L113.833 207.572H149.201L184.54 207.601L183.433 206.348C182.821 205.678 167.031 188.751 148.356 168.707C129.681 148.692 114.445 132.261 114.474 132.203C114.503 132.115 115.756 131.591 117.241 130.979C129.798 125.939 140.665 117.024 148.327 105.458C153.95 97.0093 157.533 87.6574 159.048 77.4897C159.747 72.7118 159.747 63.0685 159.019 58.4362C156.659 42.9954 149.58 29.3025 138.509 18.7853C128.807 9.57903 117.096 3.60661 103.49 0.984573L100.14 0.343643L50.4669 0.256241L0.793945 0.168839L25.7033 25.0782Z",
                fill: "#BA2F2A"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M14.0798 172.233C5.25227 174.593 -0.457932 183.246 0.911353 192.131C1.9893 199.094 6.21369 204.222 12.827 206.64C15.4491 207.631 20.0231 207.864 22.9073 207.194C32.2592 204.979 38.3482 195.424 36.3671 186.042C34.9687 179.371 29.8411 173.894 23.3734 172.204C21.3049 171.65 16.1483 171.68 14.0798 172.233Z",
                fill: "#BA2F2A"
            })
        ]
    });
}
function Logo(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "185",
        height: "208",
        viewBox: "0 0 185 208",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M25.7033 25.0782L50.6126 49.9875H72.4337C96.5273 49.9875 95.8863 49.9292 99.6737 51.8812C105.471 54.8237 109.259 60.5047 109.783 67.0016C110.162 71.6921 108.093 76.907 104.393 80.607C102.004 82.9668 100.082 84.2196 97.0808 85.2975L95.1871 85.9676L47.9905 86.1133L0.823079 86.2589L57.3133 146.915L113.833 207.572H149.201L184.54 207.601L183.433 206.348C182.821 205.678 167.031 188.751 148.356 168.707C129.681 148.692 114.445 132.261 114.474 132.203C114.503 132.115 115.756 131.591 117.241 130.979C129.798 125.939 140.665 117.024 148.327 105.458C153.95 97.0093 157.533 87.6574 159.048 77.4897C159.747 72.7118 159.747 63.0685 159.019 58.4362C156.659 42.9954 149.58 29.3025 138.509 18.7853C128.807 9.57903 117.096 3.60661 103.49 0.984573L100.14 0.343643L50.4669 0.256241L0.793945 0.168839L25.7033 25.0782Z",
                fill: "#BA2F2A"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M14.0798 172.233C5.25227 174.593 -0.457932 183.246 0.911353 192.131C1.9893 199.094 6.21369 204.222 12.827 206.64C15.4491 207.631 20.0231 207.864 22.9073 207.194C32.2592 204.979 38.3482 195.424 36.3671 186.042C34.9687 179.371 29.8411 173.894 23.3734 172.204C21.3049 171.65 16.1483 171.68 14.0798 172.233Z",
                fill: "#BA2F2A"
            })
        ]
    });
}


/***/ }),

/***/ 6067:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ MobileNavigation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1185);
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4079);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(929);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_4__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function MenuIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 24 24",
        fill: "none",
        strokeWidth: "2",
        strokeLinecap: "round",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M4 7h16M4 12h16M4 17h16"
        })
    });
}
function CloseIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 24 24",
        fill: "none",
        strokeWidth: "2",
        strokeLinecap: "round",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M5 5l14 14M19 5l-14 14"
        })
    });
}
function MobileNavigation({ navigation  }) {
    let router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    let { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!isOpen) return;
        function onRouteChange() {
            setIsOpen(false);
        }
        router.events.on("routeChangeComplete", onRouteChange);
        router.events.on("routeChangeError", onRouteChange);
        return ()=>{
            router.events.off("routeChangeComplete", onRouteChange);
            router.events.off("routeChangeError", onRouteChange);
        };
    }, [
        router,
        isOpen
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "button",
                onClick: ()=>setIsOpen(true),
                className: "relative",
                "aria-label": "Open navigation",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MenuIcon, {
                    className: "h-6 w-6 stroke-slate-500"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Dialog, {
                open: isOpen,
                onClose: setIsOpen,
                className: "fixed inset-0 z-50 flex items-start overflow-y-auto bg-slate-900/50 pr-10 backdrop-blur lg:hidden",
                "aria-label": "Navigation",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Dialog.Panel, {
                    className: "min-h-full w-full max-w-xs bg-white px-4 pt-5 pb-12 dark:bg-slate-900 sm:px-6",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "button",
                                    onClick: ()=>setIsOpen(false),
                                    "aria-label": "Close navigation",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CloseIcon, {
                                        className: "h-6 w-6 stroke-slate-500"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/",
                                    className: "ml-6",
                                    "aria-label": "Home page",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_5__/* .Logomark */ .c, {
                                        className: "h-9 w-9"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_6__/* .Navigation */ .W, {
                            navigation: navigation,
                            className: "mt-5 px-1"
                        })
                    ]
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 929:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);




function Navigation({ navigation , className  }) {
    let router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("text-base lg:text-sm", className),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            role: "list",
            className: "space-y-9",
            children: navigation.map((section)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "font-display font-medium text-slate-900 dark:text-white",
                            children: section.title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            role: "list",
                            className: "mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200",
                            children: section.links.map((link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "relative",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: link.href,
                                        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full", link.href === router.pathname ? "font-semibold text-sky-500 before:bg-sky-500" : "text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"),
                                        children: link.title
                                    })
                                }, link.href))
                        })
                    ]
                }, section.title))
        })
    });
}


/***/ }),

/***/ 1104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ Prose)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);


function Prose({ as: Component = "div" , className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(className, "prose prose-slate max-w-none dark:prose-invert dark:text-slate-400", // headings
        "prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-normal lg:prose-headings:scroll-mt-[8.5rem]", // lead
        "prose-lead:text-slate-500 dark:prose-lead:text-slate-400", // links
        "prose-a:font-semibold dark:prose-a:text-sky-400", // link underline
        "prose-a:no-underline prose-a:shadow-[inset_0_-2px_0_0_var(--tw-prose-background,#fff),inset_0_calc(-1*(var(--tw-prose-underline-size,4px)+2px))_0_0_var(--tw-prose-underline,theme(colors.sky.300))] hover:prose-a:[--tw-prose-underline-size:6px] dark:[--tw-prose-background:theme(colors.slate.900)] dark:prose-a:shadow-[inset_0_calc(-1*var(--tw-prose-underline-size,2px))_0_0_var(--tw-prose-underline,theme(colors.sky.800))] dark:hover:prose-a:[--tw-prose-underline-size:6px]", // pre
        "prose-pre:rounded-xl prose-pre:bg-slate-900 prose-pre:shadow-lg dark:prose-pre:bg-slate-800/60 dark:prose-pre:shadow-none dark:prose-pre:ring-1 dark:prose-pre:ring-slate-300/10", // hr
        "dark:prose-hr:border-slate-800"),
        ...props
    });
}


/***/ }),

/***/ 8765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "o": () => (/* binding */ Search)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-dom"
const external_react_dom_namespaceObject = require("react-dom");
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: external "@docsearch/react"
const react_namespaceObject = require("@docsearch/react");
;// CONCATENATED MODULE: ./src/components/Search.jsx






const docSearchConfig = {
    appId: process.env.NEXT_PUBLIC_DOCSEARCH_APP_ID,
    apiKey: process.env.NEXT_PUBLIC_DOCSEARCH_API_KEY,
    indexName: process.env.NEXT_PUBLIC_DOCSEARCH_INDEX_NAME
};
function Hit({ hit , children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: hit.url,
        children: children
    });
}
function SearchIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 20 20",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M16.293 17.707a1 1 0 0 0 1.414-1.414l-1.414 1.414ZM9 14a5 5 0 0 1-5-5H2a7 7 0 0 0 7 7v-2ZM4 9a5 5 0 0 1 5-5V2a7 7 0 0 0-7 7h2Zm5-5a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7v2Zm8.707 12.293-3.757-3.757-1.414 1.414 3.757 3.757 1.414-1.414ZM14 9a4.98 4.98 0 0 1-1.464 3.536l1.414 1.414A6.98 6.98 0 0 0 16 9h-2Zm-1.464 3.536A4.98 4.98 0 0 1 9 14v2a6.98 6.98 0 0 0 4.95-2.05l-1.414-1.414Z"
        })
    });
}
function Search() {
    let { 0: isOpen , 1: setIsOpen  } = (0,external_react_.useState)(false);
    let { 0: modifierKey , 1: setModifierKey  } = (0,external_react_.useState)();
    const onOpen = (0,external_react_.useCallback)(()=>{
        setIsOpen(true);
    }, [
        setIsOpen
    ]);
    const onClose = (0,external_react_.useCallback)(()=>{
        setIsOpen(false);
    }, [
        setIsOpen
    ]);
    (0,react_namespaceObject.useDocSearchKeyboardEvents)({
        isOpen,
        onOpen,
        onClose
    });
    (0,external_react_.useEffect)(()=>{
        setModifierKey(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? "⌘" : "Ctrl ");
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                type: "button",
                className: "group flex h-6 w-6 items-center justify-center sm:justify-start md:h-auto md:w-80 md:flex-none md:rounded-lg md:py-2.5 md:pl-4 md:pr-3.5 md:text-sm md:ring-1 md:ring-slate-200 md:hover:ring-slate-300 dark:md:bg-slate-800/75 dark:md:ring-inset dark:md:ring-white/5 dark:md:hover:bg-slate-700/40 dark:md:hover:ring-slate-500 lg:w-96",
                onClick: onOpen,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(SearchIcon, {
                        className: "h-5 w-5 flex-none fill-slate-400 group-hover:fill-slate-500 dark:fill-slate-500 md:group-hover:fill-slate-400"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "sr-only md:not-sr-only md:ml-2 md:text-slate-500 md:dark:text-slate-400",
                        children: "Search docs"
                    }),
                    modifierKey && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("kbd", {
                        className: "ml-auto hidden font-medium text-slate-400 dark:text-slate-500 md:block",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("kbd", {
                                className: "font-sans",
                                children: modifierKey
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("kbd", {
                                className: "font-sans",
                                children: "K"
                            })
                        ]
                    })
                ]
            }),
            isOpen && /*#__PURE__*/ (0,external_react_dom_namespaceObject.createPortal)(/*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.DocSearchModal, {
                ...docSearchConfig,
                initialScrollY: window.scrollY,
                onClose: onClose,
                hitComponent: Hit,
                navigator: {
                    navigate ({ itemUrl  }) {
                        router_default().push(itemUrl);
                    }
                }
            }), document.body)
        ]
    });
}


/***/ }),

/***/ 2651:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ ThemeSelector)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const themes = [
    {
        name: "Light",
        value: "light",
        icon: LightIcon
    },
    {
        name: "Dark",
        value: "dark",
        icon: DarkIcon
    },
    {
        name: "System",
        value: "system",
        icon: SystemIcon
    }, 
];
function LightIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 16 16",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7 1a1 1 0 0 1 2 0v1a1 1 0 1 1-2 0V1Zm4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm2.657-5.657a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707a1 1 0 0 0 0-1.414Zm-1.415 11.313-.707-.707a1 1 0 0 1 1.415-1.415l.707.708a1 1 0 0 1-1.415 1.414ZM16 7.999a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2h1a1 1 0 0 0 1-1ZM7 14a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Zm-2.536-2.464a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707a1 1 0 0 0 0-1.414Zm0-8.486A1 1 0 0 1 3.05 4.464l-.707-.707a1 1 0 0 1 1.414-1.414l.707.707ZM3 8a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Z"
        })
    });
}
function DarkIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 16 16",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7.23 3.333C7.757 2.905 7.68 2 7 2a6 6 0 1 0 0 12c.68 0 .758-.905.23-1.332A5.989 5.989 0 0 1 5 8c0-1.885.87-3.568 2.23-4.668ZM12 5a1 1 0 0 1 1 1 1 1 0 0 0 1 1 1 1 0 1 1 0 2 1 1 0 0 0-1 1 1 1 0 1 1-2 0 1 1 0 0 0-1-1 1 1 0 1 1 0-2 1 1 0 0 0 1-1 1 1 0 0 1 1-1Z"
        })
    });
}
function SystemIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 16 16",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M1 4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-1.5l.31 1.242c.084.333.36.573.63.808.091.08.182.158.264.24A1 1 0 0 1 11 15H5a1 1 0 0 1-.704-1.71c.082-.082.173-.16.264-.24.27-.235.546-.475.63-.808L5.5 11H4a3 3 0 0 1-3-3V4Zm3-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z"
        })
    });
}
function ThemeSelector(props) {
    let { 0: selectedTheme , 1: setSelectedTheme  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (selectedTheme) {
            document.documentElement.setAttribute("data-theme", selectedTheme.value);
        } else {
            setSelectedTheme(themes.find((theme)=>theme.value === document.documentElement.getAttribute("data-theme")));
        }
    }, [
        selectedTheme
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let handler = ()=>setSelectedTheme(themes.find((theme)=>theme.value === (window.localStorage.theme ?? "system")));
        window.addEventListener("storage", handler);
        return ()=>window.removeEventListener("storage", handler);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Listbox, {
        as: "div",
        value: selectedTheme,
        onChange: setSelectedTheme,
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Listbox.Label, {
                className: "sr-only",
                children: "Theme"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Listbox.Button, {
                className: "flex h-6 w-6 items-center justify-center rounded-lg shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-slate-700 dark:ring-inset dark:ring-white/5",
                "aria-label": selectedTheme?.name,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LightIcon, {
                        className: "hidden h-4 w-4 fill-sky-400 [[data-theme=light]_&]:block"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DarkIcon, {
                        className: "hidden h-4 w-4 fill-sky-400 [[data-theme=dark]_&]:block"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LightIcon, {
                        className: "hidden h-4 w-4 fill-slate-400 [:not(.dark)[data-theme=system]_&]:block"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DarkIcon, {
                        className: "hidden h-4 w-4 fill-slate-400 [.dark[data-theme=system]_&]:block"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Listbox.Options, {
                className: "absolute top-full left-1/2 mt-3 w-36 -translate-x-1/2 space-y-1 rounded-xl bg-white p-3 text-sm font-medium shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-slate-800 dark:ring-white/5",
                children: themes.map((theme)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Listbox.Option, {
                        value: theme,
                        className: ({ active , selected  })=>clsx__WEBPACK_IMPORTED_MODULE_3___default()("flex cursor-pointer select-none items-center rounded-[0.625rem] p-1", {
                                "text-sky-500": selected,
                                "text-slate-900 dark:text-white": active && !selected,
                                "text-slate-700 dark:text-slate-400": !active && !selected,
                                "bg-slate-100 dark:bg-slate-900/40": active
                            }),
                        children: ({ selected  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "rounded-md bg-white p-1 shadow ring-1 ring-slate-900/5 dark:bg-slate-700 dark:ring-inset dark:ring-white/5",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(theme.icon, {
                                            className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("h-4 w-4", selected ? "fill-sky-400 dark:fill-sky-400" : "fill-slate-400")
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "ml-3",
                                        children: theme.name
                                    })
                                ]
                            })
                    }, theme.value))
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7149:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sindresorhus_slugify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5272);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(461);
/* harmony import */ var focus_visible__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2235);
/* harmony import */ var focus_visible__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(focus_visible__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sindresorhus_slugify__WEBPACK_IMPORTED_MODULE_2__, _components_Layout__WEBPACK_IMPORTED_MODULE_3__]);
([_sindresorhus_slugify__WEBPACK_IMPORTED_MODULE_2__, _components_Layout__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function getNodeText(node) {
    let text = "";
    for (let child of node.children ?? []){
        if (typeof child === "string") {
            text += child;
        }
        text += getNodeText(child);
    }
    return text;
}
function collectHeadings(nodes, slugify = (0,_sindresorhus_slugify__WEBPACK_IMPORTED_MODULE_2__.slugifyWithCounter)()) {
    let sections = [];
    for (let node of nodes){
        if (node.name === "h2" || node.name === "h3") {
            let title = getNodeText(node);
            if (title) {
                let id = slugify(title);
                node.attributes.id = id;
                if (node.name === "h3") {
                    if (!sections[sections.length - 1]) {
                        throw new Error("Cannot add `h3` to table of contents without a preceding `h2`");
                    }
                    sections[sections.length - 1].children.push({
                        ...node.attributes,
                        title
                    });
                } else {
                    sections.push({
                        ...node.attributes,
                        title,
                        children: []
                    });
                }
            }
        }
        sections.push(...collectHeadings(node.children ?? [], slugify));
    }
    return sections;
}
function App({ Component , pageProps  }) {
    let title = pageProps.markdoc?.frontmatter.title;
    let pageTitle = pageProps.markdoc?.frontmatter.pageTitle || `${pageProps.markdoc?.frontmatter.title} - Docs`;
    let description = pageProps.markdoc?.frontmatter.description;
    let tableOfContents = pageProps.markdoc?.content ? collectHeadings(pageProps.markdoc.content) : [];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: pageTitle
                    }),
                    description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: description
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__/* .Layout */ .A, {
                title: title,
                tableOfContents: tableOfContents,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 2235:
/***/ ((module) => {

module.exports = require("focus-visible");

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

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 5272:
/***/ ((module) => {

module.exports = import("@sindresorhus/slugify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664], () => (__webpack_exec__(7149)));
module.exports = __webpack_exports__;

})();