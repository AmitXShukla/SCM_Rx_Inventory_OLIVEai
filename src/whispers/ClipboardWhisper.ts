import { whisper } from '@oliveai/ldk';

interface Props {
  clipboardText: string;
}
export default class ClipboardWhisper {
  whisper: whisper.Whisper;

  label: string;

  props: Props;

  constructor(clipboardText: string) {
    this.whisper = undefined;
    this.label = 'Clipboard Aptitude Fired';
    this.props = {
      clipboardText,
    };
  }

  createComponents() {
    const message: whisper.Message = {
      type: whisper.WhisperComponentType.Message,
      body: this.props.clipboardText,
    };

    return [message];
  }

  show() {
    whisper
      .create({
        components: this.createComponents(),
        label: this.label,
        onClose: ClipboardWhisper.onClose,
      })
      .then((newWhisper) => {
        this.whisper = newWhisper;
      });
  }

  close() {
    this.whisper.close(ClipboardWhisper.onClose);
  }

  static onClose(err?: Error) {
    if (err) {
      console.error('There was an error closing Clipboard whisper', err);
    }
    console.log('Clipboard whisper closed');
  }
}
