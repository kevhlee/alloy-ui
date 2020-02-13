YUI.add("aui-image-viewer-base",function(e,t){var n=e.getClassName("image","viewer","base","node","content"),r=e.getClassName("image","viewer","base","control"),i=e.getClassName("image","viewer","base","control","left"),s=e.getClassName("image","viewer","base","control","right"),o=e.getClassName("image","viewer","base","current","image"),u=e.getClassName("image","viewer","base","image"),a=e.getClassName("image","viewer","base","image","container"),f=e.getClassName("image","viewer","base","image","list"),l=e.getClassName("image","viewer","base","image","list","inner"),c=e.getClassName("image","viewer","base","loading"),h=e.getClassName("image","viewer","base","loading","icon");e.ImageViewerBase=e.Base.create("image-viewer-base",e.Widget,[e.WidgetResponsive,e.WidgetStack],{TPL_CONTROL_LEFT:'<a href="#" class="'+r+" "+i+'"><span class="glyphicon glyphicon-chevron-left"></span></a>',TPL_CONTROL_RIGHT:'<a href="#" class="'+r+" "+s+'"><span class="glyphicon glyphicon-chevron-right"></span></a>',TPL_IMAGE:'<img class="'+u+'"/>',TPL_IMAGE_CONTAINER:'<div class="'+a+'">'+'<span class="glyphicon glyphicon-time '+h+'"></span></div>',TPL_IMAGE_LIST:'<div class="'+f+'"><div class="'+l+'"></div></div>',initializer:function(){this._eventHandles=[],this.publish({animate:{defaultFn:this._defAnimateFn}}),this.get("useARIA")&&this.plug(e.Plugin.Aria,{roleName:this.get("role"),roleNode:this.get("contentBox")})},renderUI:function(){this.get("boundingBox").unselectable(),this._renderImagesForFirstTime(),this._renderControls()},bindUI:function(){this._eventHandles.push(this.after({currentIndexChange:this._afterCurrentIndexChange,preloadAllImagesChange:this._afterPreloadAllImagesChange,responsive:this._afterResponsive,showControlsChange:this._afterShowControlsChange,sourcesChange:this._afterSourcesChange}),this.on("responsive",this._onResponsive),e.after(this._afterUISetVisible,this,"_uiSetVisible")),this._bindControls()},destructor:function(){(new e.EventHandle(this._eventHandles)).detach()},hasNext:function(){return this.get("circular")||this.get("currentIndex")<this.get("sources").length-1},hasPrev:function(){return this.get("circular")||this.get("currentIndex")>0},next:function(){this.hasNext()&&(this.get("currentIndex")===this.get("sources").length-1?this.set("currentIndex",0):this.set("currentIndex",this.get("currentIndex")+1))},prev:function(){this.hasPrev()&&(this.get("currentIndex")===0?this.set("currentIndex",this.get("sources").length-1):this.set("currentIndex",this.get("currentIndex")-1))},_afterCurrentIndexChange:function(e){this._previousIndex=e.prevVal,this._showCurrentImage()},_afterPreloadAllImagesChange:function(){this._preloadAll()},_afterResponsive:function(){var e=this._getCurrentImage();e&&e.setStyles({maxHeight:"100%",maxWidth:"100%"})},_afterShowControlsChange:function(){this._syncControlsUI()},_afterSourcesChange:function(){this._renderImages()},_afterUISetVisible:function(){this.get("visible")?this._showCurrentImage():this._syncControlsUI()},_bindControls:function(){this._eventHandles.push(this.get("boundingBox").delegate("click",this._onClickControl,"."+r,this))},_defAnimateFn:function(){var t=this._getCurrentImage(),n=this.get("imageAnim");if(n===!1)return;this._animation?(this._animation.stop(!0),this._animation.setAttrs(n)):this._animation=new e.Anim(n),t.setStyle("opacity",0),this._animation.set("node",t),this._animation.run()},_getCurrentImage:function(){if(this.get("sources").length)return this._getCurrentImageContainer().one("."+u)},_getCurrentImageContainer:function(){return this._getImageContainerAtIndex(this.get("currentIndex"))},_getImageContainer:function(){return this.get("contentBox").all("."+a)},_getImageContainerAtIndex:function(e){return this._getImageContainer().item(e)},_loadImage:function(e){this.fire("load"+e)},_onClickControl:function(e){e.preventDefault(),e.currentTarget.hasClass(i)?this.prev():e.currentTarget.hasClass(s)&&this.next()},_onCurrentImageReady:function(){this.get("visible")&&(this.updateDimensionsWithNewRatio(),this.fire("animate",{image:this._getCurrentImage()}))},_onImageLoad:function(e,t){e.setData("loaded",!0),e.get("parentNode").removeClass(c),this.get("visible")&&t===this.get("currentIndex")&&this._onCurrentImageReady()},_onResponsive:function(){var e=this._getCurrentImage();e&&e.setStyles({maxHeight:"none",maxWidth:"none"})},_preloadAll:function(){var e=this.get("sources");if(this.get("preloadAllImages"))for(var t=0;t<e.length;t++)this._loadImage(t)},_renderControls:function(){this.get("contentBox").prepend(this.get("controlPrevious")),this.get("contentBox").append(this.get("controlNext"))},_renderImage:function(t,r){var i,s=e.Node.create(this.TPL_IMAGE),o=this.get("sources")[t];e.Lang.isString(o)?(r.prepend(s),this._eventHandles.push(s.once("load",e.bind(this._onImageLoad,this,s,t))),i=new e.ImgLoadGroup,i.addCustomTrigger("load"+t,this),i.registerImage({domId:s.generateID(),srcUrl:o})):o instanceof e.Node&&(r.prepend(o),o.setData("loaded",!0),o.addClass(u),o.addClass(n),o.get("parentNode").removeClass(c))},_renderImageContainers:function(){var t=this.get("useARIA"),n,r=[],i=this._renderImageListNode(),s=this.get("sources");for(var o=0;o<s.length;o++)n=e.Node.create(this.TPL_IMAGE_CONTAINER),n.addClass(c),t&&this._syncAriaImageContainerUI(n),i.append(n),r.push(n);return r},_renderImageListNode:function(){var t=e.Node.create(this.TPL_IMAGE_LIST);return this.get("contentBox").setHTML(t),t.one("."+l)},_renderImages:function(){var e=this._renderImageContainers();for(var t=0;t<e.length;t++)this._renderImage(t,e[t]);this._preloadAll()},_renderImagesForFirstTime:function(){var e,t=this.get("contentBox").all("."+u);this._renderImages();if(t.size())for(var n=0;n<this.get("sources").length;n++)e=this._getImageContainerAtIndex(n),e.removeClass(c),e.one("."+u).set("loaded",!0)},_showCurrentImage:function(){var e=this.get("currentIndex"),t;if(!this.get("visible")||!this.get("sources").length)return;this._updateCurrentImageCSS(),this._loadImage(e),this.get
("preloadNeighborImages")&&(this.hasPrev()&&this._loadImage(e-1),this.hasNext()&&this._loadImage(e+1)),t=this._getCurrentImage(),t.getData("loaded")&&this._onCurrentImageReady(),this._syncControlsUI()},_setCurrentIndex:function(e){var t=this.get("sources").length;return e==="rand"?Math.floor(Math.random()*t):Math.max(Math.min(e,t-1),0)},_setImageAnim:function(t){return t===!1?t:e.merge({to:{opacity:1},duration:.5},t)},_syncAriaCurrentImageUI:function(){this.aria.setAttributes([{name:"hidden",node:this._getImageContainer(),value:"true"},{name:"hidden",node:this._getCurrentImageContainer(),value:"false"}])},_syncAriaImageContainerUI:function(e){this.aria.setAttribute("hidden",!0,e)},_syncControlsUI:function(){var e=this.get("visible")&&this.get("showControls")&&this.hasNext(),t=this.get("visible")&&this.get("showControls")&&this.hasPrev();this.get("controlNext").toggleClass("invisible",!e),this.get("controlPrevious").toggleClass("invisible",!t)},_updateCurrentImageCSS:function(){e.Lang.isNumber(this._previousIndex)&&this._getImageContainerAtIndex(this._previousIndex).removeClass(o),this._getCurrentImageContainer().addClass(o),this.get("useARIA")&&this._syncAriaCurrentImageUI()}},{ATTRS:{circular:{value:!1,validator:e.Lang.isBoolean},controlNext:{validator:e.Lang.isNode,valueFn:function(){return e.Node.create(this.TPL_CONTROL_RIGHT)},writeOnce:"initOnly"},controlPrevious:{validator:e.Lang.isNode,valueFn:function(){return e.Node.create(this.TPL_CONTROL_LEFT)},writeOnce:"initOnly"},currentIndex:{setter:"_setCurrentIndex",value:0,validator:function(t){return e.Lang.isNumber(t)||e.Lang.isString(t)}},imageAnim:{value:{},setter:"_setImageAnim",validator:function(t){return e.Lang.isObject(t)||t===!1}},preloadAllImages:{value:!1,validator:e.Lang.isBoolean},preloadNeighborImages:{value:!0,validator:e.Lang.isBoolean},role:{validator:e.Lang.isString,value:"listbox",writeOnce:"initOnly"},showControls:{value:!0,validator:e.Lang.isBoolean},sources:{value:[],validator:e.Lang.isArray},useARIA:{validator:e.Lang.isBoolean,value:!0,writeOnce:"initOnly"}},CSS_PREFIX:e.getClassName("image-viewer-base"),HTML_PARSER:{controlNext:function(e){return e.one("."+s)},controlPrevious:function(e){return e.one("."+i)},sources:function(t){var r,i,s,o=t.all("."+u+", ."+n),a,f=[];return o.each(function(){a=this.test("img"),i=this.one("img"),r=this.getStyle("backgroundImage"),this.hasClass(n)?f.push(this):a||i?(s=a?this:i,f.push(s.getAttribute("src"))):r!=="none"&&f.push(e.Lang.String.removeAll(r.slice(4,-1),'"'))}),f}}})},"3.0.3-deprecated.99",{requires:["anim","aui-aria","aui-classnamemanager","aui-node","aui-widget-responsive","base-build","imageloader","node-base","widget","widget-stack"],skinnable:!0});
