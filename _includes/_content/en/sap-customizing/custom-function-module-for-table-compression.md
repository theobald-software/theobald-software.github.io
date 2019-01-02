There are several restrictions when using the SAP standard:

- The overall length of all columns to be extracted must not exceed 512 bytes.
- Depending on the SAP version there may be other restrictions. 
  It is not possible to extract data from tables that contain one or more columns of the data type f (FLTP, floating point), DEC (decimal, e.g. for percentage) or x (RAW, LRAW).

If these restrictions hinder your work, please install the custom function in your SAP system.

For a manual installation of the custom function use the step-by-step guide in our Knowledge Base article. 

Alternatively, you can use the transport request (thtrans.zip), that can be found in the ABAP subfolder of the installation folder, to install the function module.
For more detail information about installing the transport request please read the following [Knowledgebase article](https://kb.theobald-software.com/sap/how-to-import-an-sap-transport-request-with-the-transport-management-system-stms?fromSearch=true) or check the SAP help.

For a high performance mass data extraction from SAP tables we have developed a new custom function Z_XTRACT_IS_TABLE_COMPRESSION.
We recommend to use the new function module, which is the successor of the custom function Z_XTRACT_IS_TABLE. 

To install the custom function module manually please refer to our [Knowledgebase article](https://kb.theobald-software.com/xtract-is/xtract-is-table-with-data-compression-z_xtract_is_table_compression?fromSearch=true).  
