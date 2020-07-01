if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-color-picker-popover/aui-color-picker-popover.js']) {
   __coverage__['build/aui-color-picker-popover/aui-color-picker-popover.js'] = {"path":"build/aui-color-picker-popover/aui-color-picker-popover.js","s":{"1":0,"2":0,"3":0,"4":0},"b":{},"f":{"1":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":36},"end":{"line":1,"column":55}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":96,"column":3}},"2":{"start":{"line":10,"column":0},"end":{"line":10,"column":18}},"3":{"start":{"line":24,"column":0},"end":{"line":83,"column":3}},"4":{"start":{"line":85,"column":0},"end":{"line":85,"column":42}}},"branchMap":{},"code":["(function () { YUI.add('aui-color-picker-popover', function (A, NAME) {","","/**"," * The Color Picker Component"," *"," * @module aui-color-picker"," * @submodule aui-color-picker-popover"," */","","var Lang = A.Lang;","","/**"," * A base class for `ColorPickerPopover`."," *"," * @class A.ColorPickerPopover"," * @extends A.Popover"," * @uses A.ColorPickerBase, A.WidgetAutohide, A.WidgetCssClass, A.WidgetToggle"," * @param {Object} config Object literal specifying widget configuration"," *     properties."," * @constructor"," * @include http://alloyui.com/examples/color-picker/popover-markup.html"," * @include http://alloyui.com/examples/color-picker/popover.js"," */","var ColorPickerPopover = A.Base.create('color-picker-popover', A.Popover, [","    A.ColorPickerBase,","    A.WidgetAutohide,","    A.WidgetCssClass,","    A.WidgetToggle","], {}, {","    /**","     * Static property used to define the default attribute","     * configuration for the `ColorPickerPopover`.","     *","     * @property ATTRS","     * @type {Object}","     * @static","     */","    ATTRS: {","","        /**","         * The alignment configuration for `ColorPickerPopover`.","         *","         * @attribute align","         * @type {Object}","         */","        align: {","            validator: Lang.isObject,","            value: {","                points: [A.WidgetPositionAlign.TC, A.WidgetPositionAlign.BC]","            }","        },","","        /**","         * Determines if `ColorPickerPopover` is visible or not.","         *","         * @attribute visible","         * @default false","         * @type {Boolean}","         */","        visible: {","            validator: Lang.isBoolean,","            value: false","        }","    },","","    /**","     * Static property provides a string to identify the class.","     *","     * @property NAME","     * @type {String}","     * @static","     */","    NAME: 'color-picker-popover',","","    /**","     * Static property provides a string to identify the namespace.","     *","     * @property NS","     * @type {String}","     * @static","     */","    NS: 'color-picker-popover'","});","","A.ColorPickerPopover = ColorPickerPopover;","","","}, '3.1.0-deprecated.77', {","    \"requires\": [","        \"aui-color-picker-base\",","        \"aui-popover\",","        \"aui-widget-cssclass\",","        \"aui-widget-toggle\"","    ],","    \"skinnable\": true","});","","}());"]};
}
var __cov_Pw0jHUTmMZbcevUNpn2GEQ = __coverage__['build/aui-color-picker-popover/aui-color-picker-popover.js'];
__cov_Pw0jHUTmMZbcevUNpn2GEQ.s['1']++;YUI.add('aui-color-picker-popover',function(A,NAME){__cov_Pw0jHUTmMZbcevUNpn2GEQ.f['1']++;__cov_Pw0jHUTmMZbcevUNpn2GEQ.s['2']++;var Lang=A.Lang;__cov_Pw0jHUTmMZbcevUNpn2GEQ.s['3']++;var ColorPickerPopover=A.Base.create('color-picker-popover',A.Popover,[A.ColorPickerBase,A.WidgetAutohide,A.WidgetCssClass,A.WidgetToggle],{},{ATTRS:{align:{validator:Lang.isObject,value:{points:[A.WidgetPositionAlign.TC,A.WidgetPositionAlign.BC]}},visible:{validator:Lang.isBoolean,value:false}},NAME:'color-picker-popover',NS:'color-picker-popover'});__cov_Pw0jHUTmMZbcevUNpn2GEQ.s['4']++;A.ColorPickerPopover=ColorPickerPopover;},'3.1.0-deprecated.77',{'requires':['aui-color-picker-base','aui-popover','aui-widget-cssclass','aui-widget-toggle'],'skinnable':true});
