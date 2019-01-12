!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("angular")):"function"==typeof define&&define.amd?define("ng-currency",["angular"],n):"object"==typeof exports?exports["ng-currency"]=n(require("angular")):e["ng-currency"]=n(e.angular)}(this,function(e){return function(e){function n(o){if(r[o])return r[o].exports;var t=r[o]={exports:{},id:o,loaded:!1};return e[o].call(t.exports,t,t.exports,n),t.loaded=!0,t.exports}var r={};return n.m=e,n.c=r,n.p="",n(0)}([function(e,n,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var t=r(2),u=o(t),i=r(1),a=o(i),l=u["default"].module("ng-currency",[]);l.directive("ngCurrency",a["default"]),n["default"]=l.name},function(e,n){"use strict";function r(e,n){return{require:"ngModel",link:function(r,o,t,u){function i(){if(M){var e=void 0,n=void 0;if(u.$options&&(n=u.$options.getOption?u.$options.getOption("updateOn"):u.$options.updateOn),"blur"===n){e=u.$viewValue;for(var r=u.$parsers.length-1;r>=0;r--)e=u.$parsers[r](e)}else e=u.$$rawModelValue;for(var o=u.$formatters.length-1;o>=0;o--)e=u.$formatters[o](e);u.$viewValue=e,u.$render()}}function a(){if(u.$validate(),M){var e=l(u.$$rawModelValue);e!==u.$$rawModelValue&&(u.$setViewValue(e.toFixed(O)),u.$commitViewValue(),i())}}function l(e){return $&&(void 0!==p&&e>p?e=p:void 0!==v&&e<v&&(e=v)),e}function c(e){return RegExp("\\d|\\-|\\"+e,"g")}function d(e){return RegExp("\\-{0,1}((\\"+e+")|([0-9]{1,}\\"+e+"?))&?[0-9]{0,"+O+"}","g")}function f(r){r=String(r);var o=n.NUMBER_FORMATS.DECIMAL_SEP,t=null;r.indexOf(n.NUMBER_FORMATS.DECIMAL_SEP)===-1&&r.indexOf(".")!==-1&&O>0&&(o=".");var u=e("currency")("-1",s(),O),i=RegExp("[0-9."+n.NUMBER_FORMATS.DECIMAL_SEP+n.NUMBER_FORMATS.GROUP_SEP+"]+"),a=u.replace(i.exec(u),""),l=r.replace(i.exec(r),"");return a===l&&(r="-"+i.exec(r)),RegExp("^-[\\s]*$","g").test(r)&&(r="-0"),c(o).test(r)&&(t=r.match(c(o)).join("").match(d(o)),t=t?t[0].replace(o,"."):null),t}function s(){return void 0===x?n.NUMBER_FORMATS.CURRENCY_SYM:x}var $=void 0,v=void 0,p=void 0,x=void 0,g=void 0,M=!0,O=2;t.$observe("ngCurrency",function(e){M="false"!==e,M?i():(u.$viewValue=u.$$rawModelValue,u.$render())}),t.$observe("hardCap",function(e){$="true"===e,a()}),t.$observe("min",function(e){v=e?Number(e):void 0,a()}),t.$observe("max",function(e){p=e?Number(e):void 0,a()}),t.$observe("currencySymbol",function(e){x=e,i()}),t.$observe("ngRequired",function(e){g=e,a()}),t.$observe("fraction",function(e){O=e||2,i(),a()}),u.$parsers.push(function(e){return M&&[void 0,null,""].indexOf(e)===-1?(e=f(e),e=l(Number(e))):e}),u.$formatters.push(function(n){return M&&[void 0,null,""].indexOf(n)===-1?e("currency")(n,s(),O):n}),u.$validators.min=function(e){return!(g||[void 0,null,""].indexOf(e)===-1&&!isNaN(e))||(!M||[void 0,null].indexOf(v)!==-1||isNaN(v)||e>=v)},u.$validators.max=function(e){return!(g||[void 0,null,""].indexOf(e)===-1&&!isNaN(e))||(!M||[void 0,null].indexOf(p)!==-1||isNaN(p)||e<=p)},u.$validators.fraction=function(e){return!M||!e||!isNaN(e)},r.$on("currencyRedraw",function(){a(),i()}),o.bind("focus",function(){if(M){var r=new RegExp("\\"+n.NUMBER_FORMATS.GROUP_SEP,"g"),t=[void 0,null,""].indexOf(u.$$rawModelValue)===-1?e("number")(u.$$rawModelValue,O).replace(r,""):u.$$rawModelValue;u.$viewValue!==t&&(u.$viewValue=t,u.$render(),o.triggerHandler("focus"))}}),o.bind("blur",i)}}}r.$inject=["$filter","$locale"],Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=r},function(n,r){n.exports=e}])});
//# sourceMappingURL=ng-currency.js.map