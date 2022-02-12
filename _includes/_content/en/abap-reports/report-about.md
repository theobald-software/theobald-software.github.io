The Report component enables data extraction from most standard and custom ABAP reports and SAP transactions. 
In general report extraction is possible if the report returns a table-like structure in SAP. 
This is the case for many Classical or ALV reports such as RLT10010 (Evaluation of Movements per Storage type) or RKEB0601 (Display Line Items). 

{: .box-note }
**Note:** The Report component requires installation of the custom function module `Z_XTRACT_IS_REMOTE_REPORT` in your SAP system. For detailed information, see [Install Report Custom Fuction Module](./sap-customizing/install-report-custom-function-module).

{: .box-warning}
**Warning!** **Missing Authorization**
To use the Report component, access to the designated authority objects (RFC) in SAP must be available.
For more information, see the knowledge base article on [SAP User Rights: Report](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#report).

