import { Injectable } from '@angular/core';
import {
  Http,
  Response,
  URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { API_KEY } from '../constants';


@Injectable()
export class SearchService {
	constructor(private http: Http) {}

	getData(term: string): Observable<Array<any>> {
		const params: URLSearchParams = new URLSearchParams();
		const URL: string = 'https://www.googleapis.com/youtube/v3/search';

		params.set('key', API_KEY);
		params.set('q', term);
		params.set('part', 'snippet');
		params.set('maxResults', '10');
		params.set('type', 'video');

		const data$ = this.http.get(URL, { search: params })
			.map((res: Response) => res.json().items);

		return data$;
	}
}