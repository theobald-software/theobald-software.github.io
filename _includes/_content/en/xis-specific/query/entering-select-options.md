Within the SAP GUI, you can create complex selection criteria in the selection screen of the query. This can be also done with the Xtract IS Query ent.
Click the *Edit* link to define the selection for the parameters.

![Selection-Options-Fill-01](/img/content/Selection-Options-Fill-01.png){:class="img-responsive" }

The dialog below will open up.

![Selection-Options-Fill-02](/img/content/Selection-Options-Fill-02.png){:class="img-responsive" }

The column *Sign* defines whether the restriction is included in or excluded from the result set. <br>
The column *Option* defines an operator (e.q. =,<,> ....). <br>
The values must be entered in the *LowValue* and *HighValue* cells. *HighValue* only has to be filled in if the operator is [] (between) or ][ (not between).<br>
In all other cases it is sufficient if only the *LowValue* cell is filled in.<br>
Of course, you can also use SSIS variables. Just place an @ symbol right before the variable name.