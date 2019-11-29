---
ref: xu-getting-started-table-02
layout: page
title: Step 2 - Define a Table Extraction
description: Step 2 - Define a Table Extraction
product: xtract-universal
parent: getting-started-table
permalink: /:collection/:path
weight: 2
lang: en_GB
---

### To create SAP connection

1. In the main window of the Xtract Universal Designer. Navigate to the menu bar and select the menu item **Server > Manage Sources**.<br>
![XU-Create-Connection-1](/img/content/server_manage_sources.png){:class="img-responsive"}<br>
The window "Manage Sources" opens. <br>
![XU-Create-Connection-4](/img/content/xu_manage_source_2.png){:class="img-responsive"}
2. Click on **Add**. The window "SAP Source Details" opens. <br>
![XU-Create-Connection-3-A](/img/content/xu/sap_source-details.png){:class="img-responsive"}<br>
3. Enter a freely selectable connection name in the **Name** (1) field. 
2. Enter the SAP connection details (2). 
- To connect to a single application server, fill the **Host** and **System Number** fields. <br>
- To connect to a message server using load balancing, fill the **Message Server**, **Group** and **SID** fields. <br>
4. Set the following parameters:
- Client (Client) and language (Language) (3)
- User (User) and password (Password) (4) <br>
**Tip:** If you don't know the parameters, look in your SAP GUI or ask your SAP Basis. <br>
5. Click on **Test Connection** (5) to test the successful connection. <br>
The confirmation window opens. <br>
The SAP connection is set up successfully.<br>
![XU-Create-Connection-3](/img/content/xu_test_connection.png){:class="img-responsive"} <br>
#### To check the created SAP connection
1. In the main window of the Xtract Universal Designer. Navigate to the menu bar and select the menu item **Server > Manage Sources**.<br>
The window "Manage Sources" opens. <br>
2. Check if created SAP connection is listed.<br>
![XU-Create-Connection-4](/img/content/xu_manage_source_2.png){:class="img-responsive"}

### To create an extraction
The following example shows the creation of an extraction using "SAP Table or View" component.<br>
1. In the main window of the Xtract Universal Designer click on **New** (1). <br>
![Add-Extraction](/img/content/xu/xu_tabellen_extraktion_anlegen.png){:class="img-responsive"} <br>
The window "Create Extraction" opens.
2. The field **Source** states the SAP connection. Choose the SAP connection you created previously from the drop-down menu (2).
3. Enter a freely selectable, unique name for your extraction (3).
4. Choose the type of extraction. In the given example: **SAP Table or View** (4). <br>
5. Click on **OK** (5) to confirm.

{% include _content/en/tables/define-a-table-extraction.md  %}

