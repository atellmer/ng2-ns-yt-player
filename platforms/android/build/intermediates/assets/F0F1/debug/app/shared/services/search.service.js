"use strict";
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var constants_1 = require('../constants');
var SearchService = (function () {
    function SearchService(http) {
        this.http = http;
    }
    SearchService.prototype.getData = function (term) {
        var params = new http_1.URLSearchParams();
        var URL = 'https://www.googleapis.com/youtube/v3/search';
        params.set('key', constants_1.API_KEY);
        params.set('q', term);
        params.set('part', 'snippet');
        params.set('maxResults', '50');
        params.set('type', 'video');
        var data$ = this.http.get(URL, { search: params })
            .map(function (res) { return res.json().items; });
        return data$;
    };
    SearchService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SearchService);
    return SearchService;
}());
exports.SearchService = SearchService;
//# sourceMappingURL=search.service.js.map