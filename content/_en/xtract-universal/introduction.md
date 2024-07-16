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

{: .box-warning}
**Warning: Deprecated documentation** <br>
You are using the old version of the online help for Xtract Universal.<br>
Make sure to use the documentation within the new [Xtract Universal HelpCenter](https://helpcenter.theobald-software.com/xtract-universal/documentation/introduction/).

### Glossary

Xtract Universal uses the following terms for its components:


| Term | Description |
|:------------ | :------------ |
| Extraction | Extractions are the main entities in Xtract Universal. An [extraction](./getting-started/define-a-table-extraction) is a combination of a source (SAP system), destination (e.g., SQL server) an extraction type (e.g., Table) and the SAP data that is extracted. When running an extraction, the SAP data that is defined in the extraction type is extracted from the assigned SAP source and written to the assigned destination. Example: The SAP table KNA1 is extracted from an SAP S/4HANA system and written to an SQL Server. A list of all created extractions is displayed in the main window of the Designer: <br>![extraction](/img/content/xu/main-window-extractionlist.png){:class="img-responsive"}| 
| Extraction Type (component) | The extraction type defines what SAP data is extracted by which method. Xract Universal offers the following extraction types: [BAPI](./bapis-and-function-modules), [BWCube](./bw-infocubes-and-bex-queries), [BW Hierarchy](./bw-hierarchies), [DeltaQ](./datasource-deltaq), [ODP](./odp), [OHS](./bw-open-hub-services), [SAP Query](./sap-queries), [Report](./abap-reports), [Table](./table) and [Table CDC](./table-cdc). | 
| Source | A source represents a connection to an SAP System, see [Creating an SAP Connection](./getting-started/sap-connection). | 
| Destination | A destination defines how the extracted SAP data is processed. This could be a conversion to file-based formats for local or cloud-based file systems or to deliver the data to targets like databases and other APIs. For a complete list of available destinations, see [Destinations](./destinations). | 

{: .box-note }
**Note:** Extraction type is the preferred term for the definition of what SAP data is extracted by which method. The term "component" or "extraction component" can be seen as a synonym due to information reuse throughout all Theobald Software products.  

#### Example
![glossary](/img/content/glossary-example.png){:class="img-responsive" width="450px"}

### Basic Functionality - Architecture

Using Xtract Universal contains two main phases: design phase and execution phase.

In the design phase the user can:
- create and modify extractions, sources and destinations.
- alter the [server settings](./server/server-settings) in the [Designer](./getting-started/designer-overview).

In the execution phase the user can:
- execute the extractions designed in the design phase.
- parameterize extractions that use runtime parameters. 

The execution of the extractions takes place on the [server](./server). <br>
Depending on the target environment an execution can be triggered either by the [XU command line tool - xu.exe / xu.elf](./execute-and-automate-extractions/call-via-commandline) or by the consuming destination. 
For more information, see [Pull and Push Destinations](./destinations#pull-and-push-destinations). 

![xu-arch-01](/img/content/xu/xu-arch-01.png){:class="img-responsive"}

*****
Find more information in the following subsections:

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}
