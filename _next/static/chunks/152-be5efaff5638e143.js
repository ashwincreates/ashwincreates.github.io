(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[152],{9642:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function o(e,n){if(null==e)return{};var t,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}function u(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function i(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"===typeof e)return u(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(e,n):void 0}}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}t.d(n,{Ul:function(){return i},gY:function(){return r},gK:function(){return o}})},2659:function(e,n,t){"use strict";var r;t.d(n,{R:function(){return r}}),function(e){e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab"}(r||(r={}))},2335:function(e,n,t){"use strict";t.d(n,{J:function(){return I}});var r,o,u,i,a=t(9642),c=t(7294),l=t(133),s=t(8529),f=t(7471),p=t(2659),d=t(9016),v=t(2506),m=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((function(e){return e+":not([tabindex='-1'])"})).join(",");function b(e){return void 0===e&&(e=document.body),null==e?[]:Array.from(e.querySelectorAll(m))}function g(e,n){var t=Array.isArray(e)?e:b(e),i=document.activeElement,a=function(){if(n&(r.First|r.Next))return u.Next;if(n&(r.Previous|r.Last))return u.Previous;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")}(),c=function(){if(n&r.First)return 0;if(n&r.Previous)return Math.max(0,t.indexOf(i))-1;if(n&r.Next)return Math.max(0,t.indexOf(i))+1;if(n&r.Last)return t.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")}(),l=n&r.NoScroll?{preventScroll:!0}:{},s=0,f=t.length,p=void 0;do{var d;if(s>=f||s+f<=0)return o.Error;var v=c+s;if(n&r.WrapAround)v=(v+f)%f;else{if(v<0)return o.Underflow;if(v>=f)return o.Overflow}null==(d=p=t[v])||d.focus(l),s+=a}while(p!==document.activeElement);return p.hasAttribute("tabindex")||p.setAttribute("tabindex","0"),o.Success}function y(e,n,t){var r=(0,c.useRef)(n);r.current=n,(0,c.useEffect)((function(){function n(e){r.current.call(window,e)}return window.addEventListener(e,n,t),function(){return window.removeEventListener(e,n,t)}}),[e,t])}!function(e){e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll"}(r||(r={})),function(e){e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow"}(o||(o={})),function(e){e[e.Previous=-1]="Previous",e[e.Next=1]="Next"}(u||(u={})),function(e){e[e.Strict=0]="Strict",e[e.Loose=1]="Loose"}(i||(i={}));var h,E,w,S=t(3980),C=t(6637);!function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(E||(E={})),function(e){e[e.TogglePopover=0]="TogglePopover",e[e.ClosePopover=1]="ClosePopover",e[e.SetButton=2]="SetButton",e[e.SetButtonId=3]="SetButtonId",e[e.SetPanel=4]="SetPanel",e[e.SetPanelId=5]="SetPanelId"}(w||(w={}));var O=((h={})[w.TogglePopover]=function(e){var n;return(0,a.gY)({},e,{popoverState:(0,l.E)(e.popoverState,(n={},n[E.Open]=E.Closed,n[E.Closed]=E.Open,n))})},h[w.ClosePopover]=function(e){return e.popoverState===E.Closed?e:(0,a.gY)({},e,{popoverState:E.Closed})},h[w.SetButton]=function(e,n){return e.button===n.button?e:(0,a.gY)({},e,{button:n.button})},h[w.SetButtonId]=function(e,n){return e.buttonId===n.buttonId?e:(0,a.gY)({},e,{buttonId:n.buttonId})},h[w.SetPanel]=function(e,n){return e.panel===n.panel?e:(0,a.gY)({},e,{panel:n.panel})},h[w.SetPanelId]=function(e,n){return e.panelId===n.panelId?e:(0,a.gY)({},e,{panelId:n.panelId})},h),P=(0,c.createContext)(null);function k(e){var n=(0,c.useContext)(P);if(null===n){var t=new Error("<"+e+" /> is missing a parent <"+I.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(t,k),t}return n}P.displayName="PopoverContext";var x=(0,c.createContext)(null);function T(e){var n=(0,c.useContext)(x);if(null===n){var t=new Error("<"+e+" /> is missing a parent <"+I.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(t,T),t}return n}x.displayName="PopoverAPIContext";var j=(0,c.createContext)(null);function L(){return(0,c.useContext)(j)}j.displayName="PopoverGroupContext";var M=(0,c.createContext)(null);function A(e,n){return(0,l.E)(n.type,O,e,n)}M.displayName="PopoverPanelContext";function I(e){var n,t="headlessui-popover-button-"+(0,v.M)(),r="headlessui-popover-panel-"+(0,v.M)(),o=(0,c.useReducer)(A,{popoverState:E.Closed,button:null,buttonId:t,panel:null,panelId:r}),u=o[0],a=u.popoverState,f=u.button,p=u.panel,d=o[1];(0,c.useEffect)((function(){return d({type:w.SetButtonId,buttonId:t})}),[t,d]),(0,c.useEffect)((function(){return d({type:w.SetPanelId,panelId:r})}),[r,d]);var b=(0,c.useMemo)((function(){return{buttonId:t,panelId:r,close:function(){return d({type:w.ClosePopover})}}}),[t,r,d]),g=L(),h=null==g?void 0:g.registerPopover,C=(0,c.useCallback)((function(){var e;return null!=(e=null==g?void 0:g.isFocusWithinPopoverGroup())?e:(null==f?void 0:f.contains(document.activeElement))||(null==p?void 0:p.contains(document.activeElement))}),[g,f,p]);(0,c.useEffect)((function(){return null==h?void 0:h(b)}),[h,b]),y("focus",(function(){a===E.Open&&(C()||f&&p&&d({type:w.ClosePopover}))}),!0),y("mousedown",(function(e){var n=e.target;a===E.Open&&((null==f?void 0:f.contains(n))||(null==p?void 0:p.contains(n))||(d({type:w.ClosePopover}),function(e,n){var t;return void 0===n&&(n=i.Strict),e!==document.body&&(0,l.E)(n,((t={})[i.Strict]=function(){return e.matches(m)},t[i.Loose]=function(){for(var n=e;null!==n;){if(n.matches(m))return!0;n=n.parentElement}return!1},t))}(n,i.Loose)||(e.preventDefault(),null==f||f.focus())))}));var O=(0,c.useCallback)((function(e){d({type:w.ClosePopover});var n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:f:f;null==n||n.focus()}),[d,f]),k=(0,c.useMemo)((function(){return{close:O}}),[O]),T=(0,c.useMemo)((function(){return{open:a===E.Open,close:O}}),[a,O]);return c.createElement(P.Provider,{value:o},c.createElement(x.Provider,{value:k},c.createElement(S.up,{value:(0,l.E)(a,(n={},n[E.Open]=S.ZM.Open,n[E.Closed]=S.ZM.Closed,n))},(0,s.sY)({props:e,slot:T,defaultTag:"div",name:"Popover"}))))}var N=(0,s.yV)((function e(n,t){var o=k([I.name,e.name].join(".")),u=o[0],i=o[1],l=(0,c.useRef)(null),v=L(),m=null==v?void 0:v.closeOthers,h=(0,c.useContext)(M),S=null!==h&&h===u.panelId,O=(0,f.T)(l,t,S?null:function(e){return i({type:w.SetButton,button:e})}),P=(0,f.T)(l,t),x=(0,c.useRef)(null),T=(0,c.useRef)("undefined"===typeof window?null:document.activeElement);y("focus",(function(){T.current=x.current,x.current=document.activeElement}),!0);var j=(0,c.useCallback)((function(e){var n;if(S){if(u.popoverState===E.Closed)return;switch(e.key){case p.R.Space:case p.R.Enter:e.preventDefault(),e.stopPropagation(),i({type:w.ClosePopover}),null==(n=u.button)||n.focus()}}else switch(e.key){case p.R.Space:case p.R.Enter:e.preventDefault(),e.stopPropagation(),u.popoverState===E.Closed&&(null==m||m(u.buttonId)),i({type:w.TogglePopover});break;case p.R.Escape:if(u.popoverState!==E.Open)return null==m?void 0:m(u.buttonId);if(!l.current)return;if(!l.current.contains(document.activeElement))return;e.preventDefault(),e.stopPropagation(),i({type:w.ClosePopover});break;case p.R.Tab:if(u.popoverState!==E.Open)return;if(!u.panel)return;if(!u.button)return;if(e.shiftKey){var t;if(!T.current)return;if(null==(t=u.button)?void 0:t.contains(T.current))return;if(u.panel.contains(T.current))return;var o=b(),a=o.indexOf(T.current);if(o.indexOf(u.button)>a)return;e.preventDefault(),e.stopPropagation(),g(u.panel,r.Last)}else e.preventDefault(),e.stopPropagation(),g(u.panel,r.First)}}),[i,u.popoverState,u.buttonId,u.button,u.panel,l,m,S]),A=(0,c.useCallback)((function(e){var n;if(!S&&(e.key===p.R.Space&&e.preventDefault(),u.popoverState===E.Open&&u.panel&&u.button))switch(e.key){case p.R.Tab:if(!T.current)return;if(null==(n=u.button)?void 0:n.contains(T.current))return;if(u.panel.contains(T.current))return;var t=b(),o=t.indexOf(T.current);if(t.indexOf(u.button)>o)return;e.preventDefault(),e.stopPropagation(),g(u.panel,r.Last)}}),[u.popoverState,u.panel,u.button,S]),N=(0,c.useCallback)((function(e){var t,r;(0,d.P)(e.currentTarget)||(n.disabled||(S?(i({type:w.ClosePopover}),null==(t=u.button)||t.focus()):(u.popoverState===E.Closed&&(null==m||m(u.buttonId)),null==(r=u.button)||r.focus(),i({type:w.TogglePopover}))))}),[i,u.button,u.popoverState,u.buttonId,n.disabled,m,S]),R=(0,c.useMemo)((function(){return{open:u.popoverState===E.Open}}),[u]),F=(0,C.f)(n,l),H=n,Y=S?{ref:P,type:F,onKeyDown:j,onClick:N}:{ref:O,id:u.buttonId,type:F,"aria-expanded":n.disabled?void 0:u.popoverState===E.Open,"aria-controls":u.panel?u.panelId:void 0,onKeyDown:j,onKeyUp:A,onClick:N};return(0,s.sY)({props:(0,a.gY)({},H,Y),slot:R,defaultTag:"button",name:"Popover.Button"})})),R=s.AN.RenderStrategy|s.AN.Static,F=(0,s.yV)((function e(n,t){var r=k([I.name,e.name].join(".")),o=r[0].popoverState,u=r[1],i=(0,f.T)(t),l="headlessui-popover-overlay-"+(0,v.M)(),p=(0,S.oJ)(),m=null!==p?p===S.ZM.Open:o===E.Open,b=(0,c.useCallback)((function(e){if((0,d.P)(e.currentTarget))return e.preventDefault();u({type:w.ClosePopover})}),[u]),g=(0,c.useMemo)((function(){return{open:o===E.Open}}),[o]),y={ref:i,id:l,"aria-hidden":!0,onClick:b},h=n;return(0,s.sY)({props:(0,a.gY)({},h,y),slot:g,defaultTag:"div",features:R,visible:m,name:"Popover.Overlay"})})),H=s.AN.RenderStrategy|s.AN.Static,Y=(0,s.yV)((function e(n,t){var u=n.focus,i=void 0!==u&&u,l=(0,a.gK)(n,["focus"]),d=k([I.name,e.name].join(".")),v=d[0],m=d[1],h=T([I.name,e.name].join(".")).close,C=(0,c.useRef)(null),O=(0,f.T)(C,t,(function(e){m({type:w.SetPanel,panel:e})})),P=(0,S.oJ)(),x=null!==P?P===S.ZM.Open:v.popoverState===E.Open,j=(0,c.useCallback)((function(e){var n;switch(e.key){case p.R.Escape:if(v.popoverState!==E.Open)return;if(!C.current)return;if(!C.current.contains(document.activeElement))return;e.preventDefault(),e.stopPropagation(),m({type:w.ClosePopover}),null==(n=v.button)||n.focus()}}),[v,C,m]);(0,c.useEffect)((function(){return function(){return m({type:w.SetPanel,panel:null})}}),[m]),(0,c.useEffect)((function(){var e;n.static||v.popoverState!==E.Closed||null!=(e=n.unmount)&&!e||m({type:w.SetPanel,panel:null})}),[v.popoverState,n.unmount,n.static,m]),(0,c.useEffect)((function(){if(i&&v.popoverState===E.Open&&C.current){var e=document.activeElement;C.current.contains(e)||g(C.current,r.First)}}),[i,C,v.popoverState]),y("keydown",(function(e){if(v.popoverState===E.Open&&C.current&&e.key===p.R.Tab&&document.activeElement&&C.current&&C.current.contains(document.activeElement)){e.preventDefault();var n,t=g(C.current,e.shiftKey?r.Previous:r.Next);if(t===o.Underflow)return null==(n=v.button)?void 0:n.focus();if(t===o.Overflow){if(!v.button)return;var u=b(),i=u.indexOf(v.button);g(u.splice(i+1).filter((function(e){var n;return!(null==(n=C.current)?void 0:n.contains(e))})),r.First)===o.Error&&g(document.body,r.First)}}})),y("focus",(function(){var e;i&&v.popoverState===E.Open&&C.current&&((null==(e=C.current)?void 0:e.contains(document.activeElement))||m({type:w.ClosePopover}))}),!0);var L=(0,c.useMemo)((function(){return{open:v.popoverState===E.Open,close:h}}),[v,h]),A={ref:O,id:v.panelId,onKeyDown:j};return c.createElement(M.Provider,{value:v.panelId},(0,s.sY)({props:(0,a.gY)({},l,A),slot:L,defaultTag:"div",features:H,visible:x,name:"Popover.Panel"}))}));I.Button=N,I.Overlay=F,I.Panel=Y,I.Group=function(e){var n=(0,c.useRef)(null),t=(0,c.useState)([]),r=t[0],o=t[1],u=(0,c.useCallback)((function(e){o((function(n){var t=n.indexOf(e);if(-1!==t){var r=n.slice();return r.splice(t,1),r}return n}))}),[o]),i=(0,c.useCallback)((function(e){return o((function(n){return[].concat(n,[e])})),function(){return u(e)}}),[o,u]),l=(0,c.useCallback)((function(){var e,t=document.activeElement;return!!(null==(e=n.current)?void 0:e.contains(t))||r.some((function(e){var n,r;return(null==(n=document.getElementById(e.buttonId))?void 0:n.contains(t))||(null==(r=document.getElementById(e.panelId))?void 0:r.contains(t))}))}),[n,r]),f=(0,c.useCallback)((function(e){for(var n,t=(0,a.Ul)(r);!(n=t()).done;){var o=n.value;o.buttonId!==e&&o.close()}}),[r]),p=(0,c.useMemo)((function(){return{registerPopover:i,unregisterPopover:u,isFocusWithinPopoverGroup:l,closeOthers:f}}),[i,u,l,f]),d=(0,c.useMemo)((function(){return{}}),[]),v={ref:n},m=e;return c.createElement(j.Provider,{value:p},(0,s.sY)({props:(0,a.gY)({},m,v),slot:d,defaultTag:"div",name:"Popover.Group"}))}},9878:function(e,n,t){"use strict";t.d(n,{r:function(){return y}});var r=t(9642),o=t(7294),u=t(8529),i=t(7471),a=t(2659),c=t(9016),l=t(2506),s=t(852),f=(0,o.createContext)(null);function p(){var e=(0,o.useContext)(f);if(null===e){var n=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(n,p),n}return e}var d=t(6637),v=(0,o.createContext)(null);function m(){var e=(0,o.useContext)(v);if(null===e){var n=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(n,m),n}return e}var b=(0,o.createContext)(null);b.displayName="GroupContext";var g=o.Fragment;function y(e){var n=e.checked,t=e.onChange,s=(0,r.gK)(e,["checked","onChange"]),f="headlessui-switch-"+(0,l.M)(),p=(0,o.useContext)(b),v=(0,o.useRef)(null),m=(0,i.T)(v,null===p?null:p.setSwitch),g=(0,o.useCallback)((function(){return t(!n)}),[t,n]),y=(0,o.useCallback)((function(e){if((0,c.P)(e.currentTarget))return e.preventDefault();e.preventDefault(),g()}),[g]),h=(0,o.useCallback)((function(e){e.key!==a.R.Tab&&e.preventDefault(),e.key===a.R.Space&&g()}),[g]),E=(0,o.useCallback)((function(e){return e.preventDefault()}),[]),w=(0,o.useMemo)((function(){return{checked:n}}),[n]),S={id:f,ref:m,role:"switch",type:(0,d.f)(e,v),tabIndex:0,"aria-checked":n,"aria-labelledby":null==p?void 0:p.labelledby,"aria-describedby":null==p?void 0:p.describedby,onClick:y,onKeyUp:h,onKeyPress:E};return(0,u.sY)({props:(0,r.gY)({},s,S),slot:w,defaultTag:"button",name:"Switch"})}y.Group=function(e){var n=(0,o.useState)(null),t=n[0],r=n[1],i=function(){var e=(0,o.useState)([]),n=e[0],t=e[1];return[n.length>0?n.join(" "):void 0,(0,o.useMemo)((function(){return function(e){var n=(0,o.useCallback)((function(e){return t((function(n){return[].concat(n,[e])})),function(){return t((function(n){var t=n.slice(),r=t.indexOf(e);return-1!==r&&t.splice(r,1),t}))}}),[]),r=(0,o.useMemo)((function(){return{register:n,slot:e.slot,name:e.name,props:e.props}}),[n,e.slot,e.name,e.props]);return o.createElement(v.Provider,{value:r},e.children)}}),[t])]}(),a=i[0],c=i[1],l=function(){var e=(0,o.useState)([]),n=e[0],t=e[1];return[n.length>0?n.join(" "):void 0,(0,o.useMemo)((function(){return function(e){var n=(0,o.useCallback)((function(e){return t((function(n){return[].concat(n,[e])})),function(){return t((function(n){var t=n.slice(),r=t.indexOf(e);return-1!==r&&t.splice(r,1),t}))}}),[]),r=(0,o.useMemo)((function(){return{register:n,slot:e.slot,name:e.name,props:e.props}}),[n,e.slot,e.name,e.props]);return o.createElement(f.Provider,{value:r},e.children)}}),[t])]}(),s=l[0],p=l[1],d=(0,o.useMemo)((function(){return{switch:t,setSwitch:r,labelledby:a,describedby:s}}),[t,r,a,s]);return o.createElement(p,{name:"Switch.Description"},o.createElement(c,{name:"Switch.Label",props:{onClick:function(){t&&(t.click(),t.focus({preventScroll:!0}))}}},o.createElement(b.Provider,{value:d},(0,u.sY)({props:e,defaultTag:g,name:"Switch.Group"}))))},y.Label=function(e){var n=e.passive,t=void 0!==n&&n,o=(0,r.gK)(e,["passive"]),i=m(),a="headlessui-label-"+(0,l.M)();(0,s.e)((function(){return i.register(a)}),[a,i.register]);var c=(0,r.gY)({},i.props,{id:a}),f=(0,r.gY)({},o,c);return t&&delete f.onClick,(0,u.sY)({props:f,slot:i.slot||{},defaultTag:"label",name:i.name||"Label"})},y.Description=function(e){var n=p(),t="headlessui-description-"+(0,l.M)();(0,s.e)((function(){return n.register(t)}),[t,n.register]);var o=e,i=(0,r.gY)({},n.props,{id:t});return(0,u.sY)({props:(0,r.gY)({},o,i),slot:n.slot||{},defaultTag:"p",name:n.name||"Description"})}},5685:function(e,n,t){"use strict";t.d(n,{u:function(){return x}});var r=t(9642),o=t(7294),u=t(133),i=t(8529),a=t(852),c=t(5989),l=t(2506);var s,f=t(3980);function p(){var e=[],n={requestAnimationFrame:function(e){function n(){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(){var e=requestAnimationFrame.apply(void 0,arguments);n.add((function(){return cancelAnimationFrame(e)}))})),nextFrame:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];n.requestAnimationFrame((function(){n.requestAnimationFrame.apply(n,t)}))},setTimeout:function(e){function n(){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(){var e=setTimeout.apply(void 0,arguments);n.add((function(){return clearTimeout(e)}))})),add:function(n){e.push(n)},dispose:function(){for(var n,t=(0,r.Ul)(e.splice(0));!(n=t()).done;){var o=n.value;o()}}};return n}function d(e){for(var n,t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];e&&r.length>0&&(n=e.classList).add.apply(n,r)}function v(e){for(var n,t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];e&&r.length>0&&(n=e.classList).remove.apply(n,r)}function m(e,n,t,r,o,u){var i=p(),a=void 0!==u?function(e){var n={called:!1};return function(){if(!n.called)return n.called=!0,e.apply(void 0,arguments)}}(u):function(){};return v.apply(void 0,[e].concat(o)),d.apply(void 0,[e].concat(n,t)),i.nextFrame((function(){v.apply(void 0,[e].concat(t)),d.apply(void 0,[e].concat(r)),i.add(function(e,n){var t=p();if(!e)return t.dispose;var r=getComputedStyle(e),o=[r.transitionDuration,r.transitionDelay].map((function(e){var n=e.split(",").filter(Boolean).map((function(e){return e.includes("ms")?parseFloat(e):1e3*parseFloat(e)})).sort((function(e,n){return n-e}))[0];return void 0===n?0:n})),u=o[0],i=o[1];return 0!==u?t.setTimeout((function(){n(s.Finished)}),u+i):n(s.Finished),t.add((function(){return n(s.Cancelled)})),t.dispose}(e,(function(t){return v.apply(void 0,[e].concat(r,n)),d.apply(void 0,[e].concat(o)),a(t)})))})),i.add((function(){return v.apply(void 0,[e].concat(n,t,r,o))})),i.add((function(){return a(s.Cancelled)})),i.dispose}function b(e){return void 0===e&&(e=""),(0,o.useMemo)((function(){return e.split(" ").filter((function(e){return e.trim().length>1}))}),[e])}!function(e){e.Finished="finished",e.Cancelled="cancelled"}(s||(s={}));var g,y=(0,o.createContext)(null);y.displayName="TransitionContext",function(e){e.Visible="visible",e.Hidden="hidden"}(g||(g={}));var h=(0,o.createContext)(null);function E(e){return"children"in e?E(e.children):e.current.filter((function(e){return e.state===g.Visible})).length>0}function w(e){var n=(0,o.useRef)(e),t=(0,o.useRef)([]),r=function(){var e=(0,o.useRef)(!1);return(0,o.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),e}();(0,o.useEffect)((function(){n.current=e}),[e]);var a=(0,o.useCallback)((function(e,o){var a;void 0===o&&(o=i.l4.Hidden);var c=t.current.findIndex((function(n){return n.id===e}));-1!==c&&((0,u.E)(o,((a={})[i.l4.Unmount]=function(){t.current.splice(c,1)},a[i.l4.Hidden]=function(){t.current[c].state=g.Hidden},a)),!E(t)&&r.current&&(null==n.current||n.current()))}),[n,r,t]),c=(0,o.useCallback)((function(e){var n=t.current.find((function(n){return n.id===e}));return n?n.state!==g.Visible&&(n.state=g.Visible):t.current.push({id:e,state:g.Visible}),function(){return a(e,i.l4.Unmount)}}),[t,a]);return(0,o.useMemo)((function(){return{children:t,register:c,unregister:a}}),[c,a,t])}function S(){}h.displayName="NestingContext";var C=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function O(e){for(var n,t={},o=(0,r.Ul)(C);!(n=o()).done;){var u,i=n.value;t[i]=null!=(u=e[i])?u:S}return t}var P=i.AN.RenderStrategy;function k(e){var n,t=e.beforeEnter,p=e.afterEnter,d=e.beforeLeave,v=e.afterLeave,S=e.enter,C=e.enterFrom,k=e.enterTo,x=e.entered,T=e.leave,j=e.leaveFrom,L=e.leaveTo,M=(0,r.gK)(e,["beforeEnter","afterEnter","beforeLeave","afterLeave","enter","enterFrom","enterTo","entered","leave","leaveFrom","leaveTo"]),A=(0,o.useRef)(null),I=(0,o.useState)(g.Visible),N=I[0],R=I[1],F=M.unmount?i.l4.Unmount:i.l4.Hidden,H=function(){var e=(0,o.useContext)(y);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),Y=H.show,D=H.appear,U=H.initial,V=function(){var e=(0,o.useContext)(h);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),B=V.register,K=V.unregister,_=(0,l.M)(),W=(0,o.useRef)(!1),z=w((function(){W.current||(R(g.Hidden),K(_),ee.current.afterLeave())}));(0,a.e)((function(){if(_)return B(_)}),[B,_]),(0,a.e)((function(){var e;F===i.l4.Hidden&&_&&(Y&&N!==g.Visible?R(g.Visible):(0,u.E)(N,((e={})[g.Hidden]=function(){return K(_)},e[g.Visible]=function(){return B(_)},e)))}),[N,_,B,K,Y,F]);var Z=b(S),G=b(C),q=b(k),J=b(x),$=b(T),Q=b(j),X=b(L),ee=function(e){var n=(0,o.useRef)(O(e));return(0,o.useEffect)((function(){n.current=O(e)}),[e]),n}({beforeEnter:t,afterEnter:p,beforeLeave:d,afterLeave:v}),ne=(0,c.H)();(0,o.useEffect)((function(){if(ne&&N===g.Visible&&null===A.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[A,N,ne]);var te=U&&!D;(0,a.e)((function(){var e=A.current;if(e&&!te)return W.current=!0,Y&&ee.current.beforeEnter(),Y||ee.current.beforeLeave(),Y?m(e,Z,G,q,J,(function(e){W.current=!1,e===s.Finished&&ee.current.afterEnter()})):m(e,$,Q,X,J,(function(e){W.current=!1,e===s.Finished&&(E(z)||(R(g.Hidden),K(_),ee.current.afterLeave()))}))}),[ee,_,W,K,z,A,te,Y,Z,G,q,$,Q,X]);var re={ref:A},oe=M;return o.createElement(h.Provider,{value:z},o.createElement(f.up,{value:(0,u.E)(N,(n={},n[g.Visible]=f.ZM.Open,n[g.Hidden]=f.ZM.Closed,n))},(0,i.sY)({props:(0,r.gY)({},oe,re),defaultTag:"div",features:P,visible:N===g.Visible,name:"Transition.Child"})))}function x(e){var n,t=e.show,a=e.appear,c=void 0!==a&&a,l=e.unmount,s=(0,r.gK)(e,["show","appear","unmount"]),p=(0,f.oJ)();void 0===t&&null!==p&&(t=(0,u.E)(p,((n={})[f.ZM.Open]=!0,n[f.ZM.Closed]=!1,n)));if(![!0,!1].includes(t))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");var d=(0,o.useState)(t?g.Visible:g.Hidden),v=d[0],m=d[1],b=w((function(){m(g.Hidden)})),S=function(){var e=(0,o.useRef)(!0);return(0,o.useEffect)((function(){e.current=!1}),[]),e.current}(),C=(0,o.useMemo)((function(){return{show:t,appear:c||!S,initial:S}}),[t,c,S]);(0,o.useEffect)((function(){t?m(g.Visible):E(b)||m(g.Hidden)}),[t,b]);var O={unmount:l};return o.createElement(h.Provider,{value:b},o.createElement(y.Provider,{value:C},(0,i.sY)({props:(0,r.gY)({},O,{as:o.Fragment,children:o.createElement(k,Object.assign({},O,s))}),defaultTag:o.Fragment,features:P,visible:v===g.Visible,name:"Transition"})))}x.Child=function(e){var n=null!==(0,o.useContext)(y),t=null!==(0,f.oJ)();return!n&&t?o.createElement(x,Object.assign({},e)):o.createElement(k,Object.assign({},e))},x.Root=x},2506:function(e,n,t){"use strict";t.d(n,{M:function(){return c}});var r=t(7294),o=t(852),u=t(5989),i=0;function a(){return++i}function c(){var e=(0,u.H)(),n=(0,r.useState)(e?a:null),t=n[0],i=n[1];return(0,o.e)((function(){null===t&&i(a())}),[t]),null!=t?""+t:void 0}},852:function(e,n,t){"use strict";t.d(n,{e:function(){return o}});var r=t(7294),o="undefined"!==typeof window?r.useLayoutEffect:r.useEffect},6637:function(e,n,t){"use strict";t.d(n,{f:function(){return i}});var r=t(7294),o=t(852);function u(e){var n;if(e.type)return e.type;var t=null!=(n=e.as)?n:"button";return"string"===typeof t&&"button"===t.toLowerCase()?"button":void 0}function i(e,n){var t=(0,r.useState)((function(){return u(e)})),i=t[0],a=t[1];return(0,o.e)((function(){a(u(e))}),[e.type,e.as]),(0,o.e)((function(){i||n.current&&n.current instanceof HTMLButtonElement&&!n.current.hasAttribute("type")&&a("button")}),[i,n]),i}},5989:function(e,n,t){"use strict";t.d(n,{H:function(){return u}});var r=t(7294),o={serverHandoffComplete:!1};function u(){var e=(0,r.useState)(o.serverHandoffComplete),n=e[0],t=e[1];return(0,r.useEffect)((function(){!0!==n&&t(!0)}),[n]),(0,r.useEffect)((function(){!1===o.serverHandoffComplete&&(o.serverHandoffComplete=!0)}),[]),n}},7471:function(e,n,t){"use strict";t.d(n,{T:function(){return u}});var r=t(9642),o=t(7294);function u(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var u=(0,o.useRef)(n);return(0,o.useEffect)((function(){u.current=n}),[n]),(0,o.useCallback)((function(e){for(var n,t=(0,r.Ul)(u.current);!(n=t()).done;){var o=n.value;null!=o&&("function"===typeof o?o(e):o.current=e)}}),[u])}},3980:function(e,n,t){"use strict";t.d(n,{up:function(){return a},ZM:function(){return r},oJ:function(){return i}});var r,o=t(7294),u=(0,o.createContext)(null);function i(){return(0,o.useContext)(u)}function a(e){var n=e.value,t=e.children;return o.createElement(u.Provider,{value:n},t)}u.displayName="OpenClosedContext",function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(r||(r={}))},9016:function(e,n,t){"use strict";function r(e){for(var n,t,r=e.parentElement,o=null;r&&!(r instanceof HTMLFieldSetElement);)r instanceof HTMLLegendElement&&(o=r),r=r.parentElement;var u=null!=(n=""===(null==(t=r)?void 0:t.getAttribute("disabled")))&&n;return(!u||!function(e){if(!e)return!1;var n=e.previousElementSibling;for(;null!==n;){if(n instanceof HTMLLegendElement)return!1;n=n.previousElementSibling}return!0}(o))&&u}t.d(n,{P:function(){return r}})},133:function(e,n,t){"use strict";function r(e,n){if(e in n){for(var t=n[e],o=arguments.length,u=new Array(o>2?o-2:0),i=2;i<o;i++)u[i-2]=arguments[i];return"function"===typeof t?t.apply(void 0,u):t}var a=new Error('Tried to handle "'+e+'" but there is no handler defined. Only defined handlers are: '+Object.keys(n).map((function(e){return'"'+e+'"'})).join(", ")+".");throw Error.captureStackTrace&&Error.captureStackTrace(a,r),a}t.d(n,{E:function(){return r}})},8529:function(e,n,t){"use strict";t.d(n,{AN:function(){return r},l4:function(){return o},yV:function(){return s},sY:function(){return c}});var r,o,u=t(9642),i=t(7294),a=t(133);function c(e){var n=e.props,t=e.slot,i=e.defaultTag,c=e.features,s=e.visible,f=void 0===s||s,p=e.name;if(f)return l(n,t,i,p);var d=null!=c?c:r.None;if(d&r.Static){var v=n.static,m=void 0!==v&&v,b=(0,u.gK)(n,["static"]);if(m)return l(b,t,i,p)}if(d&r.RenderStrategy){var g,y=n.unmount,h=void 0===y||y,E=(0,u.gK)(n,["unmount"]),w=h?o.Unmount:o.Hidden;return(0,a.E)(w,((g={})[o.Unmount]=function(){return null},g[o.Hidden]=function(){return l((0,u.gY)({},E,{hidden:!0,style:{display:"none"}}),t,i,p)},g))}return l(n,t,i,p)}function l(e,n,t,r){var o;void 0===n&&(n={});var a=f(e,["unmount","static"]),c=a.as,l=void 0===c?t:c,s=a.children,p=a.refName,d=void 0===p?"ref":p,v=(0,u.gK)(a,["as","children","refName"]),m=void 0!==e.ref?((o={})[d]=e.ref,o):{},b="function"===typeof s?s(n):s;if(v.className&&"function"===typeof v.className&&(v.className=v.className(n)),l===i.Fragment&&Object.keys(v).length>0){if(!(0,i.isValidElement)(b)||Array.isArray(b)&&b.length>1)throw new Error(['Passing props on "Fragment"!',"","The current component <"+r+' /> is rendering a "Fragment".',"However we need to passthrough the following props:",Object.keys(v).map((function(e){return"  - "+e})).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((function(e){return"  - "+e})).join("\n")].join("\n"));return(0,i.cloneElement)(b,Object.assign({},function(e,n,t){for(var r,o=Object.assign({},e),i=function(){var t,u=r.value;void 0!==e[u]&&void 0!==n[u]&&Object.assign(o,((t={})[u]=function(t){t.defaultPrevented||e[u](t),t.defaultPrevented||n[u](t)},t))},a=(0,u.Ul)(t);!(r=a()).done;)i();return o}(function(e){var n=Object.assign({},e);for(var t in n)void 0===n[t]&&delete n[t];return n}(f(v,["ref"])),b.props,["onClick"]),m))}return(0,i.createElement)(l,Object.assign({},f(v,["ref"]),l!==i.Fragment&&m),b)}function s(e){var n;return Object.assign((0,i.forwardRef)(e),{displayName:null!=(n=e.displayName)?n:e.name})}function f(e,n){void 0===n&&(n=[]);for(var t,r=Object.assign({},e),o=(0,u.Ul)(n);!(t=o()).done;){var i=t.value;i in r&&delete r[i]}return r}!function(e){e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static"}(r||(r={})),function(e){e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden"}(o||(o={}))},2703:function(e,n,t){"use strict";var r=t(414);function o(){}function u(){}u.resetWarningCache=o,e.exports=function(){function e(e,n,t,o,u,i){if(i!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function n(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:u,resetWarningCache:o};return t.PropTypes=t,t}},5697:function(e,n,t){e.exports=t(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},6702:function(e,n,t){"use strict";var r=t(7294),o=t(5697),u=t.n(o);function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=(0,r.forwardRef)((function(e,n){var t=e.color,o=void 0===t?"currentColor":t,u=e.size,c=void 0===u?24:u,l=a(e,["color","size"]);return r.createElement("svg",i({ref:n,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.createElement("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}))}));c.propTypes={color:u().string,size:u().oneOfType([u().string,u().number])},c.displayName="GitHub",n.Z=c},9318:function(e,n,t){"use strict";var r=t(7294),o=t(5697),u=t.n(o);function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=(0,r.forwardRef)((function(e,n){var t=e.color,o=void 0===t?"currentColor":t,u=e.size,c=void 0===u?24:u,l=a(e,["color","size"]);return r.createElement("svg",i({ref:n,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.createElement("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),r.createElement("rect",{x:"2",y:"9",width:"4",height:"12"}),r.createElement("circle",{cx:"4",cy:"4",r:"2"}))}));c.propTypes={color:u().string,size:u().oneOfType([u().string,u().number])},c.displayName="Linkedin",n.Z=c},8357:function(e,n,t){"use strict";t.d(n,{w_:function(){return l}});var r=t(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},u=r.createContext&&r.createContext(o),i=function(){return(i=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)},a=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t};function c(e){return e&&e.map((function(e,n){return r.createElement(e.tag,i({key:n},e.attr),c(e.child))}))}function l(e){return function(n){return r.createElement(s,i({attr:i({},e.attr)},n),c(e.child))}}function s(e){var n=function(n){var t,o=e.attr,u=e.size,c=e.title,l=a(e,["attr","size","title"]),s=u||n.size||"1em";return n.className&&(t=n.className),e.className&&(t=(t?t+" ":"")+e.className),r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,o,l,{className:t,style:i(i({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==u?r.createElement(u.Consumer,null,(function(e){return n(e)})):n(o)}},3801:function(e,n,t){"use strict";t.d(n,{Oqj:function(){return o},b0D:function(){return u}});var r=t(7294);var o=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"}))};var u=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}))}}}]);