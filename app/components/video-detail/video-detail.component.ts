import {
	Component,
	OnInit,
	OnChanges,
	Input
} from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'app-video-detail',
	templateUrl: 'video-detail.component.html',
	styleUrls: ['video-detail.component.css']
})
export class VideoDetailComponent implements OnInit, OnChanges {
	@Input() video: any;

	url: string;

	constructor() {}

	ngOnInit() {}

	ngOnChanges() {
		if (this.video && this.video.hasOwnProperty('id')) {
			this.url = `https://www.youtube.com/embed/${this.video.id.videoId}`;
		}
	}
}
