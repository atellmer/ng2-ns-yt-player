import {
  Component,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { Observable as rxObservable } from 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'app-search-bar',
  templateUrl: 'search-bar.component.html',
  styleUrls: ['search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
	@Output() search: EventEmitter<any> = new EventEmitter();

	public term: string;

	constructor() {}

	ngOnInit() {}

	onChangeHandler(event) {
		this.search.emit(this.term);
	}
}