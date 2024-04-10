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

{: .box-warning}
**Warning: Deprecated documentation** <br>
You are using the old version of the online help for ERPConnect.<br>
Make sure to use the documentation within the new [HelpCenter for ERPConnect](https://helpcenter.theobald-software.com/erpconnect/documentation/introduction/).

A demo license is automatically installed with the installation of ERPConnect.<br>
A regular license is provided in the [Theobald Software Customer Portal](https://my.theobald-software.com/) after purchasing the product. 

{: .box-note }
**Note:** The standard demo license does not support working in web environments. 
To test ERPConnect with your ASP.NET project, apply for a test license number at [sales@theobald-software.com](mailto:sales@theobald-software.com).    
 
### Installing the ERPConnect license 

After the end of the test period ERPConnect will not run without a valid licence.

Because ERPConnect checks the licence number on every call (client and server), you need to set your licence number before the first connection to SAP is established.<br>
Set the license during runtime through the static class `ERPConnect.LIC` as shown in the code below.

{% highlight csharp %}
ERPConnect.LIC.SetLic("XXXXXXXXXX");
{% endhighlight %}


### Maintenance
Contact the [sales department](mailto:sales@theobald-software.com) for information about available maintenance options.<br>
In case of technical difficulties, contact the support team: [https://support.theobald-software.com](https://support.theobald-software.com).

<!---
### Support
-->
{% include _content/en/requirements/support.md %}

{% include _content/en/requirements/support-disclaimer.md %}


****
#### Related Links
- [Theobald Software Customer Portal](https://my.theobald-software.com/)
- [Theobald Software Support Portal](https://support.theobald-software.com/helpdesk)
