YUI.add("aui-surface-base",function(e,t){var n=function(t){return e.one(e.config.doc.getElementById(t))};e.Surface=e.Base.create("surface",e.Base,[],{activeChild:null,defaultChild:null,el:null,initializer:function(){var t=this.get("id");if(!t)throw new Error("Surface element id not specified.");this.el=this.getEl(t),this.activeChild=this.defaultChild=this.addContent(e.Surface.DEFAULT)},addContent:function(t,n){if(!n&&n!=="")return this.getChild(t);e.log("Screen ["+t+"] add content to surface ["+this+"]","info");var r=this.getEl(),i=this.createChild(t);return i.append(n),this.transition(i,null),r&&r.append(i),i},createChild:function(t){return e.Node.create("<div/>").setAttribute("id",this._makeId(t))},getChild:function(e){return n(this._makeId(e))},getEl:function(t){return this.el?this.el:(this.el=n(t||this.get("id")),this.el&&this.el.plug(e.Plugin.ParseContent,{preserveScriptNodes:!0}),this.el)},show:function(e){var t,n,r=this.activeChild,i=this.getChild(e);return i||(i=this.defaultChild),r&&r!==i&&r.remove(),n=this.getEl(),n&&i&&!i.inDoc()&&n.append(i),t=this.transition(r,i),this.activeChild=i,t},remove:function(e){var t=this.getChild(e);t&&t.remove(!0)},toString:function(){return this.get("id")},transition:function(t,n){return e.CancellablePromise.resolve(this.get("transition").call(this,t,n))},_makeId:function(e){return this.get("id")+"-"+e}},{ATTRS:{transition:{validator:e.Lang.isFunction,valueFn:function(){return e.Surface.TRANSITION}},id:{validator:e.Lang.isString,writeOnce:!0}},DEFAULT:"default",TRANSITION:function(e,t){return e&&e.hide(),t&&t.show(),null}})},"3.1.0-deprecated.77",{requires:["base-build","node-style","timers","aui-debounce","aui-promise","aui-parse-content"]});
