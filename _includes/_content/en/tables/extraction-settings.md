
![Extraction-Settings-01](/img/content/xu/Table-Extraction-Settings.png){:class="img-responsive"}

{: .box-note }
**Note:** if a technical SAP user does not have authorization rights to access *ENLFDIR* table, the following warning appears:<br>
*Could not load list of available function modules because permission for table ENLFDIR is missing*. <br>
After confirming the warning, the user can **still** adjust the extraction settings.

### Table Settings
The window "Table Settings" consists of two subsections:
- Extraction Settings
- Function Module 


### Extraction Settings

#### Package Size

The extracted data will be split into packages of the defined size. The default value is 50000 lines. <br>
A package size between 20000 and 50000 is advisable for large amounts of data. 
0 means no packaging. Not using packaging can lead to an RFC timeout for large data extracts.

{: .box-warning }
**Warning! RFC_ERROR_SYSTEM_FAILURE - No more storage space available for extending an internal table:** <br>
To avoid a memory overflow on the SAP source system and to avoid huge overheads, choose a package size that suits your memory capacity.

#### Row limit
Specifies the maximum number of extracted records. *0* Extracts the entire table.


### Function Module
Specifies the name of the function module used for data extraction. 
This field is filled automatically depending on what function modules are installed on your SAP system.<br>
The following function modules can be used to extract tables: <br>

- RFC_READ_TABLE (TAB512)
- /BODS/RFC_READ_TABLE  (TAB2048)
- /SAPDS/RFC_READ_TABLE  (TAB2048)
- /BODS/RFC_READ_TABLE2
- /SAPDS/RFC_READ_TABLE2
- Z_THEO_READ_TABLE

{: .box-warning }
**Warning! Duplicates in the target environment!** <br>
The SAP standard modules for table extraction do not have pointers for table fields. In larger tables this may cause low performance and duplicates in the target environment
Use the function module from Theobald Software [Z_THEO_READ_TABLE](../sap-customizing) to ensure smooth extractions.

Note the necessary [authorization for SAP tables](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#table):
```
S_TABU_NAM ACTVT=03; TABLE=ENLFDIR
```
 
#### Extract data in background job
If this checkbox is checked, the table extraction is executed as a background job in SAP. Extract data in background job setting is optional and is supported in combination with function module Z_THEO_READ_TABLE as of version 2.0.
Activate the setting *Extract data in background job*  for long-running extractions with a very large amounts of data that may run into a timeout error ("Time limit exceeded"), when using the foreground mode. <br>

{: .box-tip }
**Tip:** The extraction jobs can be found in the SAP JobLog (SM37) under the JobName *THEO_READ_TABLE*.
