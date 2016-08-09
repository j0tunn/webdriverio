'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _ErrorHandler = require('../utils/ErrorHandler');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getText = function getText(selector) {
    var _this = this;

    return this.elements(selector).then(function (res) {
        /**
         * throw NoSuchElement error if no element was found
         */
        if (!res.value || res.value.length === 0) {
            throw new _ErrorHandler.CommandError(7);
        }

        var elementIdTextCommands = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = (0, _getIterator3.default)(res.value), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var elem = _step.value;

                elementIdTextCommands.push(_this.elementIdText(elem.ELEMENT));
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        return _this.unify(elementIdTextCommands, {
            extractValue: true
        });
    });
}; /**
    *
    * Get the text content from a DOM-element found by given selector. Make sure the element
    * you want to request the text from [is interactable](http://www.w3.org/TR/webdriver/#interactable)
    * otherwise you will get an empty string as return value. If the element is disabled or not
    * visible and you still want to receive the text content use [getHTML](http://webdriver.io/api/property/getHTML.html)
    * as a workaround.
    *
    * <example>
       :index.html
       <div id="elem">
           Lorem ipsum <strong>dolor</strong> sit amet,<br>
           consetetur sadipscing elitr
       </div>
       &nbsp;
       <span style="display: none">I am invisible</span>
   
       :getTextAsync.js
       client.getText('#elem').then(function(text) {
           console.log(text);
           // outputs the following:
           // "Lorem ipsum dolor sit amet,consetetur sadipscing elitr"
       })
       .getText('span').then(function(text) {
           console.log(text);
           // outputs "" (empty string) since element is not interactable
       });
    * </example>
    *
    * @alias browser.getText
    * @param   {String}           selector   element with requested text
    * @returns {String|String[]}             content of selected element (all HTML tags are removed)
    * @uses protocol/elements, protocol/elementIdText
    * @type property
    *
    */

exports.default = getText;
module.exports = exports['default'];
