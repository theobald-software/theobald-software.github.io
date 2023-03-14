---
ref: xu-getting-started-04
layout: page
title: Schritt 5 - Extrahierte Daten in eine Destination schreiben
description: Schritt 5 - Extrahierte Daten in eine Destination schreiben
product: xtract-universal
parent: erste-schritte
permalink: /:collection/:path
redirect_from:
  - xtract-universal/erste-schritte/eine-extraktion-in-oracle-laden
weight: 5
progressstate: 5
lang: de_DE
---

Eine Destination definiert, wie die extrahierten SAP Daten verarbeitet werden. 
Daten können für lokale oder cloudbasierte Dateisysteme in ein entsprechendes Datenformat konvertiert werden oder direkt an Zielumgebungen wie Datenbanken und andere APIs übergeben werden. 
Für eine komplette Liste verfügbarer Destinationen, siehe [Destinationen](../destinationen).

### Eine neue Destination erstellen

  <script>
  function getSelectedValueDetails(){
	var selectedValueD = document.getElementById("destination").value;
	window.location = "https://help.theobald-software.com/de/xtract-universal/destinationen/" + selectedValueD + "#destination-details"
	}
  </script> 

Führen Sie die folgenden Schritte aus, um eine neue Destination anzulegen:
1. In der Menüleiste des Designers navigieren Sie zu **[Server] > [Manage Destinations]**.
Das Fenster "Manage Destinations" öffnet sich.<br>
![Load-Destinations](/img/content/xu/xu_destination.png){:class="img-responsive"}
2. Klicken Sie auf **[Add]** (1), um eine neue Destination zu erstellen. Das Fenster "Destination Details" öffnet sich.<br>
![Load-Manage-Shared-Destination](/img/content/destinations_load_manage_shared.png){:class="img-responsive"}
3. Geben Sie im Feld **Name** einen Namen für die Destination ein (2). 
4. Wählen Sie einen Destinations-Typ aus der Dropdown-Liste **Type** aus (3). Die Details der Destination werden automatisch angezeigt.<br>
![Select-Destination-Type](/img/content/sqlserver_destination-details.png){:class="img-responsive"}
5. Füllen Sie die Details der Destination aus. Die Details variieren je nach Destinations-Typ. <br>
Für mehr Informationen über die Details von Destinationen, geben Sie Ihre Destination an: <select name="destinationlist" id="destination" onChange="getSelectedValueDetails();">
    <option value=" " disabled selected>Wählen Sie Ihre Destination aus</option>
    <option value="csv-flat-file">Flat File CSV</option>
    <option value="json-flat-file">Flat File JSON</option>
    <option value="parquet">Flat File Parquet</option>
	<option value="csv-via-http">WebService CSV</option>
	<option value="json-via-http">WebService JSON</option>
	<option value="alteryx-de">Alteryx</option>
	<option value="amazon_aws_s3">Amazon S3</option>
	<option value="redshift">Amazon Redshift</option>
	<option value="azure-storage">Azure Storage</option>
	<option value="azure-synapse-analytics">Azure Synapse Analytics</option>
	<option value="exasol">EXASolution</option>
	<option value="google-cloud-storage">Google Cloud Storage</option>
	<option value="hadoop">Hadoop</option>
	<option value="ibm-db2">IBM DB2</option>
	<option value="knime">KNIME</option>
	<option value="microsoft-sql-server">Microsoft SQL Server</option>
	<option value="mysql">MySQL</option>
	<option value="oracle">Oracle</option>
	<option value="postgreSQL">PostgreSQL</option>
	<option value="Power-BI-Connector">Power BI Connector</option>
	<option value="qlik">QlikSense and QlikView</option>
	<option value="salesforce">Salesforce</option>
	<option value="hana">SAP HANA</option>
	<option value="sharepoint">SharePoint</option>
	<option value="snowflake">Snowflake</option>
	<option value="server-report-services">SQL Server Reporting Services</option>
	<option value="tableau">Tableau</option>
  </select><br>
6. Klicken Sie auf **[Test connection]**, um die Verbindung zur Destination zu überprüfen. 
7. Klicken Sie auf **[OK]**, um die Verbindung zu speichern. 

Die Destination ist jetzt verfügbar und kann Extraktionen zugewiesen werden.

### Eine Destination einer Extraktion zuzuweisen

  <script>
  function getSelectedValueSettings(){
	var selectedValueS = document.getElementById("destinationsettings").value;
	window.location = "https://help.theobald-software.com/de/xtract-universal/destinationen/" + selectedValueS + "#destination-settings---destinationseinstellungen"
	}
  </script> 
  
Extraktionen schreiben Daten in die Destination, die ihnen zugewiesen ist.
Führen Sie die folgenden Schritte aus, um eine Destination einer Extraktion zuzuweisen:

1. Wählen Sie im Hauptfenster des Designers eine Extraktion aus. 
2. Klicken Sie auf **[Destination]**. Das Fenster "Destination Settings" öffnet sich.<br>
![Load-Destinations](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}
3. Im Fenster "Destination Settings" wählen Sie Ihre Destination aus der Dropdown-Liste aus. <br>
![Load-Shared-Destination-SQLServer](/img/content/sqlserver_destination-settings.png){:class="img-responsive"}
4. Optional: Bearbeiten Sie die Destinationseinstellungen.<br>
Die Destinationseinstellungen gelten nur für die ausgewählte Extraktion und variieren je nach Destinations-Typ.<br>
Für mehr Informationen über Destinationseinstellungen, geben Sie Ihre Destination an: <select id="destinationsettings" onChange="getSelectedValueSettings();">
    <option value=" " disabled selected>Wählen Sie Ihre Destination aus</option>
    <option value="csv-flat-file">Flat File CSV</option>
    <option value="json-flat-file">Flat File JSON</option>
    <option value="parquet">Flat File Parquet</option>
	<option value="csv-via-http">WebService CSV</option>
	<option value="json-via-http">WebService JSON</option>
	<option value="alteryx-de">Alteryx</option>
	<option value="amazon_aws_s3">Amazon S3</option>
	<option value="redshift">Amazon Redshift</option>
	<option value="azure-storage">Azure Storage</option>
	<option value="azure-synapse-analytics">Azure Synapse Analytics</option>
	<option value="exasol">EXASolution</option>
	<option value="google-cloud-storage">Google Cloud Storage</option>
	<option value="hadoop">Hadoop</option>
	<option value="ibm-db2">IBM DB2</option>
	<option value="knime">KNIME</option>
	<option value="microsoft-sql-server">Microsoft SQL Server</option>
	<option value="mysql">MySQL</option>
	<option value="oracle">Oracle</option>
	<option value="postgreSQL">PostgreSQL</option>
	<option value="Power-BI-Connector">Power BI Connector</option>
	<option value="qlik">QlikSense and QlikView</option>
	<option value="salesforce">Salesforce</option>
	<option value="hana">SAP HANA</option>
	<option value="sharepoint">SharePoint</option>
	<option value="snowflake">Snowflake</option>
	<option value="server-report-services">SQL Server Reporting Services</option>
	<option value="tableau">Tableau</option>
  </select><br>
5. Klicken Sie auf **[OK]**, um Ihre Eingabe zu bestätigen.

Wenn die [Extraktion ausgeführt](./eine-extraktion-ausfuehren) wird, werden die extrahierten SAP-Daten in die zugewiesene Destination geschrieben.
