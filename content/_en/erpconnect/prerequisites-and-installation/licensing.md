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

A demo license is automatically installed with the installation of ERPConnect.<br>
A regular license is provided in the [costumer portal - My Theobald Software](https://my.theobald-software.com/) after purchasing the product. 

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
General information on maintenance pricing is available on the [official website](https://theobald-software.com/en/erpconnect/pricing-order) of Theobald Software and at [My Theobald Software - Portal for Customers and Partners](https://my.theobald-software.com/). 
Contact the [sales department](mailto:sales@theobald-software.com) for more information about available maintenance options.<br>
In case of technical difficulties, contact the support team by email: [support@theobald-software.com](mailto:support@theobald-software.com).

****
#### Related Links
- [My Theobald Software - Portal for Customers and Partners](https://my.theobald-software.com/)