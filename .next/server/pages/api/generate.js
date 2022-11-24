"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/generate";
exports.ids = ["pages/api/generate"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./pages/api/generate.js":
/*!*******************************!*\
  !*** ./pages/api/generate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    const completion = await openai.createCompletion({\n        model: \"text-davinci-002\",\n        prompt: generatePrompt(req.body.prompt),\n        temperature: 0.3,\n        max_tokens: 300\n    });\n    res.status(200).json({\n        result: completion.data.choices[0].text\n    });\n};\nfunction generatePrompt(prompt) {\n    const capitalizedAnimal = prompt[0].toUpperCase() + prompt.slice(1).toLowerCase();\n    return capitalizedAnimal;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBRWxELE1BQU1FLGFBQWEsR0FBRyxJQUFJRixpREFBYSxDQUFDO0lBQ3RDRyxNQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxjQUFjO0NBQ25DLENBQUM7QUFDRixNQUFNQyxNQUFNLEdBQUcsSUFBSU4sNkNBQVMsQ0FBQ0MsYUFBYSxDQUFDO0FBRTNDLDZCQUFlLDBDQUFnQk0sR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDdkMsTUFBTUMsVUFBVSxHQUFHLE1BQU1ILE1BQU0sQ0FBQ0ksZ0JBQWdCLENBQUM7UUFDL0NDLEtBQUssRUFBRSxrQkFBa0I7UUFDekJDLE1BQU0sRUFBRUMsY0FBYyxDQUFDTixHQUFHLENBQUNPLElBQUksQ0FBQ0YsTUFBTSxDQUFDO1FBQ3ZDRyxXQUFXLEVBQUUsR0FBRztRQUNoQkMsVUFBVSxFQUFFLEdBQUc7S0FDaEIsQ0FBQztJQUNGUixHQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1FBQUVDLE1BQU0sRUFBRVYsVUFBVSxDQUFDVyxJQUFJLENBQUNDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsSUFBSTtLQUFFLENBQUMsQ0FBQztDQUNuRTtBQUVELFNBQVNULGNBQWMsQ0FBQ0QsTUFBTSxFQUFFO0lBQzlCLE1BQU1XLGlCQUFpQixHQUNyQlgsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDWSxXQUFXLEVBQUUsR0FBR1osTUFBTSxDQUFDYSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUNDLFdBQVcsRUFBRTtJQUN6RCxPQUFPSCxpQkFBaUIsQ0FBQztDQUMxQiIsInNvdXJjZXMiOlsid2VicGFjazovL29wZW5haS1xdWlja3N0YXJ0LW5vZGUvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanM/NjI3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWd1cmF0aW9uLCBPcGVuQUlBcGkgfSBmcm9tIFwib3BlbmFpXCI7XG5cbmNvbnN0IGNvbmZpZ3VyYXRpb24gPSBuZXcgQ29uZmlndXJhdGlvbih7XG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuT1BFTkFJX0FQSV9LRVksXG59KTtcbmNvbnN0IG9wZW5haSA9IG5ldyBPcGVuQUlBcGkoY29uZmlndXJhdGlvbik7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICBjb25zdCBjb21wbGV0aW9uID0gYXdhaXQgb3BlbmFpLmNyZWF0ZUNvbXBsZXRpb24oe1xuICAgIG1vZGVsOiBcInRleHQtZGF2aW5jaS0wMDJcIixcbiAgICBwcm9tcHQ6IGdlbmVyYXRlUHJvbXB0KHJlcS5ib2R5LnByb21wdCksXG4gICAgdGVtcGVyYXR1cmU6IDAuMyxcbiAgICBtYXhfdG9rZW5zOiAzMDBcbiAgfSk7XG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgcmVzdWx0OiBjb21wbGV0aW9uLmRhdGEuY2hvaWNlc1swXS50ZXh0IH0pO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVByb21wdChwcm9tcHQpIHtcbiAgY29uc3QgY2FwaXRhbGl6ZWRBbmltYWwgPVxuICAgIHByb21wdFswXS50b1VwcGVyQ2FzZSgpICsgcHJvbXB0LnNsaWNlKDEpLnRvTG93ZXJDYXNlKCk7XG4gIHJldHVybiBjYXBpdGFsaXplZEFuaW1hbDtcbn1cbiJdLCJuYW1lcyI6WyJDb25maWd1cmF0aW9uIiwiT3BlbkFJQXBpIiwiY29uZmlndXJhdGlvbiIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJPUEVOQUlfQVBJX0tFWSIsIm9wZW5haSIsInJlcSIsInJlcyIsImNvbXBsZXRpb24iLCJjcmVhdGVDb21wbGV0aW9uIiwibW9kZWwiLCJwcm9tcHQiLCJnZW5lcmF0ZVByb21wdCIsImJvZHkiLCJ0ZW1wZXJhdHVyZSIsIm1heF90b2tlbnMiLCJzdGF0dXMiLCJqc29uIiwicmVzdWx0IiwiZGF0YSIsImNob2ljZXMiLCJ0ZXh0IiwiY2FwaXRhbGl6ZWRBbmltYWwiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwidG9Mb3dlckNhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/generate.js"));
module.exports = __webpack_exports__;

})();