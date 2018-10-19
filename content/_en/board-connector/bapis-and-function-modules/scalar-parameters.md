---
ref: bc-bapis-and-function-modules-02
layout: page
title: Scalar Parameters
description: Scalar Parameters
product: board-connector
parent: bapis-and-function-modules
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /BOARD-Connector-EN/default.aspx?pageid=scalar-parameters
---

Scalar parameters (imports and exports) are usually entered with a static value or can be assigned to a variable. Exports parameters do not make sense at present. The exports only make sense for future development.

As shown in the screenshot below, there are two import parameters. One is filled with a static value (CPDONLY) and the other (MAXROWS) will be filled with a variable. An @ must be added right before the name to mark a value as a variable.

![Bapi-Scalar-Parameters](/img/content/Bapi-Scalar-Parameters.png){:class="img-responsive"}