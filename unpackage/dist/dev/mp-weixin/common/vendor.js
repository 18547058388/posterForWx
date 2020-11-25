(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });var


EventChannel = /*#__PURE__*/function () {
  function EventChannel(id, events) {var _this = this;_classCallCheck(this, EventChannel);
    this.id = id;
    this.listener = {};
    this.emitCache = {};
    if (events) {
      Object.keys(events).forEach(function (name) {
        _this.on(name, events[name]);
      });
    }
  }_createClass(EventChannel, [{ key: "emit", value: function emit(

    eventName) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
      var fns = this.listener[eventName];
      if (!fns) {
        return (this.emitCache[eventName] || (this.emitCache[eventName] = [])).push(args);
      }
      fns.forEach(function (opt) {
        opt.fn.apply(opt.fn, args);
      });
      this.listener[eventName] = fns.filter(function (opt) {return opt.type !== 'once';});
    } }, { key: "on", value: function on(

    eventName, fn) {
      this._addListener(eventName, 'on', fn);
      this._clearCache(eventName);
    } }, { key: "once", value: function once(

    eventName, fn) {
      this._addListener(eventName, 'once', fn);
      this._clearCache(eventName);
    } }, { key: "off", value: function off(

    eventName, fn) {
      var fns = this.listener[eventName];
      if (!fns) {
        return;
      }
      if (fn) {
        for (var i = 0; i < fns.length;) {
          if (fns[i].fn === fn) {
            fns.splice(i, 1);
            i--;
          }
          i++;
        }
      } else {
        delete this.listener[eventName];
      }
    } }, { key: "_clearCache", value: function _clearCache(

    eventName) {
      var cacheArgs = this.emitCache[eventName];
      if (cacheArgs) {
        for (; cacheArgs.length > 0;) {
          this.emit.apply(this, [eventName].concat(cacheArgs.shift()));
        }
      }
    } }, { key: "_addListener", value: function _addListener(

    eventName, type, fn) {
      (this.listener[eventName] || (this.listener[eventName] = [])).push({
        fn: fn,
        type: type });

    } }]);return EventChannel;}();


var eventChannels = {};

var eventChannelStack = [];

var id = 0;

function initEventChannel(events) {var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  id++;
  var eventChannel = new EventChannel(id, events);
  if (cache) {
    eventChannels[id] = eventChannel;
    eventChannelStack.push(eventChannel);
  }
  return eventChannel;
}

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var navigateTo = {
  args: function args(fromArgs, toArgs) {
    var id = initEventChannel(fromArgs.events).id;
    if (fromArgs.url) {
      fromArgs.url = fromArgs.url + (fromArgs.url.indexOf('?') === -1 ? '?' : '&') + '__id__=' + id;
    }
  },
  returnValue: function returnValue(fromRes, toRes) {
    fromRes.eventChannel = getEventChannel();
  } };


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}
var protocols = {
  redirectTo: redirectTo,
  navigateTo: navigateTo,
  previewImage: previewImage,
  getSystemInfo: {
    returnValue: addSafeAreaInsets },

  getSystemInfoSync: {
    returnValue: addSafeAreaInsets } };


var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {args[_key4 - 1] = arguments[_key4];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_NAME":"Suokelian_Pill_1.0","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this2.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this2.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          // eslint-disable-next-line no-sparse-arrays
          ret.push(handler.apply(handlerCtx, (Array.isArray(params) ? params : []).concat([,,,,,,,,,, event])));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (!wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      var components = mpInstance.selectAllComponents('.vue-ref');
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        $refs[ref] = component.$vm || component;
      });
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  _vue.default.prototype.getOpenerEventChannel = function () {
    if (!this.__eventChannel__) {
      this.__eventChannel__ = new EventChannel();
    }
    return this.__eventChannel__;
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),

/***/ 10:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 11:
/*!****************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/node_modules/uview-ui/index.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
var _mixin = _interopRequireDefault(__webpack_require__(/*! ./libs/mixin/mixin.js */ 12));



var _request = _interopRequireDefault(__webpack_require__(/*! ./libs/request */ 13));




















var _queryParams = _interopRequireDefault(__webpack_require__(/*! ./libs/function/queryParams.js */ 17));

var _route = _interopRequireDefault(__webpack_require__(/*! ./libs/function/route.js */ 18));

var _timeFormat = _interopRequireDefault(__webpack_require__(/*! ./libs/function/timeFormat.js */ 19));

var _timeFrom = _interopRequireDefault(__webpack_require__(/*! ./libs/function/timeFrom.js */ 20));

var _colorGradient = _interopRequireDefault(__webpack_require__(/*! ./libs/function/colorGradient.js */ 21));

var _guid = _interopRequireDefault(__webpack_require__(/*! ./libs/function/guid.js */ 22));

var _color = _interopRequireDefault(__webpack_require__(/*! ./libs/function/color.js */ 23));

var _type2icon = _interopRequireDefault(__webpack_require__(/*! ./libs/function/type2icon.js */ 24));

var _randomArray = _interopRequireDefault(__webpack_require__(/*! ./libs/function/randomArray.js */ 25));

var _deepClone = _interopRequireDefault(__webpack_require__(/*! ./libs/function/deepClone.js */ 15));

var _deepMerge = _interopRequireDefault(__webpack_require__(/*! ./libs/function/deepMerge.js */ 14));

var _addUnit = _interopRequireDefault(__webpack_require__(/*! ./libs/function/addUnit.js */ 26));


var _test = _interopRequireDefault(__webpack_require__(/*! ./libs/function/test.js */ 16));

var _random = _interopRequireDefault(__webpack_require__(/*! ./libs/function/random.js */ 27));

var _trim = _interopRequireDefault(__webpack_require__(/*! ./libs/function/trim.js */ 28));

var _toast = _interopRequireDefault(__webpack_require__(/*! ./libs/function/toast.js */ 29));

var _getParent = _interopRequireDefault(__webpack_require__(/*! ./libs/function/getParent.js */ 30));

var _$parent = _interopRequireDefault(__webpack_require__(/*! ./libs/function/$parent.js */ 31));



var _sys = __webpack_require__(/*! ./libs/function/sys.js */ 32);

var _debounce = _interopRequireDefault(__webpack_require__(/*! ./libs/function/debounce.js */ 33));

var _throttle = _interopRequireDefault(__webpack_require__(/*! ./libs/function/throttle.js */ 34));



var _config = _interopRequireDefault(__webpack_require__(/*! ./libs/config/config.js */ 35));

var _zIndex = _interopRequireDefault(__webpack_require__(/*! ./libs/config/zIndex.js */ 36));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // 引入全局mixin
// 引入关于是否mixin集成小程序分享的配置
// import wxshare from './libs/mixin/mpShare.js'
// 全局挂载引入http相关请求拦截插件
function wranning(str) {// 开发环境进行信息输出,主要是一些报错信息
  // 这个环境的来由是在程序编写时候,点击hx编辑器运行调试代码的时候,详见:
  // 	https://uniapp.dcloud.io/frame?id=%e5%bc%80%e5%8f%91%e7%8e%af%e5%a2%83%e5%92%8c%e7%94%9f%e4%ba%a7%e7%8e%af%e5%a2%83
  if (true) {console.warn(str);}} // 尝试判断在根目录的/store中是否有$u.mixin.js，此文件uView默认为需要挂在到全局的vuex的state变量
