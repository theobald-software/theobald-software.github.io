---
ref: yunio-09
layout: page
title: Logs
description: Logs
product: yunio
parent: yunio
permalink: /:collection/:path
weight: 32
lang: en_GB
old_url: /Xtract-Universal-DE/default.aspx?pageid=server
---
 

The following section contains information on the server and transaction logs created by yunIO.

### Display Logs
The logs are located in the *Logs* section of the yunIO Designer. <br>
There are three types of logs:
- **Service Runs:** Displays a list of the latest service runs, including the status of the service run.
- **Service Workers:** Displays logs of service worker processes. For each TCP connection, a service worker process is started. 
It receives the HTTP request, executes the service, and sends the response to the caller.
- **Transaction Workers:** Displays logs of [Transaction](./transactions) services. 
When running Transactions services, a transaction worker process is started. 
It executes the service and produces the response, which is then forwarded to the caller by the service worker.

### Service Runs

The list of service runs consists of the following columns:
- Name of the service
- Date of the log
- Duration of the service run
- State of the service run (*Running*, *FinishedErrors*, *FinishedNoErrors*)

Click a service run to display the corresponding extraction log at the bottom of the menu (1).

![yunIO-Logs](/img/content/yunio/yunIO-Run-Logs.png){:class="img-responsive"}

### Service Workers and Transaction Workers

The logs of the service worker and transaction worker consist of two sections:
- Timestamps of the logs (1)
- Content of the logs (2)

Click a timestamp to open the corresponding logs.

![yunIO-Logs](/img/content/yunio/yunIO-Logs.png){:class="img-responsive"}

#### How to Read Worker Logs

A single log has the following format: `Time | Type | Source | Message`. 
<br> Example:

| Time | Type | Source | Message | 
|--------|--------|--------|---|
| PT00H00M43.777S | D | ExecutionCore: | Extraction finished, firing callback  | 

**Time**<br>
Each log has a timestamp that uses pacific time (PT) in hours (H), minutes (M) and seconds (S), e.g., `PT00H00M43.777S`.

**Type**<br>
Each log entry is assigned one of the following message types:
- **E - Errors:** error messages issued during the extraction process.<br>
- **I - Information:** status messages, about processes that do not lead to an error.<br>
- **W - Warnings:** information about problems that do not lead to an extraction error, e.g., authentication errors.<br>
- **D - Debug Details:** detailed information that helps finding error cause.

#### Structure of a Service Worker Log

The following example highlights the basic structure of service logs that are created when running a yunIO service.<br>
The example is specific for SAP Table extractions, the logs are different for functions and transactions and are subject to change.

1. General technical information is displayed.
```
PT00H00M00.048S I ServicesWorker: Client [fe80::3e2e:aad4:6600:e801%52]:57836
PT00H00M00.125S D AsyncHttpServer: Reading...
PT00H00M00.182S D Runtime: sourceName: source
```
2. The license check is performed.
```
PT00H00M00.243S I LicenseLoader: Found demo license.
```
3. Connection to SAP is established.
```
PT00H00M00.249S D R3ConnectionOpener: 'Use SAPGUI' expert option is disabled
PT00H00M00.249S D R3ConnectionOpener: Connecting to SAP application server, using NetWeaver RFC SDK
PT00H00M00.249S D R3ConnectionOpener: Client '800', language 'en'
PT00H00M00.249S D R3ConnectionOpener: User alice, Password has been provided
PT00H00M00.249S D R3ConnectionOpener: Using plain authentication
PT00H00M00.567S I R3ConnectionOpener: Connected to SAP host 'sap-erp-as05.example.com', instance 00, release 740, codepage 4103, user 'ALICE'
```
4. The extraction is started. In the following example the SAP table KNA1 is extracted.
```
PT00H00M00.582S D yunIOWorker: Starting extraction...
PT00H00M00.584S D yunIOWorker: Waiting for data...
PT00H00M00.673S I TheoReadTableExtractor: Starting extraction - using function module Z_THEO_READ_TABLE
PT00H00M00.685S I TheoReadTableExtractor: Extracting table KNA1
```
5. Runtime parameters are logged.
```
PT00H00M00.691S D TheoReadTableExtractor: WHERE clause is empty
PT00H00M00.691S D TheoReadTableExtractor: HAVING clause is empty
```
6. Data from SAP is requested.
```
PT00H00M00.692S D TheoReadTableExtractor: Data will be extracted in dialog work process
PT00H00M00.693S D TheoReadTableExtractor: Fetching packages (10 rows per package)
PT00H00M00.806S D TheoReadTableExtractor: Z_THEO_READ_TABLE version 1.x
```
7. Packages are received from SAP.
```
PT00H00M00.806S D TheoReadTableExtractor: Received package #1 (10 rows)
PT00H00M00.812S D yunIOWorker: Data available.
PT00H00M00.843S D yunIOWorker: Registering Stream.
PT00H00M00.904S D TheoReadTableExtractor: Received package #2 (10 rows)
PT00H00M00.951S D TheoReadTableExtractor: Received package #3 (10 rows)
...
```
8. Extraction is completed.
```
PT00H00M43.776S I TheoReadTableExtractor: Extraction finished - received 9,123 rows in total
PT00H00M43.777S D ExecutionCore: Extraction finished, firing callback.
PT00H00M43.781S D yunIOWorker: Target environment setup successful.
PT00H00M43.781S I yunIOWorker: Cleaning up...
PT00H00M43.785S D AsyncHttpServer: Closing connection: False
PT00H00M43.785S D AsyncHttpServer: Reading...
```


### Logs Directory

The following list shows all logs that are created in the `logs` folder of yunIO's installation directory, e.g., in `C:\Program Files\Theobald Software\yunIO\logs`:

|Folder | Subfolder| Description |
|:----|:---|:---|
|diagnostic_runs |- | Contains debug information about transaction services. This folder is only created when diagnostics mode is enabled in the settings of a transaction service. |
|extractions |- | Contains logs (.json and .log files) for every service run. The .json file contains the duration and result status of the run and the .log file contains the details of the run. |
|servers| | Contains server logs. The subfolders `azurerelay`, `designer`, `services` and `websockets` each represent a web server used by yunIO. Each server has a listener and a worker. The listener listens on the configured port of the server for connections (listener logs). Each connection starts a worker that processes requests (worker logs).|
| | azurerelay| Contains listener logs for Azure Relay connections. This folder is only created when the [server settings](./server-settings) are set to use an *Azure Hybrid Connection*.|
| | designer| Contains listener and transaction logs. The transaction logs are created when recording a transaction in the Designer.|
| | services| Contains listener, worker and transaction logs. The transaction logs are created when a transaction service is run.|
| | websockets| Contains listener and worker logs of the websocket server that provides the yunIO Designer with data. |
|ServiceLog.txt |- | Logs of the yunIO Windows service.|
