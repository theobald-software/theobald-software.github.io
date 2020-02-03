Unlike the other components, the Report component requires the installation of a custom function module in your SAP system before use.

If you can’t do this on your own, please ask your SAP system administrator for help.

### SAP transport
You can either use SAP transport file *(thtrans.zip)*, which can be found in the ABAP subfolder of the installation folder of our software.


### Manual installation
Alternatively, do a manual installation of the function module as outlined below:

First, create a new function group to place the function module in (name it ZXTRACT or change the name if you like). Create a new function module called Z_XTRACT_IS_REMOTE_REPORT. Set the attribute *remote enabled* to true.

The screenshots below show how the import, export and tables parameters that must be created.

![Report-Custom-Function-01](/img/content/Report-Custom-Function-01.png){:class="img-responsive" }

![Report-Custom-Function-02](/img/content/Report-Custom-Function-02.png){:class="img-responsive" }

![Report-Custom-Function-03](/img/content/Report-Custom-Function-03.png){:class="img-responsive" }

![Report-Custom-Function-04](/img/content/Report-Custom-Function-04.png){:class="img-responsive" }

Copy the source code from the file Z_XTRACT_REMOTE_REPORT.txt into the text box for the source code using *Ctrl+C* and *Ctrl+V*. You can find the file in the installation directory or download it [here](http://www.theobald-software.com/download/SAP/Z_XTRACT_IS_REMOTE_REPORT.txt). 

Now the function module is ready to be used.

If you are interested in how the function module works, have a look at the source code. Each step (Execution, Job Monitoring, Spool Reading etc.) is commented there.

![Report-Custom-Function-Source-Code](/img/content/Report-Custom-Function-Source-Code.png){:class="img-responsive" }

### LIST_OUTPUT

Instead of using the SAP delivered data type TAB512 for the LIST_OUTPUT Tables parameter, you can create your own custom Z data type. This is needed in cases where the length of one report output row exceeds 512 characters. The maximum length is 1023 characters.

![SAPCust-Report-ListOutput](/img/content/SAPCust-Report-ListOutput.png){:class="img-responsive" }

### Exceptions

Caution:  The report throws a LIST_FROM_MEMORY_NOT_FOUND exception when the report returns an empty result.