---
ref: talend-integration-http
layout: page
title: Talend Integration über HTTP
description: Talend Integration HTTP
product: xtract-universal
parent: talend-integration
permalink: /:collection/:path
weight: 20
lang: de_DE
old_url: 
---

Hier zeigen wir die Talend-Integration über den Aufruf eines HTTP-Webservices.
In Talend führen wir die Extraktion durch einen HTTP Aufruf. 
Das untere Bild zeigt die Archtitektur. Xtract Universal extrahiert die Daten aus SAP und liefert sie über HTTP im CSV-Format.
In Talend können wir anschließend die extrahierten Daten weiterverarbeiten und z.B. in eine Datenbank schreiben.
![talend-http-architecture](/img/content/xu/best-practices/talend-http/talend-http-architecture.png){:class="img-responsive"}

Dieses Szenario setzt kein bestimmtes Betriebssystem voraus, im Unterschied zum Szenario mit der Kommandozeile, das nur auf einem Windows-Betriebssystem läuft.
<br>
**Jobübersicht in Talend**<br>
Die Übersicht des Jobs in Talend zeigt die verwendeten Schritte. Es sind insgesamt fünf Schritte, auf die wir unten noch näher eingehen: 
![talend-00-job-overview](/img/content/xu/best-practices/talend-http/talend-00-job-overview.png){:class="img-responsive"}

<br>
**Extraktion in Xtract Universal**<br>
Hier sehen wir die Definition der Extraktion in Xtract Universal. Wir extrahhieren Kundendaten aus der SAP-Tabelle KNA1:  
![talend-xu-extraction-def](/img/content/xu/best-practices/talend-http/talend-xu-extraction-def.png){:class="img-responsive"}
<br>
In Xtract Universal haben wir eine Extraktion mit Destination vom typ HTTP-CSV definiert. <br>
Die Destination-Einstellungen für http-csv bieten Optionen an, um die Daten ohne die Spaltennamen und ohne Zeilentrenner nach der letzten Zeile zu liefern, was wir hier auch verwendet haben.<br>.
![talend-xu-extraction](/img/content/xu/best-practices/talend-http/talend-xu-extraction.png){:class="img-responsive"}
<br>

**SQL Server** <br>
Im SQL Server haben wir die Zieltabelle mit dem unteren SQL-Befehl definiert, in welche wir später die Daten laden. 

```sql
CREATE TABLE [dbo].[customers](
	[SAP_Client_MANDT] [nvarchar](3) NULL,
	[Customer_KUNNR] [nvarchar](10) NULL,
	[Country_Customer_LAND1] [nvarchar](3) NULL,
	[Country_Name_NAME1] [nvarchar](35) NULL,
	[City_Customer_ORT01] [nvarchar](35) NULL,
	[Region_Customer_REGIO] [nvarchar](3) NULL,
	[Account_Group_Customer_KTOKD] [nvarchar](4) NULL
) ON [PRIMARY]
```
Hier nochmal die Tabelle im SQL-Server: 
![talend-mssql-schema](/img/content/xu/best-practices/talend-http/talend-mssql-schema.png){:class="img-responsive"}

<br>
**Talend**
Bevor wir in Talend die Schritte definieren, haben wir unter Metadata -> Db Connections die Verbindung zum SQL Server 
 
![talend-db-connection-01](/img/content/xu/best-practices/talend-http/talend-db-connection-01.png){:class="img-responsive"}
 
![talend-db-connection-02](/img/content/xu/best-practices/talend-http/talend-db-connection-02.png){:class="img-responsive"}

und das Tabellenschema definiert.  
![talend-db-schema](/img/content/xu/best-practices/talend-http/talend-db-schema.png){:class="img-responsive"}

Hier die Übersicht der Metadata-Definition: 
![talend-db-metadata](/img/content/xu/best-practices/talend-http/talend-db-metadata.png){:class="img-responsive"}

Wir schauen uns nun die Einstellungen der fünf Schritte im Talend-Job an.

<br>
**Schritt 1 - HTTP Aufruf**<br>
Im ersten Schritt führen wir den HTTP-Call aus. Der URI-Parameter "http://chaplin:8065/?name=customers_http" wird übergeben. 
![talend-01-httprequest](/img/content/xu/best-practices/talend-http/talend-01-httprequest.png){:class="img-responsive"}

<br>
**Schritt 2 - In Zeilen splitten**<br>
Die Daten werden anhand des Zeichens für Zeilenumbruch "\r\n" in Zeilen gesplittet. 
![talend-02-normalize](/img/content/xu/best-practices/talend-http/talend-02-normalize.png){:class="img-responsive"}

<br>
**Schritt 3 - In Spalten splitten**<br>
Datensätze werden in Spalten gesplittet, dazu wird der folgende reguläre Ausdruck "\\s*,\\s*(?=(?:(?:[^\"]*\"){2})*[^\"]*$)" verwendet. <br>
Wir nutzen das vorher definierte Schema für die Spalten. 
![talend-03-extract-delimited-fields](/img/content/xu/best-practices/talend-http/talend-03-extract-delimited-fields.png){:class="img-responsive"}

<br>
** Schritt 4 - In Datenbank schreiben**<br>
Nun schreiben wir die Daten in die SQL-Tabelle. Dazu nutzen wir die Verbindung und das Schema, welche wir am Anfang definiert haben: 
![talend-04-dboutput](/img/content/xu/best-practices/talend-http/talend-04-dboutput.png){:class="img-responsive"}

<br>
** Schritt 5 - Log schreiben (optional)**<br>
In diesem optionalen Schritt nutzen wir eine Java-Komponente, um im Erfolgsfall die Anzahl der verarbeiteten und eingefügten Datensätze ins Log zu schreiben.  
![talend-05-print-message](/img/content/xu/best-practices/talend-http/talend-05-print-message.png){:class="img-responsive"}

<br>
**Job ausführen**<br>
Nun führen wir den Job aus. Der Job ist erfolgreich und es wurden Kundendatensätze aus SAP extrahiert und in den SQL Server geschrieben. 
![talend-http-job-executed](/img/content/xu/best-practices/talend-http/talend-http-job-executed.png){:class="img-responsive"}

**Ergebnis im SQL Server prüfen**<br>
Nun können wir im SQL Server das Ergebnis prüfen. 
![talend-mssql-result](/img/content/xu/best-practices/talend-http/talend-mssql-result.png){:class="img-responsive"}

<br>
In diesem Kapitel haben wir gesehen, wie wir in Talend SAP-Extraktionen, welche Xtract Universal zur Verfügung stellt, über HTTP aufgerufen und verwendet haben.<br>