"use strict";
var platform_1 = require('nativescript-angular/platform');
var element_registry_1 = require('nativescript-angular/element-registry');
var app_module_1 = require('./app.module');
var app = require('application');
var fresco = require('nativescript-fresco');
element_registry_1.registerElement('FrescoDrawee', function () { return require('nativescript-fresco').FrescoDrawee; });
if (app.android) {
    app.onLaunch = function (intent) {
        fresco.initialize();
    };
}
platform_1.platformNativeScriptDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map