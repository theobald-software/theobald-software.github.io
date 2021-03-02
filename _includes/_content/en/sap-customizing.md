To avoid possible restrictions in table extraction or to use other Xtract extraction types, you need to adjust several settings in the SAP system or use the Z-function modules or ABAP Framework of Theobald Software.
The following section gives an overview over the installation of custom function modules/ABAP framework and customizing of the SAP System.


### Custom Function Modules / ABAP Framework on SAP System

The Custom function modules/ABAP framework are delivered as a part of Theobald Software products. The custom function modules /ABAP Framework can be installed using the transport requests (see below).
For the following components an installation of a custom function module/ABAP framework in SAP is required:

- **Table**: For most tasks, the installation of an ABAP framework is recommended or required. Refer to [Custom function module for table extraction](./sap-customizing/custom-function-module-for-table-extraction). 
- **Report**: The installation of a custom function module is required, refer to [Install Report Custom Function Module](./sap-customizing/install-report-custom-function-module).


### Transport Requests

The Theobald Software transport requests need to be imported into SAP by your SAP Basis team.

The following transport requests can be found in the ABAP subfolder of the installation folder (e.g., `C:\Program Files\XtractProduct\ABAP`):

- thtrans.zip - contains custom function module for the *Report component*
- Z_THEO_READ_TABLE.zip - contains custom function module, ABAP classes and different DDIC objects for the *Table component*; <br> for SAP_ABA version >= 740SP05
- Z_THEO_READ_TABLE-before_740SP05.zip - contains a custom function module, ABAP classes and different DDIC objects for the *Table component*;<br>
 for SAP_ABA version 640 - 740 SP05

For more detailed information about installing the transport request, see the knowledge base article [How to import an SAP Transport Request](https://kb.theobald-software.com/sap/how-to-import-an-sap-transport-request-with-the-transport-management-system-stms?fromSearch=true) or check the SAP help.


### Customizing
For the following components a customizing on the SAP system is required: 

- **OHS**: Refer to [Preparation for OHS in BW](./sap-customizing/preparation-for-ohs-in-bw).
- **DeltaQ**: Refer to [Customizing for DeltaQ](https://help.theobald-software.com/en/xtract-is/sap-customizing/customizing-for-deltaq).

