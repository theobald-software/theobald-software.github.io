---
ref: xu-ibm-db2-04
layout: page
title: Daten Einfügen
description: Daten Einfügen
product: xtract-universal
parent: ibm-db2
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=db2-daten-einfuegen
---

In diesem Beispiel laden wir eine Extraktion in die Oracle-Datenbank.

**Extraktion definieren**

Wir definieren eine Extraktion basierend auf der Tabelle T001W für Werke.

![DB2-Table-Extraction-T001w](/img/content/DB2-Table-Extraction-T001w.png){:class="img-responsive"}

**Destination festlegen**

Wir wählen eine Zielverbindung zur Datenbank. 

![DB2-Destination-Details](/img/content/DB2-Destination-Details.png){:class="img-responsive"}

**Einstellungen festlegen**

Wir übernehmen die Default-Einstellungen.

![DB2-Extraction-Specific-Settings-T001w](/img/content/DB2-Extraction-Specific-Settings-T001w.png){:class="img-responsive"}

Damit wird mit der Option "Drop & Create" eine Tabelle mit dem Namen T001W neu angelgt. Falls die Tabelle schon existiert, wird sie ggf. vorher von der Datenbank gelöscht.<br> 
Sie können sich das SQL-Statement dafür anschauen, dazu wählen Sie *Custom SQL* für Preparation und klicken Sie dann auf *Edit SQL*.

![DB2-Extraction-Specific-Settings-Custom-SQL](/img/content/DB2-Extraction-Specific-Settings-Custom-SQL.png){:class="img-responsive"}

Im neuen Fenster wählen Sie *Drop & Create* und klicken Sie auf *Generate Statement*. 

![DB2-Custom-SQL-Drop-And-Create](/img/content/DB2-Custom-SQL-Drop-And-Create.png){:class="img-responsive"}

Spalten werden mit dem entsprechenden Datentyp angelegt. Sie haben die Möglichkeit das SQL-Statement anzupassen bzw. ein anderes zu verwerden. Wir belassen es bei der Standard-Option *Create & Drop* für Preparation.

**Extraktion ausführen**

Um die Extraktion auszuführen, klicken Sie auf den Button *Run*. Im Fenster Run Extraction klicken Sie erneut auf den Button *Run*. 

![DB2-Run-Extraction](/img/content/DB2-Run-Extraction.png){:class="img-responsive"}

Im Designer klicken Sie auf Refresh, um sich den Status der Ausführung anzuschauen. In unserem Beispiel wurden 185 Datensätze in die Datenbank geladen.  

![DB2-Designer-Status](/img/content/DB2-Designer-Status.png){:class="img-responsive"}

**Ergebnis in der Datenbank überprüfen**

Im IBM Data Studio können Sie sich Tabellenstruktur sowie -Inhalt  anschauen.

![DB2-Result-Table-Data](/img/content/DB2-Result-Table-Data.png){:class="img-responsive"}
