---
layout: page
title: Delta
description: Delta
product: xtract-universal
parent: datasource-deltaq
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=delta
---

In our last example, we did a **Full Update**. To get a real Delta procedure running, Delta first has to be initialized. 
A full update requests all data that meets the selection criteria you set.


**Step 1: Delta Initialisation** 

To do this, set your UpdateType to ***Delta Initialization***. 
You need to initialize a delta process before you can execute it. The initialization selections are copied to load the delta records.
This mode requests all data that meets the selection criteria you set.
After that you can use the Delta Update.


**Step 1 (alternatively): Delta Initi (without data)**

It is similar to Delta Initialisation, but no data will be requested. 
After that you can use the Delta Update.


**Step 2: Delta Update** 

Run your package once and then set the UpdateType to ***Delta Update***. Then, only the changes will be extracted which have been made since the last transfer.

**Optional: Delta Queue - RSA7** 

Once Delta is activated, you can view the queued datasets in the Delta queue in transaction RSA7.

![Delta](/img/content/Delta.png){:class="img-responsive"}

If there is no new data to be transferred at the moment, a corresponding protocol message will be noted and the data pipeline remains empty.

You must ensure that a Delta update is properly executed before the next one is initiated. The execution of a new Delta update removes the last. 

**Optional: Delta Repeat** 

A **Repeat** always repeats to the last executed Delta update request, which will delivered the data again. It does not matter whether the last Delta update was successful or not. The Repair step may optionally be performed several times.

Many Datasources deliver the field ROCANCEL. This field stipulates whether the records are added to or overwritten dependent on the delta process type of the datasource. It defines how a record is updated in the delta process. In an ABR mode leaving it blank returns an after image, 'X' a before image, 'D' deletes the record and 'R' returns a reverse image.


More information about the delta process can be found in the SAP Help. <br>
[Delta Transfer to BI](http://help.sap.de/saphelp_nw70/helpdata/en/37/4f3ca8b672a34082ab3085d3c22145/content.htm)<br>
[Delta Process](http://help.sap.de/saphelp_nw70/helpdata/en/84/81eb588fc211d4b2c90050da4c74dc/content.htm)
