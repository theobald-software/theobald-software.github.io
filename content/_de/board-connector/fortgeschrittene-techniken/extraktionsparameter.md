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

Der folgende Abschnitt beschreibt die Extraktionsparameter, die im Fenster "Run extractions" geändert werden können. 

![Extraction parameters](/img/content/xu/xu_run_extraction_param_gen_2.png){:class="img-responsive"}

Um das Fenster "Run extractions" zu öffnen, wählen Sie eine Extraktion im Hauptfenster des Designers und klicken Sie auf **[Run]** (siehe Details in [Eine Extraktion ausführen](../erste-schritte-mit-bc/eine-extraktion-ausfuehren)).


### "Parameters" Tab *Extraction*
Die Menge der Parameter hängt von dem Extraktionstyp und der Destination ab, z.B. ist **decimalSeparator** ein Parameter, der nur in der CSV-Destination vorhanden ist.

Parametername | Beschreibung | Spezielle Infos
------------ | ------------- | -------------
clearBuffer | leert den Ergebnis-Buffer | Default-Wert - false
preview | aktiviert die Preview | Default-Wert - false
source | ermöglicht das dynamische Auswählen eines SAP-Quellsystems aus dem die Daten extrahiert werden. Aktiv, wenn mehrere SAP-Quellsysteme verfügbar sind, z.B. sap_dev und sap_prod. | -
destination | ermöglicht das dynamische Auswählen einer Destination, in die die extrahierten Daten geschrieben werden. Aktiv, wenn mehrere Destinationen verfügbar sind, z.B. db_1 und db_2.| -
rows | setzt die maximale Anzahl der extrahierten Datensätze | verfügbar in Table
where | setzt die WHERE-Bedingung | verfügbar in Table
packageSize | setzt die Paketgröße | verfügbar in Table
decimalSeparator | setzt ein Symbol zwischen dem Ganzzahlteil und dem Bruchzahlteil | verfügbar in CSV
columnSeparator | setzt ein Symbol, das den Anfang einer Spalte bezeichnet | verfügbar in CSV


### "Parameters" Tab *Source*
![Source parameters](/img/content/xu/xu_run_extraction_param_gen.png){:class="img-responsive"}

In diesem Tab können Sie die Werte überschreiben, die in den [SAP-Source-Einstellungen](../einfuehrung/sap-verbindungen-anlegen)  definiert sind.


Parametername | Beschreibung |
------------ | ------------- | 
lang | ändert dynamisch die SAP-Anmeldesprache des SAP-Quellsystems  
logonTicket | ändert dynamisch das Anmeldeticket. Siehe [SSO mit SAP Logon Ticket](https://help.theobald-software.com/en/xtract-universal/advanced-techniques/sap-single-sign-on/sso-with-sap-logon-ticket) für mehr Details.

{: .box-note }
**Hinweis:** Der Parameter **logonTicket** kann nur gesetzt werden, wenn "SAP logon ticket" als Authentifizierungsmethode in den [SAP-Source-Einstellungen](../einfuehrung/sap-verbindungen-anlegen).


### "Parameters" Tab *Custom*

{: .box-note }
**Hinweis:** Der Tab "Custom" ist nur dann aktiv, wenn eine Variable mit dem @-Symbol in der [WHERE-Bedingung](../table/where-bedingung) definiert ist.

Um den vordefinierten Parameter einzustellen, markieren Sie die Checkbox und geben Sie den gewünschten Wert ein.
 
![Custom parameters](/img/content/xu/xu_run_extraction_param_cust.png){:class="img-responsive"}

