---
layout: page
title: Delta
description: Delta
product: board-connector
parent: datasource-deltaq
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /BOARD-Connector-EN/default.aspx?pageid=delta
---

Inn our last example, we did a full update. To get a real Delta procedure running, Delta first has to be initialized. To do this, set your UpdateType to ***Delta Initialization***. Run your package once and then set the UpdateType to ***Delta Update***. Then, only the changes will be extracted which have been made since the last transfer.

Once Delta is activated, you can view the queued datasets in the Delta queue in transaction RSA7.

![Delta](/img/content/Delta.png){:class="img-responsive"}

If there is no new data to be transferred at the moment, a corresponding protocol message will be noted and the data pipeline remains empty.

You must ensure that a Delta update is properly executed before the next one is initiated. The execution of a new Delta update removes the last.

A **Repair** always refers to the last executed Delta update, which will be repeated in full. It does not matter whether the last Delta update was successful or not. The Repair step may optionally be performed several times.

More information about the delta process can be found in the [SAP Help](). 