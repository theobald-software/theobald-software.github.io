---
ref: xu-logging-03
layout: page
title: Log-Zugriff über HTTP / HTTPS
description: Log-Zugriff über HTTP / HTTPS
product: xtract-universal
parent: logging
permalink: /:collection/:path
weight: 3
lang: de_DE
---

Alle Produkte von Theobald Software protokollieren alle auf einem System durchgeführten Schritte in Log-Dateien. Die Log-Dateien werden im Produktverzeichnis gespeichert:
z.B.: `C:\Program Files\XtractUniversal\logs`.

Der XU-Server bietet Zugriff über HTTP / HTTPS auf verschiedene Metadaten- und Logging-Informationen. Stellen Sie sicher, dass die richtige URL verwendet wird. 
Die korrekte URL entnehmen Sie Ihren Xtract Universal [Web-Server-Einstellungen](../server/server_einstellungen#web-server).

{: .box-note }
**Hinweis:** Achten Sie auf die korrekten Standardports der unterschiedlichen Komponenten [(Configuration Server, Web Server)](../server/ports). 

Zusätzlich wird die URL des XU-Servers beim Starten des Xtract Universal Designers angezeigt.<br>
![XU Server connection](/img/content/xu/Connect-to-Xtract-Universal-Server.png){:class="img-responsive"}

Die grundlegende URL-Syntax setzt sich wie folgt zusammen: `http://[XU Server Name].[Domain]:[Port]`

| Typ | Syntax       | Beispiel                                                                  |
|-------|------------------|--------------------------------------------------------------------|
| HTTP   | `http://[XU Server Name].[Domain]:[Port]`         | `http://todd.theobald.local:8065`  |
| HTTP | `http://localhost:[Port]` | `http://localhost:8065` |
| HTTPS  | `https://[XU Server Name].[Domain]:[Port]` | `https://todd.theobald.local:8165`<br> funktioniert ausschließlich mit dedizierten Rechnernamen und X.509 Zertifikat |


In den nachfolgenden Beispielen wird folgende URL `https://todd.theobald.local:8165/`  verwendet.

### HTTP Log-Parameter

|Parameter | Beschreibung | Beispiel |
|------------ | -------------|-----|
 | destinations | Auslistung aller definierten Zielverbindungen | `http://localhost:8065/destinations` |
 | req_type=server | Auflistung alles Server-Logs gemäß [Web-Server Einstellungen](https://help.theobald-software.com/de/xtract-universal/server/server_einstellungen#web-server) | `https://todd.theobald.local:8165/log/?req_type=server` |
| req_type=extraction | Auslistung aller definierten Extraktionen. | `https://todd.theobald.local:8165/log/?req_type=extraction` |
 | req_type=all| Auslistung aller Server & Extraktions-Logs | `https://todd.theobald.local:8165/log/?req_type=all`
 | req_type=all&past_days=n | Aufistung aller Logs seit n Tagen | `https://todd.theobald.local:8165/log/?req_type=all&past_days='1'` | 
 | req_type=extraction&name=[Extraction Name]&timestamp=[Timestamp] | Log einer bestimmten Extraktion zu einem bestimmten Zeitstempel (Timestamp) | `https://todd.theobald.local:8165/log/?req_type=extraction&name=cskt&timestamp=2020-06-10_14:42:32.136` |
 | req_type=extraction&name=[Extraction Name] | Auslistung aller Logs einer bestimmten Extraktion | `https://todd.theobald.local:8165/log/?req_type=extraction&name=cskt` |
 | req_type=all&min=[timestamp] | Ausflistung aller Logs ab einem bestimmten Zeitstempel (Timestamp) | `https://todd.theobald.local:8165/log/?req_type=all&min=2020-06-05_13:36:12.219` |
 | req_type=all&min=[timestamp]&max=[timestamp] | Ausflistung aller Logs zwischen zwei Zeitstempeln (Timestamps) | `https://todd.theobald.local:8165/log/?req_type=all&min=2020-06-05_13:36:12.219&max=2020-06-10_14:42:32.136` |
 | resultName=[Extraction Name]&timestamp[timestamp] | Rückgabe des Namens der Ergebnis-Tabelle/-Datei für einen bestimmten Zeitstempel (Timestamp) | `https://todd.theobald.local:8165/ResultName?name=cskt&timestamp=2020-06-10_14:42:32.136` |

### Beispiele der HTTP-Aufrufe

#### HTTP-Aufruf aller definierten Extraktionen
- `https://todd.theobald.local:8165/`
![XU Server connection](/img/content/xu/http_log_definierter_extraktionen.png){:class="img-responsive"}

Der Log enthält folgende Spalten:<br>
- **Name**: enthält den Namen der Extraktion.
- **Type**: enthält den Extraktionstyp.
- **Source**: enthält den Namen der Quellverbindung.
- **Destination**: enthält den Namen der Zielverbindung.
- **LastRun**: enthält den Zeitstempel der letzten Ausführung. 
- **RowCount**: enthält die Anzahl der zuletzt extrahierten Datensätze. 
- **LastChange**: enthält den Zeitstempel der letzten Änderung. 
- **Created**: enthält den Zeitstempel der Erstellung. 

#### HTTP-Aufruf aller definierten Zielverbindungen
- `https://todd.theobald.local:8165/destinations`
![XU Server connection](/img/content/xu/http_log_destinations.png){:class="img-responsive"}

Der Log enthält folgende Spalten:
- **Name**: enthält den Namen der Zielverbindung.
- **Type**: enthält den Verbindungstyp.
- **Host**: enthält den Host-Namen, falls zutrifft.
- **Port**: enthält den Port-Namen, falls zutrifft.
- **Database**: enthält den DB-Namen, falls zutrifft. 
- **User**: enthält den Benutzernamen in der Verbindung, falls zutrifft.  
- **Schema**: enthält den Schema-Namen, falls zutrifft.  
- **Directory**: enthält den Verzeichnisnamen, falls zutrifft.

#### HTTP-Aufruf aller Server & Extraktions-Logs
- `https://todd.theobald.local:8165/log/?req_type=all`
![XU Server connection](/img/content/xu/http_log_all_logs.png){:class="img-responsive"}

Der Log enthält folgende Spalten:

- **LineCount**: enthält die Zeilennummer.
- **Name**: enthält den Namen der Extraktion bei einem Extraktionslog bzw.[server] bei einem Serverlog.
- **Timestamp**: enthält den Zeitstempel.
- **State**: enthält eine Zahl zwischen 2 und 4 bei einer Extraktion bzw. die Zahl 5 bei einem Serverlog.
- **StateDescr**: Beschreibung des Status.
- **LogLevel**: hat den Wert Error, Info oder Debug und beschreibt, ob es sich um eine Fehler-, Info- oder Debug-Logzeile handelt.
- **Source** enthält den Namen der technischen Komponente, welche  den Log-Eintrag erzeugt hat. 
- **Message**: enthält den Loginhalt.

| State | StateDescr       | Bedeutung                                                                    |
|-------|------------------|------------------------------------------------------------------------------|
| 2     | Running          | Die Extraktion läuft gerade.                                                 |
| 3     | FinishedNoErrors | Die Extraktion ist erfolgreich gelaufen.                                     |
| 4     | FinishedErrors   | Die Extraktion ist abgeschlossen aber mindestens ein Fehler ist aufgetreten. |
| 5     | NotAvailable     | Der Status bei einem Serverlog.                                              |

#### HTTP-Aufruf aller definierten Extraktionen
- `https://todd.theobald.local:8165/log/?req_type=extraction`
![XU Server connection](/img/content/xu/http_log_definierter_extraktionen.png){:class="img-responsive"}

#### HTTP-Aufruf der Ergebnis- Tabelle / -Datei eines bestimmten Zeitstempels

- `https://todd.theobald.local:8165/ResultName?name=cskt&timestamp=2020-06-10_14:42:32.141`
![XU Server connection](/img/content/xu/http_log_resultName.png){:class="img-responsive"}

Gibt den Namen der Ergebnistabelle / Datei für einen bestimmten Zeitstempel zurück.   
{: .box-note }
**Hinweis:** Das funktioniert nur, wenn seit dem letzten Lauf die Destination/extraction-specific settings nicht verändert wurden.

#### HTTP-Aufruf aller Serverlogs
- `https://todd.theobald.local:8165/log/?req_type=server`
![XU Server connection](/img/content/xu/http_log__req_type=server.png){:class="img-responsive"}

#### HTTP-Aufruf einer bestimmten Extraktion
- `https://todd.theobald.local:8165/log/?req_type=extraction&name=cskt`
![XU Server connection](/img/content/xu/http_log_extraction_name.png){:class="img-responsive"}

#### HTTP-Aufruf einer bestimmten Extraktion zu einem bestimmten Timestamp
- `https://todd.theobald.local:8165/log/?req_type=extraction&name=cskt&timestamp=2020-06-10_14:42:32.136`
![XU Server connection](/img/content/xu/http_log_extraction_name_timestamp.png){:class="img-responsive"}

#### HTTP-Aufruf eines Serverlogs zu einem bestimmten Timestamp 
- `https://todd.theobald.local:8165/log/?req_type=server&timestamp=2020-06-05_07:49:24.150`
![XU Server connection](/img/content/xu/http_log_bestimmter_timestamp.png){:class="img-responsive"}

#### HTTP-Aufruf aller Logs zwischen zwei Timestamps
- `https://todd.theobald.local:8165/log/?req_type=all&min=2020-06-05_13:36:12.219&max=2020-06-10_14:42:32.136`
![XU Server connection](/img/content/xu/http_log_min_max_timestamp.png){:class="img-responsive"}

#### HTTP-Aufruf aller Logs seit n Tagen
- `https://todd.theobald.local:8165/log/?req_type=all&past_days='1'`
![XU Server connection](/img/content/xu/http_log_past_day.png){:class="img-responsive"}


*****
#### Weiterführende Links
- [Web-Server-Einstellungen](../server/server_einstellungen#web-server)
- [Logging](./logging)








