(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{115:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return h}));var i=n(0),l=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=l.a.createContext({}),d=function(e){var t=l.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return l.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},p=l.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),s=d(n),p=i,h=s["".concat(a,".").concat(p)]||s[p]||u[p]||r;return n?l.a.createElement(h,o(o({ref:t},c),{},{components:n})):l.a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=p;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<r;c++)a[c]=n[c];return l.a.createElement.apply(null,a)}return l.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return d}));var i=n(3),l=n(7),r=(n(0),n(115)),a={id:"h3Indexing",title:"H3 Index Representations",sidebar_label:"H3 Index Representations",slug:"/core-library/h3Indexing"},o={unversionedId:"core-library/h3Indexing",id:"core-library/h3Indexing",isDocsHomePage:!1,title:"H3 Index Representations",description:"Introduction",source:"@site/docs/core-library/h3indexing.md",sourceDirName:"core-library",slug:"/core-library/h3Indexing",permalink:"/docs/core-library/h3Indexing",editUrl:"https://github.com/uber/h3/edit/master/website/docs/core-library/h3indexing.md",version:"current",sidebar_label:"H3 Index Representations",frontMatter:{id:"h3Indexing",title:"H3 Index Representations",sidebar_label:"H3 Index Representations",slug:"/core-library/h3Indexing"},sidebar:"someSidebar",previous:{title:"Table of Cell Areas for H3 Resolutions",permalink:"/docs/core-library/restable"},next:{title:"Coordinate systems",permalink:"/docs/core-library/coordsystems"}},b=[{value:"Introduction",id:"introduction",children:[]},{value:"H3Index Representation",id:"h3index-representation",children:[{value:"Invalid Index",id:"invalid-index",children:[]},{value:"H3 Cell Index",id:"h3-cell-index",children:[]},{value:"H3 Unidirectional Edge Index",id:"h3-unidirectional-edge-index",children:[]},{value:"H3 Vertex Index",id:"h3-vertex-index",children:[]}]},{value:"Bit layout of H3Index",id:"bit-layout-of-h3index",children:[]},{value:"Links",id:"links",children:[]}],c={toc:b};function d(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"introduction"},"Introduction"),Object(r.b)("p",null,"The H3 system assigns a unique hierarchical index to each cell. The H3 index of a resolution ",Object(r.b)("em",{parentName:"p"},"r")," cell begins with the appropriate resolution 0 base cell number. This is followed by a sequence of ",Object(r.b)("em",{parentName:"p"},"r")," digits 0-6, where each ",Object(r.b)("em",{parentName:"p"},"i"),Object(r.b)("sup",null,"th")," digit ",Object(r.b)("em",{parentName:"p"},"d"),Object(r.b)("sub",null,"i")," specifies one of the 7 cells centered on the cell indicated by the coarser resolution digits ",Object(r.b)("em",{parentName:"p"},"d"),Object(r.b)("sub",null,"1")," through ",Object(r.b)("em",{parentName:"p"},"d"),Object(r.b)("sub",null,"i-1"),". A local hexagon coordinate system is assigned to each of the resolution 0 base cells and is used to orient all hierarchical indexing child cells of that base cell. The assignment of digits 0-6 at each resolution uses a ",Object(r.b)("em",{parentName:"p"},"Central Place Indexing")," arrangement (see ",Object(r.b)("a",{parentName:"p",href:"http://webpages.sou.edu/~sahrk/sqspc/pubs/autocarto14.pdf"},"Sahr, 2014"),"). In the case of the 12 pentagonal cells the indexing hierarchy produced by sub-digit 1 is removed at all resolutions."),Object(r.b)("p",null,"Child hexagons are linearly smaller than their parent hexagons."),Object(r.b)("div",{align:"center"},Object(r.b)("img",{height:"300",src:"/images/cpidigits.png"})),Object(r.b)("h2",{id:"h3index-representation"},"H3Index Representation"),Object(r.b)("p",null,"An ",Object(r.b)("inlineCode",{parentName:"p"},"H3Index")," is the integer representation of an H3 index, which may be one of multiple modes to indicate the concept being indexed."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Mode 0 is reserved and indicates an invalid H3 index."),Object(r.b)("li",{parentName:"ul"},"Mode 1 is an ",Object(r.b)("em",{parentName:"li"},"H3 Cell")," (Hexagon/Pentagon) index."),Object(r.b)("li",{parentName:"ul"},"Mode 2 is an ",Object(r.b)("em",{parentName:"li"},"H3 Unidirectional Edge")," (Cell A -> Cell B) index."),Object(r.b)("li",{parentName:"ul"},"Mode 3 is planned to be a bidirectional edge (Cell A <-> Cell B)."),Object(r.b)("li",{parentName:"ul"},"Mode 4 is an ",Object(r.b)("em",{parentName:"li"},"H3 Vertex")," (i.e. a single vertex of an H3 Cell).")),Object(r.b)("p",null,"The canonical string representation of an ",Object(r.b)("inlineCode",{parentName:"p"},"H3Index")," is the hexadecimal representation of the integer, using lowercase letters. The string representation is variable length (no zero padding) and is not prefixed or suffixed."),Object(r.b)("h3",{id:"invalid-index"},"Invalid Index"),Object(r.b)("p",null,"Mode 0 contains a special index, ",Object(r.b)("inlineCode",{parentName:"p"},"H3_NULL"),", which is unique: it is bit-equivalent to ",Object(r.b)("inlineCode",{parentName:"p"},"0"),".\nThis index indicates, ",Object(r.b)("em",{parentName:"p"},"specifically"),", an invalid, missing, or uninitialized H3 index;\nit is analogous to ",Object(r.b)("inlineCode",{parentName:"p"},"NaN")," in floating point.\nIt should be used instead of an arbitrary Mode 0 index, due to its uniqueness and easy identifiability."),Object(r.b)("h3",{id:"h3-cell-index"},"H3 Cell Index"),Object(r.b)("p",null,"An H3 Cell index (mode 1) represents a cell (hexagon or pentagon) in the H3 grid system at a particular resolution. The components of the H3 Cell index are packed into a 64-bit integer in order, highest bit first, as follows:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"1 bit reserved and set to 0,"),Object(r.b)("li",{parentName:"ul"},"4 bits to indicate the H3 Cell index mode,"),Object(r.b)("li",{parentName:"ul"},"3 bits reserved and set to 0,"),Object(r.b)("li",{parentName:"ul"},"4 bits to indicate the cell resolution 0-15,"),Object(r.b)("li",{parentName:"ul"},"7 bits to indicate the base cell 0-121,"),Object(r.b)("li",{parentName:"ul"},"3 bits to indicate each subsequent digit 0-6 from resolution 1 up to the resolution of the cell (45 bits total are reserved for resolutions 1-15)")),Object(r.b)("p",null,"The three bits for each unused digit are set to 7."),Object(r.b)("h3",{id:"h3-unidirectional-edge-index"},"H3 Unidirectional Edge Index"),Object(r.b)("p",null,'An H3 Undirectional Edge index (mode 2) represents a single directed edge between two cells (an "origin" cell and a neighboring "destination" cell). The components of the H3 Unidirectional Edge index are packed into a 64-bit integer in order, highest bit first, as follows:'),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"1 bit reserved and set to 0,"),Object(r.b)("li",{parentName:"ul"},"4 bits to indicate the H3 Unidirectional Edge index mode,"),Object(r.b)("li",{parentName:"ul"},"3 bits to indicate the edge (1-6) of the origin cell,"),Object(r.b)("li",{parentName:"ul"},"Subsequent bits matching the index bits of the origin cell.")),Object(r.b)("h3",{id:"h3-vertex-index"},"H3 Vertex Index"),Object(r.b)("p",null,'An H3 Vertex index (mode 4) represents a single topological vertex in H3 grid system, shared by three cells. Note that this does not include the distortion vertexes occasionally present in a cell\'s geo boundary. An H3 Vertex is arbitrarily assigned one of the three neighboring cells as its "owner", which is used to calculate the canonical index and geo coordinate for the vertex. The components of the H3 Vertex index are packed into a 64-bit integer in order, highest bit first, as follows:'),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"1 bit reserved and set to 0,"),Object(r.b)("li",{parentName:"ul"},"4 bits to indicate the H3 Vertex index mode,"),Object(r.b)("li",{parentName:"ul"},"3 bits to indicate the vertex number (0-5) of vertex on the owner cell,"),Object(r.b)("li",{parentName:"ul"},"Subsequent bits matching the index bits of the owner cell.")),Object(r.b)("h2",{id:"bit-layout-of-h3index"},"Bit layout of H3Index"),Object(r.b)("p",null,"The layout of an ",Object(r.b)("inlineCode",{parentName:"p"},"H3Index"),' is shown below in table form. The interpretation of the "Reserved" field differs depending on the mode of the index.'),Object(r.b)("table",null,Object(r.b)("tr",null,Object(r.b)("th",null),Object(r.b)("th",null,"0x0F"),Object(r.b)("th",null,"0x0E"),Object(r.b)("th",null,"0x0D"),Object(r.b)("th",null,"0x0C"),Object(r.b)("th",null,"0x0B"),Object(r.b)("th",null,"0x0A"),Object(r.b)("th",null,"0x09"),Object(r.b)("th",null,"0x08"),Object(r.b)("th",null,"0x07"),Object(r.b)("th",null,"0x06"),Object(r.b)("th",null,"0x05"),Object(r.b)("th",null,"0x04"),Object(r.b)("th",null,"0x03"),Object(r.b)("th",null,"0x02"),Object(r.b)("th",null,"0x01"),Object(r.b)("th",null,"0x00")),Object(r.b)("tr",null,Object(r.b)("th",null,"0x30"),Object(r.b)("td",null,"Reserved"),Object(r.b)("td",{colspan:"4"},"Mode"),Object(r.b)("td",{colspan:"3"},"Mode-Dependent"),Object(r.b)("td",{colspan:"4"},"Resolution"),Object(r.b)("td",{colspan:"4"},"Base cell")),Object(r.b)("tr",null,Object(r.b)("th",null,"0x20"),Object(r.b)("td",{colspan:"3"},"Base cell"),Object(r.b)("td",{colspan:"3"},"Digit 1"),Object(r.b)("td",{colspan:"3"},"Digit 2"),Object(r.b)("td",{colspan:"3"},"Digit 3"),Object(r.b)("td",{colspan:"3"},"Digit 4"),Object(r.b)("td",null,"Digit 5")),Object(r.b)("tr",null,Object(r.b)("th",null,"0x10"),Object(r.b)("td",{colspan:"2"},"Digit 5"),Object(r.b)("td",{colspan:"3"},"Digit 6"),Object(r.b)("td",{colspan:"3"},"Digit 7"),Object(r.b)("td",{colspan:"3"},"Digit 8"),Object(r.b)("td",{colspan:"3"},"Digit 9"),Object(r.b)("td",{colspan:"2"},"Digit 10")),Object(r.b)("tr",null,Object(r.b)("th",null,"0x00"),Object(r.b)("td",null,"Digit 10"),Object(r.b)("td",{colspan:"3"},"Digit 11"),Object(r.b)("td",{colspan:"3"},"Digit 12"),Object(r.b)("td",{colspan:"3"},"Digit 13"),Object(r.b)("td",{colspan:"3"},"Digit 14"),Object(r.b)("td",{colspan:"3"},"Digit 15"))),Object(r.b)("h2",{id:"links"},"Links"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Observable notebook example: ",Object(r.b)("a",{parentName:"li",href:"https://observablehq.com/@nrabinowitz/h3-index-bit-layout?collection=@nrabinowitz/h3"},"H3 Index Bit Layout")),Object(r.b)("li",{parentName:"ul"},"Observable notebook example: ",Object(r.b)("a",{parentName:"li",href:"https://observablehq.com/@nrabinowitz/h3-index-inspector?collection=@nrabinowitz/h3"},"H3 Index Inspector"))))}d.isMDXComponent=!0}}]);