---
ref: xu-microsoft-sql-server-04
layout: page
title: Daten einfügen
description: Daten einfügen
product: xtract-universal
parent: microsoft-sql-server
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=sql-server-daten-einfuegen
progressstate: 3
---

In diesem Beispiel laden wir eine Extraktion in die Microsoft SQL-Datenbank.

**Extraktion definieren**

Wir definieren eine Extraktion basierend auf der Tabelle T001W für Werke.

![MSSql-Table-Extraction-T001w](/img/content/MSSql-Table-Extraction-T001w.png){:class="img-responsive"}

**Destination festlegen**

Wir wählen eine Zielverbindung zur Datenbank. 

![MSSql-Destination-Details-Integrated-Security](/img/content/MSSql-Destination-Details-Integrated-Security.png){:class="img-responsive"}

**Einstellungen festlegen**

Wir übernehmen die Default-Einstellungen.

![MSSql-Extraction-Specific-Settings-T001w](/img/content/MSSql-Extraction-Specific-Settings-T001w.png){:class="img-responsive"}

Damit wird mit der Option "Drop & Create" eine Tabelle mit dem Namen T001W neu angelegt. Falls die Tabelle schon existiert, wird sie ggf. vorher von der Datenbank gelöscht. <br>
Sie können sich das SQL-Statement dafür anschauen, dazu wählen Sie *Custom SQL* für Preparation und klicken Sie dann auf *Edit SQL*.

![MSSql-Extraction-Specific-Settings-Custom-SQL](/img/content/MSSql-Extraction-Specific-Settings-Custom-SQL.png){:class="img-responsive"}

Im neuen Fenster wählen Sie *Drop & Create* und klicken Sie auf *Generate Statement*. 

![MSSql-Custom-SQL-Drop-And-Create](/img/content/MSSql-Custom-SQL-Drop-And-Create.png){:class="img-responsive"}

Spalten werden mit dem entsprechenden Datentyp angelegt. Sie haben die Möglichkeit das SQL-Statement anzupassen bzw. ein anderes zu verwerden. Wir belassen es bei der Standard-Option *Create & Drop* für Preparation.

**Extraktion ausführen**

Um die Extraktion auszuführen, klicken Sie auf den Button *Run*. Im Fenster Run Extraction klicken Sie erneut auf den Button *Run*. 

![MSSql-Run-Extraction](/img/content/MSSql-Run-Extraction.png){:class="img-responsive"}

Im Designer klicken Sie auf Refresh, um sich den Status der Ausführung anzuschauen. In unserem Beispiel wurden 185 Datensätze in die Datenbank geladen.  


**Ergebnis in der Datenbank überprüfen**

Im SQL Server Management Studio können Sie sich Tabellenstruktur sowie -Inhalt  anschauen.


![MSSql-Extraction-Table-Data](/img/content/MSSql-Extraction-Table-Data.png){:class="img-responsive"}