// HX2.6.11版本,放到try中,控制台依然会警告,暂时不用此方式，
// let vuexStore = {};
// try {
// 	vuexStore = require("@/store/$u.mixin.js");
// } catch (e) {
// 	//TODO handle the exception
// }
// post类型对象参数转为get类型url参数
var $u = { queryParams: _queryParams.default, route: _route.default, timeFormat: _timeFormat.default, date: _timeFormat.default, // 另名date
  timeFrom: _timeFrom.default, colorGradient: _colorGradient.default.colorGradient, guid: _guid.default, color: _color.default, sys: _sys.sys, os: _sys.os, type2icon: _type2icon.default, randomArray: _randomArray.default, wranning: wranning, get: _request.default.get, post: _request.default.post,
  put: _request.default.put,
  'delete': _request.default.delete,
  hexToRgb: _colorGradient.default.hexToRgb,
  rgbToHex: _colorGradient.default.rgbToHex,
  test: _test.default,
  random: _random.default,
  deepClone: _deepClone.default,
  deepMerge: _deepMerge.default,
  getParent: _getParent.default,
  $parent: _$parent.default,
  addUnit: _addUnit.default,
  trim: _trim.default,
  type: ['primary', 'success', 'error', 'warning', 'info'],
  http: _request.default,
  toast: _toast.default,
  config: _config.default, // uView配置信息相关，比如版本号
  zIndex: _zIndex.default,
  debounce: _debounce.default,
  throttle: _throttle.default };


var install = function install(Vue) {
  Vue.mixin(_mixin.default);
  if (Vue.prototype.openShare) {
    Vue.mixin(mpShare);
  }
  // Vue.mixin(vuexStore);
  // 时间格式化，同时两个名称，date和timeFormat
  Vue.filter('timeFormat', function (timestamp, format) {
    return (0, _timeFormat.default)(timestamp, format);
  });
  Vue.filter('date', function (timestamp, format) {
    return (0, _timeFormat.default)(timestamp, format);
  });
  // 将多久以前的方法，注入到全局过滤器
  Vue.filter('timeFrom', function (timestamp, format) {
    return (0, _timeFrom.default)(timestamp, format);
  });
  Vue.prototype.$u = $u;
};var _default =

{
  install: install };exports.default = _default;

/***/ }),

/***/ 12:
/*!***************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/node_modules/uview-ui/libs/mixin/mixin.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni) {module.exports = {
  data: function data() {
    return {};
  },
  onLoad: function onLoad() {
    // getRect挂载到$u上，因为这方法需要使用in(this)，所以无法把它独立成一个单独的文件导出
    this.$u.getRect = this.$uGetRect;
  },
  methods: {
    // 查询节点信息
    // 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
    // 解决办法为在组件根部再套一个没有任何作用的view元素
    $uGetRect: function $uGetRect(selector, all) {var _this = this;
      return new Promise(function (resolve) {
        uni.createSelectorQuery().
        in(_this)[all ? 'selectAll' : 'select'](selector).
        boundingClientRect(function (rect) {
          if (all && Array.isArray(rect) && rect.length) {
            resolve(rect);
          }
          if (!all && rect) {
            resolve(rect);
          }
        }).
        exec();
      });
    },
    getParentData: function getParentData() {var _this2 = this;var parentName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      // 避免在created中去定义parent变量
      if (!this.parent) this.parent = false;
      // 这里的本质原理是，通过获取父组件实例(也即u-radio-group的this)
      // 将父组件this中对应的参数，赋值给本组件(u-radio的this)的parentData对象中对应的属性
      // 之所以需要这么做，是因为所有端中，头条小程序不支持通过this.parent.xxx去监听父组件参数的变化
      this.parent = this.$u.$parent.call(this, parentName);
      if (this.parent) {
        // 历遍parentData中的属性，将parent中的同名属性赋值给parentData
        Object.keys(this.parentData).map(function (key) {
          _this2.parentData[key] = _this2.parent[key];
        });
      }
    } },

  onReachBottom: function onReachBottom() {
    uni.$emit('uOnReachBottom');
  } };
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 13:
/*!*****************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/node_modules/uview-ui/libs/request/index.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _deepMerge = _interopRequireDefault(__webpack_require__(/*! ../function/deepMerge */ 14));
var _test = _interopRequireDefault(__webpack_require__(/*! ../function/test */ 16));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var
Request = /*#__PURE__*/function () {_createClass(Request, [{ key: "setConfig",
    // 设置全局默认配置
    value: function setConfig(customConfig) {
      // 深度合并对象，否则会造成对象深层属性丢失
      this.config = (0, _deepMerge.default)(this.config, customConfig);
    }

    // 主要请求部分
  }, { key: "request", value: function request() {var _this = this;var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // 检查请求拦截
      if (this.interceptor.request && typeof this.interceptor.request === 'function') {
        var tmpConfig = {};
        var interceptorRequest = this.interceptor.request(options);
        if (interceptorRequest === false) {
          // 返回一个处于pending状态中的Promise，来取消原promise，避免进入then()回调
          return new Promise(function () {});
        }
        this.options = interceptorRequest;
      }
      options.dataType = options.dataType || this.config.dataType;
      options.responseType = options.responseType || this.config.responseType;
      options.url = options.url || '';
      options.params = options.params || {};
      options.header = Object.assign(this.config.header, options.header);
      options.method = options.method || this.config.method;

      return new Promise(function (resolve, reject) {
        options.complete = function (response) {
          // 请求返回后，隐藏loading(如果请求返回快的话，可能会没有loading)
          uni.hideLoading();
          // 清除定时器，如果请求回来了，就无需loading
          clearTimeout(_this.config.timer);
          _this.config.timer = null;
          // 判断用户对拦截返回数据的要求，如果originalData为true，返回所有的数据(response)到拦截器，否则只返回response.data
          if (_this.config.originalData) {
            // 判断是否存在拦截器
            if (_this.interceptor.response && typeof _this.interceptor.response === 'function') {
              var resInterceptors = _this.interceptor.response(response);
              // 如果拦截器不返回false，就将拦截器返回的内容给this.$u.post的then回调
              if (resInterceptors !== false) {
                resolve(resInterceptors);
              } else {
                // 如果拦截器返回false，意味着拦截器定义者认为返回有问题，直接接入catch回调
                reject(response);
              }
            } else {
              // 如果要求返回原始数据，就算没有拦截器，也返回最原始的数据
              resolve(response);
            }
          } else {
            if (response.statusCode == 200) {
              if (_this.interceptor.response && typeof _this.interceptor.response === 'function') {
                var _resInterceptors = _this.interceptor.response(response.data);
                if (_resInterceptors !== false) {
                  resolve(_resInterceptors);
                } else {
                  reject(response.data);
                }
              } else {
                // 如果不是返回原始数据(originalData=false)，且没有拦截器的情况下，返回纯数据给then回调
                resolve(response.data);
              }
            } else {
              // 不返回原始数据的情况下，服务器状态码不为200，modal弹框提示
              // if(response.errMsg) {
              // 	uni.showModal({
              // 		title: response.errMsg
              // 	});
              // }
              reject(response);
            }
          }
        };

        // 判断用户传递的URL是否/开头,如果不是,加上/，这里使用了uView的test.js验证库的url()方法
        options.url = _test.default.url(options.url) ? options.url : _this.config.baseUrl + (options.url.indexOf('/') == 0 ?
        options.url : '/' + options.url);

        // 是否显示loading
        // 加一个是否已有timer定时器的判断，否则有两个同时请求的时候，后者会清除前者的定时器id
        // 而没有清除前者的定时器，导致前者超时，一直显示loading
        if (_this.config.showLoading && !_this.config.timer) {
          _this.config.timer = setTimeout(function () {
            uni.showLoading({
              title: _this.config.loadingText,
              mask: _this.config.loadingMask });

            _this.config.timer = null;
          }, _this.config.loadingTime);
        }
        uni.request(options);
      });
      // .catch(res => {
      // 	// 如果返回reject()，不让其进入this.$u.post().then().catch()后面的catct()
      // 	// 因为很多人都会忘了写后面的catch()，导致报错捕获不到catch
      // 	return new Promise(()=>{});
      // })
    } }]);

  function Request() {var _this2 = this;_classCallCheck(this, Request);
    this.config = {
      baseUrl: '', // 请求的根域名
      // 默认的请求头
      header: {},
      method: 'POST',
      // 设置为json，返回后uni.request会对数据进行一次JSON.parse
      dataType: 'json',
      // 此参数无需处理，因为5+和支付宝小程序不支持，默认为text即可
      responseType: 'text',
      showLoading: true, // 是否显示请求中的loading
      loadingText: '请求中...',
      loadingTime: 800, // 在此时间内，请求还没回来的话，就显示加载中动画，单位ms
      timer: null, // 定时器
      originalData: false, // 是否在拦截器中返回服务端的原始数据，见文档说明
      loadingMask: true // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
    };

    // 拦截器
    this.interceptor = {
      // 请求前的拦截
      request: null,
      // 请求后的拦截
      response: null };


    // get请求
    this.get = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        method: 'GET',
        url: url,
        header: header,
        data: data });

    };

    // post请求
    this.post = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        url: url,
        method: 'POST',
        header: header,
        data: data });

    };

    // put请求，不支持支付宝小程序(HX2.6.15)
    this.put = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        url: url,
        method: 'PUT',
        header: header,
        data: data });

    };

    // delete请求，不支持支付宝和头条小程序(HX2.6.15)
    this.delete = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        url: url,
        method: 'DELETE',
        header: header,
        data: data });

    };
  }return Request;}();var _default =

