---
layout: page
title: Server Settings in XU 2.x
description: Server Settings in XU 2.x
product: xtract-universal
parent: server
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=server-settings
---

To change the server settings, please click on the main menu on *Server -> Settings*.<br> 
To set a new value of a parameter, choose in the *Kind* column *Individual*, and enter in the *Value* column your value. <br>
To restore the default value again, choose in the *Kind* column *Default*. After saving new values, the server is restarted automatically.


**Misc. tab**

![Server-Settings](/img/content/Server-Settings.png){:class="img-responsive"}

**BufferDirectory** <br>
Set the directory for the buffer files. 

**BufferLifespanMinutes** <br>
Defines the maximal age in minutes of an extraction in the buffer.

**BufferExtractionCount** <br>
Defines the maximal count of results of different extractions in the buffer.

**ConfigurationPort** <br>
Defines the port number, where the server communicates with the designer via HTTP.

**DistributeSetup** <br>
defines, whether the setup of the Xtract Universal version running on the Server should be downloaded. 
When an older Designer version is connected to a newer Server version, a dialog form asks, whether the newer setup version should be downloaded. 

**Enable Listener** <br>
Enables the datatransfer via HTTP (defalut: yes).

**EnableSecureListener** <br>
Enables the secure datatranfer via HTTPS (default: no) .

It allows you to configure HTTP, HTTPS or both protocol types. The run statement generates an HTTPS-URL if HTTPS is activated, even if HTTP is deactivated.

If you want to receive data via HTTPS you have to install a SSL-Certificate on the server that should manage the HTTPS-port. This certificate must contain the hostname of the server in the common name (CN) attribute and must be released by a certified authority. 

If you want to get further information please have a look at our [blog](https://blog.theobald-software.com/2011/01/20/how-to-use-xtract-with-https/).


**ListenerPort** <br>
Defines the port number, where the server receives the HTTP request of an extraction.

**ListenerThreads** <br>
Defines the maximum number of different extraction requests that can be processed in simultaneously. Two extraction requests are only different when they call extractions with different names.

**MaxLogDays** <br>
Defines the maximal age of the log files in days. After that the log files will be deleted. Before we describe the buffer settings, we briefly outline its use. 

**SecureListenerPort** <br>
Defines the port number, where the server receives the HTTPS request of an extraction. 

The buffer is used for temporary storage of the extraction results. An extraction is identified by its name. Calling an extraction with new parameters will re-fetch the result from the SAP system.

The description of the security settings defined on the security tab you will find in the chapter [Server Security](../security-xu2/server-security).