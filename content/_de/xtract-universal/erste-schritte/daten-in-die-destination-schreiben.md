---
ref: xu-getting-started-04
layout: page
title: Schritt 5 - Extrahierte Daten in die Destination schreiben
description: Schritt 5 - Extrahierte Daten in die Destination schreiben
product: xtract-universal
parent: erste-schritte
permalink: /:collection/:path
weight: 5
lang: de_DE
progressstate: 5
---

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für Xtract Universal.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [Xtract Universal HelpCenter](https://helpcenter.theobald-software.com/xtract-universal/documentation/introduction/).

 
Eine Destination definiert, wie die extrahierten SAP-Daten verarbeitet werden.
Dies könnte eine Konvertierung in dateibasierte Formate für lokale oder cloudbasierte Dateisysteme oder die Bereitstellung der Daten an Destinationen wie Datenbanken und andere APIs sein.
Die verfügbaren Destinationen sind unter ["Destinationen"](../destinationen) aufgelistet.

### Eine neue Destination erstellen
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

Führen Sie die folgenden Schritte aus, um eine neue Destination anzulegen:
1. Im Hauptfenster des Designers, öffnen Sie das Menü **[Server] > [Manage Destinations]**. Das Fenster "Manage Destinations" wird geöffnet.
![Load-Destinations](/img/content/xu/xu_destination.png){:class="img-responsive"}
2. Klicken Sie auf **[Add]** (1) um eine neue Destination zu erstellen. Das Fenster "Destination Details" wird geöffnet.<br>
![Load-Manage-Shared-Destination](/img/content/destinations_load_manage_shared.png){:class="img-responsive"}
3. Geben Sie einen eindeutigen Namen für die Destination ein (2). 
4. Wählen Sie den Typ der Destination aus der Dropdown-Liste (3) aus. Die Destinationsdetails werden angezeigt.<br>
![Select-Destination-Type](/img/content/sqlserver_destination-details.png){:class="img-responsive"}
5. Geben Sie die Destinationsdetails ein. Die Destinationsdetails variieren je nach Destinationstyp. <br>
Für weitere Informationen zu den Destinationsdetails wählen Sie Ihre Destination aus: <select name="destinationlist" id="destination" onChange="getSelectedValueDetails();">
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
6. Klicken Sie auf **[Test Connection]** um die Verbindung zur Destination zu überprüfen.
7. Klicken Sie auf **[OK]**, um die Destinationen zu speichern. 

Die Destination ist nun verfügbar und kann Extraktionen zugeordnet werden.

### Zuweisen von Destinationen zu Extraktionen

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
  
Extraktionen schreiben Daten an die ihnen zugewiesene Destinationen.
Führen Sie die folgenden Schritte aus, um einer Extraktion eine Destination zuzuweisen:

1. Wählen Sie im Hauptfenster des Designers eine Extraktion aus.
2. Klicken Sie auf **[Destination]**. Das Fenster "Destination Settings" wird geöffnet.<br>
![Load-Destinations](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}
3. Im Fenster "Destination Settings", Wählen Sie eine Destination aus dem Dropdown-Menü aus.
![Load-Shared-Destination-SQLServer](/img/content/sqlserver_destination-settings.png){:class="img-responsive"}
4. Optional: Ändern Sie die Destinationseinstellungen.<br>
Destinationseinstellungen sind spezifisch für die ausgewählte Extraktion und variieren je nach Destinationstyp. <br>
Für weitere Informationen zu den Destinationseinstellungen, wählen Sie Ihre Destination aus: <select id="destinationsettings" onChange="getSelectedValueSettings();">
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
  </select><br>
5. Klicken Sie auf **[OK]**, um Ihre Eingabe zu bestätigen.       

Beim [Ausführen der Extraktion](./eine-extraktion-ausfuehren), werden Die extrahierten SAP-Daten  in die Destination geschrieben.

#### Weiterführende Links
- [Destinationen Verwalten](../destinationen/ziele-verwalten)
