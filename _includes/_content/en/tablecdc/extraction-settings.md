![table-cdc-extraction-settings](/img/content/tablecdc/table-cdc-extraction-settings.png){:class="img-responsive"}

### Initial Load

#### Package size
The extracted data is split into packages of the defined size. The default value is 50000 lines. <br>
A package size between 20000 and 50000 is advisable for large amounts of data. 
0 means no packaging. Not using packaging can lead to an RFC timeout for large data extracts.

{: .box-warning }
**Warning! RFC_ERROR_SYSTEM_FAILURE - No more storage space available for extending an internal table:** <br>
To avoid a memory overflow on the SAP source system and to avoid huge overheads, choose a package size that suits your memory capacity.


#### Extract data in background job
If this checkbox is checked, the initial load is executed as a background job in SAP. 
Activate this option for long-running extractions with a large amount of data that may run into a timeout error ("Time limit exceeded"), when using the foreground mode. <br>

{: .box-tip }
**Tip:** The background jobs can be found in the SAP JobLog (SM37) under the JobName *THEO_READ_TABLE*.

{: .box-warning }
**Warning! Shared Memory ran out of memory!** <br>
If this error message pops up when running an extraction in the background, adjust the size of the Shared Memory.
SAP recommends a Shared Memory size of 800MB~1.5GB for a production/test system or 2GB~4GB for S/4 systems, see [SAP: How to solve SYSTEM_NO_SHM_MEMORY runtime error](https://ga.support.sap.com/dtp/viewer/#/tree/1080/actions/12107).


#### Background job timeout (seconds)
{% if page.product == "xtract-universal" %}This option can be used if the data transfer to a destination takes a lot of time, e.g., when bulk-inserts are deactivated for database destinations.{% endif %} 
**Background job timeout (seconds)** sets a timeout period for extractions that run in background mode.<br>
The default value is 180 seconds. The maximum timeout value is 3600 seconds. 

### Function Module

Specifies the name of the function module used for data extraction. 
This field is filled automatically depending on what function modules are installed on your SAP system.
The following function modules can be used to extract tables: <br>

- [/THEO/READ_TABLE](../sap-customizing/custom-function-module-for-table-extraction#installation-of-theoread_table)
- Z_THEO_READ_TABLE (for SAP version > 7.40 SP05)
