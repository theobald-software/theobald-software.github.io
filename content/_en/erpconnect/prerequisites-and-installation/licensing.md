---
ref: ec-prerequisites-and-installation-04
layout: page
title: Licensing
description: Licensing
product: erpconnect
parent: prerequisites-and-installation
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=licensing
---

ERPConnect checks the licence number on every call (client and server). After the end of the test period ERPConnect will not run without a valid licence.  
  
Please set your licence number through the static class ERPConnect.LIC as shown in the code below. This must be done before the first connection to SAP is established (regardless of wether as a server or a client).  

**C#**
{% highlight csharp %}
ERPConnect.LIC.SetLic("XXXXXXXXXX");
{% endhighlight %}
**VB**
{% highlight visualbasic %}
ERPConnect.LIC.SetLic("XXXXXXXXXX")
{% endhighlight %}  
  
If you have more than one developer licence, the licence numbers end with -01,-02, etc. Which ending you use with SetLic does not matter. You may omit the end completely.  
  
The trial version of ERPConnect does not work in a web environment. Please apply for a limited test licence number if you want to use ERPConnect with your ASP.NET project ([sales@theobald-software.com](mailto:sales@theobald-software.com)).  
