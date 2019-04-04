---
ref: pentaho-di-cmd
layout: page
title: Pentaho Integration via the Command Line
description: Pentaho Integration via the Command Line
product: xtract-universal
parent: pentaho-di
permalink: /:collection/:path
weight: 10
lang: en_GB
old_url: 
---

This chapter shows best practices about the integration and usage of Xtract Universal with Pentaho Data Integration (ETL) aka Kettle by calling the Xtract Universal Command Line (xu.exe).<br>

The picture below shows the architecture.
In Xtract Universal, we have defined an extraction with an SQL Server as the destination. 
In Pentaho, we execute the extraction by calling the command line tool of Xtract universal (xu.exe). 
The data will then be extracted from SAP and loaded into the SQL Server database. In Pentaho we can then read and process the data from the database table.
![xu-pdi-push](/img/content/xu/best-practices/pdi-cmd/xu-pdi-push.png){:class="img-responsive"}

This scenario assumes that Pentaho runs on a Windows operating system or can call a Windows Command Tool.
In the case of other operating systems, the call can alternatively be made via HTTP. 
<br>
**Extraction in Xtract Universal**<br>
Here we see the definition of the extraction in Xtract Universal with SQL Server Destination:<br>
![pdi-cmd-xu](/img/content/xu/best-practices/pdi-cmd/pdi-cmd-xu.png){:class="img-responsive"}

<br>
**Transformation in PDI**<br>
The overview of the transformation in Kettle shows the steps used:<br>
![pdi-cmd-transf-overview](/img/content/xu/best-practices/pdi-cmd/pdi-cmd-transf-overview.png){:class="img-responsive"}

<br>
**Initial Parameters**<br>
Let's look at the settings of the important steps.
In the first step we define 2 parameters: 
- The field XUCmd contains the path to the command time: "C:\Program Files\XtractUniversal\xu.exe".	
- The XUArg field contains the URL of the extraction in Xtract Universal: http://KETSWIN16DC02:8065/?name=SAPCustomersToSQL

<br>
![pdi-cmd-transf-generate-rows-settings](/img/content/xu/best-practices/pdi-cmd/pdi-cmd-transf-generate-rows-settings.png){:class="img-responsive"}

<br>
**Call Command Line**<br>
In the second step we call the command line with the following settings. As you can see, we have also implemented error handling. <br>
![pdi-cmd-transf-exe-settings01](/img/content/xu/best-practices/pdi-cmd/pdi-cmd-transf-exe-settings01.png){:class="img-responsive"}
<br>
![pdi-cmd-transf-exe-settings02](/img/content/xu/best-practices/pdi-cmd/pdi-cmd-transf-exe-settings02.png){:class="img-responsive"}

<br>
**Database Connection**<br>
Here we see  the connection to the SQL Server that we use to read the data from the table:<br>
![pdi-cmd-transf-sql-server-connection](/img/content/xu/best-practices/pdi-cmd/pdi-cmd-transf-sql-server-connection.png){:class="img-responsive"}

<br>
**Table Input**<br>
We use the following settings in the Table Input step:<br>
![pdi-cmd-transf-table-input-settings](/img/content/xu/best-practices/pdi-cmd/pdi-cmd-transf-table-input-settings.png){:class="img-responsive"}

<br>
**Execute the Transformation in PDI**<br>
After successful execution we would find the following metrics in PDI.<br>
![pdi-cmd-transf-metrics](/img/content/xu/best-practices/pdi-cmd/pdi-cmd-transf-metrics.png){:class="img-responsive"}

<br>
**Preview in PDI**<br>
It is also possible to preview the individual steps.<br> 
Preview of the input fields: <br>
![pdi-cmd-transf-generate-rows-preview](/img/content/xu/best-practices/pdi-cmd/pdi-cmd-transf-generate-rows-preview.png){:class="img-responsive"}

<br>
Data Preview of the Table Input step:<br>
![pdi-cmd-transf-table-input-preview](/img/content/xu/best-practices/pdi-cmd/pdi-cmd-transf-table-input-preview.png){:class="img-responsive"}

<br>
**Data in SQL Server**<br>
Here you find a preview of the data in the SQL Server:<br>
![pdi-cmd-sql](/img/content/xu/best-practices/pdi-cmd/pdi-cmd-sql.png){:class="img-responsive"}

<br>
**Download of the transformation file for PDI**<br>
You can download the transformation template for Pentaho Data Integration (PDI) aka Kettle here:
[Call SAP Extraction from Xract Universal via CMD.ktr](/img/content/xu/best-practices/pdi-cmd/Call SAP Extraction from Xract Universal via CMD.ktr)