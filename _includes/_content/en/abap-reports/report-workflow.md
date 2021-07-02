
### About the Report Component

The Report component enables data extraction from most standard and custom ABAP reports and SAP transactions. 
In general report extraction is possible if the report returns a table-like structure in SAP. 
This is the case for many Classical or ALV reports such as RLT10010 (Evaluation of Movements per Storage type) or RKEB0601 (Display Line Items). 

{: .box-note }
**Note:** The Report component requires installation of the custom function module `Z_XTRACT_IS_REMOTE_REPORT` in your SAP system. For detailed information, see [Install Report Custom Fuction Module](./sap-customizing/install-report-custom-function-module).

### General Workflow for Creating a Report Extraction

The following steps describe the most simple workflow for creating a report extraction. Further tweaking may be required, see below. <br>

When creating a new report extraction, start by executing the report in SAP. Know the selections or variants when executing the report. 
Format the report layout/output in a way that it returns a table-like structure. Save the layout as a variant if possible.

1. In the Report component, look up the ABAP report or transaction you want to extract, see [Look Up a Report or Transaction](./abap-reports/report-extraction-define#look-up-a-report-or-transaction).
2. Select a variant or manually enter selections in the Selection Screen, see [Variants and Selections](./abap-reports/variants-and-selections).
3. Detect the report columns automatically. If the columns are detected, column name, width and offset are listed in the columns section, see [Define Columns automatically](./abap-reports/report-columns-define#define-columns-automatically).
4. If step 3 returns a single field, the report columns can not be detected automatically. Set the report columns manually, see [Define Columns manually](./abap-reports/report-columns-define#define-columns-manually).
