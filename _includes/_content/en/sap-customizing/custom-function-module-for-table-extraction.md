Especially with older SAP releases, you may encounter a few restrictions when using the SAP standard function module (RFC_READ_TABLE) for table extraction:

- The overall length of all columns to be extracted must not exceed 512 bytes.
- Depending on the SAP version there may be other restrictions. 
  It is not possible to extract data from tables that contain one or more columns of the data type f (FLTP, floating point), DEC (decimal, e.g. for percentage) or x (RAW, LRAW).

If these restrictions hinder your work, please install our custom function Z_THEO_READ_TABLE in your SAP system.

For a manual installation of the custom function use the step-by-step guide in our knowledge base article. 

Alternatively, you can use the transport request (Z_THEO_READ_TABLE.zip *or* Z_THEO_READ_TABLE-before_740SP05.zip), that can be found in the ABAP subfolder of the Xtract installation folder.
Please forward these zip files to your SAP Basis team and ask them for an import into your SAP system.

For more detail information about installing the transport request please read the following [Knowledgebase article](https://kb.theobald-software.com/sap/how-to-import-an-sap-transport-request-with-the-transport-management-system-stms?fromSearch=true) or check the SAP help.

 
