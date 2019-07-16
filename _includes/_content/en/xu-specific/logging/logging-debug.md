If some errors occur, debug logging (tracing) information may be required to analyze the issue. To activate tracing please follow those steps: 

1. Fill in a path (e.g. C:\Temp\Trace\) in the field Trace Directory in the SAP connection Manager.
    To open the SAP connection manager, select the designer menu Server -> Manage Services. Select your SAP connection and click Edit. 
2. Reproduce the error. XML Files are created in the folder specified with the tracing information.
3. Compress the folder to a zip file (e.g. Trace.zip) and sent it to our support.
4. After reproducing the error delete the entry in the field Trace Directory since tracing is not needed anymore. 

![tracing-setting](/img/content/tracing-setting.jpg){:class="img-responsive"}

Please note that the debug logging usually should be activated by request of the support team.<br>
There are plenty of information that will be collected. This can decrease the capacity of your hard drives dramatically.<br>
Please note that the default logging is independent of the debug logging settings.<br>
The default logging will be accessed even if the trace directory entry in the connection manager is left blank.
