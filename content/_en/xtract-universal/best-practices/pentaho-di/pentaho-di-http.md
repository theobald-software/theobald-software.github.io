---
ref: pentaho-di-http
layout: page
title: Pentaho Integration via HTTP
description: Pentaho Integration via HTTP
product: xtract-universal
parent: pentaho-di
permalink: /:collection/:path
weight: 20
lang: en_GB
old_url: 
---

This chapter shows best practices about the integration and usage of Xtract Universal with Pentaho Data Integration (ETL) aka Kettle by calling the Xtract Universal HTTP endpoint (aka http-csv destination). <br>
The picture below shows the architecture.
In Pentaho, we execute the extraction using an HTTP call. 
Xtract Universal extracts the data from SAP and delivers it via HTTP in CSV format.<br>
In Pentaho, we can then process the delivered data and then load then e.g. to a database.
![xu-pdi-ws](/img/content/xu/best-practices/pdi-http/xu-pdi-ws.png){:class="img-responsive"}

This scenario would run on any operating system, unlike the command line scenario, which only runs on a Windows operating system.
In Xtract Universal, we have defined an extraction with HTTP-CSV Destination. 

<br>
**Extraction in Xtract Universal**<br>
Here we see the definition of extraction in Xtract Universal with HTTP-CSV Destination:<br>
![pdi-http-xu](/img/content/xu/best-practices/pdi-http/pdi-http-xu.png){:class="img-responsive"}

<br>
**Transformation in PDI**<br>
The overview of the transformation in Kettle shows the steps used:<br>
![Transformation](/img/content/xu/best-practices/pdi-http/pdi-http-xu-transf-overview.png){:class="img-responsive"}

<br>
**Initial Parameters**<br>
Let's look at the settings of the important steps.
In the first step we define the URL of the extraction in Xtract Universal: http://KETSWIN16DC02:8065/?name=SAPCustomer
<br>
![Initial parameters](/img/content/xu/best-practices/pdi-http/pdi-http-xu-transf-generate-rows.png){:class="img-responsive"}


<br>
**HTTP Call**<br>
In the second step, we execute the HTTP call. The URL parameter is passed. 
The return is written to the ExtractionResult field. The HTTP status code is also written to a specific field.
The HTTP status code can be used for error handling. <br>
![HTTP](/img/content/xu/best-practices/pdi-http/pdi-http-xu-transf-http-client.png){:class="img-responsive"}


**Switch Case**<br>
If the status code is 200, the execution was successful. In case of an error we write to the log.<br>
![Switch Case](/img/content/xu/best-practices/pdi-http/pdi-http-xu-transf-switch.png){:class="img-responsive"}

**Split to rows**<br>
We split the result into lines using the line break character. 
Note that the first line contains the column names. The last line contains only NULL values.
We will remove these 2 rows later.<br>
![split rows](/img/content/xu/best-practices/pdi-http/pdi-http-xu-transf-split-to-rows.png){:class="img-responsive"}
Xtract Universal offers also options to deliver the data without the column names and without a row seperator after the last row, but we are just using the default settings for the http-csv destination.<br>

**Identity last row**<br>
In this step we identify the last row. The step is helpful when we calculate the number of rows and remove the last row.<br> 
![last row](/img/content/xu/best-practices/pdi-http/pdi-http-xu-transf-last-row.png){:class="img-responsive"}

**Filter rows**<br>
In this step we remove the first and last rows.<br>
![filter](/img/content/xu/best-practices/pdi-http/pdi-http-xu-transf-filter-rows.png){:class="img-responsive"}


**split to columns**<br>
Data rows are split into columns. In this step we have to define the column names and the data type.<br>
![split columns](/img/content/xu/best-practices/pdi-http/pdi-http-xu-transf-split-to-columns.png){:class="img-responsive"}

<br>
**Database Connection**<br>
This is how the connection to the SQL Server looks, which we use to write the data to a table:<br>
![database connection](/img/content/xu/best-practices/pdi-http/pdi-http-xu-transf-sql-con.png){:class="img-responsive"}

<br>
**Table output**<br>
We use the following settings for the table output:<br>
![table](/img/content/xu/best-practices/pdi-http/pdi-http-xu-transf-table-out.png){:class="img-responsive"}

<br>
**File output**<br>
In addition, we write the data to a file. The following settings are used:<br>
![file](/img/content/xu/best-practices/pdi-http/pdi-http-xu-transf-file-out.png){:class="img-responsive"}

**Calculate Number of Rows**<br>
In this branch we want to calculate the number of records. 
In this step we remove the first row that contains the original column names. Only the last row remains.<br> 
![Filter](/img/content/xu/best-practices/pdi-http/pdi-http-xu-transf-filter-rows-02.png){:class="img-responsive"}

**Formula**<br>
Now we can calculate the number of rows.<br>
![formula](/img/content/xu/best-practices/pdi-http/pdi-http-xu-transf-formula-rowcount.png){:class="img-responsive"}

<br>
In this step we write to the log<br>
![Log](/img/content/xu/best-practices/pdi-http/pdi-http-xu-transf-log-rowcount.png){:class="img-responsive"}


<br>
**Execute the Transformation in PDI**<br>
After successful execution we can find the metrics.<br>
![execution](/img/content/xu/best-practices/pdi-http/pdi-http-xu-transf-executed-metrics.png){:class="img-responsive"}

<br>
**Preview in PDI**<br>
The preview of the individual steps is also possible.<br> 

Preview of the HTTP Call:<br>
![HTTP Client Preview](/img/content/xu/best-practices/pdi-http/pdi-http-xu-transf-http-client-preview.png){:class="img-responsive"}

<br>
Preview of the step split into rows<br>
![rows Preview](/img/content/xu/best-practices/pdi-http/pdi-http-xu-transf-split-to-rows-preview.png){:class="img-responsive"}

<br>
Preview of the step split into columns<br>
![columns Preview](/img/content/xu/best-practices/pdi-http/pdi-http-xu-transf-split-to-columns-preview.png){:class="img-responsive"}

<br>
Preview of the data output:<br>
![output Preview](/img/content/xu/best-practices/pdi-http/pdi-http-xu-transf-output-preview.png){:class="img-responsive"}

<br>
**Data im SQL Server**<br>
Here we see the data that we have loaded into the SQL Server:<br> 
![SQL Server](/img/content/xu/best-practices/pdi-http/pdi-http-sql-data.png){:class="img-responsive"
<br>

In this chapter we have seen how we called and used SAP extractions in Pentaho via HTTP. The SAP extractions are provided by Xtract Universal.
A possible improvement of this scenario would be to extract also the metadata (column name and data type) from Xtract Universal  and use it dynamically in the transformation.<br>

<br>
**Download the transformation template for PDI**<br>
You can download the transformation template for Pentaho Data Integration (PDI) aka Kettle here:
[Call SAP Extraction from Xract Universal via HTTP.ktr](/img/content/xu/best-practices/pdi-http/Call SAP Extraction from Xract Universal via HTTP.ktr)