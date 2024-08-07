---
ref: bc-advanced-techniques-02
layout: page
title: Extraktionsparameter
description: Extraktionsparameter
product: board-connector
parent: fortgeschrittene-techniken
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /BOARD-Connector-DE/default.aspx?pageid=zusaetzliche-funktionen-im-designer
progressstate: 5
---

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für Board Connector.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [Board Connector HelpCenter](https://helpcenter.theobald-software.com/board-connector/documentation/introduction/).

Der Board Connector Designer bietet die Möglichkeit Extraktionen auszuführen, indem Sie Extraktionsparameter übergeben, die definieren wie Daten aus der Datenquelle extrahiert werden.

Die folgenden Parameter-Kategorien sind verfügbar:

- [Extraction](#extraction)-Parameter beeinflussen die Extraktionseinstellungen.
- [Source](#source)-Parameter beeinflussen die Einstellungen der SAP Verbindung.
- [Custom](#custom)-Parameters entsprechen den benutzerdefinierten Laufzeitparametern einer Extraktion.

Die Parameter sind im Fenster "Run Extraction" aufgeführt. <br>
Wählen Sie eine Extraktion im Hauptfenster des Designers und klicken Sie auf **[Run]** um das Fenster "Run extractions" zu öffnen. 
Weitere Informationen finden Sie in [Eine Extraktion ausführen](../erste-schritte/eine-extraktion-ausfuehren).

![Extraction parameters](/img/content/board/Run-Extraction.png){:class="img-responsive"}

Um das Fenster "Run extractions" zu öffnen, wählen Sie eine Extraktion im Hauptfenster des Designers und klicken Sie auf **[Run]** (siehe Details in [Eine Extraktion ausführen](../erste-schritte/eine-extraktion-ausfuehren)).

### Extraction

Die Anzahl der verfügbaren Parameter ist abhängig von dem Extraktionstyp und der Destination, z.B. ist **decimalSeparator** ein Parameter, der nur in der CSV-Destination vorhanden ist.

Parametername | Beschreibung | Spezielle Infos
------------ | ------------- | -------------
clearBuffer | leert den Ergebnis-Buffer | Standardwert - false
preview | aktiviert die Preview | Standardwert - false
source | ermöglicht das dynamische Auswählen eines SAP-Quellsystems aus dem die Daten extrahiert werden. <br> Nur aktiv, wenn mehrere SAP-Quellsysteme verfügbar sind, z.B. sap_dev und sap_prod. | -
destination | ermöglicht das dynamische Auswählen einer Destination, in die die extrahierten Daten geschrieben werden. <br> Nur aktiv, wenn mehrere Destinationen verfügbar sind, z.B. db_1 und db_2.| -
rows | setzt die maximale Anzahl der extrahierten Datensätze | verfügbar in [Table](../table/extraktionseinstellungen#extraction-settings-öffnen)
where | setzt die WHERE-Bedingung | verfügbar in [Table](../table/where-bedingung)
packageSize | setzt die Paketgröße | verfügbar in [Table](../table/extraktionseinstellungen#extraction-settings)
updateMode | Update Modus für die Ausführung| verfügbar in [ODP](../odp/odp-functions-ov#load-verfahren-update-mode)
subscriptionSuffix | Suffix um mehrere inits auf einem SAP System zu verwenden | verfügbar in [ODP](../odp/odp-functions-ov#abonnements)
extractDataOnDeltaInit | Datenextraktion bei delta init | verfügbar in [ODP](../odp/odp-functions-ov#load-verfahren-update-mode)
hierarchyName | Name der zu extrahierenden Hierarchie| verfügbar in ODP, DeltaQ & Hierarchy
representation | Name der Repräsentation / des Ausgabeformats der zu extrahierenden Hierarchie: "ParentChild", "Natural" oder "ParentChildWithNodeNames"  | verfügbar in [Hierarchy](../bw-hierarchien/tabellenausgabe)
dateTo | Gültigkeitsdatum der zu extrahierenden Hierarchie im Format YYYYMMDD | verfügbar in [Hierarchy](../bw-hierarchien/hierarchien-als-datenquelle-definieren#ausgabe-formatieren)
variant | Name einer Variante | verfügbar in [Report](../abap-reports/variants-and-selections) & [SAP Query](../sap-queries/variants-and-selections)
batchJobName | Name des Batch Jobs| verfügbar in [Report](../abap-reports/report-extraktionseinstellungen)
gatwewayHost | Gateway Host | verfügbar in [DeltaQ](../datasource-deltaq/deltaq-customizing#customizing-check)
gatewayService | Gateway Service | verfügbar in [[DeltaQ](../datasource-deltaq/deltaq-customizing#customizing-check)
programID | Program ID | verfügbar in [DeltaQ](../datasource-deltaq/deltaq-customizing#customizing-check)
logicalDestination | Logische Destination | verfügbar in [DeltaQ](../datasource-deltaq/deltaq-customizing#customizing-check)
requestID | Request ID (nur für Repair Request) | verfügbar in [DeltaQ](../datasource-deltaq/extraktionseinstellungen#registerkarte-base)
updateType | F (Full), C (Delta Init), S (Init no data), D (Delta Update), R (Repeat)| verfügbar in [DeltaQ](../datasource-deltaq/update-modus)
decimalSeparator | setzt ein Symbol zwischen dem Ganzzahlteil und dem Bruchzahlteil | verfügbar in CSV Destinationen
columnSeparator | setzt ein Symbol, das den Anfang einer Spalte bezeichnet | verfügbar in CSV Destinationen

### Source
![Source parameters](/img/content/board/Run-Extraction-Source.png){:class="img-responsive"}

Die Verbindungseinstellungen zu einer SAP Quelle können dynamisch über die URL geändert werden. 
Im Tab *Source* können Sie die Werte überschreiben, die in den [SAP-Source-Einstellungen](../einfuehrung/sap-verbindungen-anlegen) definiert sind.

Parametername | Beschreibung |
------------ | ------------- | 
lang | ändert dynamisch die SAP-Anmeldesprache des SAP-Quellsystems  
logonTicket | ändert dynamisch das Anmeldeticket. Siehe [SSO mit SAP Logon Ticket](https://kb.theobald-software.com/sap-connection/sso-with-logon-ticket) für mehr Details.

{: .box-note }
**Hinweis:** Der Parameter **logonTicket** kann nur gesetzt werden, wenn "SAP logon ticket"
 als Authentifizierungsmethode in den [SAP-Source-Einstellungen](../einfuehrung/sap-verbindungen-anlegen) ausgewählt ist.


#### Beispiel
1. Wählen Sie eine Checkbox aus, um einen Parameter zu überschreiben.
2. Tragen Sie den neuen Wert ein und bestätigen Sie ihn über die Eingabetaste.
- Extraktions-URL vor der Parameteränderung<br>
`http://localhost:8065?name=Plants`
- Extraktions-URL nach der Parameteränderung in **lang**:<br>
`http://localhost:8085/?name=Plants&lang=DE` 

### Custom

{: .box-note }
**Hinweis:** Der Tab *Custom* ist nur dann aktiv, wenn ein Laufzeitparameter angelegt ist.

Aktivieren Sie die Checkbox und geben Sie einen neuen Wert ein, um den Parameter zu überschreiben.
 
![Custom parameters](/img/content/board/Run-Extraction-Custom.png){:class="img-responsive"}

#### Beispiel
1. Wählen Sie eine Checkbox aus, um einen Parameter zu überschreiben.
2. Tragen Sie den neuen Wert ein und bestätigen Sie ihn über die Eingabetaste.
- Extraktions-URL vor der Parameteränderung<br>
`http://localhost:8065?name=Plants`
- Extraktions-URL nach der Parameteränderung in **myParameter**:<br>
`http://localhost:8085/?name=Plants&myParameter=EN` 
