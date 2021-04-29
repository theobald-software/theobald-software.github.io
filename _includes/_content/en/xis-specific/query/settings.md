
![Query-Settings](/img/content/Query-Settings.png){:class="img-responsive" }

**Max Rows**<br>
Maximum numbers of rows to be extracted. 0 is unlimited.

**Automatic String Conversion**<br>
All strings are converted into VarChar strings if the source system is non-Unicode, and all strings are converted into NVarChar if the source system is Unicode.

**Convert Strings to VarChar**<br>
All strings are converted to VarChar regardless if the source system is Unicode or not.

**Convert Strings to NVarChar**<br>
All strings are converted to NVarChar regardless if the source system is Unicode or not.

**Use Variant Variable**<br>
The text field for the variant will open for user editing and an SSIS variable can be entered. A dynamic variant can be assigned this way.

**Do not treat “No Data Selected” as Error**<br>
Defines whether an error message is given when there is no data to be selected.