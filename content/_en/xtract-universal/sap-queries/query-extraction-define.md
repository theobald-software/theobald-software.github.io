---
ref: xu-sap-queries-01
layout: page
title: Define a Query Extraction
description: Define a Query Extraction
product: board-connector
parent: sap-queries
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /BOARD-Connector-EN/default.aspx?pageid=define-a-query-extraction
---

Define a new Query Extraction with the BOARD Designer. The following screen pops up:

![SAPQuery-01](/img/content/SAPQuery-01.png){:class="img-responsive"}

Click the binocular button to open the search dialog. A query will be unique identified by the workspace, the user group and the query name. You can restrict your search using wildcards ( * ). Once you find the right query, click the *OK* button to transfer the query to the editor.

![SAPQuery-02](/img/content/SAPQuery-02.png){:class="img-responsive"} 

In the main Window you see the so-called *Select Options*. These are the selection criteria, you'd see if you start the query in the SAP GUI.

![SAPQuery-03](/img/content/SAPQuery-03.png){:class="img-responsive"}


You have to select a variant (see chapter [Apply Variants](./apply-variants)) or a value for the maximum number of rows (see chapter [Extraction Settings](./extraction-settings)).

**Recommendation:**
1. start by creating a [variant](https://help.sap.com/doc/erp2005_ehp_07/6.07/en-US/6b/98f75305610114e10000000a174cb4/frameset.htm), which you create and test in SAP GUI beforehand
2. in the next step, you can use *Edit* [Entering select options](./select-options-entering)

*In general, selection parameters overwrite the selected variant. 
This ensures that there are possible combinations for the selection.*



