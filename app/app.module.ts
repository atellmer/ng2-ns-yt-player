import { NgModule } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/platform';
import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

import { AppComponent } from './app.component';
import { SearchService } from './shared/services/search.service';
import { SearchBarComponent } from './components/search-bar';
import { VideoDetailComponent } from './components/video-detail';
import { VideoListComponent } from './components/video-list';

@NgModule({
	imports: [
		NativeScriptModule,
		NativeScriptHttpModule,
		NativeScriptFormsModule,
	],
	providers: [
		SearchService
	],
	declarations: [
		AppComponent,
		SearchBarComponent,
		VideoDetailComponent,
		VideoListComponent,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
