import { MouseReducer } from './reducers/MouseReducer';

const store = {
  mouse: MouseReducer.getDefaultState()
};

export class Store {

  static provide() {
    return store;
  }

  static dispatch(action) {
    store.mouse = MouseReducer.reduce(store.mouse, action);
  }

}
