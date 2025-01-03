# Architecture
SOVD Gateway
The SOVD Gateway serves as the centralized hub for all diagnostic communications. It routes incoming requests to the appropriate system components based on the Uniform Resource Identifier (URI). The gateway ensures efficient handling of requests, maintaining scalability and manageability within the simulator.

Key Responsibilities:

Routing diagnostic requests to specific services or components.
Managing session states and connections.
Providing a unified entry point for all API interactions.
Diagnostic Manager
The Diagnostic Manager is responsible for processing diagnostic requests and managing fault memory within the simulator. It interprets incoming commands, executes necessary operations, and maintains the state of simulated ECUs and HPCs.

Key Responsibilities:

Processing read/write diagnostic data operations.
Executing diagnostic procedures and operations.
Managing and storing fault codes and memory.
Coordinating with mock ECUs and HPCs to simulate responses.