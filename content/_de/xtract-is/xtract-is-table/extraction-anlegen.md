---
ref: xi-table-01
layout: page
title: Tabellen extrahieren
description: Tabellen extrahieren
product: xtract-is
parent: xtract-is-table
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=tabellen-extrahieren
---

Ziehen Sie die Komponente aus der SSIS-Toolbox auf Ihre Datenflussaufgabe. Doppelklicken Sie auf das Symbol, um den Editor zu öffnen.

![Table-01](/img/content/Table-01.png){:class="img-responsive" width="200px" }


Klicken Sie auf die Schaltfläche *Hinzufügen*, um einen Dialog zur Tabellensuche zu öffnen. Geben Sie den Namen der Tabelle ein (Wildcards wie * werden unterstützt) und klicken Sie auf die Schaltfläche *Sichtglas*, um die Suche aufzurufen. Markieren Sie die Tabelle in der Ergebnisliste und klicken Sie auf OK.

![Table-Lookup](/img/content/Table-Lookup.png){:class="img-responsive" width="600px" }

Der Editor ist nun mit allen Spalten der Tabelle gefüllt. Die Spalten werden automatisch für die Tabellenextraktion ausgewählt. Deaktivieren Sie die Markierungen, die Sie nicht extrahieren möchten.
Durch Anklicken der Kopffelder können Sie die Spalten nach Name oder Beschreibung sortieren. Beginnen Sie mit der Eingabe eines Spaltennamens oder einer Beschreibung in die Filterfelder, um einen Anzeigefilter anzuwenden.

![Table-Main](/img/content/Table-Main.png){:class="img-responsive"}

Klicken Sie auf die Schaltfläche *Load live preview*, um 100 Datensätze zur Vorschau zu laden.

Wenn Sie nur bestimmte Tabellendaten extrahieren möchten, können Sie eine where-Bedingung verwenden. Siehe Kapitel *WHERE clause*.

Sobald die Datenquelle entsprechend konfiguriert ist, stehen die Ausgabespalten für die weitere Verarbeitung zur Verfügung.


