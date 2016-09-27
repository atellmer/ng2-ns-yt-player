import { platformNativeScriptDynamic } from 'nativescript-angular/platform';
import { registerElement } from 'nativescript-angular/element-registry';

import { AppModule } from './app.module';

import application = require('application');
import fresco = require('nativescript-fresco');


registerElement('FrescoDrawee', () => require('nativescript-fresco').FrescoDrawee);

if (application.android) {
	application.onLaunch = function (intent) {
		fresco.initialize();
	};
}

platformNativeScriptDynamic().bootstrapModule(AppModule);
