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

This section contains details about running extractions automatically and [manually in Xtract Universal Designer](./getting-started/run-an-extraction).

Extractions can be called by the following options:

- [Commandline](./execute-and-automate-extractions/call-via-commandline)
- [Webservice](./execute-and-automate-extractions/call-via-webservice)
- [Script](./execute-and-automate-extractions/call-via-script)
- [Scheduler](./execute-and-automate-extractions/call-via-scheduler)
- [ETL-Tool](./execute-and-automate-extractions/call-via-etl)

{: .box-note }
**Note:** Xtract Universal does not have its own scheduler. You can use third party schedulers. 


{: .box-note }
**Note:** Use the tool that communicates with the webservice interface (HTTP or HTTPS streams) in CSV or JSON format to schedule [pull destinations](./destinations#pull-and-push-destinations).

When calling extractions, [extraction parameters](./execute-and-automate-extractions/extraction-parameters) can be passed dynamically.

If the destination is an SQL database, the parameters are also available in [SQL-scripts](./execute-and-automate-extractions/xu-parameter-sql). 

