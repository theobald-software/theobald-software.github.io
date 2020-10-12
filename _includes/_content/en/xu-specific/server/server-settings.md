
### To open server settings
In the main window of the Designer navigate to **[Server] > [Settings]**. The 'Server settings' window opens. There are two tabs in the 'Server settings' window:
- *Configuration Server*
- *Web Server*


{: .box-note }
**Note:** The settings are stored in the following directory: `C:\Program Files\XtractUniversal\config\server` (by default).


### Configuration Server

![XU3_ServerSettings_config_tab](/img/content/XU3_ServerSettings_config_tab.png){:class="img-responsive"}


#### Designer connections

**Port (1)** <br>
Defines the port number for communication between Server and Designer. The default is 8064. If you set a different port, add the new port number to the host name on the logon screen ([host name]:[port]).

![XU-Designer-Logon](/img/content/xu/xu-designer-logon.png){:class="img-responsive"}

**Max. age of log files (days)** <br>
Defines the maximum age of the config server [log files](../logging/server-logging) in days. After this period the log files are deleted.

**Authentication methods** <br>
See section [User Management](../security/user-management).

**Select X.509 certificate** <br>

See section [Installing an X.509 certificate](../security/install-x.509-Certificate).


#### Access Management
See section [Access Management](../security/access-management).


### Web Server
![XU3_ServerSettings_web_tab](/img/content/XU3_ServerSettings_web_tab.png){:class="img-responsive"} 


#### Protocol / Access control

**HTTP - Unrestricted / HTTP port** (default) <br>
Defines the port number, on which the XU server receives HTTP requests of an extraction. The run statement generates an HTTP-URL. 

**HTTPS - Unrestricted / HTTPS port** <br>
Enables secure data transfer via HTTPS.

Defines the port number, on which the XU server receives HTTPS requests of an extraction. The run statement generates an HTTPS-URL. Port option defines the HTTPS listener port.

If you want to receive data via HTTPS you need to install a TLS certificate on the server, on which the Xtract Universal service is running. <br>
See section [Installing an X.509 certificate](../security/install-x.509-Certificate). 

**HTTPS - Restricted to AD users with Designer read access** <br>
See *HTTPS - Unrestricted*. This setting enables an additional access control for executing an extraction. Extractions can only be executed by Windows AD users with at least a read permission (*Read*) in the *Configuration Server* tab. For additional information see [release note](https://kb.theobald-software.com/release-notes/XtractUniversal-3.11.0.html) and section [server security](../security/server-security).  


#### Misc.

**Max. age of log files (days)** <br>
Defines the maximum age of the web server [log files](../logging/server-logging) in days. After this period the log files are deleted.

**Enable setup distribution for clients** <br>
Defines whether the setup of the Xtract Universal version running on the server needs to be downloaded. When an older Xtract Universal Designer version is connected to a newer Xtract Universal Server version, you are be prompted to download and update the Designer with the Xtract Universal version. 


#### Result cache

{:.box-note}
**Note:** *Cash results* option is only available in [pull destinations](../destinations#pull-and-push-destinations) (e.g., PBI, Qlik etc.).

**Target directory** <br>
Sets the directory for the buffer files. The default ist the result-cache folder in the Xtract Universal installation directory: <br>
`C:\Program Files\XtractUniversal\result-cache`.

**Max. cached runs** <br>
Defines the maximum count of results of different extractions in the buffer.

**Max. age (minutes)** <br>
Defines the maximum age in minutes of an extraction in the buffer.

