const subscriptions = {};

export class Events {

  static subscribe(eventName, callback) {
    if (!(eventName in subscriptions)) {
      subscriptions[eventName] = [];
    }

    subscriptions[eventName].push(callback);
  }

  static emit(eventName, data = undefined) {
    if (!eventName in subscriptions) {
      return;
    }

    const callbacks = subscriptions[eventName];
    callbacks.forEach(callback => callback(data));
  }

}
