'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DEFAULT_SIZE = 24;

exports.default = function (_ref) {
  var _ref$fill = _ref.fill,
      fill = _ref$fill === undefined ? 'currentColor' : _ref$fill,
      _ref$width = _ref.width,
      width = _ref$width === undefined ? DEFAULT_SIZE : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? DEFAULT_SIZE : _ref$height,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style,
      props = _objectWithoutProperties(_ref, ['fill', 'width', 'height', 'style']);

  return _react2.default.createElement(
    'svg',
    _extends({
      viewBox: '0 0 ' + DEFAULT_SIZE + ' ' + DEFAULT_SIZE,
      style: _extends({ fill: fill, width: width, height: height }, style)
    }, props),
    _react2.default.createElement('path', { d: 'M4.59,6.89C5.29,6.18 6,5.54 6.3,5.67C6.8,5.87 6.3,6.7 6,7.19C5.75,7.61 3.14,11.08 3.14,13.5C3.14,14.78 3.62,15.84 4.5,16.5C5.23,17.04 6.22,17.21 7.12,16.94C8.19,16.63 9.07,15.54 10.18,14.17C11.39,12.68 13,10.73 14.26,10.73C15.89,10.73 15.91,11.74 16,12.5C12.24,13.16 10.64,16.19 10.64,17.89C10.64,19.59 12.08,21 13.85,21C15.5,21 18.14,19.65 18.54,14.88H21V12.38H18.53C18.38,10.73 17.44,8.18 14.5,8.18C12.25,8.18 10.32,10.09 9.56,11C9,11.75 7.5,13.5 7.27,13.74C7,14.04 6.59,14.58 6.16,14.58C5.71,14.58 5.44,13.75 5.8,12.66C6.15,11.57 7.2,9.8 7.65,9.14C8.43,8 8.95,7.22 8.95,5.86C8.95,3.69 7.31,3 6.44,3C5.12,3 3.97,4 3.72,4.25C3.36,4.61 3.06,4.91 2.84,5.18L4.59,6.89M13.88,18.55C13.57,18.55 13.14,18.29 13.14,17.83C13.14,17.23 13.87,15.63 16,15.07C15.71,17.76 14.58,18.55 13.88,18.55Z' })
  );
};