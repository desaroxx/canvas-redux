import { MouseActionCreator } from './actionCreators/MouseActionCreator';
import { Store } from './Store';

const { dispatch } = Store;

export class Listeners {

  static attachListeners(canvas) {
    Listeners._attachMouseListeners(canvas);
  }

  static _attachMouseListeners(canvas) {
    canvas.onmousemove = Listeners._onMouseMoveOnCanvas;
    window.onmousemove = Listeners._onMouseMoveOnWindow;
    window.onmousedown = Listeners._onMouseDown;
    window.onmouseup = Listeners._onMouseUp;
  }

  static _onMouseMoveOnCanvas(e, isOnCanvas) {
    e.stopPropagation();
    const position = { x: e.offsetX, y: e.offsetY };
    dispatch(MouseActionCreator.mouseMove(position));
  }

  static _onMouseMoveOnWindow(e, isOnCanvas) {
    const position = { x: null, y: null };
    dispatch(MouseActionCreator.mouseMove(position));
  }

  static _onMouseDown(e) {
    dispatch(MouseActionCreator.mouseDown());
  }

  static _onMouseUp(e) {
    dispatch(MouseActionCreator.mouseUp());
  }

}
