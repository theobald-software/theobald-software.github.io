If a filter shall be used additionally, a so called **Where Clause** can be built into the model. 

Right-click the *EXECUTE TABLE* activity and choose *Edit*. Click the button on the right side of the *Where Clause* field to define a filter. Click *New* to create a filter condition called Namefilter. Use the button in the *Expression* field to select the filter parameter *Name*.   

![WSD_NewWhereClauseParameterDialog](/img/content/WSD_NewWhereClauseParameterDialog.png){:class="img-responsive"}

![WSD-WhereClauseParameterExpressionDialog](/img/content/WSD-WhereClauseParameterExpressionDialog.png){:class="img-responsive"}

The filter value must then be defined according to the technical field name in the SAP table. 
will be. In this example, you want to create a filter for the table field NAME1.

![WSD-SAPTableKNA1](/img/content/WSD-SAPTableKNA1.png){:class="img-responsive"}

The Where Clause must refer to the technical field name and the input parameter. <br>
Make sure to put the name of the filter condition between single quotation marks.

![WSD-TableWhereClauseDialog2](/img/content/WSD-TableWhereClauseDialog2.png){:class="img-responsive"}

The filter can be used after subsequent deploying in the web service.        