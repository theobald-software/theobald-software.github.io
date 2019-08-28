In this chapter you can find various articles about installation of custom function modules/ABAP framework and customizing of the SAP System.

### Installation<br>
For the following components an installation of a custom function module/ABAP framework in SAP is required. We deliver this as part of our software. 

**Table**: For most tasks, the installation of an ABAP framework is recommended or required. Refer to [Custom function module for table extraction](./sap-customizing/custom-function-module-for-table-extraction). 

**Table Join**: The Table Join requires installation of a custom function module. However, this component is deprecated. Please use the Table component for joining of SAP tables.

**Report**: The installation of a custom function module is required, refer to [Install Report Custom Function Module](./sap-customizing/install-report-custom-function-module).


Please use the transport requests that can be found in the ABAP subfolder of the installation folder for installation. Please have them imported into SAP by your SAP Basis team.

- **thtrans.zip** (contains custom function modules for *Report* and *Table Join*)
- **Z_THEO_READ_TABLE.zip** (contains a custom function module, ABAP classes and different DDIC objects for *Table*, applicable for SAP releases >= 740SP05)
- **Z_THEO_READ_TABLE-before_740SP05.zip** (contains a custom function module, ABAP classes and different DDIC objects for Table, applicable for SAP releases < 740SP05)

For more detailed information about installing the transport request please read the following [knowledgebase article](https://kb.theobald-software.com/sap/how-to-import-an-sap-transport-request-with-the-transport-management-system-stms?fromSearch=true) or check the SAP help.



### Customizing<br>
For the following components a customizing on the SAP system is required: 

**OHS**: Refer to [Preparation for OHS in BW](./sap-customizing/preparation-for-ohs-in-bw).

**DeltaQ**: Refer to [Customizing for DeltaQ](./sap-customizing/customizing-for-deltaq).