new Request();exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 14:
/*!**********************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/node_modules/uview-ui/libs/function/deepMerge.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _deepClone = _interopRequireDefault(__webpack_require__(/*! ./deepClone */ 15));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// JS对象深度合并
function deepMerge() {var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  target = (0, _deepClone.default)(target);
  if (typeof target !== 'object' || typeof source !== 'object') return false;
  for (var prop in source) {
    if (!source.hasOwnProperty(prop)) continue;
    if (prop in target) {
      if (typeof target[prop] !== 'object') {
        target[prop] = source[prop];
      } else {
        if (typeof source[prop] !== 'object') {
          target[prop] = source[prop];
        } else {
          if (target[prop].concat && source[prop].concat) {
            target[prop] = target[prop].concat(source[prop]);
          } else {
            target[prop] = deepMerge(target[prop], source[prop]);
          }
        }
      }
    } else {
      target[prop] = source[prop];
    }
  }
  return target;
}var _default =

deepMerge;exports.default = _default;

/***/ }),

/***/ 15:
/*!**********************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/node_modules/uview-ui/libs/function/deepClone.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
}

// 深度克隆
function deepClone(obj) {
  // 对常见的“非”值，直接返回原来值
  if ([null, undefined, NaN, false].includes(obj)) return obj;
  if (typeof obj !== "object" && typeof obj !== 'function') {
    //原始类型直接返回
    return obj;
  }
  var o = isArray(obj) ? [] : {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
    }
  }
  return o;
}var _default =

deepClone;exports.default = _default;

/***/ }),

/***/ 16:
/*!*****************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/node_modules/uview-ui/libs/function/test.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 验证电子邮箱格式
                                                                                                      */
function email(value) {
  return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
}

/**
   * 验证手机格式
   */
function mobile(value) {
  return /^1[23456789]\d{9}$/.test(value);
}

/**
   * 验证URL格式
   */
function url(value) {
  return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.
  test(value);
}

/**
   * 验证日期格式
   */
function date(value) {
  return !/Invalid|NaN/.test(new Date(value).toString());
}

/**
   * 验证ISO类型的日期格式
   */
function dateISO(value) {
  return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
}

/**
   * 验证十进制数字
   */
function number(value) {
  return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
}

/**
   * 验证整数
   */
function digits(value) {
  return /^\d+$/.test(value);
}

/**
   * 验证身份证号码
   */
function idCard(value) {
  return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
  value);
}

/**
   * 是否车牌号
   */
function carNo(value) {
  // 新能源车牌
  var xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
  // 旧车牌
  var creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
  if (value.length === 7) {
    return creg.test(value);
  } else if (value.length === 8) {
    return xreg.test(value);
  } else {
    return false;
  }
}

/**
   * 金额,只允许2位小数
   */
function amount(value) {
  //金额，只允许保留两位小数
  return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
}

/**
   * 中文
   */
function chinese(value) {
  var reg = /^[\u4e00-\u9fa5]+$/gi;
  return reg.test(value);
}

/**
   * 只能输入字母
   */
function letter(value) {
  return /^[a-zA-Z]*$/.test(value);
}

/**
   * 只能是字母或者数字
   */
function enOrNum(value) {
  //英文或者数字
  var reg = /^[0-9a-zA-Z]*$/g;
  return reg.test(value);
}

/**
   * 验证是否包含某个值
   */
function contains(value, param) {
  return value.indexOf(param) >= 0;
}

/**
   * 验证一个值范围[min, max]
   */
function range(value, param) {
  return value >= param[0] && value <= param[1];
}

/**
   * 验证一个长度范围[min, max]
   */
function rangeLength(value, param) {
  return value.length >= param[0] && value.length <= param[1];
}

/**
   * 是否固定电话
   */
function landline(value) {
  var reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
  return reg.test(value);
}

/**
   * 判断是否为空
   */
function empty(value) {
  switch (typeof value) {
    case 'undefined':
      return true;
    case 'string':
      if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true;
      break;
    case 'boolean':
      if (!value) return true;
      break;
    case 'number':
      if (0 === value || isNaN(value)) return true;
      break;
    case 'object':
      if (null === value || value.length === 0) return true;
      for (var i in value) {
        return false;
      }
      return true;}

  return false;
}

/**
   * 是否json字符串
   */
