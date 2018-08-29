---
layout: page
title: Netweaver DLL
description: Description about Netweaver DLL
product: erpconnect
parent: sap-connection
permalink: /:collection/:path
weight: 5
lang: en_GB
---

ERPConnect supports the Netweaver RFC (SDK) starting by version 4.6.0 (see Version History).  
To use it, set the Property Protocol of the R3Connection object to ClientProtocol.NWRFC. 


<details>
{% highlight csharp %}

R3Connection.Protocol = ClientProtocol.NWRFC;


{% endhighlight %}
</details>
For 64-Bit Environments the following DLLs are required:
- ERPConnect20.dll or ERPConnect35.dll or ERPConnect40.dll or ERPConnect45.dll
- sapnwrfc.dll
- icuuc34.dll
- icudt34.dll
- icuin34.dll 

The ERPConnect*.dll are delivered with ERPConnect. The other DLLs must be downloaded from the SAP web site.
