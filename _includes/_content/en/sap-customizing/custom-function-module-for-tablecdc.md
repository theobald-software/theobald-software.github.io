The TableCDC component requires the installation of the custom function modules Z_THEO_DELETE_LOG_ENTRIES and Z_THEO_READ_TABLE in your SAP system.<br>
If you cannot install the function mudules, turn to your SAP Basis team for help.


### Installation of Z_THEO_DELETE_LOG_ENTRIES

Install the custom function module Z_THEO_DELETE_LOG_ENTRIES using the transport request Z_THEO_DELETE_LOG_ENTRIES-transport.zip.<br>
The transport request is located in the following installation directory: `C:\Program Files\[XtractProduct]\ABAP\TableCDC\Z_THEO_DELETE_LOG_ENTRIES-transport.zip`.

{: .box-note}
**Note:** Take a look at the README.pdf in the installation directory (e.g.,`C:\Program Files\[XtractProduct]\ABAP\README.pdf`) before installing any custom function modules.

### Installation of Z_THEO_READ_TABLE

Install the custom function module Z_THEO_READ_TABLE version 2.10 or higher, see [Custom function module for Table](./custom-function-module-for-table-extraction#installation-of-z_theo_read_table).

{: .box-note}
**Note:** Take a look at the README.pdf in the installation directory (e.g.,`C:\Program Files\[XtractProduct]\ABAP\README.pdf`) before installing any custom function modules.

<!---


#### Testing the module in SAP

{: .box-warning }
**Warning! Generating Short Dumps** <br>
The function module Z_THEO_READ_TABLE can only be called by Theobald products due to the callback function of the module.
Testing the function module on an SAP system is therefore not possible.

-->

#### Related Links
- [Knowledge Base: How to import an SAP Transport Request](https://kb.theobald-software.com/sap/how-to-import-an-sap-transport-request-with-the-transport-management-system-stms)
- [Table CDC - Requirements](../table-cdc#requirements)