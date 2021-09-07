The Xtract IS Report component is a data source for SSIS that enables ABAP report execution and processing of the output in SSIS data flow.

The Report component enables data extraction from most standard and custom ABAP reports and SAP transactions. 
In general report extraction is possible if the report returns a table-like structure in SAP. 
This is the case for many Classical or ALV reports such as RLT10010 (Evaluation of Movements per Storage type) or RKEB0601 (Display Line Items).

{: .box-note }
**Note:** The Report component requires installation of the custom function module `Z_XTRACT_IS_REMOTE_REPORT` in your SAP system. For detailed information, see [Install Report Custom Fuction Module](./sap-customizing/install-report-custom-function-module).

![Report](/img/content/Report.png){:class="img-responsive" }

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}