function jsonString(value) {
  if (typeof value == 'string') {
    try {
      var obj = JSON.parse(value);
      if (typeof obj == 'object' && obj) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
  return false;
}


/**
   * 是否数组
   */
function array(value) {
  if (typeof Array.isArray === "function") {
    return Array.isArray(value);
  } else {
    return Object.prototype.toString.call(value) === "[object Array]";
  }
}

/**
   * 是否对象
   */
function object(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

/**
   * 是否短信验证码
   */
function code(value) {var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return new RegExp("^\\d{".concat(len, "}$")).test(value);
}var _default =


{
  email: email,
  mobile: mobile,
  url: url,
  date: date,
  dateISO: dateISO,
  number: number,
  digits: digits,
  idCard: idCard,
  carNo: carNo,
  amount: amount,
  chinese: chinese,
  letter: letter,
  enOrNum: enOrNum,
  contains: contains,
  range: range,
  rangeLength: rangeLength,
  empty: empty,
  isEmpty: empty,
  jsonString: jsonString,
  landline: landline,
  object: object,
  array: array,
  code: code };exports.default = _default;

/***/ }),

/***/ 17:
/*!************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/node_modules/uview-ui/libs/function/queryParams.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 对象转url参数
                                                                                                      * @param {*} data,对象
                                                                                                      * @param {*} isPrefix,是否自动加上"?"
                                                                                                      */
function queryParams() {var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var isPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;var arrayFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'brackets';
  var prefix = isPrefix ? '?' : '';
  var _result = [];
  if (['indices', 'brackets', 'repeat', 'comma'].indexOf(arrayFormat) == -1) arrayFormat = 'brackets';var _loop = function _loop(
  key) {
    var value = data[key];
    // 去掉为空的参数
    if (['', undefined, null].indexOf(value) >= 0) {
      return "continue";
    }
    // 如果值为数组，另行处理
    if (value.constructor === Array) {
      // e.g. {ids: [1, 2, 3]}
      switch (arrayFormat) {
        case 'indices':
          // 结果: ids[0]=1&ids[1]=2&ids[2]=3
          for (var i = 0; i < value.length; i++) {
            _result.push(key + '[' + i + ']=' + value[i]);
          }
          break;
        case 'brackets':
          // 结果: ids[]=1&ids[]=2&ids[]=3
          value.forEach(function (_value) {
            _result.push(key + '[]=' + _value);
          });
          break;
        case 'repeat':
          // 结果: ids=1&ids=2&ids=3
          value.forEach(function (_value) {
            _result.push(key + '=' + _value);
          });
          break;
        case 'comma':
          // 结果: ids=1,2,3
          var commaStr = "";
          value.forEach(function (_value) {
            commaStr += (commaStr ? "," : "") + _value;
          });
          _result.push(key + '=' + commaStr);
          break;
        default:
          value.forEach(function (_value) {
            _result.push(key + '[]=' + _value);
          });}

    } else {
      _result.push(key + '=' + value);
    }};for (var key in data) {var _ret = _loop(key);if (_ret === "continue") continue;
  }
  return _result.length ? prefix + _result.join('&') : '';
}var _default =

queryParams;exports.default = _default;

/***/ }),

/***/ 18:
/*!******************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/node_modules/uview-ui/libs/function/route.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _queryParams = _interopRequireDefault(__webpack_require__(/*! ../../libs/function/queryParams.js */ 17));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
/**
                                                                                                                                                                                                                                                                                            * 路由跳转
                                                                                                                                                                                                                                                                                            * 注意:本方法没有对跳转的回调函数进行封装
                                                                                                                                                                                                                                                                                            */
function route() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var config = {
    type: 'navigateTo',
    url: '',
    delta: 1, // navigateBack页面后退时,回退的层数
    params: {}, // 传递的参数
    animationType: 'pop-in', // 窗口动画,只在APP有效
    animationDuration: 300 // 窗口动画持续时间,单位毫秒,只在APP有效
  };
  config = Object.assign(config, options);
  // 如果url没有"/"开头，添加上，因为uni的路由跳转需要"/"开头
  if (config.url[0] != '/') config.url = '/' + config.url;
  // 判断是否有传递显式的参数,Object.keys转为数组并判断长度,switchTab类型时不能携带参数
  if (Object.keys(config.params).length && config.type != 'switchTab') {
    // 判断用户传递的url中，是否带有参数
    // 使用正则匹配，主要依据是判断是否有"/","?","="等，如“/page/index/index?name=mary"
    // 如果有url中有get参数，转换后无需带上"?"
    var query = '';
    if (/.*\/.*\?.*=.*/.test(config.url)) {
      // object对象转为get类型的参数
      query = (0, _queryParams.default)(config.params, false);
      // 因为已有get参数,所以后面拼接的参数需要带上"&"隔开
      config.url += "&" + query;
    } else {
      query = (0, _queryParams.default)(config.params);
      config.url += query;
    }
  }
  // 简写形式，把url和参数拼接起来
  if (typeof options === 'string' && typeof params == 'object') {
    var _query = '';
    if (/.*\/.*\?.*=.*/.test(options)) {
      // object对象转为get类型的参数
      _query = (0, _queryParams.default)(params, false);
      // 因为已有get参数,所以后面拼接的参数需要带上"&"隔开
      options += "&" + _query;
    } else {
      _query = (0, _queryParams.default)(params);
      options += _query;
    }
  }
  // 判断是否一个字符串，如果是，直接跳转(简写法)
  // 如果是中情形，默认第二个参数为对象形式的参数
  if (typeof options === 'string') {
    if (options[0] != '/') options = '/' + options;
    return uni.navigateTo({
      url: options });

  }
  // navigateTo类型的跳转
  if (config.type == 'navigateTo' || config.type == 'to') {
    return uni.navigateTo({
      url: config.url,
      animationType: config.animationType,
      animationDuration: config.animationDuration });

  }
  if (config.type == 'redirectTo' || config.type == 'redirect') {
    return uni.redirectTo({
      url: config.url });

  }
  if (config.type == 'switchTab' || config.type == 'tab') {
    return uni.switchTab({
      url: config.url });

  }
  if (config.type == 'reLaunch') {
    return uni.reLaunch({
      url: config.url });

  }
  if (config.type == 'navigateBack' || config.type == 'back') {
    return uni.navigateBack({
      delta: parseInt(config.delta ? config.delta : this.delta) });

  }
}var _default =

route;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 19:
/*!***********************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/node_modules/uview-ui/libs/function/timeFormat.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // padStart 的 polyfill，因为某些机型或情况，还无法支持es7的padStart，比如电脑版的微信小程序
// 所以这里做一个兼容polyfill的兼容处理
if (!String.prototype.padStart) {
  // 为了方便表示这里 fillString 用了ES6 的默认参数，不影响理解
  String.prototype.padStart = function (maxLength) {var fillString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
    if (Object.prototype.toString.call(fillString) !== "[object String]") throw new TypeError(
    'fillString must be String');
    var str = this;
    // 返回 String(str) 这里是为了使返回的值是字符串字面量，在控制台中更符合直觉
    if (str.length >= maxLength) return String(str);

    var fillLength = maxLength - str.length,
    times = Math.ceil(fillLength / fillString.length);
    while (times >>= 1) {
      fillString += fillString;
      if (times === 1) {
        fillString += fillString;
      }
    }
    return fillString.slice(0, fillLength) + str;
  };
}

function timeFormat() {var timestamp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  // 其他更多是格式化有如下:
  // yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合
  timestamp = parseInt(timestamp);
  // 如果为null,则格式化当前时间
  if (!timestamp) timestamp = Number(new Date());
  // 判断用户输入的时间戳是秒还是毫秒,一般前端js获取的时间戳是毫秒(13位),后端传过来的为秒(10位)
  if (timestamp.toString().length == 10) timestamp *= 1000;
  var date = new Date(timestamp);
  var ret;
  var opt = {
    "y+": date.getFullYear().toString(), // 年
    "m+": (date.getMonth() + 1).toString(), // 月
    "d+": date.getDate().toString(), // 日
    "h+": date.getHours().toString(), // 时
    "M+": date.getMinutes().toString(), // 分
    "s+": date.getSeconds().toString() // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (var k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0"));
    };
  };
  return fmt;
}var _default =

timeFormat;exports.default = _default;

/***/ }),

