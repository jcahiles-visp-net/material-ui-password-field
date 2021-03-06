'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _visibility = require('material-ui/svg-icons/action/visibility');

var _visibility2 = _interopRequireDefault(_visibility);

var _visibilityOff = require('material-ui/svg-icons/action/visibility-off');

var _visibilityOff2 = _interopRequireDefault(_visibilityOff);

var _transitions = require('material-ui/styles/transitions');

var _transitions2 = _interopRequireDefault(_transitions);

var _colorManipulator = require('material-ui/utils/colorManipulator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Notice: Some code was adapted from Material-UI's TextField component.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *         Copyright (c) 2014 Call-Em-All (https://github.com/callemall/material-ui)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var getStyles = function getStyles(props, context, state) {
  var _context$muiTheme$tex = context.muiTheme.textField,
      disabledTextColor = _context$muiTheme$tex.disabledTextColor,
      errorColor = _context$muiTheme$tex.errorColor;


  var styles = {
    root: {
      position: 'relative',
      display: props.fullWidth ? 'block' : 'inline-block'
    },
    input: {
      paddingRight: 59,
      boxSizing: 'border-box'
    },
    hint: {
      position: 'relative',
      bottom: 2,
      fontSize: 12,
      lineHeight: '12px',
      color: props.errorText ? errorColor : (0, _colorManipulator.fade)(disabledTextColor, 0.5),
      transition: _transitions2.default.easeOut()
    },
    error: {
      color: errorColor
    },
    visibilityButton: {
      marginTop: props.floatingLabelText ? 22 : -2,
      marginLeft: 8,
      width: 48,
      height: 48,
      padding: 12,
      position: 'absolute',
      top: 0,
      right: 0
    },
    visibilityIcon: {
      opacity: !props.disabled && state.focused ? 0.54 : 0.38,
      width: 24,
      height: 24
    }
  };

  return styles;
};

var PasswordField = function (_React$Component) {
  _inherits(PasswordField, _React$Component);

  function PasswordField(props) {
    _classCallCheck(this, PasswordField);

    var _this = _possibleConstructorReturn(this, (PasswordField.__proto__ || Object.getPrototypeOf(PasswordField)).call(this, props));

    _this.state = {
      focused: false,
      visible: props.visible
    };
    return _this;
  }

  _createClass(PasswordField, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.visible !== this.props.visible) {
        this.setState({
          visible: nextProps.visible
        });
      }
    }

    /**
     * Toogles the visibility the password.
     * @public
     */

  }, {
    key: 'toggleVisibility',
    value: function toggleVisibility() {
      this.setState({
        visible: !this.state.visible
      });
    }
  }, {
    key: 'handleInputFocus',
    value: function handleInputFocus(event) {
      this.setState({ focused: true });
      if (this.props.onFocus) {
        this.props.onFocus(event);
      }
    }
  }, {
    key: 'handleInputBlur',
    value: function handleInputBlur(event) {
      this.setState({ focused: false });
      if (this.props.onBlur) {
        this.props.onBlur(event);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          disableButton = _props.disableButton,
          errorText = _props.errorText,
          errorStyle = _props.errorStyle,
          hintText = _props.hintText,
          _props$style = _props.style;
      _props$style = _props$style === undefined ? {} : _props$style;

      var _props$style$width = _props$style.width,
          width = _props$style$width === undefined ? this.props.fullWidth ? '100%' : 'inherit' : _props$style$width,
          otherStyle = _objectWithoutProperties(_props$style, ['width']),
          textFieldStyle = _props.textFieldStyle,
          type = _props.type,
          visibilityButtonStyle = _props.visibilityButtonStyle,
          visibilityIconStyle = _props.visibilityIconStyle,
          visibleProp = _props.visible,
          other = _objectWithoutProperties(_props, ['disableButton', 'errorText', 'errorStyle', 'hintText', 'style', 'textFieldStyle', 'type', 'visibilityButtonStyle', 'visibilityIconStyle', 'visible']);

      var visible = this.state.visible;


      var styles = getStyles(this.props, this.context, this.state);

      var prepareStyles = this.context.muiTheme.prepareStyles;

      var actualErrorText = !errorText || errorText.trim().length === 0 ? hintText : errorText;
      return _react2.default.createElement(
        'div',
        { style: _extends({}, styles.root, otherStyle) },
        _react2.default.createElement(_TextField2.default, _extends({}, other, {
          errorStyle: _extends({}, styles.error, errorStyle),
          errorText: errorText,
          hintText: null,
          style: _extends({}, styles.input, { width: width }, textFieldStyle),
          type: visible ? 'text' : 'password',
          onFocus: function onFocus(event) {
            return _this2.handleInputFocus(event);
          },
          onBlur: function onBlur(event) {
            return _this2.handleInputBlur(event);
          }
        })),
        hintText && (!errorText || errorText.trim().length === 0) ? _react2.default.createElement(
          'div',
          { style: prepareStyles(styles.hint) },
          actualErrorText
        ) : null,
        _react2.default.createElement(
          _IconButton2.default,
          {
            onTouchTap: function onTouchTap() {
              return _this2.toggleVisibility();
            },
            onMouseDown: function onMouseDown(e) {
              return e.preventDefault();
            },
            iconStyle: _extends({}, styles.visibilityIcon, visibilityIconStyle),
            style: _extends({}, styles.visibilityButton, visibilityButtonStyle),
            disabled: disableButton || other.disabled,
            tabIndex: -1
          },
          visible ? _react2.default.createElement(_visibility2.default, null) : _react2.default.createElement(_visibilityOff2.default, null)
        )
      );
    }
  }]);

  return PasswordField;
}(_react2.default.Component);

PasswordField.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};

PasswordField.defaultProps = {
  disableButton: false,
  visible: false
};

if (process.env.NODE_ENV !== 'production') {
  PasswordField.propTypes = _extends({}, _TextField2.default.propTypes, {
    /**
     * Set this to `true` to disable the visibility button.
     */
    disableButton: _propTypes2.default.bool,
    /**
     * Set this to `true` to make the password _initially_ visible. Use `toggleVisibility()` to change it later.
     */
    visible: _propTypes2.default.bool,
    /**
     * Override the inline-styles of the root element.
     */
    style: _propTypes2.default.object,
    /**
     * Override the inline-styles of the [TextField](http://www.material-ui.com/v0.18.6/#/components/text-field) element.
     */
    textFieldStyle: _propTypes2.default.object,
    /**
     * Override the inline-styles of the [IconButton](http://www.material-ui.com/v0.18.6/#/components/icon-button) element.
     */
    visibilityButtonStyle: _propTypes2.default.object,
    /**
     * Override the inline-styles of the [SvgIcon](http://www.material-ui.com/v0.18.6/#/components/svg-icon) element used for the visibility icon.
     */
    visibilityIconStyle: _propTypes2.default.object
  });
  delete PasswordField.propTypes.multiLine;
  delete PasswordField.propTypes.type;
}

exports.default = PasswordField;