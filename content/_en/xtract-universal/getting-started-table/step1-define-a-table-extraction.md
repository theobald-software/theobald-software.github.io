---
ref: xu-getting-started-table-03
layout: page
title: Step I- Define a Table Extraction
description: Step I- Define a Table Extraction
product: xtract-universal
parent: getting-started-table
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=define-a-table-extraction
---

After starting the Designer, the Designer must first be connected to a server and thus to an extraction repository. In the case of a local Xtract server, the address is the localhost (as in the screenshot), or a different network address, depending on where the server component is running. The default port 8064 may differ depending on the configuration. If the server is running on a different machine than the Designer, make sure that the port is not blocked by your firewall. Click Connect to connect to the server. 

![Designer](/img/content/xu_connect_screen.png){:class="img-responsive"}

After the successful connection the buttons for the new creation and the manipulation of extractions are active. The list at the bottom of the screen is filled with all extractions that have already been created on the server.

![Designer](/img/content/xu_3.x_initial_screen.png){:class="img-responsive"}

**Create SAP connection**

Select the menu item **Server -> Manage Sources**.

![XU-Create-Connection-1](/img/content/server_manage_sources.png){:class="img-responsive"}

Click on **Add**.

![XU-Create-Connection-2](/img/content/xu_manage_sources.png){:class="img-responsive"}

Enter the freely selectable connection name in the **Name** field. The SAP connection details must then be entered. <br>

The following parameters must be set: <br>
- Client (Client)
- Language (Language)
- User (User) and 
- Password (Password). <br>

If you want to connect to a single application server, fill the Host and System Number fields. <br>

If you want to connect to a message server using load balancing, fill the Message Server , Group, and SID fields. <br>

If you do not know the parameters, look in your SAP GUI or ask your SAP Basis. 

![XU-Create-Connection-3-A](/img/content/xu_source_details.png){:class="img-responsive"}

Then click on *Test Connection* to test the successful connection. 

![XU-Create-Connection-3](/img/content/xu_test_connection.png){:class="img-responsive"}

The SAP connection has now been set up successfully. 

![XU-Create-Connection-4](/img/content/xu_manage_source_2.png){:class="img-responsive"}

**Create Extraction**

Click *New* to create a new extraction.

![Create-New-Table-Extraction](/img/content/xu_extraction_create.png){:class="img-responsive"}

Choose the SAP connection you created previously and give the extraction a unique name.

Then define the type of extraction. In our case, we want to extract a *table* from SAP. 

![Add-Extraction](/img/content/xu_tables_extraction_create.png){:class="img-responsive"}

Now the empty table dialog opens. Click on the *Search* button to search for a table.

![New-Table-Extraction](/img/content/xu_tabelle_suchen.png){:class="img-responsive"}

In the search dialog enter the name of the table to be extracted, click on the *Search* button, select the desired table and confirm with *OK*.

As you can see, you can also enter a wildcard (*) in the search bar.

![Look-Up-Table](/img/content/xu_tabelle_auswählen.png){:class="img-responsive"}

The application now returns to the main dialog. The columns of the table were retrieved from SAP and can be selected for extraction by clicking <br>.
It is possible to select or deselect all columns available in the table via *Select All* or *Select None* or to select the columns to be extracted individually.

![Table-Form](/img/content/xu_felder_auswählen_where_bedingung.png){:class="img-responsive"}

WHERE conditions can still be specified in the text field. These must correspond to the standard for OpenSQL specified by SAP.

Confirm with OK to save the extraction in the repository, i.e. on the server.

