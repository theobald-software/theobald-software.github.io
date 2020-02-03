
Extraction parameters can be changen in the window "Run extractions".
![Extraction parameters](/img/content/xu/xu_run_extraction_param_gen.png){:class="img-responsive"}

To open "Run extractions" window, select an extraction in the main window of the Designer and click **[Run]** (see details in [Running an extraction](./content/_en/xtract-universal/getting-started-table/run-an-extraction)).

### Subsection "Parameters" Tab "Extraction"

The amount of the parameters depends on the extraction type and destination.
e.g., **decimalSeparator** is a parameter specific to CSV destination.

Parameter name | Parameter description | Default value
------------ | ------------- | -------------
clearBuffer | To clear/keep the result buffer | false
preview | To enable/disable preview mode | false
source | To dynamically select the source SAP system from which data is extracted (e.g., SAP_DEV and SAP_PROD). Applies only when more than one SAP system is used. | -
destination | To dynamically select the destination to which extraction is written (e.g., db_1 and db_2). Applies only when more than one destination is used.| -
rows | To set the maximum number of rows to be extracted | -
where | To set the where clause | -
packageSize | To set the package size | - 
decimalSeparator | **CSV special:** To set a symbol between integer and fractional part | -
columnSeparator | **CSV special:** To set a symbol which indicates the start of a new column | -

### Subsection "Parameters" Tab "Source"

In this tab..., der von mir geändert wird!

Parameter name | Parameter description 
------------ | ------------- 
lang | To set the language  
logonTicket | to ...[link to x]

### Subsection "Parameters" Tab "Custom"

{: .box-note }
**Note:** the tab "Custom" is only active, when a parameter with @-symbol is defined in the [WHERE clause](./tables/where-clause).

To set the pre-defined parameter, check the box and enter the desired value.
 
![Custom parameters](/img/content/xu/xu_run_extraction_param_cust.png){:class="img-responsive"}