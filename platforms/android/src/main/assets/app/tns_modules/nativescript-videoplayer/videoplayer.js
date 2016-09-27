"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var videoCommon = require("./videoplayer-common");
var fs = require("file-system");
global.moduleMerge(videoCommon, exports);
function onVideoSourcePropertyChanged(data) {
    var video = data.object;
    if (!video.android) {
        return;
    }
    video._setNativeVideo(data.newValue ? data.newValue.android : null);
}
videoCommon.Video.videoSourceProperty.metadata.onSetNativeValue = onVideoSourcePropertyChanged;
var Video = (function (_super) {
    __extends(Video, _super);
    function Video() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(Video.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    Video.prototype._createUI = function () {
        var _this = this;
        var that = new WeakRef(this);
        this._android = new android.widget.VideoView(this._context);
        if (this.controls !== false || this.controls === undefined) {
            var _mMediaController = new android.widget.MediaController(this._context);
            this._android.setMediaController(_mMediaController);
            _mMediaController.setAnchorView(this._android);
        }
        setTimeout(function () {
            if (_this.src) {
                var isUrl = false;
                if (_this.src.indexOf("://") !== -1) {
                    if (_this.src.indexOf('res://') === -1) {
                        isUrl = true;
                    }
                }
                if (!isUrl) {
                    var currentPath = fs.knownFolders.currentApp().path;
                    if (_this.src[1] === '/' && (_this.src[0] === '.' || _this.src[0] === '~')) {
                        _this.src = _this.src.substr(2);
                    }
                    if (_this.src[0] !== '/') {
                        _this.src = currentPath + '/' + _this.src;
                    }
                    _this._android.setVideoURI(android.net.Uri.parse(_this.src));
                }
                else {
                    _this._android.setVideoPath(_this.src);
                }
            }
        });
        this._android.setOnPreparedListener(new android.media.MediaPlayer.OnPreparedListener({
            get owner() {
                return that.get();
            },
            onPrepared: function (mp) {
                if (this.owner.muted === true) {
                    mp.setVolume(0, 0);
                }
                if (this.owner.autoplay === true) {
                    mp.start();
                }
                if (this.owner) {
                    this.owner._emit(videoCommon.Video.loadingCompleteEvent);
                }
            }
        }));
        if (this.finishedCallback) {
            this._android.setOnCompletionListener(new android.media.MediaPlayer.OnCompletionListener({
                get owner() {
                    return that.get();
                },
                onCompletion: function (mp) {
                    if (this.owner) {
                        this.owner._emit(videoCommon.Video.finishedEvent);
                    }
                    if (this.owner.loop === true) {
                        mp.seekTo(5);
                        mp.start();
                    }
                }
            }));
        }
    };
    Video.prototype._setNativeVideo = function (nativeVideo) {
        this.android.src = nativeVideo;
    };
    Video.prototype.setNativeSource = function (nativePlayerSrc) {
        this.src = nativePlayerSrc;
    };
    Video.prototype.play = function () {
        this._android.start();
    };
    Video.prototype.pause = function () {
        if (this._android.canPause()) {
            this._android.pause();
        }
    };
    Video.prototype.mute = function (mute) {
        console.log('no mute for android with this version');
        return;
    };
    Video.prototype.stop = function () {
        this._android.stopPlayback();
    };
    Video.prototype.seekToTime = function (ms) {
        this._android.seekTo(ms);
    };
    Object.defineProperty(Video.prototype, "isPlaying", {
        get: function () {
            return this._android.isPlaying();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Video.prototype, "getDuration", {
        get: function () {
            return this._android.getDuration();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Video.prototype, "getCurrentTime", {
        get: function () {
            if (this._android === null) {
                return false;
            }
            return this._android.getCurrentPosition();
        },
        enumerable: true,
        configurable: true
    });
    Video.prototype.destroy = function () {
        this.src = null;
        this._android.stopPlayback();
        this._android = null;
    };
    return Video;
}(videoCommon.Video));
exports.Video = Video;
//# sourceMappingURL=videoplayer.js.map