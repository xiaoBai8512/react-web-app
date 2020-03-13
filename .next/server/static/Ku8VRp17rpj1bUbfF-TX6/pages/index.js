module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ROtW");


/***/ }),

/***/ "00an":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _inherits; });

// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "28wL":
/***/ (function(module, exports) {



/***/ }),

/***/ "2bPg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "BRlI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "PK3Q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _possibleConstructorReturn; });

// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

/***/ }),

/***/ "Q5Ww":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "ROtW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("2bPg");

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__("BRlI");

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 2 modules
var possibleConstructorReturn = __webpack_require__("PK3Q");

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("Q5Ww");

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("00an");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./src/plugin/axios/index.js
 // 创建一个 axios 实例

var service = external_axios_default.a.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  // baseURL: '/api',
  // withCredentials: true, // 跨域请求，允许保存cookie
  timeout: 100000 // 请求超时时间

}); // HTTPrequest拦截

service.interceptors.request.use(function (config) {
  // const { userId, activationCode, latestOrderSn } =
  var commonData = {
    showapi_appid: '42222',
    showapi_sign: '42932bad205a407a8429ba513cfbece1' // showapi_timestamp,
    // showapi_res_gzip,

  };
  console.log(23, config);
  var joinedCommonDataStr = '';

  for (var prop in commonData) {
    joinedCommonDataStr += "&".concat(prop, "=").concat(commonData[prop]);
  }

  if (config.method === 'get') {
    if (config.url.indexOf('?') > -1) {
      config.url += joinedCommonDataStr;
    } else {
      config.url += '?' + joinedCommonDataStr.substr(1);
    }

    return config;
  }

  if (config.method === 'post') {
    Object.assign(config.data, commonData);
    return config;
  }
}, function (error) {
  return Promise.reject(error);
}); // HTTPresponse拦截

service.interceptors.response.use(function (data) {
  // console.log('data', data)
  var res = data.data;

  if (res.status && res.status !== 'SUCCEED') {
    var errMsg = res.errorMessage;

    if (errMsg) {}
  } // console.log('data', data)


  return data;
}, function (error) {
  var errMsg;

  if (error && error.response) {
    if (error.response.data && error.response.data.status && error.response.data.status === 'FAILED') {
      errMsg = error.response.data.errorMessage;
    }

    if (errMsg) {}
  }

  if (errMsg) {
    error.message = errMsg;
  }

  return Promise.reject(error);
});
/* harmony default export */ var axios = (service);
// CONCATENATED MODULE: ./src/api/index.js

function fetchList(query) {
  return axios({
    url: '/126-2',
    method: 'get',
    data: query ? query : {}
  });
}
// EXTERNAL MODULE: ./src/pages/index/index.scss
var pages_index = __webpack_require__("28wL");

// CONCATENATED MODULE: ./src/pages/index/index.js









var index_index =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(index, _Component);

  function index(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, index);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(index).call(this, props));
    _this.state = {
      contentlist: []
    };
    return _this;
  }

  Object(createClass["a" /* default */])(index, [{
    key: "componentWillMount",
    value: function componentWillMount(props) {
      var _this2 = this;

      fetchList().then(function (_ref) {
        var data = _ref.data;

        // console.log(16, data)
        // console.log(data.showapi_res_body.pagebean.contentlist)
        _this2.setState({
          contentlist: data.showapi_res_body.pagebean.contentlist
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", {
        className: "contentlist"
      }, this.state.contentlist.map(function (item, index) {
        // console.log(item.avatarUrl)
        return external_react_default.a.createElement("div", {
          key: index
        }, external_react_default.a.createElement("img", {
          className: "avatarUrl",
          src: item.avatarUrl
        }), external_react_default.a.createElement("span", null, item.realName), external_react_default.a.createElement("span", null, item.totalFanNum), external_react_default.a.createElement("span", null, item.userId), external_react_default.a.createElement("span", null, item.city), external_react_default.a.createElement("span", null, item.height), external_react_default.a.createElement("span", null, item.weight), external_react_default.a.createElement("span", null, external_react_default.a.createElement("a", {
          href: item.link,
          target: "_black"
        }, "Link")));
      })));
    }
  }]);

  return index;
}(external_react_["Component"]);

/* harmony default export */ var src_pages_index = __webpack_exports__["default"] = (index_index);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });