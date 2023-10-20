---
ref: xu-getting-started-04
layout: page
title: Step 5 - Write extracted Data to a Destination
description: Step 5 - Load extracted Data to a Destination
product: xtract-universal
parent: getting-started
permalink: /:collection/:path
redirect_from:
  - xtract-universal/getting-started/load-an-extraction-into_database
weight: 5
lang: en_GB
progressstate: 5
---

 
A destination defines how the extracted SAP data is processed. 
This could be a conversion to file-based formats for local or cloud-based file systems or to deliver the data to targets like databases and other APIs. 
For a complete list of available destinations, see [Destinations](../destinations).

### Creating a new Destination
<!---
this script generates a link to the destination details of the selected destination (in step 5)
the option in the list must be set as follows:
	<option value="name-of-the-md-file-of-the-destination">DisplayedName</option>
-->
  <script>
  function getSelectedValueDetails(){
	var selectedValueD = document.getElementById("destination").value;
	window.location = "https://help.theobald-software.com/en/xtract-universal/destinations/" + selectedValueD + "#destination-details"
	}
  </script> 

Follow the steps below to create a new destination:
1. In the main window of the designer, open the menu **[Server] > [Manage Destinations]**. The window "Manage Destinations" opens.
![Load-Destinations](/img/content/xu/xu_destination.png){:class="img-responsive"}
2. Click **[Add]** (1) to create a new destination. The window "Destination Details" opens.<br>
![Load-Manage-Shared-Destination](/img/content/destinations_load_manage_shared.png){:class="img-responsive"}
3. Enter a unique name for the destination (2). 
4. Select a destination type from the drop down list (3). The destination details are displayed.<br>
![Select-Destination-Type](/img/content/sqlserver_destination-details.png){:class="img-responsive"}
5. Fill out the destination details. The destination details vary depending on the destination type. <br>
For more information about the destination details, select your destination: <select name="destinationlist" id="destination" onChange="getSelectedValueDetails();">
    <option value=" " disabled selected>Select a destination</option>
    <option value="csv-flat-file">Flat File CSV</option>
    <option value="json-flat-file">Flat File JSON</option>
    <option value="parquet">Flat File Parquet</option>
	<option value="csv-via-http">WebService CSV</option>
	<option value="json-via-http">WebService JSON</option>
	<option value="alteryx">Alteryx</option>
	<option value="amazon-aws-s3">Amazon S3</option>
	<option value="amazon-redshift">Amazon Redshift</option>
	<option value="azure-storage">Azure Storage</option>
	<option value="azure-synapse-analytics">Azure Synapse Analytics</option>
	<option value="exasol">EXASolution</option>
	<option value="google-cloud-storage">Google Cloud Storage</option>
	<option value="huawei">Huawei Cloud OBS</option>
	<option value="ibm-db2">IBM DB2</option>
	<option value="knime">KNIME</option>
	<option value="microsoft-sql-server">Microsoft SQL Server</option>
	<option value="mysql">MySQL</option>
	<option value="oracle">Oracle</option>
	<option value="postgreSQL">PostgreSQL</option>
	<option value="Power-BI-Connector">Power BI Connector</option>
	<option value="qliksense-qlikview">QlikSense and QlikView</option>
	<option value="salesforce">Salesforce</option>
	<option value="sap-hana">SAP HANA</option>
	<option value="sharepoint">SharePoint</option>
	<option value="snowflake">Snowflake</option>
	<option value="server-report-services">SQL Server Reporting Services</option>
	<option value="tableau">Tableau</option>
  </select>
6. Click **[Test Connection]** to check the connection to the destination.
7. Click **[OK]** to save the destination. 

The destination is now available and can be assigned to extractions.

### Assigning Destinations to Extractions

<!---
this script generates a link to the destination settings of the selected destination (in step 4)
the option in the list must be set as follows:
	<option value="name-of-the-md-file-of-the-destination">DisplayedName</option>
-->
  <script>
  function getSelectedValueSettings(){
	var selectedValueS = document.getElementById("destinationsettings").value;
	window.location = "https://help.theobald-software.com/en/xtract-universal/destinations/" + selectedValueS + "#destination-settings"
	}
  </script> 
  
Extractions write data to their assigned destination.
Follow the steps below to assign a destination to an extraction:

1. In the main window of the designer, select an extraction.
2. Click **[Destination]**. The window "Destination Settings" opens.<br>
![Load-Destinations](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}
3. In the "Destination Settings" window, select a destination from the drop down menu.
![Load-Shared-Destination-SQLServer](/img/content/sqlserver_destination-settings.png){:class="img-responsive"}
4. Optional: change the destination settings.<br>
Destination settings are specific to the selected extraction and vary depending on the destination type. <br>
For more information about the destination settings, select your destination: <select id="destinationsettings" onChange="getSelectedValueSettings();">
    <option value=" " disabled selected>Select a destination</option>
    <option value="csv-flat-file">Flat File CSV</option>
    <option value="json-flat-file">Flat File JSON</option>
    <option value="parquet">Flat File Parquet</option>
	<option value="csv-via-http">WebService CSV</option>
	<option value="json-via-http">WebService JSON</option>
	<option value="alteryx">Alteryx</option>
	<option value="amazon-aws-s3">Amazon S3</option>
	<option value="amazon-redshift">Amazon Redshift</option>
	<option value="azure-storage">Azure Storage</option>
	<option value="azure-synapse-analytics">Azure Synapse Analytics</option>
	<option value="exasol">EXASolution</option>
	<option value="google-cloud-storage">Google Cloud Storage</option>
	<option value="hadoop">Hadoop</option>
	<option value="huawei">Huawei Cloud OBS</option>
	<option value="ibm-db2">IBM DB2</option>
	<option value="knime">KNIME</option>
	<option value="microsoft-sql-server">Microsoft SQL Server</option>
	<option value="mysql">MySQL</option>
	<option value="oracle">Oracle</option>
	<option value="postgreSQL">PostgreSQL</option>
	<option value="Power-BI-Connector">Power BI Connector</option>
	<option value="qliksense-qlikview">QlikSense and QlikView</option>
	<option value="salesforce">Salesforce</option>
	<option value="sap-hana">SAP HANA</option>
	<option value="sharepoint">SharePoint</option>
	<option value="snowflake">Snowflake</option>
	<option value="server-report-services">SQL Server Reporting Services</option>
	<option value="tableau">Tableau</option>
  </select><br>
5. Click **[OK]** to confirm your input.       

When [running the extraction](./run-an-extraction), the extracted SAP data is now written to the destination.

#### Related Links
- [Manage Destinations](../destinations/managing-destinations)
