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

To load an extraction, Microsoft SQL Server destination needs to be created and defined.

### Creating Microsoft SQL Server destination

1. In the main window of the designer, click **Destinations** to open destination settings.
![Load-Destinations](/img/content/destination_xu.png){:class="img-responsive"}

2. Select a destination and click **[...]** (1) to manage destinations. 
![Load-Manage-Shared-Destination](/img/content/destinations_load_manage_shared.png){:class="img-responsive"}

3. Click **[Add]** (2) to add a new destination.

4. Fill in a **Name**, select **SQLServer** from the **Type** list and click **[OK]** (3).
![Select-Destination-Type](/img/content/destination_details_sqlserver.png){:class="img-responsive"}

5. In the section "Connection", fill in the fields **Data Source, Username** and **Password** with the correspondent values. Data source is the name of the Microsoft SQL Server.
6. Click **[Test Connection]** (4) to check the connection to the  database.
![Test-Connection-Successful](/img/content/sqlserver_destination-details.png){:class="img-responsive"}

7. Click **[OK]** (5) to save the destination connection. 


### Loading the extraction into the Microsoft SQL Server database

1. Select an extraction with any destination and click **[Destination]**.<br>
![Load-Destinations](/img/content/destination_xu.png){:class="img-responsive"}<br>
The window "Destination Settings" opens.

2. In the "Destination Settings" window, choose your created **SQLServer** destination from the drop down menu. You can change the extraction-specific settings, if needed. In the example, the default settings are kept:
![Load-Shared-Destination-SQLServer](/img/content/sqlserver_destination-settings.png){:class="img-responsive"}

9. Click **[OK]** to get back to the main window of the Designer.       
4. Click **[Run] > [run xu.exe]**<br>
![Run an extraction](/img/content/run_extraction.png){:class="img-responsive"} <br>
The command line window opens and the extraction procedure ends with a message *Extraction finished successfully*.
![Database-Metadata](/img/content/xu/konsole_run_in_xu_exe.png){:class="img-responsive"}

#### To check the extraction result
Open your SQL Management Studio and check the existence of the successfully extracted table. 
