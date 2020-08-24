(function() {
  'use strict';

  // this is an example plugin

  // eslint-disable-next-line no-undef
  Scene_Map = class extends Scene_Map {
    start(...args) {
      super.start(args);
      // instance.show();
    }

    update(...args) {
      super.update(args);
      // instance.update();
    }

    stop(...args) {
      super.stop(args);
      // instance.show();
    }
  };
}());
