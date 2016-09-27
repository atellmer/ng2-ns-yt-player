import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { isAndroid, isIOS } from 'platform';

@Component({
	moduleId: module.id,
	selector: 'app-video-list',
	templateUrl: 'video-list.component.html',
	styleUrls: ['video-list.component.css']
})
export class VideoListComponent implements OnInit {
	@Input() videos: Array<any>;
	@Output() selectedVideo: EventEmitter<any> = new EventEmitter();

	constructor() {}

	ngOnInit() {}

	selectVideo(video: any): void {
		this.selectedVideo.emit(video);
	}
}
