YUI.add("aui-node-base",function(e,t){var n=e.Lang,r=n.isArray,i=n.isFunction,s=n.isObject,o=n.isString,u=n.isUndefined,a=n.isValue,f=e.Array,l=e.Node,c=e.NodeList,h=e.getClassName,p=e.DOM._getRegExp,d=e.config,v=d.doc,m=d.win,g=l.prototype,y=g._hide,b=g._show,w=c.prototype,E=["",""],S=h("hide"),x="none",T="text",N=!1,C={b:"borderBottomWidth",l:"borderLeftWidth",r:"borderRightWidth",t:"borderTopWidth"},k={b:"marginBottom",l:"marginLeft",r:"marginRight",t:"marginTop"},L={b:"paddingBottom",l:"paddingLeft",r:"paddingRight",t:"paddingTop"},A=v.createElement("div");A.style.display="none",A.innerHTML="   <table></table>&nbsp;",A.attachEvent&&A.fireEvent&&(A.attachEvent("onclick",function H(){N=!0,A.detachEvent("onclick",H)}),A.cloneNode(!0).fireEvent("onclick"));var O=!A.getElementsByTagName("tbody").length,M=/^\s+/,_=/\=([^=\x27\x22>\s]+\/)>/g,D=/<([\w:]+)/;A=null;var P=function(e,t,n){var r,i=t?"on":"",s,o;e.setAttribute("unselectable",i);if(!n){r=e.getElementsByTagName("*");for(s=0;o=r[s];s++)o.setAttribute("unselectable",i)}};e.mix(g,{ancestorsByClassName:function(t,n){var r=this,i=[],s=new RegExp("\\b"+t+"\\b"),o=r.getDOM();n||(o=o.parentNode);while(o&&o.nodeType!==9)o.nodeType===1&&s.test(o.className)&&i.push(o),o=o.parentNode;return e.all(i)},attr:function(e,t){var r=this,i;if(!u(t)){var o=r.getDOM();return e in o?r.set(e,t):r.setAttribute(e,t),r}if(s(e)){for(i in e)e.hasOwnProperty(i)&&r.attr(i,e[i]);return r}var a=r.get(e);return n.isValue(a)||(a=r.getAttribute(e)),a},clone:function(){var t;return N?t=function(){var t=this.getDOM(),n;if(t.nodeType!==3){var r=this.outerHTML();r=r.replace(_,'="$1">').replace(M,""),n=l.create(r)}else n=e.one(t.cloneNode());return n}:t=function(){return this.cloneNode(!0)},t}(),center:function(t){var n=this,i=n.get("region"),o,u;if(r(t))o=t[0],u=t[1];else{var a;s(t)&&!e.instanceOf(t,l)?a=t:a=(e.one(t)||e.getBody()).get("region"),o=a.left+a.width/2,u=a.top+a.height/2}n.setXY([o-i.width/2,u-i.height/2])},empty:function(){var e=this;e.all(">*").remove().purge();var t=l.getDOMNode(e);while(t.firstChild)t.removeChild(t.firstChild);return e},getDOM:function(){var e=this;return l.getDOMNode(e)},getBorderWidth:function(e){var t=this;return t._getBoxStyleAsNumber(e,C)},getCenterXY:function(){var e=this,t=e.get("region");return[t.left+t.width/2,t.top+t.height/2]},getMargin:function(e){var t=this;return t._getBoxStyleAsNumber(e,k)},getPadding:function(e){var t=this;return t._getBoxStyleAsNumber(e,L)},guid:function(){var t=this,n=t.get("id");return n||(n=e.stamp(t),t.set("id",n)),n},hover:function(t,n){var r=this,i,o=r._defaultHoverOptions;return s(t,!0)?(i=t,i=e.mix(i,o),t=i.over,n=i.out):i=e.mix({over:t,out:n},o),r._hoverOptions=i,i.overTask=e.debounce(r._hoverOverTaskFn,null,r),i.outTask=e.debounce(r._hoverOutTaskFn,null,r),new e.EventHandle([r.on(i.overEventType,r._hoverOverHandler,r),r.on(i.outEventType,r._hoverOutHandler,r)])},html:function(){var e=arguments,t=e.length;return t?(this.set("innerHTML",e[0]),this):this.get("innerHTML")},outerHTML:function(){var e=this,t=e.getDOM();if("outerHTML"in t)return t.outerHTML;var n=l.create("<div></div>").append(this.clone());try{return n.html()}catch(r){}finally{n=null}},placeAfter:function(e){var t=this;return t._place(e,t.get("nextSibling"))},placeBefore:function(e){var t=this;return t._place(e,t)},prependTo:function(t){var n=this;return e.one(t).prepend(n),n},radioClass:function(e){var t=this,n=t.siblings();if(o(e))n.removeClass(e),t.addClass(e);else if(r(e)){var i=n.getDOM(),s=p("(?:^|\\s+)(?:"+e.join("|")+")(?=\\s+|$)","g"),u,a;for(a=i.length-1;a>=0;a--)u=i[a],u.className=u.className.replace(s,"");t.addClass(e.join(" "))}return t},resetId:function(t){var n=this;return n.attr("id",e.guid(t)),n},selectText:function(e,t){var n=this,r=n.getDOM(),i=n.val().length;t=a(t)?t:i,e=a(e)?e:0;try{if(r.setSelectionRange)r.setSelectionRange(e,t);else if(r.createTextRange){var s=r.createTextRange();s.moveStart("character",e),s.moveEnd("character",t-i),s.select()}else r.select();r!==v.activeElement&&r.focus()}catch(o){}return n},selectable:function(t){var n=this;return n.setStyles({"-webkit-user-select":T,"-khtml-user-select":T,"-moz-user-select":T,"-ms-user-select":T,"-o-user-select":T,"user-select":T}),(e.UA.ie||e.UA.opera)&&P(n._node,!1,t),n},swallowEvent:function(e,t){var n=this,i=function(e){return e.stopPropagation(),t&&(e.preventDefault(),e.halt()),!1};return r(e)?(f.each(e,function(e){n.on(e,i)}),this):(n.on(e,i),n)},text:function(t){var n=this,r=n.getDOM();return u(t)?n._getText(r.childNodes):(t=e.DOM._getDoc(r).createTextNode(t),n.empty().append(t))},toggle:function(){var e=this;return e._toggleView.apply(e,arguments),e},unselectable:function(t){var n=this;return n.setStyles({"-webkit-user-select":x,"-khtml-user-select":x,"-moz-user-select":x,"-ms-user-select":x,"-o-user-select":x,"user-select":x}),(e.UA.ie||e.UA.opera)&&P(n._node,!0,t),n},val:function(e){var t=this;return u(e)?t.get("value"):t.set("value",e)},_getBoxStyleAsNumber:function(e,t){var n=this,r=e.match(/\w/g),i=0,s,o,u;for(u=r.length-1;u>=0;u--)o=r[u],s=0,o&&(s=parseFloat(n.getComputedStyle(t[o])),s=Math.abs(s),i+=s||0);return i},_getText:function(e){var t=this,n=e.length,r,i=[],s;for(s=0;s<n;s++)r=e[s],r&&r.nodeType!==8&&(r.nodeType!==1&&i.push(r.nodeValue),r.childNodes&&i.push(t._getText(r.childNodes)));return i.join("")},_hide:function(){var e=this;return e.addClass(S),y.apply(e,arguments)},_hoverOutHandler:function(e){var t=this,n=t._hoverOptions;n.outTask.delay(n.outDelay,e)},_hoverOverHandler:function(e){var t=this,n=t._hoverOptions;n.overTask.delay(n.overDelay,e)},_hoverOutTaskFn:function(e){var t=this,n=t._hoverOptions;n.overTask.cancel(),n.out.apply(n.context||e.currentTarget,arguments)},_hoverOverTaskFn:function(e){var t=this,n=t._hoverOptions;n.outTask.cancel(),n.over.apply(n.context||e.currentTarget,arguments)},_place:function(e,t){var n=this,r=n.get("parentNode");return r&&(o(e)&&(e=l.create(e)),r.insertBefore(e,t)),n},_show:function(){var e=this;return e
.removeClass(S),b.apply(e,arguments)},_defaultHoverOptions:{overEventType:"mouseenter",outEventType:"mouseleave",overDelay:0,outDelay:0,over:n.emptyFn,out:n.emptyFn}},!0),g.__isHidden=g._isHidden,g._isHidden=function(){var e=this;return g.__isHidden.call(e)||e.hasClass(e._hideClass||S)},e.each(["Height","Width"],function(e,t){var n=t?"lr":"tb",r=e.toLowerCase();g[r]=function(t){var i=this,s=i;if(u(t)){var o=i._node,a;if(o)if(!o.tagName&&o.nodeType===9||o.alert)a=i.get("region")[r];else{a=i.get("offset"+e);if(!a){var f=i.getStyle("display"),l=i.getStyle("position"),c=i.getStyle("visibility");i.setStyles({display:"block !important",position:"absolute !important",visibility:"hidden !important"}),a=i.get("offset"+e),i.setStyles({display:f,position:l,visibility:c})}a&&(a-=i.getPadding(n)+i.getBorderWidth(n))}s=a}else i.setStyle(r,t);return s},g["inner"+e]=function(){var e=this;return e[r]()+e.getPadding(n)},g["outer"+e]=function(t){var r=this,i=r["inner"+e](),s=r.getBorderWidth(n),o=i+s;return t&&(o+=r.getMargin(n)),o}}),O||(e.DOM._ADD_HTML=e.DOM.addHTML,e.DOM.addHTML=function(t,n,r){var i=t.nodeName&&t.nodeName.toLowerCase()||"",s="";u(n)||(o(n)?s=(D.exec(n)||E)[1]:n.nodeType&&n.nodeType===11&&n.childNodes.length?s=n.childNodes[0].nodeName:n.nodeName&&(s=n.nodeName),s=s&&s.toLowerCase());if(i==="table"&&s==="tr"){t=t.getElementsByTagName("tbody")[0]||t.appendChild(t.ownerDocument.createElement("tbody"));var a=(r&&r.nodeName||"").toLowerCase();a==="tbody"&&r.childNodes.length>0&&(r=r.firstChild)}return e.DOM._ADD_HTML(t,n,r)}),c.importMethod(g,["after","appendTo","attr","before","empty","getX","getXY","getY","hover","html","innerHeight","innerWidth","outerHeight","outerHTML","outerWidth","prepend","prependTo","purge","selectText","selectable","setX","setXY","setY","text","toggle","unselectable","val"]),e.mix(w,{all:function(t){var n=this,r=[],i=n._nodes,s=i.length,o,u;for(u=0;u<s;u++)o=e.Selector.query(t,i[u]),o&&o.length&&r.push.apply(r,o);return r=f.unique(r),e.all(r)},first:function(){var e=this;return e.item(0)},getDOM:function(){return c.getDOMNodes(this)},last:function(){var e=this;return e.item(e._nodes.length-1)},one:function(t){var n=this,r=null,i=n._nodes,s=i.length,o;for(o=0;o<s;o++){r=e.Selector.query(t,i[o],!0);if(r){r=e.one(r);break}}return r}}),w.__filter=w.filter,w.filter=function(t,n){var r=this,s;if(i(t)){var o=[];r.each(function(e,r,i){t.call(n||e,e,r,i)&&o.push(e._node)}),s=e.all(o)}else s=w.__filter.call(r,t);return s},e.mix(c,{create:function(t){var n=e.getDoc().invoke("createDocumentFragment");return n.append(t).get("childNodes")}}),e.mix(e,{getBody:function(){var t=this;return t._bodyNode||(t._bodyNode=e.one(v.body)),t._bodyNode},getDoc:function(){var t=this;return t._documentNode||(t._documentNode=e.one(v)),t._documentNode},getWin:function(){var t=this;return t._windowNode||(t._windowNode=e.one(m)),t._windowNode}})},"3.0.3-deprecated.99",{requires:["array-extras","aui-base-lang","aui-classnamemanager","aui-debounce","node"]});
