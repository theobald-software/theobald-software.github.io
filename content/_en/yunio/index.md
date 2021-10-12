---
ref: yunio-01
layout: page
title: yunIO
description: yunIO
product: yunio
parent: home
childidentifier: yunio
permalink: /:collection/:path
weight: 1
lang: en_GB
---

Welcome to the Online Help for yunIO. 

yunIO is a connector that provides a configuration platform for setting up connectivity between SAP and cloud applications. <br>
The service offers easy integration of SAP data and business processes in different platforms and applications. 
The extracted data can then be further processed  e.g., in the context of business intelligence, data integration and data analytics.

### Software Architecture

yunIO is a Windows service that comes with an embedded Web UI. <br>

The yunIO service is installed on a local or cloud-hosted Windows server environment.
You can access the Web UI via a browser of your choice. <br>
An Azure Relay registration can be used as a secure gateway to connect the local SAP system to the respective cloud application.
<!--- ??? trifft das hier zu?--->
![yunIO-Components](/img/content/xu/xu_components.png){:class="img-responsive" width="800px" }

### Extraction Types

yunIO offers two extraction types to cover a range of demands of SAP data extraction.

- [**Function Module**](./bapis-and-function-modules) accesses BAPIs and RFC function modules.
- [**SAP Table or View**](./table) extracts data from SAP tables and views; allows joining several tables on the SAP side.

