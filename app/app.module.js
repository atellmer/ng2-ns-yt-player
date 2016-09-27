"use strict";
var core_1 = require('@angular/core');
var platform_1 = require('nativescript-angular/platform');
var http_1 = require('nativescript-angular/http');
var forms_1 = require('nativescript-angular/forms');
var app_component_1 = require('./app.component');
var search_service_1 = require('./shared/services/search.service');
var search_bar_1 = require('./components/search-bar');
var video_detail_1 = require('./components/video-detail');
var video_list_1 = require('./components/video-list');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_1.NativeScriptModule,
                http_1.NativeScriptHttpModule,
                forms_1.NativeScriptFormsModule,
            ],
            providers: [
                search_service_1.SearchService
            ],
            declarations: [
                app_component_1.AppComponent,
                search_bar_1.SearchBarComponent,
                video_detail_1.VideoDetailComponent,
                video_list_1.VideoListComponent,
            ],
            bootstrap: [app_component_1.AppComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map