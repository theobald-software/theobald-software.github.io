Especially with older SAP releases you may encounter a few restrictions when using the SAP standard function module (RFC_READ_TABLE) for table extraction:

- The overall length of all columns to be extracted must not exceed 512 bytes.
- Depending on the SAP version there may be other restrictions. 
  It is not possible to extract data from tables that contain one or more columns of the data type f (FLTP, floating point), DEC (decimal, e.g. for percentage) or x (RAW, LRAW).
- Poor extraction performance with larger tables.

If these restrictions hinder your work, please install our custom function Z_THEO_READ_TABLE in your SAP system.

For a manual installation of the custom function use the step-by-step guide in our [knowledgebase articlel](https://kb.theobald-software.com/sap/installation-of-the-function-module-Z_THEO_READ_TABLE). 

Alternatively, you can use the transport request (Z_THEO_READ_TABLE.zip *or* Z_THEO_READ_TABLE-before_740SP05.zip), that can be found in the ABAP subfolder of the Xtract installation folder.
Please forward these zip files to your SAP Basis team and ask them for an import into your SAP system.

For more detailed information about installing the transport request please read the following [knowledgebase article](https://kb.theobald-software.com/sap/how-to-import-an-sap-transport-request-with-the-transport-management-system-stms?fromSearch=true) or check the SAP help.

**Attention**:
- Please be aware that Z_THEO_READ_TABLE requires **SAP_ABAP version 6.40** or higher.
- Z_THEO_READ_TABLE before_740SP05 won't support sub-selects in a WHERE-clause. That's a retriction of SAP's [Open SQL](https://blogs.sap.com/2014/02/06/abap-news-for-release-740-sp05/). Please use Z_XTRACT_IS_TABLE_COMPRESSION in this case.
