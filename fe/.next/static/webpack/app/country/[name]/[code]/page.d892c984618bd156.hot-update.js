"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/country/[name]/[code]/page",{

/***/ "(app-pages-browser)/./src/app/country/[name]/[code]/page.tsx":
/*!************************************************!*\
  !*** ./src/app/country/[name]/[code]/page.tsx ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CountryPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_components_PopulationChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/components/PopulationChart */ \"(app-pages-browser)/./src/app/components/PopulationChart.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction CountryPage() {\n    _s();\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useParams)();\n    const [countryInfo, setCountryInfo] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);\n    const isValidImageURL = (url)=>{\n        if (!url || url.trim() === \"\") return false;\n        const pattern = /^(https?:\\/\\/.*\\.(?:png|jpg|jpeg|gif|svg|webp))$/i;\n        return pattern.test(url);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const fetchCountryInfo = async ()=>{\n            try {\n                const countryName = decodeURIComponent(params.name);\n                const response = await fetch(\"http://localhost:3560/\".concat(countryName, \"/\").concat(params.code));\n                const data = response.json();\n                setCountryInfo(await data);\n            } catch (error) {\n                setError(\"Error fetching country information\");\n                console.log(error);\n            } finally{\n                setLoading(false);\n            }\n        };\n        fetchCountryInfo();\n    }, [\n        params.name,\n        params.code\n    ]);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-center items-center h-screen\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent \",\n                role: \"status\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"sr-only\",\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Projetos de estudo\\\\js-ts\\\\CountryInfoApp\\\\fe\\\\src\\\\app\\\\country\\\\[name]\\\\[code]\\\\page.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Projetos de estudo\\\\js-ts\\\\CountryInfoApp\\\\fe\\\\src\\\\app\\\\country\\\\[name]\\\\[code]\\\\page.tsx\",\n                lineNumber: 60,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Projetos de estudo\\\\js-ts\\\\CountryInfoApp\\\\fe\\\\src\\\\app\\\\country\\\\[name]\\\\[code]\\\\page.tsx\",\n            lineNumber: 59,\n            columnNumber: 13\n        }, this);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-center items-center h-screen text-red-500\",\n            children: error\n        }, void 0, false, {\n            fileName: \"C:\\\\Projetos de estudo\\\\js-ts\\\\CountryInfoApp\\\\fe\\\\src\\\\app\\\\country\\\\[name]\\\\[code]\\\\page.tsx\",\n            lineNumber: 72,\n            columnNumber: 13\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-center text-2xl mt-4 font-extralight\",\n                children: [\n                    params.name,\n                    \" Information\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Projetos de estudo\\\\js-ts\\\\CountryInfoApp\\\\fe\\\\src\\\\app\\\\country\\\\[name]\\\\[code]\\\\page.tsx\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, this),\n            countryInfo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:flex flex-wrap gap-6 justify-center mt-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-center  gap-6 w-full md:w-1/3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"border rounded-xl p-4 w-full max-w-xs\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-md font-extralight mb-4 text-center\",\n                                    children: [\n                                        \"Flag of \",\n                                        params.name\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Projetos de estudo\\\\js-ts\\\\CountryInfoApp\\\\fe\\\\src\\\\app\\\\country\\\\[name]\\\\[code]\\\\page.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 29\n                                }, this),\n                                isValidImageURL(countryInfo.flagURL) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    width: 100,\n                                    height: 100,\n                                    src: countryInfo.flagURL,\n                                    alt: \"Flag of \".concat(params.name),\n                                    className: \"w-full h-40 rounded\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Projetos de estudo\\\\js-ts\\\\CountryInfoApp\\\\fe\\\\src\\\\app\\\\country\\\\[name]\\\\[code]\\\\page.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 33\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-full h-40 rounded bg-gray-200 flex items-center justify-center\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-gray-600\",\n                                        children: \"Image Not Available\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Projetos de estudo\\\\js-ts\\\\CountryInfoApp\\\\fe\\\\src\\\\app\\\\country\\\\[name]\\\\[code]\\\\page.tsx\",\n                                        lineNumber: 101,\n                                        columnNumber: 37\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Projetos de estudo\\\\js-ts\\\\CountryInfoApp\\\\fe\\\\src\\\\app\\\\country\\\\[name]\\\\[code]\\\\page.tsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 33\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Projetos de estudo\\\\js-ts\\\\CountryInfoApp\\\\fe\\\\src\\\\app\\\\country\\\\[name]\\\\[code]\\\\page.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Projetos de estudo\\\\js-ts\\\\CountryInfoApp\\\\fe\\\\src\\\\app\\\\country\\\\[name]\\\\[code]\\\\page.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full md:w-2/3 mt-6 md:mt-0\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-center mb-4 text-xl font-extralight\",\n                                children: [\n                                    \"Population History of \",\n                                    params.name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Projetos de estudo\\\\js-ts\\\\CountryInfoApp\\\\fe\\\\src\\\\app\\\\country\\\\[name]\\\\[code]\\\\page.tsx\",\n                                lineNumber: 110,\n                                columnNumber: 25\n                            }, this),\n                            countryInfo && countryInfo.populationData ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_PopulationChart__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                data: countryInfo.populationData\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Projetos de estudo\\\\js-ts\\\\CountryInfoApp\\\\fe\\\\src\\\\app\\\\country\\\\[name]\\\\[code]\\\\page.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 29\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-center\",\n                                children: \"No population data available\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Projetos de estudo\\\\js-ts\\\\CountryInfoApp\\\\fe\\\\src\\\\app\\\\country\\\\[name]\\\\[code]\\\\page.tsx\",\n                                lineNumber: 114,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Projetos de estudo\\\\js-ts\\\\CountryInfoApp\\\\fe\\\\src\\\\app\\\\country\\\\[name]\\\\[code]\\\\page.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border rounded-lg p-6 w-full max-w-md mb-10\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl font-semibold mb-4 text-center\",\n                                children: \"Border Countries\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Projetos de estudo\\\\js-ts\\\\CountryInfoApp\\\\fe\\\\src\\\\app\\\\country\\\\[name]\\\\[code]\\\\page.tsx\",\n                                lineNumber: 119,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex  gap-5 w-full \",\n                                children: countryInfo.borders.map((border, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        href: \"/country/\".concat(border.commonName, \"/\").concat(border.countryCode),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"bg-gray-100 px-4 py-2 rounded-full text-sm\",\n                                            children: border.commonName\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Projetos de estudo\\\\js-ts\\\\CountryInfoApp\\\\fe\\\\src\\\\app\\\\country\\\\[name]\\\\[code]\\\\page.tsx\",\n                                            lineNumber: 126,\n                                            columnNumber: 37\n                                        }, this)\n                                    }, index, false, {\n                                        fileName: \"C:\\\\Projetos de estudo\\\\js-ts\\\\CountryInfoApp\\\\fe\\\\src\\\\app\\\\country\\\\[name]\\\\[code]\\\\page.tsx\",\n                                        lineNumber: 122,\n                                        columnNumber: 33\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Projetos de estudo\\\\js-ts\\\\CountryInfoApp\\\\fe\\\\src\\\\app\\\\country\\\\[name]\\\\[code]\\\\page.tsx\",\n                                lineNumber: 120,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Projetos de estudo\\\\js-ts\\\\CountryInfoApp\\\\fe\\\\src\\\\app\\\\country\\\\[name]\\\\[code]\\\\page.tsx\",\n                        lineNumber: 118,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Projetos de estudo\\\\js-ts\\\\CountryInfoApp\\\\fe\\\\src\\\\app\\\\country\\\\[name]\\\\[code]\\\\page.tsx\",\n                lineNumber: 85,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Projetos de estudo\\\\js-ts\\\\CountryInfoApp\\\\fe\\\\src\\\\app\\\\country\\\\[name]\\\\[code]\\\\page.tsx\",\n        lineNumber: 79,\n        columnNumber: 9\n    }, this);\n}\n_s(CountryPage, \"G53Z1ZhYCoC/7snty7fhh250a80=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useParams\n    ];\n});\n_c = CountryPage;\nvar _c;\n$RefreshReg$(_c, \"CountryPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY291bnRyeS9bbmFtZV0vW2NvZGVdL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFK0Q7QUFDaEM7QUFDRjtBQUNlO0FBQ0E7QUFrQjdCLFNBQVNNOztJQUNwQixNQUFNQyxTQUFTSiwwREFBU0E7SUFDeEIsTUFBTSxDQUFDSyxhQUFhQyxlQUFlLEdBQUdKLCtDQUFRQSxDQUFxQjtJQUNuRSxNQUFNLENBQUNLLFNBQVNDLFdBQVcsR0FBR04sK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDTyxPQUFPQyxTQUFTLEdBQUdSLCtDQUFRQSxDQUFnQjtJQUVsRCxNQUFNUyxrQkFBa0IsQ0FBQ0M7UUFDckIsSUFBSSxDQUFDQSxPQUFPQSxJQUFJQyxJQUFJLE9BQU8sSUFBSSxPQUFPO1FBQ3RDLE1BQU1DLFVBQVU7UUFDaEIsT0FBT0EsUUFBUUMsSUFBSSxDQUFDSDtJQUN4QjtJQUVBWCxnREFBU0EsQ0FBQztRQUNOLE1BQU1lLG1CQUFtQjtZQUNyQixJQUFJO2dCQUNBLE1BQU1DLGNBQWNDLG1CQUFtQmQsT0FBT2UsSUFBSTtnQkFDbEQsTUFBTUMsV0FBVyxNQUFNQyxNQUNuQix5QkFBd0NqQixPQUFmYSxhQUFZLEtBQWUsT0FBWmIsT0FBT2tCLElBQUk7Z0JBR3ZELE1BQU1DLE9BQU9ILFNBQVNJLElBQUk7Z0JBQzFCbEIsZUFBZSxNQUFNaUI7WUFDekIsRUFBRSxPQUFPZCxPQUFPO2dCQUNaQyxTQUFTO2dCQUNUZSxRQUFRQyxHQUFHLENBQUNqQjtZQUNoQixTQUFVO2dCQUNORCxXQUFXO1lBQ2Y7UUFDSjtRQUNBUTtJQUNKLEdBQUc7UUFBQ1osT0FBT2UsSUFBSTtRQUFFZixPQUFPa0IsSUFBSTtLQUFDO0lBRTdCLElBQUlmLFNBQVM7UUFDVCxxQkFDSSw4REFBQ29CO1lBQUlDLFdBQVU7c0JBQ1gsNEVBQUNEO2dCQUNHQyxXQUFVO2dCQUNWQyxNQUFLOzBCQUVMLDRFQUFDQztvQkFBS0YsV0FBVTs4QkFBVTs7Ozs7Ozs7Ozs7Ozs7OztJQUkxQztJQUVBLElBQUluQixPQUFPO1FBQ1AscUJBQ0ksOERBQUNrQjtZQUFJQyxXQUFVO3NCQUNWbkI7Ozs7OztJQUdiO0lBRUEscUJBQ0ksOERBQUNrQjtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0c7Z0JBQUdILFdBQVU7O29CQUNUeEIsT0FBT2UsSUFBSTtvQkFBQzs7Ozs7OztZQUdoQmQsNkJBQ0csOERBQUNzQjtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNYLDRFQUFDRDs0QkFBSUMsV0FBVTs7OENBQ1gsOERBQUNJO29DQUFHSixXQUFVOzt3Q0FBMkM7d0NBQzVDeEIsT0FBT2UsSUFBSTs7Ozs7OztnQ0FFdkJSLGdCQUFnQk4sWUFBWTRCLE9BQU8sa0JBQ2hDLDhEQUFDbkMsa0RBQUtBO29DQUNGb0MsT0FBTztvQ0FDUEMsUUFBUTtvQ0FDUkMsS0FBSy9CLFlBQVk0QixPQUFPO29DQUN4QkksS0FBSyxXQUF1QixPQUFaakMsT0FBT2UsSUFBSTtvQ0FDM0JTLFdBQVU7Ozs7O3lEQUdkLDhEQUFDRDtvQ0FBSUMsV0FBVTs4Q0FDWCw0RUFBQ0U7d0NBQUtGLFdBQVU7a0RBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQVFoRCw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDSTtnQ0FBR0osV0FBVTs7b0NBQTJDO29DQUF1QnhCLE9BQU9lLElBQUk7Ozs7Ozs7NEJBQzFGZCxlQUFlQSxZQUFZaUMsY0FBYyxpQkFDdEMsOERBQUN6Qyx1RUFBZUE7Z0NBQUMwQixNQUFNbEIsWUFBWWlDLGNBQWM7Ozs7O3FEQUVqRCw4REFBQ0M7Z0NBQUVYLFdBQVU7MENBQWM7Ozs7Ozs7Ozs7OztrQ0FJbkMsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0k7Z0NBQUdKLFdBQVU7MENBQXlDOzs7Ozs7MENBQ3ZELDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDVnZCLFlBQVltQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxRQUF1QkMsc0JBQzdDLDhEQUFDNUMsaURBQUlBO3dDQUVENkMsTUFBTSxZQUFpQ0YsT0FBckJBLE9BQU9HLFVBQVUsRUFBQyxLQUFzQixPQUFuQkgsT0FBT0ksV0FBVztrREFFekQsNEVBQUNoQjs0Q0FBS0YsV0FBVTtzREFDWGMsT0FBT0csVUFBVTs7Ozs7O3VDQUpqQkY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjekM7R0FoSHdCeEM7O1FBQ0xILHNEQUFTQTs7O0tBREpHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb3VudHJ5L1tuYW1lXS9bY29kZV0vcGFnZS50c3g/YjlkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBQb3B1bGF0aW9uQ2hhcnQgZnJvbSBcIkAvYXBwL2NvbXBvbmVudHMvUG9wdWxhdGlvbkNoYXJ0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIENvdW50cnlJbmZvIHtcclxuICAgIGJvcmRlcnM6IEJvcmRlckNvdW50cnlbXTtcclxuICAgIHBvcHVsYXRpb25EYXRhOiBQb3B1bGF0aW9uRGF0YVtdO1xyXG4gICAgZmxhZ1VSTDogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQm9yZGVyQ291bnRyeSB7XHJcbiAgICBjb21tb25OYW1lOiBzdHJpbmc7XHJcbiAgICBjb3VudHJ5Q29kZTogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUG9wdWxhdGlvbkRhdGEge1xyXG4gICAgeWVhcjogc3RyaW5nO1xyXG4gICAgdmFsdWU6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ291bnRyeVBhZ2UoKSB7XHJcbiAgICBjb25zdCBwYXJhbXMgPSB1c2VQYXJhbXMoKTtcclxuICAgIGNvbnN0IFtjb3VudHJ5SW5mbywgc2V0Q291bnRyeUluZm9dID0gdXNlU3RhdGU8Q291bnRyeUluZm8gfCBudWxsPihudWxsKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuXHJcbiAgICBjb25zdCBpc1ZhbGlkSW1hZ2VVUkwgPSAodXJsOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBpZiAoIXVybCB8fCB1cmwudHJpbSgpID09PSBcIlwiKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgcGF0dGVybiA9IC9eKGh0dHBzPzpcXC9cXC8uKlxcLig/OnBuZ3xqcGd8anBlZ3xnaWZ8c3ZnfHdlYnApKSQvaTtcclxuICAgICAgICByZXR1cm4gcGF0dGVybi50ZXN0KHVybCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmV0Y2hDb3VudHJ5SW5mbyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50cnlOYW1lID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtcy5uYW1lIGFzIHN0cmluZyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgICAgICAgICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjM1NjAvJHtjb3VudHJ5TmFtZX0vJHtwYXJhbXMuY29kZX1gXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBzZXRDb3VudHJ5SW5mbyhhd2FpdCBkYXRhKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgY291bnRyeSBpbmZvcm1hdGlvblwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmZXRjaENvdW50cnlJbmZvKCk7XHJcbiAgICB9LCBbcGFyYW1zLm5hbWUsIHBhcmFtcy5jb2RlXSk7XHJcblxyXG4gICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtc2NyZWVuXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC04IHctOCBhbmltYXRlLXNwaW4gcm91bmRlZC1mdWxsIGJvcmRlci00IGJvcmRlci1zb2xpZCBib3JkZXItY3VycmVudCBib3JkZXItci10cmFuc3BhcmVudCBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJvbGU9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Mb2FkaW5nLi4uPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLXNjcmVlbiB0ZXh0LXJlZC01MDBcIj5cclxuICAgICAgICAgICAgICAgIHtlcnJvcn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LThcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtMnhsIG10LTQgZm9udC1leHRyYWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICB7cGFyYW1zLm5hbWV9IEluZm9ybWF0aW9uXHJcbiAgICAgICAgICAgIDwvaDE+XHJcblxyXG4gICAgICAgICAgICB7Y291bnRyeUluZm8gJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpmbGV4IGZsZXgtd3JhcCBnYXAtNiBqdXN0aWZ5LWNlbnRlciBtdC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciAgZ2FwLTYgdy1mdWxsIG1kOnctMS8zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHJvdW5kZWQteGwgcC00IHctZnVsbCBtYXgtdy14c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbWQgZm9udC1leHRyYWxpZ2h0IG1iLTQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGbGFnIG9mIHtwYXJhbXMubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNWYWxpZEltYWdlVVJMKGNvdW50cnlJbmZvLmZsYWdVUkwpID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtjb3VudHJ5SW5mby5mbGFnVVJMfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2BGbGFnIG9mICR7cGFyYW1zLm5hbWV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtNDAgcm91bmRlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC00MCByb3VuZGVkIGJnLWdyYXktMjAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj5JbWFnZSBOb3QgQXZhaWxhYmxlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy0yLzMgbXQtNiBtZDptdC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi00IHRleHQteGwgZm9udC1leHRyYWxpZ2h0XCI+UG9wdWxhdGlvbiBIaXN0b3J5IG9mIHtwYXJhbXMubmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRyeUluZm8gJiYgY291bnRyeUluZm8ucG9wdWxhdGlvbkRhdGEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9wdWxhdGlvbkNoYXJ0IGRhdGE9e2NvdW50cnlJbmZvLnBvcHVsYXRpb25EYXRhfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5ObyBwb3B1bGF0aW9uIGRhdGEgYXZhaWxhYmxlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciByb3VuZGVkLWxnIHAtNiB3LWZ1bGwgbWF4LXctbWQgbWItMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCBtYi00IHRleHQtY2VudGVyXCI+Qm9yZGVyIENvdW50cmllczwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCAgZ2FwLTUgdy1mdWxsIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50cnlJbmZvLmJvcmRlcnMubWFwKChib3JkZXI6IEJvcmRlckNvdW50cnksIGluZGV4OiBudW1iZXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL2NvdW50cnkvJHtib3JkZXIuY29tbW9uTmFtZX0vJHtib3JkZXIuY291bnRyeUNvZGV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJnLWdyYXktMTAwIHB4LTQgcHktMiByb3VuZGVkLWZ1bGwgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2JvcmRlci5jb21tb25OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJQb3B1bGF0aW9uQ2hhcnQiLCJJbWFnZSIsIkxpbmsiLCJ1c2VQYXJhbXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvdW50cnlQYWdlIiwicGFyYW1zIiwiY291bnRyeUluZm8iLCJzZXRDb3VudHJ5SW5mbyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImlzVmFsaWRJbWFnZVVSTCIsInVybCIsInRyaW0iLCJwYXR0ZXJuIiwidGVzdCIsImZldGNoQ291bnRyeUluZm8iLCJjb3VudHJ5TmFtZSIsImRlY29kZVVSSUNvbXBvbmVudCIsIm5hbWUiLCJyZXNwb25zZSIsImZldGNoIiwiY29kZSIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInJvbGUiLCJzcGFuIiwiaDEiLCJoMiIsImZsYWdVUkwiLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsImFsdCIsInBvcHVsYXRpb25EYXRhIiwicCIsImJvcmRlcnMiLCJtYXAiLCJib3JkZXIiLCJpbmRleCIsImhyZWYiLCJjb21tb25OYW1lIiwiY291bnRyeUNvZGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/country/[name]/[code]/page.tsx\n"));

/***/ })

});