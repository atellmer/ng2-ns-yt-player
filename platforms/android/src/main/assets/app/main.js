"use strict";
var platform_1 = require('nativescript-angular/platform');
var element_registry_1 = require('nativescript-angular/element-registry');
var app_module_1 = require('./app.module');
element_registry_1.registerElement('VideoPlayer', function () { return require('nativescript-videoplayer').Video; });
platform_1.platformNativeScriptDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map