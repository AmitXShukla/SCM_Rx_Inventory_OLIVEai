import { IntroWhisper } from './whispers';
import {
  clipboardListener,
  filesystemExample,
  keyboardListener,
  networkExample,
  searchListener,
  activeWindowListener,
  openHandler,
} from './aptitudes';

(async function main(): Promise<void> {
  console.log('Example Loop Started');
  clipboardListener.listen();
  filesystemExample.run();
  keyboardListener.listen();
  networkExample.run();
  searchListener.listen();
  activeWindowListener.listen();
  openHandler.start();
  new IntroWhisper().show();
})();
