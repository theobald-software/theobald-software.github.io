---
ref: ec-linq-to-sap-01
layout: page
title: Installation and First Steps
description:  Installation and First Steps
product: erpconnect
parent: linq-to-sap
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=linq-to-sap-installation-and-first-steps
---


{: .box-warning }
**Warning! Deprecated component** 
As of Visual Studio Version 2019 an .Net4.5 the *LINQ to SAP* add-on is not supported anymore.


**Caution:** Visual Studio Express versions don't support the LINQ to SAP Designer. 

Installation of the *LINQ* to *SAP* Designer is not done automatically when installing ERPConnect. It has to be installed separately. To do this, launch the **LINQtoERPSetupVSJJJJ.exe** application in your ERPConnect directory or via the program menu, where JJJJ stands for your Visual Studio version:

![LINQToERP-First-Steps-001](/img/content/LINQToERP-First-Steps-001.png){:class="img-responsive" width="600px" }


One click of the install button will start all required steps to install the Designer:  

![LINQToERP-First-Steps-002](/img/content/LINQToERP-First-Steps-002.png){:class="img-responsive" width="800px" }

When launching Visual Studio the next time, a new item will be available with which a LINQ to ERP DataContext can be added to the current project.

![LINQToERP-First-Steps-003](/img/content/LINQToERP-First-Steps-003.png){:class="img-responsive" width="600px" }

![LINQToERP-First-Steps-004](/img/content/LINQToERP-First-Steps-004.png){:class="img-responsive"}

After adding the new item, open the DataContext with a double-click. In the toolbox you'll now find different components that can be added to the context: tables, normal queries, functional modules, IDocs and BW queries. The moment you drag and drop the first element over to the context, the Designer will ask you to enter the connection information to SAP. In addition to account details (client, user name, password and language), you need to enter the host name and system number or the message server, logon group and SID. This depends on whether you want to make a connection with the individual application server or via load balancing.

![LINQToERP-First-Steps-005](/img/content/LINQToERP-First-Steps-005.png){:class="img-responsive"}