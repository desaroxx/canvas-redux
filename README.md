# Demo

![dec-11-2016 19-27-12](https://cloud.githubusercontent.com/assets/1498400/21082245/efa4e290-bfd7-11e6-9e51-1beea408418c.gif)


# What?

Sample architecture to show the *uni-directional data flow* based on [**Redux**](http://redux.js.org/) for a canvas based component.

# How?

### Access the Store

Attach the `store` object to the rendering loop as follows:
```javascript

  render() {
    // attach store to render flow
    const store = Store.provide();

    // consue store to build view
    const { mouse } = store;
    ...

    // loop to call render again and again and again...
    window.requestAnimationFrame(() => this.render());
  }

```

### Dispatch Actions

Dispatch an action as follows:
```javascript

import { MouseActionCreator } from './actionCreators/MouseActionCreator';
import { Store } from './Store';
const { dispatch } = Store;
...

  static _onMouseMoveOnCanvas(e, isOnCanvas) {
    e.stopPropagation();
    const position = { x: e.offsetX, y: e.offsetY };
    dispatch(MouseActionCreator.mouseMove(position)); // <- dispatch action
  }

```

# Run App

**To run:**
```bash
$ npm install
$ npm start
```

Open the following url in your browser [http://localhost:8080](http://localhost:8080).

# Build App
**To build:**
```bash
$ npm install
$ npm run build
```

The build is bundled into `/bundle.js`.

