---
ref: bc-logging-04
layout: page
title: Log-Zugriff über HTTP
description: Log-Zugriff über HTTP
product: board-connector
parent: logging
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /BOARD-Connector-DE/default.aspx?pageid=log-zugriff-ueber-http
---

Der Server bietet Zugriff auf die Logging-Informationen des Servers und der Extraktionen über HTTP. In den folgenden Beispielen ist der Server über die URL **http://localhost:8085** erreichbar.

**Serverlog**

Der Server legt für jeden Tag einen neuen Log mit dem entsprechenden Zeitstempel an. Die Liste der Serverlogs können Sie mit dem Parameter **req_type=server** erreichen:

**http://localhost:8085/log/?req_type=server**


**Serverlog eines bestimmtes Tages**

Den Serverlog eines bestimmten Tages (z.B. 2010-04-28_00:00:00.000) können Sie mit den Parametern **req_type=server&tamp=2010-04-28_00:00:00.000** erreichen:

**http://localhost:8085/log/?req_type=server×tamp=2010-04-28_00:00:00.000**

Sie können auch ein Datum als Timestamp mitgeben:

**http://localhost:8085/log/?req_type=server×tamp=2010-04-28**

**Log einer bestimmten Extraktion**

Eine Übersicht über alle Logs einer bestimmten Extratkion (z.B. vardemo) können Sie mit den Parametern **req_type=extraction&name=vardemo** erreichen:

**http://localhost:8085/log/?req_type=extraction&name=vardemo**

**Log einer bestimmten Extraktion zu einem bestimmten Zeitstempel**

Den Extraktionslog eines bestimmten Zeitstempels (z.B. 2010-04-27_10:24:47.674) können Sie mit den Parametern **req_type=extraction&name=vardemo&tamp=2010-04-27_10:24:47.674** erreichen:

**http://localhost:8085/log/?req_type=extraction&name=vardemo×tamp=2010-04-27_10:24:47.674**


**Alle Logs**

Eine Liste aller Logs können Sie mit dem Parameter **req_type=all** erreichen:

**http://localhost:8085/log/?req_type=all**

**Alle Logs seit n Tagen** 

Wenn Sie die Logs seit n Tagen aufrufen wollen, verwenden Sie bitte die Parameter **req_type=all&past_days=n**:

**http://localhost:8085/log/?req_type=all&past_days=1**

**Alle Logs ab einem bestimmten Zeitstempel**

Wenn Sie die Logs ab einem bestimmten Zeitstempel aufrufen wollen, verwenden Sie bitte die Parameter **req_type=all&min=2010-04-28_09:49:17.831**:

**http://localhost:8085/log/?req_type=all&min=2010-04-28_09:49:17.831**

Sie können auch ein Datum als minimum Zeitstempel mitgeben.



**Alle Logs bis zu einem bestimmten Zeitstempel**

Wenn Sie die Logs bis zu einem bestimmten Zeitstempel aufrufen wollen, verwenden Sie bitte die Parameter **req_type=all&min=2010-04-28_09:49:17.831**:

**http://localhost:8085/log/?req_type=all&max=2010-04-28_09:49:17.831**

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
