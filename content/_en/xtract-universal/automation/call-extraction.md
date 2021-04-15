---
ref: xu-run-dialog-01
layout: page
title: Call Extraction
description: Call Extraction
product: xtract-universal
parent: automation
permalink: /:collection/:path
weight: 1
lang: en_EN
---

Xtract Universal is structured like a [Client-Server-Architecture](../introduction). 

The execution of an extraction takes place on the [XU server](../server#run-extraction-on-the-server).
Xtract Universal offers two ways to run an extractions:

- Call via the provided [command line tool](./call-via-commandline), which is available for Windows (xu.exe) and Linux (xu.elf). 
- Call via [webservice](./call-via-webservice) 

### Run parallel Extractions

The amount of possible parallel extractions depends on the hardware resources of the Windows server.
Every triggered extraction is executed in a separate process of the operating system.
Thus the number of processor cores determines the degree of parallelization.

{: .box-note }
**Note:** Xtract Universal scales corresponding to the available hardware resources of the runtime environment.

### Run Extraction manually in XU Designer

The manual extraction and direct execution in the Designer is described in section [Running an Extraction](../getting-started/run-an-extraction).
As shown in the example of that section, extraction parameters can be set dynamically when calling an extraction.
For more details on setting parameters, see [Extraction Parameters](./extraction-parameters).


****
#### Related Links:
- [Pull and Push Destinations](../destinations#pull-and-push-destinations)
