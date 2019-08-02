To change the server settings, please click on the main menu on *Server -> Settings*.

There are two tabs to change the server settings: *Configuration Server* and *Web Server*. 

### Configuration Server

![XU3_ServerSettings_config_tab](/img/content/XU3_ServerSettings_config_tab.jpg){:class="img-responsive"}

**Port** <br>
Defines the port number, where the server communicates with the designer. The default is 8064. If you set a different port, you will need to add this portnumber to the host name on the logon screen. [host name]:[port]

**Max. age of log files (days)** <br>
Defines the maximum age of the congig server log files in days. After this period, the log files are beeing deleted.

**Authentication methods** <br>
see chapter [User Management](../security/user-management)

**Select X.509 certificate** <br>

See chapter [Installing an X.509 certificate](../security/install-x.509-Certificate) 


**Access Management** <br>
see chapter [Access Management](../security/access-management)

### Web Server

![XU3_ServerSettings_web_tab](/img/content/XU3_ServerSettings_web_tab.jpg){:class="img-responsive"} 

**Protocol / Access control** <br>
**HTTP Unrestricted / HTTP port** <br>
Defines the port number, on which the XU server receives HTTP requests of an extraction. The run statement generates an HTTP-URL.

**HTTPS Unrestricted / HTTPS port** <br>
Enables secure datatranfer via HTTPS.

Defines the port number, on which the XU server receives HTTPS requests of an extraction. The run statement generates an HTTPS-URL.

If you want to receive data via HTTPS you need to install a TLS certificate on the server where the Xtract Universal service is running. 
See chapter [Installing an X.509 certificate](../security/install-x.509-Certificate) 


**HTTPS - Restricted to AD users with Designer read access** <br>
See *HTTPS - Unrestricted*. In addition to that this setting enables access control for executing an extraction. Extractions can only be executed by Windows AD users who have at least been assigned *read access* in the *Configuration Server* tab. Please do also see [release note](https://kb.theobald-software.com/release-notes/XtractUniversal-3.11.0.html) and chapter on [server security](../security/server-security).  


**Max. age of log files (days)** <br>
Defines the maximum age of the webserver log files in days. After that the log files will be deleted. 

**Enable setup distribution for clients** <br>
Defines, whether the setup of the Xtract Universal version running on the server should be downloaded.
When an older XU designer version is connected to a newer XU server version, you will be prompted to download and update the designer with the XU version. 


**Result cache** <br>
**Target directory** <br>
Sets the directory for the buffer files. The default ist the result-cache folder in the Xtract Universal installation directory.

**Max. cached runs** <br>
Defines the maximum count of results of different extractions in the buffer.

**Max. age (minutes)** <br>
Defines the maximum age in minutes of an extraction in the buffer.

