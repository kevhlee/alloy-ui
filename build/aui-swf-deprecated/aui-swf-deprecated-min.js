YUI.add("aui-swf-deprecated",function(e,t){var n=e.Lang,r=e.UA,i=e.getClassName,t="swf",s="10.22",o="http://fpdownload.macromedia.com/pub/flashplayer/update/current/swf/autoUpdater.swf?"+ +(new Date),u="application/x-shockwave-flash",a="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000",f="YUI.SWF.eventHandler",l="ShockwaveFlash",c=0,h=YUI.namespace("SWF.instances"),p=i(t);YUI.SWF.eventHandler=function(e,t){h[e]._eventHandler(t)};if(r.gecko||r.webkit||r.opera){var d=navigator.mimeTypes[u];if(d){var v=d.enabledPlugin,m=[];m=v.description.replace(/\s[rd]/g,"."),m=m.replace(/[A-Za-z\s]+/g,""),m=m.split("."),c=m[0]+".";switch(m[2].toString().length){case 1:c+="00";break;case 2:c+="0"}c+=m[2],c=parseFloat(c)}}else if(r.ie){try{var g=new ActiveXObject(l+"."+"6");g.AllowScriptAccess="always"}catch(y){g!=null&&(c=6)}if(c==0)try{var b=new ActiveXObject(l+"."+l),m=[];m=b.GetVariable("$version"),m=m.replace(/[A-Za-z\s]+/g,""),m=m.split(","),c=m[0]+".";switch(m[2].toString().length){case 1:c+="00";break;case 2:c+="0"}}catch(y){}}r.flash=c;var w=e.Component.create({NAME:t,ATTRS:{url:{value:""},version:{value:c},useExpressInstall:{value:!1},fixedAttributes:{value:{}},flashVars:{setter:"_setFlashVars",value:{}},render:{value:!0}},constructor:function(e){var t=this;if(arguments.length>1){var n=arguments[0],r=arguments[1],i=arguments[2]||{};e={boundingBox:n,url:r,fixedAttributes:i.fixedAttributes,flashVars:i.flashVars}}w.superclass.constructor.call(this,e)},getFlashVersion:function(){return c},isFlashVersionAtLeast:function(e){return c>=e},prototype:{CONTENT_TEMPLATE:null,renderUI:function(){var t=this,n=w.isFlashVersionAtLeast(t.get("version")),i=r.flash>=8,s=i&&!n&&t.get("useExpressInstall"),l=t.get("url");s&&(l=o);var c=e.guid();h[c]=this,t._swfId=c;var p=t.get("contentBox"),d=t.get("flashVars");e.mix(d,{YUISwfId:c,YUIBridgeCallback:f});var v=e.QueryString.stringify(d),m="<object ";if((n||s)&&l){m+='id="'+c+'" ',r.ie?m+='classid="'+a+'" ':m+='type="'+u+'" data="'+l+'" ',m+='height="100%" width="100%">',r.ie&&(m+='<param name="movie" value="'+l+'"/>');var g=t.get("fixedAttributes");for(var y in g)m+='<param name="'+y+'" value="'+g[y]+'" />';v&&(m+='<param name="flashVars" value="'+v+'" />'),m+="</object>",p.set("innerHTML",m)}t._swf=e.one("#"+c)},bindUI:function(){var e=this;e.publish("swfReady",{fireOnce:!0})},callSWF:function(e,t){var n=this;t=t||[];var r=n._swf.getDOM();return r[e]?r[e].apply(r,t):null},toString:function(){var e=this;return"SWF"+e._swfId},_eventHandler:function(e){var t=this,n=e.type.replace(/Event$/,"");n!="log"&&t.fire(n,e)},_setFlashVars:function(t){var r=this;return n.isString(t)&&(t=e.QueryString.parse(t)),t}}});e.SWF=w},"3.0.3-deprecated.99",{requires:["querystring-parse-simple","querystring-stringify-simple","aui-base-deprecated"]});
