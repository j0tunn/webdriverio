'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ErrorHandler = require('../utils/ErrorHandler');

var startActivity = function startActivity(appPackage, appActivity) {
    if (typeof appPackage !== 'string' || typeof appActivity !== 'string') {
        throw new _ErrorHandler.ProtocolError('startActivity command requires two parameter (appPackage, appActivity) from type string');
    }

    return this.requestHandler.create('/session/:sessionId/appium/device/start_activity', { appPackage: appPackage, appActivity: appActivity });
}; /**
    *
    * Start an arbitrary Android activity during a session.
    *
    * <example>
       :startActivitySync.js
       browser.startActivity({
           appPackage: 'io.appium.android.apis',
           appActivity: '.view.DragAndDropDemo'
       });
    * </example>
    *
    * @type mobile
    * @for android
    *
    */

exports.default = startActivity;
module.exports = exports['default'];
