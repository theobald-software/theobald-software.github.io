---
ref: xi-q-delta-05
layout: page
title: Delta
description: Delta
product: xtract-is
parent: q-delta
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=delta
---

In our last example, we did a *full* update. 
To get a real Delta procedure running, Delta first has to be initialized. To do this, set your UpdateType to *Delta Initialization*. Run your package once and then set the UpdateType to *Delta Update*. Then, only the changes will be extracted which have been made since the last transfer.

Once Delta is activated, you can view the queued datasets in the Delta queue in transaction RSA7.

![DeltaQ-Delta-01](/img/content/DeltaQ-Delta-01.png){:class="img-responsive"}

You must ensure that a Delta update is properly executed before the next one is initiated. The execution of a new Delta update removes the last.
A repair always refers to the last executed Delta update, which will be repeated in full. It does not matter whether the last Delta update was successful or not. The repair step may optionally be performed several times.

Before you make a new initialization ("Delta Initialization - C " mode) of a datasource you must make sure that you delete the old initialization requests. You can delete the requests in the SAP transaction RSA7.
You can see the old initialization requests when you click in the DeltaQ Component on settings -> Request Maintenance. Here you should have at max. one entry.
If you have here more than one entries, it means that old initialization requests has not been deleted.

If there is no new data to be transferred at the moment, a corresponding protocol message will be noted and the data pipeline remains empty.

![DeltaQ-Delta-02](/img/content/DeltaQ-Delta-02.png){:class="img-responsive"}


For now, the following data view shows a newly created dataset (MATKL is empty). The related material was changed and a new run is launched. MATKL has now the changed value.

![DeltaQ-Delta-03](/img/content/DeltaQ-Delta-03.png){:class="img-responsive"}

![DeltaQ-Delta-04](/img/content/DeltaQ-Delta-04.png){:class="img-responsive"}


More information about the delta process can be found in the SAP Help. 