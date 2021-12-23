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

yunIO is a no-code application for designing, automating, and integrating SAP processes in the cloud. <br>
The service offers easy integration of SAP data and business processes in different platforms and applications. 

### Software Architecture

yunIO comes with an embedded Web UI, the yunIO Designer, that can be accessed through a standard web browser. A Windows service enables connectivity with SAP. <br>
The yunIO service is installed on a local or cloud-hosted Windows server environment. <br>
If yunIO is installed on a local server environment, a Gateway instance of your choice (e.g. Microsoft om-premises data gateway) can be used for securely tunnel the connection. <br> 

<!--- ??? trifft das hier zu?--->
![yunIO-Components](/img/content/yunio/theobald-software_architecture_yunio.png){:class="img-responsive" width="800px" }

### Extraction Types

yunIO offers three extraction types to cover a wide range of possible integration scenarios.

- [**SAP Table or View**](./table-and-views) extracts data from SAP tables and views. 
- [**Function Module / BAPI**](./bapis-and-function-modules) accesses BAPIs and Function Modules.
- [**Transaction**](./transactions) accesses SAP transactions without any SAP GUI interaction.

