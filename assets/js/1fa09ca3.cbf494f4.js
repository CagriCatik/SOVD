"use strict";(self.webpackChunkSOVD=self.webpackChunkSOVD||[]).push([[645],{9392:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"simulation/core-features","title":"Core Features","description":"RESTful API Design","source":"@site/docs/simulation/4_core-features.md","sourceDirName":"simulation","slug":"/simulation/core-features","permalink":"/SOVD/docs/simulation/core-features","draft":false,"unlisted":false,"editUrl":"https://github.com/CagriCatik/SOVD/edit/main/docs/simulation/4_core-features.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{},"sidebar":"simulationSidebar","previous":{"title":"Architecture","permalink":"/SOVD/docs/simulation/architecture"},"next":{"title":"Simulation Aspects","permalink":"/SOVD/docs/simulation/simulation-aspects"}}');var s=n(4848),a=n(8453);const o={},r="Core Features",c={},l=[];function d(e){const t={h1:"h1",header:"header",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"core-features",children:"Core Features"})}),"\n",(0,s.jsx)(t.p,{children:"RESTful API Design\nThe simulator adheres to REST principles, offering a resource-oriented API that enables seamless interaction with diagnostic data and operations. Resources are exposed through clear and consistent endpoints, facilitating intuitive access and manipulation."}),"\n",(0,s.jsx)(t.p,{children:"Features:"}),"\n",(0,s.jsx)(t.p,{children:"HTTP Methods: Utilize standard methods (GET, POST, PUT, DELETE) for CRUD operations.\nJSON Data Exchange: Employ JSON for data serialization and transmission.\nStateless Interactions: Ensure each request contains all necessary information for processing.\nData Operations\nThe API allows clients to perform a variety of diagnostic operations, including:"}),"\n",(0,s.jsx)(t.p,{children:"Read Diagnostic Data: Retrieve current diagnostic information from ECUs.\nWrite Diagnostic Data: Update configurations or settings on ECUs.\nExecute Operations: Trigger specific diagnostic procedures or actions.\nManage Fault Memory: Access and modify fault codes and memory states.\nSecurity and Authorization\nSecurity is enforced using OAuth-based authorization, ensuring that only authenticated and authorized clients can access the simulator\u2019s functionalities. This mechanism supports secure data transactions and protects sensitive diagnostic information."}),"\n",(0,s.jsx)(t.p,{children:"Features:"}),"\n",(0,s.jsx)(t.p,{children:"OAuth 2.0: Implemented for secure token-based authentication.\nRole-Based Access Control: Define roles and permissions for different client types.\nSecure Data Transmission: Utilize HTTPS for encrypted communication.\nMulti-Client Support\nThe simulator is designed to handle multiple clients simultaneously, allowing concurrent diagnostic sessions without interference. This is essential for environments where multiple testers or tools interact with the vehicle diagnostics system."}),"\n",(0,s.jsx)(t.p,{children:"Data Access Modes\nSupport for both periodic and trigger-based data access enables flexible interaction patterns:"}),"\n",(0,s.jsx)(t.p,{children:"Periodic Access: Clients can request data at regular intervals, suitable for continuous monitoring.\nTrigger-Based Access: Data access is initiated based on specific events or conditions, enabling responsive diagnostics.\nSelf-Describing API\nThe API is self-describing, adhering to OpenAPI specifications. This allows automatic generation of interactive documentation and facilitates easier integration with client tools."}),"\n",(0,s.jsx)(t.p,{children:"Features:"}),"\n",(0,s.jsx)(t.p,{children:"OpenAPI Specification: Defines the API endpoints, request/response models, and authentication methods.\nInteractive Documentation: Enables tools like Swagger UI to provide real-time API exploration and testing."})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var i=n(6540);const s={},a=i.createContext(s);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);