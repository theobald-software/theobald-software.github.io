---
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

Ziehen Sie das Toolbox-Icon für die Xtract IS Table Datenquelle auf Ihren Datenflusstask und klicken Sie doppelt darauf, um den Editor zu öffnen.

![Table-01](/img/content/Table-01.png){:class="img-responsive"}

Sie können zuvor mit dem erweiterten Editor (rechte Maustaste -> erweiterter Editor) einen Verbindungsmanager zuweisen. Wenn Sie das nicht tun, findet die Datenquelle den erstbesten Xtract-Verbindungsmanager automatisch. In der Regel ist das ausreichend.

Klicken Sie auf das Fernglas-Symbol, um eine Tabelle zu suchen. Im neuen Fenster tragen Sie den Namen der Tabelle ein. Sie können auch Wildcards (z.B. * ) verwenden. Klicken Sie wieder auf das Fernglas-Symbol, wählen sie eine Tabelle aus der Liste und bestätigen Sie mit OK.

![Table-02](/img/content/Table-02.png){:class="img-responsive"}

Der Editor ist jetzt mit allen Spalten der Tabelle gefüllt. Die Spalten, die extrahiert werden sollen, müssen vorne mit einem Häkchen markiert werden.

![Table-03](/img/content/Table-03.png){:class="img-responsive"}

Klicken Sie optional auf das *Preview*-Button, um die Extraktion im Preview zu sehen.

![Table-04](/img/content/Table-04.png){:class="img-responsive"}

Um das Ergebnis zu filtern, steht Ihnen ein großes Textfeld zu Verfügung, in dem Sie eine Where-Bedingung definieren können. 
Der eigegebene Ausdruck muss dem SAP OpenSQL Syntax entsprechen, beispielsweise muss der Ausdruck ein Leerzeichen vor und nach dem Operator enthalten. Achten Sie ebenfalls auf das Format der Werte, z.B. muss  ein Datum in der SAP-Schreibweise – also YYYYMMDD – eingetragen werden.

![Table-05](/img/content/Table-05.png){:class="img-responsive"}

**Variablen** 

Es ist auch möglich, SSIS-Variablen in dem Where-String zu verwenden, wie man das von SQL-Statements gewohnt ist. Definieren Sie beispielsweise eine Variable vkorg im Datenflusstask und formulieren Sie Ihr Where-Statement wie folgt: VKORG = @vkorg. Xtract IS erkennt anhand des @-Symbols, dass dieser Platzhalter ersetzt werden muss.

Sobald die Datenquelle entsprechend konfiguriert ist, stehen die Ausgabespalten für die weitere Verarbeitung zur Verfügung.