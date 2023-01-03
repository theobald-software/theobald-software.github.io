
![Extraction-Settings-01](/img/content/xu/Table-Extraction-Settings.png){:class="img-responsive"}

{: .box-note }
**Note:** if a technical SAP user does not have authorization rights to access *ENLFDIR* table, the following warning appears:<br>
*Could not load list of available function modules because permission for table ENLFDIR is missing*. <br>
After confirming the warning, the user can **still** adjust the extraction settings.


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

- Z_THEO_READ_TABLE
- /BODS/RFC_STREAM_READ_TABLE
- /SAPDS/RFC_READ_TABLE2
- /BODS/RFC_READ_TABLE2
- /SAPDS/RFC_READ_TABLE (TAB2048)
- /BODS/RFC_READ_TABLE (TAB2048)
- Z_AW_RFC_READ_TABLE
- RFC_READ_TABLE (TAB512)

{: .box-warning }
**Warning! Duplicates in the target environment!** <br>
The SAP standard modules for table extraction do not have pointers for table fields. In larger tables this may cause low performance and duplicates in the target environment
Use the function module from Theobald Software [Z_THEO_READ_TABLE](../sap-customizing) to ensure smooth extractions.

Note the necessary [authorization for SAP tables](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#table):
```
S_TABU_NAM ACTVT=03; TABLE=ENLFDIR
```
 
### Extract data in background job
If this checkbox is checked, the table extraction is executed as a background job in SAP. Extract data in background job setting is optional and is supported in combination with function module Z_THEO_READ_TABLE as of version 2.0.
Activate the setting *Extract data in background job*  for long-running extractions with a very large amounts of data that may run into a timeout error ("Time limit exceeded"), when using the foreground mode. <br>

{: .box-tip }
**Tip:** The extraction jobs can be found in the SAP JobLog (SM37) under the JobName *THEO_READ_TABLE*.

{: .box-warning }
**Warning! Shared Memory ran out of memory!** <br>
If this error message pops up when running an extraction in the background, adjust the size of the Shared Memory.
SAP recommends a Shared Memory size of 800MB~1.5GB for a production/test system or 2GB~4GB for S/4 systems, see [SAP: How to solve SYSTEM_NO_SHM_MEMORY runtime error.](https://ga.support.sap.com/dtp/viewer/#/tree/1080/actions/12107).


### Advanced Settings

#### Background job timeout (seconds)

This option can be used if the data transfer to a destination takes a lot of time e.g., when bulk-inserts are deactivated for database destinations.
**Background job timeout (seconds)** sets a timeout period for extractions that run in background mode.<br>
The default value is 180 seconds. The maximum timeout value is 3600 seconds. Change this value only after consulting with [Theobald Support](https://support.theobald-software.com/helpdesk/User/Login). 

{: .box-note }
**Note:** This setting only takes effect if the extractions are running in background mode and when using [Z_THEO_READ_TABLE](../sap-customizing/custom-function-module-for-table-extraction) version 2.11 or higher.


#### Adjust Currency Decimals

The default number of decimal places for a currency in the SAP database is 2 decimals.
Currencies that do not have decimals are also stored in this format, e.g. JPY, VND, KRW, etc.

Example:

| Currency        | Actual Amount          | Amount stored in SAP database |
| ------------- |:-------------:| -----:|
| JPY | 100	|1.00|
| KRW | 10000	|100.00|

When extracting currencies with no decimals, the amount stored in SAP is returned e.g., 100 JPY are extracted as 1.00.
To correct the decimal placement of the extracted data, activate *Adjust Currency Decimals*.
If *Adjust Currency Decimals* is active, currencies without decimals are multiplied by a factor that balances out the decimals.

*Adjust Currency Decimals* also requires the extraction of the corresponding CURRENCY field that can be used as a reference for the multiplication factor.
Use the **[Preview]** function to find the correct currency field/s. 
- If the currency field is part of the table, add it to the output.
- If the currency field is in another table, join the tables. 
- If the reference is not part of a table, *Adjust Currency Decimals* cannot be used.


{: .box-note }
**Note:** The multiplication factor used in *Adjust Currency Decimals* is determined by the SAP currency table TCURX. 
To access the table, the following SAP Authority objects must be set in SAP: *S_TABU_NAM	ACTVT=03; TABLE=TCURX*.
