YUI.add("aui-ace-autocomplete-list",function(e,t){var n=e.Lang,r=e.Array,i=e.Node,s=e.Do,o=e.getClassName,u=o("ace-autocomplete","entry"),a=o("ace-autocomplete","entry","container"),f=o("ace-autocomplete","entry","container","highlighted"),l=o("ace-autocomplete","entry","empty"),c=o("ace-autocomplete","entry","loading"),h=o("ace-autocomplete","results"),p="."+a,d=p+"."+"selected",v=d+" "+"."+u,m="<div></div>",g=40,y=35,b=34,w=33,E=36,S=38,x=5,T=20,N=e.Base.create("ace-autocomplete-list",e.Overlay,[e.AceEditor.AutoCompleteBase,e.WidgetAutohide],{bindUI:function(){var e=this;e.on("addSuggestion",e.hide,e),e.on("cursorChange",e._onCursorChange,e),e.on("cursorOut",e.hide,e),e.on("insert",e._onInsertText,e),e.on("match",e._onMatch,e),e.on("remove",e._onRemoveText,e),e.on("resultsChange",e._onResultsChange,e),e.on("resultsError",e._setEmptyResults,e),e.on("showLoadingMessage",e._onShowLoadingMessage,e),e.on("visibleChange",e._onVisibleChange,e)},renderUI:function(){var e=this,t;t=e.get("listNode"),t||(t=e._createListNode()),t.delegate("click",e._handleResultListClick,p,e),t.delegate("mouseenter",e._onMouseEnter,p,e),t.delegate("mouseleave",e._onMouseLeave,p),e._autoCompleteResultsList=t},_createListNode:function(){var t=this,n;return n=e.Node.create(t.TPL_LIST),t.get("contentBox").append(n),n},_getEntriesPerPage:function(){var e=this,t,n,r,i;return r=e._entriesPerPage,r||(t=e._autoCompleteResultsList,i=t.one(p).get("offsetHeight"),n=t.get("offsetHeight"),r=Math.floor(n/i),e._entriesPerPage=r),r},_getSelectedEntry:function(){var e=this,t,n;return n=e._autoCompleteResultsList.one(v),n&&(t=n.text()),t},_handleArrows:function(e){var t=this,n,r,i,o,u,a;e===S?n="previous":e===g&&(n="next");if(n)return r=t._autoCompleteResultsList,a=r.one(d),a&&(i=a[n](p),i&&(a.removeClass("selected"),i.addClass("selected"),u=r.get("region"),o=i.get("region"),n==="previous"?o.top<u.top?i.scrollIntoView(!0):o.top>u.bottom&&i.scrollIntoView():o.top+o.height>u.bottom?i.scrollIntoView():o.top+o.height<u.top&&i.scrollIntoView(!0))),new s.Halt(null)},_handleKey:function(e,t,n){var r=this,i;if(r.get("visible"))if(n===S||n===g)i=r._handleArrows(n);else if(n===w||n===b)i=r._handlePageUpDown(n);else if(n===y||n===E)i=r._handleStartEnd(n);return i},_handlePageUpDown:function(e){var t=this,r,i,o,u,a,f,l,c;return r=t._autoCompleteResultsList,i=t._getEntriesPerPage(),f=r.one(d),l=n.toInt(f.attr("data-index")),c="",a=!1,e===w?(u=l-i,a=!0):e===b&&(u=l+i,c=":last-child"),o=r.one(p+"["+"data-index"+'="'+u+'"]'),o||(o=r.one(p+c)),f!==o&&(f.removeClass("selected"),o.addClass("selected"),o.scrollIntoView(a)),new s.Halt(null)},_handleResultListClick:function(e){var t=this,n,r,i;r=e.currentTarget,i=t._autoCompleteResultsList.one(d),r!==i&&(i.removeClass("selected"),r.addClass("selected")),n=r.text(),t._addSuggestion(n),t.fire("entrySelected",{content:n})},_handleStartEnd:function(e){var t=this,n,r,i,o;return i=!1,n=t._autoCompleteResultsList,e===y?r=n.one(p+":last-child"):e===E&&(r=n.one(p),i=!0),o=n.one(d),r!==o&&(o.removeClass("selected"),r.addClass("selected"),r.scrollIntoView(i)),new s.Halt(null)},_onCursorChange:function(e){var t=this;t.get("visible")||e.preventDefault()},_onInsertText:function(e){var t=this;e.startRow!==e.endRow&&t.get("visible")&&t.hide()},_onMatch:function(e){var t=this,n,r,i;i=t.get("visible"),r=t._autoCompleteResultsList.hasChildNodes(),e.match?r?i||(n=e.coords,t.set("xy",[n.pageX+x,n.pageY+T]),t.show()):i&&t.hide():i&&t.hide()},_onMouseEnter:function(e){e.currentTarget.addClass(f)},_onMouseLeave:function(e){e.currentTarget.removeClass(f)},_onRemoveText:function(){var e=this;e.get("visible")&&e.hide()},_onResultsChange:function(e){var t=this,s,o,u,a,f;s=t._autoCompleteResultsList,s.empty(),a=e.newVal,o=t.TPL_ENTRY,f=i.create(m),r.each(a,function(e,t){f.appendChild(n.sub(o,{index:t,value:e}))}),s.setHTML(f.getHTML()),u=s.one(p),u&&u.addClass("selected")},_onShowLoadingMessage:function(){var e=this,t;t=e._autoCompleteResultsList,t.empty(),t.appendChild(n.sub(e.TPL_LOADING,{label:e.get("loadingMessage")})),e.get("visible")||e.show()},_onVisibleChange:function(e){var t=this;e.newVal?t._overwriteCommands():t._removeAutoCompleteCommands()},_setEmptyResults:function(){var e=this;e.set("results",[])},TPL_ENTRY:'<li class="'+a+'" data-index="{index}">'+'<span class="'+u+'">{value}</span>'+"</li>",TPL_LIST:'<ul class="'+h+'"/>',TPL_LOADING:'<li class="'+a+'">'+'<span class="glyphicon glyphicon-loading '+c+'">{label}</span>'+"</li>",TPL_RESULTS_EMPTY:'<li class="'+a+'">'+'<span class="'+l+'">{label}</span>'+"</li>"},{NAME:"ace-autocomplete-list",NS:"ace-autocomplete-list",ATTRS:{host:{validator:n.isObject},listNode:{value:null},loadingMessage:{validator:n.isString,value:"Loading"},results:{validator:n.isArray},selectedEntry:{getter:"_getSelectedEntry"},strings:{validator:n.isObject,value:{emptyMessage:"No suggestions"}}},CSS_PREFIX:"ace-autocomplete",HTML_PARSER:{listNode:"."+h}});e.AceEditor.AutoCompleteList=N,e.AceEditor.AutoComplete=N},"3.0.3-deprecated.99",{requires:["aui-ace-autocomplete-base","overlay","widget-autohide"],skinnable:!0});
