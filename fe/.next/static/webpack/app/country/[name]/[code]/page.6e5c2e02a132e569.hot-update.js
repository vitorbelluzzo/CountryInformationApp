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

/***/ "(app-pages-browser)/./src/app/components/PopulationChart.tsx":
/*!************************************************!*\
  !*** ./src/app/components/PopulationChart.tsx ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_CartesianGrid_Line_LineChart_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=CartesianGrid,Line,LineChart,ResponsiveContainer,Tooltip,XAxis,YAxis!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/component/ResponsiveContainer.js\");\n/* harmony import */ var _barrel_optimize_names_CartesianGrid_Line_LineChart_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=CartesianGrid,Line,LineChart,ResponsiveContainer,Tooltip,XAxis,YAxis!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/chart/LineChart.js\");\n/* harmony import */ var _barrel_optimize_names_CartesianGrid_Line_LineChart_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=CartesianGrid,Line,LineChart,ResponsiveContainer,Tooltip,XAxis,YAxis!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/cartesian/CartesianGrid.js\");\n/* harmony import */ var _barrel_optimize_names_CartesianGrid_Line_LineChart_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=CartesianGrid,Line,LineChart,ResponsiveContainer,Tooltip,XAxis,YAxis!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/cartesian/XAxis.js\");\n/* harmony import */ var _barrel_optimize_names_CartesianGrid_Line_LineChart_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=CartesianGrid,Line,LineChart,ResponsiveContainer,Tooltip,XAxis,YAxis!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/cartesian/YAxis.js\");\n/* harmony import */ var _barrel_optimize_names_CartesianGrid_Line_LineChart_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=CartesianGrid,Line,LineChart,ResponsiveContainer,Tooltip,XAxis,YAxis!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/component/Tooltip.js\");\n/* harmony import */ var _barrel_optimize_names_CartesianGrid_Line_LineChart_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=CartesianGrid,Line,LineChart,ResponsiveContainer,Tooltip,XAxis,YAxis!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/cartesian/Line.js\");\n\n\n\nfunction PopulationChart(param) {\n    let { data } = param;\n    // Função para formatar números no eixo Y\n    const formatPopulation = (value)=>{\n        return new Intl.NumberFormat('pt-BR', {\n            notation: 'compact',\n            maximumFractionDigits: 1\n        }).format(value);\n    };\n    // Função para formato completo no tooltip\n    const formatTooltipValue = (value)=>{\n        return new Intl.NumberFormat('pt-BR', {\n            notation: 'standard'\n        }).format(value);\n    };\n    // Componente do tooltip customizado\n    const CustomTooltip = (param)=>{\n        let { active, payload, label } = param;\n        if (active && payload && payload.length) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white p-4 border rounded-lg shadow-lg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-medium\",\n                        children: \"Ano: \".concat(label)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Projetos de estudo\\\\js-ts\\\\CountryInfoApp\\\\fe\\\\src\\\\app\\\\components\\\\PopulationChart.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-blue-600\",\n                        children: [\n                            \"Popula\\xe7\\xe3o: \",\n                            formatTooltipValue(payload[0].value)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Projetos de estudo\\\\js-ts\\\\CountryInfoApp\\\\fe\\\\src\\\\app\\\\components\\\\PopulationChart.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Projetos de estudo\\\\js-ts\\\\CountryInfoApp\\\\fe\\\\src\\\\app\\\\components\\\\PopulationChart.tsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, this);\n        }\n        return null;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_Line_LineChart_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_2__.ResponsiveContainer, {\n        width: \"100%\",\n        height: 400,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_Line_LineChart_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_3__.LineChart, {\n            data: data,\n            margin: {\n                top: 20,\n                right: 30,\n                left: 40,\n                bottom: 20\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_Line_LineChart_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_4__.CartesianGrid, {\n                    strokeDasharray: \"3 3\",\n                    opacity: 0.3\n                }, void 0, false, {\n                    fileName: \"C:\\\\Projetos de estudo\\\\js-ts\\\\CountryInfoApp\\\\fe\\\\src\\\\app\\\\components\\\\PopulationChart.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_Line_LineChart_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_5__.XAxis, {\n                    dataKey: \"year\",\n                    tick: {\n                        fontSize: 12\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Projetos de estudo\\\\js-ts\\\\CountryInfoApp\\\\fe\\\\src\\\\app\\\\components\\\\PopulationChart.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_Line_LineChart_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_6__.YAxis, {\n                    tick: {\n                        fontSize: 12\n                    },\n                    tickFormatter: formatPopulation\n                }, void 0, false, {\n                    fileName: \"C:\\\\Projetos de estudo\\\\js-ts\\\\CountryInfoApp\\\\fe\\\\src\\\\app\\\\components\\\\PopulationChart.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_Line_LineChart_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_7__.Tooltip, {\n                    content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomTooltip, {}, void 0, false, {\n                        fileName: \"C:\\\\Projetos de estudo\\\\js-ts\\\\CountryInfoApp\\\\fe\\\\src\\\\app\\\\components\\\\PopulationChart.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 27\n                    }, void 0)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Projetos de estudo\\\\js-ts\\\\CountryInfoApp\\\\fe\\\\src\\\\app\\\\components\\\\PopulationChart.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_Line_LineChart_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_8__.Line, {\n                    type: \"monotone\",\n                    dataKey: \"value\",\n                    stroke: \"#2563eb\",\n                    strokeWidth: 2,\n                    dot: {\n                        r: 4\n                    },\n                    activeDot: {\n                        r: 6\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Projetos de estudo\\\\js-ts\\\\CountryInfoApp\\\\fe\\\\src\\\\app\\\\components\\\\PopulationChart.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Projetos de estudo\\\\js-ts\\\\CountryInfoApp\\\\fe\\\\src\\\\app\\\\components\\\\PopulationChart.tsx\",\n            lineNumber: 62,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Projetos de estudo\\\\js-ts\\\\CountryInfoApp\\\\fe\\\\src\\\\app\\\\components\\\\PopulationChart.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this);\n}\n_c = PopulationChart;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopulationChart);\nvar _c;\n$RefreshReg$(_c, \"PopulationChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qb3B1bGF0aW9uQ2hhcnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQVVSO0FBa0JsQixTQUFTUSxnQkFBZ0IsS0FBOEI7UUFBOUIsRUFBRUMsSUFBSSxFQUF3QixHQUE5QjtJQUN2Qix5Q0FBeUM7SUFDekMsTUFBTUMsbUJBQW1CLENBQUNDO1FBQ3hCLE9BQU8sSUFBSUMsS0FBS0MsWUFBWSxDQUFDLFNBQVM7WUFDcENDLFVBQVU7WUFDVkMsdUJBQXVCO1FBQ3pCLEdBQUdDLE1BQU0sQ0FBQ0w7SUFDWjtJQUVBLDBDQUEwQztJQUMxQyxNQUFNTSxxQkFBcUIsQ0FBQ047UUFDMUIsT0FBTyxJQUFJQyxLQUFLQyxZQUFZLENBQUMsU0FBUztZQUNwQ0MsVUFBVTtRQUNaLEdBQUdFLE1BQU0sQ0FBQ0w7SUFDWjtJQUVBLG9DQUFvQztJQUNwQyxNQUFNTyxnQkFBZ0I7WUFBQyxFQUFFQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsS0FBSyxFQUFzQjtRQUNuRSxJQUFJRixVQUFVQyxXQUFXQSxRQUFRRSxNQUFNLEVBQUU7WUFDdkMscUJBQ0UsOERBQUNDO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUVELFdBQVU7a0NBQWUsUUFBYyxPQUFOSDs7Ozs7O2tDQUNwQyw4REFBQ0k7d0JBQUVELFdBQVU7OzRCQUFnQjs0QkFDZlAsbUJBQW1CRyxPQUFPLENBQUMsRUFBRSxDQUFDVCxLQUFLOzs7Ozs7Ozs7Ozs7O1FBSXZEO1FBQ0EsT0FBTztJQUNUO0lBRUEscUJBQ0UsOERBQUNKLHFKQUFtQkE7UUFBQ21CLE9BQU07UUFBT0MsUUFBUTtrQkFDeEMsNEVBQUN4QiwySUFBU0E7WUFDUk0sTUFBTUE7WUFDTm1CLFFBQVE7Z0JBQ05DLEtBQUs7Z0JBQ0xDLE9BQU87Z0JBQ1BDLE1BQU07Z0JBQ05DLFFBQVE7WUFDVjs7OEJBRUEsOERBQUMvQiwrSUFBYUE7b0JBQUNnQyxpQkFBZ0I7b0JBQU1DLFNBQVM7Ozs7Ozs4QkFDOUMsOERBQUM5Qix1SUFBS0E7b0JBQ0orQixTQUFRO29CQUNSQyxNQUFNO3dCQUFFQyxVQUFVO29CQUFHOzs7Ozs7OEJBRXZCLDhEQUFDaEMsdUlBQUtBO29CQUNKK0IsTUFBTTt3QkFBRUMsVUFBVTtvQkFBRztvQkFDckJDLGVBQWU1Qjs7Ozs7OzhCQUVqQiw4REFBQ0oseUlBQU9BO29CQUFDaUMsdUJBQVMsOERBQUNyQjs7Ozs7Ozs7Ozs4QkFDbkIsOERBQUNoQixzSUFBSUE7b0JBQ0hzQyxNQUFLO29CQUNMTCxTQUFRO29CQUNSTSxRQUFPO29CQUNQQyxhQUFhO29CQUNiQyxLQUFLO3dCQUFFQyxHQUFHO29CQUFFO29CQUNaQyxXQUFXO3dCQUFFRCxHQUFHO29CQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztBQUs1QjtLQS9EU3BDO0FBaUVULGlFQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL1BvcHVsYXRpb25DaGFydC50c3g/ZWM0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIENhcnRlc2lhbkdyaWQsXHJcbiAgTGluZSxcclxuICBMaW5lQ2hhcnQsXHJcbiAgWEF4aXMsXHJcbiAgWUF4aXMsXHJcbiAgVG9vbHRpcCxcclxuICBSZXNwb25zaXZlQ29udGFpbmVyLFxyXG4gIFRvb2x0aXBQcm9wc1xyXG59IGZyb20gJ3JlY2hhcnRzJztcclxuXHJcbmludGVyZmFjZSBQb3B1bGF0aW9uRGF0YSB7XHJcbiAgeWVhcjogc3RyaW5nO1xyXG4gIHZhbHVlOiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBQb3B1bGF0aW9uQ2hhcnRQcm9wcyB7XHJcbiAgZGF0YTogUG9wdWxhdGlvbkRhdGFbXTtcclxufVxyXG5cclxuLy8gSW50ZXJmYWNlIHBhcmEgbyB0b29sdGlwIGN1c3RvbWl6YWRvXHJcbmludGVyZmFjZSBDdXN0b21Ub29sdGlwUHJvcHMgZXh0ZW5kcyBUb29sdGlwUHJvcHM8bnVtYmVyLCBzdHJpbmc+IHtcclxuICBhY3RpdmU/OiBib29sZWFuO1xyXG4gIHBheWxvYWQ/OiBhbnlbXTtcclxuICBsYWJlbD86IHN0cmluZztcclxufVxyXG5cclxuZnVuY3Rpb24gUG9wdWxhdGlvbkNoYXJ0KHsgZGF0YSB9OiBQb3B1bGF0aW9uQ2hhcnRQcm9wcykge1xyXG4gIC8vIEZ1bsOnw6NvIHBhcmEgZm9ybWF0YXIgbsO6bWVyb3Mgbm8gZWl4byBZXHJcbiAgY29uc3QgZm9ybWF0UG9wdWxhdGlvbiA9ICh2YWx1ZTogbnVtYmVyKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdwdC1CUicsIHtcclxuICAgICAgbm90YXRpb246ICdjb21wYWN0JyxcclxuICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxXHJcbiAgICB9KS5mb3JtYXQodmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIC8vIEZ1bsOnw6NvIHBhcmEgZm9ybWF0byBjb21wbGV0byBubyB0b29sdGlwXHJcbiAgY29uc3QgZm9ybWF0VG9vbHRpcFZhbHVlID0gKHZhbHVlOiBudW1iZXIpID0+IHtcclxuICAgIHJldHVybiBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ3B0LUJSJywge1xyXG4gICAgICBub3RhdGlvbjogJ3N0YW5kYXJkJ1xyXG4gICAgfSkuZm9ybWF0KHZhbHVlKTtcclxuICB9O1xyXG5cclxuICAvLyBDb21wb25lbnRlIGRvIHRvb2x0aXAgY3VzdG9taXphZG9cclxuICBjb25zdCBDdXN0b21Ub29sdGlwID0gKHsgYWN0aXZlLCBwYXlsb2FkLCBsYWJlbCB9OiBDdXN0b21Ub29sdGlwUHJvcHMpID0+IHtcclxuICAgIGlmIChhY3RpdmUgJiYgcGF5bG9hZCAmJiBwYXlsb2FkLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC00IGJvcmRlciByb3VuZGVkLWxnIHNoYWRvdy1sZ1wiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj57YEFubzogJHtsYWJlbH1gfTwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmx1ZS02MDBcIj5cclxuICAgICAgICAgICAgUG9wdWxhw6fDo286IHtmb3JtYXRUb29sdGlwVmFsdWUocGF5bG9hZFswXS52YWx1ZSl9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlc3BvbnNpdmVDb250YWluZXIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PXs0MDB9PlxyXG4gICAgICA8TGluZUNoYXJ0XHJcbiAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICBtYXJnaW49e3tcclxuICAgICAgICAgIHRvcDogMjAsXHJcbiAgICAgICAgICByaWdodDogMzAsXHJcbiAgICAgICAgICBsZWZ0OiA0MCxcclxuICAgICAgICAgIGJvdHRvbTogMjBcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPENhcnRlc2lhbkdyaWQgc3Ryb2tlRGFzaGFycmF5PVwiMyAzXCIgb3BhY2l0eT17MC4zfSAvPlxyXG4gICAgICAgIDxYQXhpc1xyXG4gICAgICAgICAgZGF0YUtleT1cInllYXJcIlxyXG4gICAgICAgICAgdGljaz17eyBmb250U2l6ZTogMTIgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxZQXhpc1xyXG4gICAgICAgICAgdGljaz17eyBmb250U2l6ZTogMTIgfX1cclxuICAgICAgICAgIHRpY2tGb3JtYXR0ZXI9e2Zvcm1hdFBvcHVsYXRpb259XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8VG9vbHRpcCBjb250ZW50PXs8Q3VzdG9tVG9vbHRpcCAvPn0gLz5cclxuICAgICAgICA8TGluZVxyXG4gICAgICAgICAgdHlwZT1cIm1vbm90b25lXCJcclxuICAgICAgICAgIGRhdGFLZXk9XCJ2YWx1ZVwiXHJcbiAgICAgICAgICBzdHJva2U9XCIjMjU2M2ViXCJcclxuICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxyXG4gICAgICAgICAgZG90PXt7IHI6IDQgfX1cclxuICAgICAgICAgIGFjdGl2ZURvdD17eyByOiA2IH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9MaW5lQ2hhcnQ+XHJcbiAgICA8L1Jlc3BvbnNpdmVDb250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9wdWxhdGlvbkNoYXJ0OyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNhcnRlc2lhbkdyaWQiLCJMaW5lIiwiTGluZUNoYXJ0IiwiWEF4aXMiLCJZQXhpcyIsIlRvb2x0aXAiLCJSZXNwb25zaXZlQ29udGFpbmVyIiwiUG9wdWxhdGlvbkNoYXJ0IiwiZGF0YSIsImZvcm1hdFBvcHVsYXRpb24iLCJ2YWx1ZSIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJub3RhdGlvbiIsIm1heGltdW1GcmFjdGlvbkRpZ2l0cyIsImZvcm1hdCIsImZvcm1hdFRvb2x0aXBWYWx1ZSIsIkN1c3RvbVRvb2x0aXAiLCJhY3RpdmUiLCJwYXlsb2FkIiwibGFiZWwiLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImxlZnQiLCJib3R0b20iLCJzdHJva2VEYXNoYXJyYXkiLCJvcGFjaXR5IiwiZGF0YUtleSIsInRpY2siLCJmb250U2l6ZSIsInRpY2tGb3JtYXR0ZXIiLCJjb250ZW50IiwidHlwZSIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwiZG90IiwiciIsImFjdGl2ZURvdCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/PopulationChart.tsx\n"));

/***/ })

});