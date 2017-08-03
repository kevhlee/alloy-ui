YUI.add("aui-textboxlist-deprecated",function(e,t){var n=e.Lang,r=e.getClassName,i="textboxlistentry",t="textboxlist",s="boundingBox",o="contentBox",u={from:{opacity:1},to:{opacity:.3},duration:.1,on:{end:function(e){var t=this,n=t.get("reverse");n||t.run(),t.set("reverse",!n)}}},a=r("helper","clearfix"),f=r(i,"remove"),l=r(i,"holder"),c=r(i,"item"),h=r(i,"text"),p=r("icon"),d=r("icon","remove"),v=r(i,"remove","hover"),m=r(t,"input","container"),g="BACKSPACE",y="ENTER",b="LEFT",w="RIGHT",E='<ul class="'+[a,l,"unstyled"].join(" ")+'"></ul>',S='<span class="'+f+'"><i class="'+[p,d].join(" ")+'"></i></span>',x='<span class="'+h+'"></span>',T='<li class="'+m+'"></li>',N=e.Component.create({NAME:t,ATTRS:{allowAnyEntry:{value:!1},delimChar:{value:""},tabIndex:{value:0}},EXTENDS:e.AutoCompleteDeprecated,prototype:{initializer:function(t){var n=this,r=n.get("matchKey");n.entries=new e.DataSet({getKey:function(e){var t=this;return e[r]}}),n._lastSelectedEntry=-1},renderUI:function(){var e=this;e._renderEntryHolder(),N.superclass.renderUI.apply(e,arguments),e._overlayAlign.node=e.get(s)},bindUI:function(){var t=this;N.superclass.bindUI.apply(t,arguments),t.after("itemSelect",t._afterItemSelect),t.after("focusedChange",t._afterTBLFocusedChange),t.on("click",t._onBoundingBoxClick);var n=t.entries,r=t.entryHolder,i="."+d;n.after("add",t._updateEntryHolder,t),n.after("replace",t._updateEntryHolder,t),n.after("remove",t._updateEntryHolder,t),r.delegate("click",e.bind(t._removeItem,t),i),r.delegate("mouseenter",e.bind(t._onCloseIconMouseOver,t),i),r.delegate("mouseleave",e.bind(t._onCloseIconMouseOut,t),i),e.on("key",t._onTBLKeypress,t.get(s),"down:39,40,37,38,8,13",t),t.inputNode.on("focus",t._onInputNodeFocus,t),t.inputField.after("focusedChange",function(e){t._set("focused",e.newVal,{src:"inputfield"})})},add:function(e){var t=this,n=t._prepareEntry(e);t.entries.add(n)},addEntries:function(e){var e=this,t=e.inputNode;e.entries.add(t.val(),{})},insert:function(e,t){var n=this,r=n._prepareEntry(t);return n.entries.insert(e,r)},remove:function(e){var t=this;return t.entries.removeKey(e)},_afterItemSelect:function(e){var t=this;t.entries.add(e._resultData)},_afterTBLFocusedChange:function(e){var t=this;if(e.type.indexOf("textboxlistentry")>-1&&e.newVal){var n=e.target.get(s);t._lastSelectedEntry=t.entryHolder.all("li").indexOf(n)}},_onBoundingBoxClick:function(e){var t=this;t.inputNode.focus()},_onCloseIconMouseOut:function(e){var t=this;e.currentTarget.removeClass(v)},_onCloseIconMouseOver:function(e){var t=this;e.currentTarget.addClass(v)},_onInputNodeFocus:function(e){var t=this;t._lastSelectedEntry=-1},_onTBLKeypress:function(e){var t=this,n=t.inputNode;if(!n.val()){var r=t._lastSelectedEntry,i=-1,s=r==-1,o=e.isKey(g),u=o&&s,a=e.isKey(b)||u,f=e.isKey(w),l=t.entries,c=l.size(),h=c-1;a?s?i=h:r==0?i=r:i=r-1:f?s||r==h?i=-1:i=r+1:o&&(l.removeAt(r),c=l.size(),r==c?i=-1:i=r),(u||o)&&e.halt(),i!=-1?l.item(i).entry.focus():n.focus(),t._lastSelectedEntry=i}else e.isKey(y)&&t.get("allowAnyEntry")&&t.addEntries()},_onTextboxKeyPress:function(e){var t=this;N.superclass._onTextboxKeyPress.apply(t,arguments),e.isKey(y)&&e.halt()},_prepareEntry:function(e){var t=this,n={},r=t.get("matchKey");return n[r]=e,n},_realignContainer:function(e){var t=this;t.overlay.set("width",t.get(s).get("offsetWidth")),N.superclass._realignContainer.apply(t,arguments)},_removeItem:function(t){var n=this,r=e.Widget.getByNode(t.currentTarget);r=r.get(s);var i=n.entryHolder.all("li").indexOf(r);n.entries.removeAt(i)},_renderEntryHolder:function(){var t=this,n=t.get(o),r=e.Node.create(E);n.prepend(r),t.entryHolder=r},_renderInput:function(){var t=this,n=t.get(o),r=t.get("input"),i={labelText:!1},u=null;r&&(r=e.one(r),i.node=r,u=r.get("parentNode"));var a=e.Node.create(T);t.entryHolder.append(a);var f=(new e.Textfield(i)).render(a),l=f.get(s);l.get("parentNode")!=a&&a.appendChild(l),t.inputContainer=a,t.inputField=f,t.inputNode=f.get("node"),t.button=new e.ButtonItem,t.set("uniqueName",e.stamp(t.inputNode))},_updateEntryHolder:function(t){var n=this,r=t.type,i=n.inputNode,o=n.entryHolder,a=t.item,f=t.index,l=n.get("matchKey"),c=a[l]||t.attrName;if(c){if(r=="dataset:add"){var h=new C({labelText:c});h.addTarget(n);var p=h.get(s);h.render(o),o.all("li").item(f).placeBefore(p),p.plug(e.Plugin.NodeFX,u),a.entry=h,i.val("")}else if(r=="dataset:replace"){i.val("");var h=t.prevVal.entry;a.entry=h,h.get(s).fx.run()}else if(r=="dataset:remove"){var d=o.all("li");d&&d.item(f).remove()}}else n.entries.removeAt(f)}}}),C=e.Component.create({NAME:i,ATTRS:{labelText:{value:""},tabIndex:{value:0}},prototype:{BOUNDING_TEMPLATE:"<li></li>",CONTENT_TEMPLATE:"<span></span>",renderUI:function(){var t=this,n=t.get(o),r=e.Node.create(x),i=e.Node.create(S),s=e.Escape.html(t.get("labelText"));r.set("innerHTML",s),n.appendChild(r),n.appendChild(i)}}});e.TextboxList=N,e.TextboxListEntry=C},"3.0.3-deprecated.60",{requires:["anim-node-plugin","aui-autocomplete-deprecated","aui-button-item-deprecated","aui-data-set-deprecated","escape","node-focusmanager"],skinnable:!0});
