YUI.add("aui-datatable-checkbox-cell-editor",function(e,t){var n,r=e.getClassName("celleditor","element"),i=e.getClassName("celleditor","option"),n=e.Component.create({NAME:"checkboxCellEditor",ATTRS:{selectedAttrName:{value:"checked"}},EXTENDS:e.BaseOptionsCellEditor,prototype:{ELEMENT_TEMPLATE:'<div class="'+r+'"></div>',OPTION_TEMPLATE:'<input class="'+i+'" id="{id}" name="{name}" type="checkbox" value="{value}"/>',OPTION_WRAPPER:'<label class="checkbox" for="{id}"> {label}</label>',getElementsValue:function(){var e=this;return e._getSelectedOptions().get("value")},_syncElementsFocus:function(){var e=this,t=e.options;t&&t.size()&&t.item(0).focus()},_syncElementsName:function(){var e=this,t=e.options;t&&t.setAttribute("name",e.get("elementName"))}}});e.CheckboxCellEditor=n},"3.0.3-deprecated.97",{requires:["aui-datatable-base-options-cell-editor"]});
