---
ref: xtract-universal-03
layout: page
title: Introduction to Xtract Universal
description: Introduction
product: xtract-universal
parent: xtract-universal
childidentifier: introduction
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=introduction
---

### Basic Functionality - Architecture

Extractions are the main entities in Xtract Universal. An [extraction](./getting-started/define-a-table-extraction) is a combination of a source (SAP system), 
destination (e.g., SQL server) and a defined extraction type (e.g., Xtract Table). 


A source represents a [connection to an SAP System](./introduction/sap-connection). A [destination](./xu-destinations) represents a connection to a target environment.


Using Xtract Universal contains two main phases:
- Design phase
- Execution phase

![xu-arch-01](/img/content/xu/xu-arch-01.png){:class="img-responsive"}

During the design phase the user can create and modify extractions, sources and destinations; and alter the [server settings](./server/server-settings) with the help of the [Designer](./getting-started/designer-overview). 

During the execution phase the user can execute the extractions designed in the design phase. Depending on the target environment an execution can be triggered either by the [XU command line tool - xu.exe or xu.elf](./advanced-techniques/scheduling_extraction) by the data consumer. See also [Pull and Push Destinations](./xu-destinations#pull-and-push-destinations). 

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}
