The Report component requires the installation of a custom function module in your SAP system before use.

If you can’t install the custom function module, ask your SAP system administrator for help.


### Installation via SAP transport
Use the SAP transport file *(thtrans.zip)* to install the custom function module. *thtrans.zip* is provided in the ABAP sub-directory of the programm directory - `C:\Program Files\XtractProduct\ABAP` (by default).


### Manual installation


1. Create a new function group for placing the function module (name it e.g., ZXTRACT).
2. Create a new function module called Z_XTRACT_IS_REMOTE_REPORT, change name if needed. 
3. Set the attribute *remote enabled* to true.
4. Set the import, export and tables parameters as depicted below.<br>
![Report-Custom-Function-01](/img/content/Report-Custom-Function-01.png){:class="img-responsive" }
![Report-Custom-Function-02](/img/content/Report-Custom-Function-02.png){:class="img-responsive" }
![Report-Custom-Function-03](/img/content/Report-Custom-Function-03.png){:class="img-responsive" }
![Report-Custom-Function-04](/img/content/Report-Custom-Function-04.png){:class="img-responsive" }
5. Copy the source code from the file Z_XTRACT_REMOTE_REPORT.txt from the programm directory into the text box for the source code editor using **[Ctrl+C]** and **[Ctrl+V]** (Tab *Source Code*).
6. Save and activate the custom function module.
If you are interested in how the function module works, look at the source code. Each step (Execution, Job Monitoring, Spool Reading etc.) is commented in the source code.
![Report-Custom-Function-Source-Code](/img/content/Report-Custom-Function-Source-Code.png){:class="img-responsive" }

### LIST_OUTPUT

Instead of using the SAP delivered data type *TAB512* for the LIST_OUTPUT tables parameter, you can create your own custom Z data type. 
The custom data type is required in cases, where the length of one report output row exceeds 512 characters. The maximum length is 1023 characters.
![SAPCust-Report-ListOutput](/img/content/SAPCust-Report-ListOutput.png){:class="img-responsive" }


{: .box-warning}
**Note: Exceptions** <br>
The report throws a LIST_FROM_MEMORY_NOT_FOUND exception, when the report returns an empty result.