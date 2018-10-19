---
ref: bc-sap-queries-03
layout: page
title: Entering Select Options
description: Entering Select Options
product: xtract-universal
parent: sap-queries
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=entering-select-options
---

Within the SAP GUI, you can create complex selection criteria in the selection screen of the query. This can also be done with the Xtract Universal component.

![SAP-Query-Selection-Parameters](/img/content/SAP-Query-Selection-Parameters.png){:class="img-responsive"}

Please click the *Edit* link to define the selection for the parameters.

The dialog below will open up.

![SAP-Query-Select-Options](/img/content/SAP-Query-Select-Options.png){:class="img-responsive"}

The column *Sign* defines whether the restriction is included in or excluded from the result set. The column *Operator* defines an operator (e.g. =,<,> ....). The values must be entered in the LowValue and HighValue cells. *HighValue* only has to be filled in if the operator is [] (between) or ][ (not between). In all other cases it is sufficient if only the *LowValue* cell is filled in. Of course, you can also use variables. Just place an @ symbol right before the variable name.

The screenshot above selects all values between 100-100 and 999-999 (Include, [] -> from ... to), excluding the single value 100-120 (Excludes =).

To delete a row click on the button in the bottom left-hand corner.
Click on OK to save the changes.