"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst DUMMY_MEETUPS = [\n    {\n        id: \"m1\",\n        title: \"A first meetup\",\n        image: \"https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVldHVwfGVufDB8fDB8fA%3D%3D&w=1000&q=80\",\n        address: \"1 Meetup Street, ABC city\",\n        description: \"This is a first meetup\"\n    },\n    {\n        id: \"m2\",\n        title: \"A second meetup\",\n        image: \"https://plus.unsplash.com/premium_photo-1663134377392-50c34664d632?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80\",\n        address: \"2 Meetup Street, ABC city\",\n        description: \"This is a second meetup\"\n    }\n];\nfunction HomePage() {\n    _s();\n    const [loadedMeetups, setLoadedMeetups] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        //fetchdata\n        // const data = DUMMY_MEETUPS;\n        // console.log(data);\n        setLoadedMeetups(DUMMY_MEETUPS);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        meetups: loadedMeetups\n    }, void 0, false, {\n        fileName: \"D:\\\\l2code\\\\react\\\\section23\\\\meetup\\\\pages\\\\index.js\",\n        lineNumber: 33,\n        columnNumber: 10\n    }, this);\n}\n_s(HomePage, \"lt95aOlOC9RW+nrRzHOiZRPQygU=\");\n_c = HomePage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE0QztBQUNjO0FBRTFELE1BQU1HLGdCQUFnQjtJQUNwQjtRQUNFQyxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsT0FDRTtRQUNGQyxTQUFTO1FBQ1RDLGFBQWE7SUFDZjtJQUNBO1FBQ0VKLElBQUk7UUFDSkMsT0FBTztRQUNQQyxPQUNFO1FBQ0ZDLFNBQVM7UUFDVEMsYUFBYTtJQUNmO0NBQ0Q7QUFFRCxTQUFTQyxXQUFXOztJQUNsQixNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHViwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXJERCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsV0FBVztRQUNYLDhCQUE4QjtRQUM5QixxQkFBcUI7UUFDckJXLGlCQUFpQlI7SUFDbkIsR0FBRyxFQUFFO0lBRUwscUJBQU8sOERBQUNELHNFQUFVQTtRQUFDVSxTQUFTRjs7Ozs7O0FBQzlCO0dBWFNEO0tBQUFBOztBQWtCVCwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1lZXR1cExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0XCI7XHJcblxyXG5jb25zdCBEVU1NWV9NRUVUVVBTID0gW1xyXG4gIHtcclxuICAgIGlkOiBcIm0xXCIsXHJcbiAgICB0aXRsZTogXCJBIGZpcnN0IG1lZXR1cFwiLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1Njg5OTI2ODgwNjUtNTM2YWFkOGExMmY2P2l4bGliPXJiLTQuMC4zJml4aWQ9TW53eE1qQTNmREI4TUh4elpXRnlZMmg4TW54OGJXVmxkSFZ3ZkdWdWZEQjhmREI4ZkElM0QlM0Qmdz0xMDAwJnE9ODBcIixcclxuICAgIGFkZHJlc3M6IFwiMSBNZWV0dXAgU3RyZWV0LCBBQkMgY2l0eVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIGZpcnN0IG1lZXR1cFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwibTJcIixcclxuICAgIHRpdGxlOiBcIkEgc2Vjb25kIG1lZXR1cFwiLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgIFwiaHR0cHM6Ly9wbHVzLnVuc3BsYXNoLmNvbS9wcmVtaXVtX3Bob3RvLTE2NjMxMzQzNzczOTItNTBjMzQ2NjRkNjMyP2l4bGliPXJiLTQuMC4zJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xMTcxJnE9ODBcIixcclxuICAgIGFkZHJlc3M6IFwiMiBNZWV0dXAgU3RyZWV0LCBBQkMgY2l0eVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIHNlY29uZCBtZWV0dXBcIixcclxuICB9LFxyXG5dO1xyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XHJcbiAgY29uc3QgW2xvYWRlZE1lZXR1cHMsIHNldExvYWRlZE1lZXR1cHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy9mZXRjaGRhdGFcclxuICAgIC8vIGNvbnN0IGRhdGEgPSBEVU1NWV9NRUVUVVBTO1xyXG4gICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICBzZXRMb2FkZWRNZWV0dXBzKERVTU1ZX01FRVRVUFMpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIDxNZWV0dXBMaXN0IG1lZXR1cHM9e2xvYWRlZE1lZXR1cHN9IC8+O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgLy8gIHRoc2kgZnVuY3Rpb24gaGFzIHRvIGJlIG5hbWVlZCBnZXRTdGF0aWNQcm9wcyBmb3IgaXQgdG8gd29yayBhbmQgaGFzIHRvIGJlIGRlY2xhcmVkIGluIHRoZSBwYWdlcyBmaWxlcy5cclxuICAvLyB0aGlzIHdpbGwgYmUgZXhjZWN1dGVkIGJ5IG5leHQgaW4gdGhlIG5wbSBydW4gYnVpbGQgcHJvY2Vzcy4od2hpY2ggbWVhbnMgaXQgd29uJ3QgYmUgdXBkYXRlZCBpZiB0aGVyZXMgYW4gdXBkYXRlIG9mIHRoZSBkYXRhYmFzZT8pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJNZWV0dXBMaXN0IiwiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVQYWdlIiwibG9hZGVkTWVldHVwcyIsInNldExvYWRlZE1lZXR1cHMiLCJtZWV0dXBzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});