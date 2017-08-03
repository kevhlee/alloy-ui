YUI.add("aui-autosize-iframe",function(e,t){var n=e.getClassName,r=n("autosizeiframe","monitored","height"),i=e.Component.create({NAME:"autosizeiframe",NS:"autosizeiframe",EXTENDS:e.Plugin.Base,ATTRS:{height:{value:0},monitorHeight:{value:!0},width:{value:null}},prototype:{initializer:function(e){var t=this,n=t.get("host");t.node=n,t._iframeEl=n.getDOM(),t._defaultHeight=e.height,t.bindUI(),t.syncUI()},bindUI:function(){var e=this;e.after("heightChange",e._afterHeightChange),e.after("widthChange",e._afterWidthChange),e.after("monitorHeightChange",e._afterMonitorHeightChange)},syncUI:function(){var e=this;e._uiSetMonitorHeight(e.get("monitorHeight"))},destructor:function(){var e=this;e._uiSetMonitorHeight(!1)},pauseMonitor:function(){var e=this;e._clearInterval()},restartMonitor:function(){var e=this;e.get("monitorHeight")&&e._setInterval()},_afterHeightChange:function(e){var t=this;t._uiSetHeight(e.newVal)},_afterMonitorHeightChange:function(e){var t=this;t._uiSetMonitorHeight(e.newVal)},_afterWidthChange:function(e){var t=this;t._uiSetWidth(e.newVal)},_clearInterval:function(){var t=this,n=t._iframeDoc;if(n){var r=n.documentElement;r&&(r.style.overflowY="")}t._intervalId&&(e.clearInterval(t._intervalId),t._intervalId=null)},_onResize:function(){var e=this;e._iframeDoc=null;var t=e._iframeHeight,n,r;try{r=e._iframeEl.contentWindow,n=r.document,e._iframeDoc=n}catch(s){}n&&r?(t=i._getContentHeight(r,n,e._iframeHeight),e._uiSetHeight(t)):n||(e._clearInterval(),e._uiSetHeight(e._defaultHeight))},_setInterval:function(){var t=this;t._intervalId||(t._onResize(),t._intervalId=e.setInterval(t._onResize,100,t))},_uiSetHeight:function(e){var t=this;t._iframeHeight!==e&&(t._iframeHeight=e,t.node.setStyle("height",e))},_uiSetMonitorHeight:function(e){var t=this,n=t.node;e?(t._setInterval(),t._loadHandle=n.on("load",t._setInterval,t),n.addClass(r)):(t._clearInterval(),t._loadHandle&&t._loadHandle.detach(),n.removeClass(r))},_uiSetWidth:function(e){var t=this;t.node.setStyle("width",e)},_iframeHeight:0}});e.mix(i,{getContentHeight:function(t){var n=null;try{var r;t.nodeName&&t.nodeName.toLowerCase()==="iframe"?t=t.contentWindow:e.instanceOf(t,e.Node)&&(t=t.getDOM().contentWindow),r=t.document,n=i._getContentHeight(t,r)}catch(s){}return n},_getContentHeight:function(e,t,n){var r=null;if(t&&e.location.href!=="about:blank"){var s=t.documentElement,o=s&&Math.max(s.offsetHeight,s.scrollHeight)||0,u=t.compatMode==="CSS1Compat";u&&o?r=o:r=i._getQuirksHeight(e)||n}return r},_getQuirksHeight:function(e){var t=0,n=e.document,r=n&&n.documentElement,i=n&&n.body,s=0;e.innerHeight?s=e.innerHeight:r&&r.clientHeight?s=r.clientHeight:i&&(s=i.clientHeight);if(n){var o,u,a=i&&i.offsetHeight;r&&(o=r.clientHeight,u=r.scrollHeight,a=r.offsetHeight),o!==a&&i&&(a=i.offsetHeight,u=i.scrollHeight);var f;u>s?f=Math.max:f=Math.min,t=f(u,a)}return t}}),e.Plugin.AutosizeIframe=i},"3.0.3-deprecated.60",{requires:["plugin","aui-component","aui-timer","aui-node-base"]});
