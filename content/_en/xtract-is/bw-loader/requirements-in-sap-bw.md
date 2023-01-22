---
ref: xi-bw-loader-01
layout: page
title: Requirements in SAP BW
description: Requirements in SAP BW
product: xtract-is
parent: bw-loader
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=requirements-in-sap-bw
---
For enabling the BW Loader component to deliver data correctly, it is necessary to ensure several requirements in SAP BW. In this chapter, only the most important topics are described. Please refer to help.sap.com for further details on how to create data imports in SAP BW.

First of all, we need a new source system of the type *3rd party / Staging BAPIs*. Please note the program ID. We will need it later on.

![BWLoader-Configuration-01](/img/content/BWLoader-Configuration-01.png){:class="img-responsive"}

![BWLoader-Configuration-02](/img/content/BWLoader-Configuration-02.png){:class="img-responsive"}

In case you are using a 3.x data flow you can assign the source system to the InfoSource and create an InfoPackage.

For 7.x data flows you create a DataSource for that newly created 3rd party source system and create an InfoPackage.
Data will be loaded to the PSA of the DataSource.

![XIS_BWLoader_7.x_DS](/img/content/XIS_BWLoader_7.x_DS.png){:class="img-responsive"}

For the BW Loader component, the most important thing is the InfoPackage. No data can be loaded without the InfoPackage.