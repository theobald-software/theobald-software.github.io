---
ref: yunio-bapis-function-01
layout: page
title: Funktionsbausteine / BAPIs
description: BAPIs und Funktionsbausteine
product: yunio
parent: yunio
childidentifier: bapis-und-funktionsbausteine
permalink: /:collection/:path
weight: 18
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=bapis-und-funktionsbausteine
---

Der folgende Abschnitt beschreibt die Anwendung der *Function Module / BAPI* Komponente.

### Einen Funktionsbaustein / BAPI finden

1. Wenn Sie einen neuen *Service* anlegen, wählen Sie *Function Module / BAPI* als Extraktionstyp aus.
2. Klicken Sie auf **[Save and edit]**. Das *Search Function Module* Menü öffnet sich.
3. Geben Sie den Namen eines Funktionsbausteins oder BAPIs in das Feld **Search by name** (1) ein oder suchen Sie nach einer Funktionsgruppe. Verwenden Sie Wildcards ( * ), falls notwendig. <br>
![Look-Up-Function-Module](/img/content/yunio/search-bapi.png){:class="img-responsive"}
4. Klicken Sie auf **[Search]** (2), um alle Suchergebnisse anzuzeigen.
5. Wählen Sie eine Quelldatei aus der Liste verfügbarer Suchergebnisse aus (3). 
Die Extraktionseinstellungen für *Function Module / BAPI* öffnen sich automatisch.<br>

Das *Function Module / BAPI* Menü ist in folgende Unterabschnitte unterteilt:

![yunIO-function-module](/img/content/yunio/bapi-settings.png){:class="img-responsive"}

- [Function Module](#funktion-module) (4) zeigt den Namen und die Beschreibung des gewählten Funktionsbausteins / BAPIs an.
- [Advanced Settings](#advanced-settings) (5) definieren, wie Daten aus SAP extrahiert werden.
- [Function Module Interface Parameters](#function-module-interface-parameters) (6) definieren welche Daten an und von SAP gesendet werden.



### Function Module

Der Name und die Beschreibung des gewählten Funktionsbausteins / BAPIs werden im Abschnitt **Function Module** angezeigt.<br>
Um eine neue Quelldatei auszuwählen, klicken Sie auf **Select** in der oberen rechten Ecke des Abschnitts.

### Advances Settings

#### Commits Transactions
Wenn diese Option aktiv ist, wird der Funktionsbaustein “BAPI_TRANSACTION_COMMIT” zum Abschließen der Transaktion ausgeführt. 
Diese Option ist für einige SAP Funktionsbausteine (z.B. BAPI_PO_CREATE) notwendig, um Daten in der Datenbank zu aktualisieren.

### Function Module Interface Parameters

Im Abschnitt *Function Module Interface Parameters* werden alle verfügbaren Parameter des Funktionsbausteins / BAPIs angezeigt.
Funktionsbausteine /BAPIs können bis zu vier Parametertypen haben: [Import](#import-parameter), [Export](#export-parameter), [Changing](#changing-parameter) and [Table](#table-parameter).

### Import-Parameter

Import-Parameter repräsentieren die Eingabewerte, die vom Client an SAP gesendet werden. 
Im Tab **Import** können Sie Eingabeparameter definieren.

Wählen Sie Ihre Eingabeparameter:
- Felder, die auf *Supplied by Caller* stehen, sind im Request Body des Services als Parameter verfügbar und können zur Laufzeit gesetzt werden.
- Felder, die auf *Default (defined in SAP)* stehen, verwenden die Standardwerte aus SAP.

![BAPI export parameters](/img/content/yunio/BAPI-input.png){:class="img-responsive"}

{: .box-note }
**Hinweis:** Achten Sie beim Parametrieren darauf, den passenden Datentyp für Ihre Eingabewerte zu verwenden.<br>

### Export-Parameter
Export-Parameter repräsentieren die Ausgabewerte, die von SAP zurück an den Client gesendet werden, nachdem die Funktion ausgeführt wurden.
Im Tab **Export** können Sie Ausgabeparameter definieren, die entweder als Skalarwerte oder Strukturen übergeben werden:
- Um ein Feld zu der Ausgabe des Funktionsbausteins / BAPIs hinzuzufügen, markieren Sie die entsprechende Checkbox.

![BAPI export parameters](/img/content/yunio/BAPI-output.png){:class="img-responsive"}

### Changing-Parameter

Changing-Parameter repräsentieren Parameter, die sowohl für Eingabe als auch Ausgabe verwendet werden können.<br>
Im Tab **Changing** können Sie die entsprechenden Parameter definieren. 

### Table-Parameter


Tables-Parameter haben eine Tabellenstruktur, die aus mehreren Zeilen besteht. 
Tabellen können als Eingabe und Ausgabe verwendet werden.

Im Tab **Tables** können Sie Tabellen-Parameter für den Import und Export zu und von einem Funktionsbaustein / BAPI definieren.

**Tabellen als Eingabeparameter:**<br>
- Tabellenfelder, die auf *Supplied by Caller* stehen, sind im Request Body des Services als Parameter verfügbar und können zur Laufzeit gesetzt werden.
- Tabellenelder, die auf *Default (defined in SAP)* stehen, verwenden die Standardwerte aus SAP.


**Tabellen als Ausgabeparameter**<br>
- Um ein Tabellenfeld zu der Ausgabe des Funktionsbausteins / BAPIs hinzuzufügen, markieren Sie die entsprechende Checkbox.

![BAPI table](/img/content/yunio/Bapi-table.png){:class="img-responsive"}

*****
#### Weiterführende Links
- [KB: Running a yunIO Service in Swagger Inspector](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-swagger-inspector)
- [KB: Running a yunIO Service in Postman](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-postman)