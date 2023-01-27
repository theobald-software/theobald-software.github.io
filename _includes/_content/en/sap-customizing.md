To avoid possible restrictions for table extractions or to use other Xtract extraction types, you need to adjust several settings in the SAP system or use the Z-function modules of Theobald Software.

The following section gives an overview of the installation of custom function modules and customization of the SAP System.


### Custom Function Modules on SAP System

The Custom function modules/ABAP framework are delivered as a part of Theobald Software products and can be installed using the transport requests.
The following components require installation of a custom function module in SAP:

- **Table**: For most tasks, the installation of an ABAP framework is recommended or required. Refer to [Custom function module for table extraction](./sap-customizing/custom-function-module-for-table-extraction). 
{% if page.product == "xtract-universal" or page.product == "board-connector" %}- **TableCDC**: The installation of 2 custom function modules is required, refer to [Custom function module for TableCDC](./sap-customizing/custom-function-module-for-tablecdc).{% endif %}
- **Report**: The installation of a custom function module is required, refer to [Install Report Custom Function Module](./sap-customizing/install-report-custom-function-module).

### Transport Requests

The Theobald Software transport requests need to be imported into SAP by your SAP Basis team.

The following transport requests can be found in the ABAP subfolder of the installation directory (e.g., `C:\Program Files\XtractProduct\ABAP\`):

- `Z_XTRACT_IS_REMOTE_REPORT-transport.zip` - contains the custom function module for the *Report component*
- `Z_THEO_READ_TABLE-transport.zip` - contains the custom function module for the *Table component*; <br> compatible with ABAP version 7.40 SP05 and higher
- `Z_THEO_READ_TABLE-transport-before-740SP05.zip` - contains the custom function module for the *Table component*; <br>compatible with ABAP versions 6.40 to 7.40 SP04
{% if page.product == "xtract-universal" or page.product == "board-connector" %}- `Z_THEO_DELETE_LOG_ENTRIES-transport.zip` - contains the custom function module for the *TableCDC component*{% endif %}


For more information on installing transport request, see the knowledge base article [How to import an SAP Transport Request](https://kb.theobald-software.com/sap/how-to-import-an-sap-transport-request-with-the-transport-management-system-stms) or check the SAP help. <br>
All objects that come with any of the transport requests, can be deleted by importing the Z_THEO_READ_TABLE-deletion_request.zip transport request.


