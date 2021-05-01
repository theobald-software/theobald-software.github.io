Scalar parameters (imports and exports) are always entered with a static value or can be assigned to an SSIS variable. In case of exports, only variables are allowed because it wouldn't make sense to enter an export in a static value.

As shown in the screenshot below, there are two import parameters. One is filled with a static value (CPDONLY) and the other (MAXROWS) will be filled with an SSIS variable. An @ must be added right before the name to mark a value as a variable.

![BAPI-Scalar-Parameters](/img/content/BAPI-Scalar-Parameters.png){:class="img-responsive" }

