---
ref: xu-server-04
layout: page
title: Server Settings in XU 3.x
description: Server Settings in XU 3.x
product: xtract-universal
parent: server
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=server_settings_in_xu_3_x
---

To change the server settings, please click on the main menu on *Server -> Settings*.

There are two tabs to change the server settings: *Configuration Server* and *Web Server*. 

![XU3_ServerSettings_config_tab](/img/content/XU3_ServerSettings_config_tab.jpg){:class="img-responsive"}

**Port** <br>
Defines the port number, where the server communicates with the designer. The default is 8064. If you set a different port, you will need to add this portnumber to the host name on the logon screen. [host name]:[port]

**Max. age of log files (days)** <br>
Defines the maximum age of the congig server log files in days. After this period, the log files are beeing deleted.

**Authentication methods** <br>
see chapter [User Management](../security-xu3/user-management)

**Select X.509 certificate** <br>
1. Have your IT network team create a TLS certificate. Make sure the certificate has the property "Subject Alternative Name" populated with the DNS name of the server where the Xtract Universal service is running. Otherwise it won't appear in our lookup dialog.
2. This certificate needs to be placed in the Windows Certificate Store.


**Access Management** <br>
see chapter [Access Management](../security-xu3/access-management)

![XU3_ServerSettings_web_tab](/img/content/XU3_ServerSettings_web_tab.jpg){:class="img-responsive"} 

**General** <br>
**HTTP / HTTP port** <br>
Defines the port number, on which the XU server receives HTTP requests of an extraction.

**HTTPS / HTTPS port** <br>
Enables the secure datatranfer via HTTPS.

It allows you to configure HTTP, HTTPS or both protocol types. The run statement generates an HTTPS-URL if HTTPS is activated, even if HTTP is activated.

If you want to receive data via HTTPS you have to install a TLS certificate on the server where the Xtract Universal service is running. 
This certificate must contain the hostname of the server in the common name (CN) attribute and must be released by a certified authority.

If you want to get further information please have a look at our [blog](http://www.theobald-software.com/blog/?p=389).

**HTTPS - Restricted to AD users with Designer read access**
See *HTTPS - Unrestricted*. In addition to that this setting enables access control for executing an extraction. Extractions can only be executed by Windows AD users who have at least been assigned *read access* in the *Configuration Server* tab. Please do also see [here](https://kb.theobald-software.com/release-notes/XtractUniversal-3.11.0.html).  


**Max. parallel requests** <br>
Defines the maximum number of different extractions that can be processed simultaneously. Two extraction requests are only different when they call extractions with different names.

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

**HTTP client filter** <br>
see chapter on [Server Security](../security-xu3/server-security).