/***/ 2:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i++, i)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_NAME":"Suokelian_Pill_1.0","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_NAME":"Suokelian_Pill_1.0","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_NAME":"Suokelian_Pill_1.0","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"VUE_APP_NAME":"Suokelian_Pill_1.0","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 20:
/*!*********************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/node_modules/uview-ui/libs/function/timeFrom.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _timeFormat = _interopRequireDefault(__webpack_require__(/*! ../../libs/function/timeFormat.js */ 19));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                                                                                                                                          * 时间戳转为多久之前
                                                                                                                                                                                                                                                                                          * @param String timestamp 时间戳
                                                                                                                                                                                                                                                                                          * @param String | Boolean format 如果为时间格式字符串，超出一定时间范围，返回固定的时间格式；
                                                                                                                                                                                                                                                                                          * 如果为布尔值false，无论什么时间，都返回多久以前的格式
                                                                                                                                                                                                                                                                                          */
function timeFrom() {var timestamp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  if (timestamp == null) timestamp = Number(new Date());
  timestamp = parseInt(timestamp);
  // 判断用户输入的时间戳是秒还是毫秒,一般前端js获取的时间戳是毫秒(13位),后端传过来的为秒(10位)
  if (timestamp.toString().length == 10) timestamp *= 1000;
  var timer = new Date().getTime() - timestamp;
  timer = parseInt(timer / 1000);
  // 如果小于5分钟,则返回"刚刚",其他以此类推
  var tips = '';
  switch (true) {
    case timer < 300:
      tips = '刚刚';
      break;
    case timer >= 300 && timer < 3600:
      tips = parseInt(timer / 60) + '分钟前';
      break;
    case timer >= 3600 && timer < 86400:
      tips = parseInt(timer / 3600) + '小时前';
      break;
    case timer >= 86400 && timer < 2592000:
      tips = parseInt(timer / 86400) + '天前';
      break;
    default:
      // 如果format为false，则无论什么时间戳，都显示xx之前
      if (format === false) {
        if (timer >= 2592000 && timer < 365 * 86400) {
          tips = parseInt(timer / (86400 * 30)) + '个月前';
        } else {
          tips = parseInt(timer / (86400 * 365)) + '年前';
        }
      } else {
        tips = (0, _timeFormat.default)(timestamp, format);
      }}

  return tips;
}var _default =

timeFrom;exports.default = _default;

/***/ }),

/***/ 21:
/*!**************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/node_modules/uview-ui/libs/function/colorGradient.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 求两个颜色之间的渐变值
                                                                                                      * @param {string} startColor 开始的颜色
                                                                                                      * @param {string} endColor 结束的颜色
                                                                                                      * @param {number} step 颜色等分的份额
                                                                                                      * */
function colorGradient() {var startColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'rgb(0, 0, 0)';var endColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rgb(255, 255, 255)';var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  var startRGB = hexToRgb(startColor, false); //转换为rgb数组模式
  var startR = startRGB[0];
  var startG = startRGB[1];
  var startB = startRGB[2];

  var endRGB = hexToRgb(endColor, false);
  var endR = endRGB[0];
  var endG = endRGB[1];
  var endB = endRGB[2];

  var sR = (endR - startR) / step; //总差值
  var sG = (endG - startG) / step;
  var sB = (endB - startB) / step;
  var colorArr = [];
  for (var i = 0; i < step; i++) {
    //计算每一步的hex值 
    var hex = rgbToHex('rgb(' + Math.round(sR * i + startR) + ',' + Math.round(sG * i + startG) + ',' + Math.round(sB *
    i + startB) + ')');
    colorArr.push(hex);
  }
  return colorArr;
}

// 将hex表示方式转换为rgb表示方式(这里返回rgb数组模式)
function hexToRgb(sColor) {var str = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  sColor = sColor.toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = "#";
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    //处理六位的颜色值
    var sColorChange = [];
    for (var _i = 1; _i < 7; _i += 2) {
      sColorChange.push(parseInt("0x" + sColor.slice(_i, _i + 2)));
    }
    if (!str) {
      return sColorChange;
    } else {
      return "rgb(".concat(sColorChange[0], ",").concat(sColorChange[1], ",").concat(sColorChange[2], ")");
    }
  } else if (/^(rgb|RGB)/.test(sColor)) {
    var arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    return arr.map(function (val) {return Number(val);});
  } else {
    return sColor;
  }
};

// 将rgb表示方式转换为hex表示方式
function rgbToHex(rgb) {
  var _this = rgb;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  if (/^(rgb|RGB)/.test(_this)) {
    var aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    var strHex = "#";
    for (var i = 0; i < aColor.length; i++) {
      var hex = Number(aColor[i]).toString(16);
      hex = String(hex).length == 1 ? 0 + '' + hex : hex; // 保证每个rgb的值为2位
      if (hex === "0") {
        hex += hex;
      }
      strHex += hex;
    }
    if (strHex.length !== 7) {
      strHex = _this;
    }
    return strHex;
  } else if (reg.test(_this)) {
    var aNum = _this.replace(/#/, "").split("");
    if (aNum.length === 6) {
      return _this;
    } else if (aNum.length === 3) {
      var numHex = "#";
      for (var _i2 = 0; _i2 < aNum.length; _i2 += 1) {
        numHex += aNum[_i2] + aNum[_i2];
      }
      return numHex;
    }
  } else {
    return _this;
  }
}var _default =

{
  colorGradient: colorGradient,
  hexToRgb: hexToRgb,
  rgbToHex: rgbToHex };exports.default = _default;

/***/ }),

/***/ 218:
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 219);

/***/ }),

/***/ 219:
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 220);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ 22:
/*!*****************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/node_modules/uview-ui/libs/function/guid.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 本算法来源于简书开源代码，详见：https://www.jianshu.com/p/fdbf293d0a85
                                                                                                      * 全局唯一标识符（uuid，Globally Unique Identifier）,也称作 uuid(Universally Unique IDentifier) 
                                                                                                      * 一般用于多个组件之间,给它一个唯一的标识符,或者v-for循环的时候,如果使用数组的index可能会导致更新列表出现问题
                                                                                                      * 最可能的情况是左滑删除item或者对某条信息流"不喜欢"并去掉它的时候,会导致组件内的数据可能出现错乱
                                                                                                      * v-for的时候,推荐使用后端返回的id而不是循环的index
                                                                                                      * @param {Number} len uuid的长度
                                                                                                      * @param {Boolean} firstU 将返回的首字母置为"u"
                                                                                                      * @param {Nubmer} radix 生成uuid的基数(意味着返回的字符串都是这个基数),2-二进制,8-八进制,10-十进制,16-十六进制
                                                                                                      */
