The extraction of reports requires the installation of a custom function module in your SAP system.<br>
If you cannot install the function module, turn to your SAP Basis team for help.

{: .box-note}
**Note:** As of version 1.2 of the custom function module `Z_XTRACT_IS_REMOTE_REPORT` access to reports must be explicitly granted, see [Authority Objects for Z_XTRACT_IS_REMOTE_REPORT](#authority-objects-for-z_xtract_is_remote_report).

### Installation of Z_XTRACT_IS_REMOTE_REPORT
Install the function module using the transport request *Z_XTRACT_IS_REMOTE_REPORT-transport.zip*. <br> 
The transport request is located in the following installation directory: `C:\Program Files\[XtractProduct]\ABAP\Report\Z_XTRACT_IS_REMOTE_REPORT-transport.zip`.

The transport request needs to be imported into SAP by your SAP Basis team.

### Authority Objects for Z_XTRACT_IS_REMOTE_REPORT

As of Z_XTRACT_IS_REMOTE_REPORT version 1.2 access to reports must be explicitly granted.<br>
There are 2 ways to verify that the SAP user is allowed to extract a report:
- Use authentication groups, see [Authorizing Access to Reports via Authorization Groups](https://kb.theobald-software.com/sap/authorizing-access-to-specific-reports){:target="_blank"}.
- Use the custom authorization object Z_TS_PROG. 


***********
#### Related Links
- [How to import an SAP Transport Request with the Transport Management System STMS](https://kb.theobald-software.com/sap/how-to-import-an-sap-transport-request-with-the-transport-management-system-stms)
- [Authorizing Access to Specific Reports](https://kb.theobald-software.com/sap/authorizing-access-to-specific-reports)
- [Create Function Group](https://help.sap.com/viewer/bd833c8355f34e96a6e83096b38bf192/7.52.0/en-US/d1801ef5454211d189710000e8322d00.html)
