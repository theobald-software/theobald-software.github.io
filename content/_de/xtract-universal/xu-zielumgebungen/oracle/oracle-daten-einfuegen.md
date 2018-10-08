---
layout: page
title: Daten einfügen
description: Daten einfügen
product: xtract-universal
parent: oracle
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=oracle-daten-einfuegen
---

In diesem Beispiel laden wir eine Extraktion in die Oracle-Datenbank.

**Extraktion definieren**

Wir definieren eine Extraktion basierend auf der Tabelle T001W für Werke.

![Oracle-Table-Extraction-T001w](/img/content/Oracle-Table-Extraction-T001w.jpg){:class="img-responsive"}

**Destination festlegen**<br>
Wir wählen eine Zielverbindung zur Datenbank. 

![Oracle-Destination-Details](/img/content/Oracle-Destination-Details.jpg){:class="img-responsive"}

**Einstellungen festlegen**

Wir übernehmen die Default-Einstellungen.

![Oracle-Extraction-Specific-Settings-T001w](/img/content/Oracle-Extraction-Specific-Settings-T001w.jpg){:class="img-responsive"}

Damit wird mit der Option "Drop & Create" eine Tabelle mit dem Namen T001W neu angelgt. Falls die Tabelle schon existiert, wird sie ggf. vorher von der Datenbank gelöscht. 
Sie können sich das SQL-Statement dafür anschauen, dazu wählen Sie *Custom SQL* für Preparation und klicken Sie dann auf *Edit SQL*.

![Oracle-Extraction-Specific-Settings-Custom-SQL](/img/content/Oracle-Extraction-Specific-Settings-Custom-SQL.jpg){:class="img-responsive"}

Im neuen Fenster wählen Sie *Drop & Create* und klicken Sie auf *Generate Statement*. 


![Oracle-Custom-SQL-Drop-And-Create](/img/content/Oracle-Custom-SQL-Drop-And-Create.jpg){:class="img-responsive"}

Spalten werden mit dem entsprechenden Datentyp angelegt. Sie haben die Möglichkeit das SQL-Statement anzupassen bzw. ein anderes zu verwerden. Wir belassen es bei der Standard-Option Create & Drop für Preparation.

**Extraktion ausführen**

Um die Extraktion auszuführen, klicken Sie auf den Button *Run*. Im Fenster Run Extraction klicken Sie erneut auf den Button *Run*. 

![Oracle-Run-Extraction](/img/content/Oracle-Run-Extraction.jpg){:class="img-responsive"}

Im Designer klicken Sie auf Refresh, um sich den Status der Ausführung anzuschauen. In unserem Beispiel wurden 185 Datensätze in die Datenbank geladen.  

![Oracle-Designer-Status](/img/content/Oracle-Designer-Status.jpg){:class="img-responsive"}

**Ergebnis in der Oracle-Datenbank überprüfen**

Im Oracle SQL Developer können Sie sich Tabellenstruktur sowie -Inhalt  anschauen.

![Oracle-Table-Columns](/img/content/Oracle-Table-Columns.jpg){:class="img-responsive"}

![Oracle-Table-Data](/img/content/Oracle-Table-Data.jpg){:class="img-responsive"}


