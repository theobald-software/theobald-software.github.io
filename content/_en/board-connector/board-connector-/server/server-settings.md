---
layout: page
title: Server Settings in 2.x
description: Server Settings in 2.x
product: board-connector
parent: server
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /BOARD-Connector-EN/default.aspx?pageid=server-settings
---

To change the server settings, please click on the main menu on *Server -> Settings*. To set a new value of a parameter, choose in the *Kind column Individual*, and enter in the *Value* column your value. To restore the default value again, choose in the *Kind* column *Default*. After saving new values, the server is restarted automatically.

**Misc. tab**

![BOARDServerSettings](/img/content/BOARDServerSettings.jpg){:class="img-responsive"}

**Enable Listener**<br>
Enables the datatransfer via HTTP (defalut: yes).

**EnableSecureListener**<br>
Enables the secure datatranfer via HTTPS (default: no) .

It allows you to configure HTTP, HTTPS or both protocol types. The run statement generates an HTTPS-URL if HTTPS is activated, even if HTTP is deactivated.

If you want to receive data via HTTPS you have to install a SSL-Certificate on the server that should manage the HTTPS-port. This certificate must contain the hostname of the server in the common name (CN) attribute and must be released by a certified authority. 

If you want to get further information please have a look at our blog: http://www.theobald-software.com/blog/?p=389 

**BoardApiPort**<br>
Defines the port that is used for the communication between BOARD and the server. This setting should be changed by end users only after prior consultation with BOARD.

**ConfigurationPort**<br>
Defines the port number, on which the BOARD Connector Designer communicates with the BOARD Connector service via HTTP.

**ListenerPort**<br>
Defines the port number, on which the BOARD Connector service receives the HTTP request of an extraction.

**SecureListenerPort**<br>
Defines the port number, on which the BOARD Connector service receives the HTTPS request of an extraction. 

**ListenerThreads**<br>
Defines the maximum number of different extractions that can run in parallel. 

**MaxLogDays**<br>
Defines the maximal age of the log files in days. After that the log files will be deleted. Before we describe the buffer settings, we briefly outline its use. 

The buffer is used for temporary storage of the extraction results. An extraction is identified by its name. Calling an extraction with new parameters will re-fetch the result from the SAP system.

**BufferLifespanMinutes**<br>
Defines the maximal age in minutes of an extraction in the buffer.

**BufferExtractionCount**<br>
Defines the maximal count of results of different extractions in the buffer.

**BufferDirectory**<br>
Per default, any newly created extraction will write the extracted data into a temporary buffer on the file system.<br>
The default location for this buffer directory is: C:\Program Files\BOARDConnector\config\buffer

**DistributeSetup**<br>
defines, whether the setup of the BOARD Connector version running on the Server should be downloaded.<br>
When an older Designer version is connected to a newer Server version, a dialog form asks, whether the newer setup version should be downloaded. 