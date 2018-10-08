---
layout: page
title: Erweiterung für Hintergrundverarbeitung
description: Erweiterung für Hintergrundverarbeitung
product: xtract-universal
parent: erste-schritte-mit-xtract-table
permalink: /:collection/:path
weight: 8
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=erweiterung-fuer-hintergrundverarbeitung
---

Standardmäßig wird die Extraktion der Tabellendaten im Dialog durchgeführt, pro Datenpaket wird also ein Select auf die Originaltabelle durchgeführt und das entsprechende Datenpaket herausgeschnitten und gesendet.

Mit Hilfe der *Background Extraction* gibt es die Möglichkeit, die Selektion im Hintergrund durchzuführen und in einer Puffertabelle zwischenzuparken. Dieses Vorgehen ist ungünstig bei kleineren SAP-Tabellen und daher nur bei größeren Tabellen zu empfehlen .

In bestimmten Konstellationen kann dies eine deutliche Verbesserung der Performance bedeuten. Der Ablauf der Hintergrundverarbeitung funktioniert wie folgt:

Das Hintergrundprogramm wird anhand der vorgegebenen Selektion angestoßen. In der SM37 (Jobverwaltung) können Sie den Hintergrundjob während des Extraktionslaufes prüfen. 

- Das Hintergrundprogramm schreibt in die Tabelle ZXTRACTBUFFER für temporäre Daten.
- Die Daten werden aus der Tabelle ZXTRACTBUFFER heruntergeladen.
- Die temporären Daten werden wieder aus der Tabelle ZXTRACTBUFFER gelöscht.

Um die Erweiterung benutzen zu können, sind die Tabelle ZXTRACTBUFFER und der zusätzliche Funktionsbaustein Z_XTRACT_IS_TABLE_EX im SAP zu installieren.  

Eine Schritt-für-Schritt Anleitung finden Sie im Kapitel SAP Customizing - [Erweiterung für Hintergrundverarbeitung](../sap-customizing/erweiterung-fuer-hintergrundverarbeitung). 
