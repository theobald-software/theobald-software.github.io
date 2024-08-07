---
ref: board-connector-03
layout: page
title: Introduction to Board Connector
description: Introduction
product: board-connector
parent: board-connector
childidentifier: introduction
permalink: /:collection/:path
weight: 3
lang: en_GB
progressstate: 5
---

{: .box-warning}
**Warning: Deprecated documentation** <br>
You are using the old version of the online help for Board Connector.<br>
Make sure to use the documentation within the new [Board Connector HelpCenter](https://helpcenter.theobald-software.com/board-connector/documentation/introduction/).

### Basic Functionality - Architecture

Board Connector for SAP is a middleware component to extract data from SAP systems and load it into Board. Extractions are the main entities in
 Board Connector. An [extraction](./getting-started/define-a-table-extraction) is a combination of a [connection to source (SAP system)](./introduction/sap-connection), a connection to Board as the destination and the target environment; and a defined extraction type (e.g., [Table](./table)).

Board Connector consists of two components:

- Designer to design and configure extractions
- Server to execute extractions

![Architecture-01](/img/content/Architecture-01.png){:class="img-responsive"}

When desigining extractions the user can create and modify extractions, sources and alter the [server settings](./server/server-settings) with the help of the [Designer](./getting-started/bc-designer-overview).
During the execution phase the user can execute the extractions designed in the design phase. 
The execution of the extractions takes place on the [server](./server). 

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}
