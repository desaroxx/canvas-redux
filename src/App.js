import { Events } from './Events';
import { Listeners } from './Listeners';
import { ShapeDrawer } from './ShapeDrawer';
import { Store } from './Store';

const CANVAS = {
  width: 600,
  height: 400,
  backgroundColor: 'gray'
};

class App {

  constructor() {
    const element = document.getElementById('content');
    this.canvas = App.initializeCanvas(element);
    Listeners.attachListeners(this.canvas);
    this.ctx = canvas.getContext('2d');

    this.render();

    Events.subscribe('RENDER_REQUEST', data => this.render(data));
  }

  static initializeCanvas(element) {
    const canvas = document.createElement('canvas');
    canvas.height = CANVAS.height;
    canvas.width = CANVAS.width;
    canvas.id = 'canvas';
    element.appendChild(canvas);
    return canvas;
  }

  render() {
    // attach store to render flow
    const store = Store.provide();

    // consume store to build view
    const { mouse } = store;
    if (!mouse.isCurrentMouseUp) {
      ShapeDrawer.drawLine(this.ctx, mouse.previousPosition, mouse.currentPosition);
    }
  }

  static run() {
    new App();
  }

}

App.run();
