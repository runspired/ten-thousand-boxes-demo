import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,
  customEvents: {
    mouseenter: null,
    mouseleave: null,
    mousemove: null,
    mousedown: null,
    mouseup: null,
    focus: null,
    blur: null,
    focusin: null,
    focusout: null,
    click: null,
    dragstart: null,
    drag: null,
    dragenter: null,
    dragleave: null,
    dragover: null,
    dragend: null,
    drop: null
  }
});

loadInitializers(App, config.modulePrefix);

export default App;
