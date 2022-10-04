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

### Authorizing Access to Specific Reports

By default all reports are accessible.
To limit access to a report, an authorization group must be assigned to the report.
Access to the report can then be granted through the S_PROGRAM authorization object, see [SAP Note 338177](https://launchpad.support.sap.com/#/notes/338177).

{: .box-tip }
**Tip:** Use transaction code SM30 to create a new authorization group in table TPGP or V_TPGP.

1. Log into SAP and use transaction code SE38 to open the ABAP Editor.
2. Enter the name of the report you want to restrict access to and select **Attributes** as the *Subobjects*.
3. Click **[Change]**. A window that contains the program attributes opens.
4. Assign an authorization group.<br>
Assigning an authorization group makes the report not accessible from function modules like Z_XTRACT_IS_REMOTE_REPORT via **SUBMIT** nor through the associated TCODE. <br>
![report-authorization](/img/content/report-authorization.png){:class="img-responsive"}
5. To grant access to users, edit or create a user role to grant access to.
6. Assign the authorization object S_PROGRAM to the user role.
7. Assign the same authorization group that is assigned to the report to the S_PROGRAM object field *P_GROUP*. Select **SUBMIT** in the object field *P_ACTION*.
8. Save and generate the authorization.
9. Assign the user role to users.

{: .box-note}
**Note:** Reports without an assigned authorization group can be accessed freely.


***********
#### Related Links
- [How to import an SAP Transport Request with the Transport Management System STMS](https://kb.theobald-software.com/sap/how-to-import-an-sap-transport-request-with-the-transport-management-system-stms)
- [Create Function Group](https://help.sap.com/viewer/bd833c8355f34e96a6e83096b38bf192/7.52.0/en-US/d1801ef5454211d189710000e8322d00.html)