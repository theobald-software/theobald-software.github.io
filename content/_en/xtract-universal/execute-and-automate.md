---
ref: xtract-universal-execution
layout: page
title: Execute and Automate Extractions
description: Execute and Automate Extractions
product: xtract-universal
parent: xtract-universal
childidentifier: automation
permalink: /:collection/:path
weight: 15
lang: en_GB
progressstate: 5
---
This section contains details about running extractions automatically and manually in [Xtract Universal Designer](./getting-started/run-an-extraction). Extractions can be called by the following options:
- [Commandline](./automation/call-via-commandline)
- [Webservice](./automation/call-via-webservice) 
- [Scheduler](./automation/call-via-scheduler)
- [ETL-Tool](./automation/call-via-etl)

### Running an Extraction
When running an extraction, data is extracted from the SAP source system and transferred to the target environment.

The configuration of the [source](./introduction/sap-connection#creating-an-sap-connection), [destination](./xu-destinations/managing-destinations) and [extraction](./getting-started/define-a-table-extraction#creating-an-extraction) entities defines, how exactly this data transfer will be performed. 

This configuration can contain dynamic elements, like dynamic [runtime parameters](./automation/extraction-parameters) and [script expressions](./advanced-techniques/script-expressions#using-script-expressions-as-selection-parameters-for-extractions).

Extractions are triggered by an HTTP request and executed on the [Xtract Universal server](./server#run-extraction-on-the-server).

### Run parallel Extractions
The amount of possible parallel extractions depends on the hardware resources of the Windows server. Every triggered extraction is executed in a separate process of the operating system.

Thus the number of processor cores determines the degree of parallelization.

{: .box-note }
**Note:** Xtract Universal scales corresponding to the available hardware resources of the runtime environment.

### Triggering Execution
Depending on the target environment, execution of an extraction can be triggered either interactively or unattended.

{: .box-note }
**Note:** Xtract Universal does not have its own scheduler. You can use third party schedulers. 

Extractions are typically triggered interactively when a user requires new or updated data from SAP, and no additional data storage system (like a data warehouse) is present.

In these scenarios, execution of an extraction is typically triggered by one of Xtract Universal's plugins:
- [Alteryx](../xtract-universal/xu-destinations/alteryx)
- [Power BI Connector](./xu-destinations/Power-BI-Connector)

Or directly by the target environment:
- [QlikSense & QlikView](./xu-destinations/qliksense-qlikview)

{: .box-note }
**Note:** Use the tool that communicates with the webservice interface (HTTP or HTTPS streams) in CSV or JSON format to schedule [pull destinations](./destinations#pull-and-push-destinations).

When an additional data storage system (database, cloud storage, flat files) is present, extractions are typically triggered as part of an ELT-process (**E**xtract, **L**oad, **T**ransform), <br> which is run unattended at regular intervals by a scheduler or other orchestration software.

In these scenarios, execution of an extractions is typically triggered by running the [XU command line tool](./automation/call-via-commandline) from the orchestration software. 

{: .box-tip }
**Recommendation:** For advanced scenarios or environments that do not support command line programs, the [HTTP Webservices](./automation/call-via-webservice) for triggering execution and monitoring can also be sent through other means.

