The follwing section describes the extraction parameters can be changed in the window "Run extractions".

![Extraction parameters](/img/content/xu/xu_run_extraction_param_gen_2.png){:class="img-responsive"}

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

![Source parameters](/img/content/xu/xu_run_extraction_param_gen.png){:class="img-responsive"}

In this tab you can override the values that are defined in the [SAP source details](./sap-connection).

Parameter name | Parameter description 
------------ | ------------- 
lang | To dynamically change the logon language of the source SAP system  
logonTicket | To dynamically change the ticket issuer of the [SAP logon ticket](./sap-single-sign-on/sso-with-sap-logon-ticket)

{: .box-note }
**Note:** The parameter **logonTicket** can only be set, only if SAP logon ticket is selected as authentication method in the [SAP source details](./sap-connection).


### Subsection "Parameters" Tab "Custom"

{: .box-note }
**Note:** The tab "Custom" is only active, when a variable with @-symbol is defined in the [WHERE clause](../table/where-clause).

To set the pre-defined parameter, check the box and enter the desired value.
 
![Custom parameters](/img/content/xu/xu_run_extraction_param_cust.png){:class="img-responsive"}