function guid() {var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;var firstU = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var uuid = [];
  radix = radix || chars.length;

  if (len) {
    // 如果指定uuid长度,只是取随机的字符,0|x为位运算,能去掉x的小数位,返回整数位
    for (var i = 0; i < len; i++) {uuid[i] = chars[0 | Math.random() * radix];}
  } else {
    var r;
    // rfc4122标准要求返回的uuid中,某些位为固定的字符
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';

    for (var _i = 0; _i < 36; _i++) {
      if (!uuid[_i]) {
        r = 0 | Math.random() * 16;
        uuid[_i] = chars[_i == 19 ? r & 0x3 | 0x8 : r];
      }
    }
  }
  // 移除第一个字符,并用u替代,因为第一个字符为数值时,该guuid不能用作id或者class
  if (firstU) {
    uuid.shift();
    return 'u' + uuid.join('');
  } else {
    return uuid.join('');
  }
}var _default =

guid;exports.default = _default;

/***/ }),

/***/ 220:
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ 23:
/*!******************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/node_modules/uview-ui/libs/function/color.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 为了让用户能够自定义主题，会逐步弃用此文件，各颜色通过css提供
// 为了给某些特殊场景使用和向后兼容，无需删除此文件(2020-06-20)
var color = {
  primary: "#2979ff",
  primaryDark: "#2b85e4",
  primaryDisabled: "#a0cfff",
  primaryLight: "#ecf5ff",
  bgColor: "#f3f4f6",

  info: "#909399",
  infoDark: "#82848a",
  infoDisabled: "#c8c9cc",
  infoLight: "#f4f4f5",

  warning: "#ff9900",
  warningDark: "#f29100",
  warningDisabled: "#fcbd71",
  warningLight: "#fdf6ec",

  error: "#fa3534",
  errorDark: "#dd6161",
  errorDisabled: "#fab6b6",
  errorLight: "#fef0f0",

  success: "#19be6b",
  successDark: "#18b566",
  successDisabled: "#71d5a1",
  successLight: "#dbf1e1",

  mainColor: "#303133",
  contentColor: "#606266",
  tipsColor: "#909399",
  lightColor: "#c0c4cc",
  borderColor: "#e4e7ed" };var _default =


color;exports.default = _default;

/***/ }),

/***/ 24:
/*!**********************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/node_modules/uview-ui/libs/function/type2icon.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 根据主题type值,获取对应的图标
                                                                                                      * @param String type 主题名称,primary|info|error|warning|success
                                                                                                      * @param String fill 是否使用fill填充实体的图标  
                                                                                                      */
function type2icon() {var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'success';var fill = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  // 如果非预置值,默认为success
  if (['primary', 'info', 'error', 'warning', 'success'].indexOf(type) == -1) type = 'success';
  var iconName = '';
  // 目前(2019-12-12),info和primary使用同一个图标
  switch (type) {
    case 'primary':
      iconName = 'info-circle';
      break;
    case 'info':
      iconName = 'info-circle';
      break;
    case 'error':
      iconName = 'close-circle';
      break;
    case 'warning':
      iconName = 'error-circle';
      break;
    case 'success':
      iconName = 'checkmark-circle';
      break;
    default:
      iconName = 'checkmark-circle';}

  // 是否是实体类型,加上-fill,在icon组件库中,实体的类名是后面加-fill的
  if (fill) iconName += '-fill';
  return iconName;
}var _default =

type2icon;exports.default = _default;

/***/ }),

/***/ 249:
/*!****************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/static/image/1.jpg ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ 25:
/*!************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/node_modules/uview-ui/libs/function/randomArray.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 打乱数组
function randomArray() {var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  // 原理是sort排序,Math.random()产生0<= x < 1之间的数,会导致x-0.05大于或者小于0
  return array.sort(function () {return Math.random() - 0.5;});
}var _default =

randomArray;exports.default = _default;

/***/ }),

/***/ 250:
/*!****************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/static/image/2.jpg ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/image/2.jpg";

/***/ }),

/***/ 251:
/*!****************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/static/image/3.jpg ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ 252:
/*!****************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/static/image/4.jpg ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAK6AfQDASIAAhEBAxEB/8QAHAABAAAHAQAAAAAAAAAAAAAAAAECAwQFBgcI/8QAVBAAAQMDAQUEBQUMBwcCBgMBAQACAwQFEQYHEiExQRNRYXEUIjKBkRVCUqGxFyMzU1RicpKTwdHSFiQ0Q4KisghEY3PC4fAlNRhVZZSjszZWZPH/xAAbAQEAAgMBAQAAAAAAAAAAAAAAAgUBAwQGB//EADoRAAIBAwIEAggFBAICAwEAAAABAgMEESExBRJBURNhBhQiMnGBkaEVU7HR8CNCweEz8SRiNENSsv/aAAwDAQACEQMRAD8A6IiIvlZehERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAERV6eBszXFznDBxwWUshtLcoIr30GL6cn1KHoUX05PqWeVkedFmivPQovpyfUnoMX03/UnKxzos0VzNSsihc9rnEjHA+atlhrBJPIRXNNFC+ImRrSd4jieirdhTfRZ8f+6zysi5pdCwRX/o0BwezH1q0iIFc0DkHlHFoc+SkCD1UVd1pAiYSfnKz3m94WGsPBlPJFERYMhERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBEUzGOkdusxnGeJWQSoq3ok/0WfrKBpJyMYZ+smGY5l3KSLINp4d1u9E3exx81a+iTZOAzGTj1llxZhTTKKKt6JP9Fv6ykkhkixvgDPLBysYZnmRIiIhkIriGmEsIc4uBPLHcqT4XMkLGgvxzLRyWeV7mOZEiKfsZvxTlEU05/u/iQsYYyimirCk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wsEgLmuD2OLXtOWuHMFdtheytKymtuq7mqtSVSODespzWOtdxbXQ+thszeD2/v8AJZEL6BRrQrQVSDymVEouLwyOFDAUUytxgpzQxyxlkjA5p5gjIWvV1jfETJR5ezn2RPEeRWyHii4rywo3UcVF8+psp1ZU3mJomeJaQQ4HBB5hRW1V1qhrgXEbkvSRvP3961uqo56GTcmbwPsvHsn+C8bfcJrWjb3j3/csqVxGppsyiiIqo3hERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAFdUVumr8uY+NjGnBcTk/BWqjG+SGTtInujePnA/b3rfbypRqKVVZRGak17L1Noo7RT0hDw3flHz3c/d3LIN5rXKfUE0YAqIRIPpM4H4K+ZqCicfWc9n6TD+5e2tOIWCgo05KPlsVlSjWzmSyZdSk4Kxj9QULeT3v8GsKsKjUMjwRTwbufnSH9wW2txazpLLmn8NSEaFRvYzlTVQ0sRkmeGtHf1/7rVrhXvuEo4FsDDljT1Pef/OCt5ZJJ5O0nkMj+hPTyHRSry/EuL1LleHD2Y/d/E76Nsoe09wiIqU6QiIgCIiAIiICMckkErZYnFsjeRH2eK2KhvcE4DZz2MvUO9k+RWuKBAIwRlWFjxKtZv2NU+jNVWjGpubyHBwyDlMjvWkxyzQ/gp5Ix3NccK5ZdbgwY9J3v02gr0FP0jote3Fr4anHKyl0Ztw581FaoL3cB86J3mxTfL1ePmQfqn+K3r0gtPP6EPVKhtKpzRMljLJGhzTzB45Wt/L9f9Cn/VP8VKb7XnpAP8J/ikuPWTWHn6BWlQmulrbRtE8BPZ5w5h47viFjVWqa2qq8CeTLRx3WjAVFeUv6lCpWcqEcRLClGcYYm8hERcZsCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIhnIREQwEREAREQBERAEREAREQBERZAREQBERAERFgBERAEREAREQBERAEREAREQBERAEREAREQBEUMgdUBFERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBTMjfISGNyRx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"

/***/ }),

