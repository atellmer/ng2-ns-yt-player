import { platformNativeScriptDynamic } from 'nativescript-angular/platform';
import { registerElement } from 'nativescript-angular/element-registry';

import { AppModule } from './app.module';

import app = require('application');
import fresco = require('nativescript-fresco');


registerElement('FrescoDrawee', () => require('nativescript-fresco').FrescoDrawee);

if (app.android) {
	app.onLaunch = function (intent) {
		fresco.initialize();
	};
}

platformNativeScriptDynamic().bootstrapModule(AppModule);
