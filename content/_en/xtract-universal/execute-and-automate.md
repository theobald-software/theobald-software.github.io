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

This section contains details about running extractions automatically and [manually in Xtract Universal Designer](./getting-started/run-an-extraction).

Extractions can be called by the following options:

- [Commandline](./automation/call-via-commandline)
- [Webservice](./automation/call-via-webservice)
- [Script](./automation/call-via-script)
- [Scheduler](./automation/call-via-scheduler)
- [ETL-Tool](./automation/call-via-etl)

{: .box-note }
**Note:** Xtract Universal does not have its own scheduler. You can use third party schedulers. 


{: .box-note }
**Note:** Use the tool that communicates with the webservice interface (HTTP or HTTPS streams) in CSV or JSON format to schedule [pull destinations](./destinations#pull-and-push-destinations).

When calling extractions, [extraction parameters](./automation/extraction-parameters) can be passed dynamically.

If the destination is an SQL database, the parameters are also available in [SQL-scripts](./automation/xu-parameter-sql). 

