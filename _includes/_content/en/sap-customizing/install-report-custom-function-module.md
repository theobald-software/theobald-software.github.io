The report component requires the installation of a custom function module in your SAP system.<br>



### Installation with an SAP transport
Installation of the function module using the transport request *thtrans.zip* supplied. <br> 
The transport request is located in the following installation directory `C:\Program Files\[XtractProduct]\ABAP\thtrans.zip`.

### Manual installation

1. Call transaction *SE80 - Object Navigator* to create a new function group, e.g. ZXTRACT
![Create_new_function_group](/img/content/create_function_group.png){:class="img-responsive"}
2. Call transaction *SE37* to create a new function module. The name should be *Z_XTRACT_IS_REMOTE_REPORT*, but can be changed if necessary. 
3. Set the *Processing Type* of the module to *Remote-Enabled Module* (remote-enabled). 
![Report_function_attributes](/img/content/report_function_attributes.png){:class="img-responsive"}
4. Create the module signature according to the following screenshots.
![Report_function_import](/img/content/report_function_import.png){:class="img-responsive"}
![Report_function_export](/img/content/report_function_export.png){:class="img-responsive"}
![Report_function_tables](/img/content/report_function_tables.png){:class="img-responsive"}
![Report_function_exceptions](/img/content/report_function_exceptions.png){:class="img-responsive"}
5. Copy the source code with **[Ctrl+C]** and **[Ctrl+V]** from the file `C:\Program Files\[Xtract Product]\ABAP\Z_XTRACT_IS_REMOTE_REPORT.txt` into the code editor - tab *Source Code*.
![Report_function_source](/img/content/report_function_source.png){:class="img-responsive"}
6. Save and activate the module.

{: .box-tip }
**Tip:** The functionality of the module Z_XTRACT_IS_REMOTE_REPORT can be understood from reading the source code. All steps for execution, job monitoring and spool retrieval are commented in the source code.

### SAP Standard Data Type TAB512

Instead of using the SAP standard data type *TAB512* for the LIST_OUTPUT table parameter, you can create your own Z data type. <br> 
This is necessary if the output length of a report line is more than 512 characters. The maximum possible length is 1023 characters.
![SAPCust-Report-ListOutput](/img/content/report_list_output_ztag1024png.png){:class="img-responsive"}

{: .box-note}
**Note:** The exception LIST_FROM_MEMORY_NOT_FOUND is thrown if the report does not return a result.

***********
#### Related Links
- [How to import an SAP Transport Request with the Transport Management System STMS](https://kb.theobald-software.com/sap/how-to-import-an-sap-transport-request-with-the-transport-management-system-stms)
- [Create Function Group](https://help.sap.com/viewer/bd833c8355f34e96a6e83096b38bf192/7.52.0/en-US/d1801ef5454211d189710000e8322d00.html)