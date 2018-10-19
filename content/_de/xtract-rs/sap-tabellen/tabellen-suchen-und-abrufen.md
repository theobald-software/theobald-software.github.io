---
ref: xr-sap-tables-01
layout: page
title: Tabellen suchen und abrufen
description: Tabellen suchen und abrufen
product: xtract-rs
parent: sap-tabellen
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /Xtract-RS-DE/default.aspx?pageid=tabellen-suchen-und-abrufen
---

Um eine Tabelle zu suchen, klicken Sie auf den Fernglas-Button. Es erscheint ein Dialog, mit dem Sie nach einer Tabelle suchen können. Auch per Wildcard ( * ).

![Table-Search-001](/img/content/Table-Search-001.png){:class="img-responsive"}


Markieren Sie die Tabelle und Bestätigen Sie mit *OK*. Nun werden die Metadaten (Spaltennamen der Tabelle und Datentypen) aus dem SAP Data Dictionary abgerufen. Markieren Sie die Spalten, die Sie extrahieren möchten mit einem Häkchen.

![Table-Search-002](/img/content/Table-Search-002.png){:class="img-responsive"}

Im Textfeld des unteren Bereichs können Sie eine WHERE-Klausel eintragen. 

**Achtung!!** Es handelt sich dabei um das SAP-eigene Open SQL. Im Gegensatz zum klassischen SQL vom SQL Server, ist dieses SQL im Funktionsumfang erheblich eingeschränkt.