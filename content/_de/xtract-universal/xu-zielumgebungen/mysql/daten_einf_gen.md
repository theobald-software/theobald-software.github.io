---
ref: xu-mysql-04
layout: page
title: Daten einfügen
description: Daten einfügen
product: xtract-universal
parent: mysql
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=daten_einf_gen
---

In diesem Beispiel laden wir eine Extraktion in eine MySQL Datenbanktabelle.


**Extraktion definieren** <br>
Wir definieren eine Extraktion basierend auf der SAP Tabelle T001W für Werke.

![mysql_table_extraction_T001W](/img/content/mysql_table_extraction_T001W.png){:class="img-responsive"}

**Destination festlegen** <br>
Wir wählen eine Zielverbindung zur Datenbank.

![mysql_Destination_Details2](/img/content/mysql_Destination_Details2.png){:class="img-responsive"}

**Einstellungen festlegen** <br>
Wir übernehmen die Default-Einstellungen.

![mysql_extraction_specific_settings2](/img/content/mysql_extraction_specific_settings2.png){:class="img-responsive"}

Damit wird mit der Option "Drop & Create" eine Tabelle mit dem Namen T001W neu angelegt.<br>
Falls die Tabelle schon existiert, wird sie vorher von der Datenbank gelöscht. 

Sie können sich das SQL-Statement dafür anschauen, dazu wählen Sie unter Preparation den Eintrag *Custom SQL* und klicken dann auf *Edit SQL*.

![mysql_extraction_specific_settings_custom_SQL](/img/content/mysql_extraction_specific_settings_custom_SQL.png){:class="img-responsive"}

Im neuen Fenster wählen Sie *Drop & Create* und klicken auf *Generate Statement*.

![mysql_extraction_specific_settings_generate_statement](/img/content/mysql_extraction_specific_settings_generate_statement.png){:class="img-responsive"}

Tabellenspalten werden mit entsprechendem Datentyp angelegt.<br>
Sie haben die Möglichkeit das SQL-Statement anzupassen bzw. ein anderes zu verwenden. Wir belassen es bei der Standard-Option Create & Drop für Preparation. 


**Extraktion ausführen**<br> 
Um die Extraktion auszuführen, klicken Sie auf den Button *Run*. Im Fenster Run Extraction klicken Sie auf einen der beiden *Run* Buttons.

![mysql_table_extraction_T001W_Run](/img/content/mysql_table_extraction_T001W_Run.png){:class="img-responsive"}

Im Designer klicken Sie auf den Button Refresh, um sich den Status der Ausführung anzuschauen. In unserem Beispiel wurden 238 Datensätze in die Datenbank geladen.

![mysql_table_extraction_T001W_Run_Result](/img/content/mysql_table_extraction_T001W_Run_Result.png){:class="img-responsive"}

**Überprüfen Sie das Ergebnis in der Datenbank** <br>
In der MySQL Workbench können Sie sich Tabellenstruktur sowie -inhalt anschauen.

![mysql_table_extraction_T001W_Editor_Result](/img/content/mysql_table_extraction_T001W_Editor_Result.png){:class="img-responsive"}


