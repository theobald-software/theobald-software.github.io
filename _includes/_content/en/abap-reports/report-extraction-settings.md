
To access the extraction settings, click **[Extraction Settings]** in the main window of the **Xtract Report** component.
The window "Extraction Settings" opens.
![Table Extractor](/img/content/Report-Extraction-Settings.png){:class="img-responsive"}

### Batch Processing

**Use Background Mode**<br>
If you choose this option, extractions are executed in background mode. Use this option for reports that have an ALV output.

**Background Job Timeout**<br>
Enter the time period (in seconds) how long the report may run in the background until the task aborts.

**Background Job Name**<br>
Enter the name of the background job in the SAP system.

**Spool Destination**<br>
Enter the name of the spool destination (printer).


### Automatic Detection

**Header pattern**<br>
Enter a search pattern (e.g. *header*) to detect the table header. If automatic column detection is enabled.

**Row skip pattern**<br>
Enter a regular expression as a search pattern to skip rows from the result.  <br>
This setting allows e.g. skipping header rows that will be repeated in some reports. <br>
To skip rows that contains the term DESCTEXT or LONGTEXT, set the value DESCTEXT | LONGTEXT. <br>
For further information about regular expressions please refer to the [Microsoft Online Help](http://msdn.microsoft.com/en-us/library/az24scfc.aspx).

### Function Module

{: .box-note }
**Note:** Unlike other components, the Report component requires the installation of the custom function module `Z_XTRACT_IS_REMOTE_REPORT`in your SAP system before use.
For detailed information, see [Install Report Custom Fuction Module](../sap-customizing/install-report-custom-function-module).

**Custom Function**<br>
Enter the name of the function module. The default is `Z_XTRACT_IS_REMOTE_REPORT`.