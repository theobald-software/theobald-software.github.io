The component can be used to extract delta contents from SAP tables and views.
It creates a log table in SAP that record insert, update, and delete activities that apply to a selected SAP table or view<br>

<!---
{: .box-warning}
**Warning!** **Missing Authorization**
To use the Table component, access to the designated authority objects (RFC) in SAP must be available.
For more information, see the knowledge base article on [SAP User Rights: Table](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#table).
-->

{: .box-tip }
**Tip:** To get information on the basics of Xtract Universal, refer to [Getting Started](./getting-started). 

### About Table CDC

Change Data Capture (CDC) is a method to keep track of data changes such as insert, update and delete in SAP tables.
The Table CDC component creates a log table in SAP that records any changes made to a selected table or view. 
The content of the log table is cleared after every successful run of the extraction. Data that was not extracted is not cleared from the log table.

{: .box-note }
**Note:** Clusters and pool tables are not supported by the Table CDC component. 

### Requirements

- SAP version 7.40 SP05 or higher.
- The installation of the custom function modules Z_THEO_DELETE_LOG_ENTRIES and Z_THEO_READ_TABLE version 2.10 or higher is mandatory. 
The SAP transport requests for the installation is provided in the installation directory `C:\ProgramFiles\[XtractProduct]\ABAP\`, see [Custom function module for TableCDC](./sap-customizing/custom-function-module-for-tablecdc).


<!---
- Access to the SAP authority object `S_TABU_NAM ACTVT=02` must be granted.

- The SAP user must have the right to create SAP Tables, see [SAP Connection - Authentication](./getting-started/sap-connection#authentication).
- Access to the designated authority objects (RFC) in SAP, see [SAP User Rights: Table](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#table) must be granted.
-->

