---
ref: xi-q-delta-04
layout: page
title: Datasource Parameters
description: Datasource Parameters
product: xtract-is
parent: q-delta
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=datasource_parameters
---


Parameters can have single values, intervals and complex selections. 
All kinds of parameters can be edited and entered with the help of the editor.

If the parameter is a complex selection, use the Edit link to open an additional dialogue.
As shown in the screenshot, variables can also be used. Please add an @ right before the value to mark it as an variable.

The following screenshot shows the dialogue for entering complex selections.

![Parameters-2](/img/content/Parameters-2.png){:class="img-responsive"}

The field Sign hast 2 Options: Include - Exclude. This selection determines for every row whether the result of the condition is included or excluded in the entire resulting set for all rows.

The field Option contains the selection option for the condition of the row in form of logical operators:
```
=  Equal
!= Not Equal
< Lower Than
<= Lower Equal Than
> Greater Than
>= Greater Equal Than
[] BeTween
][ NotBetween
* Contains Pattern (Like)
```
Low Value column is designated for the comparison value or the lower interval limitation.
High Value column is designated for the upper interval limitation.