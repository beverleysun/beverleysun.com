(this["webpackJsonpbeverleysun.com"]=this["webpackJsonpbeverleysun.com"]||[]).push([[0],{63:function(e,t,r){},64:function(e,t,r){},65:function(e,t,r){"use strict";r.r(t);var l=r(2),a=r(1),n=r.n(a),c=r(6),o=r.n(c),i=r(3),s=r(4);function d(e){var t=e.height,r=void 0===t?"20vh":t,a=e.color,n=void 0===a?"#eee":a;return Object(l.jsx)("div",{style:{height:r,backgroundColor:n,width:"100vw"}})}var j=r(27),u=r(11),p=r(10);function m(e){var t=e.to,r=void 0===t?"":t,n=e.color,c=void 0===n?"#fff":n,o=e.toolTip,d=void 0===o?"":o,m=e.style,f=void 0===m?{}:m,b=Object(a.useState)(!1),h=Object(i.a)(b,2),v=h[0],y=h[1];function O(){y(!v)}return Object(l.jsx)(s.Spring,{to:{size:v?"60px":"40px",marginLeft:v?"-10px":"0",marginBottom:v?"-20px":"0",opacity:v?1:0},children:function(e){return Object(l.jsxs)("div",{style:Object(j.a)({display:"flex",justifyContent:"row",alignItems:"center",marginTop:"1.5rem"},f),children:[Object(l.jsx)(p.Link,{to:r,smooth:!0,onMouseEnter:O,onMouseLeave:O,style:{overflow:"hidden"},children:Object(l.jsx)(u.a,{color:c,size:e.size,style:{cursor:"pointer",marginLeft:"".concat(e.marginLeft),marginBottom:"".concat(e.marginBottom)}})}),Object(l.jsx)("h5",{style:{color:"".concat(c),opacity:"".concat(e.opacity),display:"inline-block"},children:d})]})}})}var f="#fff",b="#0044ba",h="#000",v=r(17);function y(e){var t=e.title,r=void 0===t?"Title":t,a=e.style,n=void 0===a?{}:a,c=e.textColor,o=void 0===c?"white":c,i=e.downArrowTo,d=void 0===i?"":i,j=e.downArrowToolTip,u=void 0===j?"":j,p=[];return p.push(Object(l.jsxs)("div",{children:[Object(l.jsx)("a",{href:"https://github.com/beverleysun",target:"_blank",style:{marginRight:"15px"},rel:"noreferrer",children:Object(l.jsx)(v.a,{color:f,size:"40px"})},"1"),Object(l.jsx)("a",{href:"https://www.linkedin.com/in/beverley-sun/",target:"_blank",rel:"noreferrer",children:Object(l.jsx)(v.b,{color:f,size:"40px"})},"2")]}),Object(l.jsx)("h1",{style:{color:"".concat(o)},children:r},"3"),Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{style:{color:"".concat(o),display:"flex"},children:[Object(l.jsx)("div",{style:{paddingRight:"10px"},children:"\u2022"}),Object(l.jsx)("p",{children:"Part III Software Engineering student at the University of Auckland"})]}),Object(l.jsxs)("div",{style:{color:"".concat(o),display:"flex"},children:[Object(l.jsx)("div",{style:{paddingRight:"10px"},children:"\u2022"}),Object(l.jsx)("p",{children:"Always looking to learn"})]}),Object(l.jsxs)("div",{style:{color:"".concat(o),display:"flex"},children:[Object(l.jsx)("div",{style:{paddingRight:"10px"},children:"\u2022"}),Object(l.jsx)("p",{children:"Loves dogs"})]})]},"4"),Object(l.jsx)("div",{children:Object(l.jsx)(m,{to:d,color:f,toolTip:u})},"5")),Object(l.jsx)("div",{style:n,className:"section-content",children:Object(l.jsx)(s.Trail,{from:{marginTop:"-10rem"},to:{marginTop:"0"},config:s.config.gentle,items:p,keys:function(e){return e.key},delay:"500",children:function(e){return function(t){return Object(l.jsx)("div",{style:t,className:"with-p",children:e})}}})})}function O(e){for(var t=e.downArrowTo,r=void 0===t?"":t,n=e.title,c=void 0===n?"Title":n,o=e.downArrowToolTip,j=void 0===o?"":o,u=e.id,p=void 0===u?"":u,m=Object(a.useState)(!1),f=Object(i.a)(m,2),h=f[0],v=f[1],O=b,g=[],x=0;x<5;x++)g.push(Object(l.jsx)(d,{height:"20vh",color:O},x));return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"section",style:{position:"absolute"},children:Object(l.jsx)(y,{title:c,downArrowTo:r,downArrowToolTip:j,style:{paddingBottom:"100px"}})}),Object(l.jsx)("div",{style:{width:"100vw",height:"100vh"},id:p,children:h?Object(l.jsx)("div",{style:{height:"100vh",width:"100vw",backgroundColor:"".concat(O)}}):Object(l.jsx)(s.Trail,{items:g,from:{marginLeft:"-100vw"},to:{marginLeft:"0"},keys:function(e){return e.key},config:s.config.slow,onRest:function(){return setTimeout((function(){return v(!0)}),1200)},children:function(e){return function(t){return Object(l.jsx)("div",{style:t,children:e})}}})})]})}function g(e){var t=e.to,r=void 0===t?"":t,n=e.color,c=void 0===n?"#fff":n,o=e.toolTip,d=void 0===o?"":o,j=Object(a.useState)(!1),m=Object(i.a)(j,2),f=m[0],b=m[1];function h(){b(!f)}return Object(l.jsx)(s.Spring,{to:{size:f?"60px":"40px",marginLeft:f?"-10px":"0",marginTop:f?"-20px":"0",opacity:f?"1":"0"},children:function(e){return Object(l.jsxs)("div",{style:{display:"flex",justifyContent:"row",alignItems:"center"},children:[Object(l.jsx)(p.Link,{to:r,smooth:!0,onMouseEnter:h,onMouseLeave:h,style:{overflow:"hidden"},children:Object(l.jsx)(u.b,{color:c,size:e.size,style:{cursor:"pointer",marginLeft:"".concat(e.marginLeft),marginTop:"".concat(e.marginTop)}})}),Object(l.jsx)("h5",{style:{color:"".concat(c),opacity:"".concat(e.opacity)},children:d})]})}})}function x(e){var t=e.upArrowTo,r=void 0===t?"":t,a=e.downArrowTo,n=void 0===a?"":a,c=e.upArrowToolTip,o=void 0===c?"":c,i=e.downArrowToolTip,s=void 0===i?"":i,d=e.id,j=void 0===d?"":d;return Object(l.jsx)("div",{className:"section",style:{backgroundColor:"".concat(f)},id:j,children:Object(l.jsxs)("div",{className:"section-content",children:[Object(l.jsx)(g,{to:r,color:h,toolTip:o}),Object(l.jsx)("h1",{style:{color:"".concat(h)},children:"About Me"}),Object(l.jsxs)("div",{className:"with-p",children:[Object(l.jsx)("p",{style:{color:"".concat(h)},children:"Hey there! I'm a Penultimate Year Software Engineering Student at the University of Auckland. I'm passionate about what I do with a firm appreciation for good design. I enjoy photography, painting, hiking, running, and playing with dogs."}),Object(l.jsx)("sub",{style:{color:"".concat(h)},children:"If only I had a dog."})]}),Object(l.jsx)(m,{to:n,color:h,toolTip:s})]})})}function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e}).apply(this,arguments)}function E(e,t){if(null==e)return{};var r,l,a=function(e,t){if(null==e)return{};var r,l,a={},n=Object.keys(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var L=a.createElement("defs",null,a.createElement("style",null,".cls-1{fill:#fff;}")),A=a.createElement("g",{id:"Layer_2","data-name":"Layer 2"},a.createElement("g",{id:"Layer_1-2","data-name":"Layer 1"},a.createElement("path",{className:"cls-1",d:"M120.24,270a24.71,24.71,0,0,1-12.38-3.31L12.39,211.57A24.84,24.84,0,0,1,0,190.12V79.88A24.84,24.84,0,0,1,12.39,58.43L107.86,3.31h0a24.84,24.84,0,0,1,24.77,0L228.1,58.43a24.83,24.83,0,0,1,12.38,21.45V190.12a24.83,24.83,0,0,1-12.38,21.45l-95.47,55.12A24.75,24.75,0,0,1,120.24,270ZM115,15.73,19.56,70.85a10.46,10.46,0,0,0-5.22,9V190.12a10.46,10.46,0,0,0,5.22,9L115,254.27a10.43,10.43,0,0,0,10.42,0l95.48-55.12a10.47,10.47,0,0,0,5.21-9V79.88a10.47,10.47,0,0,0-5.21-9L125.45,15.73a10.43,10.43,0,0,0-10.42,0Z"}),a.createElement("path",{className:"cls-1",d:"M225.79,73a28.87,28.87,0,0,0-29.15-.08l-75.92,43.5A29.25,29.25,0,0,0,106,141.72V231a29.14,29.14,0,0,0,43.72,25.34l75.91-43.5a29.25,29.25,0,0,0,14.69-25.34V98.22A28.89,28.89,0,0,0,225.79,73ZM152.93,217.33v19.85a2.31,2.31,0,0,1-1.16,2l-4,2.32a2.31,2.31,0,0,1-3.47-2V222.81c-5.17,2.07-11.05,2.15-15.43-.42a2.29,2.29,0,0,1-1-2.68l4.41-13.51a2.3,2.3,0,0,1,2.89-1.48c4.71,1.58,9,1.58,13.83-1.21,4.29-2.48,6.55-6.18,6.55-10.24,0-11.86-25.86,5.17-25.86-20.93a41.24,41.24,0,0,1,14.57-31.44V123.6a2.29,2.29,0,0,1,1.16-2l4-2.32a2.31,2.31,0,0,1,3.47,2v14.41c5.48-2,9.6-.71,13,2.31a2.29,2.29,0,0,1,.58,2.59l-4.93,12a2.33,2.33,0,0,1-3.05,1.24c-3.25-1.35-6.17-1.35-10.21,1a11.51,11.51,0,0,0-6.14,10.06c0,10.07,25.86-6.1,25.86,19.75A43.71,43.71,0,0,1,152.93,217.33Zm48.86-8.66-27.57,15.92a4.24,4.24,0,0,1-2.14.57,4.3,4.3,0,0,1-2.16-8l27.57-15.91a4.3,4.3,0,0,1,4.3,7.45Z"})));function N(e,t){var r=e.title,l=e.titleId,n=E(e,["title","titleId"]);return a.createElement("svg",w({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 240.48 270",ref:t,"aria-labelledby":l},n),r?a.createElement("title",{id:l},r):null,L,A)}var T=a.forwardRef(N);r.p;function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var r,l,a=function(e,t){if(null==e)return{};var r,l,a={},n=Object.keys(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var Z=a.createElement("defs",null,a.createElement("style",null,".cls-1{fill:#fff;}")),I=a.createElement("g",{id:"Layer_2","data-name":"Layer 2"},a.createElement("g",{id:"Layer_1-2","data-name":"Layer 1"},a.createElement("path",{className:"cls-1",d:"M120.24,270a24.71,24.71,0,0,1-12.38-3.31L12.39,211.57A24.84,24.84,0,0,1,0,190.12V79.88A24.84,24.84,0,0,1,12.39,58.43L107.86,3.31l3.58,6.21-3.58-6.21a24.84,24.84,0,0,1,24.77,0L228.1,58.43a24.83,24.83,0,0,1,12.38,21.45V190.12a24.83,24.83,0,0,1-12.38,21.45l-95.47,55.12A24.75,24.75,0,0,1,120.24,270Zm0-255.66A10.41,10.41,0,0,0,115,15.73L19.56,70.85a10.46,10.46,0,0,0-5.22,9V190.12a10.46,10.46,0,0,0,5.22,9L115,254.27a10.43,10.43,0,0,0,10.42,0l95.47-55.12a10.46,10.46,0,0,0,5.22-9V79.88a10.46,10.46,0,0,0-5.22-9L125.45,15.73A10.38,10.38,0,0,0,120.24,14.34Z"}),a.createElement("path",{className:"cls-1",d:"M119.56,202.84a67.84,67.84,0,1,1,58.76-101.78,12,12,0,1,1-20.69,12,43.94,43.94,0,1,0,0,43.92,12,12,0,1,1,20.69,12A68.1,68.1,0,0,1,119.56,202.84Z"})));function S(e,t){var r=e.title,l=e.titleId,n=M(e,["title","titleId"]);return a.createElement("svg",k({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 240.48 270",ref:t,"aria-labelledby":l},n),r?a.createElement("title",{id:l},r):null,Z,I)}var P=a.forwardRef(S);r.p;function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e}).apply(this,arguments)}function V(e,t){if(null==e)return{};var r,l,a=function(e,t){if(null==e)return{};var r,l,a={},n=Object.keys(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var _=a.createElement("defs",null,a.createElement("style",null,".cls-1{fill:#fff;}")),H=a.createElement("g",{id:"Layer_2","data-name":"Layer 2"},a.createElement("g",{id:"Layer_1-2","data-name":"Layer 1"},a.createElement("path",{className:"cls-1",d:"M120.24,270a24.71,24.71,0,0,1-12.38-3.31L12.39,211.57A24.84,24.84,0,0,1,0,190.12V79.88A24.84,24.84,0,0,1,12.39,58.43L107.86,3.31h0a24.84,24.84,0,0,1,24.77,0L228.1,58.43a24.83,24.83,0,0,1,12.38,21.45V190.12a24.83,24.83,0,0,1-12.38,21.45l-95.47,55.12A24.75,24.75,0,0,1,120.24,270ZM115,15.73,19.56,70.85a10.46,10.46,0,0,0-5.22,9V190.12a10.46,10.46,0,0,0,5.22,9L115,254.27a10.43,10.43,0,0,0,10.42,0l95.47-55.12a10.46,10.46,0,0,0,5.22-9V79.88a10.46,10.46,0,0,0-5.22-9L125.45,15.73a10.43,10.43,0,0,0-10.42,0Z"}),a.createElement("path",{className:"cls-1",d:"M119.56,202.84a67.84,67.84,0,1,1,58.76-101.78,12,12,0,1,1-20.69,12,43.94,43.94,0,1,0,0,43.92,12,12,0,1,1,20.69,12A68.1,68.1,0,0,1,119.56,202.84Z"}),a.createElement("path",{className:"cls-1",d:"M188,157.05a4.78,4.78,0,0,1-4.78-4.78V117.73a4.79,4.79,0,0,1,9.57,0v34.54A4.79,4.79,0,0,1,188,157.05Z"}),a.createElement("path",{className:"cls-1",d:"M206.79,157.05a4.78,4.78,0,0,1-4.78-4.78V117.73a4.78,4.78,0,0,1,9.56,0v34.54A4.78,4.78,0,0,1,206.79,157.05Z"}),a.createElement("path",{className:"cls-1",d:"M214.37,130.37H179.83a4.78,4.78,0,0,1,0-9.56h34.54a4.78,4.78,0,0,1,0,9.56Z"}),a.createElement("path",{className:"cls-1",d:"M214.37,149.2H179.83a4.79,4.79,0,0,1,0-9.57h34.54a4.79,4.79,0,0,1,0,9.57Z"})));function R(e,t){var r=e.title,l=e.titleId,n=V(e,["title","titleId"]);return a.createElement("svg",C({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 240.48 270",ref:t,"aria-labelledby":l},n),r?a.createElement("title",{id:l},r):null,_,H)}var B=a.forwardRef(R);r.p;function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e}).apply(this,arguments)}function J(e,t){if(null==e)return{};var r,l,a=function(e,t){if(null==e)return{};var r,l,a={},n=Object.keys(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var W=a.createElement("defs",null,a.createElement("style",null,".cls-1{fill:#fff;}")),Y=a.createElement("g",{id:"Layer_2","data-name":"Layer 2"},a.createElement("g",{id:"Layer_1-2","data-name":"Layer 1"},a.createElement("path",{className:"cls-1",d:"M113.84,270a7.53,7.53,0,0,1-2.91-.59L18.57,230.23A7.48,7.48,0,0,1,14,223.86L0,7.93A7.44,7.44,0,0,1,7.45,0H219.64a7.44,7.44,0,0,1,7.43,7.93L213,223.86a7.43,7.43,0,0,1-4.5,6.36L116.76,269.4A7.41,7.41,0,0,1,113.84,270ZM28.61,218.31l85.22,36.15,84.64-36.14L211.69,14.9H15.4Z"}),a.createElement("path",{className:"cls-1",d:"M165.16,131.79H61.69a12.41,12.41,0,0,1-5.54-23.52L116,78.42H58.23a12.41,12.41,0,1,1,0-24.82H168.62a12.41,12.41,0,0,1,5.55,23.52L114.37,107h50.79a12.42,12.42,0,0,1,0,24.83Z"}),a.createElement("path",{className:"cls-1",d:"M113.58,211.15a12.38,12.38,0,0,1-4.85-1L60.68,189.78a12.41,12.41,0,0,1-7.54-10.63l-1.26-19.29a12.42,12.42,0,0,1,24.78-1.61l.76,11.66,36.14,15.33,35.87-15.31,3.34-51.36a12.41,12.41,0,0,1,24.77,1.61l-3.83,59a12.41,12.41,0,0,1-7.51,10.62l-47.75,20.38A12.45,12.45,0,0,1,113.58,211.15Z"})));function G(e,t){var r=e.title,l=e.titleId,n=J(e,["title","titleId"]);return a.createElement("svg",z({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 227.09 270",ref:t,"aria-labelledby":l},n),r?a.createElement("title",{id:l},r):null,W,Y)}var Q=a.forwardRef(G);r.p;function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e}).apply(this,arguments)}function q(e,t){if(null==e)return{};var r,l,a=function(e,t){if(null==e)return{};var r,l,a={},n=Object.keys(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var F=a.createElement("defs",null,a.createElement("style",null,".cls-1{fill:#fff;}")),D=a.createElement("g",{id:"Layer_2","data-name":"Layer 2"},a.createElement("g",{id:"Layer_1-2","data-name":"Layer 1"},a.createElement("path",{className:"cls-1",d:"M258.53,107.21,162.81,11.49a39.35,39.35,0,0,0-55.58,0l-15.8,15.8L127,62.9a20.31,20.31,0,0,1,26.67,26.67l26.56,26.56a20.13,20.13,0,0,1,7.54-1.46,20.34,20.34,0,1,1-17.91,10.72L144.22,99.71a19.82,19.82,0,0,1-2.26,1v66.47a20.33,20.33,0,1,1-13.88,0V100.7A20.31,20.31,0,0,1,116.9,72.39L81.62,37.1,11.51,107.21a39.3,39.3,0,0,0,0,55.58l95.72,95.72a39.35,39.35,0,0,0,55.58,0l95.72-95.72a39.3,39.3,0,0,0,0-55.58Z"})));function K(e,t){var r=e.title,l=e.titleId,n=q(e,["title","titleId"]);return a.createElement("svg",U({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 270.04 270",ref:t,"aria-labelledby":l},n),r?a.createElement("title",{id:l},r):null,F,D)}var X=a.forwardRef(K);r.p;function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e}).apply(this,arguments)}function ee(e,t){if(null==e)return{};var r,l,a=function(e,t){if(null==e)return{};var r,l,a={},n=Object.keys(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var te=a.createElement("defs",null,a.createElement("style",null,".cls-1{fill:#fff;}")),re=a.createElement("g",{id:"Layer_2","data-name":"Layer 2"},a.createElement("g",{id:"Layer_1-2","data-name":"Layer 1"},a.createElement("path",{className:"cls-1",d:"M113.84,270a7.53,7.53,0,0,1-2.91-.59L18.57,230.23A7.48,7.48,0,0,1,14,223.86L0,7.93A7.44,7.44,0,0,1,7.45,0H219.64a7.44,7.44,0,0,1,7.43,7.93L213,223.86a7.43,7.43,0,0,1-4.5,6.36L116.76,269.4A7.41,7.41,0,0,1,113.84,270ZM28.61,218.31l85.22,36.15,84.65-36.14L211.69,14.9H15.4Z"}),a.createElement("path",{className:"cls-1",d:"M165.16,131.79H61.69a12.41,12.41,0,0,1-12.38-11.61L45.84,66.81A12.41,12.41,0,0,1,58.23,53.6H168.62a12.41,12.41,0,1,1,0,24.82H71.47L73.33,107h91.83a12.42,12.42,0,0,1,0,24.83Z"}),a.createElement("path",{className:"cls-1",d:"M113.58,211.15a12.38,12.38,0,0,1-4.85-1L60.68,189.78a12.41,12.41,0,0,1-7.54-10.63l-1.26-19.29a12.42,12.42,0,0,1,24.78-1.61l.76,11.66,36.14,15.33,35.87-15.31,3.34-51.36a12.41,12.41,0,0,1,24.77,1.61l-3.83,59a12.43,12.43,0,0,1-7.51,10.62l-47.75,20.38A12.48,12.48,0,0,1,113.58,211.15Z"})));function le(e,t){var r=e.title,l=e.titleId,n=ee(e,["title","titleId"]);return a.createElement("svg",$({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 227.09 270",ref:t,"aria-labelledby":l},n),r?a.createElement("title",{id:l},r):null,te,re)}var ae=a.forwardRef(le);r.p;function ne(){return(ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e}).apply(this,arguments)}function ce(e,t){if(null==e)return{};var r,l,a=function(e,t){if(null==e)return{};var r,l,a={},n=Object.keys(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var oe=a.createElement("defs",null,a.createElement("style",null,".cls-1{fill:#fff;}")),ie=a.createElement("g",{id:"Layer_2","data-name":"Layer 2"},a.createElement("g",{id:"Layer_1-2","data-name":"Layer 1"},a.createElement("path",{className:"cls-1",d:"M59,199.38a194,194,0,0,1-24.32-1.23c-18.2-2.46-25.84-12.1-25.34-20.55.35-5.79,5-19.31,40.41-19.89A7.08,7.08,0,0,1,50,171.87c-19.58.32-25.79,5.16-26.47,6.55.45,1.18,4.21,4.5,13.06,5.69,25.14,3.4,90.87-1.35,115.3-8.33a7.08,7.08,0,1,1,3.89,13.61C135.61,195.15,90.88,199.38,59,199.38Z"}),a.createElement("path",{className:"cls-1",d:"M67.11,221.38c-22.66,0-36.56-5.06-40.51-15.12-3-7.52.69-15.79,9.06-20.57a7.08,7.08,0,0,1,7,12.3c-2.32,1.32-3,2.83-2.9,3.1s10.66,16.28,98.17-4a7.08,7.08,0,1,1,3.2,13.79C110.89,217.87,86,221.38,67.11,221.38Z"}),a.createElement("path",{className:"cls-1",d:"M65.32,244.28c-20.33,0-31.9-5.21-34.56-15.64-1.21-4.76-.15-9.94,3-14.61,2.7-4,6.58-7,10.37-8a7.08,7.08,0,0,1,3.71,13.67c-1.32.55-3.87,3.79-3.32,5.53,0,.15,6.69,13.89,82.71-4.64a7.08,7.08,0,0,1,3.35,13.76Q89.67,244.28,65.32,244.28Zm-17.55-24.6h0Z"}),a.createElement("path",{className:"cls-1",d:"M157.37,219.22a7.09,7.09,0,0,1-2.84-13.58c28.62-12.47,31.57-22.55,31.79-25.34.26-3.2-2.12-5.43-4.16-6.73-5-3.22-12.35-3.65-17.06-1a7.09,7.09,0,0,1-6.93-12.36c9.23-5.17,22.24-4.58,31.63,1.43,7.38,4.73,11.26,11.94,10.64,19.79-1.07,13.51-14.62,26-40.25,37.19A6.91,6.91,0,0,1,157.37,219.22Z"}),a.createElement("path",{className:"cls-1",d:"M66.1,270q-9.73,0-19.54-.61C29.74,268.34,1.32,263.91,0,246.07c-.66-9.14,7.11-17.5,18.47-19.86a7.08,7.08,0,1,1,2.88,13.86c-4.83,1-7.31,3.83-7.23,5,0,.08,2.51,8.28,33.29,10.2,26.84,1.68,54.9-.32,79-5.63,22.93-5,40.6-12.82,48.49-21.31A7.08,7.08,0,1,1,185.33,238C167.48,257.18,118.3,270,66.1,270Z"}),a.createElement("path",{className:"cls-1",d:"M78.42,168.31a7.08,7.08,0,0,1-5.82-3c-.82-1.18-1.79-2.5-2.85-4-10.62-14.53-30.38-41.58-15.29-70.86C61.26,77.25,70.56,67,78.76,58c15.13-16.67,25.12-27.69,17-48.29A7.08,7.08,0,0,1,109,4.49c11.3,28.78-4.47,46.17-19.72,63C81.26,76.28,73,85.39,67.05,97c-11.08,21.5,4.7,43.11,14.13,56,1.13,1.55,2.16,3,3,4.22a7.08,7.08,0,0,1-5.8,11.13Z"}),a.createElement("path",{className:"cls-1",d:"M102.9,180.77a7.08,7.08,0,0,1-4.65-12.42c19.31-16.83,20.25-27.22,4.2-46.36C93.62,111.46,92,98.56,97.81,84.7c4.34-10.39,11.7-18.83,15.65-23.36.73-.83,1.36-1.55,1.68-2a7.08,7.08,0,1,1,11.13,8.76c-.54.68-1.25,1.49-2.14,2.51-11,12.58-22.14,28.74-10.83,42.23,21,25.09,19.38,44.25-5.75,66.14A7.12,7.12,0,0,1,102.9,180.77Z"})));function se(e,t){var r=e.title,l=e.titleId,n=ce(e,["title","titleId"]);return a.createElement("svg",ne({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 200.5 270",ref:t,"aria-labelledby":l},n),r?a.createElement("title",{id:l},r):null,oe,ie)}var de=a.forwardRef(se);r.p;function je(){return(je=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e}).apply(this,arguments)}function ue(e,t){if(null==e)return{};var r,l,a=function(e,t){if(null==e)return{};var r,l,a={},n=Object.keys(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var pe=a.createElement("defs",null,a.createElement("style",null,".cls-1{fill:#fff;}")),me=a.createElement("g",{id:"Layer_2","data-name":"Layer 2"},a.createElement("g",{id:"Layer_1-2","data-name":"Layer 1"},a.createElement("path",{className:"cls-1",d:"M113.84,270a7.53,7.53,0,0,1-2.91-.59L18.57,230.23A7.48,7.48,0,0,1,14,223.86L0,7.93A7.44,7.44,0,0,1,7.45,0H219.64a7.44,7.44,0,0,1,7.43,7.93L213,223.86a7.43,7.43,0,0,1-4.5,6.36L116.76,269.4A7.41,7.41,0,0,1,113.84,270ZM28.61,218.31l85.22,36.15,84.65-36.14L211.69,14.9H15.4Z"}),a.createElement("path",{className:"cls-1",d:"M129.19,204.49a12.42,12.42,0,0,1-4.88-23.84l25.12-10.72,1.83-28.2H129.49a12.41,12.41,0,0,1-12.41-12.41V66A12.41,12.41,0,0,1,129.49,53.6h39.13a12.41,12.41,0,1,1,0,24.82H141.91V116.9h22.6a12.42,12.42,0,0,1,12.39,13.22l-3.19,49a12.43,12.43,0,0,1-7.51,10.62l-32.14,13.72A12.35,12.35,0,0,1,129.19,204.49Z"}),a.createElement("path",{className:"cls-1",d:"M93.83,202.77a12.45,12.45,0,0,1-4.85-1l-28.3-12a12.41,12.41,0,0,1-7.54-10.63l-1.26-19.29a12.42,12.42,0,0,1,24.78-1.61l.76,11.66,3.87,1.64L80.56,66.09A12.4,12.4,0,0,1,92.89,53.6H93a12.42,12.42,0,0,1,12.41,12.32l.85,124.35a12.41,12.41,0,0,1-12.41,12.5Z"})));function fe(e,t){var r=e.title,l=e.titleId,n=ue(e,["title","titleId"]);return a.createElement("svg",je({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 227.09 270",ref:t,"aria-labelledby":l},n),r?a.createElement("title",{id:l},r):null,pe,me)}var be=a.forwardRef(fe);r.p;function he(){return(he=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e}).apply(this,arguments)}function ve(e,t){if(null==e)return{};var r,l,a=function(e,t){if(null==e)return{};var r,l,a={},n=Object.keys(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var ye=a.createElement("defs",null,a.createElement("style",null,".cls-1{fill:#fff;}")),Oe=a.createElement("g",{id:"Layer_2","data-name":"Layer 2"},a.createElement("g",{id:"Layer_1-2","data-name":"Layer 1"},a.createElement("polyline",{className:"cls-1",points:"124.67 136.53 90.2 109.27 7.99 141.29 65.97 187.15"}),a.createElement("path",{className:"cls-1",d:"M66,195.14A8,8,0,0,1,61,193.42L3,147.55a8,8,0,0,1,2.06-13.71l82.21-32A8,8,0,0,1,95.16,103l34.47,27.27a8,8,0,0,1-9.91,12.53L88.84,118.37l-65,25.3,47.05,37.22a8,8,0,0,1-5,14.25Z"}),a.createElement("path",{className:"cls-1",d:"M129.58,270a8,8,0,0,1-7.15-4.42c-1.32-2.65-3.16-6.78-5.5-12-6.78-15.21-18.12-40.67-27.37-52.38-6.92-8.77-15-8.12-18.67-7.24a30.7,30.7,0,0,1-3,1,8,8,0,0,1-5.09-15.08,25.39,25.39,0,0,1,3.28-1.14c5.9-2.33,23.8-11.09,45.18-37.65,23.33-29,39.43-66.88,51.18-94.54,2.31-5.45,4.5-10.59,6.58-15.32C177.64,11.61,184.82,2.72,193.78.5c8.16-2,15,2.47,19.51,6,11.89,9.42,26.35,47.4,41.36,88.85,1.33,3.67,2.53,7,3.58,9.84,11.56,31.38,40.26,100.25,40.55,100.94a8,8,0,0,1-13.73,7.9c-15.09-19.85-38.79-29.5-46.68-28.89-4.18.33-19.92,4.11-47.08,39.32-24.47,31.72-57.49,44.47-58.89,45A7.94,7.94,0,0,1,129.58,270Zm-37.7-87.82a37.53,37.53,0,0,1,10.22,9.11c10.48,13.28,21.88,38.85,29.42,55.77l2,4.39c10.14-5.11,29.78-16.78,45.16-36.72,22-28.51,42.22-44.24,58.5-45.49,8.67-.66,21.26,3.37,33.68,11-9.25-22.6-21.08-51.87-27.58-69.52-1.05-2.87-2.27-6.22-3.61-9.92C231.57,78.55,212.69,26.42,203.37,19c-4-3.15-5.41-3.11-5.76-3-1.17.29-5.65,2.7-14,21.62-2,4.62-4.21,9.72-6.5,15.11-12.12,28.53-28.72,67.6-53.44,98.31C113.38,163.86,102.71,174.3,91.88,182.18Z"}),a.createElement("path",{className:"cls-1",d:"M90.19,117.25a8,8,0,0,1-6.55-12.53,40.79,40.79,0,0,0,3.68-7.22C92,86.64,97.7,77.29,120.3,72.94a63.62,63.62,0,0,0,20.13-11.31c8.21-7,17-19.9,24.73-31.33,7.27-10.71,13-19.18,18.42-23.42a8,8,0,1,1,9.85,12.57c-3.44,2.7-9.34,11.4-15,19.82-8.32,12.27-17.75,26.19-27.64,34.55a78.53,78.53,0,0,1-26.33,14.57l-.73.17c-16.47,3.09-18.55,7.92-21.7,15.25a54.64,54.64,0,0,1-5.22,10A8,8,0,0,1,90.19,117.25Z"})));function ge(e,t){var r=e.title,l=e.titleId,n=ve(e,["title","titleId"]);return a.createElement("svg",he({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 299.4 270",ref:t,"aria-labelledby":l},n),r?a.createElement("title",{id:l},r):null,ye,Oe)}var xe=a.forwardRef(ge);r.p;function we(){return(we=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e}).apply(this,arguments)}function Ee(e,t){if(null==e)return{};var r,l,a=function(e,t){if(null==e)return{};var r,l,a={},n=Object.keys(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var Le=a.createElement("defs",null,a.createElement("style",null,".cls-1{fill:#fff;}")),Ae=a.createElement("g",{id:"Layer_2","data-name":"Layer 2"},a.createElement("g",{id:"Layer_1-2","data-name":"Layer 1"},a.createElement("path",{className:"cls-1",d:"M151.69,193.24C78.15,193.24,0,172.83,0,135S78.15,76.76,151.69,76.76,303.37,97.17,303.37,135,225.22,193.24,151.69,193.24Zm0-101c-37.6,0-72.83,5.1-99.21,14.35-23.15,8.12-37,18.74-37,28.39s13.82,20.27,37,28.39c26.38,9.25,61.61,14.35,99.21,14.35s72.82-5.1,99.21-14.35c23.14-8.12,37-18.74,37-28.39s-13.83-20.27-37-28.39C224.51,97.36,189.28,92.26,151.69,92.26Z"}),a.createElement("path",{className:"cls-1",d:"M90,270a27.8,27.8,0,0,1-14.13-3.64c-32.76-18.91-11.36-96.8,25.41-160.48,19.64-34,42.85-63.42,65.35-82.75,31.46-27,50.5-25.52,60.93-19.49,32.76,18.91,11.36,96.8-25.4,160.48-19.65,34-42.86,63.42-65.36,82.75C116.23,264.52,101,270,90,270ZM213.38,15.52c-9,0-22,6.81-36.67,19.37-21.21,18.22-43.24,46.18-62,78.74s-32,65.62-37.17,93.09c-4.54,24.11-2.27,41.39,6.1,46.22s24.46-1.84,43.06-17.83c21.21-18.22,43.24-46.18,62-78.74s32-65.62,37.17-93.09c4.55-24.11,2.27-41.39-6.09-46.22A12.71,12.71,0,0,0,213.38,15.52Z"}),a.createElement("path",{className:"cls-1",d:"M213.4,270c-11,0-26.26-5.48-46.8-23.13-22.5-19.33-45.71-48.72-65.35-82.75C64.48,100.44,43.08,22.55,75.84,3.64c10.44-6,29.48-7.54,60.93,19.49,22.5,19.33,45.71,48.72,65.36,82.75,36.76,63.68,58.16,141.57,25.4,160.48A27.8,27.8,0,0,1,213.4,270ZM90,15.52a12.65,12.65,0,0,0-6.39,1.54C75.23,21.89,73,39.17,77.5,63.28c5.17,27.47,18.38,60.53,37.17,93.09s40.83,60.52,62,78.74c18.6,16,34.7,22.65,43.07,17.83s10.64-22.11,6.09-46.22c-5.17-27.47-18.37-60.53-37.17-93.09s-40.83-60.52-62-78.74C112.05,22.33,99,15.52,90,15.52Z"}),a.createElement("circle",{className:"cls-1",cx:151.69,cy:135,r:13.77}),a.createElement("path",{className:"cls-1",d:"M151.69,156.52A21.52,21.52,0,1,1,173.21,135,21.55,21.55,0,0,1,151.69,156.52Zm0-27.54a6,6,0,1,0,6,6A6,6,0,0,0,151.69,129Z"})));function Ne(e,t){var r=e.title,l=e.titleId,n=Ee(e,["title","titleId"]);return a.createElement("svg",we({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 303.37 270",ref:t,"aria-labelledby":l},n),r?a.createElement("title",{id:l},r):null,Le,Ae)}var Te=a.forwardRef(Ne);r.p;function ke(e){var t=e.className,r=void 0===t?"":t;return Object(l.jsxs)("div",{className:r,children:[Object(l.jsxs)("div",{className:"skill-icon-group",children:[Object(l.jsx)(de,{className:"skill-icon"}),Object(l.jsx)("p",{children:"Java"})]}),Object(l.jsxs)("div",{className:"skill-icon-group",children:[Object(l.jsx)(B,{className:"skill-icon"}),Object(l.jsx)("p",{children:"C#.NET"})]}),Object(l.jsxs)("div",{className:"skill-icon-group",children:[Object(l.jsx)(ae,{className:"skill-icon"}),Object(l.jsx)("p",{children:"HTML"})]}),Object(l.jsxs)("div",{className:"skill-icon-group",children:[Object(l.jsx)(Q,{className:"skill-icon"}),Object(l.jsx)("p",{children:"CSS"})]}),Object(l.jsxs)("div",{className:"skill-icon-group",children:[Object(l.jsx)(be,{className:"skill-icon"}),Object(l.jsx)("p",{children:"JS"})]}),Object(l.jsxs)("div",{className:"skill-icon-group",children:[Object(l.jsx)(X,{className:"skill-icon"}),Object(l.jsx)("p",{children:"Git"})]}),Object(l.jsxs)("div",{className:"skill-icon-group",children:[Object(l.jsx)(Te,{className:"skill-icon"}),Object(l.jsx)("p",{children:"React.js"})]}),Object(l.jsxs)("div",{className:"skill-icon-group",children:[Object(l.jsx)(P,{className:"skill-icon"}),Object(l.jsx)("p",{children:"C"})]}),Object(l.jsxs)("div",{className:"skill-icon-group",children:[Object(l.jsx)(T,{className:"skill-icon"}),Object(l.jsx)("p",{children:"Bash"})]}),Object(l.jsxs)("div",{className:"skill-icon-group",children:[Object(l.jsx)(xe,{className:"skill-icon"}),Object(l.jsx)("p",{children:"Matlab"})]})]})}function Me(e){var t=e.id,r=void 0===t?"":t,a=e.upArrowTo,n=void 0===a?"":a,c=e.downArrowTo,o=void 0===c?"":c,i=e.upArrowToolTip,s=void 0===i?"":i,d=e.downArrowToolTip,j=void 0===d?"":d;return Object(l.jsx)("div",{className:"section",id:r,style:{backgroundColor:"".concat(h)},children:Object(l.jsxs)("div",{className:"section-content section-two-column",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)(g,{to:n,color:f,toolTip:s}),Object(l.jsxs)("div",{className:"with-p",children:[Object(l.jsx)("h1",{style:{color:"".concat(f)},children:"Skills"}),Object(l.jsx)("p",{style:{color:"".concat(f)},children:"Ordered by level of proficiency"})]}),Object(l.jsx)(ke,{className:"skill-icons-tall"}),Object(l.jsx)(m,{to:o,color:f,toolTip:j})]}),Object(l.jsx)("div",{children:Object(l.jsx)(ke,{className:"skill-icons-wide"})})]})})}var Ze=r(5);function Ie(e){var t=e.className,r=void 0===t?"":t;return Object(l.jsxs)("div",{className:r,children:[Object(l.jsx)(Ze.a,{username:"beverleysun",repository:"Quinzical"}),Object(l.jsx)(Ze.a,{username:"WeRateYou",repository:"WeRateYou.github.io"}),Object(l.jsx)(Ze.a,{username:"beverleysun",repository:"beverleysun.com"}),Object(l.jsx)(Ze.a,{username:"beverleysun",repository:"visibility-checker"}),Object(l.jsx)(Ze.a,{username:"beverleysun",repository:"dfsconstruction.co.nz"})]})}function Se(e){var t=e.upArrowTo,r=void 0===t?"":t,a=e.downArrowTo,n=void 0===a?"":a,c=e.upArrowToolTip,o=void 0===c?"":c,i=e.downArrowToolTip,s=void 0===i?"":i,d=e.id,j=void 0===d?"":d;return Object(l.jsx)("div",{className:"section",style:{backgroundColor:"".concat(f)},id:j,children:Object(l.jsxs)("div",{className:"section-content section-two-column",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)(g,{to:r,color:h,toolTip:o}),Object(l.jsx)("h1",{style:{color:"".concat(h)},children:"Projects"}),Object(l.jsx)("div",{className:"with-p",children:Object(l.jsx)("p",{style:{color:"".concat(h)},children:"Listed are projects that I'm most proud of. Check out the GitHub to learn more about them."})}),Object(l.jsx)(Ie,{className:"project-cards-tall"}),Object(l.jsx)(m,{to:n,color:h,toolTip:s})]}),Object(l.jsx)(Ie,{className:"project-cards-wide"})]})})}r(63);function Pe(e){var t=e.id,r=void 0===t?"":t;return Object(l.jsx)("div",{className:"section",id:r,style:{backgroundColor:"".concat(h)},children:Object(l.jsx)("div",{className:"section-content",children:Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{style:{color:"".concat(f)},className:"the-void-title","data-text":"Welcome to",children:"Welcome to"}),Object(l.jsx)("h1",{style:{color:"".concat(f)},className:"the-void-title","data-text":"the Void",children:"the Void"})]})})})}r(64);function Ce(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(O,{title:"Beverley",downArrowTo:"about",downArrowToolTip:"about",id:"splash"}),Object(l.jsx)(x,{upArrowTo:"splash",downArrowTo:"skills",upArrowToolTip:"home",downArrowToolTip:"skills",id:"about"}),Object(l.jsx)(Me,{upArrowTo:"about",downArrowTo:"projects",upArrowToolTip:"about",downArrowToolTip:"projects",id:"skills"}),Object(l.jsx)(Se,{upArrowTo:"skills",downArrowTo:"the void",upArrowToolTip:"skills",downArrowToolTip:"the void",id:"projects"}),Object(l.jsx)(Pe,{id:"the void"})]})}o.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(Ce,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.28956083.chunk.js.map