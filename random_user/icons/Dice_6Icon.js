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
    _react2.default.createElement('path', { d: 'M5,3H19C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3M7,5C5.9,5 5,5.9 5,7C5,8.1 5.9,9 7,9C8.1,9 9,8.1 9,7C9,5.9 8.1,5 7,5M17,15C15.9,15 15,15.9 15,17C15,18.1 15.9,19 17,19C18.1,19 19,18.1 19,17C19,15.9 18.1,15 17,15M17,10C15.9,10 15,10.9 15,12C15,13.1 15.9,14 17,14C18.1,14 19,13.1 19,12C19,10.9 18.1,10 17,10M17,5C15.9,5 15,5.9 15,7C15,8.1 15.9,9 17,9C18.1,9 19,8.1 19,7C19,5.9 18.1,5 17,5M7,10C5.9,10 5,10.9 5,12C5,13.1 5.9,14 7,14C8.1,14 9,13.1 9,12C9,10.9 8.1,10 7,10M7,15C5.9,15 5,15.9 5,17C5,18.1 5.9,19 7,19C8.1,19 9,18.1 9,17C9,15.9 8.1,15 7,15Z' })
  );
};