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

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n\n\n\nconst DUMMY_MEETUPS = [\n    {\n        id: \"m1\",\n        title: \"A first meetup\",\n        image: \"https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVldHVwfGVufDB8fDB8fA%3D%3D&w=1000&q=80\",\n        address: \"1 Meetup Street, ABC city\",\n        description: \"This is a first meetup\"\n    },\n    {\n        id: \"m2\",\n        title: \"A second meetup\",\n        image: \"https://plus.unsplash.com/premium_photo-1663134377392-50c34664d632?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80\",\n        address: \"2 Meetup Street, ABC city\",\n        description: \"This is a second meetup\"\n    }\n];\nfunction HomePage(props) {\n    // const [loadedMeetups, setLoadedMeetups] = useState([]);\n    // useEffect(() => {\n    //   //fetchdata\n    //   // const data = DUMMY_MEETUPS;\n    //   // console.log(data);\n    //   setLoadedMeetups(DUMMY_MEETUPS);\n    // }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {}, void 0, false, {\n                fileName: \"D:\\\\l2code\\\\react\\\\section23\\\\meetup\\\\pages\\\\index.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                meetups: props.meetups\n            }, void 0, false, {\n                fileName: \"D:\\\\l2code\\\\react\\\\section23\\\\meetup\\\\pages\\\\index.js\",\n                lineNumber: 37,\n                columnNumber: 21\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = HomePage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTZCO0FBQzZCO0FBSTFELE1BQU1FLGdCQUFnQjtJQUNwQjtRQUNFQyxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsT0FDRTtRQUNGQyxTQUFTO1FBQ1RDLGFBQWE7SUFDZjtJQUNBO1FBQ0VKLElBQUk7UUFDSkMsT0FBTztRQUNQQyxPQUNFO1FBQ0ZDLFNBQVM7UUFDVEMsYUFBYTtJQUNmO0NBQ0Q7QUFFRCxTQUFTQyxTQUFTQyxLQUFLLEVBQUU7SUFDdkIsMERBQTBEO0lBRTFELG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsbUNBQW1DO0lBQ25DLDBCQUEwQjtJQUMxQixxQ0FBcUM7SUFDckMsVUFBVTtJQUVWLHFCQUNFOzswQkFDRSw4REFBQ1Qsa0RBQUlBOzs7OztZQUFROzBCQUFDLDhEQUFDQyxzRUFBVUE7Z0JBQUNTLFNBQVNELE1BQU1DLE9BQU87Ozs7Ozs7O0FBR3REO0tBZlNGOztBQWlFVCwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IE1lZXR1cExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0XCI7XHJcblxyXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XHJcblxyXG5jb25zdCBEVU1NWV9NRUVUVVBTID0gW1xyXG4gIHtcclxuICAgIGlkOiBcIm0xXCIsXHJcbiAgICB0aXRsZTogXCJBIGZpcnN0IG1lZXR1cFwiLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1Njg5OTI2ODgwNjUtNTM2YWFkOGExMmY2P2l4bGliPXJiLTQuMC4zJml4aWQ9TW53eE1qQTNmREI4TUh4elpXRnlZMmg4TW54OGJXVmxkSFZ3ZkdWdWZEQjhmREI4ZkElM0QlM0Qmdz0xMDAwJnE9ODBcIixcclxuICAgIGFkZHJlc3M6IFwiMSBNZWV0dXAgU3RyZWV0LCBBQkMgY2l0eVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIGZpcnN0IG1lZXR1cFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwibTJcIixcclxuICAgIHRpdGxlOiBcIkEgc2Vjb25kIG1lZXR1cFwiLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgIFwiaHR0cHM6Ly9wbHVzLnVuc3BsYXNoLmNvbS9wcmVtaXVtX3Bob3RvLTE2NjMxMzQzNzczOTItNTBjMzQ2NjRkNjMyP2l4bGliPXJiLTQuMC4zJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xMTcxJnE9ODBcIixcclxuICAgIGFkZHJlc3M6IFwiMiBNZWV0dXAgU3RyZWV0LCBBQkMgY2l0eVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIHNlY29uZCBtZWV0dXBcIixcclxuICB9LFxyXG5dO1xyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2UocHJvcHMpIHtcclxuICAvLyBjb25zdCBbbG9hZGVkTWVldHVwcywgc2V0TG9hZGVkTWVldHVwc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICAvL2ZldGNoZGF0YVxyXG4gIC8vICAgLy8gY29uc3QgZGF0YSA9IERVTU1ZX01FRVRVUFM7XHJcbiAgLy8gICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAvLyAgIHNldExvYWRlZE1lZXR1cHMoRFVNTVlfTUVFVFVQUyk7XHJcbiAgLy8gfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+PC9IZWFkPiA8TWVldHVwTGlzdCBtZWV0dXBzPXtwcm9wcy5tZWV0dXBzfSAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4vLyAgIC8vICB0aHNpIGZ1bmN0aW9uIGhhcyB0byBiZSBuYW1lZWQgZ2V0U3RhdGljUHJvcHMgZm9yIGl0IHRvIHdvcmsgYW5kIGhhcyB0byBiZSBkZWNsYXJlZCBpbiB0aGUgcGFnZXMgZmlsZXMuXHJcbi8vICAgLy8gIHRoaXMgd2lsbCBiZSBleGNlY3V0ZWQgYnkgbmV4dCBpbiB0aGUgbnBtIHJ1biBidWlsZCBwcm9jZXNzLih3aGljaCBtZWFucyBpdCB3b24ndCBiZSB1cGRhdGVkIGlmIHRoZXJlcyBhbiB1cGRhdGUgb2YgdGhlIGRhdGFiYXNlPylcclxuLy8gICAvLyBhbHdheXMgcmV0dXJuIGFuIG9iamVjdCBocmVyZVxyXG4vLyAgIC8vIGZlY3RoIGNvZGUgaGVyZSBmcm9tIHJlYWwgQVBJXHJcbi8vd2l0aG91dCB0aGlzKGFrYSB0aGUgdXNlU3RhdGUgYW5kIHVzZUVmZmVjdCByb3V0ZSB0aGF0IGZlY3RjaCBkYXRhIGluIGNvbXBvbmVudCksIHRoZSB2aWV3IHNvdXJjZSB3aWxsIGJlIHJlbmRlcmVkIHdpdGhvdXQgdGhlIGZlY3RoZWQgZGF0YSB3aXRoIGluaXRpYWwgcmVxdWVzdCwgYmVjYXN1ZSByZWFjdCB3aWxsIHRha2Ugb3ZlciBhbmQgcmVuZGVyIHdpdGggdXNlRWZmZWN0IGFmdGVyIGNvbXBvbmVudCBpcyBmaXJzdCBsb2FkZWRcclxuLy8gYmV0dGVyIGZvciBubyBhdXRoZW50aWNhdGlvbiBvciBubyBoaWdoIGZyZXF1ZW5jeSB1cGRhdGUsIGJlY2F1c2UgYSBzdGF0aWMgSFRNTCBpcyBjcmVhdGVkIGFuZCBzZXJ2ZWQgb24gYSBDRE4sIGFuZCBjYW4gYmUgY2FjaGVkIHJlc3VlZCBpbnN0ZWFkIG9mIHJlZ2VuZXJhdGVkIGFsbCB0aGUgdGltZVxyXG5cclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgcHJvcHM6IHsgbWVldHVwczogRFVNTVlfTUVFVFVQUyB9LFxyXG4vLyAgICAgcmV2YWxpZGF0ZTogMTAsXHJcbi8vICAgICAvLyB1bmxvY2sgaW5jcmVhbWVudGFsIHN0YXRpYyBnZW5lcmF0aW9uLCAxMCBpcyAxMCBzZWNvbmRzIG5leHQgd2lsbCB3YWl0IHVudGlsbCBpdCByZWdlbmVyYXRlIGEgcGFnZSBmb3IgYSBpbmNvbWluZyByZXF1ZXN0XHJcbi8vICAgICAvLyBpbiB0aGlzIGNhc2UgdGhlIHBhZ2Ugd2lsbCBiZSBnZW5lcmF0ZWQgKHByZS1yZW5kZXJlZCkgYWdhaW4gb24gdGhlIHNlcnZlciBldmVyeSAxMCBzZWNvbmRzIGFzIGxvbmcgYXMgdGhlcmVzIHJlcXVlc3QgZnJvbSB1c2VyIGZvciB0aGlzIHBhZ2VcclxuLy8gICAgIC8vU3RhdGljIHNpdGUgZ2VuZXJhdGlvblxyXG4vLyAgIH07XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHJlcSA9IGNvbnRleHQucmVxOyAvLyBnb29kIGZvciBhdXRoZW50aWNhdGlvbiBhbmQgY29va2llIHNlc3Npb25cclxuICBjb25zdCByZXMgPSBjb250ZXh0LnJlcztcclxuXHJcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT19VUkwpO1xyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcclxuXHJcbiAgY29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KCk7XHJcbiAgY2xpZW50LmNsb3NlKCk7XHJcblxyXG4gIC8vIGZldGNoKFwiL2FwaS9tZWV0dXBzXCIpOyB3ZWxsIG5vIG5lZWQgdGhlIGV4dHJhIHN0ZXAgYXMgeW91IGNhbiBnZXQgZGF0YSBkaXJlY3RseSBoZXJlIGJlY3Vhc2UgdGhpcyBpcyBvbmx5IHJ1biBvbiBzZXJ2ZXIgb3IgYnVpbGQgdGltZVxyXG5cclxuICAvL2ZldGNoIGRhdGEgZnJvbSBhcGlcclxuICAvL2dldFNlcnZlclNpZGVQcm9wcyB3aWxsIG5vdCBydW4gZHVyaW5nIHRoZSBidWlsZCBwcm9jZXNzIGJ1dCB3aWxsIHN0YXkgYW5kIHJ1biBvbiB0aGUgc2VydmVyKGFuZCBuZXZlciBvbiBjbGllbnQgc2lkZSkgZHVyaW5nIGRlcGxveW1lbnRcclxuICAvLyAgZ2V0U2VydmVyU2lkZVByb3BzIGlzIGEgcmVzZXJ2ZWQgZnVuY3Rpb24gbmFtZSBmb3IgbmV4dCBhbmQgYWxsb3dzIHNlcnZlciBmZWN0aCBuZXcgZGF0YSBnZW5lcmF0ZSBuZXcgcGFnZSB3aXRoIGV2ZXJ5IHJlcXVlc3RcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbWVldHVwczogbWVldHVwcy5tYXAoKG1lZXR1cCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBpZDogbWVldHVwLl9pZC50b1N0cmluZygpLFxyXG4gICAgICAgICAgdGl0bGU6IG1lZXR1cC50aXRsZSxcclxuICAgICAgICAgIGltYWdlOiBtZWV0dXAuaW1hZ2UsXHJcbiAgICAgICAgICBhZGRyZXNzOiBtZWV0dXAuYWRkcmVzcyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBtZWV0dXAuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgfTtcclxuICAgICAgfSksXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXSwibmFtZXMiOlsiSGVhZCIsIk1lZXR1cExpc3QiLCJEVU1NWV9NRUVUVVBTIiwiaWQiLCJ0aXRsZSIsImltYWdlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiSG9tZVBhZ2UiLCJwcm9wcyIsIm1lZXR1cHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/shared/lib/head */ \"./node_modules/next/dist/shared/lib/head.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLGlIQUFrRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzPzg4NDkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3Qvc2hhcmVkL2xpYi9oZWFkJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/head.js\n"));

/***/ })

});