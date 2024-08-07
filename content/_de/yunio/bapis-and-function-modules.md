---
ref: yunio-bapis-function-01
layout: page
title: Funktionsbausteine / BAPIs
description: Funktionsbausteine und BAPIs
product: yunio
parent: yunio
childidentifier: bapis-und-funktionsbausteine
permalink: /:collection/:path
weight: 18
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=bapis-und-funktionsbausteine
---

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für yunIO.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [HelpCenter für yunIO](https://helpcenter.theobald-software.com/yunio/).

Der folgende Abschnitt beschreibt die Anwendung des Integrationstyps *Function Module / BAPI*.

{: .box-warning}
**Warnung!** **Fehlende Berechtigungen** Um den Integrationstyp *Function Module / BAPI* zu verwenden, muss der Zugriff auf die entsprechenden Berechtigungsobjekte (RFC) in SAP verfügbar sein. Weitere Informationen finden Sie im Knowledge-Base-Artikel [SAP Zugriffsrechte: BAPI](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#bapi).

## Einen Funktionsbaustein / BAPI finden

1. Legen Sie einen neuen *Service* vom Typ *Function Module / BAPI* an. 
2. Klicken Sie auf **[Save and edit]**. Das *Search Function Module* Menü öffnet sich.
3. Geben Sie den Namen eines Funktionsbausteins oder BAPIs in das Feld **Search by name** (1) ein oder suchen Sie nach einer Funktionsgruppe. Verwenden Sie Wildcards ( * ), falls notwendig. <br>
![Look-Up-Function-Module](/img/content/yunio/search-bapi.png){:class="img-responsive" width="750px"}
4. Klicken Sie auf **[Search]** (2), um alle Suchergebnisse anzuzeigen.
5. Wählen Sie einen Eintrag aus der Liste der Suchergebnisse aus (3). 
Die Extraktionseinstellungen für *Function Module / BAPI* öffnen sich automatisch.<br>

## Einstellungen

Das *Function Module / BAPI* Menü ist in folgende Unterabschnitte unterteilt:
- [Function Module](#funktion-module) (4) zeigt den Namen und die Beschreibung des gewählten Funktionsbausteins / BAPIs an.
- [Advanced Settings](#advanced-settings) (5) definieren, wie Daten aus SAP extrahiert werden.
- [Function Module Interface Parameters](#function-module-interface-parameters) (6) definieren welche Daten an und von SAP gesendet werden.

![yunIO-function-module](/img/content/yunio/bapi-settings.png){:class="img-responsive"}

### Function Module

Der Name und die Beschreibung des gewählten Funktionsbausteins / BAPIs werden im Abschnitt **Function Module** angezeigt.<br>
Um einen neuen Funktionsbaustein / BAPI auszuwählen, klicken Sie auf **Select** in der oberen rechten Ecke des Abschnitts.

### Advances Settings

#### Commits Transactions
Wenn diese Option aktiv ist, wird der Funktionsbaustein “BAPI_TRANSACTION_COMMIT” zum Abschließen der Transaktion ausgeführt. 
Diese Option ist für einige SAP Funktionsbausteine (z.B. BAPI_PO_CREATE) erforderlich, um Daten in der Datenbank zu aktualisieren.

### Function Module Interface Parameters

Im Abschnitt *Function Module Interface Parameters* werden alle verfügbaren Parameter des Funktionsbausteins / BAPIs angezeigt.
Funktionsbausteine /BAPIs können bis zu vier Parametertypen haben: [Import](#import-parameter), [Export](#export-parameter), [Changing](#changing-parameter) and [Table](#table-parameter).

## Import-Parameter

Import-Parameter repräsentieren die Eingabewerte, die vom Client an SAP gesendet werden. 
Im Tab **Import** können Sie Eingabeparameter definieren.

Wählen Sie Ihre Eingabeparameter über die entsprechende Drop-down-Liste aus:
- Felder, die auf *Supplied by Caller* stehen, sind im Request Body des Services als Parameter verfügbar und können zur Laufzeit gesetzt werden.
- Felder, die auf *Default (defined in SAP)* stehen, verwenden die Standardwerte aus SAP.
- Felder, die auf *Constant* stehen, verwenden den Wert, der unter **Value** eingetragen wird.

![BAPI export parameters](/img/content/yunio/BAPI-input.png){:class="img-responsive"}

{: .box-note }
**Hinweis:** Achten Sie beim Parametrieren darauf, den passenden Datentyp für Ihre Eingabewerte zu verwenden.<br>

#### Import Parameter im SwaggerHub verwenden

Beispiel: Der Import-Parameter MAXROWS der BAPI BAPI_CUSTOMER_GETLIST steht auf *Supplied by Caller* und kann somit über den Request Body des Services parametrisiert werden:<br>
![BAPI export parameters](/img/content/yunio/swagger-inspector-parameter.png){:class="img-responsive"}

Für mehr Informationen über die Parametrisierung von Services, siehe folgende Knowledge Base Artikel: 
- [Running a yunIO Service in SwaggerHub](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-swagger-hub) 
- [Running a yunIO Service in Postman](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-postman).


## Export-Parameter
Export-Parameter repräsentieren die Ausgabewerte, die von SAP zurück an den Client gesendet werden, nachdem die Funktion ausgeführt wurden.
Im Tab **Export** können Sie Ausgabeparameter definieren, die entweder als Skalarwerte oder Strukturen übergeben werden:
- Um ein Feld zu der Ausgabe des Funktionsbausteins / BAPIs hinzuzufügen, markieren Sie die entsprechende Checkbox.<br>
Optional: Sie können den Namen des Ausgabe-Parameters ändern. Bei Tabellen muss folgendes Format beibehalten werden: `[Tabellenname].[Spaltenname]`.

![BAPI export parameters](/img/content/yunio/BAPI-output.png){:class="img-responsive"}

## Changing-Parameter

Changing-Parameter repräsentieren Parameter, die sowohl für Eingabe als auch Ausgabe verwendet werden können.<br>
Im Tab **Changing** können Sie die entsprechenden Parameter definieren. 

## Tables-Parameter

Tables-Parameter haben eine Tabellenstruktur, die aus mehreren Zeilen besteht. 
Tabellen können als Eingabe und Ausgabe verwendet werden.

Im Tab **Tables** können Sie Tabellen-Parameter für den Import und Export zu und von einem Funktionsbaustein / BAPI definieren.

**Tabellen als Eingabeparameter:**<br>
- Tabellenfelder, die auf *Supplied by Caller* stehen, sind im Request Body des Services als Parameter verfügbar und können zur Laufzeit gesetzt werden.
- Tabellenelder, die auf *Default (defined in SAP)* stehen, verwenden die Standardwerte aus SAP.
- Tabellenelder, die auf *Constant* stehen, verwenden den Wert, der unter **Value** eingetragen wird.


**Tabellen als Ausgabeparameter**<br>
- Um ein Tabellenfeld zu der Ausgabe des Funktionsbausteins / BAPIs hinzuzufügen, markieren Sie die entsprechende Checkbox.<br>
Optional: Ändern Sie den Namen des Ausgabe-Parameters. Tabellen-Parameter verwenden folgendes Format: `[Tabellenname].[Spaltenname]`.

![BAPI table](/img/content/yunio/BAPI-table.png){:class="img-responsive"}

*****
#### Weiterführende Links
- [Integration Scenarios](./integration)
- [Knowledge Base Artikel: Integrating a yunIO Service with Power Automate](https://kb.theobald-software.com/yunio/integrating-a-yunio-service-with-power-automate)