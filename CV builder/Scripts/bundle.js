/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FieldModel_1 = __webpack_require__(10);
exports.FieldModel = FieldModel_1.FieldModel;
var CVFormModel_1 = __webpack_require__(5);
exports.CVFormModel = CVFormModel_1.CVFormModel;
var DropdownModel_1 = __webpack_require__(8);
exports.DropdownModel = DropdownModel_1.DropdownModel;
exports.OptionModel = DropdownModel_1.OptionModel;
var PersonalInfoModel_1 = __webpack_require__(11);
exports.PersonalInfoModel = PersonalInfoModel_1.PersonalInfoModel;
exports.PersonalInfoItemModel = PersonalInfoModel_1.PersonalInfoItemModel;
var EducationInfoModel_1 = __webpack_require__(9);
exports.EducationInfoModel = EducationInfoModel_1.EducationInfoModel;
exports.EducationInfoItemModel = EducationInfoModel_1.EducationInfoItemModel;
var SkillsInfoModel_1 = __webpack_require__(12);
exports.SkillsInfoModel = SkillsInfoModel_1.SkillsInfoModel;
exports.SkillsInfoItemModel = SkillsInfoModel_1.SkillsInfoItemModel;
var CareerInfoModel_1 = __webpack_require__(6);
exports.CareerInfoModel = CareerInfoModel_1.CareerInfoModel;
exports.CareerInfoItemModel = CareerInfoModel_1.CareerInfoItemModel;
var ContactInfoModel_1 = __webpack_require__(7);
exports.ContactInfoModel = ContactInfoModel_1.ContactInfoModel;
exports.ContactInfoItemModel = ContactInfoModel_1.ContactInfoItemModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kZWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL01vZGVscy9Nb2RlbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBMEM7QUFBakMsa0NBQUEsVUFBVSxDQUFBO0FBQ25CLDZDQUE0QztBQUFuQyxvQ0FBQSxXQUFXLENBQUE7QUFDcEIsaURBQTZEO0FBQXBELHdDQUFBLGFBQWEsQ0FBQTtBQUFFLHNDQUFBLFdBQVcsQ0FBQTtBQUNuQyx5REFBZ0Y7QUFBdkUsZ0RBQUEsaUJBQWlCLENBQUE7QUFBRSxvREFBQSxxQkFBcUIsQ0FBQTtBQUNqRCwyREFBa0Y7QUFBekUsa0RBQUEsa0JBQWtCLENBQUE7QUFBRSxzREFBQSxzQkFBc0IsQ0FBQTtBQUNuRCxxREFBeUU7QUFBaEUsNENBQUEsZUFBZSxDQUFBO0FBQUUsZ0RBQUEsbUJBQW1CLENBQUE7QUFDN0MscURBQXlFO0FBQWhFLDRDQUFBLGVBQWUsQ0FBQTtBQUFFLGdEQUFBLG1CQUFtQixDQUFBO0FBQzdDLHVEQUE0RTtBQUFuRSw4Q0FBQSxnQkFBZ0IsQ0FBQTtBQUFFLGtEQUFBLG9CQUFvQixDQUFBIn0=

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Field_1 = __webpack_require__(15);
exports.Field = Field_1.Field;
var Section_1 = __webpack_require__(18);
exports.Section = Section_1.Section;
var CVForm_1 = __webpack_require__(13);
exports.CVForm = CVForm_1.CvForm;
var Hello_1 = __webpack_require__(16);
exports.Hello = Hello_1.Hello;
var Dropdown_1 = __webpack_require__(14);
exports.Dropdown = Dropdown_1.Dropdown;
var HomeScreen_1 = __webpack_require__(17);
exports.HomeScreen = HomeScreen_1.HomeScreen;
var TemplateScreen_1 = __webpack_require__(19);
exports.TemplateScreen = TemplateScreen_1.TemplateScreen;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcG9uZW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0NvbXBvbmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBNkM7QUFBdkIsd0JBQUEsS0FBSyxDQUFBO0FBQzNCLHFDQUFtRDtBQUEzQiw0QkFBQSxPQUFPLENBQUE7QUFDL0IsbUNBQTBEO0FBQW5DLDBCQUFBLE1BQU0sQ0FBVTtBQUN2QyxpQ0FBNkM7QUFBcEMsd0JBQUEsS0FBSyxDQUFBO0FBQ2QsdUNBQXNEO0FBQTdCLDhCQUFBLFFBQVEsQ0FBQTtBQUNqQywyQ0FBNEQ7QUFBbkQsa0NBQUEsVUFBVSxDQUFBO0FBQ25CLG1EQUF3RTtBQUEvRCwwQ0FBQSxjQUFjLENBQUEifQ==

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Promise) {(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Models = __webpack_require__(0);
var CVFormModel = (function () {
    function CVFormModel(dto) {
        var personalinfo = "PersonalInfo";
        if (dto.hasOwnProperty(personalinfo)) {
            this.PersonalInfo = new Models.PersonalInfoModel(dto[personalinfo], personalinfo);
        }
        var educationinfo = "EducationInfo";
        if (dto.hasOwnProperty(educationinfo)) {
            this.EducationInfo = new Models.EducationInfoModel(dto[educationinfo], educationinfo);
        }
        var careerinfo = "CareerInfo";
        if (dto.hasOwnProperty(careerinfo)) {
            this.CareerInfo = new Models.CareerInfoModel(dto[careerinfo], careerinfo);
        }
        var skillsinfo = "SkillsInfo";
        if (dto.hasOwnProperty(skillsinfo)) {
            this.SkillsInfo = new Models.SkillsInfoModel(dto[skillsinfo], skillsinfo);
        }
        var contactinfo = "ContactInfo";
        if (dto.hasOwnProperty(contactinfo)) {
            this.ContactInfo = new Models.ContactInfoModel(dto[contactinfo], contactinfo);
        }
        if (dto.hasOwnProperty("FormTarget")) {
            this.FormTarget = dto["FormTarget"];
        }
    }
    return CVFormModel;
}());
exports.CVFormModel = CVFormModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ1ZGb3JtTW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvTW9kZWxzL0NWRm9ybU1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQW1DO0FBRW5DO0lBU0kscUJBQVksR0FBUTtRQUNoQixJQUFNLFlBQVksR0FBRyxjQUFjLENBQUM7UUFDcEMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDdEYsQ0FBQztRQUNELElBQU0sYUFBYSxHQUFHLGVBQWUsQ0FBQztRQUN0QyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksTUFBTSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUMxRixDQUFDO1FBQ0QsSUFBTSxVQUFVLEdBQUcsWUFBWSxDQUFDO1FBQ2hDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxNQUFNLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUM5RSxDQUFDO1FBQ0QsSUFBTSxVQUFVLEdBQUcsWUFBWSxDQUFDO1FBQ2hDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxNQUFNLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUM5RSxDQUFDO1FBQ0QsSUFBTSxXQUFXLEdBQUcsYUFBYSxDQUFDO1FBQ2xDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ2xGLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN4QyxDQUFDO0lBQ0wsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxBQWxDRCxJQWtDQztBQWxDWSxrQ0FBVyJ9

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Models = __webpack_require__(0);
var CareerInfoModel = (function () {
    function CareerInfoModel(dto, sectionIdentifier) {
        var _this = this;
        this.SectionIdentifier = sectionIdentifier;
        if (dto.hasOwnProperty("Name")) {
            this.Name = dto["Name"];
        }
        if (dto.hasOwnProperty("Items")) {
            this.Items = [];
            var items = dto["Items"];
            items.forEach(function (item) { return _this.Items.push(new CareerInfoItemModel(item)); });
        }
        if (dto.hasOwnProperty("Expandable")) {
            this.Expandable = dto["Expandable"];
        }
    }
    return CareerInfoModel;
}());
exports.CareerInfoModel = CareerInfoModel;
var CareerInfoItemModel = (function () {
    function CareerInfoItemModel(dto) {
        var start = "Start";
        if (dto.hasOwnProperty(start)) {
            this.Start = new Models.FieldModel(dto[start], start);
        }
        var end = "End";
        if (dto.hasOwnProperty(end)) {
            this.End = new Models.FieldModel(dto[end], end);
        }
        var companyName = "CompanyName";
        if (dto.hasOwnProperty(companyName)) {
            this.CompanyName = new Models.FieldModel(dto[companyName], companyName);
        }
        var jobTitle = "JobTitle";
        if (dto.hasOwnProperty(jobTitle)) {
            this.JobTitle = new Models.FieldModel(dto[jobTitle], jobTitle);
        }
        var description = "Description";
        if (dto.hasOwnProperty(description)) {
            this.Description = new Models.FieldModel(dto[description], description);
        }
    }
    return CareerInfoItemModel;
}());
exports.CareerInfoItemModel = CareerInfoItemModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FyZWVySW5mb01vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL01vZGVscy9DYXJlZXJJbmZvTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBbUM7QUFNbkM7SUFNSSx5QkFBWSxHQUFRLEVBQUUsaUJBQXlCO1FBQS9DLGlCQWFDO1FBWkcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO1FBQzNDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVCLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNoQixJQUFJLEtBQUssR0FBYSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbkMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBOUMsQ0FBOEMsQ0FBQyxDQUFDO1FBQzFFLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN4QyxDQUFDO0lBQ0wsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQXBCRCxJQW9CQztBQXBCWSwwQ0FBZTtBQXNCNUI7SUFPSSw2QkFBWSxHQUFRO1FBQ2hCLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUN0QixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUQsQ0FBQztRQUNELElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQztRQUNsQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEQsQ0FBQztRQUNELElBQU0sV0FBVyxHQUFHLGFBQWEsQ0FBQztRQUNsQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDNUUsQ0FBQztRQUNELElBQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUM1QixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDbkUsQ0FBQztRQUNELElBQU0sV0FBVyxHQUFHLGFBQWEsQ0FBQztRQUNsQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDNUUsQ0FBQztJQUNMLENBQUM7SUFDTCwwQkFBQztBQUFELENBQUMsQUE3QkQsSUE2QkM7QUE3Qlksa0RBQW1CIn0=

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Models = __webpack_require__(0);
var ContactInfoModel = (function () {
    function ContactInfoModel(dto, sectionIdentifier) {
        var _this = this;
        this.SectionIdentifier = sectionIdentifier;
        if (dto.hasOwnProperty("Name")) {
            this.Name = dto["Name"];
        }
        if (dto.hasOwnProperty("Items")) {
            this.Items = [];
            var items = dto["Items"];
            items.forEach(function (item) { return _this.Items.push(new ContactInfoItemModel(item)); });
        }
        if (dto.hasOwnProperty("Expandable")) {
            this.Expandable = dto["Expandable"];
        }
    }
    return ContactInfoModel;
}());
exports.ContactInfoModel = ContactInfoModel;
var ContactInfoItemModel = (function () {
    function ContactInfoItemModel(dto) {
        var firstName = "FirstName";
        if (dto.hasOwnProperty(firstName)) {
            this.FirstName = new Models.FieldModel(dto[firstName], firstName);
        }
        var lastName = "LastName";
        if (dto.hasOwnProperty(lastName)) {
            this.LastName = new Models.FieldModel(dto[lastName], lastName);
        }
        var email = "Email";
        if (dto.hasOwnProperty(email)) {
            this.Email = new Models.FieldModel(dto[email], email);
        }
        var address = "Address";
        if (dto.hasOwnProperty(address)) {
            this.Address = new Models.FieldModel(dto[address], address);
        }
        var phone = "Phone";
        if (dto.hasOwnProperty(phone)) {
            this.Phone = new Models.FieldModel(dto[phone], phone);
        }
        var facebook = "Facebook";
        if (dto.hasOwnProperty(facebook)) {
            this.Facebook = new Models.FieldModel(dto[facebook], facebook);
        }
    }
    return ContactInfoItemModel;
}());
exports.ContactInfoItemModel = ContactInfoItemModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFjdEluZm9Nb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Nb2RlbHMvQ29udGFjdEluZm9Nb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUFtQztBQU1uQztJQU1JLDBCQUFZLEdBQVEsRUFBRSxpQkFBeUI7UUFBL0MsaUJBYUM7UUFaRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7UUFDM0MsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUIsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ2hCLElBQUksS0FBSyxHQUFhLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNuQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUEvQyxDQUErQyxDQUFDLENBQUM7UUFDM0UsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3hDLENBQUM7SUFDTCxDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDO0FBcEJZLDRDQUFnQjtBQXNCN0I7SUFRSSw4QkFBWSxHQUFRO1FBQ2hCLElBQU0sU0FBUyxHQUFHLFdBQVcsQ0FBQztRQUM5QixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDdEUsQ0FBQztRQUNELElBQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUM1QixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDbkUsQ0FBQztRQUNELElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUN0QixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUQsQ0FBQztRQUNELElBQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQztRQUMxQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEUsQ0FBQztRQUNELElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUN0QixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUQsQ0FBQztRQUNELElBQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUM1QixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDbkUsQ0FBQztJQUNMLENBQUM7SUFDTCwyQkFBQztBQUFELENBQUMsQUFsQ0QsSUFrQ0M7QUFsQ1ksb0RBQW9CIn0=

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DropdownModel = (function () {
    function DropdownModel(dto) {
        this.Options = [];
        if (dto.hasOwnProperty("Options")) {
            for (var i = 0; i < dto.Sections.length; i++)
                this.Options.push(new OptionModel(dto.Options[i]));
        }
        if (dto.hasOwnProperty("Name"))
            this.Name = dto.Name;
        if (dto.hasOwnProperty("Id"))
            this.Id = dto.Id;
    }
    return DropdownModel;
}());
exports.DropdownModel = DropdownModel;
var OptionModel = (function () {
    function OptionModel(dto) {
        if (dto.hasOwnProperty("Value"))
            this.Value = dto.Value;
        if (dto.hasOwnProperty("Text"))
            this.Text = dto.Text;
        if (dto.hasOwnProperty("Id"))
            this.Id = dto.Id;
    }
    return OptionModel;
}());
exports.OptionModel = OptionModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJvcGRvd25Nb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Nb2RlbHMvRHJvcGRvd25Nb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBS0ksdUJBQVksR0FBUTtRQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTtnQkFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxXQUFXLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0QsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDckQsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQztJQUNuRCxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQztBQWRZLHNDQUFhO0FBZ0IxQjtJQUtJLHFCQUFZLEdBQVE7UUFDaEIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUN4RCxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3JELEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUM7SUFDbkQsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7QUFWWSxrQ0FBVyJ9

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Models = __webpack_require__(0);
var EducationInfoModel = (function () {
    function EducationInfoModel(dto, sectionIdentifier) {
        var _this = this;
        this.SectionIdentifier = sectionIdentifier;
        if (dto.hasOwnProperty("Name")) {
            this.Name = dto["Name"];
        }
        if (dto.hasOwnProperty("Items")) {
            this.Items = [];
            var items = dto["Items"];
            items.forEach(function (item) { return _this.Items.push(new EducationInfoItemModel(item)); });
        }
        if (dto.hasOwnProperty("Expandable")) {
            this.Expandable = dto["Expandable"];
        }
    }
    return EducationInfoModel;
}());
exports.EducationInfoModel = EducationInfoModel;
var EducationInfoItemModel = (function () {
    function EducationInfoItemModel(dto) {
        var start = "Start";
        if (dto.hasOwnProperty(start)) {
            this.Start = new Models.FieldModel(dto[start], start);
        }
        var duration = "Duration";
        if (dto.hasOwnProperty(duration)) {
            this.Duration = new Models.FieldModel(dto[duration], duration);
        }
        var end = "End";
        if (dto.hasOwnProperty(end)) {
            this.End = new Models.FieldModel(dto[end], end);
        }
        var course = "Course";
        if (dto.hasOwnProperty(course)) {
            this.Course = new Models.FieldModel(dto[course], course);
        }
        var institution = "Institution";
        if (dto.hasOwnProperty(institution)) {
            this.Institution = new Models.FieldModel(dto[institution], institution);
        }
    }
    return EducationInfoItemModel;
}());
exports.EducationInfoItemModel = EducationInfoItemModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWR1Y2F0aW9uSW5mb01vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL01vZGVscy9FZHVjYXRpb25JbmZvTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBbUM7QUFNbkM7SUFNSSw0QkFBWSxHQUFRLEVBQUUsaUJBQXlCO1FBQS9DLGlCQWFDO1FBWkcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO1FBQzNDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVCLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNoQixJQUFJLEtBQUssR0FBYSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbkMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBakQsQ0FBaUQsQ0FBQyxDQUFDO1FBQzdFLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN4QyxDQUFDO0lBQ0wsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0FBQyxBQXBCRCxJQW9CQztBQXBCWSxnREFBa0I7QUFxQi9CO0lBTUksZ0NBQVksR0FBUTtRQUNoQixJQUFNLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDdEIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzFELENBQUM7UUFDRCxJQUFNLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDNUIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ25FLENBQUM7UUFDRCxJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUM7UUFDbEIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3BELENBQUM7UUFDRCxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUM7UUFDeEIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzdELENBQUM7UUFDRCxJQUFNLFdBQVcsR0FBRyxhQUFhLENBQUM7UUFDbEMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQzVFLENBQUM7SUFDTCxDQUFDO0lBQ0wsNkJBQUM7QUFBRCxDQUFDLEFBNUJELElBNEJDO0FBNUJZLHdEQUFzQiJ9

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FieldModel = (function () {
    function FieldModel(dto, fieldName) {
        this.FieldName = fieldName;
        if (dto.hasOwnProperty("Label"))
            this.Label = dto.Label;
        if (dto.hasOwnProperty("FieldName"))
            this.FieldName = dto.FieldName;
        if (dto.hasOwnProperty("Type"))
            this.Type = dto.Type;
        if (dto.hasOwnProperty("Mandatory"))
            this.Mandatory = dto.Mandatory;
        if (dto.hasOwnProperty("Value"))
            this.Value = dto.Value;
        if (dto.hasOwnProperty("Id"))
            this.Id = dto.Id;
    }
    return FieldModel;
}());
exports.FieldModel = FieldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmllbGRNb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Nb2RlbHMvRmllbGRNb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBUUksb0JBQVksR0FBUSxFQUFFLFNBQWlCO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDeEQsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQztRQUNwRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3JELEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFDcEUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUN4RCxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDO0lBRW5ELENBQUM7SUFDTCxpQkFBQztBQUFELENBQUMsQUFsQkQsSUFrQkM7QUFsQlksZ0NBQVUifQ==

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Models = __webpack_require__(0);
var PersonalInfoModel = (function () {
    function PersonalInfoModel(dto, sectionIdentifier) {
        var _this = this;
        this.SectionIdentifier = sectionIdentifier;
        if (dto.hasOwnProperty("Name")) {
            this.Name = dto["Name"];
        }
        if (dto.hasOwnProperty("Items")) {
            this.Items = [];
            var items = dto["Items"];
            items.forEach(function (item) { return _this.Items.push(new PersonalInfoItemModel(item)); });
        }
        if (dto.hasOwnProperty("Expandable")) {
            this.Expandable = dto["Expandable"];
        }
    }
    return PersonalInfoModel;
}());
exports.PersonalInfoModel = PersonalInfoModel;
var PersonalInfoItemModel = (function () {
    function PersonalInfoItemModel(dto) {
        var photo = "Photo";
        if (dto.hasOwnProperty(photo)) {
            this.Photo = new Models.FieldModel(dto[photo], photo);
        }
        var summary = "Summary";
        if (dto.hasOwnProperty(summary)) {
            this.Summary = new Models.FieldModel(dto[summary], summary);
        }
        var interest = "Interest";
        if (dto.hasOwnProperty(interest)) {
            this.Interest = new Models.FieldModel(dto[interest], interest);
        }
        var dateOfBirth = "DateOfBirth";
        if (dto.hasOwnProperty(dateOfBirth)) {
            this.DateOfBirth = new Models.FieldModel(dto[dateOfBirth], dateOfBirth);
        }
    }
    return PersonalInfoItemModel;
}());
exports.PersonalInfoItemModel = PersonalInfoItemModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVyc29uYWxJbmZvTW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvTW9kZWxzL1BlcnNvbmFsSW5mb01vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQW1DO0FBTW5DO0lBS0ksMkJBQVksR0FBUSxFQUFFLGlCQUF5QjtRQUEvQyxpQkFhQztRQVpHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztRQUMzQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDaEIsSUFBSSxLQUFLLEdBQWEsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ25DLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDLEVBQWhELENBQWdELENBQUMsQ0FBQztRQUM1RSxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDeEMsQ0FBQztJQUNMLENBQUM7SUFDTCx3QkFBQztBQUFELENBQUMsQUFuQkQsSUFtQkM7QUFuQlksOENBQWlCO0FBb0I5QjtJQUtJLCtCQUFZLEdBQVE7UUFDaEIsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ3RCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMxRCxDQUFDO1FBQ0QsSUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDO1FBQzFCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNoRSxDQUFDO1FBQ0QsSUFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDO1FBQzVCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNuRSxDQUFDO1FBQ0QsSUFBTSxXQUFXLEdBQUcsYUFBYSxDQUFDO1FBQ2xDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUM1RSxDQUFDO0lBQ0wsQ0FBQztJQUNMLDRCQUFDO0FBQUQsQ0FBQyxBQXZCRCxJQXVCQztBQXZCWSxzREFBcUIifQ==

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Models = __webpack_require__(0);
var SkillsInfoModel = (function () {
    function SkillsInfoModel(dto, sectionIdentifier) {
        var _this = this;
        this.SectionIdentifier = sectionIdentifier;
        if (dto.hasOwnProperty("Name")) {
            this.Name = dto["Name"];
        }
        if (dto.hasOwnProperty("Items")) {
            this.Items = [];
            var items = dto["Items"];
            items.forEach(function (item) { return _this.Items.push(new SkillsInfoItemModel(item)); });
        }
        if (dto.hasOwnProperty("Expandable")) {
            this.Expandable = dto["Expandable"];
        }
    }
    return SkillsInfoModel;
}());
exports.SkillsInfoModel = SkillsInfoModel;
var SkillsInfoItemModel = (function () {
    function SkillsInfoItemModel(dto) {
        var skill = "Skill";
        if (dto.hasOwnProperty(skill)) {
            this.Skill = new Models.FieldModel(dto[skill], skill);
        }
    }
    return SkillsInfoItemModel;
}());
exports.SkillsInfoItemModel = SkillsInfoItemModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2tpbGxzSW5mb01vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL01vZGVscy9Ta2lsbHNJbmZvTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBbUM7QUFNbkM7SUFNSSx5QkFBWSxHQUFRLEVBQUUsaUJBQXlCO1FBQS9DLGlCQWFDO1FBWkcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO1FBQzNDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVCLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNoQixJQUFJLEtBQUssR0FBYSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbkMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBOUMsQ0FBOEMsQ0FBQyxDQUFDO1FBQzFFLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN4QyxDQUFDO0lBQ0wsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQXBCRCxJQW9CQztBQXBCWSwwQ0FBZTtBQXNCNUI7SUFHSSw2QkFBWSxHQUFRO1FBQ2hCLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUN0QixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUQsQ0FBQztJQUNMLENBQUM7SUFDTCwwQkFBQztBQUFELENBQUMsQUFURCxJQVNDO0FBVFksa0RBQW1CIn0=

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var Models = __webpack_require__(0);
var components = __webpack_require__(2);
var CvForm = (function (_super) {
    __extends(CvForm, _super);
    function CvForm(props) {
        var _this = _super.call(this, props) || this;
        _this.itemModelsExamples = {};
        _this.sectionModels = [];
        _this.submitHandler = function (e) {
            e.preventDefault();
            var input = document.querySelector('input[type="file"]');
            var data = new FormData();
            data.append("file", input.files[0]);
            data.append("model", JSON.stringify(_this.state.model));
            data.append("template", _this.props.templateNumber);
            if (_this.validate()) {
                return;
            }
            fetch(_this.state.model.FormTarget, ({
                method: "post",
                body: data,
                credentials: "same-origin"
            }))
                .then(function (resp) {
                return resp.blob();
            }).then(function (blob) {
                var downloadUrl = URL.createObjectURL(blob);
                var filename = _this.state.model.ContactInfo.Items[0]["FirstName"].Value +
                    "_" +
                    _this.state.model.ContactInfo.Items[0]["LastName"].Value +
                    ".pdf";
                // use HTML5 a[download] attribute to specify filename
                var a = document.createElement("a");
                // safari doesn't support this yet
                if (typeof a.download === "undefined") {
                    window.location.assign(downloadUrl);
                }
                else {
                    a.setAttribute("href", downloadUrl);
                    a.setAttribute("download", filename);
                    document.body.appendChild(a);
                    a.click();
                }
            });
        };
        _this.loadForm = function () {
            fetch("/Builder/LoadForm", {
                credentials: "same-origin"
            })
                .then(function (response) {
                if (response.status === 403) {
                    throw new Error("Network response was 403.");
                }
                else {
                    return response.json();
                }
            }).then(function (json) {
                var cvData = JSON.parse(json);
                var cvModel = new Models.CVFormModel(cvData);
                _this.setState({ model: cvModel });
            }).catch(function (e) {
                alert("Nor�dami u�krauti CV prisijunkite");
                console.log(e);
            });
        };
        _this.saveForm = function () {
            fetch("/Builder/SaveForm", {
                method: "POST",
                headers: {
                    'Accept': "application/json, text/plain, */*",
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(_this.state.model),
                credentials: "same-origin"
            }).then(function (response) {
                if (response.status === 403) {
                    alert("form was not saved");
                }
                else if (response.status === 200) {
                    alert("form saved");
                }
            });
        };
        _this.state = {
            activeSection: 0,
            errorsList: [],
            model: _this.props.model
        };
        _this.itemModelsExamples["CareerInfo"] = new Models.CareerInfoItemModel(_this.props.model.CareerInfo.Items[0]);
        _this.itemModelsExamples["ContactInfo"] = new Models.ContactInfoItemModel(_this.props.model.ContactInfo.Items[0]);
        _this.itemModelsExamples["EducationInfo"] =
            new Models.EducationInfoItemModel(_this.props.model.EducationInfo.Items[0]);
        _this.itemModelsExamples["PersonalInfo"] =
            new Models.PersonalInfoItemModel(_this.props.model.PersonalInfo.Items[0]);
        _this.itemModelsExamples["SkillsInfo"] = new Models.SkillsInfoItemModel(_this.props.model.SkillsInfo.Items[0]);
        return _this;
    }
    CvForm.prototype.validate = function () {
        var _this = this;
        this.setState({ errorsList: [] });
        var error = false;
        var fieldValidator = function (field) {
            if (field.Mandatory && !field.Value) {
                _this.setState(function (prevState, props) {
                    prevState.errorsList.push(field.Label + " (You must enter a value into this field)");
                    return prevState;
                });
                error = true;
            }
        };
        this.sectionModels.forEach(function (section) {
            section.Items.forEach(function (item) {
                for (var key in item) {
                    if (item.hasOwnProperty(key) && item[key] instanceof Models.FieldModel) {
                        var fieldModel = item[key];
                        fieldValidator(fieldModel);
                    }
                }
            });
        });
        return error;
    };
    CvForm.prototype.renderSection = function (section, itemConstructor, i, itemExample) {
        var _this = this;
        var valueChangeHandler = function (sectionNumber, itemNumber, fieldName, newValue) {
            _this.setState(function (previousState) {
                section.Items[itemNumber][fieldName].Value =
                    newValue;
                return previousState;
            });
        };
        var labelChangeHandler = function (sectionNumber, itemNumber, fieldName, newValue) {
            _this.setState(function (previousState) {
                section.Items[itemNumber][fieldName].Label =
                    newValue;
                return previousState;
            });
        };
        var addHandler = function () {
            _this.setState(function (previousState) {
                section.Items.push(new itemConstructor(itemExample));
                return previousState;
            });
        };
        var removeHandler = function (index) {
            _this.setState(function (previousState) {
                section.Items.splice(index, 1);
            });
        };
        var pushHandler = function (index1, index2) {
            _this.setState(function (previousState) {
                var temp = section.Items[index1];
                section.Items[index1] = section.Items[index2];
                section.Items[index2] = temp;
            });
        };
        return (React.createElement(components.Section, { model: section, isActive: i === this.state.activeSection, key: i, sectionNumber: i, itemRemoveHandler: removeHandler, itemPushHandler: pushHandler, itemAddHandler: addHandler, fieldValueChangedHandler: valueChangeHandler, fieldLabelChangedHandler: labelChangeHandler }));
    };
    CvForm.prototype.render = function () {
        var _this = this;
        var sections = [];
        this.sectionModels = [];
        this.sectionModels.push(this.state.model.ContactInfo);
        this.sectionModels.push(this.state.model.PersonalInfo);
        this.sectionModels.push(this.state.model.EducationInfo);
        this.sectionModels.push(this.state.model.CareerInfo);
        this.sectionModels.push(this.state.model.SkillsInfo);
        sections.push(this.renderSection(this.state.model.ContactInfo, Models.ContactInfoItemModel, 0, this.itemModelsExamples["ContactInfo"]));
        sections.push(this.renderSection(this.state.model.PersonalInfo, Models.PersonalInfoItemModel, 1, this.itemModelsExamples["PersonalInfo"]));
        sections.push(this.renderSection(this.state.model.EducationInfo, Models.EducationInfoItemModel, 2, this.itemModelsExamples["EducationInfo"]));
        sections.push(this.renderSection(this.state.model.CareerInfo, Models.CareerInfoItemModel, 3, this.itemModelsExamples["CareerInfo"]));
        sections.push(this.renderSection(this.state.model.SkillsInfo, Models.SkillsInfoItemModel, 4, this.itemModelsExamples["SkillsInfo"]));
        var tabs = this.sectionModels.map(function (value, index) {
            return (React.createElement("a", { className: "navigation-tab" + (index == _this.state.activeSection ? " active" : ""), "data-section-number": index, key: index, onClick: function (e) {
                    _this.setState({ activeSection: +e.currentTarget.dataset["sectionNumber"] });
                } }, value.Name));
        });
        var sectionsNavBar = (React.createElement("div", { className: "section-navigation-bar navbar-default" }, tabs));
        var nextSection = function () {
            _this.setState(function (prevState, props) {
                return { activeSection: prevState.activeSection + 1 };
            });
        };
        var previousSection = function () {
            _this.setState(function (prevState, props) {
                return { activeSection: prevState.activeSection - 1 };
            });
        };
        return (React.createElement("div", { className: "CV-form" },
            sectionsNavBar,
            React.createElement("form", { onSubmit: this.submitHandler },
                sections,
                React.createElement("div", { className: "error-container" + (this.state.errorsList.length ? "" : " hidden") },
                    React.createElement("h3", null, "Following fields have failed validation: "),
                    React.createElement("ul", null, this.state.errorsList.map(function (error, index) {
                        return (React.createElement("li", { key: index }, error));
                    }))),
                React.createElement("div", { className: "button-area" },
                    React.createElement("button", { className: "btn" + (this.state.activeSection == 0 ? " hidden" : ""), type: "button", onClick: previousSection }, "Previous"),
                    React.createElement("button", { className: "btn" + (this.state.activeSection == sections.length - 1 ? " hidden" : ""), type: "button", onClick: nextSection }, "Next"),
                    React.createElement("button", { className: "btn" + (this.state.activeSection == sections.length - 1 ? "" : " hidden"), type: "submit" }, "Submit"),
                    React.createElement("button", { className: "btn btn-primary" +
                            (this.state.activeSection == sections.length - 1 ? "" : " hidden"), type: "button", onClick: this.saveForm }, "Save form"),
                    React.createElement("button", { className: "btn btn-primary", type: "button", onClick: this.loadForm }, "Load form")))));
    };
    return CvForm;
}(React.Component));
exports.CvForm = CvForm;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ1ZGb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvQ1ZGb3JtLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2QkFBK0I7QUFFL0IseUNBQTJDO0FBQzNDLHlDQUEyQztBQWdCM0M7SUFBNEIsMEJBQTJDO0lBK0duRSxnQkFBWSxLQUFtQjtRQUEvQixZQUNJLGtCQUFNLEtBQUssQ0FBQyxTQWNmO1FBN0hPLHdCQUFrQixHQUFzQyxFQUFFLENBQUM7UUEyQjNELG1CQUFhLEdBQWUsRUFBRSxDQUFDO1FBQy9CLG1CQUFhLEdBQUcsVUFBQyxDQUFtQztZQUN4RCxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDbkIsSUFBSSxLQUFLLEdBQXFCLFFBQVEsQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQXFCLENBQUM7WUFDL0YsSUFBSSxJQUFJLEdBQWEsSUFBSSxRQUFRLEVBQUUsQ0FBQztZQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNuRCxFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNsQixNQUFNLENBQUM7WUFDWCxDQUFDO1lBRUQsS0FBSyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFDekIsQ0FBQztnQkFDRyxNQUFNLEVBQUUsTUFBTTtnQkFDZCxJQUFJLEVBQUUsSUFBSTtnQkFDVixXQUFXLEVBQUUs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

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
// State is never set so we use the 'undefined' type.
var Dropdown = (function (_super) {
    __extends(Dropdown, _super);
    function Dropdown() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dropdown.prototype.render = function () {
        var options = [];
        for (var i = 0; i < this.props.model.Options.length; i++) {
            options.push(React.createElement("option", { key: this.props.model.Options[i].Id, value: this.props.model.Options[i].Value }, this.props.model.Options[i].Text));
        }
        return (React.createElement("select", { name: this.props.model.Name, key: this.props.model.Id }, options));
    };
    return Dropdown;
}(React.Component));
exports.Dropdown = Dropdown;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJvcGRvd24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcG9uZW50cy9Ecm9wZG93bi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkJBQStCO0FBTy9CLHFEQUFxRDtBQUNyRDtJQUE4Qiw0QkFBMEM7SUFBeEU7O0lBY0EsQ0FBQztJQWJHLHlCQUFNLEdBQU47UUFDSSxJQUFJLE9BQU8sR0FBa0IsRUFBRSxDQUFDO1FBQ2hDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3ZELE9BQU8sQ0FBQyxJQUFJLENBQ1IsZ0NBQVEsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQ2hGLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQzVCLENBQUMsQ0FBQztRQUNuQixDQUFDO1FBQ0QsTUFBTSxDQUFDLENBQ0gsZ0NBQVEsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUN4RCxPQUFPLENBQ0gsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQyxBQWRELENBQThCLEtBQUssQ0FBQyxTQUFTLEdBYzVDO0FBZFksNEJBQVEifQ==

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var Field = (function (_super) {
    __extends(Field, _super);
    function Field(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            editMode: false
        };
        return _this;
    }
    Field.prototype.render = function () {
        var _this = this;
        var classes = this.props.model.Mandatory ? "mandatory" : "";
        // classes += " field";
        classes += " form-group";
        classes += " form-horizontal";
        var input;
        switch (this.props.model.Type) {
            case "single-line":
                input = (React.createElement("input", { type: "text", className: "form-control", name: this.props.model.FieldName, value: this.props.model.Value ? this.props.model.Value : "", onChange: function (event) {
                        _this.props.fieldValueChangedHandler(_this.props.sectionNumber, _this.props.itemNumber, _this.props.model.FieldName, event.target.value);
                    } }));
                break;
            case "multi-line":
                input = (React.createElement("textarea", { name: this.props.model.FieldName, className: "form-control", value: this.props.model.Value ? this.props.model.Value : "", onChange: function (event) {
                        _this.props.fieldValueChangedHandler(_this.props.sectionNumber, _this.props.itemNumber, _this.props.model.FieldName, event.target.value);
                    } }));
                break;
            case "file":
                input =
                    (React.createElement("input", { type: this.props.model.Type, className: "form-control", name: this.props.model.FieldName }));
                break;
            default:
                input =
                    (React.createElement("input", { type: this.props.model.Type, className: "form-control", name: this.props.model.FieldName, value: this.props.model.Value ? this.props.model.Value : "", onChange: function (event) {
                            _this.props.fieldValueChangedHandler(_this.props.sectionNumber, _this.props.itemNumber, _this.props.model.FieldName, event.target.value);
                        } }));
                break;
        }
        var editableLabel = (React.createElement("input", { value: this.props.model.Label, className: "control-label col-sm-3", autoFocus: true, onChange: function (event) {
                _this.props.fieldLabelChangedHandler(_this.props.sectionNumber, _this.props.itemNumber, _this.props.model.FieldName, event.target.value);
            }, onBlur: function () { _this.setState({ editMode: false }); } }));
        var label = (React.createElement("label", { className: "control-label col-sm-3", onDoubleClick: function () { _this.setState({ editMode: true }); }, title: "double click to edit" },
            this.props.model.Label,
            " "));
        return (React.createElement("div", { className: classes, key: this.props.model.Id },
            this.state.editMode ? editableLabel : label,
            input));
    };
    return Field;
}(React.Component));
exports.Field = Field;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmllbGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcG9uZW50cy9GaWVsZC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkJBQStCO0FBZS9CO0lBQTJCLHlCQUF5QztJQUNoRSxlQUFZLEtBQWtCO1FBQTlCLFlBQ0ksa0JBQU0sS0FBSyxDQUFDLFNBSWY7UUFIRyxLQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsUUFBUSxFQUFFLEtBQUs7U0FDdEIsQ0FBQzs7SUFDRixDQUFDO0lBRUQsc0JBQU0sR0FBTjtRQUFBLGlCQXdEQztRQXZERyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUM3RCx1QkFBdUI7UUFDdEIsT0FBTyxJQUFJLGFBQWEsQ0FBQztRQUN6QixPQUFPLElBQUksa0JBQWtCLENBQUM7UUFDOUIsSUFBSSxLQUFrQixDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDaEMsS0FBSyxhQUFhO2dCQUNWLEtBQUssR0FBRyxDQUFDLCtCQUFPLElBQUksRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLGNBQWMsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFFLEVBQUUsRUFBRSxRQUFRLEVBQ3ZKLFVBQUMsS0FBMEM7d0JBQ3ZDLEtBQUksQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQ3hELEtBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUNyQixL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

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
// State is never set so we use the 'undefined' type.
var Hello = (function (_super) {
    __extends(Hello, _super);
    function Hello() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hello.prototype.render = function () {
        return React.createElement("h1", null,
            "Hello from ",
            this.props.compiler,
            " and ",
            this.props.framework,
            "!");
    };
    return Hello;
}(React.Component));
exports.Hello = Hello;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVsbG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcG9uZW50cy9IZWxsby50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkJBQStCO0FBTy9CLHFEQUFxRDtBQUNyRDtJQUEyQix5QkFBdUM7SUFBbEU7O0lBSUEsQ0FBQztJQUhHLHNCQUFNLEdBQU47UUFDSSxNQUFNLENBQUM7O1lBQWdCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTs7WUFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVM7Z0JBQU8sQ0FBQztJQUNqRixDQUFDO0lBQ0wsWUFBQztBQUFELENBQUMsQUFKRCxDQUEyQixLQUFLLENBQUMsU0FBUyxHQUl6QztBQUpZLHNCQUFLIn0=

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(3);
var components = __webpack_require__(2);
var HomeScreen = (function (_super) {
    __extends(HomeScreen, _super);
    function HomeScreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomeScreen.prototype.render = function () {
        return (React.createElement("div", { className: "homeScreen-div" },
            React.createElement("h1", { className: "cv-text" }, "CV Builder"),
            React.createElement("h3", { className: "cv-text" }, "The easiest way to generate your CV in seconds!"),
            React.createElement("input", { className: "cv-button", defaultValue: "Get Started", onClick: function () {
                    ReactDOM.render(React.createElement(components.TemplateScreen, null), document.getElementById("example"));
                } }),
            React.createElement("section", { className: "section section-blue" },
                React.createElement("div", { className: "grid" },
                    React.createElement("div", { className: "row center-aligned" },
                        React.createElement("div", { className: "col-sm-12" },
                            React.createElement("h2", { className: "section-title" }, "Build your CV in 4 easy steps"))),
                    React.createElement("ol", { className: "row center-aligned" },
                        React.createElement("li", { className: "col-sm-3 block-icon block-icon-top block-icon-step" },
                            React.createElement("i", { className: "icon-top icon-start" }),
                            React.createElement("span", { className: "block-content block-content-push" },
                                React.createElement("span", { className: "semibold" }, "Click start"))),
                        React.createElement("li", { className: "col-sm-3 block-icon block-icon-top block-icon-step" },
                            React.createElement("i", { className: "icon-top icon-choose" }),
                            React.createElement("span", { className: "block-content block-content-push" },
                                React.createElement("span", { className: "semibold" }, "Choose the template"))),
                        React.createElement("li", { className: "col-sm-3 block-icon block-icon-top block-icon-step" },
                            React.createElement("i", { className: "icon-top icon-form" }),
                            React.createElement("span", { className: "block-content block-content-push" },
                                React.createElement("span", { className: "semibold" }, "Fill in the form"))),
                        React.createElement("li", { className: "col-sm-3 block-icon block-icon-top block-icon-step2" },
                            React.createElement("i", { className: "icon-top icon-download" }),
                            React.createElement("span", { className: "block-content block-content-push" },
                                React.createElement("span", { className: "semibold" }, "Download your CV")))))),
            React.createElement("section", { id: "features", className: "section" },
                React.createElement("div", { className: "grid" },
                    React.createElement("div", { className: "row center-aligned" },
                        React.createElement("div", { className: "col-sm-12" },
                            React.createElement("h2", { className: "center-aligned section-title" }, "CV builder features"))),
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-sm-6" },
                            React.createElement("div", { className: "block-icon block-icon-left block-icon-feature" },
                                React.createElement("i", { className: "icon-left icon-save" }),
                                React.createElement("span", { className: "block-content" }, "Save your form and load it to finish/edit your CV later"))),
                        React.createElement("div", { className: "col-sm-6" },
                            React.createElement("div", { className: "block-icon block-icon-left block-icon-feature" },
                                React.createElement("i", { className: "icon-left icon-dynamic" }),
                                React.createElement("span", { className: "block-content" }, "Double click on field name in order to change it")))),
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-sm-6" },
                            React.createElement("div", { className: "block-icon block-icon-left block-icon-feature" },
                                React.createElement("i", { className: "icon-left icon-pdf" }),
                                React.createElement("span", { className: "block-content" }, "Download your CV as a PDF document")))),
                    React.createElement("input", { className: "cv-button", defaultValue: "Get Started", onClick: function () {
                            ReactDOM.render(React.createElement(components.TemplateScreen, null), document.getElementById("example"));
                        } })))));
    };
    return HomeScreen;
}(React.Component));
exports.HomeScreen = HomeScreen;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZVNjcmVlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0hvbWVTY3JlZW4udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZCQUErQjtBQUMvQixvQ0FBc0M7QUFFdEMseUNBQTJDO0FBSzNDO0lBQWdDLDhCQUE0QztJQUE1RTs7SUF5RkEsQ0FBQztJQXhGRywyQkFBTSxHQUFOO1FBQ0ksTUFBTSxDQUFDLENBQUMsNkJBQUssU0FBUyxFQUFDLGdCQUFnQjtZQUNuQyw0QkFBSSxTQUFTLEVBQUMsU0FBUyxpQkFBZ0I7WUFDdkMsNEJBQUksU0FBUyxFQUFDLFNBQVMsc0RBQXFEO1lBQzVFLCtCQUFPLFNBQVMsRUFBQyxXQUFXLEVBQUMsWUFBWSxFQUFDLGFBQWEsRUFBQyxPQUFPLEVBQUU7b0JBQzdELFFBQVEsQ0FBQyxNQUFNLENBQUMsb0JBQUMsVUFBVSxDQUFDLGNBQWMsT0FBRyxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDdkYsQ0FBQyxHQUFXO1lBQ1osaUNBQVMsU0FBUyxFQUFDLHNCQUFzQjtnQkFDckMsNkJBQUssU0FBUyxFQUFDLE1BQU07b0JBQ2pCLDZCQUFLLFNBQVMsRUFBQyxvQkFBb0I7d0JBQy9CLDZCQUFLLFNBQVMsRUFBQyxXQUFXOzRCQUN0Qiw0QkFBSSxTQUFTLEVBQUMsZUFBZSxvQ0FBbUMsQ0FDOUQsQ0FDSjtvQkFDTiw0QkFBSSxTQUFTLEVBQUMsb0JBQW9CO3dCQUM5Qiw0QkFBSSxTQUFTLEVBQUMsb0RBQW9EOzRCQUM5RCwyQkFBRyxTQUFTLEVBQUMscUJBQXFCLEdBQUs7NEJBQ3ZDLDhCQUFNLFNBQVMsRUFBQyxrQ0FBa0M7Z0NBQzlDLDhCQUFNLFNBQVMsRUFBQyxVQUFVLGtCQUFtQixDQUMxQyxDQUNOO3dCQUNMLDRCQUFJLFNBQVMsRUFBQyxvREFBb0Q7NEJBQzlELDJCQUFHLFNBQVMsRUFBQyxzQkFBc0IsR0FBSzs0QkFDeEMsOEJBQU0sU0FBUyxFQUFDLGtDQUFrQztnQ0FDOUMsOEJBQU0sU0FBUyxFQUFDLFVBQVUsMEJBQTJCLENBQ2xELENBQ047d0JBQ0wsNEJBQUksU0FBUyxFQUFDLG9EQUFvRDs0QkFDOUQsMkJBQUcsU0FBUyxFQUFDLG9CQUFvQixHQUFLOzRCQUN0Qyw4QkFBTSxTQUFTLEVBQUMsa0NBQWtDO2dDQUM5Qyw4QkFBTSxTQUFTLEVBQUMsVUFBVSx1QkFBd0IsQ0FDL0MsQ0FDTjt3QkFDTCw0QkFBSSxTQUFTLEVBQUMscURBQXFEOzRCQUMvRCwyQkFBRyxTQUFTLEVBQUMsd0JBQXdCLEdBQUs7NEJBQzFDLDhCQUFNLFNBQVMsRUFBQyxrQ0FBa0M7Z0NBQzlDLDhCQUFNLFNBQVMsRUFBQyxVQUFVLHVCQUF3QixDQUMvQyxDQUNOLENBQ0osQ0FDSCxDQUNBO1lBQ1YsaUNBQVMsRUFBRSxFQUFDLFVBQVUsRUFBQyxTQUFTLEVBQUMsU0FBUztnQkFDdEMsNkJBQUssU0FBUyxFQUFDLE1BQU07b0JBQ2pCLDZCQUFLLFNBQVMsRUFBQyxvQkFBb0I7d0JBQy9CLDZCQUFLLFNBQVMsRUFBQyxXQUFXOzRCQUN0Qiw0QkFBSSxTQUFTLEVBQUMsOEJBQThCLDBCQUF5QixDQUNuRSxDQUNKO29CQUNOLDZCQUFLLFNBQVMsRUFBQyxLQUFLO3dCQUNoQiw2QkFBSyxTQUFTLEVBQUMsVUFBVTs0QkFDckIsNkJBQUssU0FBUyxFQUFDLCtDQUErQztnQ0FDMUQsMkJBQUcsU0FBUyxFQUFDLHFCQUFxQixHQUFLO2dDQUN2Qyw4QkFBTSxTQUFTLEVBQUMsZUFBZSw4REFFcEMsQ0FDTyxDQUNKO3dCQUNOLDZCQUFLLFNBQVMsRUFBQyxVQUFVOzRCQUNyQiw2QkFBSyxTQUFTLEVBQUMsK0NBQStDO2dDQUMxRCwyQkFBRyxTQUFTLEVBQUMsd0JBQXdCLEdBQUs7Z0NBQzFDLDhCQUFNLFNBQVMsRUFBQyxlQUFlLHVEQUVwQyxDQUNPLENBQ0osQ0FFSjtvQkFDTiw2QkFBSyxTQUFTLEVBQUMsS0FBSzt3QkFDaEIsNkJBQUssU0FBUyxFQUFDLFVBQVU7NEJBQ3JCLDZCQUFLLFNBQVMsRUFBQywrQ0FBK0M7Z0NBQzFELDJCQUFHLFNBQVMsRUFBQyxvQkFBb0IsR0FBSztnQ0FDdEMsOEJBQU0sU0FBUyxFQUFDLGVBQWUseUNBRXBDLENBQ08sQ0FDSixDQUdKO29CQUNOLCtCQUFPLFNBQVMsRUFBQyxXQUFXLEVBQUMsWUFBWSxFQUFDLGFBQWEsRUFBQyxPQUFPLEVBQUU7NEJBQzdELFFBQVEsQ0FBQyxNQUFNLENBQUMsb0JBQUMsVUFBVSxDQUFDLGNBQWMsT0FBRyxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzt3QkFDdkYsQ0FBQyxHQUFXLENBQ1YsQ0FDQSxDQUNSLENBQUMsQ0FBQztJQUVaLENBQUM7SUFDTCxpQkFBQztBQUFELENBQUMsQUF6RkQsQ0FBZ0MsS0FBSyxDQUFDLFNBQVMsR0F5RjlDO0FBekZZLGdDQUFVIn0=

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var Models = __webpack_require__(0);
var components = __webpack_require__(2);
var Section = (function (_super) {
    __extends(Section, _super);
    function Section(props) {
        return _super.call(this, props) || this;
    }
    Section.prototype.render = function () {
        var _this = this;
        var fields = [];
        var addButton = this.props.model.Expandable
            ? (React.createElement("div", { className: "btn", onClick: function () { _this.props.itemAddHandler(_this.props.sectionNumber); } }, "Add section"))
            : null;
        var sectionItems = [];
        this.props.model.Items.forEach(function (item, index) {
            fields = [];
            for (var key in item) {
                if (item.hasOwnProperty(key) && item[key] instanceof Models.FieldModel) {
                    var fieldModel = item[key];
                    fields.push(React.createElement(components.Field, { model: fieldModel, key: key, fieldValueChangedHandler: _this.props.fieldValueChangedHandler, fieldLabelChangedHandler: _this.props.fieldLabelChangedHandler, itemNumber: index, sectionNumber: _this.props.sectionNumber }));
                }
            }
            var removeButton = _this.props.model.Items.length > 1
                ? (React.createElement("div", { className: "btn actionBtn", onClick: function () { _this.props.itemRemoveHandler(index); } },
                    React.createElement("span", { className: "glyphicon glyphicon-trash", "aria-hidden": "true" })))
                : null;
            var pushDownButton = (_this.props.model.Items.length > 1 && index != _this.props.model.Items.length - 1)
                ? (React.createElement("div", { className: "btn actionBtn", onClick: function () { _this.props.itemPushHandler(index, index + 1); } },
                    React.createElement("span", { className: "glyphicon glyphicon-arrow-down", "aria-hidden": "true" })))
                : null;
            var pushUpButton = (index != 0)
                ? (React.createElement("div", { className: "btn actionBtn", onClick: function () { _this.props.itemPushHandler(index, index - 1); } },
                    React.createElement("span", { className: "glyphicon glyphicon-arrow-up", "aria-hidden": "true" })))
                : null;
            sectionItems.push(React.createElement("div", { className: "section-item", key: index },
                fields,
                removeButton,
                pushDownButton,
                pushUpButton,
                React.createElement("hr", null)));
        });
        var classes = " " + (this.props.isActive ? "" : "hidden");
        classes += " section";
        var component = (React.createElement("div", { className: classes, id: this.props.model.SectionIdentifier },
            React.createElement("div", { className: "section-title" }, this.props.model.Name),
            sectionItems,
            addButton));
        return component;
    };
    return Section;
}(React.Component));
exports.Section = Section;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZCQUErQjtBQUMvQix5Q0FBMkM7QUFDM0MseUNBQTJDO0FBb0IzQztJQUE2QiwyQkFBNkM7SUFDdEUsaUJBQVksS0FBb0I7ZUFDNUIsa0JBQU0sS0FBSyxDQUFDO0lBQ2hCLENBQUM7SUFFRCx3QkFBTSxHQUFOO1FBQUEsaUJBMERDO1FBeERHLElBQUksTUFBTSxHQUFrQixFQUFFLENBQUM7UUFDL0IsSUFBSSxTQUFTLEdBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVTtjQUNyQixDQUFDLDZCQUFLLFNBQVMsRUFBQyxLQUFLLEVBQUMsT0FBTyxFQUFFLGNBQVEsS0FBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBRXRGLENBQUM7Y0FDUixJQUFJLENBQUM7UUFDZixJQUFJLFlBQVksR0FBa0IsRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLEVBQUUsS0FBSztZQUN2QyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ1osR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDbkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7b0JBQ3JFLElBQUksVUFBVSxHQUFzQixJQUFJLENBQUMsR0FBRyxDQUFzQixDQUFDO29CQUNuRSxNQUFNLENBQUMsSUFBSSxDQUNQLG9CQUFDLFVBQVUsQ0FB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

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(3);
var Models = __webpack_require__(0);
var components = __webpack_require__(2);
var TemplateScreen = (function (_super) {
    __extends(TemplateScreen, _super);
    function TemplateScreen(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { activeTemplate: 0 };
        return _this;
    }
    TemplateScreen.prototype.render = function () {
        var _this = this;
        var imageCells = [];
        for (var i = 0; i < 2; i++) {
            imageCells.push(React.createElement("div", { key: i, className: "image-cells cell" + i +
                    (i === this.state.activeTemplate ? " selected" : ""), "data-template-number": i, onClick: function (event) {
                    _this.setState({ activeTemplate: +event.currentTarget.dataset["templateNumber"] });
                } }));
        }
        return (React.createElement("div", { className: "templateScreen-div" },
            React.createElement("h1", { className: "template-text" }, "Template selection"),
            React.createElement("h3", { className: "template-text" }, "To achieve desired look of your CV, select one of the following templates"),
            React.createElement("div", { className: "template-table" },
                React.createElement("div", { className: "image-row" }, imageCells)),
            React.createElement("input", { type: "button", className: "template-button", value: "Continue", onClick: function () {
                    fetch("/Builder/Sections")
                        .then(function (response) {
                        return response.json();
                    }).then(function (json) {
                        var cvFormModel = new Models.CVFormModel(json);
                        ReactDOM.render(React.createElement(components.CVForm, { model: cvFormModel, templateNumber: _this.state.activeTemplate }), document.getElementById("example"));
                    });
                } })));
    };
    return TemplateScreen;
}(React.Component));
exports.TemplateScreen = TemplateScreen;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVtcGxhdGVTY3JlZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcG9uZW50cy9UZW1wbGF0ZVNjcmVlbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkJBQStCO0FBQy9CLG9DQUFzQztBQUN0Qyx5Q0FBMkM7QUFDM0MseUNBQTJDO0FBUzNDO0lBQW9DLGtDQUEyRDtJQUMzRix3QkFBWSxLQUEyQjtRQUF2QyxZQUNJLGtCQUFNLEtBQUssQ0FBQyxTQUVmO1FBREcsS0FBSSxDQUFDLEtBQUssR0FBRyxFQUFFLGNBQWMsRUFBRSxDQUFDLEVBQUUsQ0FBQzs7SUFDdkMsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFBQSxpQkE4QkM7UUE3QkcsSUFBSSxVQUFVLEdBQWtCLEVBQUUsQ0FBQztRQUNuQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3pCLFVBQVUsQ0FBQyxJQUFJLENBQUMsNkJBQUssR0FBRyxFQUFFLENBQUMsRUFDTixTQUFTLEVBQUUsa0JBQWtCLEdBQUcsQ0FBQztvQkFDN0IsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEdBQUcsV0FBVyxHQUFHLEVBQUUsQ0FBQywwQkFDbEMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxVQUFDLEtBQXVDO29CQUN0RSxLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsY0FBYyxFQUFFLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3RGLENBQUMsR0FBUSxDQUFDLENBQUM7UUFDcEMsQ0FBQztRQUNELE1BQU0sQ0FBQyxDQUFDLDZCQUFLLFNBQVMsRUFBQyxvQkFBb0I7WUFDL0IsNEJBQUksU0FBUyxFQUFDLGVBQWUseUJBQXdCO1lBQ3JELDRCQUFJLFNBQVMsRUFBQyxlQUFlLGdGQUErRTtZQUM1Ryw2QkFBSyxTQUFTLEVBQUMsZ0JBQWdCO2dCQUMzQiw2QkFBSyxTQUFTLEVBQUMsV0FBVyxJQUNyQixVQUFVLENBQ1QsQ0FDSjtZQUNOLCtCQUFPLElBQUksRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFDLGlCQUFpQixFQUFDLEtBQUssRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFFO29CQUN2RSxLQUFLLENBQUMsbUJBQW1CLENBQUM7eUJBQ3JCLElBQUksQ0FBQyxVQUFDLFFBQWE7d0JBQ2hCLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQzNCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQVM7d0JBQ2QsSUFBSSxXQUFXLEdBQXVCLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDbkUsUUFBUSxDQUFDLE1BQU0sQ0FDWCxvQkFBQyxVQUFVLENBQUMsTUFBTSxJQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxHQUFHLEVBQ25GLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDNUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsQ0FBQyxHQUFVLENBQ1QsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQUFyQ0QsQ0FBb0MsS0FBSyxDQUFDLFNBQVMsR0FxQ2xEO0FBckNZLHdDQUFjIn0=

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(3);
var components = __webpack_require__(2);
__webpack_require__(4);
ReactDOM.render(React.createElement(components.HomeScreen, null), document.getElementById("example"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQStCO0FBQy9CLG9DQUFzQztBQUN0QyxvREFBc0Q7QUFDdEQsd0JBQXNCO0FBRXRCLFFBQVEsQ0FBQyxNQUFNLENBQUMsb0JBQUMsVUFBVSxDQUFDLFVBQVUsT0FBRyxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyJ9

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {var require;/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   4.1.0
 */

(function (global, factory) {
     true ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.ES6Promise = factory());
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  return typeof x === 'function' || typeof x === 'object' && x !== null;
}

function isFunction(x) {
  return typeof x === 'function';
}

var _isArray = undefined;
if (!Array.isArray) {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
} else {
  _isArray = Array.isArray;
}

var isArray = _isArray;

var len = 0;
var vertxNext = undefined;
var customSchedulerFn = undefined;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && ({}).toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var r = require;
    var vertx = __webpack_require__(24);
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = undefined;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var _arguments = arguments;

  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;

  if (_state) {
    (function () {
      var callback = _arguments[_state - 1];
      asap(function () {
        return invokeCallback(_state, child, callback, parent._result);
      });
    })();
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  _resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(16);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

var GET_THEN_ERROR = new ErrorObject();

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function getThen(promise) {
  try {
    return promise.then;
  } catch (error) {
    GET_THEN_ERROR.error = error;
    return GET_THEN_ERROR;
  }
}

function tryThen(then, value, fulfillmentHandler, rejectionHandler) {
  try {
    then.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        _resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      _reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      _reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    _reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return _resolve(promise, value);
    }, function (reason) {
      return _reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$) {
  if (maybeThenable.constructor === promise.constructor && then$$ === then && maybeThenable.constructor.resolve === resolve) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$ === GET_THEN_ERROR) {
      _reject(promise, GET_THEN_ERROR.error);
      GET_THEN_ERROR.error = null;
    } else if (then$$ === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$)) {
      handleForeignThenable(promise, maybeThenable, then$$);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function _resolve(promise, value) {
  if (promise === value) {
    _reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    handleMaybeThenable(promise, value, getThen(value));
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function _reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;

  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = undefined,
      callback = undefined,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function ErrorObject() {
  this.error = null;
}

var TRY_CATCH_ERROR = new ErrorObject();

function tryCatch(callback, detail) {
  try {
    return callback(detail);
  } catch (e) {
    TRY_CATCH_ERROR.error = e;
    return TRY_CATCH_ERROR;
  }
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = undefined,
      error = undefined,
      succeeded = undefined,
      failed = undefined;

  if (hasCallback) {
    value = tryCatch(callback, detail);

    if (value === TRY_CATCH_ERROR) {
      failed = true;
      error = value.error;
      value.error = null;
    } else {
      succeeded = true;
    }

    if (promise === value) {
      _reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
      _resolve(promise, value);
    } else if (failed) {
      _reject(promise, error);
    } else if (settled === FULFILLED) {
      fulfill(promise, value);
    } else if (settled === REJECTED) {
      _reject(promise, value);
    }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      _resolve(promise, value);
    }, function rejectPromise(reason) {
      _reject(promise, reason);
    });
  } catch (e) {
    _reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function Enumerator(Constructor, input) {
  this._instanceConstructor = Constructor;
  this.promise = new Constructor(noop);

  if (!this.promise[PROMISE_ID]) {
    makePromise(this.promise);
  }

  if (isArray(input)) {
    this._input = input;
    this.length = input.length;
    this._remaining = input.length;

    this._result = new Array(this.length);

    if (this.length === 0) {
      fulfill(this.promise, this._result);
    } else {
      this.length = this.length || 0;
      this._enumerate();
      if (this._remaining === 0) {
        fulfill(this.promise, this._result);
      }
    }
  } else {
    _reject(this.promise, validationError());
  }
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
};

Enumerator.prototype._enumerate = function () {
  var length = this.length;
  var _input = this._input;

  for (var i = 0; this._state === PENDING && i < length; i++) {
    this._eachEntry(_input[i], i);
  }
};

Enumerator.prototype._eachEntry = function (entry, i) {
  var c = this._instanceConstructor;
  var resolve$$ = c.resolve;

  if (resolve$$ === resolve) {
    var _then = getThen(entry);

    if (_then === then && entry._state !== PENDING) {
      this._settledAt(entry._state, i, entry._result);
    } else if (typeof _then !== 'function') {
      this._remaining--;
      this._result[i] = entry;
    } else if (c === Promise) {
      var promise = new c(noop);
      handleMaybeThenable(promise, entry, _then);
      this._willSettleAt(promise, i);
    } else {
      this._willSettleAt(new c(function (resolve$$) {
        return resolve$$(entry);
      }), i);
    }
  } else {
    this._willSettleAt(resolve$$(entry), i);
  }
};

Enumerator.prototype._settledAt = function (state, i, value) {
  var promise = this.promise;

  if (promise._state === PENDING) {
    this._remaining--;

    if (state === REJECTED) {
      _reject(promise, value);
    } else {
      this._result[i] = value;
    }
  }

  if (this._remaining === 0) {
    fulfill(promise, this._result);
  }
};

Enumerator.prototype._willSettleAt = function (promise, i) {
  var enumerator = this;

  subscribe(promise, undefined, function (value) {
    return enumerator._settledAt(FULFILLED, i, value);
  }, function (reason) {
    return enumerator._settledAt(REJECTED, i, reason);
  });
};

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  _reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {function} resolver
  Useful for tooling.
  @constructor
*/
function Promise(resolver) {
  this[PROMISE_ID] = nextId();
  this._result = this._state = undefined;
  this._subscribers = [];

  if (noop !== resolver) {
    typeof resolver !== 'function' && needsResolver();
    this instanceof Promise ? initializePromise(this, resolver) : needsNew();
  }
}

Promise.all = all;
Promise.race = race;
Promise.resolve = resolve;
Promise.reject = reject;
Promise._setScheduler = setScheduler;
Promise._setAsap = setAsap;
Promise._asap = asap;

Promise.prototype = {
  constructor: Promise,

  /**
    The primary way of interacting with a promise is through its `then` method,
    which registers callbacks to receive either a promise's eventual value or the
    reason why the promise cannot be fulfilled.
  
    ```js
    findUser().then(function(user){
      // user is available
    }, function(reason){
      // user is unavailable, and you are given the reason why
    });
    ```
  
    Chaining
    --------
  
    The return value of `then` is itself a promise.  This second, 'downstream'
    promise is resolved with the return value of the first promise's fulfillment
    or rejection handler, or rejected if the handler throws an exception.
  
    ```js
    findUser().then(function (user) {
      return user.name;
    }, function (reason) {
      return 'default name';
    }).then(function (userName) {
      // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
      // will be `'default name'`
    });
  
    findUser().then(function (user) {
      throw new Error('Found user, but still unhappy');
    }, function (reason) {
      throw new Error('`findUser` rejected and we're unhappy');
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
      // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
    });
    ```
    If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
  
    ```js
    findUser().then(function (user) {
      throw new PedagogicalException('Upstream error');
    }).then(function (value) {
      // never reached
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // The `PedgagocialException` is propagated all the way down to here
    });
    ```
  
    Assimilation
    ------------
  
    Sometimes the value you want to propagate to a downstream promise can only be
    retrieved asynchronously. This can be achieved by returning a promise in the
    fulfillment or rejection handler. The downstream promise will then be pending
    until the returned promise is settled. This is called *assimilation*.
  
    ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // The user's comments are now available
    });
    ```
  
    If the assimliated promise rejects, then the downstream promise will also reject.
  
    ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // If `findCommentsByAuthor` fulfills, we'll have the value here
    }, function (reason) {
      // If `findCommentsByAuthor` rejects, we'll have the reason here
    });
    ```
  
    Simple Example
    --------------
  
    Synchronous Example
  
    ```javascript
    let result;
  
    try {
      result = findResult();
      // success
    } catch(reason) {
      // failure
    }
    ```
  
    Errback Example
  
    ```js
    findResult(function(result, err){
      if (err) {
        // failure
      } else {
        // success
      }
    });
    ```
  
    Promise Example;
  
    ```javascript
    findResult().then(function(result){
      // success
    }, function(reason){
      // failure
    });
    ```
  
    Advanced Example
    --------------
  
    Synchronous Example
  
    ```javascript
    let author, books;
  
    try {
      author = findAuthor();
      books  = findBooksByAuthor(author);
      // success
    } catch(reason) {
      // failure
    }
    ```
  
    Errback Example
  
    ```js
  
    function foundBooks(books) {
  
    }
  
    function failure(reason) {
  
    }
  
    findAuthor(function(author, err){
      if (err) {
        failure(err);
        // failure
      } else {
        try {
          findBoooksByAuthor(author, function(books, err) {
            if (err) {
              failure(err);
            } else {
              try {
                foundBooks(books);
              } catch(reason) {
                failure(reason);
              }
            }
          });
        } catch(error) {
          failure(err);
        }
        // success
      }
    });
    ```
  
    Promise Example;
  
    ```javascript
    findAuthor().
      then(findBooksByAuthor).
      then(function(books){
        // found books
    }).catch(function(reason){
      // something went wrong
    });
    ```
  
    @method then
    @param {Function} onFulfilled
    @param {Function} onRejected
    Useful for tooling.
    @return {Promise}
  */
  then: then,

  /**
    `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
    as the catch block of a try/catch statement.
  
    ```js
    function findAuthor(){
      throw new Error('couldn't find that author');
    }
  
    // synchronous
    try {
      findAuthor();
    } catch(reason) {
      // something went wrong
    }
  
    // async with promises
    findAuthor().catch(function(reason){
      // something went wrong
    });
    ```
  
    @method catch
    @param {Function} onRejection
    Useful for tooling.
    @return {Promise}
  */
  'catch': function _catch(onRejection) {
    return this.then(null, onRejection);
  }
};

function polyfill() {
    var local = undefined;

    if (typeof global !== 'undefined') {
        local = global;
    } else if (typeof self !== 'undefined') {
        local = self;
    } else {
        try {
            local = Function('return this')();
        } catch (e) {
            throw new Error('polyfill failed because global object is unavailable in this environment');
        }
    }

    var P = local.Promise;

    if (P) {
        var promiseToString = null;
        try {
            promiseToString = Object.prototype.toString.call(P.resolve());
        } catch (e) {
            // silently ignored
        }

        if (promiseToString === '[object Promise]' && !P.cast) {
            return;
        }
    }

    local.Promise = Promise;
}

// Strange compat..
Promise.polyfill = polyfill;
Promise.Promise = Promise;

return Promise;

})));
//# sourceMappingURL=es6-promise.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22), __webpack_require__(23)))

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 23 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map