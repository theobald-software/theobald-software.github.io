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

Ziehen Sie das Toolbox-Icon für die Xtract IS Table Datenquelle auf Ihren Datenflusstask und klicken Sie doppelt darauf, um den Editor zu öffnen.

![Table-01](/img/content/Table-01.png){:class="img-responsive"}

Sie können zuvor mit dem erweiterten Editor (rechte Maustaste -> erweiterter Editor) einen Verbindungsmanager zuweisen. Wenn Sie das nicht tun, findet die Datenquelle den erstbesten Xtract-Verbindungsmanager automatisch. In der Regel ist das ausreichend.

Klicken Sie auf das Fernglas-Symbol, um eine Tabelle zu suchen. Im neuen Fenster tragen Sie den Namen der Tabelle ein. Sie können auch Wildcards (z.B. * ) verwenden. Klicken Sie wieder auf das Fernglas-Symbol, wählen sie eine Tabelle aus der Liste und bestätigen Sie mit OK.

![Table-02](/img/content/Table-02.png){:class="img-responsive"}

Der Editor wird *default* mit sämtlcihen Spalten der Tabelle gefüllt. Über die Buttons *Select All* und *Select None* können diese an- oder abgewählt werden.

In diesem Beispiel wurden lediglich vier Spalten angehakt und für die Extraktion ausgewählt.

![Table-03](/img/content/define_data_source_XIS_table.png){:class="img-responsive"}

Um das Ergebnis zu filtern, steht Ihnen ein großes Textfeld zu Verfügung, indem Sie eine Where-Bedingung definieren können. 
In diesem Beispiel wurde wie folgt selektiert: <br>
*(VKORG = '1000' OR VKORG = '2000') AND ERDAT > '20010101'*

Der eigegebene Ausdruck muss dem SAP OpenSQL Syntax entsprechen, beispielsweise muss der Ausdruck ein Leerzeichen vor und nach dem Operator enthalten. 
Achten Sie ebenfalls auf das Format der Werte, z.B. muss  ein Datum in der SAP-Schreibweise – also YYYYMMDD – eingetragen werden.

Klicken Sie optional auf das *Preview*-Button, um die Extraktion als Vorschau zu sehen.

![Table-04](/img/content/preview_Xtract_IS_table.png){:class="img-responsive"}

**Variablen** 

Es ist auch möglich, SSIS-Variablen in dem Where-String zu verwenden, wie man das von SQL-Statements gewohnt ist. 
Definieren Sie beispielsweise eine Variable VKORG im Datenflusstask und formulieren Sie Ihr Where-Statement wie folgt: VKORG = @vkorg. 
Xtract IS erkennt anhand des @-Symbols, dass dieser Platzhalter ersetzt werden muss.

Sobald die Datenquelle entsprechend konfiguriert ist, stehen die Ausgabespalten für die weitere Verarbeitung zur Verfügung.