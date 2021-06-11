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
The **application** offers easy integration of SAP data and business processes in different platforms and applications. <br>
The extracted data can than be further processed  e.g., in the context of business intelligence, data integration and data analytics.

<!--- Application?--->

### Software Architecture

YunIO is a Windows service that comes with an embedded Web UI. <br>
The YunIO service is installed on a local or cloud-hosted Windows server environment.
Access the Web UI via a browser of your choice.

**An Azure Relay registration can be used as a secure gateway to connect the local SAP system to the respective cloud application.**
<!--- ??? trifft das hier zu?--->
![XU-Components](/img/content/xu/xu_components.png){:class="img-responsive" width="800px" }

### Extraction Types

YunIO offers two extraction types to cover a range of demands of SAP data extraction.

- [**BAPI**](./bapis-and-function-modules) accesses BAPIs and RFC function modules.
- [**Table**](./table) extracts data from SAP tables and views; allows joining several tables on the SAP side.


More information on functions of YunIO is provided in the following sections:

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}
