(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(6),i=(n(0),n(171)),o={id:"permutation",title:"Permutation"},l={id:"algorithms/permutation",isDocsHomePage:!1,title:"Permutation",description:"Sample questions",source:"@site/../contents/algorithms/permutation.md",permalink:"/tech-interview-handbook/algorithms/permutation",editUrl:"https://github.com/yangshun/tech-interview-handbook/edit/master/contents/../contents/algorithms/permutation.md",lastUpdatedBy:"Yangshun Tay",lastUpdatedAt:1569463535,sidebar:"docs",previous:{title:"Object-Oriented Programming",permalink:"/tech-interview-handbook/algorithms/oop"},next:{title:"Queue",permalink:"/tech-interview-handbook/algorithms/queue"}},c=[{value:"Sample questions",id:"sample-questions",children:[]}],p={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"sample-questions"},"Sample questions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You are given a 7 digit phone number, and you should find all possible letter combinations based on the digit-to-letter mapping on numeric pad and return only the ones that have valid match against a given dictionary of words."),Object(i.b)("li",{parentName:"ul"},"Give all possible letter combinations from a phone number."),Object(i.b)("li",{parentName:"ul"},"Generate all subsets of a string."),Object(i.b)("li",{parentName:"ul"},"Print all possible ",Object(i.b)("inlineCode",{parentName:"li"},"N")," pairs of balanced parentheses.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"E.g. when ",Object(i.b)("inlineCode",{parentName:"li"},"N")," is ",Object(i.b)("inlineCode",{parentName:"li"},"2"),", the function should print ",Object(i.b)("inlineCode",{parentName:"li"},"(())")," and ",Object(i.b)("inlineCode",{parentName:"li"},"()()"),"."),Object(i.b)("li",{parentName:"ul"},"E.g. when ",Object(i.b)("inlineCode",{parentName:"li"},"N")," is ",Object(i.b)("inlineCode",{parentName:"li"},"3"),", we should get ",Object(i.b)("inlineCode",{parentName:"li"},"((()))"),", ",Object(i.b)("inlineCode",{parentName:"li"},"(()())"),", ",Object(i.b)("inlineCode",{parentName:"li"},"(())()"),", ",Object(i.b)("inlineCode",{parentName:"li"},"()(())"),", ",Object(i.b)("inlineCode",{parentName:"li"},"()()()"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://blog.gainlo.co/index.php/2016/12/23/uber-interview-questions-permutations-parentheses/"}),"Source")))),Object(i.b)("li",{parentName:"ul"},"Given a list of arrays, return a list of arrays, where each array is a combination of one element in each given array.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"E.g. If the input is ",Object(i.b)("inlineCode",{parentName:"li"},"[[1, 2, 3], [4], [5, 6]]"),", the output should be ",Object(i.b)("inlineCode",{parentName:"li"},"[[1, 4, 5], [1, 4, 6], [2, 4, 5], [2, 4, 6], [3, 4, 5], [3, 4, 6]]"),".")))))}u.isMDXComponent=!0},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},b=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=u(n),m=r,d=b["".concat(o,".").concat(m)]||b[m]||s[m]||i;return n?a.a.createElement(d,l({ref:t},p,{components:n})):a.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);