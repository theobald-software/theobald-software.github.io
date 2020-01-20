---
ref: xu-getting-started-table-04
layout: page
title: 4. Loading an extraction in an Oracle database
description: Step 4 - Load an Extraction in an Oracle Database
product: xtract-universal
parent: getting-started-table
permalink: /:collection/:path
weight: 4
lang: en_GB
---

The following steps depict the loading of the extraction in an Oracle database. 

To load an extraction, an Oracle destination needs to be created and defined.

### Creating an Oracle Destination

1. In the main window of the designer, click **Destinations** to open destination settings.
![Load-Destinations](/img/content/destination_xu.png){:class="img-responsive"}

2. Select a destination and click **[...]** (1) to manage destinations. 
![Load-Manage-Shared-Destination](/img/content/destinations_load_manage_shared.png){:class="img-responsive"}

3. Click **[Add]** (2) to add a new destination.

4. Fill in a **Name**, select **Oracle** from the **Type** list and click **[OK]** (3).
![Select-Destination-Type](/img/content/destination_details_oracle.png){:class="img-responsive"}

5. In the section "Connection", fill in the fields **Data Source, Username** and **Password** with the correspondent values, where data source is the Oracle server name.
6. Click **[Test Connection]** (4) to check the connection to the Oracle database.
![Test-Connection-Successful](/img/content/oracle_destination-settings.png){:class="img-responsive"}

7. Click **[OK]** (5) to save the destination connection.  
8. In the "Destination Settings" window, choose your created **Oracle** destination to display the extraction-specific settings. In the example, the default settings are kept:
![Load-Shared-Destination-Oracle](/img/content/Load-Shared-Destination-Oracle.png){:class="img-responsive"}

9. Click **[OK]** to get back to the main window of the Designer.             

### Loading the extraction into the Oracle database
             
1. Select the extraction and click **[Destination].<br>
![Load-Destinations](/img/content/destination_xu.png){:class="img-responsive"}<br>
The window "Destinations" opens.
2. Navigate to **Destination** and select **Oracle** from the drop down menu. 
![Load-Shared-Destination-Oracle](/img/content/Load-Shared-Destination-Oracle.jpg){:class="img-responsive"}
3. Click **[OK]**. The window "Destinations" closes.
4. Click **[Run] > [run xu.exe]**<br>
![Run-In-Browser-Oracle](/img/content/Run-In-Browser-Oracle.jpg){:class="img-responsive"} <br>
The command line window opens and the extraction procedure ends with a message *Extraction finished successfully*.
![Oracle-Database-Metadata](/img/content/xu/konsole_run_in_xu_exe.png){:class="img-responsive"}

#### To check the extraction result
In Oracle SQL Developer Studio you can check the existence of the successfully extracted table. 

![Oracle-Database-Metadata](/img/content/xu/Oracle-Database-Metadata.jpg){:class="img-responsive"}

You can also check the table content: 

![Oracle-Database-Data](/img/content/xu/Oracle-Database-Data.jpg){:class="img-responsive"}
