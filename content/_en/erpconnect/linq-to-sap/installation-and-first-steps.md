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

{: .box-warning}
**Warning: Deprecated documentation** <br>
You are using the old version of the online help for ERPConnect.<br>
Make sure to use the documentation within the new [HelpCenter for ERPConnect](https://helpcenter.theobald-software.com/erpconnect/documentation/introduction/).

{: .box-note }
**Note:** Visual Studio Express versions don't support the LINQ to SAP Designer. 

### Installation

Installation of the *LINQ to SAP* Designer is not done automatically when installing ERPConnect.<br> 
Follow the steps below to install the *LINQ to SAP* add-on:

1. Close Visual Studio.
2. Navigate to the ERPConnect directory (`C:\Program Files\ERPConnect`).
The directory includes setups to install the *LINQ to SAP* Designer. <br>
Start the setup that corresponds to your Visual Studio Version. The following setups are available:
- LINQtoERPSetupVS2013.exe
- LINQtoERPSetupVS2015.exe
- LINQtoERPSetupVS2017.exe
- LINQtoERPSetupVS2019.exe<br>
3. In the setup window, click **[Install]** to install *LINQ to SAP*.
![LINQToERP-First-Steps-002](/img/content/LINQToERP-First-Steps-002.png){:class="img-responsive"}
4. After the installation is finished, start Visual Studio.

The *LINQ to ERP* DataContext is now available as an item in Visual Studio.

### How to Use LINQ to SAP

Follow the steps below to add the *LINQ to ERP* DataContext to your project and to use the *LINQ to SAP* Designer:

1. Right-click in the *Solution Explorer* and click **[Add] > [New Item..]** in the context menu.
The window "Add New Item" opens. <br>
![LINQToERP-First-Steps-004](/img/content/LINQToERP-First-Steps-004.png){:class="img-responsive"}
2. Select *LINQ to ERP* from the list of available items and click **[Add]**. The window closes and the item is listed in the *Solution Explorer*.
3. Double-click *LINQ to ERP* to open the DataContext. <br>
Use the *LINQ To ERP* toolbox to drag&drop components into the context. 
When a component is added, the Designer opens automatically. <br>
![LINQToERP-First-Steps-003](/img/content/LINQToERP-First-Steps-003.png){:class="img-responsive"}
4. Enter the connection information to your SAP system. <br>
![LINQToERP-First-Steps-005](/img/content/LINQToERP-First-Steps-005.png){:class="img-responsive"}