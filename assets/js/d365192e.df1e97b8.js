"use strict";(self.webpackChunkmy_document=self.webpackChunkmy_document||[]).push([[3810],{4179:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"architecture/reference-architecture","title":"Reference Architecture","description":"Introduction","source":"@site/docs/02_architecture/reference-architecture.md","sourceDirName":"02_architecture","slug":"/architecture/reference-architecture","permalink":"/SOVD/docs/architecture/reference-architecture","draft":false,"unlisted":false,"editUrl":"https://github.com/CagriCatik/SOVD/edit/main/docs/02_architecture/reference-architecture.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"SOVD Architecture and Concepts","permalink":"/SOVD/docs/category/sovd-architecture-and-concepts"},"next":{"title":"Core Components of SOVD","permalink":"/SOVD/docs/architecture/core-components"}}');var t=i(4848),r=i(8453);const o={sidebar_position:1},c="Reference Architecture",a={},l=[{value:"<strong>Introduction</strong>",id:"introduction",level:2},{value:"<strong>Key Components of SOVD Reference Architecture</strong>",id:"key-components-of-sovd-reference-architecture",level:2},{value:"<strong>SOVD Use Cases</strong>",id:"sovd-use-cases",level:2},{value:"<strong>General Use Cases</strong>",id:"general-use-cases",level:3},{value:"<strong>Specific Use Cases</strong>",id:"specific-use-cases",level:3},{value:"<strong>Technology Stack</strong>",id:"technology-stack",level:2},{value:"<strong>Benefits of SOVD</strong>",id:"benefits-of-sovd",level:2},{value:"<strong>Integration with Existing Standards</strong>",id:"integration-with-existing-standards",level:2},{value:"<strong>Future Outlook</strong>",id:"future-outlook",level:2},{value:"<strong>Conclusion</strong>",id:"conclusion",level:2}];function d(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"reference-architecture",children:"Reference Architecture"})}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:(0,t.jsx)(n.strong,{children:"Introduction"})}),"\n",(0,t.jsx)(n.p,{children:"Service-Oriented Vehicle Diagnostics (SOVD) is a modern diagnostic paradigm designed to address the increasing complexity of automotive systems, particularly with the introduction of High-Performance Computers (HPCs) and software-driven functionalities. The SOVD standard is developed under the auspices of ASAM and emphasizes flexibility, scalability, and the integration of IT technologies like HTTP/REST and JSON. SOVD complements the Unified Diagnostic Services (UDS) while introducing capabilities to manage software-driven diagnostics dynamically."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"key-components-of-sovd-reference-architecture",children:(0,t.jsx)(n.strong,{children:"Key Components of SOVD Reference Architecture"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"SOVD Gateway"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Serves as the central edge node for SOVD requests."}),"\n",(0,t.jsx)(n.li,{children:"Routes requests to respective internal SOVD endpoints based on the URI entity."}),"\n",(0,t.jsx)(n.li,{children:"Acts as an HTTP reverse proxy and supports both static configuration and dynamic discovery using multicast DNS (mDNS)."}),"\n",(0,t.jsx)(n.li,{children:"Configured via SOVDGatewayInstantiation in the TPS_Manifest."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Diagnostic Manager"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Traditionally handled fault memory and ISO 14229-1 (UDS) diagnostic services."}),"\n",(0,t.jsx)(n.li,{children:"Now acts as an SOVD server, supporting both native SOVD functionalities and translation to UDS where necessary."}),"\n",(0,t.jsx)(n.li,{children:"Represents multiple Diagnostic Server Instances to maintain independence across software clusters."}),"\n",(0,t.jsx)(n.li,{children:"Uses TPS_Manifest for configuration, enabling a seamless blend of UDS and SOVD operations."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"SOVD to UDS Translation"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Provides translation of SOVD commands to UDS requests and vice versa."}),"\n",(0,t.jsx)(n.li,{children:"Relies on ODX (Open Diagnostic eXchange) definitions for mapping."}),"\n",(0,t.jsx)(n.li,{children:"Acts as an onboard test client, ensuring backward compatibility with UDS-based systems."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Backend Connectivity"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Facilitates remote diagnostics by routing SOVD requests through backend systems."}),"\n",(0,t.jsx)(n.li,{children:"Backend connection abstracted as a functional block that integrates seamlessly with SOVD Gateway."}),"\n",(0,t.jsx)(n.li,{children:"Discovery and routing are managed using mDNS and HTTP forwarding."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"sovd-use-cases",children:(0,t.jsx)(n.strong,{children:"SOVD Use Cases"})}),"\n",(0,t.jsx)(n.h3,{id:"general-use-cases",children:(0,t.jsx)(n.strong,{children:"General Use Cases"})}),"\n",(0,t.jsx)(n.p,{children:"SOVD supports a wide range of diagnostic operations across the vehicle lifecycle:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Proximity Diagnostics:"})," Workshop and manufacturing diagnostics, such as end-of-line testing and emission checks."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"In-Vehicle Diagnostics:"})," Real-time health monitoring and predictive maintenance."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Remote Diagnostics:"})," Over-the-air software updates, fleet management, and remote assistance."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"specific-use-cases",children:(0,t.jsx)(n.strong,{children:"Specific Use Cases"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Fault Management:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Fault memory read and write operations."}),"\n",(0,t.jsx)(n.li,{children:"Retrieval of fault details, including associated environmental data."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Operational Control:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Execution of internal software functions and actuator commands."}),"\n",(0,t.jsx)(n.li,{children:"Monitoring, adjusting, or terminating ongoing operations."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Data Handling:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Access to categorized data such as identification data, system information, and stored records."}),"\n",(0,t.jsx)(n.li,{children:"Support for data grouping and aggregated dataset creation."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Software Updates:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"APIs for managing software updates, including preparation, execution, and status tracking."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Logging:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Aggregated log information retrieval."}),"\n",(0,t.jsx)(n.li,{children:"Logging configuration and bulk data transport."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Authorization and Proximity Challenges:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"OAuth-based role-specific authorization."}),"\n",(0,t.jsx)(n.li,{children:"Proximity validation to ensure secure operations."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"technology-stack",children:(0,t.jsx)(n.strong,{children:"Technology Stack"})}),"\n",(0,t.jsx)(n.p,{children:"SOVD leverages modern IT standards to deliver its capabilities:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"HTTP/REST:"})," Stateless communication protocol for seamless client-server interaction."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"JSON:"})," Lightweight data-interchange format for structured diagnostic content."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"OAuth2:"})," Secure access control for resource-specific operations."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"OpenAPI:"})," Standardized API descriptions for easier implementation and tool integration."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"benefits-of-sovd",children:(0,t.jsx)(n.strong,{children:"Benefits of SOVD"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Simplified Diagnostics:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Self-describing APIs eliminate the need for external description files like ODX."}),"\n",(0,t.jsx)(n.li,{children:"Native support for both traditional ECU-based diagnostics and software-driven HPC use cases."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Flexibility and Scalability:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Uniform API for proximity, in-vehicle, and remote diagnostics."}),"\n",(0,t.jsx)(n.li,{children:"Dynamic discovery and configuration capabilities."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Modernized Workflow:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Integration of widely adopted IT standards ensures compatibility with existing development tools and platforms."}),"\n",(0,t.jsx)(n.li,{children:"Support for multi-client access, enabling simultaneous diagnostics from different locations."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Enhanced Use Cases:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Advanced fault analysis with environmental context."}),"\n",(0,t.jsx)(n.li,{children:"Logging and tracing for software-specific diagnostics."}),"\n",(0,t.jsx)(n.li,{children:"OTA updates and dynamic software management."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"integration-with-existing-standards",children:(0,t.jsx)(n.strong,{children:"Integration with Existing Standards"})}),"\n",(0,t.jsx)(n.p,{children:'SOVD does not aim to replace UDS but rather encapsulates and extends its functionality. The classic UDS protocol remains relevant for traditional ECUs, while SOVD introduces new capabilities for HPCs and software-centric diagnostics. The "Classic Diagnostic Adapter" ensures compatibility, translating SOVD requests for UDS-based systems when required.'}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"future-outlook",children:(0,t.jsx)(n.strong,{children:"Future Outlook"})}),"\n",(0,t.jsx)(n.p,{children:"As vehicle architectures evolve, SOVD is poised to become a cornerstone of automotive diagnostics. With its focus on modern IT technologies, it enables a seamless transition from hardware-centric to software-driven diagnostics. Upcoming releases will further enhance its capabilities, including support for periodic and event-triggered diagnostics, enriched authorization mechanisms, and extended logging functionalities."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:(0,t.jsx)(n.strong,{children:"Conclusion"})}),"\n",(0,t.jsx)(n.p,{children:"Service-Oriented Vehicle Diagnostics represents a significant leap in the evolution of automotive diagnostics. By integrating modern web technologies and supporting a wide array of use cases, SOVD ensures that diagnostics keep pace with the growing complexity of vehicle systems. Its compatibility with legacy protocols like UDS ensures a smooth transition for OEMs and suppliers while unlocking new possibilities for software-driven automotive ecosystems."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var s=i(6540);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);