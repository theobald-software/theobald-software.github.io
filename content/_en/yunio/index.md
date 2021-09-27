---
ref: yunio-01
layout: page
title: YunIO
description: YunIO
product: yunio
parent: home
childidentifier: yunio
permalink: /:collection/:path
weight: 1
lang: en_GB
---

Welcome to the Online Help for YunIO. 

YunIO is a connector that provides a configuration platform for setting up connectivity between SAP and cloud applications. <br>
The service offers easy integration of SAP data and business processes in different platforms and applications. 
The extracted data can then be further processed  e.g., in the context of business intelligence, data integration and data analytics.

### Software Architecture

YunIO is a Windows service that comes with an embedded Web UI. <br>

The YunIO service is installed on a local or cloud-hosted Windows server environment.
You can access the Web UI via a browser of your choice. <br>
An Azure Relay registration can be used as a secure gateway to connect the local SAP system to the respective cloud application.
<!--- ??? trifft das hier zu?--->
![YunIO-Components](/img/content/xu/xu_components.png){:class="img-responsive" width="800px" }

### Extraction Types

YunIO offers two extraction types to cover a range of demands of SAP data extraction.

- [**Function Module**](./bapis-and-function-modules) accesses BAPIs and RFC function modules.
- [**SAP Table or View**](./table) extracts data from SAP tables and views; allows joining several tables on the SAP side.

