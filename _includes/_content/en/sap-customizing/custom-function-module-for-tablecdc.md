The TableCDC component requires the installation of the custom function modules /THEO/CDC and THEO/READ_TABLE in your SAP system.<br>
If you cannot install the function modules, turn to your SAP Basis team for help.


### Installation of THEO_CDC_ECC or THEO_CDC_S4

- For SAP ECC systems, install the custom function group THEO_CDC_ECC.
The transport request for the installation is located in the following installation directory: `C:\Program Files\[XtractProduct]\ABAP\TableCDC\THEO_CDC_ECC.zip`.

- For SAP S/4 systems with SAP_BASIS version < 7.55, install the custom function group THEO_CDC_S4.
The transport request for the installation is located in the following installation directory: `C:\Program Files\[XtractProduct]\ABAP\TableCDC\THEO_CDC_S4.zip`.

- For SAP S/4 systems with SAP_BASIS version 7.55 or higher, install the custom function group THEO_CDC_S4_755.
The transport request for the installation is located in the following installation directory: `C:\Program Files\[XtractProduct]\ABAP\TableCDC\THEO_CDC_S4_755.zip`.


The transport request needs to be imported into SAP by your SAP Basis team.<br>
The function groups /THEO/CDC_ECC and /THEO/CDC_S4 both contain the following function modules:

| Function Modules | Description |
| :------ |:--- |
| /THEO/CLEAR_LOGTAB | Clear entries of log tab up to a given sequence number | 
| /THEO/COUNT_LOGTAB_ENTRIES | Count log table entries |
| /THEO/CREATE_LOG_TABLE | Function module for creating log tables |
| /THEO/CREATE_TRIGGERS | Function module for creating DB triggers for CDC |
| /THEO/DELETE_LOG_TABLE | Function module for deleting log tables |
| /THEO/DELETE_TRIGGERS | Function module for deleting DB triggers for CDC |
| /THEO/GET_DB | Get database system identifier|

{: .box-note}
**Note:** Take a look at the README.pdf in the installation directory (e.g.,`C:\Program Files\[XtractProduct]\ABAP\README.pdf`) before installing any custom function modules.

### Installation of /THEO/READ_TABLE

Install the custom function module /THEO/READ_TABLE, see [Custom function module for Table](./custom-function-module-for-table-extraction#installation-of-theoread_table).

{: .box-note}
**Note:** Take a look at the README.pdf in the installation directory (e.g.,`C:\Program Files\[XtractProduct]\ABAP\README.pdf`) before installing any custom function modules.

*****
#### Related Links
- [Knowledge Base: How to import an SAP Transport Request](https://kb.theobald-software.com/sap/how-to-import-an-sap-transport-request-with-the-transport-management-system-stms)
- [Knowledge Base: Delta Mechanism of TableCDC](https://kb.theobald-software.com/tables/table-cdc-mechanism)
- [Table CDC - Requirements](../table-cdc#requirements)
