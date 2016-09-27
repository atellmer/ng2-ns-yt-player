import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import app = require('application');

@Component({
	moduleId: module.id,
	selector: 'app-video-list',
	templateUrl: 'video-list.component.html',
	styleUrls: ['video-list.component.css']
})
export class VideoListComponent implements OnInit {
	@Input() videos: Array<any>;
	@Output() selectedVideo: EventEmitter<any> = new EventEmitter();

	private isAndroid: boolean = false;
	private isIOS: boolean = false;

	constructor() {}

	ngOnInit() {
		if (app.android) {
			this.isAndroid = true;
		}
		if (app.ios) {
			this.isIOS = true;
		}
	}

	selectVideo(video: any): void {
		this.selectedVideo.emit(video);
	}
}
