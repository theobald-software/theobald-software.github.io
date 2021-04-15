---
ref: xtract-universal-05
layout: page
title: Execute and Automate Extractions
description: Execute and Automate Extractions
product: xtract-universal
parent: xtract-universal
childidentifier: automation
permalink: /:collection/:path
weight: 5
lang: en_GB
progressstate: 5
---

This section is about running extractions [manually in Xtract Universal Designer](./getting-started/run-an-extraction) and automatically.

Extractions can be called by the following options:

- Via [Commandline](./automation/call-via-commandline)
- Via [Webservice](./automation/call-via-webservice)
- Via [Script](./automation/call-via-script)
- Via [Scheduler](./automation/call-via-scheduler)
- Via [ETL-Tool](./automation/call-via-etl)

{: .box-note }
**Note:** Xtract Universal does not have its own scheduler. Most third party schedulers can be used. 


{: .box-note }
**Note:** Scheduling [pull destinations](./destinations#pull-and-push-destinations) is done via the tool that communicates with the webservice interface (HTTP or HTTPS streams) in CSV or json format.

When calling extractions, [extraction parameters](./automation/extraction-parameters) can be passed dynamically.
If the destination is an SQL database, the parameters are also available in [SQL-scripts](./automation/xu-parameter-sql). 

