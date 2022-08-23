"use strict";(self.webpackChunkh3_website=self.webpackChunkh3_website||[]).push([[2329],{3905:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return s}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},f=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,f=o(e,["components","mdxType","originalType","parentName"]),u=d(n),s=a,c=u["".concat(p,".").concat(s)]||u[s]||m[s]||i;return n?r.createElement(c,l(l({ref:t},f),{},{components:n})):r.createElement(c,l({ref:t},f))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1562:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return f},default:function(){return u}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),l=["components"],o={id:"filters",title:"Unix-style Filters for H3",sidebar_label:"Unix-style Filters for H3",slug:"/core-library/filters"},p=void 0,d={unversionedId:"core-library/filters",id:"version-3.x/core-library/filters",isDocsHomePage:!1,title:"Unix-style Filters for H3",description:"The directory src/apps/filters contains unix-style stdin/stdout filters that perform conversions between integer H3 indexes and other useful types. It currently contains the filters listed in the table below. See the header comments in each application source code file for more information.",source:"@site/versioned_docs/version-3.x/core-library/filters.md",sourceDirName:"core-library",slug:"/core-library/filters",permalink:"/docs/3.x/core-library/filters",editUrl:"https://github.com/uber/h3/edit/master/website/docs/core-library/filters.md",tags:[],version:"3.x",frontMatter:{id:"filters",title:"Unix-style Filters for H3",sidebar_label:"Unix-style Filters for H3",slug:"/core-library/filters"},sidebar:"version-3.x/someSidebar",previous:{title:"Public API",permalink:"/docs/3.x/core-library/usage"},next:{title:"Conversion from latitude/longitude to containing H3 cell index",permalink:"/docs/3.x/core-library/geoToH3desc"}},f=[{value:"Unix Command Line Examples",id:"unix-command-line-examples",children:[],level:2}],m={toc:f};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The directory ",(0,i.kt)("inlineCode",{parentName:"p"},"src/apps/filters")," contains unix-style stdin/stdout filters that perform conversions between integer H3 indexes and other useful types. It currently contains the filters listed in the table below. See the header comments in each application source code file for more information."),(0,i.kt)("p",null,"Filters are experimental and are not part of the semantic version of the H3 library."),(0,i.kt)("p",null,"All latitude/longitude coordinates are in decimal degrees. See the ",(0,i.kt)("a",{parentName:"p",href:"/docs/core-library/h3indexing"},"H3 Index Representations")," page for information on the integer ",(0,i.kt)("inlineCode",{parentName:"p"},"H3Index"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"filter"),(0,i.kt)("th",{parentName:"tr",align:null},"input"),(0,i.kt)("th",{parentName:"tr",align:null},"outputs"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"geoToH3")),(0,i.kt)("td",{parentName:"tr",align:null},"lat/lon"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"H3Index"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"h3ToGeo")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"H3Index")),(0,i.kt)("td",{parentName:"tr",align:null},"cell center point in lat/lon")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"h3ToGeoBoundary")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"H3Index")),(0,i.kt)("td",{parentName:"tr",align:null},"cell boundary in lat/lon")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"h3ToComponents")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"H3Index")),(0,i.kt)("td",{parentName:"tr",align:null},"components")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"kRing")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"H3Index")),(0,i.kt)("td",{parentName:"tr",align:null},"surrounding ",(0,i.kt)("inlineCode",{parentName:"td"},"H3Index"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"hexRange")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"H3Index")),(0,i.kt)("td",{parentName:"tr",align:null},"surrounding ",(0,i.kt)("inlineCode",{parentName:"td"},"H3Index"),", in order")))),(0,i.kt)("h2",{id:"unix-command-line-examples"},"Unix Command Line Examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"find the index for coordinates at resolution 5"),(0,i.kt)("p",{parentName:"li"},"   ",(0,i.kt)("inlineCode",{parentName:"p"},"geoToH3 --resolution 5 --latitude 40.689167 --longitude -74.044444"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"output the cell center point for ",(0,i.kt)("inlineCode",{parentName:"p"},"H3Index")," 845ad1bffffffff"),(0,i.kt)("p",{parentName:"li"},"   ",(0,i.kt)("inlineCode",{parentName:"p"},"h3ToGeo --index 845ad1bffffffff"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"output the cell boundary for ",(0,i.kt)("inlineCode",{parentName:"p"},"H3Index")," 845ad1bffffffff"),(0,i.kt)("p",{parentName:"li"},"   ",(0,i.kt)("inlineCode",{parentName:"p"},"h3ToGeoBoundary --index 845ad1bffffffff"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"find the components for the ",(0,i.kt)("inlineCode",{parentName:"p"},"H3Index")," 845ad1bffffffff"),(0,i.kt)("p",{parentName:"li"},"   ",(0,i.kt)("inlineCode",{parentName:"p"},"h3ToComponents --index 845ad1bffffffff"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"output all indexes within distance 1 of the ",(0,i.kt)("inlineCode",{parentName:"p"},"H3Index")," 845ad1bffffffff"),(0,i.kt)("p",{parentName:"li"},"   ",(0,i.kt)("inlineCode",{parentName:"p"},"kRing -k 1 --origin 845ad1bffffffff"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"output all hexagon indexes within distance 2 of the ",(0,i.kt)("inlineCode",{parentName:"p"},"H3Index")," 845ad1bffffffff"),(0,i.kt)("p",{parentName:"li"},"   ",(0,i.kt)("inlineCode",{parentName:"p"},"hexRange -k 2 --origin 845ad1bffffffff")))),(0,i.kt)("p",null,"Note that the filters ",(0,i.kt)("inlineCode",{parentName:"p"},"h3ToGeo")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"h3ToGeoBoundary")," take optional arguments that allow them to generate ",(0,i.kt)("inlineCode",{parentName:"p"},"kml")," output. See the header comments in the corresponding source code files for details."))}u.isMDXComponent=!0}}]);