---
ref: xu-getting-started-table-04
layout: page
title: 4. Loading an extraction into a database
description: Step 4 - Load an Extraction into Microsoft SQL Server
product: xtract-universal
parent: getting-started-table
permalink: /:collection/:path
weight: 4
lang: en_GB
---

The following steps depict the loading of the extraction into a database - Microsoft SQL Server. 

To load an extraction Microsoft SQL Server destination needs to be created and defined.

### Creating Microsoft SQL Server destination
There are several ways to create a destination. This example depicts 
1. In the main window of the designer, click **[Destination]** to open destination settings.
![Load-Destinations](/img/content/destination_xu.png){:class="img-responsive list-img"}

2. In the window "Destination Settings" click **[...]** (1) to manage destinations. 
![Load-Manage-Shared-Destination](/img/content/destinations_load_manage_shared.png){:class="img-responsive list-img"}

3. Click **[Add]** (2) to add a new destination.

4. Fill in a **Name**, select **SQLServer** from the drop down list **Type** (3).
![Select-Destination-Type](/img/content/destination_details_sqlserver.png){:class="img-responsive list-img"}

5. In the section "Connection", fill in the fields **Server Name** and **Database Name**. 
6. Click **[Test Connection]** (4) to check the connection to the  database.
![Test-Connection-Successful](/img/content/sqlserver_destination-details.png){:class="img-responsive list-img"}

7. Click **[OK]** (5) to save the destination connection. 


### Loading the extraction into the Microsoft SQL Server database

1. In the main window of the designer, select an extraction with any destination and click **[Destination]**. 
![Load-Destinations](/img/content/destination_xu.png){:class="img-responsive list-img"}<br>
The window "Destination Settings" opens.

2. In the "Destination Settings" window, choose your created **SQLServer** destination from the drop down menu. You can change the extraction-specific settings, if needed. In the example, the default settings are kept:
![Load-Shared-Destination-SQLServer](/img/content/sqlserver_destination-settings.png){:class="img-responsive list-img"}

9. Click **[OK]** to get back to the main window of the Designer.       
4. Click **[Run] > [run in xu.exe]** 
![Run an extraction](/img/content/run_extraction.png){:class="img-responsive list-img"} <br>
The command line window opens and the successful extraction procedure ends with a message *Extraction finished successfully*.
![Database-Metadata](/img/content/xu/konsole_run_in_xu_exe.png){:class="img-responsive list-img"}

#### To check the extraction result
Open your SQL Management Studio and check the existence of the successfully extracted table. 
