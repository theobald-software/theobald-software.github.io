Especially with older SAP releases you may encounter a few restrictions when using the SAP standard function module (RFC_READ_TABLE) for table extraction:

- The overall length of all columns to be extracted must not exceed 512 bytes.
- Depending on the SAP version there may be other restrictions. 
  It is not possible to extract data from tables that contain one or more columns of the data type f (FLTP, floating point), DEC (decimal, e.g. for percentage) or x (RAW, LRAW).
- Poor extraction performance with larger tables.

If these restrictions hinder your work, please install our ABAP framework Z_THEO_READ_TABLE in your SAP system. (Until version 1.x of Z_THEO_READ_TABLE, this used to be just a single function module. Starting from version 2.x, a number of ABAP classes and other DDIC objects have been added, s. screenshot below).

Please use the transport request (Z_THEO_READ_TABLE.zip *or* Z_THEO_READ_TABLE-before_740SP05.zip), that can be found in the ABAP subfolder of the Xtract installation folder.
Please forward these zip files to your SAP Basis team and ask them for an import into your SAP system.

For more detailed information about installing the transport request please read the following [knowledgebase article](https://kb.theobald-software.com/sap/how-to-import-an-sap-transport-request-with-the-transport-management-system-stms?fromSearch=true) or check the SAP help.

**Attention**:
- Please be aware that Z_THEO_READ_TABLE requires **SAP_ABAP version 6.40** or higher.
- Z_THEO_READ_TABLE before_740SP05 won't support sub-selects in a WHERE-clause. That's a retriction of SAP's [Open SQL](https://blogs.sap.com/2014/02/06/abap-news-for-release-740-sp05/). Please use Z_XTRACT_IS_TABLE_COMPRESSION in this case.
- On some older SAP releases, import of Z_THEO_READ_TABLE-before_740SP05 might throw a syntax error. Please contact Theobald software support in this case.
- For uninstalling the ABAP framework of Z_THEO_READ_TABLE, use the deletion transport *Z_THEO_READ_TABLE-deletion_ request*.

![Z_THEO_READ_TABLE_SE80](/img/content/Z_THEO_READ_TABLE_SE80.png){:class="img-responsive" }