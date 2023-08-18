---
ref: xi-q-delta
layout: page
title: Delta
description: Customizing Check
product: xtract-is
parent: deltaq
permalink: /:collection/:path
weight: 4
lang: en_GB
---

To get a real Delta process running, Delta must first be initialized. For an overview of the modes, see at [Update Mode](./update-mode). 

### Step 1: Delta Initialisation [C]
This mode requests all data that meets the selection criteria you set.

Set the **Update Mode** to *Delta Initialization* and execute it.<br>
The initialization selections are copied to load the delta records. You can use the Delta Update.

{: .box-note } 
**Note:** When re-initilizing a delta process, first delete any exsiting Inits (initialization requests) by clicking **[Request Maintenance]** in the DeltaQ extraction settings.

### Alternative Step 1: Delta Init (without data) [S]
It is similar to **Delta Initialisation** without extracting any data from the SAP Datasource.
After execute the **Delta Init** you can use the **Delta Update**.

{: .box-note } 
**Note:** When re-initilizing a delta process, first delete any exsiting Inits (initialization requests) by clicking **[Request Maintenance]** in the DeltaQ extraction settings.

### Step 2: Delta Update [D]
Delta update only extracts data added or changed on the SAP system since the last delta request.

First run your package once and then set the **Update Mode** to *Delta Update*.
Only the changes will be extracted which have been made since the last transfer.

{: .box-note } 
**Note:** To prevent errors, aborts and gaps run the next extraction in the update mode *Repeat*.

### Optional: Repeat [R]
Repeats the last delta run and updates all data accumulated since the last run. If the last run was unsuccessful, all data from the last delta update will be deleted before a new run is started.<br>
A **Repeat** can be started several times.

Many Data sources deliver the field ROCANCEL. This field stipulates whether the records are added to or overwritten dependent on the delta process type of the datasource. It defines how a record is updated in the delta process.<br>
In an ABR mode: <br>
* *blank* returns an after image,<br>
* *'X'*  returns a before image,<br>
* *'D'* deletes the record and<br>
* *'R'* returns a reverse image.


### Optional: Delta Queue - RSA7
Once Delta is activated, you can view the queued datasets in the Delta queue in SAP transaction RSA7.

![Delta](/img/content/Delta.png){:class="img-responsive"}

If there is no new data to be transferred at the moment, a corresponding protocol message will be noted and the data pipeline remains empty.

{: .box-note } 
**Note:** Before initiating the next update, make sure that a Delta update has been properly executed. Running a new delta update removes the last one. 


*****
#### Releated Links
- [Delta Transfer to BI](https://help.sap.com/doc/saphelp_nw70/7.0.31/en-US/37/4f3ca8b672a34082ab3085d3c22145/content.htm?no_cache=true)
- [Delta Process](https://help.sap.com/viewer/ccc9cdbdc6cd4eceaf1e5485b1bf8f4b/7.4.23/en-US/4f18f6aa3fca410ae10000000a42189d.html)
