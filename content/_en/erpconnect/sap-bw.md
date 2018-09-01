---
layout: page
title: SAP BW
description: SAP BW
product: erpconnect
parent: erpconnect
childidentifier: sap-bw
permalink: /:collection/:path
weight: 8
lang: en_GB
---

This chapter contains information and examples surrounding the subject of BW data extraction. The corresponding ERPConnect classes can be found in the namespace ERPConnect.BW.

The examples are based on a BW query, which in turn is based on the cube 0D_DECU and is called ZSIMPLEQUERY. Please note that the checkbox Allow external access has to be marked off in your preferences for the query.

The following figure shows the query in the designer. The dimensions material and client as well as the key figures billed amount and costs are drawn into the query output. The dimension has a variable called MAT01, which allows a limitation to the material number.

![BW-001](/img/content/BW-001.png){:class="img-responsive" }

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}