"use strict";
var core_1 = require('@angular/core');
var VideoDetailComponent = (function () {
    function VideoDetailComponent() {
    }
    VideoDetailComponent.prototype.ngOnInit = function () { };
    VideoDetailComponent.prototype.ngOnChanges = function () {
        if (this.video && this.video.hasOwnProperty('id')) {
            this.url = "https://www.youtube.com/embed/" + this.video.id.videoId;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], VideoDetailComponent.prototype, "video", void 0);
    VideoDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-video-detail',
            templateUrl: 'video-detail.component.html',
            styleUrls: ['video-detail.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], VideoDetailComponent);
    return VideoDetailComponent;
}());
exports.VideoDetailComponent = VideoDetailComponent;
//# sourceMappingURL=video-detail.component.js.map