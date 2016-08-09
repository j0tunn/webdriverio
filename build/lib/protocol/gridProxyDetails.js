'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ErrorHandler = require('../utils/ErrorHandler');

var gridProxyDetails = function gridProxyDetails(proxyId) {
    /*!
     * parameter check
     */
    if (typeof proxyId !== 'string') {
        throw new _ErrorHandler.ProtocolError('The gridProxyDetails command needs a proxyId to work with.');
    }

    return this.requestHandler.create({
        path: '/proxy?id=' + proxyId,
        method: 'GET',
        requiresSession: false,
        gridCommand: true
    });
}; /**
    *
    * Get the details of the Selenium Grid node running a session
    *
    * <example>
       :grid.js
       browser.gridProxyDetails(proxyId).then(function(details) {
           console.log(details);
   
           // {
           //     success: true,
           //     msg: "proxy found !",
           //     id: "MacMiniA10",
           //     request: {
           //         ...
           //         configuration: {
           //             ...
           //         },
           //         capabilities: [
           //             {
           //                 ...
           //             }
           //         ]
           //     }
           // }
       })
    * </example>
    *
    * @type grid
    */

exports.default = gridProxyDetails;
module.exports = exports['default'];