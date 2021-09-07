
To access the extraction settings, click **[Extraction Settings]** in the main window of the **Xtract Report** component.
The window "Extraction Settings" opens.
![Table Extractor](/img/content/Report-Extraction-Settings.png){:class="img-responsive"}

### Batch Processing

**Use Background Mode**<br>
If you choose this option, the ABAP report is executed as a batch job in SAP. A spool is generated in SAP (transaction SP01) which is later fetched by the report component. Use this option for long running reports in SAP that would run into an RFC timeout when called in dialog mode. Some reports that throw an error message when running in dialog mode can be extracted when run in background mode.

**Background Job Timeout**<br>
Enter a time period (in seconds). The Xtract Report component polls the status of the batch job in SAP for the specified time period. If the SAP batch job is not finished by the specified time period, the extraction aborts.

**Background Job Name**<br>
The name of the background job under which the report is run in SAP.

**Spool Destination**<br>
Enter the name of the spool destination (printer).


### Automatic Detection

**Header pattern**<br>
Enter a search pattern (e.g., *Created on*) to detect the table header. The report component scans the report's output for this pattern and uses the complete line this pattern occurs in as report header.<br>

This setting is usually not required if the report's columns can be [detected automatically](./report-extraction-define#define-columns-automatically) and *Dynamic column widths and offsets* is checked in the Report window.

**Row skip pattern**<br>
The row skip pattern acts like a "reverse" WHERE clause: All report rows that contain the pattern are removed from the result set. Rows are being removed *after* the report data was extracted from SAP.<br>
Entry of regular expressions is supported. Multiple row skip patterns can be entered separated by the pipe symbol '|' e.g., `2020|2021|-|Sum`. This would remove all rows containing the pattern '2020', '2021', '-' and 'Sum'. <br>
This setting can be used for skipping header rows that are repeated in the output body of reports.<br>

This setting is usually not required if the report's columns can be [detected automatically](./report-extraction-define#define-columns-automatically) and *Dynamic column widths and offsets* is checked in the Report window.

### Function Module

**Custom Function**<br>
The Report component requires installation of the custom function module `Z_XTRACT_IS_REMOTE_REPORT` in your SAP system, see [Install Report Custom Fuction Module](../sap-customizing/install-report-custom-function-module). If you manually created the function module in your SAP system and gave it a different name, enter that name in this field. The default is `Z_XTRACT_IS_REMOTE_REPORT`.

