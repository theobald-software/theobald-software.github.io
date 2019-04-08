---
ref: xu-logging-04
layout: page
title: Log-Zugriff über HTTP
description: Log-Zugriff über HTTP
product: xtract-universal
parent: logging
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=log-zugriff-ueber-http
---

Der Server bietet Zugriff auf verschiedene Metadaten- und Logging-Informationen über HTTP. <br>
In den nachfolgenden Beispielen wird folgende URL *http://localhost:8065/*  verwendet.


**Auflistung aller definierten Extraktionen**

Die folgende URL 

```
http://localhost:8065/
```
listet die definierten Extraktion auf. 

Name,Type,Source,Destination,Connection,LastRun,RowCount,LastChange,Created<br>
Bilanz_GuV_Report,Report,erp,sqlserver,,,2016-07-25_03:05:55.250,2016-07-25_03:05:55.250<br>
BKPF,Table,erp,tableau,,,2016-07-26_06:04:38.239,2016-07-26_06:03:06.171<br>
BSEG,Table,erp,alteryx,2016-08-01_11:20:40.521,0,2016-07-21_04:22:12.681,2016-06-13_11:28:23.180<br>
demobexquery,BWCube,bw,powerbi,2016-07-29_09:43:13.675,210,2016-07-29_09:40:18.505,2016-05-23_02:25:31.273 

Der Log enthält folgende Spalten:<br>
- **Name**: enthält den Namen der Extraktion.
- **Type**: enthält den Extraktionstyp.
- **Source**: enthält den Namen der Quellverbindung.
- **Destination**: enthält den Namen der Zielverbindung.
- **LastRun**: enthält den Zeitstempel der letzten Ausführung. 
- **RowCount**: enthält die Anzahl der zuletzt extrahierten Datensätze. 
- **LastChange**: enthält den Zeitstempel der letzten Änderung. 
- **Created**: enthält den Zeitstempel der Erstellung. 

**Auflistung aller definierten Zielverbindungen**

Die folgende URL
```
http://localhost:8065/destinations
```
listet die definierten Zielverbindungen auf. 

Name,Type,Host,Port,Database,User,Schema,Directory<br>
alteryx,Alteryx,,,,,,<br>
http-csv,CSV,,,,,,<br>
http-odata-atom,ODataAtom,,,,,,<br>
sqlserver,SQLServer,localhost,1433,SAPDemos,test,,

Der Log enthält folgende Spalten:
- **Name**: enthält den Namen der Zielverbindung.
- **Type**: enthält den Verbindungstyp.
- **Host**: enthält den Host-Namen, falls zutrifft.
- **Port**: enthält den Port-Namen, falls zutrifft.
- **Database**: enthält den Datenbanknamen, falls zutrifft. 
- **User**: enthält den Benutzernamen in der Verbindung, falls zutrifft.  
- **Schema**: enthält den Schemanamen, falls zutrifft.  
- **Directory**: enthält den Verzeichnisnamen, falls zutrifft.

**Name der Ergebnistabelle/Datei für einen bestimmten Timestamp** 

Unter

```
http://localhost:8065/ResultName?name=kna1&timestamp=2016-08-04_15:17:02.025
```

gibt es den Namen der Ergebnistabelle/Datei für einen bestimmten Timestamp (Das funktioniert nur, wenn seit dem Lauf die Destination/extraction-specific settings nicht verändert wurden)  

**Serverlog**

Der Server legt für jeden Tag einen neuen Log mit dem entsprechenden Zeitstempel an. Die Liste der Serverlogs können Sie mit dem Parameter **req_type=server** erreichen:

```
http://localhost:8065/log/?req_type=server
```

**Serverlog eines bestimmtes Tages**

Den Serverlog eines bestimmten Tages (z.B. 2010-04-28_00:00:00.000) können Sie mit den Parametern <br>
**req_type=server &
timestamp=2010-04-28_00:00:00.000** erreichen:

