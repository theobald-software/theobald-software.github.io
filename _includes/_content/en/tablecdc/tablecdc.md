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

{: .box-note }
**Note:** Clusters, pool tables and views are not supported by the Table CDC component. 

### Requirements

- SAP version 7.40 SP05 or higher.
- The installation of the custom function modules Z_THEO_DELETE_LOG_ENTRIES and Z_THEO_READ_TABLE version 2.10 or higher is mandatory. 
The SAP transport requests for the installation are provided in the installation directory `C:\ProgramFiles\[XtractProduct]\ABAP\`, see [Custom function module for TableCDC](./sap-customizing/custom-function-module-for-tablecdc).
- Required function modules and their package hierarchy:

	| Function Module | Package Hierarchy |
	|-----------------|----------|
	| DMC_DDIF_TABL_GET_WRAPPER |ECC: *CNVM &rarr; DMIS_BASIS_MWB &rarr; DMIS_BASIS &rarr; DMIS* <br> S4: *CNV_DMC_REMOTE &rarr; DMIS_BASIS_MWB &rarr; DMIS_BASIS &rarr; DMIS*|
	| IUUC_CREATE_TABLE | *CNV_INC_PROCESSING_REMOTE &rarr; DMIS_BASIS_INC_FW &rarr; DMIS_BASIS &rarr; DMIS* |
	| IUUC_DD_TABL_DEL_WRAPPER | *IUUC_DD_TABL_DEL_WRAPPER &rarr; CNV_INC_PROCESSING_REMOTE &rarr; DMIS_BASIS_INC_FW &rarr; DMIS_BASIS &rarr; DMIS* |
	| IUUC_COUNT_ENTRIES_LOGGING_TBL | *CNV_INC_PROCESSING_REMOTE &rarr; DMIS_BASIS_INC_FW &rarr; DMIS_BASIS &rarr; DMIS* |
	| IUUC_CRE_ACT_ADBC_TRIGGER | *IUUC_CRE_ACT_ADBC_TRIGGER : CNV_IUUC_REMOTE &rarr; DMIS_BASIS_INC_FW &rarr; DMIS_BASIS &rarr; DMIS* |
	| IUUC_DELETE_ADBC_TRIGGER | *CNV_IUUC_REMOTE &rarr; DMIS_BASIS_INC_FW &rarr; DMIS_BASIS &rarr; DMIS* |
	| Z_THEO_READ_TABLE | *Z_THEO_READ_TABLE* |
	| Z_THEO_DELETE_LOG_ENTRIES | *Z_THEO_CDC* |

{: .box-note }
**Note:** Support for IBM databases will be available in Q4 2023.

<!---
- Access to the SAP authority object `S_TABU_NAM ACTVT=02` must be granted.

- The SAP user must have the right to create SAP Tables, see [SAP Connection - Authentication](./getting-started/sap-connection#authentication).
- Access to the designated authority objects (RFC) in SAP, see [SAP User Rights: Table](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#table) must be granted.
-->

