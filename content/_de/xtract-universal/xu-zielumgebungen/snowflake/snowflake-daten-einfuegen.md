---
ref: xu-snowflake-04
layout: page
title: Daten einfügen
description: Daten einfügen
product: xtract-universal
parent: snowflake
permalink: /:collection/:path
weight: 4
lang: de_DE
---

In diesem Beispiel laden wir eine SAP Extraktion in die Snowflake-Datenbank.

**Extraktion definieren**

Wir definieren eine Extraktion basierend auf der Tabelle T001W für Werke.

![Table-Extraction-T001w](/img/content/xu/xu-table-t001w-main.png){:class="img-responsive"}
![Table-Extraction-T001w-Where](/img/content/xu/xu-table-t001w-where.png){:class="img-responsive"}


**Destination festlegen**

Wir wählen eine Zielverbindung zur Datenbank. 

![Snowflake-Destination](/img/content/xu/snowflake/snowflake-destination-details_1.png){:class="img-responsive"}

**Einstellungen festlegen**

Wir übernehmen die Default-Einstellungen.
![Snowflake-Extraction-Specific-Settings-T001w](/img/content/xu/snowflake/snowflake-destination-spec-settings-t001w.png){:class="img-responsive"}

Damit wird mit der Option "Drop & Create" eine Tabelle mit dem Namen T001W neu angelegt. Falls die Tabelle schon existiert, wird sie ggf. vorher von der Datenbank gelöscht. <br>
Sie können sich das SQL-Statement dafür anschauen, dazu wählen Sie *Custom SQL* für Preparation und klicken Sie dann auf *Edit SQL*.
Im neuen Fenster wählen Sie *Drop & Create* und klicken Sie auf *Generate Statement*. 

![Snowflake-Drop-And-Create](/img/content/xu/snowflake/snowflake-t001w-drop-and-create.png){:class="img-responsive"}

Spalten werden mit dem entsprechenden Datentyp angelegt. Sie haben die Möglichkeit das SQL-Statement anzupassen bzw. ein anderes zu verwerden. Wir belassen es bei der Standard-Option *Create & Drop* für Preparation.

Die Daten werden mit der Option "Copy data to table" von der Staging-Schicht in die Tabelle mit dem Namen T001W kopiert. <br>
Sie können sich das SQL-Statement dafür anschauen, dazu wählen Sie *Custom SQL* für Row Processing und klicken Sie dann auf *Edit SQL*.
Im neuen Fenster wählen Sie *Copy data to table* und klicken Sie auf *Generate Statement*. 
![Snowflake-Copy-data-to-table](/img/content/xu/snowflake/snowflake-t001w-copy-data-into-table.png){:class="img-responsive"}

**Extraktion ausführen**

Um die Extraktion manuell auszuführen, klicken Sie auf die Extrkation mit der rechten Maustaste und wählen Sie Run in xu.exe.

![Snowflake-Run-in-xuexe](/img/content/xu/snowflake/snowflake-t001w-run-in-xuexe.png){:class="img-responsive"}

Sie können die Kommandozeile schließen. Im Designer klicken Sie auf Refresh, um sich den Status der Ausführung anzuschauen. 
Bei einer erfolgreichen Extraktion sehen Sie ein grünes Icon in der Status-Spalte. 
In unserem Beispiel wurden 239 Datensätze in die Datenbank geladen.  

![Snowflake-Designer-Status](/img/content/xu/snowflake/snowflake-t001w-designer-status.png){:class="img-responsive"}

**Ergebnis in der Datenbank überprüfen**

Loggen Sie sich in Ihrem Snowflake Portal. Dort können Sie sich sowohl die Tabellenstruktur als auch den Inhalt anschauen.

![Snowflake-Extraction-Table-Data](/img/content/xu/snowflake/snowflake-t001w-worksheet-preview.png){:class="img-responsive"}