```
http://localhost:8065/log/?req_type=server&timestamp=2010-04-28_00:00:00.000
```

Sie können auch ein Datum als Timestamp mitgeben:


```
http://localhost:8065/log/?req_type=server&timestamp=2010-04-28
```

**Log einer bestimmten Extraktion**

Eine Übersicht über alle Logs einer bestimmten Extratkion (z.B. vardemo) können Sie mit den Parametern **req_type=extraction&name=vardemo** erreichen:

```
http://localhost:8065/log/?req_type=extraction&name=vardemo
```

**Log einer bestimmten Extraktion zu einem bestimmten Zeitstempel**

Den Extraktionslog eines bestimmten Zeitstempels (z.B. 2010-04-27_10:24:47.674) können Sie mit den Parametern **req_type=extraction&name=vardemo &
timestamp=2010-04-27_10:24:47.674** erreichen:

```
http://localhost:8065/log/?req_type=extraction&name=vardemo&timestamp=2010-04-27_10:24:47.674
```

**Alle Logs**

Eine Liste aller Logs können Sie mit dem Parameter **req_type=all** erreichen:

```
http://localhost:8065/log/?req_type=all
```

**Alle Logs seit n Tagen**

Wenn Sie die Logs seit n Tagen aufrufen wollen, verwenden Sie bitte die Parameter **req_type=all&past_days=n:**

```
http://localhost:8065/log/?req_type=all&past_days=1
```

**Alle Logs ab einem bestimmten Zeitstempel**

Wenn Sie die Logs ab einem bestimmten Zeitstempel aufrufen wollen, verwenden Sie bitte die Parameter **req_type=all&min=2010-04-28_09:49:17.831:**

```
http://localhost:8065/log/?req_type=all&min=2010-04-28_09:49:17.831
```

Sie können auch ein Datum als minimum Zeitstempel mitgeben.

**Alle Logs bis zu einem bestimmten Zeitstempel**

Wenn Sie die Logs bis zu einem bestimmten Zeitstempel aufrufen wollen, verwenden Sie bitte die Parameter **req_type=all&min=2010-04-28_09:49:17.831:**

```
http://localhost:8065/log/?req_type=all&max=2010-04-28_09:49:17.831
```

Sie können auch ein Datum als maximum Zeitstempel mitgeben.

**Alle Logs zwischen zwei bestimmten Zeitstempeln**

Wenn Sie die beiden Parameter min und max verwenden, haben Sie Zugriff auf alle Logs in diesem Zeitraum.
 
**Log-Inhalt**

Der Log enthält folgende Spalten:

- **LineCount**: enthält die Zeilennummer.
- **Name**: enthält den Namen der Extraktion bei einem Extraktionslog bzw. [server] bei einem Serverlog.
- **Timestamp**: enthält den Zeitstempel.
- **State**: enthält eine Zahl zwischen 2 und 4 bei einer Extraktion bzw. die Zahl 5 bei einem Serverlog.
- **StateDescr**: Beschreibung des Status. 

| State | StateDescr       | Bedeutung                                                                    |
|-------|------------------|------------------------------------------------------------------------------|
| 2     | Running          | Die Extraktion läuft gerade.                                                 |
| 3     | FinishedNoErrors | Die Extraktion ist erfolgreich gelaufen.                                     |
| 4     | FinishedErrors   | Die Extraktion ist abgeschlossen aber mindestens ein Fehler ist aufgetreten. |
| 5     | NotAvailable     | Der Status bei einem Serverlog.                                              |

- **LogLevel**: hat den Wert Error, Info oder Debug und beschreibt, ob es sich um eine Fehler-, Info- oder Debug-Logzeile handelt.
- **Source** enthält den Namen der technischen Komponente, welche  den Log-Eintrag erzeugt hat. 
- **Mode** hat den Wert Service oder Console
- **Message**: enthält den Loginhalt. 

