---
ref: xu-getting-started-table-04
layout: page
title: Step 4 - Load an Extraction in an Oracle Database
description: Step 4 - Load an Extraction in an Oracle Database
product: xtract-universal
parent: getting-started-table
permalink: /:collection/:path
weight: 4
lang: en_GB
---

In this step we would load the extraction in an Oracle Database. 

Therefore we create an Oracle Destination. 

### Define Oracle Destination

#### Test für Ü-Schriften

- Click on **Destinations**

![Load-Destinations](/img/content/Load-Destinations.jpg){:class="img-responsive"}

- Select **Shared** and click on **Manage** ... 

![Load-Manage-Shared-Destination](/img/content/Load-Manage-Shared-Destination.jpg){:class="img-responsive"}

- Click on **Add**

![Shared-Destinations](/img/content/Shared-Destinations.jpg){:class="img-responsive"}

- Set the **Name** and
- Select **Oracle** from the **Type** list.

![Select-Destination-Type](/img/content/Select-Destination-Type.jpg){:class="img-responsive"}

- Fill the fields **Data Source, User Id** und **Password** with the correspondent values, where Data Source is the Oracle server name.
- Click on **Test Connection** to check the connection to the Oracle database.

![Test-Connection-Successful](/img/content/Test-Connection-Successful.jpg){:class="img-responsive"}

- Click on **OK** to save the destination connection.  
- Select the created destination connection and click on **OK**.

The created destination connection has been selected. Now you see the **Extraction-Specific Settings**. We keep the default settings: 

![Load-Shared-Destination-Oracle](/img/content/Load-Shared-Destination-Oracle.jpg){:class="img-responsive"}

- Click on OK to get back to the Designer.             


**Run Extraction**
            
Now we would like to load the extraction in Oracle.
- Select the extraction and click  on **Run** 
- Click on **Run in Browser** and then on **Close**.

![Run-In-Browser-Oracle](/img/content/Run-In-Browser-Oracle.jpg){:class="img-responsive"}

- The browser opens and shows the Log.

![Run-In-Browser-Result-Oracle](/img/content/Run-In-Browser-Result-Oracle.jpg){:class="img-responsive"}

- In Oracle SQL Developer Studio you can check that the table has been created. 

![Oracle-Database-Metadata](/img/content/Oracle-Database-Metadata.jpg){:class="img-responsive"}

- And check the table content. 

![Oracle-Database-Data](/img/content/Oracle-Database-Data.jpg){:class="img-responsive"}
