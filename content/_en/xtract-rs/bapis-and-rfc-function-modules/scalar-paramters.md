---
ref: xr-bapis-rfc-function-02
layout: page
title: Scalar Parameters
description: Scalar Parameters
product: xtract-rs
parent: bapis-and-rfc-function-modules
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /Xtract-RS-EN/default.aspx?pageid=scalar-parameters
---

Scalar parameters (imports and exports) are always entered with a static value or can be assigned to an SSIS variable. In the case of exports, only variables are allowed because it wouldn’t make sense to enter an export in a static value.

As shown in the screenshot below, there are three import parameters. One is filled with a static value (SEARCH_CITY) and the other two (SEARCH_CUSTNO and SEARCH_NAME) will be filled with a variable. An @ must be added right before the name to mark a value as a variable.

![BAPI-Scalar-Parameter](/img/content/BAPI-Scalar-Parameter.png){:class="img-responsive" }