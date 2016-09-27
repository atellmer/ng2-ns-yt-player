"use strict";
var core_1 = require('@angular/core');
var frame_1 = require('ui/frame');
var search_service_1 = require('./shared/services/search.service');
var data_model_1 = require('./shared/data.model');
var AppComponent = (function () {
    function AppComponent(searchService) {
        this.searchService = searchService;
        this.data = new data_model_1.Data();
    }
    AppComponent.prototype.ngOnInit = function () {
        this.page = frame_1.topmost().currentPage;
        this.page.actionBarHidden = true;
        this.getData('');
    };
    AppComponent.prototype.searchHandler = function (term) {
        this.getData(term);
    };
    AppComponent.prototype.selectedVideo = function (video) {
        this.data.selectedVideo = video;
    };
    AppComponent.prototype.getData = function (term) {
        var _this = this;
        this.searchService.getData(term)
            .subscribe(function (res) {
            _this.data.videos = res;
            _this.data.selectedVideo = _this.data.videos[0];
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-root',
            templateUrl: 'app.component.html',
        }), 
        __metadata('design:paramtypes', [search_service_1.SearchService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map