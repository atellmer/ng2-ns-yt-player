"use strict";
var core_1 = require('@angular/core');
var SearchBarComponent = (function () {
    function SearchBarComponent() {
        this.search = new core_1.EventEmitter();
    }
    SearchBarComponent.prototype.ngOnInit = function () { };
    SearchBarComponent.prototype.onChangeHandler = function (event) {
        this.search.emit(this.term);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SearchBarComponent.prototype, "search", void 0);
    SearchBarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-search-bar',
            templateUrl: 'search-bar.component.html',
            styleUrls: ['search-bar.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], SearchBarComponent);
    return SearchBarComponent;
}());
exports.SearchBarComponent = SearchBarComponent;
//# sourceMappingURL=search-bar.component.js.map