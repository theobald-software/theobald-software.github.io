The report component requires the installation of a custom function module in your SAP system.<br>
If you cannot install the function mudule, turn to your SAP Basis team for help.

### Installation 
Install the function module using the transport request *Z_XTRACT_IS_REMOTE_REPORT-transport.zip*. <br> 
The transport request is located in the following installation directory: `C:\Program Files\[XtractProduct]\ABAP\Report\Z_XTRACT_IS_REMOTE_REPORT-transport.zip`.


### SAP Standard Data Type TAB512

Instead of using the SAP standard data type *TAB512* for the LIST_OUTPUT table parameter, you can create your own Z data type. <br> 
This is necessary if the output length of a report line is longer than 512 characters. The maximum possible length is 1023 characters.
![SAPCust-Report-ListOutput](/img/content/report_list_output_ztag1024png.png){:class="img-responsive"}

{: .box-note}
**Note:** The exception `LIST_FROM_MEMORY_NOT_FOUND` is thrown if the report does not return a result.

***********
#### Related Links
- [How to import an SAP Transport Request with the Transport Management System STMS](https://kb.theobald-software.com/sap/how-to-import-an-sap-transport-request-with-the-transport-management-system-stms)
- [Create Function Group](https://help.sap.com/viewer/bd833c8355f34e96a6e83096b38bf192/7.52.0/en-US/d1801ef5454211d189710000e8322d00.html)