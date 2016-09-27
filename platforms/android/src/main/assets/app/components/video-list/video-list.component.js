"use strict";
var core_1 = require('@angular/core');
var app = require('application');
var VideoListComponent = (function () {
    function VideoListComponent() {
        this.selectedVideo = new core_1.EventEmitter();
        this.isAndroid = false;
        this.isIOS = false;
    }
    VideoListComponent.prototype.ngOnInit = function () {
        if (app.android) {
            this.isAndroid = true;
        }
        if (app.ios) {
            this.isIOS = true;
        }
    };
    VideoListComponent.prototype.selectVideo = function (video) {
        this.selectedVideo.emit(video);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], VideoListComponent.prototype, "videos", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], VideoListComponent.prototype, "selectedVideo", void 0);
    VideoListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-video-list',
            templateUrl: 'video-list.component.html',
            styleUrls: ['video-list.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], VideoListComponent);
    return VideoListComponent;
}());
exports.VideoListComponent = VideoListComponent;
//# sourceMappingURL=video-list.component.js.map