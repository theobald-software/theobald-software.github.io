When extracting tables from older SAP releases you may encounter restrictions when using the SAP standard function module (RFC_READ_TABLE). 
Possible restrictions include poor performance with large tables, limited width of columns, etc.

To avoid restrictions, install the Theobald Software custom function module /THEO/READ_TABLE on your SAP system, see [Custom Function Module for Table](./sap-customizing/custom-function-module-for-table-extraction).

It is recommended to install the latest custom function module /THEO/READ_TABLE:
- `THEO_READ_TABLE_740SP05.zip` - compatible with ABAP version 7.40 SP05 and higher
- `THEO_READ_TABLE_710.zip` - compatible with ABAP version 7.10 and higher
- `THEO_READ_TABLE_640.zip` - compatible with ABAP versions from 6.40 until 7.03
- `THEO_READ_TABLE_46C.zip` - compatible with ABAP versions from 4.6C until 6.40