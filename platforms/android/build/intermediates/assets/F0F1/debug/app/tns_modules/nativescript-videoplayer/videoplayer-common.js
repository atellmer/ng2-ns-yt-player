"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var dependencyObservable = require("ui/core/dependency-observable");
var view = require("ui/core/view");
var proxy = require("ui/core/proxy");
var videoSource = require("./video-source/video-source");
var platform = require("platform");
var utils = require("utils/utils");
var types = require("utils/types");
var SRC = "src";
var VIDEO_SOURCE = "videoSource";
var VIDEO = "Video";
var ISLOADING = "isLoading";
var AUTOPLAY = "autoplay";
var CONTROLS = "controls";
var LOOP = "loop";
var MUTED = "muted";
var AffectsLayout = platform.device.os === platform.platformNames.android ? dependencyObservable.PropertyMetadataSettings.None : dependencyObservable.PropertyMetadataSettings.AffectsLayout;
function onSrcPropertyChanged(data) {
    var video = data.object;
    var value = data.newValue;
    if (types.isString(value)) {
        value = value.trim();
        video.videoSource = null;
        video["_url"] = value;
        video._setValue(Video.isLoadingProperty, true);
        if (utils.isFileOrResourcePath(value)) {
            video.videoSource = videoSource.fromFileOrResource(value);
            video._setValue(Video.isLoadingProperty, false);
        }
        else {
            if (video["_url"] === value) {
                video.videoSource = videoSource.fromUrl(value);
                video._setValue(Video.isLoadingProperty, false);
            }
        }
    }
    else if (value instanceof videoSource.VideoSource) {
        video.videoSource = value;
    }
    else {
        video.videoSource = videoSource.fromNativeSource(value);
    }
}
var Video = (function (_super) {
    __extends(Video, _super);
    function Video(options) {
        _super.call(this, options);
    }
    Object.defineProperty(Video.prototype, "videoSource", {
        get: function () {
            return this._getValue(Video.videoSourceProperty);
        },
        set: function (value) {
            this._setValue(Video.videoSourceProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Video.prototype, "src", {
        get: function () {
            return this._getValue(Video.srcProperty);
        },
        set: function (value) {
            this._setValue(Video.srcProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Video.prototype, "isLoading", {
        get: function () {
            return this._getValue(Video.isLoadingProperty);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Video.prototype, "autoplay", {
        get: function () {
            return this._getValue(Video.autoplayProperty);
        },
        set: function (value) {
            this._setValue(Video.autoplayProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Video.prototype, "controls", {
        get: function () {
            return this._getValue(Video.controlsProperty);
        },
        set: function (value) {
            this._setValue(Video.controlsProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Video.prototype, "loop", {
        get: function () {
            return this._getValue(Video.loopProperty);
        },
        set: function (value) {
            this._setValue(Video.loopProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Video.prototype, "muted", {
        get: function () {
            return this._getValue(Video.mutedProperty);
        },
        set: function (value) {
            this._setValue(Video.mutedProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    Video.prototype._setNativeVideo = function (nativeVideo) {
    };
    Video.prototype.finishedCallback = function () { };
    Video.prototype.loadingCompleteEventCallback = function () { };
    Video.finishedEvent = "finished";
    Video.loadingCompleteEvent = "loadingComplete";
    Video.srcProperty = new dependencyObservable.Property(SRC, VIDEO, new proxy.PropertyMetadata(undefined, dependencyObservable.PropertyMetadataSettings.None, onSrcPropertyChanged));
    Video.videoSourceProperty = new dependencyObservable.Property(VIDEO_SOURCE, VIDEO, new proxy.PropertyMetadata(undefined, dependencyObservable.PropertyMetadataSettings.None));
    Video.isLoadingProperty = new dependencyObservable.Property(ISLOADING, VIDEO, new proxy.PropertyMetadata(false, dependencyObservable.PropertyMetadataSettings.None));
    Video.autoplayProperty = new dependencyObservable.Property(AUTOPLAY, VIDEO, new proxy.PropertyMetadata(false, dependencyObservable.PropertyMetadataSettings.None));
    Video.controlsProperty = new dependencyObservable.Property(CONTROLS, VIDEO, new proxy.PropertyMetadata(false, dependencyObservable.PropertyMetadataSettings.None));
    Video.loopProperty = new dependencyObservable.Property(LOOP, VIDEO, new proxy.PropertyMetadata(false, dependencyObservable.PropertyMetadataSettings.None));
    Video.mutedProperty = new dependencyObservable.Property(MUTED, VIDEO, new proxy.PropertyMetadata(false, dependencyObservable.PropertyMetadataSettings.None));
    return Video;
}(view.View));
exports.Video = Video;
//# sourceMappingURL=videoplayer-common.js.map