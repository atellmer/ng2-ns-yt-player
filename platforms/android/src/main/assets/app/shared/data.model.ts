export interface IData {
	videos: Array<any>;
	selectedVideo: any;
}

export class Data implements IData{
	videos: Array<any>;
	selectedVideo: any;

	constructor() {
		this.videos = [];
		this.selectedVideo = '';
	}
}
