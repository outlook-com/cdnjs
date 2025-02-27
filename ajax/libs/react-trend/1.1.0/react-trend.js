/*!
 * react-trend v1.0.0
 * MIT Licensed
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["Trend"] = factory(require("react"));
	else
		root["Trend"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _Trend = __webpack_require__(2);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Trend).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _Trend = __webpack_require__(3);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Trend).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _jsxFileName = '/Users/josh/work/react-trend/src/components/Trend/Trend.js';

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(5);

	var _DOM = __webpack_require__(6);

	var _math = __webpack_require__(7);

	var _misc = __webpack_require__(8);

	var _Trend = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var propTypes = {
	  data: _react.PropTypes.arrayOf(_react.PropTypes.number),
	  smooth: _react.PropTypes.bool,
	  autoDraw: _react.PropTypes.bool,
	  autoDrawDuration: _react.PropTypes.number,
	  autoDrawEasing: _react.PropTypes.string,
	  width: _react.PropTypes.number,
	  height: _react.PropTypes.number,
	  padding: _react.PropTypes.number,
	  radius: _react.PropTypes.number,
	  color: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.arrayOf(_react.PropTypes.string)]),
	  strokeWidth: _react.PropTypes.number,
	  strokeLinecap: _react.PropTypes.string,
	  strokeLinejoin: _react.PropTypes.string,
	  strokeDashoffset: _react.PropTypes.number,
	  strokeDasharray: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.arrayOf(_react.PropTypes.number)])
	};

	var defaultProps = {
	  radius: 10,
	  color: 'black',
	  padding: 8,
	  strokeWidth: 1,
	  autoDraw: false,
	  autoDrawDuration: 2000,
	  autoDrawEasing: 'ease'
	};

	var GRADIENT_ID = 'react-trend-vertical-gradient';

	var Trend = function (_Component) {
	  _inherits(Trend, _Component);

	  function Trend(props) {
	    _classCallCheck(this, Trend);

	    // Generate a random ID. This is important for distinguishing between
	    // Trend components on a page, so that they can have different keyframe
	    // animations.
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

	    _this.trendId = (0, _misc.generateId)();
	    return _this;
	  }

	  Trend.prototype.componentDidMount = function componentDidMount() {
	    var _props = this.props,
	        autoDraw = _props.autoDraw,
	        autoDrawDuration = _props.autoDrawDuration,
	        autoDrawEasing = _props.autoDrawEasing;


	    if (autoDraw) {
	      var lineLength = this.path.getTotalLength();

	      var css = '\n        @keyframes react-trend-autodraw-' + this.trendId + ' {\n          from {\n            stroke-dashoffset: ' + lineLength + '\n          }\n          to {\n            stroke-dashoffset: 0;\n          }\n        }\n\n        #react-trend-' + this.trendId + ' {\n          stroke-dasharray: ' + lineLength + ';\n          animation: react-trend-autodraw-' + this.trendId + ' ' + autoDrawDuration + 'ms ' + autoDrawEasing + '\n        }\n      ';

	      (0, _DOM.injectStyleTag)(css);
	    }
	  };

	  Trend.prototype.getDelegatedProps = function getDelegatedProps() {
	    return (0, _utils.omit)(this.props, Object.keys(propTypes));
	  };

	  Trend.prototype.renderGradientDefinition = function renderGradientDefinition() {
	    var _this2 = this;

	    var color = this.props.color;


	    if (typeof color === 'string') {
	      return null;
	    }

	    return _react2.default.createElement(
	      'defs',
	      {
	        __source: {
	          fileName: _jsxFileName,
	          lineNumber: 97
	        },
	        __self: this
	      },
	      _react2.default.createElement(
	        'linearGradient',
	        { id: GRADIENT_ID, x1: '0%', y1: '0%', x2: '0%', y2: '100%', __source: {
	            fileName: _jsxFileName,
	            lineNumber: 98
	          },
	          __self: this
	        },
	        color.slice().reverse().map(function (c, index) {
	          return _react2.default.createElement('stop', {
	            key: index,
	            offset: (0, _math.normalize)({
	              value: index,
	              min: 0,
	              max: color.length - 1
	            }),
	            stopColor: c,
	            __source: {
	              fileName: _jsxFileName,
	              lineNumber: 100
	            },
	            __self: _this2
	          });
	        })
	      )
	    );
	  };

	  Trend.prototype.render = function render() {
	    var _this3 = this;

	    var _props2 = this.props,
	        data = _props2.data,
	        smooth = _props2.smooth,
	        width = _props2.width,
	        height = _props2.height,
	        padding = _props2.padding,
	        radius = _props2.radius,
	        color = _props2.color,
	        strokeWidth = _props2.strokeWidth,
	        strokeLinecap = _props2.strokeLinecap,
	        strokeLinejoin = _props2.strokeLinejoin,
	        strokeDasharray = _props2.strokeDasharray,
	        strokeDashoffset = _props2.strokeDashoffset;

	    // We need at least 2 points to draw a graph.

	    if (!data || data.length < 2) {
	      return null;
	    }

	    // Our viewbox needs to be in absolute units, so we'll default to 300x75
	    // Our SVG can be a %, though; this is what makes it scalable.
	    // By defaulting to percentages, the SVG will grow to fill its parent
	    // container, preserving a 1/4 aspect ratio.
	    var viewBoxWidth = width || 300;
	    var viewBoxHeight = height || 75;
	    var svgWidth = width || '100%';
	    var svgHeight = height || '25%';

	    var normalizedData = (0, _Trend.normalizeDataset)(data, {
	      minX: padding,
	      maxX: viewBoxWidth - padding,
	      // NOTE: Because SVGs are indexed from the top left, but most data is
	      // indexed from the bottom left, we're inverting the Y min/max.
	      minY: viewBoxHeight - padding,
	      maxY: padding
	    });

	    // Use a 'smooth curve' instruction if we want it smooth.
	    // Otherwise, use 'line';
	    var path = smooth ? (0, _DOM.buildSmoothPath)(normalizedData, { radius: radius }) : (0, _DOM.buildLinearPath)(normalizedData);

	    var useGradient = typeof color !== 'string';

	    return _react2.default.createElement(
	      'svg',
	      _extends({
	        width: svgWidth,
	        height: svgHeight,
	        viewBox: '0 0 ' + viewBoxWidth + ' ' + viewBoxHeight
	      }, this.getDelegatedProps(), {
	        __source: {
	          fileName: _jsxFileName,
	          lineNumber: 163
	        },
	        __self: this
	      }),
	      this.renderGradientDefinition(),
	      _react2.default.createElement('path', {
	        ref: function ref(elem) {
	          _this3.path = elem;
	        },
	        id: 'react-trend-' + this.trendId,
	        d: path,
	        fill: 'none',
	        stroke: useGradient ? 'url(#' + GRADIENT_ID + ')' : color,
	        strokeWidth: strokeWidth,
	        strokeLinecap: strokeLinecap,
	        strokeLinejoin: strokeLinejoin,
	        strokeDasharray: strokeDasharray,
	        strokeDashoffset: strokeDashoffset,
	        __source: {
	          fileName: _jsxFileName,
	          lineNumber: 171
	        },
	        __self: this
	      })
	    );
	  };

	  return Trend;
	}(_react.Component);

	Trend.propTypes = propTypes;
	Trend.defaultProps = defaultProps;

	exports.default = Trend;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var range = exports.range = function range(to) {
	  return [].concat(Array(to).keys());
	};

	var pick = exports.pick = function pick(obj, keys) {
	  return keys.reduce(function (acc, key) {
	    var _extends2;

	    return _extends({}, acc, (_extends2 = {}, _extends2[key] = obj[key], _extends2));
	  }, {});
	};

	var omit = exports.omit = function omit(obj, keys) {
	  return Object.keys(obj).reduce(function (acc, key) {
	    var _extends3;

	    if (keys.indexOf(key) !== -1) {
	      return acc;
	    }

	    return _extends({}, acc, (_extends3 = {}, _extends3[key] = obj[key], _extends3));
	  }, {});
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.injectStyleTag = exports.buildSmoothPath = exports.buildLinearPath = undefined;

	var _math = __webpack_require__(7);

	var buildLinearPath = exports.buildLinearPath = function buildLinearPath(data) {
	  return data.reduce(function (path, _ref, index) {
	    var x = _ref.x,
	        y = _ref.y;

	    // The very first instruction needs to be a "move".
	    // The rest will be a "line".
	    var isFirstInstruction = index === 0;
	    var instruction = isFirstInstruction ? 'M' : 'L';

	    return '' + path + instruction + ' ' + x + ',' + y + '\n';
	  }, '');
	};

	var buildSmoothPath = exports.buildSmoothPath = function buildSmoothPath(data, _ref2) {
	  var radius = _ref2.radius;
	  var firstPoint = data[0],
	      otherPoints = data.slice(1);


	  return otherPoints.reduce(function (path, point, index) {
	    var next = otherPoints[index + 1];
	    var prev = otherPoints[index - 1] || firstPoint;

	    var isCollinear = next && (0, _math.checkForCollinearPoints)(prev, point, next);

	    if (!next || isCollinear) {
	      // The very last line in the sequence can just be a regular line.
	      return path + '\nL ' + point.x + ',' + point.y;
	    }

	    var distanceFromPrev = (0, _math.getDistanceBetween)(prev, point);
	    var distanceFromNext = (0, _math.getDistanceBetween)(next, point);
	    var threshold = Math.min(distanceFromPrev, distanceFromNext);

	    var isTooCloseForRadius = threshold / 2 < radius;

	    if (isTooCloseForRadius) {
	      // eslint-disable-next-line no-param-reassign
	      radius = threshold / 2;
	    }

	    var before = (0, _math.moveTo)(prev, point, radius);
	    var after = (0, _math.moveTo)(next, point, radius);

	    return [path, 'L ' + before.x + ',' + before.y, 'S ' + point.x + ',' + point.y + ' ' + after.x + ',' + after.y].join('\n');
	  }, 'M ' + firstPoint.x + ',' + firstPoint.y);
	};

	// Taken from Khan Academy's Aphrodite
	// https://github.com/Khan/aphrodite/blob/master/src/inject.js
	var styleTag = void 0;
	var injectStyleTag = exports.injectStyleTag = function injectStyleTag(cssContents) {
	  if (styleTag == null) {
	    // Try to find a style tag with the `data-react-trend` attribute first.
	    styleTag = document.querySelector('style[data-react-trend]');

	    // If that doesn't work, generate a new style tag.
	    if (styleTag == null) {
	      // Taken from
	      // http://stackoverflow.com/questions/524696/how-to-create-a-style-tag-with-javascript
	      var head = document.head || document.getElementsByTagName('head')[0];
	      styleTag = document.createElement('style');

	      styleTag.type = 'text/css';
	      styleTag.setAttribute('data-react-trend', '');
	      head.appendChild(styleTag);
	    }
	  }

	  styleTag.appendChild(document.createTextNode(cssContents));
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	/* eslint-disable no-restricted-properties */

	/** normalize
	 * This lets us translate a value from one scale to another.
	 *
	 * @param {Number} value - Our initial value to translate
	 * @param {Number} min - the current minimum value possible
	 * @param {Number} max - the current maximum value possible
	 * @param {Number} scaleMin - the min value of the scale we're translating to
	 * @param {Number} scaleMax - the max value of the scale we're translating to
	 *
	 * @returns {Number} the value on its new scale
	 */
	var normalize = exports.normalize = function normalize(_ref) {
	  var value = _ref.value,
	      min = _ref.min,
	      max = _ref.max,
	      _ref$scaleMin = _ref.scaleMin,
	      scaleMin = _ref$scaleMin === undefined ? 0 : _ref$scaleMin,
	      _ref$scaleMax = _ref.scaleMax,
	      scaleMax = _ref$scaleMax === undefined ? 1 : _ref$scaleMax;
	  return scaleMin + (value - min) * (scaleMax - scaleMin) / (max - min);
	};

	/** moveTo
	 * the coordinate that lies at a midpoint between 2 lines, based on the radius
	 *
	 * @param {Object} to - Our initial point
	 * @param {Number} to.x - The x value of our initial point
	 * @param {Number} to.y - The y value of our initial point
	 * @param {Object} from - Our final point
	 * @param {Number} from.x - The x value of our final point
	 * @param {Number} from.y - The y value of our final point
	 * @param {Number} radius - The distance away from the final point
	 *
	 * @returns {Object} an object holding the x/y coordinates of the midpoint.
	 */
	var moveTo = exports.moveTo = function moveTo(to, from, radius) {
	  var vector = { x: to.x - from.x, y: to.y - from.y };
	  var length = Math.sqrt(vector.x * vector.x + vector.y * vector.y);
	  var unitVector = { x: vector.x / length, y: vector.y / length };

	  return {
	    x: from.x + unitVector.x * radius,
	    y: from.y + unitVector.y * radius
	  };
	};

	/** getDistanceBetween
	 * Simple formula derived from pythagoras to calculate the distance between
	 * 2 points on a plane.
	 *
	 * @param {Object} p1 - Our initial point
	 * @param {Number} p1.x - The x value of our initial point
	 * @param {Number} p1.y - The y value of our initial point
	 * @param {Object} p2 - Our final point
	 * @param {Number} p2.x - The x value of our final point
	 * @param {Number} p2.y - The y value of our final point
	 *
	 * @returns {Number} the distance between the points.
	 */
	var getDistanceBetween = exports.getDistanceBetween = function getDistanceBetween(p1, p2) {
	  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
	};

	/** checkForCollinearPoints
	 * Figure out if the midpoint fits perfectly on a line between the two others.
	 *
	 * @param {Object} p1 - Our initial point
	 * @param {Number} p1.x - The x value of our initial point
	 * @param {Number} p1.y - The y value of our initial point
	 * @param {Object} p2 - Our mid-point
	 * @param {Number} p2.x - The x value of our mid-point
	 * @param {Number} p2.y - The y value of our mid-point
	 * @param {Object} p3 - Our final point
	 * @param {Number} p3.x - The x value of our final point
	 * @param {Number} p3.y - The y value of our final point

	 * @returns {Boolean} whether or not p2 sits on the line between p1 and p3.
	 */
	var checkForCollinearPoints = exports.checkForCollinearPoints = function checkForCollinearPoints(p1, p2, p3) {
	  return (p1.y - p2.y) * (p1.x - p3.x) === (p1.y - p3.y) * (p1.x - p2.x);
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	// eslint-disable-next-line no-restricted-properties
	var generateId = exports.generateId = function generateId() {
	  return Math.round(Math.random() * Math.pow(10, 16));
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.normalizeDataset = undefined;

	var _math = __webpack_require__(7);

	var normalizeDataset = exports.normalizeDataset = function normalizeDataset(data, _ref) {
	  var minX = _ref.minX,
	      maxX = _ref.maxX,
	      minY = _ref.minY,
	      maxY = _ref.maxY;

	  // For the X axis, we want to normalize it based on its index in the array.
	  // For the Y axis, we want to normalize it based on the element's value.
	  //
	  // X axis is easy: just evenly-space each item in the array.
	  // For the Y axis, we first need to find the min and max of our array,
	  // and then normalize those values between 0 and 1.
	  var boundariesY = { min: Math.min.apply(Math, data), max: Math.max.apply(Math, data) };
	  var boundariesX = { min: 0, max: data.length - 1 };

	  return data.map(function (point, index) {
	    return {
	      x: (0, _math.normalize)({
	        value: index,
	        min: boundariesX.min,
	        max: boundariesX.max,
	        scaleMin: minX,
	        scaleMax: maxX
	      }),
	      y: (0, _math.normalize)({
	        value: point,
	        min: boundariesY.min,
	        max: boundariesY.max,
	        scaleMin: minY,
	        scaleMax: maxY
	      })
	    };
	  });
	};

/***/ }
/******/ ])
});
;