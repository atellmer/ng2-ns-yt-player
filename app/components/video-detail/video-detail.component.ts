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

	constructor() {
		this.url = 'http://redirector.googlevideo.com/videoplayback?gcr=us&mt=1474986016&mv=m&id=o-ABqmwsWr9luM2oY1fQeG4f3QjuJCNQcwB-r53PN9422P&ms=au&expire=1475008915&ip=159.253.144.86&mime=video%2Fmp4&source=youtube&mm=31&mn=sn-p5qlsn7y&pl=24&itag=18&key=yt6&upn=LK5wzqGIa5c&ipbits=0&ratebypass=yes&nh=IgpwcjAzLmlhZDA3KgkxMjcuMC4wLjE&initcwndbps=3532500&dur=244.181&ei=M4XqV4zhB5P7cdHCp-AK&sparams=dur%2Cei%2Cgcr%2Cid%2Cinitcwndbps%2Cip%2Cipbits%2Citag%2Clmt%2Cmime%2Cmm%2Cmn%2Cms%2Cmv%2Cnh%2Cpl%2Cratebypass%2Csource%2Cupn%2Cexpire&lmt=1458207078482579&signature=39ADB7FDAFA99B465516837DF80E40B77C0A8C22.8CDDFC98909E59C6B5DBB25D17D833C80BD460D2&title=%5BOfficial+Video%5D+Mary%2C+Did+You+Know%3F+-+Pentatonix';
	}

	ngOnInit() {}

	ngOnChanges() {
		if (this.video && this.video.hasOwnProperty('id')) {
			this.url = `https://www.youtube.com/embed/${this.video.id.videoId}`;
			console.log('this.url: ', this.url);
		}
	}
}