/***/ 253:
/*!****************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/static/image/5.jpg ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/image/5.jpg";

/***/ }),

/***/ 254:
/*!****************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/static/image/6.jpg ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/image/6.jpg";

/***/ }),

/***/ 255:
/*!****************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/static/image/7.jpg ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/image/7.jpg";

/***/ }),

/***/ 26:
/*!********************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/node_modules/uview-ui/libs/function/addUnit.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = addUnit;var _test = _interopRequireDefault(__webpack_require__(/*! ./test.js */ 16));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// 添加单位，如果有rpx，%，px等单位结尾或者值为auto，直接返回，否则加上rpx单位结尾
function addUnit() {var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'auto';var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rpx';
  value = String(value);
  // 用uView内置验证规则中的number判断是否为数值
  return _test.default.number(value) ? "".concat(value).concat(unit) : value;
}

/***/ }),

/***/ 263:
/*!*****************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/static/image/21.jpg ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/image/21.jpg";

/***/ }),

/***/ 264:
/*!*****************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/static/image/22.jpg ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/image/22.jpg";

/***/ }),

/***/ 265:
/*!*****************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/static/image/23.jpg ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/image/23.jpg";

/***/ }),

/***/ 266:
/*!*****************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/static/image/24.jpg ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/image/24.jpg";

/***/ }),

/***/ 267:
/*!*****************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/static/image/25.jpg ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/image/25.jpg";

/***/ }),

/***/ 268:
/*!*****************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/static/image/26.jpg ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/image/26.jpg";

/***/ }),

/***/ 27:
/*!*******************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/node_modules/uview-ui/libs/function/random.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function random(min, max) {
  if (min >= 0 && max > 0 && max >= min) {
    var gab = max - min + 1;
    return Math.floor(Math.random() * gab + min);
  } else {
    return 0;
  }
}var _default =

random;exports.default = _default;

/***/ }),

/***/ 276:
/*!*****************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/static/image/28.jpg ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/image/28.jpg";

/***/ }),

/***/ 277:
/*!*****************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/static/image/27.jpg ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/image/27.jpg";

/***/ }),

/***/ 278:
/*!*****************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/static/image/31.jpg ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/image/31.jpg";

/***/ }),

/***/ 279:
/*!*****************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/static/image/32.jpg ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/image/32.jpg";

/***/ }),

/***/ 28:
/*!*****************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/node_modules/uview-ui/libs/function/trim.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function trim(str) {var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'both';
  if (pos == 'both') {
    return str.replace(/^\s+|\s+$/g, "");
  } else if (pos == "left") {
    return str.replace(/^\s*/, '');
  } else if (pos == 'right') {
    return str.replace(/(\s*$)/g, "");
  } else if (pos == 'all') {
    return str.replace(/\s+/g, "");
  } else {
    return str;
  }
}var _default =

trim;exports.default = _default;

/***/ }),

/***/ 280:
/*!*****************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/static/image/33.jpg ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/image/33.jpg";

/***/ }),

/***/ 281:
/*!*****************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/static/image/34.jpg ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/image/34.jpg";

/***/ }),

/***/ 282:
/*!*****************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/static/image/35.jpg ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/image/35.jpg";

/***/ }),

/***/ 29:
/*!******************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/node_modules/uview-ui/libs/function/toast.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function toast(title) {var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;
  uni.showToast({
    title: title,
    icon: 'none',
    duration: duration });

}var _default =

toast;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 30:
/*!**********************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/node_modules/uview-ui/libs/function/getParent.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = getParent; // 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
// this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
function getParent(name, keys) {
  var parent = this.$parent;
  // 通过while历遍，这里主要是为了H5需要多层解析的问题
  while (parent) {
    // 父组件
    if (parent.$options.name !== name) {
      // 如果组件的name不相等，继续上一级寻找
      parent = parent.$parent;
    } else {var _ret = function () {
        var data = {};
        // 判断keys是否数组，如果传过来的是一个数组，那么直接使用数组元素值当做键值去父组件寻找
        if (Array.isArray(keys)) {
          keys.map(function (val) {
            data[val] = parent[val] ? parent[val] : '';
          });
        } else {
          // 历遍传过来的对象参数
          for (var i in keys) {
            // 如果子组件有此值则用，无此值则用父组件的值
            // 判断是否空数组，如果是，则用父组件的值，否则用子组件的值
            if (Array.isArray(keys[i])) {
              if (keys[i].length) {
                data[i] = keys[i];
              } else {
                data[i] = parent[i];
              }
            } else if (keys[i].constructor === Object) {
              // 判断是否对象，如果是对象，且有属性，那么使用子组件的值，否则使用父组件的值
              if (Object.keys(keys[i]).length) {
                data[i] = keys[i];
              } else {
                data[i] = parent[i];
              }
            } else {
              // 只要子组件有传值，即使是false值，也是“传值”了，也需要覆盖父组件的同名参数
              data[i] = keys[i] || keys[i] === false ? keys[i] : parent[i];
            }
          }
        }
        return { v: data };}();if (typeof _ret === "object") return _ret.v;
    }
  }

  return {};
}

/***/ }),

/***/ 31:
/*!********************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/node_modules/uview-ui/libs/function/$parent.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = $parent; // 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
// this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
// 这里默认值等于undefined有它的含义，因为最顶层元素(组件)的$parent就是undefined，意味着不传name
// 值(默认为undefined)，就是查找最顶层的$parent
function $parent() {var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  var parent = this.$parent;
  // 通过while历遍，这里主要是为了H5需要多层解析的问题
  while (parent) {
    // 父组件
    if (parent.$options && parent.$options.name !== name) {
      // 如果组件的name不相等，继续上一级寻找
      parent = parent.$parent;
    } else {
      return parent;
    }
  }
  return false;
}

/***/ }),

/***/ 32:
/*!****************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/node_modules/uview-ui/libs/function/sys.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.os = os;exports.sys = sys;function os() {
  return uni.getSystemInfoSync().platform;
};

function sys() {
  return uni.getSystemInfoSync();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 33:
/*!*********************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/node_modules/uview-ui/libs/function/debounce.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var timeout = null;

/**
                                                                                                                         * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
                                                                                                                         * 
                                                                                                                         * @param {Function} func 要执行的回调函数 
                                                                                                                         * @param {Number} wait 延时的时间
                                                                                                                         * @param {Boolean} immediate 是否立即执行 
                                                                                                                         * @return null
                                                                                                                         */
