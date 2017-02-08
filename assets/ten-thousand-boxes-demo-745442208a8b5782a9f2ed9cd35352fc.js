"use strict";define("ten-thousand-boxes-demo/app",["exports","ember","ten-thousand-boxes-demo/resolver","ember-load-initializers","ten-thousand-boxes-demo/config/environment"],function(e,t,n,o,a){var i=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,i=t.default.Application.extend({modulePrefix:a.default.modulePrefix,podModulePrefix:a.default.podModulePrefix,Resolver:n.default,customEvents:{mouseenter:null,mouseleave:null,mousemove:null,mousedown:null,mouseup:null,focus:null,blur:null,focusin:null,focusout:null,click:null,dragstart:null,drag:null,dragenter:null,dragleave:null,dragover:null,dragend:null,drop:null}}),(0,o.default)(i,a.default.modulePrefix),e.default=i}),define("ten-thousand-boxes-demo/components/box-container",["exports","ember"],function(e,t){function n(e,t){return{_id:u++,isActive:!1,x:e,y:t}}function o(e,t){return Math.floor(Math.random()*(t-e))+e}var a=t.default.Component,i=t.default.computed,l=t.default.getProperties,s=t.default.setProperties,d=t.default.set,r=t.default.run,u=0,c=0;e.default=a.extend({width:550,height:550,boxCount:1e4,attributeBindings:["width","height"],tagName:"svg",_boxes:i("boxCount",function(){for(var e=this.get("boxCount"),t=new Array(e),a=0;a<e;a++)t[a]=n(o(0,500),o(0,500));return t}),trackActiveBox:function(e){var t=this,n=this._activeBox;n&&r.join(function(){c++;var o=t._getMouseDelta(e.clientX,e.clientY),a=l(n,"x","y"),i=a.x,d=a.y;s(n,{x:i+o.dx,y:d+o.dy})})},_getMouseDelta:function(e,t){var n=null!==this._lastPositionX?this._lastPositionX:e,o=null!==this._lastPositionY?this._lastPositionY:t;return this._lastPositionX=e,this._lastPositionY=t,{dx:e-n,dy:t-o}},actions:{onActivate:function(e){this._activeBox=e,d(e,"isActive",!0)}},didInsertElement:function(){document.body.addEventListener("mouseup",this._cachedDeactivateHandler,!0),this.element.addEventListener("mousemove",this._cachedTrackHandler,!0)},willDestroyElement:function(){document.body.removeEventListener("mouseup",this._cachedDectivateHandler,!0),this.element.removeEventListener("mousemove",this._cachedTrackHandler,!0)},init:function(){var e=this;this._super(),this._activeBox=null,this._lastPositionX=null,this._lastPositionY=null,this._cachedTrackHandler=function(t){e.trackActiveBox(t)},this._cachedDeactivateHandler=function(){var t=e._activeBox;e._lastPositionX=null,e._lastPositionY=null,t&&r.join(function(){d(t,"isActive",!1),e._activeBox=null})}}})}),define("ten-thousand-boxes-demo/components/box-element",["exports","ember"],function(e,t){var n=t.default.Component,o=(t.default.computed,t.default.run);e.default=n.extend({activateBox:null,box:null,width:20,height:20,tagName:"g",didInsertElement:function(){this.element.addEventListener("mousedown",this._cachedActivateHandler,!0)},willDestroyElement:function(){this.element.removeEventListener("mousedown",this._cachedActivateHandler,!0)},init:function(){var e=this;this._super(),this._cachedActivateHandler=function(t){o.join(function(){e.sendAction("activateBox",t)})}}})}),define("ten-thousand-boxes-demo/helpers/app-version",["exports","ember","ten-thousand-boxes-demo/config/environment"],function(e,t,n){function o(){return a}e.appVersion=o;var a=n.default.APP.version;e.default=t.default.Helper.helper(o)}),define("ten-thousand-boxes-demo/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","ten-thousand-boxes-demo/config/environment"],function(e,t,n){var o=n.default.APP,a=o.name,i=o.version;e.default={name:"App Version",initialize:(0,t.default)(a,i)}}),define("ten-thousand-boxes-demo/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("ten-thousand-boxes-demo/initializers/export-application-global",["exports","ember","ten-thousand-boxes-demo/config/environment"],function(e,t,n){function o(){var e=arguments[1]||arguments[0];if(n.default.exportApplicationGlobal!==!1){var o;if("undefined"!=typeof window)o=window;else if("undefined"!=typeof global)o=global;else{if("undefined"==typeof self)return;o=self}var a,i=n.default.exportApplicationGlobal;a="string"==typeof i?i:t.default.String.classify(n.default.modulePrefix),o[a]||(o[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete o[a]}}))}}e.initialize=o,e.default={name:"export-application-global",initialize:o}}),define("ten-thousand-boxes-demo/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("ten-thousand-boxes-demo/router",["exports","ember","ten-thousand-boxes-demo/config/environment"],function(e,t,n){var o=t.default.Router.extend({location:n.default.locationType,rootURL:n.default.rootURL});o.map(function(){}),e.default=o}),define("ten-thousand-boxes-demo/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"r+v9fJsw",block:'{"statements":[["append",["unknown",["box-container"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"ten-thousand-boxes-demo/templates/application.hbs"}})}),define("ten-thousand-boxes-demo/templates/components/box-container",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"VpmzxEuO",block:'{"statements":[["block",["each"],[["get",["_boxes"]]],[["key"],["_id"]],0]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","  "],["append",["helper",["box-element"],null,[["box","activateBox"],[["get",["box"]],["helper",["action"],[["get",[null]],"onActivate",["get",["box"]]],null]]]],false],["text","\\n"]],"locals":["box"]}],"hasPartials":false}',meta:{moduleName:"ten-thousand-boxes-demo/templates/components/box-container.hbs"}})}),define("ten-thousand-boxes-demo/templates/components/box-element",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"JrYJPueu",block:'{"statements":[["open-element","rect",[]],["dynamic-attr","height",["unknown",["height"]],null],["static-attr","stroke","black"],["static-attr","strokeWidth","1"],["dynamic-attr","width",["unknown",["width"]],null],["dynamic-attr","x",["unknown",["box","x"]],null],["dynamic-attr","y",["unknown",["box","y"]],null],["dynamic-attr","fill",["concat",[["helper",["if"],[["get",["box","isActive"]],"red","transparent"],null]]]],["flush-element"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"ten-thousand-boxes-demo/templates/components/box-element.hbs"}})}),define("ten-thousand-boxes-demo/config/environment",["ember"],function(e){var t="ten-thousand-boxes-demo";try{var n=t+"/config/environment",o=document.querySelector('meta[name="'+n+'"]').getAttribute("content"),a=JSON.parse(unescape(o)),i={default:a};return Object.defineProperty(i,"__esModule",{value:!0}),i}catch(e){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("ten-thousand-boxes-demo/app").default.create({name:"ten-thousand-boxes-demo",version:"0.0.0+093b42dc"});