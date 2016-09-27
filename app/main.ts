import { platformNativeScriptDynamic } from 'nativescript-angular/platform';
import { registerElement } from 'nativescript-angular/element-registry';

import { AppModule } from './app.module';

registerElement('VideoPlayer', () => require('nativescript-videoplayer').Video);
platformNativeScriptDynamic().bootstrapModule(AppModule);