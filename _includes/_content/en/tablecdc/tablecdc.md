The component can be used to extract delta contents from SAP tables.
It creates a log table in SAP that record insert, update, and delete activities that apply to a selected SAP table.<br>


{: .box-warning}
**Warning!** **Missing Authorization**
To use the Table CDC component, access to the designated authority objects (RFC) in SAP must be available.
For more information, refer to the knowledge base article [SAP User Rights: Table CDC](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#table-cdc).


{: .box-tip }
**Tip:** To get information on the basics of Xtract Universal, refer to [Getting Started](./getting-started). 

### About Table CDC

Change Data Capture (CDC) is a method to keep track of data changes such as insert, update and delete in SAP tables.
The Table CDC component creates a log table in SAP that records any changes made to a selected table. 
The content of the log table is cleared after every successful run of the extraction. Data that was not extracted is not cleared from the log table.

For a detailed overview of this process, refer to the Knowledge Base article [Delta Mechanism of TableCDC](https://kb.theobald-software.com/tables/table-cdc-mechanism).

{: .box-note }
**Note:** Clusters, pool tables and views are not supported by the Table CDC component. 

### Requirements
 
- Compatible with SAP ECC 5.0 and higher
- Supported databases:
	- HANA
	- SQL Server
	- Oracle
	- IBM Db2
	- IBM for i (Db4)
	- IBM for z/os (Db6)
	- MaxDB
- SAP custom function module [/THEO/CDC_ECC or /THEO/CDC_S4](./sap-customizing/custom-function-module-for-tablecdc)
- SAP custom function module [/THEO/READ_TABLE or Z_THEO_READ_TABLE](./sap-customizing/custom-function-module-for-table-extraction) version 2.10 or higher

The SAP transport requests for the function modules are provided in the installation directory: `C:\ProgramFiles\[XtractProduct]\ABAP\`, see [Custom function module for TableCDC](./sap-customizing/custom-function-module-for-tablecdc).

<!---
- Access to the SAP authority object `S_TABU_NAM ACTVT=02` must be granted.

- The SAP user must have the right to create SAP Tables, see [SAP Connection - Authentication](./getting-started/sap-connection#authentication).
- Access to the designated authority objects (RFC) in SAP, see [SAP User Rights: Table](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#table) must be granted.
-->

