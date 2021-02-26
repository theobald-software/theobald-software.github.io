The following section describes the extraction parameters that can be changed in the "Run Extraction" dialogue.

![Extraction parameters](/img/content/xu/xu_run_extraction_param_gen_2.png){:class="img-responsive"}

To open the "Run Extraction" window, select an extraction in the List of Extractions in the Designer Main Window Overview and click 
**[Run]** (see details in [Running an extraction](../getting-started/run-an-extraction)).


### Subsection "Parameters" Tab "Extraction"

The amount of the parameters depends on the extraction type and destination.
e.g., **decimalSeparator** is a parameter specific to CSV destination.

Parameter name | Parameter description | Special information
------------ | ------------- | -------------
clearBuffer | to clear/keep the result buffer | default value -  false
preview | to enable/disable preview mode | default value - false
source | to dynamically select the source SAP system from which data is extracted (e.g., SAP_DEV and SAP_PROD). Applies only when more than one SAP system is used. | -
destination | to dynamically select the destination to which extraction is written (e.g., db_1 and db_2). Applies only when more than one destination is used.| -
rows | to set the maximum number of rows to be extracted | available in Table 
where |to set the where clause | available in Table 
packageSize | to set the package size | available in Table  
decimalSeparator | to set a symbol between integer and fractional part | available in CSV
columnSeparator |  to set a symbol which indicates the start of a new column | available in CSV


### Subsection "Parameters" Tab "Source"

In the same way as the system parameters and user-defined parameters, the connection settings to a source (SAP) can also be changed dynamically via the URL. 

In the *Source* tab you can override the values that are defined in the [SAP source details](../introduction/sap-connection).

![Source parameters](/img/content/xu/xu_run_extraction_param_gen.png){:class="img-responsive"} 

Parameter name | Parameter description 
------------ | ------------- 
lang | to dynamically change the logon language of the source SAP system  
logonTicket | to dynamically change the ticket issuer of the [SAP logon ticket](./sap-single-sign-on/sso-with-sap-logon-ticket)

{: .box-note }
**Note:** The parameter **logonTicket** can only be set, only if SAP logon ticket is selected as authentication method in the [SAP source details](../introduction/sap-connection).


#### To Adjust Source Parameters
1. Select an extraction.
2. Click **[Run]**. The "Run Extraction" dialogue opens. 
3. Select the tab *Source* and adjust the parameters.
![Run-Extraction-Connection-Parameters](/img/content/xu/xu_run_extraction_source_param.png){:class="img-responsive"}

**Example:** Overriding the connection language to EN generates the following extraction URL: `http://localhost:8065/?name=Plants&lang=EN`

### Subsection "Parameters" Tab "Custom"

{: .box-note }
**Note:** The tab "Custom" is only active, when a user defined variable was created before (see [User-Defined Variables](./advanced-techniques/user-defined-variables)). 

To set the pre-defined parameter, check the box and enter the desired value.
 
![Custom parameters](/img/content/xu/xu_run_extraction_param_cust.png){:class="img-responsive"}

#### URL and command-line tool expression



