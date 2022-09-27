---
ref: xtract-universal-03
layout: page
title: Introduction to Xtract Universal
description: Introduction
product: xtract-universal
parent: xtract-universal
childidentifier: introduction
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=introduction
progressstate: 5
---

### Glossary

Xtract Universal uses the following terms for its components:

| Term | Description |
|:------------ | :------------ |
| Source | A source represents a connection to an SAP System, see [Creating an SAP Connection](../getting-started/sap-connection). | 
| Destination | A destination represents a connection to a target environment. Destinations can be local directories, databases, BI tools, cloud storages and others. For a complete list of available destinations, see [Destinations](./destinations). | 
| Extraction | Extractions are the main entities in Xtract Universal. An extraction is a combination of a source (SAP system), destination (e.g., SQL server) and a defined extraction type (e.g., Table). Xtract Universal offers 9 extraction types: [BAPI](./bapis-and-function-modules), [BWCube](./bw-infocubes-and-bex-queries), [BW Hierarchy](./bw-hierarchies), [DeltaQ](./datasource-deltaq/), [ODP](./odp), [OHS](./bw-open-hub-services), [SAP Query](./sap-queries), [Report](./abap-reports) and [Table](./table). When running an extraction, the data that is defined in the extraction type is extracted from the assigned SAP source and written to the assigned destination. | 

#### Example
![glossary](/img/content/glossary-example.png){:class="img-responsive" width="500px"}

### Basic Functionality - Architecture

Using Xtract Universal contains two main phases: design phase and execution phase.

In the design phase the user can:
- create and modify extractions, sources and destinations.
- alter the [server settings](./server/server-settings) in the [Designer](./getting-started/designer-overview).

In the execution phase the user can:
- execute the extractions designed in the design phase.
- parameterize extractions that use runtime parameters. 

The execution of the extractions takes place on the [server](./server). <br>
Depending on the target environment an execution can be triggered either by the [XU command line tool - xu.exe or xu.elf](./execute-and-automate-extractions/call-via-commandline) by the data consumer. 
For more information, see [Pull and Push Destinations](./destinations#pull-and-push-destinations). 

![xu-arch-01](/img/content/xu/xu-arch-01.png){:class="img-responsive"}

*****
Find more information in the following subsections:

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}