function debounce(func) {var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // 清除定时器
  if (timeout !== null) clearTimeout(timeout);
  // 立即执行，此类情况一般用不到
  if (immediate) {
    var callNow = !timeout;
    timeout = setTimeout(function () {
      timeout = null;
    }, wait);
    if (callNow) typeof func === 'function' && func();
  } else {
    // 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
    timeout = setTimeout(function () {
      typeof func === 'function' && func();
    }, wait);
  }
}var _default =

debounce;exports.default = _default;

/***/ }),

/***/ 332:
/*!****************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/node_modules/uview-ui/libs/util/emitter.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 递归使用 call 方式this指向
                                                                                                      * @param componentName // 需要找的组件的名称
                                                                                                      * @param eventName // 事件名称
                                                                                                      * @param params // 需要传递的参数
                                                                                                      */
function _broadcast(componentName, eventName, params) {
  // 循环子节点找到名称一样的子节点 否则 递归 当前子节点
  this.$children.map(function (child) {
    if (componentName === child.$options.name) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      _broadcast.apply(child, [componentName, eventName].concat(params));
    }
  });
}var _default =
{
  methods: {
    /**
              * 派发 (向上查找) (一个)
              * @param componentName // 需要找的组件的名称
              * @param eventName // 事件名称
              * @param params // 需要传递的参数
              */
    dispatch: function dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root; //$parent 找到最近的父节点 $root 根节点
      var name = parent.$options.name; // 获取当前组件实例的name
      // 如果当前有节点 && 当前没名称 且 当前名称等于需要传进来的名称的时候就去查找当前的节点
      // 循环出当前名称的一样的组件实例
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;
        if (parent) {
          name = parent.$options.name;
        }
      }
      // 有节点表示当前找到了name一样的实例
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    /**
        * 广播 (向下查找) (广播多个)
        * @param componentName // 需要找的组件的名称
        * @param eventName // 事件名称
        * @param params // 需要传递的参数
        */
    broadcast: function broadcast(componentName, eventName, params) {
      _broadcast.call(this, componentName, eventName, params);
    } } };exports.default = _default;

/***/ }),

/***/ 34:
/*!*********************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/node_modules/uview-ui/libs/function/throttle.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var timer, flag;
/**
                                                                                                                      * 节流原理：在一定时间内，只能触发一次
                                                                                                                      * 
                                                                                                                      * @param {Function} func 要执行的回调函数 
                                                                                                                      * @param {Number} wait 延时的时间
                                                                                                                      * @param {Boolean} immediate 是否立即执行
                                                                                                                      * @return null
                                                                                                                      */
function throttle(func) {var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (immediate) {
    if (!flag) {
      flag = true;
      // 如果是立即执行，则在wait毫秒内开始时执行
      typeof func === 'function' && func();
      timer = setTimeout(function () {
        flag = false;
      }, wait);
    }
  } else {
    if (!flag) {
      flag = true;
      // 如果是非立即执行，则在wait毫秒内的结束处执行
      timer = setTimeout(function () {
        flag = false;
        typeof func === 'function' && func();
      }, wait);
    }

  }
};var _default =
throttle;exports.default = _default;

/***/ }),

/***/ 35:
/*!*****************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/node_modules/uview-ui/libs/config/config.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 此版本发布于2020-10-16
var version = '1.7.7';var _default =

{
  v: version,
  version: version,
  // 主题名称
  type: [
  'primary',
  'success',
  'info',
  'error',
  'warning'] };exports.default = _default;

/***/ }),

/***/ 36:
/*!*****************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/node_modules/uview-ui/libs/config/zIndex.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // uniapp在H5中各API的z-index值如下：
/**
 * actionsheet: 999
 * modal: 999
 * navigate: 998
 * tabbar: 998
 * toast: 999
 */var _default =

{
  toast: 10090,
  noNetwork: 10080,
  // popup包含popup，actionsheet，keyboard，picker的值
  popup: 10075,
  mask: 10070,
  navbar: 980,
  topTips: 975,
  sticky: 970,
  indexListSticky: 965 };exports.default = _default;

/***/ }),

/***/ 37:
/*!**********************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/tools/spt-alert/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var Alert = /*#__PURE__*/function () {
  function Alert() {_classCallCheck(this, Alert);
    this.canHide = true;
    this.setHide = false;
  }

  /**
     * 单例
     */_createClass(Alert, [{ key: "showMessage",







    /**
                                                   * 消息提示
                                                   *
                                                   * @ param option.message  消息内容
                                                   * @ param option.complete 结束的回调
                                                   */value: function showMessage(
    option) {var _this = this;
      this.canHide = false;
      var message = '';
      if (typeof option === 'string') {
        message = option;
      } else if (typeof option == 'object') {
        message = option.message;
      }
      uni.showToast({
        title: message,
        icon: 'none' });

      if (typeof option == 'object' && option.complete) {
        setTimeout(function () {
          _this.canHide = true;
          if (_this.setHide) {
            _this.hideLoading();
          }
          option.complete();
        }, 1500);
      }
    }

    /**
       * 成功消息提示
       *
       * @ param message 消息内容
       */ }, { key: "showSuccess", value: function showSuccess(
    option) {var _this2 = this;
      this.canHide = false;
      var message = '';
      if (typeof option === 'string') {
        message = option;
      } else if (typeof option == 'object') {
        message = option.message;
      }
      uni.showToast({
        title: message,
        icon: 'success' });

      if (typeof option == 'object' && option.complete) {
        setTimeout(function () {
          _this2.canHide = true;
          if (_this2.setHide) {
            _this2.hideLoading();
          }
          option.complete();
        }, 1500);
      }
    }

    /**
       * 显示 loading 提示框
       *
       * @ param message 消息内容
       */ }, { key: "showLoading", value: function showLoading(
    message) {
      this.setHide = false;
      this.canHide = true;
      var title = '正在加载';
      if (message) {
        title = message;
      }
      uni.showLoading({
        title: title,

        mask: true });


    }

    /**
       * 隐藏 loading 提示框
       */ }, { key: "hideLoading", value: function hideLoading()
    {
      this.setHide = true;
      if (this.canHide) {
        uni.hideLoading();
      }
    }

    /**
       * 带按钮的提示弹窗
       * 
       * @param {String}  option.title       标题
       * @param {String}  option.message     信息
       * @param {Fuction} option.confirmText 确定按钮的文字，默认为"确定"，最多 4 个字符
       * @param {Fuction} option.confirm     确认按钮的回调
       * @param {Fuction} option.cancel      取消按钮的回调
       */ }, { key: "showDialog", value: function showDialog(
    option) {
      uni.showModal({
        title: option.title || '',
        content: option.message || '',
        confirmText: option.confirmText || '确定',
        showCancel: option.showCancel,
        success: function success(response) {
          // 点击确定
          if (response.confirm) {
            console.log('用户点击确定');
            if (option.confirm && typeof option.confirm == 'function') {
              option.confirm();
            }
          }
          // 点击取消
          else if (response.cancel) {
              console.log('用户点击取消');
              if (option.cancel && typeof option.cancel == 'function') {
                option.cancel();
              }
            }
        } });

    } }], [{ key: "getInstance", value: function getInstance() {if (!this.instance) {this.instance = new Alert();}return this.instance;} }]);return Alert;}();exports.default = Alert;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 4:
/*!********************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Suokelian_Pill_1.0/pages.json ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map