import*as e from"react";var r={141:(e,r,t)=>{t.d(r,{Z:()=>i});var A=t(537),n=t.n(A),o=t(645),a=t.n(o)()(n());a.push([e.id,'.cat--responsive,.cat--huge,.cat--large,.cat--medium,.cat--small,.cat--xsmall,.cat--smallest{position:relative;aspect-ratio:1;z-index:0}.cat--smallest{font-size:50px;width:1em}.cat--xsmall{font-size:100px;width:1em}.cat--small{font-size:150px;width:1em}.cat--medium{font-size:200px;width:1em}.cat--large{font-size:250px;width:1em}.cat--huge{font-size:300px;width:1em}.cat--responsive{font-size:100%;width:1em}.head{background-color:#33292a;font-size:inherit;width:.75em;height:.45em;border-radius:.15em;display:flex;position:relative}.ears{position:absolute;font-size:inherit;top:-0.15em;width:0px;height:0px}.ears__left,.ears__right{border-style:solid;font-size:inherit;border-width:.15em 0px .15em .175em;border-color:rgba(0,0,0,0) rgba(0,0,0,0) #33292a #33292a;position:absolute;left:.05em;z-index:-1}.ears__left::before,.ears__right::before{content:"";font-size:inherit;border-style:solid;border-width:.25em .15em .15em .15em;border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) #dc6a47;position:absolute;top:-0.15em;left:-0.175em}.ears__right{left:.525em;transform:scale(-1, 1)}.face{position:absolute;font-size:inherit;left:50%;top:50%;transform:translate(-50%, -50%);z-index:1}.eyes{font-size:inherit;width:.475em;margin-bottom:.05em;display:flex;justify-content:space-between}.eyes__left,.eyes__right{font-size:inherit;background:#252324;border:.02em solid #d2873b;width:.125em;height:.125em;border-radius:50%;display:flex;align-items:center;justify-content:center}.mouth{font-size:inherit;border-style:solid;border-width:.035em;border-color:#dc6a47 rgba(0,0,0,0) #dc6a47 rgba(0,0,0,0);position:absolute;left:50%;transform:translateX(-50%);top:.125em}.mouth::before{font-size:inherit;content:"";position:absolute;border-style:solid;border-width:.03em;border-color:rgba(0,0,0,0) rgba(0,0,0,0) #33292a rgba(0,0,0,0);position:absolute;transform:translate(-50%, -50%);top:.007em}.body{font-size:inherit;width:.7em;height:.5em;border-top-right-radius:.25em;position:absolute;left:.15em;background:#33292a}.body::after{content:"";width:1.15em;height:.1em;background:#33292a;border-top-right-radius:.25em;border-bottom-right-radius:.25em;position:absolute;left:0px;bottom:-0.1em}.paw{font-size:inherit;width:.1em;height:.2em;border-radius:.1em;background:#33292a;position:absolute;bottom:-0.15em;z-index:-1;box-shadow:.25em 0 0 #33292a}',"",{version:3,sources:["webpack://./src/cat/styles.scss"],names:[],mappings:"AAUA,6FACI,iBAAA,CACA,cAAA,CACA,SAAA,CAIA,eACI,cAlBG,CAmBH,SAAA,CAFJ,aACI,eAlBG,CAmBH,SAAA,CAFJ,YACI,eAlBG,CAmBH,SAAA,CAFJ,aACI,eAlBG,CAmBH,SAAA,CAFJ,YACI,eAlBG,CAmBH,SAAA,CAFJ,WACI,eAlBG,CAmBH,SAAA,CAFJ,iBACI,cAlBG,CAmBH,SAAA,CAKR,MACI,wBAAA,CACA,iBAAA,CACA,WAAA,CACA,YAAA,CACA,mBAAA,CACA,YAAA,CACA,iBAAA,CAEJ,MACI,iBAAA,CACA,iBAAA,CACA,WAAA,CACA,SAAA,CACA,UAAA,CACA,yBAEI,kBAAA,CACA,iBAAA,CACA,mCAAA,CACA,wDAAA,CACA,iBAAA,CACA,UAAA,CACA,UAAA,CAEA,yCACI,UAAA,CACA,iBAAA,CACA,kBAAA,CACA,oCAAA,CACA,8DAAA,CACA,iBAAA,CACA,WAAA,CACA,aAAA,CAGR,aACI,WAAA,CACA,sBAAA,CAIR,MACI,iBAAA,CACA,iBAAA,CACA,QAAA,CACA,OAAA,CACA,+BAAA,CACA,SAAA,CAEJ,MACI,iBAAA,CACA,YAAA,CACA,mBAAA,CACA,YAAA,CACA,6BAAA,CAEA,yBAEI,iBAAA,CACA,kBAAA,CACA,0BAAA,CACA,YAAA,CACA,aAAA,CACA,iBAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CAGR,OACI,iBAAA,CACA,kBAAA,CACA,mBAAA,CACA,wDAAA,CACA,iBAAA,CACA,QAAA,CACA,0BAAA,CACA,UAAA,CAEA,eACI,iBAAA,CACA,UAAA,CACA,iBAAA,CACA,kBAAA,CACA,kBAAA,CACA,8DAAA,CACA,iBAAA,CACA,+BAAA,CACA,UAAA,CAIR,MACI,iBAAA,CACA,UAAA,CACA,WAAA,CACA,6BAAA,CACA,iBAAA,CACA,UAAA,CACA,kBAAA,CAEA,aACI,UAAA,CACA,YAAA,CACA,WAAA,CACA,kBAAA,CACA,6BAAA,CACA,gCAAA,CACA,iBAAA,CACA,QAAA,CACA,aAAA,CAGR,KACI,iBAAA,CACA,UAAA,CACA,WAAA,CACA,kBAAA,CACA,kBAAA,CACA,iBAAA,CACA,cAAA,CACA,UAAA,CACA,4BAAA",sourcesContent:["$size-map: (\r\n    smallest: 50px,\r\n    xsmall: 100px,\r\n    small: 150px,\r\n    medium: 200px,\r\n    large: 250px,\r\n    huge: 300px,\r\n    responsive: 100%,\r\n);\r\n\r\n%cat {\r\n    position: relative;\r\n    aspect-ratio: 1;\r\n    z-index: 0;\r\n}\r\n\r\n@each $name, $size in $size-map {\r\n    .cat--#{$name} {\r\n        font-size: $size;\r\n        width: 1em;\r\n        @extend %cat;\r\n    }\r\n}\r\n\r\n.head {\r\n    background-color: #33292a;\r\n    font-size: inherit;\r\n    width: 0.75em;\r\n    height: 0.45em;\r\n    border-radius: 0.15em;\r\n    display: flex;\r\n    position: relative;\r\n}\r\n.ears {\r\n    position: absolute;\r\n    font-size: inherit;\r\n    top: -0.15em;\r\n    width: 0px;\r\n    height: 0px;\r\n    &__left,\r\n    &__right {\r\n        border-style: solid;\r\n        font-size: inherit;\r\n        border-width: 0.15em 0px 0.15em 0.175em;\r\n        border-color: transparent transparent #33292a #33292a;\r\n        position: absolute;\r\n        left: 0.05em;\r\n        z-index: -1;\r\n\r\n        &::before {\r\n            content: '';\r\n            font-size: inherit;\r\n            border-style: solid;\r\n            border-width: 0.25em 0.15em 0.15em 0.15em;\r\n            border-color: transparent transparent transparent #dc6a47;\r\n            position: absolute;\r\n            top: -0.15em;\r\n            left: -0.175em;\r\n        }\r\n    }\r\n    &__right {\r\n        left: 0.525em;\r\n        transform: scale(-1, 1);\r\n    }\r\n}\r\n\r\n.face {\r\n    position: absolute;\r\n    font-size: inherit;\r\n    left: 50%;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%);\r\n    z-index: 1;\r\n}\r\n.eyes {\r\n    font-size: inherit;\r\n    width: 0.475em;\r\n    margin-bottom: 0.05em;\r\n    display: flex;\r\n    justify-content: space-between;\r\n\r\n    &__left,\r\n    &__right {\r\n        font-size: inherit;\r\n        background: #252324;\r\n        border: 0.02em solid #d2873b;\r\n        width: 0.125em;\r\n        height: 0.125em;\r\n        border-radius: 50%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n}\r\n.mouth {\r\n    font-size: inherit;\r\n    border-style: solid;\r\n    border-width: 0.035em;\r\n    border-color: #dc6a47 transparent #dc6a47 transparent;\r\n    position: absolute;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    top: 0.125em;\r\n\r\n    &::before {\r\n        font-size: inherit;\r\n        content: '';\r\n        position: absolute;\r\n        border-style: solid;\r\n        border-width: 0.03em;\r\n        border-color: transparent transparent #33292a transparent;\r\n        position: absolute;\r\n        transform: translate(-50%, -50%);\r\n        top: 0.007em;\r\n    }\r\n}\r\n\r\n.body {\r\n    font-size: inherit;\r\n    width: 0.7em;\r\n    height: 0.5em;\r\n    border-top-right-radius: 0.25em;\r\n    position: absolute;\r\n    left: 0.15em;\r\n    background: #33292a;\r\n\r\n    &::after {\r\n        content: '';\r\n        width: 1.15em;\r\n        height: 0.1em;\r\n        background: #33292a;\r\n        border-top-right-radius: 0.25em;\r\n        border-bottom-right-radius: 0.25em;\r\n        position: absolute;\r\n        left: 0px;\r\n        bottom: -0.1em;\r\n    }\r\n}\r\n.paw {\r\n    font-size: inherit;\r\n    width: 0.1em;\r\n    height: 0.2em;\r\n    border-radius: 0.1em;\r\n    background: #33292a;\r\n    position: absolute;\r\n    bottom: -0.15em;\r\n    z-index: -1;\r\n    box-shadow: 0.25em 0 0 #33292a;\r\n}\r\n"],sourceRoot:""}]);const i=a},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t="",A=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),A&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=e(r),A&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(e,t,A,n,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(A)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(a[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);A&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),n&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=n):d[4]="".concat(n)),r.push(d))}},r}},537:e=>{e.exports=function(e){var r=e[1],t=e[3];if(!t)return r;if("function"==typeof btoa){var A=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(A),o="/*# ".concat(n," */");return[r].concat([o]).join("\n")}return[r].join("\n")}},379:e=>{var r=[];function t(e){for(var t=-1,A=0;A<r.length;A++)if(r[A].identifier===e){t=A;break}return t}function A(e,A){for(var o={},a=[],i=0;i<e.length;i++){var s=e[i],l=A.base?s[0]+A.base:s[0],d=o[l]||0,C="".concat(l," ").concat(d);o[l]=d+1;var c=t(C),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==c)r[c].references++,r[c].updater(m);else{var p=n(m,A);A.byIndex=i,r.splice(i,0,{identifier:C,updater:p,references:1})}a.push(C)}return a}function n(e,r){var t=r.domAPI(r);return t.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;t.update(e=r)}else t.remove()}}e.exports=function(e,n){var o=A(e=e||[],n=n||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var i=t(o[a]);r[i].references--}for(var s=A(e,n),l=0;l<o.length;l++){var d=t(o[l]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}o=s}}},569:e=>{var r={};e.exports=function(e,t){var A=function(e){if(void 0===r[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}r[e]=t}return r[e]}(e);if(!A)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");A.appendChild(t)}},216:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:(e,r,t)=>{e.exports=function(e){var r=t.nc;r&&e.setAttribute("nonce",r)}},795:e=>{e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(t){!function(e,r,t){var A="";t.supports&&(A+="@supports (".concat(t.supports,") {")),t.media&&(A+="@media ".concat(t.media," {"));var n=void 0!==t.layer;n&&(A+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),A+=t.css,n&&(A+="}"),t.media&&(A+="}"),t.supports&&(A+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(A+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),r.styleTagTransform(A,e,r.options)}(r,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}}},t={};function A(e){var n=t[e];if(void 0!==n)return n.exports;var o=t[e]={id:e,exports:{}};return r[e](o,o.exports,A),o.exports}A.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return A.d(r,{a:r}),r},A.d=(e,r)=>{for(var t in r)A.o(r,t)&&!A.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},A.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),A.nc=void 0;var n={};(()=>{A.d(n,{K:()=>v});const r=(t={default:()=>e.default},o={},A.d(o,t),o);var t,o,a=A(379),i=A.n(a),s=A(795),l=A.n(s),d=A(569),C=A.n(d),c=A(565),m=A.n(c),p=A(216),u=A.n(p),f=A(589),h=A.n(f),b=A(141),g={};g.styleTagTransform=h(),g.setAttributes=m(),g.insert=C().bind(null,"head"),g.domAPI=l(),g.insertStyleElement=u(),i()(b.Z,g),b.Z&&b.Z.locals&&b.Z.locals;const v=({size:e="medium"})=>r.default.createElement("div",{className:`cat--${e}`},r.default.createElement("div",{className:"head"},r.default.createElement("div",{className:"ears"},r.default.createElement("div",{className:"ears__left"}),r.default.createElement("div",{className:"ears__right"})),r.default.createElement("div",{className:"face"},r.default.createElement("div",{className:"eyes"},r.default.createElement("div",{className:"eyes__left"}),r.default.createElement("div",{className:"eyes__right"})),r.default.createElement("div",{className:"mouth"}))),r.default.createElement("div",{className:"body"},r.default.createElement("div",{className:"paw"})))})();var o=n.K;export{o as Cat};
//# sourceMappingURL=index.js.map