---
ref: xi-bw-loader-03
layout: page
title: Connect Source and Destination Columns
description: Connect Source and Destination Columns
product: xtract-is
parent: bw-loader
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=connect-source-and-destination-columns
---
The BW Loader destination provides one input pipeline to be filled with data within the data flow task. After having chosen an InfoPackage in the editor, each element of the pipeline can be mapped to one element of the transfer structure.

There are three additional text fields to be filled in. Gateway Host is normally the network address of your BW system. Gateway Service is normally sapgwXX (substitute XX with your system number). The program ID must be the same as the one defined in the BW SourceSystem. If you encounter problems finding out the correct parameters for your system environment, please consult your SAP BC department for assistance.

![XIS_BWL_Komponente](/img/content/XIS_BWL_Komponente.png){:class="img-responsive"}

After these steps the component is ready to be run in debug mode.
