---
ref: xfa-bapi-scalar
layout: page
title: BAPI Parameters
description: BAPI Parameters
product: xtract-for-alteryx
parent: bapi
permalink: /:collection/:path
weight: 2
lang: en_GB
---

### Scalar Parameters
Scalar parameters (imports and exports) are usually entered with a static value (e.g., ABC) or can be assigned to a variable or a [parameter](./bapi-define#edit-parameters). <br>

![BAPI import parameters](/img/content/xfa/bapi_import1.png){:class="img-responsive"}

### Structure Elements
Structure elements or structures are special scalar parameters. When using structures, an individual variable doesn't have to be assigned to the whole structure, but to each element of the structure.
When a structure is available, click **[Edit Structures]** to assign structure elements.

![Bapi-Structures](/img/content/xfa/BAPI-Structures.png){:class="img-responsive"}

### Using Variables

Imports can contain constants or variables, exports are only allowed to contain variables - valid for scalar parameters and for structure elements.

All value fields can be left empty, if the parameters are not needed.

