import { ACTIONS } from '../actions/MouseActions';

const defaultState = {
  isCurrentMouseUp: true,
  isPreviousMouseUp: true,
  currentPosition: {
    x: null,
    y: null
  },
  previousPosition: {
    x: null,
    y: null
  }
};

export class MouseReducer {

  static getDefaultState() {
    return defaultState;
  }

  static reduce(state = defaultState, action) {
    switch (action.type) {

      case ACTIONS.MOUSE_MOVE:
        return Object.assign({}, state, {
          previousPosition: state.currentPosition,
          currentPosition: action.position
        });

      case ACTIONS.MOUSE_DOWN:
      case ACTIONS.MOUSE_UP:
        return Object.assign({}, state, {
          isPreviousMouseUp: state.isCurrentMouseUp,
          isCurrentMouseUp: action.isMouseUp
        });

      default:
        return state;
    }
  }

}
