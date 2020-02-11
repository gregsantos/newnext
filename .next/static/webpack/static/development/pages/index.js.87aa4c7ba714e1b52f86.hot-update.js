webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");

var _jsxFileName = "/Users/GMS/Dev/next/newnext/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var Index = function Index(_ref) {
  var users = _ref.users;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      date = _useState[0],
      setDate = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    function getDate() {
      var res, newDate;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getDate$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('/api/date'));

            case 2:
              res = _context.sent;
              _context.next = 5;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

            case 5:
              newDate = _context.sent;
              setDate(newDate);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      });
    }

    getDate();
  }, []);
  return __jsx("div", {
    className: "jsx-3153929447",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/todos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-3153929447",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Todos Page")), __jsx("p", {
    className: "jsx-3153929447" + " " + 'row date',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "The date is:\xA0", ' ', date ? __jsx("span", {
    className: "jsx-3153929447",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("b", {
    className: "jsx-3153929447",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, date.date)) : __jsx("span", {
    className: "jsx-3153929447" + " " + 'loading',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })), __jsx("ul", {
    className: "jsx-3153929447",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, users && users.map(function (user) {
    return __jsx("li", {
      key: user.id,
      className: "jsx-3153929447",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/user/[id]",
      as: "/user/".concat(user.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-3153929447",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "User ".concat(user.id))));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3153929447",
    __self: this
  }, ".hero.jsx-3153929447{width:100%;color:#333;}.title.jsx-3153929447{margin:0;width:100%;padding-top:80px;line-height:1.15;font-size:48px;}.title.jsx-3153929447,.description.jsx-3153929447{text-align:center;}.row.jsx-3153929447{max-width:880px;margin:80px auto 40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.date.jsx-3153929447{height:24px;max-width:calc(100% - 32px) text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0 16px;}.date.jsx-3153929447 p.jsx-3153929447{text-align:center;}.date.jsx-3153929447 span.jsx-3153929447{width:176px;text-align:center;}@-webkit-keyframes Loading-jsx-3153929447{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}@keyframes Loading-jsx-3153929447{0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}.date.jsx-3153929447 .loading.jsx-3153929447{max-width:100%;height:24px;border-radius:4px;display:inline-block;background:linear-gradient(270deg,#D1D1D1,#EAEAEA);background-size:200% 200%;-webkit-animation:Loading-jsx-3153929447 2s ease infinite;animation:Loading-jsx-3153929447 2s ease infinite;}.card.jsx-3153929447{padding:18px 18px 24px;width:220px;text-align:left;-webkit-text-decoration:none;text-decoration:none;color:#434343;border:1px solid #9b9b9b;}.card.jsx-3153929447:hover{border-color:#067df7;}.card.jsx-3153929447 h3.jsx-3153929447{margin:0;color:#067df7;font-size:18px;}.card.jsx-3153929447 p.jsx-3153929447{margin:0;padding:12px 0 0;font-size:13px;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HTVMvRGV2L25leHQvbmV3bmV4dC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQ2tCLEFBR3NCLEFBSUYsQUFRUyxBQUdGLEFBT0osQUFTTSxBQUdOLEFBSWUsQUFDRyxBQUNELEFBR2QsQUFTUSxBQVFGLEFBR1osQUFLQSxTQS9ERSxBQTJERyxBQUtHLEVBcEVOLENBdUJPLEFBV0EsR0FTTixDQTVCVSxFQUh4QixBQW1CQSxFQTFCbUIsQ0F1RG5CLENBM0RBLENBbURjLEFBWUcsR0FLQSxDQWhDYSxBQUVFLEFBS1osRUFOYSxDQUhqQyxLQWtCa0IsRUEvQ0MsQ0FVSixBQWlEZixHQUthLElBekJVLE1BU0EsQ0FpQnZCLEVBaEVpQixJQWlCRixRQXNCd0MsR0F0Q3ZELGdDQStDZ0IsV0F0Q0ssR0F1Q00sRUFUQyxlQXRCUCxRQWdDckIsR0FUcUMsc0NBOUJOLDRDQVFOLDBCQXVCekIscURBOUJBLG9CQVFpQixlQUNqQiIsImZpbGUiOiIvVXNlcnMvR01TL0Rldi9uZXh0L25ld25leHQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCBIZWFkIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZCdcbmltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9uYXYnXG5cbmNvbnN0IEluZGV4ID0gKHsgdXNlcnMgfSkgPT4ge1xuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZShudWxsKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0ZSgpIHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL2RhdGUnKVxuICAgICAgY29uc3QgbmV3RGF0ZSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICAgIHNldERhdGUobmV3RGF0ZSlcbiAgICB9XG4gICAgZ2V0RGF0ZSgpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxMaW5rIGhyZWY9Jy90b2Rvcyc+XG4gICAgICAgIDxhPlRvZG9zIFBhZ2U8L2E+XG4gICAgICA8L0xpbms+XG4gICAgICA8cCBjbGFzc05hbWU9J3JvdyBkYXRlJz5cbiAgICAgICAgVGhlIGRhdGUgaXM6Jm5ic3A7eycgJ31cbiAgICAgICAge2RhdGUgPyAoXG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICA8Yj57ZGF0ZS5kYXRlfTwvYj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdsb2FkaW5nJz48L3NwYW4+XG4gICAgICAgICl9XG4gICAgICA8L3A+XG4gICAgICA8dWw+XG4gICAgICAgIHt1c2VycyAmJlxuICAgICAgICAgIHVzZXJzLm1hcCh1c2VyID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e3VzZXIuaWR9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPScvdXNlci9baWRdJyBhcz17YC91c2VyLyR7dXNlci5pZH1gfT5cbiAgICAgICAgICAgICAgICA8YT57YFVzZXIgJHt1c2VyLmlkfWB9PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmhlcm8ge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICB9XG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA4MHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgICAgfVxuICAgICAgICAudGl0bGUsXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5yb3cge1xuICAgICAgICAgIG1heC13aWR0aDogODgwcHg7XG4gICAgICAgICAgbWFyZ2luOiA4MHB4IGF1dG8gNDBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIH1cbiAgICAgICAgLmRhdGUge1xuICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmRhdGUgcCB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5kYXRlIHNwYW4ge1xuICAgICAgICAgIHdpZHRoOiAxNzZweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgQGtleWZyYW1lcyBMb2FkaW5nIHtcbiAgICAgICAgICAwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjAlIDUwJX1cbiAgICAgICAgICA1MCV7YmFja2dyb3VuZC1wb3NpdGlvbjoxMDAlIDUwJX1cbiAgICAgICAgICAxMDAle2JhY2tncm91bmQtcG9zaXRpb246MCUgNTAlfVxuICAgICAgICB9XG4gICAgICAgIC5kYXRlIC5sb2FkaW5nIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI0QxRDFEMSwgI0VBRUFFQSk7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDIwMCU7XG4gICAgICAgICAgYW5pbWF0aW9uOiBMb2FkaW5nIDJzIGVhc2UgaW5maW5pdGU7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgIHBhZGRpbmc6IDE4cHggMThweCAyNHB4O1xuICAgICAgICAgIHdpZHRoOiAyMjBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogIzQzNDM0MztcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOWI5YjliO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkOmhvdmVyIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMwNjdkZjc7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQgaDMge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBjb2xvcjogIzA2N2RmNztcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQgcCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDEycHggMCAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHJlcSB9KSA9PiB7XG4gIC8vICBjb25zdCBiYXNlVXJsID0gcmVxID8gYCR7cmVxLnByb3RvY29sfTovLyR7cmVxLmhlYWRlcnMuaG9zdH1gIDogJydcbiAgY29uc3QgcHJvdG9jb2wgPSByZXEuaGVhZGVyc1sneC1mb3J3YXJkZWQtcHJvdG8nXSB8fCAnaHR0cCdcbiAgY29uc3QgYmFzZVVybCA9IHJlcSA/IGAke3Byb3RvY29sfTovLyR7cmVxLmhlYWRlcnMuaG9zdH1gIDogJydcbiAgLy8gY29uc3QgYmFzZVVybCA9IHJlcSA/IGAke3JlcS5oZWFkZXJzLnJlZmVyZXJ9YCA6ICcnXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybCArICcvYXBpL3VzZXJzJ31gKVxuICBjb25zdCB1c2VycyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG4gIHJldHVybiB7IHVzZXJzIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdfQ== */\n/*@ sourceURL=/Users/GMS/Dev/next/newnext/pages/index.js */"));
};

Index.getInitialProps = function _callee(_ref2) {
  var req, protocol, baseUrl, response, users;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          req = _ref2.req;
          //  const baseUrl = req ? `${req.protocol}://${req.headers.host}` : ''
          protocol = req.headers['x-forwarded-proto'] || 'http';
          baseUrl = req ? "".concat(protocol, "://").concat(req.headers.host) : ''; // const baseUrl = req ? `${req.headers.referer}` : ''

          _context2.next = 5;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("".concat(baseUrl + '/api/users')));

        case 5:
          response = _context2.sent;
          _context2.next = 8;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(response.json());

        case 8:
          users = _context2.sent;
          return _context2.abrupt("return", {
            users: users
          });

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.87aa4c7ba714e1b52f86.hot-update.js.map