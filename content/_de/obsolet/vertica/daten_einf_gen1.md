---
ref: xu-hp-vertica-05
layout: page
title: Daten einfügen
description: Daten einfügen
product: xtract-universal
parent: vertica
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=daten_einf_gen1
---

In diesem Beispiel laden wir eine Extraktion in eine Vertica Datenbanktabelle.

**Extraktion definieren**

Wir definieren eine Extraktion basierend auf der SAP Tabelle T001W für Werke.

![XU_Vertica_Table_T001W](/img/content/XU_Vertica_Table_T001W.png){:class="img-responsive"}

**Destination festlegen** 

Wir wählen eine Zielverbindung zur Datenbank.

![XU_Vertica_destination_details](/img/content/XU_Vertica_destination_details.png){:class="img-responsive"}

**Einstellungen festlegen** 

Wir übernehmen die Default-Einstellungen.

![XU_Vertica_Destination](/img/content/XU_Vertica_Destination.png){:class="img-responsive"}

Damit wird mit der Option "Drop & Create" eine Tabelle mit dem Namen "SAP_Plants" neu angelegt.<br>
Falls die Tabelle schon existiert, wird sie vorher von der Datenbank gelöscht. 

Sie können sich das SQL-Statement dafür anschauen, dazu wählen Sie unter Preparation den Eintrag *Custom SQL* und klicken dann auf *Edit SQL*.

![XU_Vertica_CustomSQL](/img/content/XU_Vertica_CustomSQL.png){:class="img-responsive"}

Im neuen Fenster wählen Sie *Drop & Create* und klicken auf *Generate Statement*.

![XU_Vertica_Custom_SQL_DropCreate](/img/content/XU_Vertica_Custom_SQL_DropCreate.png){:class="img-responsive"}

Tabellenspalten werden mit entsprechendem Datentyp angelegt.<br>
Sie haben die Möglichkeit das SQL-Statement anzupassen bzw. ein anderes zu verwenden. Wir belassen es bei der Standard-Option *Create & Drop* für Preparation. 


**Extraktion ausführen**

Um die Extraktion auszuführen, klicken Sie auf den Button Run. Im Fenster Run Extraction klicken Sie auf einen der beiden Run Buttons.

![XU_Vertica_Vertica_RunExtraction](/img/content/XU_Vertica_Vertica_RunExtraction.png){:class="img-responsive"}

Im Designer klicken Sie auf den Button Refresh, um sich den Status der Ausführung anzuschauen. In unserem Beispiel wurden 238 Datensätze in die Datenbank geladen.

![XU_Vertica_extraction](/img/content/XU_Vertica_extraction.png){:class="img-responsive"}

**Überprüfen Sie das Ergebnis in der Datenbank**
 
In einem Datenbankeditor können Sie sich Tabellenstruktur sowie -inhalt anschauen.

![XU_Vertica_Vertica_Extraction_Result](/img/content/XU_Vertica_Vertica_Extraction_Result.png){:class="img-responsive"}