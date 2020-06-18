(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(1),a=n(6),i=(n(0),n(171)),o={id:"stack",title:"Stack"},c={id:"algorithms/stack",isDocsHomePage:!1,title:"Stack",description:"Sample questions",source:"@site/../contents/algorithms/stack.md",permalink:"/tech-interview-handbook/algorithms/stack",editUrl:"https://github.com/yangshun/tech-interview-handbook/edit/master/contents/../contents/algorithms/stack.md",lastUpdatedBy:"Yangshun Tay",lastUpdatedAt:1569463535,sidebar:"docs",previous:{title:"Sorting and Searching",permalink:"/tech-interview-handbook/algorithms/sorting-searching"},next:{title:"String",permalink:"/tech-interview-handbook/algorithms/string"}},l=[{value:"Sample questions",id:"sample-questions",children:[]}],p={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"sample-questions"},"Sample questions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Implementation of an interpreter for a small language that does multiplication/addition/etc."),Object(i.b)("li",{parentName:"ul"},"Design a ",Object(i.b)("inlineCode",{parentName:"li"},"MinStack")," data structure that supports a ",Object(i.b)("inlineCode",{parentName:"li"},"min()")," operation that returns the minimum value in the stack in O(1) time."),Object(i.b)("li",{parentName:"ul"},"Write an algorithm to determine if all of the delimiters in an expression are matched and closed.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"E.g. ",Object(i.b)("inlineCode",{parentName:"li"},"{ac[bb]}"),", ",Object(i.b)("inlineCode",{parentName:"li"},"[dklf(df(kl))d]{}")," and ",Object(i.b)("inlineCode",{parentName:"li"},"{[[[]]]}")," are matched. But ",Object(i.b)("inlineCode",{parentName:"li"},"{3234[fd")," and ",Object(i.b)("inlineCode",{parentName:"li"},"{df][d}")," are not."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://blog.gainlo.co/index.php/2016/09/30/uber-interview-question-delimiter-matching/"}),"Source")))),Object(i.b)("li",{parentName:"ul"},"Sort a stack in ascending order using an additional stack.")))}s.isMDXComponent=!0},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,b=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return n?a.a.createElement(b,c({ref:t},p,{components:n})):a.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);