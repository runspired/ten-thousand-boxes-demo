import Ember from 'ember';

const {
  Component,
  computed,
  getProperties,
  setProperties,
  set,
  run
} = Ember;

let guid = 0;
let MOUSE_MOVE= 0;
function createObject(x, y) {
  return {
    _id: guid++,
    isActive: false,
    x,
    y
  };
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default Component.extend({
  // Public Properties
  width: 550,
  height: 550,

  boxCount: 10000,

  // Ember Component Definition,
  attributeBindings: ['width', 'height'],
  tagName: 'svg',

  _boxes: computed('boxCount', function () {
    const boxCount = this.get('boxCount');

    let result = new Array(boxCount);

    for (let i = 0; i < boxCount; i++) {
      result[i] = createObject(getRandomInt(0, 500), getRandomInt(0, 500));
    }

    return result;
  }),

  trackActiveBox(e) {
    const box = this._activeBox;

    if (box) {
      run.join(() => {
        MOUSE_MOVE++;
        const delta = this._getMouseDelta(e.clientX, e.clientY);

        let { x, y } = getProperties(box, 'x', 'y');
        setProperties(box,
          {
            x: x + delta.dx,
            y: y + delta.dy
          });
      });
    }
  },

  _getMouseDelta(x, y) {
    let lastX = this._lastPositionX !== null ? this._lastPositionX : x;
    let lastY = this._lastPositionY !== null ? this._lastPositionY : y;

    this._lastPositionX = x;
    this._lastPositionY = y;

    return {
      dx: x - lastX,
      dy: y - lastY
    };
  },

  actions: {
    onActivate(box) {
      this._activeBox = box;
      set(box, 'isActive', true);
    },
  },

  didInsertElement() {
    document.body.addEventListener('mouseup', this._cachedDeactivateHandler, true);
    this.element.addEventListener('mousemove', this._cachedTrackHandler, true);
  },

  willDestroyElement() {
    document.body.removeEventListener('mouseup', this._cachedDectivateHandler, true);
    this.element.removeEventListener('mousemove', this._cachedTrackHandler, true);
  },

  init() {
    this._super();
    this._activeBox = null;
    this._lastPositionX = null;
    this._lastPositionY = null;
    this._cachedTrackHandler = (e) => {
      this.trackActiveBox(e);
    };
    this._cachedDeactivateHandler = () => {
      const box = this._activeBox;
      this._lastPositionX = null;
      this._lastPositionY = null;

      if (box) {
        run.join(() => {
          set(box, 'isActive', false);
          this._activeBox = null;
        });
      }
    };
  }
});
