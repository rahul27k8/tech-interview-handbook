(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{124:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(6),o=(n(0),n(171)),i={id:"interval",title:"Interval"},l={id:"algorithms/interval",isDocsHomePage:!1,title:"Interval",description:"Notes",source:"@site/../contents/algorithms/interval.md",permalink:"/tech-interview-handbook/algorithms/interval",editUrl:"https://github.com/yangshun/tech-interview-handbook/edit/master/contents/../contents/algorithms/interval.md",lastUpdatedBy:"Yangshun Tay",lastUpdatedAt:1569463535,sidebar:"docs",previous:{title:"Heap",permalink:"/tech-interview-handbook/algorithms/heap"},next:{title:"Linked List",permalink:"/tech-interview-handbook/algorithms/linked-list"}},c=[{value:"Notes",id:"notes",children:[]},{value:"Corner cases",id:"corner-cases",children:[]},{value:"Recommended LeetCode questions",id:"recommended-leetcode-questions",children:[]}],s={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"notes"},"Notes"),Object(o.b)("p",null,"Interval questions are questions where you are given an array of two-element arrays (an interval) and the two values represent a start and an end value. Interval questions are considered part of the array family but they involve some common techniques hence they are extracted out to this special section of their own."),Object(o.b)("p",null,"An example interval array: ",Object(o.b)("inlineCode",{parentName:"p"},"[[1, 2], [4, 7]]"),"."),Object(o.b)("p",null,"Interval questions can be tricky to those who have not tried them before because of the sheer number of cases to consider when they overlap."),Object(o.b)("p",null,"Do clarify with the interviewer whether ",Object(o.b)("inlineCode",{parentName:"p"},"[1, 2]")," and ",Object(o.b)("inlineCode",{parentName:"p"},"[2, 3]")," are considered overlapping intervals as it affects how you will write your equality checks."),Object(o.b)("p",null,"A common routine for interval questions is to sort the array of intervals by each interval's starting value."),Object(o.b)("p",null,"Be familiar with writing code to check if two intervals overlap and merging two overlapping intervals:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"def is_overlap(a, b):\n  return a[0] < b[1] and b[0] < a[1]\n\ndef merge_overlapping_intervals(a, b):\n  return [min(a[0], b[0]), max(a[1], b[1])]\n")),Object(o.b)("h2",{id:"corner-cases"},"Corner cases"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Single interval"),Object(o.b)("li",{parentName:"ul"},"Non-overlapping intervals"),Object(o.b)("li",{parentName:"ul"},"An interval totally consumed within another interval"),Object(o.b)("li",{parentName:"ul"},"Duplicate intervals")),Object(o.b)("h2",{id:"recommended-leetcode-questions"},"Recommended LeetCode questions"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://leetcode.com/problems/insert-interval/"}),"Insert Interval")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://leetcode.com/problems/merge-intervals/"}),"Merge Intervals")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://leetcode.com/problems/non-overlapping-intervals/"}),"Non-overlapping Intervals")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://leetcode.com/problems/meeting-rooms/"}),"Meeting Rooms (LeetCode Premium)")," and ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://leetcode.com/problems/meeting-rooms-ii/"}),"Meeting Rooms II (LeetCode Premium)"))))}p.isMDXComponent=!0},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),m=r,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||o;return n?a.a.createElement(d,l({ref:t},s,{components:n})):a.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);