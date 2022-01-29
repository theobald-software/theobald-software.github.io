### General Workflow for Creating a Report Extraction

The following steps describe the most simple workflow for creating a report extraction. Further tweaking may be required, see below. <br>

When creating a new report extraction, start by executing the report in SAP. Know the selections or variants when executing the report. 
Format the report layout/output in a way that it returns a table-like structure. Save the layout as a variant if possible.

1. In the Report component, look up the ABAP report or transaction you want to extract, see [Look Up a Report or Transaction](#look-up-a-report-or-transaction).
2. Select a variant or manually enter selections in the Selection Screen, see [Variants and Selections](./variants-and-selections).
3. Detect the report columns automatically. If the columns are detected, column name, width and offset are listed in the columns section, see [Define Columns automatically](./report-columns-define#define-columns-automatically).
4. If step 3 returns a single field, the report columns can not be detected automatically. Set the report columns manually, see [Define Columns manually](./report-columns-define#define-columns-manually).
