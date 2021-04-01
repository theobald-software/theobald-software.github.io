---
ref: xi-preparation-in-bw-02
layout: page
title: InfoSpokes and Process Chains BI 7.0
description: InfoSpokes and Process Chains BI 7.0
product: xtract-is
parent: preparation-in-bw
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=infospokes-and-process-chains
---

Up to release BW 7.0, InfoSpokes are the pivotal point for Open Hub Services. If you are already using release 7.0, you can jump to the next section to learn how OHS destinations are handled.
Once inside transaction RSA1, you will find an interface for creating an InfoSpoke in the menu *Tools -> Open Hub Service -> Edit InfoSpoke*. Provide a data source here (e.g. an ODS object or a cube).

![OHS-InfoSpoke-01](/img/content/OHS-InfoSpoke-01.png){:class="img-responsive" }

In the *Destination* tab, define the InfoSpoke so that an extraction to a third-party system is possible (see screenshot). Be sure to enter the previously created RFC destination here.

![OHS-InfoSpoke-02](/img/content/OHS-InfoSpoke-02.png){:class="img-responsive" }

When you're done, the columns and, if applicable, selections to be transmitted have to be filled in. Afterwards the spoke can be saved and activated.
In the last step, we need a process chain. To proceed, go from transaction RSA1 to the menu *Edit -> Process Chains*, and enter a new process chain there. In the variant for the chain, *start via API* must be marked. Then enter the previously created InfoSpoke in the chain.

![OHS-InfoSpoke-03](/img/content/OHS-InfoSpoke-03.png){:class="img-responsive" }

Finally, you have to save the process chain and activate it.