All Theobald Software products log all steps performed on a system to log files.
The logs can be found in the product directory:<br>
e.g.: `C:\Program Files\[Product Name]\logs`

The server logs contain three types of logs that affect the server, such as starting and stopping the service (web), configuration (config) and information on process (run) of every single extraction.

In addition to the server logging there is a log for each [extraction](./extraction-logging) and a [debug log](./logging-debug).

To view the server log, navigate to the main menu of the Designer and click **[Server > Log]**. 
  
![View-Server-Log](/img/content/View-Server-Log.png){:class="img-responsive"}

Logs are generated per day. To switch between protocols you can use the list on the left. 


### Log levels
Each log entry is assigned a log level. 

- **Errors** - error messages that are issued during the extraction process.
- **Information** - status messages that do not result in an extraction error.
- **Warnings** - information about issues that do not result in an error. For example, authentication failures.
- **Debug Details** - detailed information that helps finding the reason for occurred  errors.

Select the checkboxes on the top left to decide, which log levels to display. 


### Copying the log
Click **[Copy To Clipboard]** to copy the current log output to the clipboard. The copied log can be pasted anywhere (e.g., email).

Both server and extraction logs are automatically deleted after a defined period. The period can be set in the server configuration.

