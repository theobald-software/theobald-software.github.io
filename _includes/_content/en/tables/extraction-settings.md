
![Extraction-Settings-01](/img/content/xu/Table-Extraction-Settings.png){:class="img-responsive"}

### Table Settings
The window "Table Settings" consists of two subsections:
- Extraction Settings
- Function Module 

### Extraction Settings

**Package Size** <br>
Specifies the number of records retrieved per data package. Optimal values can be found by trying out. The default value is 20000 lines. 
A package size between 15000 and 50000 is advisable for large amounts of data. 
0 means no packaging. Not using packaging can lead to an RFC timeout for large data extracts.

{: .box-tip }
**Recommendation:** Especially when executing a table extraction as a background job (see *Extract data in background job*), the package size plays an important role and should be chosen with regard to the total amount of data. 

**Row limit** <br>
Specifies the maximum number of extracted records. *0* Extracts the entire table.

### Function Module
Specifies the name of the function module used for data extraction. The field is filled automatically depending on which function modules are installed on your SAP system.

{: .box-tip }
**Recommendation:** For better performance and restriction avoidance use the function module from Theobald Software *Z_THEO_READ_TABLE*. See also [SAP Customizing](../sap-customizing/custom-function-module-for-table-extraction). 


**Extract data in background job** <br>
If this checkbox is checked, the table extraction is executed as a background job in SAP. Extract data in background job setting is optional and is supported in combination with function module Z_THEO_READ_TABLE as of version 2.0.
Activate the setting *Extract data in background job*  for long-running extractions with a very large amounts of data that may run into a timeout error ("Time limit exceeded"), when using the foreground mode. <br>

{: .box-tip }
**Tip:** the extraction jobs can be found in the SAP JobLog (SM37) under the JobName *theo_read_table*.
