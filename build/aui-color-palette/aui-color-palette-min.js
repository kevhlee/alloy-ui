YUI.add("aui-color-palette",function(e,t){var n=e.Array,r=e.Color,i=e.Lang,s=e.getClassName,o=s("palette-item"),u=s("palette-item-inner"),a=s("palette-item-selected"),f=e.Base.create("color-palette",e.Widget,[e.Palette,e.WidgetCssClass,e.WidgetToggle],{ITEM_TEMPLATE:'<li class="'+o+' {selectedClassName}" data-column={column} data-index={index} data-row={row} data-value="{value}">'+'<a href="" class="'+u+'" style="background-color:{value}" onclick="return false;" title="{title}"></a>'+"</li>",_valueFormatterFn:function(){return function(e,t,n,r,s){var o=this,u=e[t];return i.sub(o.ITEM_TEMPLATE,{column:r,index:t,row:n,selectedClassName:s?a:"",title:u.name,value:u.value})}},_setItems:function(e){var t=this,s;return s=n.map(e,function(e){var t=e,n;return i.isString(e)&&(n=r.toHex(e),t={name:n,value:n}),t}),t._items=null,s}},{CSS_PREFIX:s("color-palette"),NAME:"color-palette",ATTRS:{items:{setter:"_setItems",value:["#9FC6E7","#5484ED","#A4BDFC","#51B749","#FBD75B","#FFB878","#FF887C","#DC2127","#DBADFF","#E1E1E1"]}}});e.ColorPalette=f},"3.0.3-deprecated.97",{requires:["array-extras","aui-palette","color-base","node-core","aui-widget-cssclass","aui-widget-toggle"],skinnable:!0});
