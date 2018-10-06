---
layout: page
title: Configure connection to SAP
description: Configure connection to SAP
product: xtract-rs
parent: xtract-rs-
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /Xtract-RS-EN/default.aspx?pageid=configure-connection-to-sap
---

After installation the Xtract RS data source type can be used in the Reporting Services wizard. Create a new connection to SAP as described in the next paragraphs. Depending on if you use the wizard or the manual creation the screenshot may look a bit different.

![Report-Data-Source-001](/img/content/Report-Data-Source-001.png){:class="img-responsive" }

Click on the *Edit* button to change the connection properties.

    
![Report-Data-Source-002](/img/content/Report-Data-Source-002.png){:class="img-responsive" }


If you need to log on to a single application host, fill in the fields *ApplicationHost* and *SystemNumber*. If you want log on by load-balancing the message server field, the logon group and SID must be entered and the *UseLoadBalancing* property must be set to true. If you don’t know what these parameters in your SAP system environment are, please ask your SAP Basis Components department for help.


Besides these technical properties there also some account information to be added (*Client and Language*). It is possible to enter *user name* and *password* right here but it is not recommended to do so because of security reasons. Both values would be readable in the connection string.

Click *OK* to apply the entered values.

![Report-Data-Source-003](/img/content/Report-Data-Source-003.png){:class="img-responsive" }

To provide User Name and Password click on *Credentials*. You can enter your account data there or you can choose the *Prompt option* to force the user to type in his own account data.

![Report-Data-Source-004](/img/content/Report-Data-Source-004.png){:class="img-responsive" }

Using SNC in the Connection Properties

It is also possible to use SNC (Secure Network Communication) for the SAP Connection. 
Please fill in the additional Fields: SNCLibrary, SNCPartnerName and SSOType like shown in the screenshot below. 
(Values are only sample values, please replace with values of your own SAP System) 

You must also have the relevant DLLs from SAP. These DLLs are different for 32-bit and 64-bit platforms and are available with SNOTE* 352295. The SAP note 352295 has an 'Attachments' option from where you can download the package. The names of the DLLs are:<br>
For 32-bit: gsskrb5.dll<br>
For 64-bit x86: gx64krb5.dll<br>

To configure SSO with SNC on your SAP System refer to or Knowledge Base article:<br>
[http://my.theobald-software.com/index.php?/Knowledgebase/Article/View/87/3/snc-connection-with-sso](http://my.theobald-software.com/index.php?/Knowledgebase/Article/View/87/3/snc-connection-with-sso)