An extraction has two types of settings. The *Extraction Settings* include settings that affect only the respective extraction type, while the *General Settings* are the same for all extraction types and determine common settings. You can find information about *General Settings* in chapter [General Settings](../advanced-techniques/general-settings).

![Extraction-Settings-01](/img/content/xu/Table-Extraction-Settings.png){:class="img-responsive"}

The following extraction settings are available:

**Package Size** <br>
Specifies the number of records retrieved per data packet. Which values are optimal in your case must be tried out. 
Experience shows that a package size between 15000 and 50000 makes sense for large amounts of data. The default value is 20000 lines. 
0 means that there is no packaging. This can lead to an RFC timeout for large data extracts.
Especially when executing a table extraction as a background job (see *Extract data in background job*), the package size plays an important role and should be chosen with regard to the total amount of data. 

**Row limit** <br>
Specifies the maximum number of extracted records. *0* Extracts the entire table.

**Function Module** <br>
Specifies the name of the function module used for data extraction. The field is filled automatically depending on which function modules are installed on your SAP system.
We recommend that you use our module Z_THEO_READ_TABLE. See also [SAP Customizing](../sap-customizing/function module-for-table-extraction). 

**Extract data in background job** <br>
If this checkbox is checked, the table extraction is executed as a background job in SAP. This setting is optional and is supported in combination with module Z_THEO_READ_TABLE as of version 2.0.
Activation is recommended for long-running extractions with very large amounts of data that run into a timeout error ("Time limit exceeded")using the standard method. <br>
The extraction jobs can be found in the SAP JobLog (SM37) under the JobName *Xtract*.
