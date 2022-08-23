"use strict";(self.webpackChunkh3_website=self.webpackChunkh3_website||[]).push([[9669],{3905:function(e,a,n){n.d(a,{Zo:function(){return c},kt:function(){return m}});var t=n(7294);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=t.createContext({}),d=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},c=function(e){var a=d(e.components);return t.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,v=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return n?t.createElement(v,l(l({ref:a},c),{},{components:n})):t.createElement(v,l({ref:a},c))}));function m(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8215:function(e,a,n){var t=n(7294);a.Z=function(e){var a=e.children,n=e.hidden,i=e.className;return t.createElement("div",{role:"tabpanel",hidden:n,className:i},a)}},6396:function(e,a,n){n.d(a,{Z:function(){return u}});var t=n(3117),i=n(7294),r=n(2389),l=n(9443);var o=function(){var e=(0,i.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(9521),d=n(6010),c="tabItem_1uMI";function p(e){var a,n,t,r=e.lazy,l=e.block,p=e.defaultValue,u=e.values,m=e.groupId,v=e.className,h=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=u?u:h.map((function(e){var a=e.props;return{value:a.value,label:a.label}})),k=(0,s.lx)(g,(function(e,a){return e.value===a.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===p?p:null!=(a=null!=p?p:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?a:null==(t=h[0])?void 0:t.props.value;if(null!==f&&!g.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=o(),N=x.tabGroupChoices,b=x.setTabGroupChoices,y=(0,i.useState)(f),T=y[0],w=y[1],I=[],j=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var Z=N[m];null!=Z&&Z!==T&&g.some((function(e){return e.value===Z}))&&w(Z)}var H=function(e){var a=e.currentTarget,n=I.indexOf(a),t=g[n].value;t!==T&&(j(a),w(t),null!=m&&b(m,t))},L=function(e){var a,n=null;switch(e.key){case"ArrowRight":var t=I.indexOf(e.currentTarget)+1;n=I[t]||I[0];break;case"ArrowLeft":var i=I.indexOf(e.currentTarget)-1;n=I[i]||I[I.length-1]}null==(a=n)||a.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":l},v)},g.map((function(e){var a=e.value,n=e.label;return i.createElement("li",{role:"tab",tabIndex:T===a?0:-1,"aria-selected":T===a,className:(0,d.Z)("tabs__item",c,{"tabs__item--active":T===a}),key:a,ref:function(e){return I.push(e)},onKeyDown:L,onFocus:H,onClick:H},null!=n?n:a)}))),r?(0,i.cloneElement)(h.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},h.map((function(e,a){return(0,i.cloneElement)(e,{key:a,hidden:e.props.value!==T})}))))}function u(e){var a=(0,r.Z)();return i.createElement(p,(0,t.Z)({key:String(a)},e))}},9443:function(e,a,n){var t=(0,n(7294).createContext)(void 0);a.Z=t},5059:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return v}});var t=n(3117),i=n(102),r=(n(7294),n(3905)),l=n(6396),o=n(8215),s=["components"],d={id:"traversal",title:"Grid traversal functions",sidebar_label:"Traversal",slug:"/api/traversal"},c=void 0,p={unversionedId:"api/traversal",id:"version-3.x/api/traversal",isDocsHomePage:!1,title:"Grid traversal functions",description:"Grid traversal allows finding cells in the vicinity of an origin cell, and determining how to traverse the grid from one cell to another.",source:"@site/versioned_docs/version-3.x/api/traversal.mdx",sourceDirName:"api",slug:"/api/traversal",permalink:"/docs/3.x/api/traversal",editUrl:"https://github.com/uber/h3/edit/master/website/docs/api/traversal.mdx",tags:[],version:"3.x",frontMatter:{id:"traversal",title:"Grid traversal functions",sidebar_label:"Traversal",slug:"/api/traversal"},sidebar:"version-3.x/someSidebar",previous:{title:"Inspection",permalink:"/docs/3.x/api/inspection"},next:{title:"Hierarchy",permalink:"/docs/3.x/api/hierarchy"}},u=[{value:"kRing",id:"kring",children:[],level:2},{value:"maxKringSize",id:"maxkringsize",children:[],level:2},{value:"kRingDistances",id:"kringdistances",children:[],level:2},{value:"hexRange",id:"hexrange",children:[],level:2},{value:"hexRangeDistances",id:"hexrangedistances",children:[],level:2},{value:"hexRanges",id:"hexranges",children:[],level:2},{value:"hexRing",id:"hexring",children:[],level:2},{value:"h3Line",id:"h3line",children:[],level:2},{value:"h3LineSize",id:"h3linesize",children:[],level:2},{value:"h3Distance",id:"h3distance",children:[],level:2},{value:"experimentalH3ToLocalIj",id:"experimentalh3tolocalij",children:[],level:2},{value:"experimentalLocalIjToH3",id:"experimentallocalijtoh3",children:[],level:2}],m={toc:u};function v(e){var a=e.components,n=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,t.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Grid traversal allows finding cells in the vicinity of an origin cell, and determining how to traverse the grid from one cell to another."),(0,r.kt)("h2",{id:"kring"},"kRing"),(0,r.kt)(l.Z,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"void kRing(H3Index origin, int k, H3Index* out);\n"))),(0,r.kt)(o.Z,{value:"python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"h3.k_ring(origin, k)\n"))),(0,r.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"List<Long> kRing(long origin, int k);\nList<String> kRing(String origin, int k);\n"))),(0,r.kt)(o.Z,{value:"javascript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"h3.kRing(origin, k)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const h = '85283473fffffff';\n  const k = 5;\n  return h3v3.kRing(h, k);\n}\n")))),(0,r.kt)("p",null,"k-rings produces indices within k distance of the origin index."),(0,r.kt)("p",null,"k-ring 0 is defined as the origin index, k-ring 1 is defined as k-ring 0 and\nall neighboring indices, and so on."),(0,r.kt)("p",null,"Output is placed in the provided array in no particular order. Elements of\nthe output array may be left zero, as can happen when crossing a pentagon."),(0,r.kt)("h2",{id:"maxkringsize"},"maxKringSize"),(0,r.kt)(l.Z,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"int maxKringSize(int k);\n"))),(0,r.kt)(o.Z,{value:"python",mdxType:"TabItem"},(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This function exists for memory management and is not exposed.")))),(0,r.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This function exists for memory management and is not exposed.")))),(0,r.kt)(o.Z,{value:"javascript",mdxType:"TabItem"},(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This function exists for memory management and is not exposed."))))),(0,r.kt)("p",null,"Maximum number of indices that result from the kRing algorithm with the given k."),(0,r.kt)("h2",{id:"kringdistances"},"kRingDistances"),(0,r.kt)(l.Z,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"void kRingDistances(H3Index origin, int k, H3Index* out, int* distances);\n"))),(0,r.kt)(o.Z,{value:"python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"h3.k_ring_distances(origin, k)\n"))),(0,r.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"List<List<Long>> kRingDistances(long origin, int k);\nList<List<String>> kRingDistances(String origin, int k);\n"))),(0,r.kt)(o.Z,{value:"javascript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"h3.kRingDistances(origin, k)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const h = '85283473fffffff';\n  const k = 5;\n  return h3v3.kRingDistances(h, k);\n}\n")))),(0,r.kt)("p",null,"k-rings produces indices within k distance of the origin index."),(0,r.kt)("p",null,"k-ring 0 is defined as the origin index, k-ring 1 is defined as k-ring 0 and\nall neighboring indices, and so on."),(0,r.kt)("p",null,"Output is placed in the provided array in no particular order. Elements of\nthe output array may be left zero, as can happen when crossing a pentagon."),(0,r.kt)("h2",{id:"hexrange"},"hexRange"),(0,r.kt)(l.Z,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"int hexRange(H3Index origin, int k, H3Index* out);\n"))),(0,r.kt)(o.Z,{value:"python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"h3.hex_range(h, k)\n"))),(0,r.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"List<List<Long>> hexRange(Long h3, int k) throws PentagonEncounteredException;\nList<List<String>> hexRange(String h3Address, int k) throws PentagonEncounteredException;\n"))),(0,r.kt)(o.Z,{value:"javascript",mdxType:"TabItem"},(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This function is not exposed."))))),(0,r.kt)("p",null,"hexRange produces indexes within k distance of the origin index.\nOutput behavior is undefined when one of the indexes returned by this\nfunction is a pentagon or is in the pentagon distortion area."),(0,r.kt)("p",null,"k-ring 0 is defined as the origin index, k-ring 1 is defined as k-ring 0 and\nall neighboring indexes, and so on."),(0,r.kt)("p",null,"Output is placed in the provided array in order of increasing distance from\nthe origin."),(0,r.kt)("p",null,"Returns 0 if no pentagonal distortion is encountered."),(0,r.kt)("h2",{id:"hexrangedistances"},"hexRangeDistances"),(0,r.kt)(l.Z,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"int hexRangeDistances(H3Index origin, int k, H3Index* out, int* distances);\n"))),(0,r.kt)(o.Z,{value:"python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"h3.hex_range_distances(h, k)\n"))),(0,r.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This function is not exposed because the same functionality is exposed by ",(0,r.kt)("inlineCode",{parentName:"p"},"hexRange"))))),(0,r.kt)(o.Z,{value:"javascript",mdxType:"TabItem"},(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This function is not exposed."))))),(0,r.kt)("p",null,"hexRange produces indexes within k distance of the origin index.\nOutput behavior is undefined when one of the indexes returned by this\nfunction is a pentagon or is in the pentagon distortion area."),(0,r.kt)("p",null,"k-ring 0 is defined as the origin index, k-ring 1 is defined as k-ring 0 and\nall neighboring indexes, and so on."),(0,r.kt)("p",null,"Output is placed in the provided array in order of increasing distance from\nthe origin. The distances in hexagons is placed in the distances array at\nthe same offset."),(0,r.kt)("p",null,"Returns 0 if no pentagonal distortion is encountered."),(0,r.kt)("h2",{id:"hexranges"},"hexRanges"),(0,r.kt)(l.Z,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"int hexRanges(H3Index* h3Set, int length, int k, H3Index* out);\n"))),(0,r.kt)(o.Z,{value:"python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"h3.hex_ranges(h, k)\n"))),(0,r.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This function is not exposed because the same functionality is exposed by ",(0,r.kt)("inlineCode",{parentName:"p"},"hexRange"))))),(0,r.kt)(o.Z,{value:"javascript",mdxType:"TabItem"},(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This function is not exposed."))))),(0,r.kt)("p",null,"hexRanges takes an array of input hex IDs and a max k-ring and returns an\narray of hexagon IDs sorted first by the original hex IDs and then by the\nk-ring (0 to max), with no guaranteed sorting within each k-ring group."),(0,r.kt)("p",null,"Returns 0 if no pentagonal distortion was encountered. Otherwise, output\nis undefined"),(0,r.kt)("h2",{id:"hexring"},"hexRing"),(0,r.kt)(l.Z,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"int hexRing(H3Index origin, int k, H3Index* out);\n"))),(0,r.kt)(o.Z,{value:"python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"h3.hex_ring(h, k)\n"))),(0,r.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"List<Long> hexRing(long h3, int k) throws PentagonEncounteredException;\nList<String> hexRing(String h3Address, int k) throws PentagonEncounteredException;\n"))),(0,r.kt)(o.Z,{value:"javascript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"h3.hexRing(h3Index, k)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const h = '85283473fffffff';\n  const k = 1;\n  return h3v3.hexRing(h, k);\n}\n")))),(0,r.kt)("p",null,"Produces the hollow hexagonal ring centered at origin with sides of length k."),(0,r.kt)("p",null,"Returns 0 if no pentagonal distortion was encountered."),(0,r.kt)("h2",{id:"h3line"},"h3Line"),(0,r.kt)(l.Z,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"int h3Line(H3Index start, H3Index end, H3Index* out);\n"))),(0,r.kt)(o.Z,{value:"python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"h3.h3_line(start, end)\n"))),(0,r.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"List<Long> h3Line(long start, long end) throws LineUndefinedException\nList<String> h3Line(String startAddress, String endAddress) throws LineUndefinedException\n"))),(0,r.kt)(o.Z,{value:"javascript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"h3.h3Line(start, end)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const start = '85283473fffffff';\n  const end = '8528342bfffffff';\n  return h3v3.h3Line(start, end);\n}\n")))),(0,r.kt)("p",null,"Given two H3 indexes, return the line of indexes between them (inclusive)."),(0,r.kt)("p",null,"This function may fail to find the line between two indexes, for\nexample if they are very far apart. It may also fail when finding\ndistances for indexes on opposite sides of a pentagon."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Notes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The specific output of this function should not be considered stable\nacross library versions. The only guarantees the library provides are\nthat the line length will be ",(0,r.kt)("inlineCode",{parentName:"p"},"h3Distance(start, end) + 1")," and that\nevery index in the line will be a neighbor of the preceding index.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Lines are drawn in grid space, and may not correspond exactly to either\nCartesian lines or great arcs."))),(0,r.kt)("h2",{id:"h3linesize"},"h3LineSize"),(0,r.kt)(l.Z,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"int h3LineSize(H3Index start, H3Index end);\n"))),(0,r.kt)(o.Z,{value:"python",mdxType:"TabItem"},(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This function exists for memory management and is not exposed.")))),(0,r.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This function exists for memory management and is not exposed.")))),(0,r.kt)(o.Z,{value:"javascript",mdxType:"TabItem"},(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This function exists for memory management and is not exposed."))))),(0,r.kt)("p",null,"Number of indexes in a line from the start index to the end index,\nto be used for allocating memory. Returns a negative number if the\nline cannot be computed."),(0,r.kt)("h2",{id:"h3distance"},"h3Distance"),(0,r.kt)(l.Z,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"int h3Distance(H3Index origin, H3Index h3);\n"))),(0,r.kt)(o.Z,{value:"python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"h3.h3_distance(h1, h2)\n"))),(0,r.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"int h3Distance(long a, long b) throws DistanceUndefinedException;\nint h3Distance(String a, String b) throws DistanceUndefinedException;\n"))),(0,r.kt)(o.Z,{value:"javascript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"h3.h3Distance(a, b)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const start = '85283473fffffff';\n  const end = '8528342bfffffff';\n  return h3v3.h3Distance(start, end);\n}\n")))),(0,r.kt)("p",null,"Returns the distance in grid cells between the two indexes."),(0,r.kt)("p",null,"Returns a negative number if finding the distance failed. Finding the distance can fail because the two\nindexes are not comparable (different resolutions), too far apart, or are separated by pentagonal\ndistortion. This is the same set of limitations as the local IJ coordinate space functions."),(0,r.kt)("h2",{id:"experimentalh3tolocalij"},"experimentalH3ToLocalIj"),(0,r.kt)(l.Z,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"int experimentalH3ToLocalIj(H3Index origin, H3Index h3, CoordIJ *out);\n"))),(0,r.kt)(o.Z,{value:"python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"h3.experimental_h3_to_local_ij(origin, h)\n"))),(0,r.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"CoordIJ experimentalH3ToLocalIj(long origin, long h3) throws PentagonEncounteredException, LocalIjUndefinedException;\nCoordIJ experimentalH3ToLocalIj(String originAddress, String h3Address) throws PentagonEncounteredException, LocalIjUndefinedException;\n"))),(0,r.kt)(o.Z,{value:"javascript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"h3.experimentalH3ToLocalIj(origin, h3)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const origin = '85283473fffffff';\n  const h = '8528342bfffffff';\n  const {i, j} = h3v3.experimentalH3ToLocalIj(origin, h);\n  return [i, j];\n}\n")))),(0,r.kt)("p",null,"Produces local IJ coordinates for an H3 index anchored by an origin."),(0,r.kt)("p",null,"This function is experimental, and its output is not guaranteed\nto be compatible across different versions of H3."),(0,r.kt)("h2",{id:"experimentallocalijtoh3"},"experimentalLocalIjToH3"),(0,r.kt)(l.Z,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"c",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"int experimentalLocalIjToH3(H3Index origin, const CoordIJ *ij, H3Index *out);\n"))),(0,r.kt)(o.Z,{value:"python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"h3.experimental_local_ij_to_h3(origin, i, j)\n"))),(0,r.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"long experimentalLocalIjToH3(long origin, CoordIJ ij) throws LocalIjUndefinedException;\nString experimentalLocalIjToH3(String originAddress, CoordIJ ij) throws LocalIjUndefinedException;\n"))),(0,r.kt)(o.Z,{value:"javascript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"h3.experimentalLocalIjToH3(origin, coords)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const h = '85283473fffffff';\n  const coords = {i: 0, j: 0};\n  return h3v3.experimentalLocalIjToH3(h, coords);\n}\n")))),(0,r.kt)("p",null,"Produces an H3 index from local IJ coordinates anchored by an origin."),(0,r.kt)("p",null,"This function is experimental, and its output is not guaranteed\nto be compatible across different versions of H3."))}v.isMDXComponent=!0}}]);