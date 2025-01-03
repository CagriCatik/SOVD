"use strict";(self.webpackChunkSOVD=self.webpackChunkSOVD||[]).push([[7893],{5955:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"knowledge-base/methods/capability-discovery","title":"Capability Discovery","description":"---","source":"@site/docs/knowledge-base/04_methods/capability-discovery.md","sourceDirName":"knowledge-base/04_methods","slug":"/knowledge-base/methods/capability-discovery","permalink":"/SOVD/docs/knowledge-base/methods/capability-discovery","draft":false,"unlisted":false,"editUrl":"https://github.com/CagriCatik/SOVD/edit/main/docs/knowledge-base/04_methods/capability-discovery.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"SOVD Methods and Functionalities","permalink":"/SOVD/docs/category/sovd-methods-and-functionalities"},"next":{"title":"Resource Discovery and Queries","permalink":"/SOVD/docs/knowledge-base/methods/resource-discovery-and-queries"}}');var t=n(4848),o=n(8453);const a={sidebar_position:1},r="Capability Discovery",l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Objectives of Capability Discovery",id:"objectives-of-capability-discovery",level:3},{value:"SOVD Architecture",id:"sovd-architecture",level:2},{value:"Core Components",id:"core-components",level:3},{value:"Integration with Existing Standards",id:"integration-with-existing-standards",level:3},{value:"Capability Discovery: Implementation",id:"capability-discovery-implementation",level:2},{value:"Overview",id:"overview",level:3},{value:"Methods for Capability Discovery",id:"methods-for-capability-discovery",level:3},{value:"Benefits of Capability Discovery",id:"benefits-of-capability-discovery",level:2},{value:"For Developers",id:"for-developers",level:3},{value:"For Diagnostic Applications",id:"for-diagnostic-applications",level:3},{value:"For End-Users",id:"for-end-users",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"capability-discovery",children:"Capability Discovery"})}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(i.p,{children:"SOVD, standardized by ASAM (Association for Standardization of Automation and Measuring Systems), represents the evolution of vehicle diagnostics from static, hardware-focused processes (as seen in UDS) to a dynamic, software-driven paradigm. SOVD leverages modern IT technologies, including HTTP, REST, and JSON, to provide a uniform interface for vehicle diagnostics across development, production, and service phases."}),"\n",(0,t.jsx)(i.h3,{id:"objectives-of-capability-discovery",children:"Objectives of Capability Discovery"}),"\n",(0,t.jsx)(i.p,{children:"Capability discovery in SOVD enables:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Identifying available diagnostic functionalities of components or systems."}),"\n",(0,t.jsx)(i.li,{children:"Discovering resources dynamically and efficiently, minimizing the need for preloaded data descriptions."}),"\n",(0,t.jsx)(i.li,{children:"Supporting structured and scalable approaches to vehicle diagnostics by leveraging RESTful interactions and self-descriptive APIs."}),"\n"]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h2,{id:"sovd-architecture",children:"SOVD Architecture"}),"\n",(0,t.jsx)(i.h3,{id:"core-components",children:"Core Components"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"SOVD Gateway"}),": Acts as the edge node, routing client requests to corresponding internal endpoints based on URI."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Diagnostic Manager"}),": Functions as the SOVD server, managing diagnostics for HPCs and classic ECUs, and translating between SOVD and UDS protocols where necessary."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Backend Connectivity"}),": Facilitates remote access to diagnostic data, abstracting backend connections via HTTP/REST."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"integration-with-existing-standards",children:"Integration with Existing Standards"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Encapsulation of UDS (ISO 14229-1), enabling the reuse of established protocols for fault codes, routines, and data."}),"\n",(0,t.jsx)(i.li,{children:"Alignment with AUTOSAR Adaptive for seamless diagnostics in HPC environments."}),"\n"]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h2,{id:"capability-discovery-implementation",children:"Capability Discovery: Implementation"}),"\n",(0,t.jsx)(i.h3,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(i.p,{children:"Capability discovery provides dynamic access to the vehicle\u2019s diagnostic capabilities. It eliminates reliance on static descriptions like ODX by offering:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Resource queries via RESTful APIs."}),"\n",(0,t.jsx)(i.li,{children:"Self-descriptive data and metadata about available services, components, and functions."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"methods-for-capability-discovery",children:"Methods for Capability Discovery"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Resource Identification"}),":"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Use the ",(0,t.jsx)(i.code,{children:"/components"})," resource to enumerate all available entities (e.g., ECUs, HPCs, apps)."]}),"\n",(0,t.jsxs)(i.li,{children:["Example:","\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:'GET {base_uri}/components\nResponse:\n{\n  "items": [\n    { "id": "engine", "name": "Engine Control Unit", "href": "{base_uri}/components/engine" },\n    { "id": "brakes", "name": "Brake Control Unit", "href": "{base_uri}/components/brakes" }\n  ]\n}\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Data Categorization"}),":"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Supports categories such as ",(0,t.jsx)(i.code,{children:"currentData"}),", ",(0,t.jsx)(i.code,{children:"identData"}),", and ",(0,t.jsx)(i.code,{children:"storedData"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Filters allow granular queries, e.g., identification data:","\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"GET {base_uri}/components/{component_id}/data?categories=identData\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Schema Queries"}),":"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"OpenAPI specifications facilitate querying capability descriptions online."}),"\n",(0,t.jsx)(i.li,{children:"Developers can generate type-safe libraries for diagnostics, simplifying integration."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h2,{id:"benefits-of-capability-discovery",children:"Benefits of Capability Discovery"}),"\n",(0,t.jsx)(i.h3,{id:"for-developers",children:"For Developers"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Eliminates the need for preloaded external descriptions, accelerating diagnostics and updates."}),"\n",(0,t.jsx)(i.li,{children:"Enables the use of type-safe libraries generated via OpenAPI, streamlining development."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"for-diagnostic-applications",children:"For Diagnostic Applications"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Supports simultaneous multi-client access, useful for remote diagnostics and collaboration."}),"\n",(0,t.jsx)(i.li,{children:"Integrates seamlessly into modern development environments, such as web-based or cloud systems."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"for-end-users",children:"For End-Users"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Simplifies diagnostic tool interfaces with readable and symbolic data outputs."}),"\n",(0,t.jsx)(i.li,{children:"Reduces downtime by enabling parallel in-workshop and remote diagnostics."}),"\n"]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(i.p,{children:"Capability discovery in SOVD represents a transformative shift in vehicle diagnostics. By adopting modern IT standards, SOVD facilitates dynamic, scalable, and efficient diagnostic operations. As the automotive industry continues to adopt HPCs and software-centric architectures, the importance of SOVD will only grow, paving the way for innovative applications and seamless integration across diverse platforms."})]})}function h(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>a,x:()=>r});var s=n(6540);const t={},o=s.createContext(t);function a(e){const i=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(o.Provider,{value:i},e.children)}}}]);