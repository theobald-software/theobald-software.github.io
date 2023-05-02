### Installation and Configuration on SAP


|Component             | SAP Release           | Requirements on the SAP system        |
|----------------------|-----------------------|-------------------------------------------------------------------------------|
|Table                 | Rel. > 4.6C       | Installation of a custom function module [Z_THEO_READ_TABLE](../sap-customizing/custom-function-module-for-table-extraction#installation-of-z_theo_read_table) is recommended.    |
{% if page.product != "xtract-is" %}|Table CDC            | Rel. 7.4 or above     | Installation of a custom function modules is necessary, see [Table CDC Requirements](../table-cdc#requirements).     |{% endif %}
|BAPI & Function Module| Rel. > 4.6C       | No requirements. **Note:** Only remote-enabled functions are supported.                            |
|Query                 | Rel. > 4.6C       | No requirements.      |
|Report                | Rel. > 4.6C       | Installation of a custom function module [Z_XTRACT_IS_REMOTE_REPORT](../sap-customizing/install-report-custom-function-module) is necessary.   |
|BW Cube & InfoProvider| Rel. > BW 3.1     | No requirements.                                                                          |
|BW Query              | Rel. > BW 3.1     | No requirements. **Note**: "Allow External Access to this Query" option is active. |    
|Hierarchy             | Rel. > BW 3.1     | No requirements.      |
|ODP                   | SAP_BASIS >= 730, BW >= 7,3X   | No requirements.   |
|DeltaQ                | Rel. > 4.6C       | Customizing required, see [Customizing for DeltaQ](../sap-customizing/customizing-for-deltaq).                                                                   |
|OHS                   | Rel. > BW 3.5     | Customizing required, see [Customizing for OHS in BW](../sap-customizing/preparation-for-ohs-in-bw).                                                                   |


For Information about the installation of the custom function modules and the SAP customizing, check the section [SAP customizing](../sap-customizing).
