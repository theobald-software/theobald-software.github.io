---
ref: xtract-universal-execution
layout: page
title: Execute and Automate Extractions
description: Execute and Automate Extractions
product: xtract-universal
parent: xtract-universal
childidentifier: execute-and-automate-extractions
permalink: /:collection/:path
weight: 15
lang: en_GB
progressstate: 5
---
This section contains details about running extractions automatically and manually in [Xtract Universal Designer](./getting-started/run-an-extraction). 
Examples on how to call extractions:
- [Commandline](./execute-and-automate-extractions/call-via-commandline)
- [Webservice](./execute-and-automate-extractions/call-via-webservice) 
- [Scheduler](./execute-and-automate-extractions/call-via-scheduler)
- [ETL-Tool](./execute-and-automate-extractions/call-via-etl)

### Running an Extraction

Extractions are triggered by an HTTP request and executed on the [Xtract Universal server](./server#run-extraction-on-the-server).

The configuration of [source](./introduction/sap-connection#creating-an-sap-connection), [destination](./destinations/managing-destinations) and [extraction](./getting-started/define-a-table-extraction#creating-an-extraction) defines how the data transfer is performed. <br>
This configuration can contain dynamic elements, like [runtime parameters](./execute-and-automate-extractions/extraction-parameters) and [script expressions](./advanced-techniques/script-expressions#using-script-expressions-as-selection-parameters-for-extractions).

Depending on the destination, the execution of an extraction can be triggered either interactively or unattended.

#### Interactive Extractions

Extractions are typically triggered interactively when a user requires new or updated data from SAP, and no additional data storage system (like a data warehouse) is present.

In these scenarios, execution of an extraction is typically triggered by one of Xtract Universal's plugins:
- [Alteryx](./destinations/alteryx)
- [Power BI Connector](./destinations/Power-BI-Connector)
- [SQL Server Reporting Services](./destinations/server-report-services)

Or directly by the target environment:
- [QlikSense & QlikView](./destinations/qliksense-qlikview)

#### Unattended Extractions

When an additional data storage system (database, cloud storage, flat files) is present, extractions are typically triggered as part of an ELT-process (Extract, Load, Transform), which is run unattended at regular intervals by a scheduler or other orchestration software.
In these scenarios, execution of an extractions is typically triggered by running the [XU command line tool](./execute-and-automate-extractions/call-via-commandline) from the orchestration software. 

For advanced scenarios or environments that do not support command line programs, the [HTTP Webservices](./execute-and-automate-extractions/call-via-webservice) can be used for triggering and monitoring executions.

{: .box-note }
**Note:** Xtract Universal does not have its own scheduler. You can use third party schedulers. 


### Run parallel Extractions
The amount of possible parallel extractions depends on the hardware resources of the Windows server. 

Every triggered extraction is executed in a separate process of the operating system.<br>
Reliability and throughput of the network connection, available RAM and disk throughput (for logging and caching) are all crucial factors for the parallelization.<br>
Other factors are the performance of the SAP source system the destination.


{: .box-note }
**Note:** Xtract Universal scales corresponding to the available hardware resources of the runtime environment.
