---
ref: xtract-for-alteryx-99
layout: page
title: SAP Customizing - Z-Funktionsbaustein
description: SAP Customizing
product: xtract-for-alteryx
parent: xtract-for-alteryx

permalink: /:collection/:path
weight: 99
lang: de_DE
---

Um mögliche Einschränkungen bei der Extraktion von Tabellen zu umgehen oder andere Xtract Extraktionstypen zu nutzen, müssen Sie in Ihrem SAP-System bestimmte Einstellungen anpassen oder Z-Funktionsbausteine 
bzw. ABAP Framework von Theobald Software installieren.
Der folgende Abschnitt gibt einen Überblick über die Installation von benutzerdefinierten Funktionsbausteinen/ABAP-Framework und das Customizing des SAP-Systems.

### Z-Funktionsbausteine / ABAP Framework auf dem SAP-System

Die Z-Funktionsbausteine / ABAP-Framework werden als Teil der Theobald Software Produkte ausgeliefert und können mithilfe von Transportaufträgen (s.u.) installiert werden.
Für die folgenden Komponenten ist die Installation eines kundenspezifischen Funktionsbausteins/ABAP-Frameworks in SAP erforderlich:

- **Table** - Für die meisten Aktionen ist die Installation eines ABAP Frameworks notwendig. Siehe [Funktionsbaustein für Tabellen-Extraktion](https://help.theobald-software.com/de/xtract-is/sap-customizing/funktionsbaustein-fuer-table-extraktion). 
- Demnächst: **Report** - Die Installation eines Z-Funktionsbausteins ist notwendig, siehe [Report-Funktionsbaustein installieren](./sap-customizing/report-funktionsbaustein-installieren).

### Transportaufträge (Transport requests)
Die Transportaufträge von Theobald Software müssen von Ihrem SAP-Basis-Team in SAP importiert werden.
Die folgenden Transportaufträge finden Sie im ABAP-Unterordner des Installationsordners (z.B. `C:\Programme\XtractProduct\ABAP`):

- Demnächst: thtrans.zip - enthält den Z-Funktionsbaustein für die *Report Komponente*
- Z_THEO_READ_TABLE.zip - enthält den Z-Funktionsbaustein, die ABAP-Klassen und verschiedene DDIC-Objekte für die *Tabele Komponente*, anwendbar für SAP-Releases >= 740SP05
- Z_THEO_READ_TABLE-before_740SP05.zip - enthält den Z-Funktionsbaustein, die ABAP-Klassen und verschiedene DDIC-Objekte für die *Tabele Komponente*, anwendbar für SAP-Releases < 740SP05) 

Weiterführende Informationen zur Installation eines Transportauftrags finden Sie im Knowledgebase-Artikel [How to import an SAP Transport Request](https://kb.theobald-software.com/sap/how-to-import-an-sap-transport-request-with-the-transport-management-system-stms).

{% include _content/de/sap-customizing/funktionsbaustein-fuer-table-extraktion.md  %}