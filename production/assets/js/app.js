(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _burgerMenu = _interopRequireDefault(require("./components/burger-menu"));

var _select = _interopRequireDefault(require("./components/select"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.
//import Accordion from './components/accordion';
(function ($) {
  // When DOM is ready
  $(function () {
    //const accordions = new Accordion();
    _burgerMenu["default"].init();

    (0, _select["default"])();
  });
})(jQuery);

},{"./components/burger-menu":2,"./components/select":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var BURGER = document.querySelector('.js-burger-open');
var NAV = document.querySelector('.js-burger');
var BODY = document.querySelector('body');
var CLASS_OVERFLOW = 'overflow';
var CLASS_ACTIVE = 'active';

var burgerMenu = function () {
  var burgeInit = function burgeInit() {
    if (!BURGER) return;
    BURGER.addEventListener('click', function (e) {
      if (!e.currentTarget.classList.contains('active')) {
        openBurger();
      } else {
        closeBurger();
      }
    });
  };

  var openBurger = function openBurger() {
    BURGER.classList.add(CLASS_ACTIVE);
    NAV.classList.add(CLASS_ACTIVE);
    BODY.classList.add(CLASS_OVERFLOW);
  };

  var closeBurger = function closeBurger() {
    BURGER.classList.remove(CLASS_ACTIVE);
    NAV.classList.remove(CLASS_ACTIVE);
    BODY.classList.remove(CLASS_OVERFLOW);
  };

  var init = function init() {
    burgeInit();
  };

  return {
    init: init,
    closeBurger: closeBurger
  };
}();

var _default = burgerMenu;
exports["default"] = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var SELECT_SELECTOR = '.js-select';
var BTN_SELECTOR = '.js-select-btn';
var LIST_SELECTOR = '.js-select-list';
var OPTION_SELECTOR = '.js-select-option';
var CLASS_ACTIVE = 'active';
var SELECTS = document.querySelectorAll('.js-select');

var initSelects = function initSelects() {
  if (!SELECTS.length) return;

  function closeAllSelect() {
    var btnList = document.querySelectorAll(BTN_SELECTOR);
    var selectList = document.querySelectorAll(LIST_SELECTOR);
    btnList.forEach(function (el) {
      return el.classList.remove(CLASS_ACTIVE);
    });
    selectList.forEach(function (el) {
      return el.classList.remove(CLASS_ACTIVE);
    });
  }

  SELECTS.forEach(function (select) {
    var btn = select.querySelector(BTN_SELECTOR);
    var selectList = select.querySelector(LIST_SELECTOR);
    var optionList = selectList.querySelectorAll(OPTION_SELECTOR);
    btn.addEventListener('click', function (e) {
      var target = e.target.closest(BTN_SELECTOR);

      if (target.classList.contains(CLASS_ACTIVE)) {
        target.classList.remove(CLASS_ACTIVE);
        selectList.classList.remove(CLASS_ACTIVE);
      } else {
        closeAllSelect();
        target.classList.add(CLASS_ACTIVE);
        selectList.classList.add(CLASS_ACTIVE);
      }
    });
    selectList.addEventListener('click', function (e) {
      var target = e.target.closest(OPTION_SELECTOR);

      if (target) {
        var value = target.getAttribute('data-value');
        var content = target.innerHTML;
        optionList.forEach(function (option) {
          return option.classList.remove(CLASS_ACTIVE);
        });
        target.classList.add(CLASS_ACTIVE);
        btn.classList.remove(CLASS_ACTIVE);
        btn.innerHTML = content;
        btn.setAttribute('data-value', value);
        selectList.classList.remove(CLASS_ACTIVE);
      }
    });
  });
  document.addEventListener('click', function (e) {
    var target = e.target;

    if (target && !target.closest(SELECT_SELECTOR)) {
      closeAllSelect();
    }
  });
};

var _default = initSelects;
exports["default"] = _default;

},{}]},{},[1]);
