webpackHotUpdate("static/development/pages/todos.js",{

/***/ "./pages/todos.js":
/*!************************!*\
  !*** ./pages/todos.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/GMS/Dev/next/newnext/pages/todos.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var Todos = function Todos(_ref) {
  var todos = _ref.todos;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "My Todos"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, todos && todos.map(function (t, i) {
    return __jsx("li", {
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, t.text);
  })));
};

Todos.getInitialProps = function _callee(_ref2) {
  var req, protocol, baseUrl, response, todos;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          req = _ref2.req;
          protocol = req ? req.headers['x-forwarded-proto'] || 'http' : '';
          baseUrl = req ? "".concat(protocol, "://").concat(req.headers.host) : ''; // const baseUrl = req ? `${req.headers.referer}` : ''

          _context.next = 5;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()("".concat(baseUrl + '/api/todos')));

        case 5:
          response = _context.sent;
          _context.next = 8;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(response.json());

        case 8:
          todos = _context.sent;
          return _context.abrupt("return", {
            todos: todos
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Todos);

/***/ })

})
//# sourceMappingURL=todos.js.4eb555506f4b36379af4.hot-update.js.map