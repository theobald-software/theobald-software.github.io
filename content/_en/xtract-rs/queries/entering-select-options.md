---
layout: page
title: Entering Select Options
description: Entering Select Options
product: xtract-rs
parent: queries
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /Xtract-RS-EN/default.aspx?pageid=entering-select-options
---

Within the SAP GUI, you can create complex selection criteria in the selection screen of the query. This can be done with the Xtract RS component as well.

Please click the *Edit* link to define the selection for the parameters.

![Query-Select-Options-001](/img/content/Query-Select-Options-001.png){:class="img-responsive" }

The dialog below will open up.


![Query-Variant-002](/img/content/Query-Variant-002.png){:class="img-responsive" }

The column *Sign* defines whether the restriction is included in or excluded from the result set. The column *Operator* defines an operator (e.q. =,<,> ....). The values must be entered in the *LowValue* and *HighValue* cells. *HighValue* only has to be filled in if the operator is [] (between) or ][ (not between). In all other cases it is sufficient if only the *LowValue* cell is filled in. 

Of course, you can also use variables. Just place an @ symbol right before the variable name.