import Ember from 'ember';

const {
  Component,
  computed,
  run
} = Ember;

export default Component.extend({
  // Public Events
  activateBox: null,

  // Public Properties
  box: null,

  width: 20,
  height: 20,

  // Ember Component Definition,
  tagName: 'g',

  didInsertElement() {
    this.element.addEventListener('mousedown', this._cachedActivateHandler, true);
  },

  willDestroyElement() {
    this.element.removeEventListener('mousedown', this._cachedActivateHandler, true);
  },

  init() {
    this._super();
    this._cachedActivateHandler = (e) => {
      run.join(() => {
        this.sendAction('activateBox', e);
      });
    };
  }
});
