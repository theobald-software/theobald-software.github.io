---
ref: xi-q-delta-05
layout: page
title: Delta
description: Delta
product: xtract-is
parent: deltaq
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=delta
---
To get a real Delta process running, Delta must first be initialized. For an overview of the modes, see at [Update Mode](./update-mode).

### Delta Initialisation [C] and Delta Update [D]
The **Update Mode** *Delta Initialisation* requests all data that meets the selection criteria you set.

{: .box-note } 
**Note:**<br>
When re-initilizing a delta process, first delete any old initialization requests. You can delete the requests in the SAP transaction RSA7.
Click in the DeltaQ Component on **[Settings]** / **[Request Maintenance]** to see the old initialization requests. There should be a maximum of one entry here.
More than one entries means, that old initialization requests has not been deleted.


1. Set the **Update Mode** to *Delta Initialization* and execute it.
The initialization selections are copied to load the delta records.

2. After run your package once, set the **Update Mode** to *Delta Update*.
*Delta Update* only extracts data added or changed on the SAP system since the last delta request.

![DeltaQ-Delta-02](/img/content/DeltaQ-Delta-02.png){:class="img-responsive"}

{: .box-note } 
**Note:**<br>
Before initiating the next update, make sure that a Delta update has been properly executed. Running a new delta update removes the last one. 

If there is no new data to be transferred at the moment, a corresponding protocol message will be noted and the data pipeline remains empty.

### Optional: Delta Queue - RSA7
Once Delta is activated, you can view the queued datasets in the Delta queue in transaction RSA7.

![DeltaQ-Delta-01](/img/content/DeltaQ-Delta-01.png){:class="img-responsive"}


### Repeat
A repeat always refers to the last executed Delta update, which will be repeated in full. It does not matter whether the last Delta update was successful or not. The repeat step may optionally be performed several times.


### Example
Step 1: A newly created dataset (MATKL is empty).
![DeltaQ-Delta-03](/img/content/DeltaQ-Delta-03.png){:class="img-responsive"}

Step 2: The related material was changed and a new run is launched. MATKL has now the changed value.
![DeltaQ-Delta-04](/img/content/DeltaQ-Delta-04.png){:class="img-responsive"}


More information about the delta process can be found in the SAP Help. 
