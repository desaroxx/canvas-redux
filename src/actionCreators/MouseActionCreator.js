import { ACTIONS } from '../actions/MouseActions';

export class MouseActionCreator {

  static mouseMove(position) {
    return {
      type: ACTIONS.MOUSE_MOVE,
      position
    };
  }

  static mouseDown() {
    return {
      type: ACTIONS.MOUSE_DOWN,
      isMouseUp: false
    };
  }

  static mouseUp() {
    return {
      type: ACTIONS.MOUSE_UP,
      isMouseUp: true
    };
  }

}
