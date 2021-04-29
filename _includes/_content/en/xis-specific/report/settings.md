
![Report-Preferences](/img/content/Report-Preferences.png){:class="img-responsive" }

**Automatic String Conversion**<br>
All strings are converted into VarChar strings if the source system is non-Unicode, and all strings are converted into NVarChar if the source system is Unicode.

**Convert Strings to VarChar**<br>
All strings are converted to VarChar regardless of whether the source system is Unicode or not.

**Convert Strings to NVarChar**<br>
All strings are converted to NVarChar regardless of whether the source system is Unicode or not.

**Use Batch**<br>
The report is executed in batch mode (choose this option for reports that have ALV output).

**Batch Timeout**<br>
Defines the time period until the task fails while waiting for a batch job to be completed.

**Batch Job Name**<br>
Name of the background job.

**Spool Destination**<br>
Name of the spool destination (printer).

**Custom Function**<br>
The function module name installed in SAP.

**Automatic column detection**<br>
If checked the automatic column detection function is enabled.

**Pattern for header detection**<br>
Defines a pattern (e.g. *header*) for detecting the report header if the column detection is eabled.

**Ignore ABAP Exceptions**<br>
Defines that ABAP exceptions are ignored.
