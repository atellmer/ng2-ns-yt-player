import {
	Component,
	OnInit
} from '@angular/core';
import { Page } from 'ui/page';
import { topmost } from 'ui/frame';

import { SearchService } from './shared/services/search.service';
import { Data } from './shared/data.model';


@Component({
	moduleId: module.id,
	selector: 'app-root',
	templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
	private page: Page;
	public data: Data;

	constructor(private searchService: SearchService) {
		this.data = new Data();
	}

	ngOnInit() {
		this.page = topmost().currentPage;
		this.page.actionBarHidden = true;
		this.getData('');
	}

	searchHandler(term: string): any {
		this.getData(term);
	}

  selectedVideo(video: any): void {
		this.data.selectedVideo = video;
	}

	getData(term: string): void {
		this.searchService.getData(term)
			.subscribe(res => {
				this.data.videos = res;
				this.data.selectedVideo = this.data.videos[0];
			});
	}
}
