---
ref: board-connector-07
layout: page
title: Server
description: Server
product: board-connector
parent: board-connector
childidentifier: server
permalink: /:collection/:path
weight: 7
lang: en_GB
progressstate: 5
---

The follwing section contains an overview of the Board Connector server.

The server performs two main tasks:

- Run extractions stored in the [Config](./advanced-techniques/backup-and-migration#configuration-files) directory. 
- Make extractions stored in the [Config](./advanced-techniques/backup-and-migration#configuration-files) directory available to the Designer.

### Run Extraction on the Server

Execution is triggered by an HTTP request. The HTTP request is triggered from the target environment. 

{: .box-tip }
**Tip:** The process can be traced in the [Extraction Log](./logging/logging-access-via-designer#extraction-logs).

1. Server checks the authentication and authorization of the request.
2. The target environment is prepared for writing the extracted data (e.g. establish database connection, create file).
3. The license is checked.
4. A connection to the SAP system defined in the source is established.
5. The data of the defined extraction type is requested.
6. Each extracted data package is written to the target environment.
7. After all packages are received, the connection to the SAP system is terminated and the target environment is informed that the extraction is complete.

### Access the Settings using the Designer

1. BCConfigServer.exe checks the authentication and authorization of the request.
2. Designer requests a certain setting, e.g., list of all extractions. 
3. BCConfigServer.exe reads the requested settings from the [Config directory](./advanced-techniques/backup-and-migration#configuration-files) and sends these settings to the Designer.
4. The user changes the settings in the Designer.
5. Designer sends the changed settings back to BCConfigServer.exe. BCConfigServer.exe saves the changed settings in the [Config directory](./advanced-techniques/backup-and-migration#configuration-files).

### Server Architecture

The server runs as a Windows Service and the main process of the BC Service is BCService.exe. The Windows Service can be [managed](./server/start-server) via the Windows Services administration or the Task Manager.
BCService.exe starts two listener processes:
- Theobald.Bc.Web.Listener.exe
- BCConfigServer.exe

{: .box-tip }
**Tip**: The BCService.exe logs its actions in ServiceLog.txt 
The log file is located in the logs subdirectory of the program directory: 'C:ProgramFiles\Board Connector\logs' (default).


The both listener processes listen on the [Ports](./server/ports) defined in the [Server Settings](./server/server-settings).

BCConfigServer.exe waits for new connection requests from the designer. 

{: .box-tip }
**Tip:** The BCConfigServer.exe logs its actions in log files. 
The log files are located in the logs subdirectory of the program directory: 'C:ProgramFiles\Board Connector\logs\server\config' (default).

Theobald.Bc.Web.Listener.exe waits for HTTP requests. 

For each TCP connection the Theobald.Bc.Web.Listener.exe starts a new instance of Theobald.Bc.Web.Worker.exe, which processes all HTTP requests coming in over the particular TCP connection.

{: .box-tip }
**Tip:** The Theobald.Bc.Web.Worker.exe logs its actions in the log subdirectory. 
The log files are located in the logs subdirectory of the program directory:`C:ProgramFiles\Board Connector\logs\server\run` (default) 
These are also the logs that can be displayed in the Designer under **[Server]>[Logs (Run)]**.

{: .box-tip }
**Tip:** The Theobald.Xu.Web.Listener.exe logs its actions in log files. 
The log files are located in the logs subdirectory of the program directory: 'C:ProgramFiles\Board Connector\logs\server\web' (default).

More information about the server can be found in the following sections:

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}
