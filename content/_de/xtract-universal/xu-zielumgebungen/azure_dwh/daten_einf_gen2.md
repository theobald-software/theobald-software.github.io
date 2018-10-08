---
layout: page
title: Daten einfügen
description: Daten einfügen
product: xtract-universal
parent: azure_dwh
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=daten_einf_gen2
---

In diesem Beispiel laden wir eine Extraktion in eine Azure SQL Data Warehouse-Tabelle.


**Extraktion definieren** 

Wir definieren eine Extraktion basierend auf der SAP Tabelle T001W für Werke.

![XU_Vertica_Table_T001W](/img/content/XU_Vertica_Table_T001W.png){:class="img-responsive"}

**Zielumgebung auswählen und Einstellungen für Zielumgebung vornehmen**

Klicken Sie auf die Schaltfläche *Destination* und wählen die bereits angelegte Azure DWH Zielumgebung aus dem Drop Down Menü (siehe Abschnitt Verbindung). Behalten Sie die sonstigen Einstellungen bei.

![XU_Destination_Azure_DWH](/img/content/XU_Destination_Azure_DWH.jpg){:class="img-responsive"}

Damit wird mit der Option "Drop & Create" eine Tabelle mit dem Namen "T001W" neu angelegt.<br>
Falls die Tabelle schon existiert, wird sie vorher von der Datenbank gelöscht. 

Sie können sich das SQL-Statement dafür anschauen, dazu wählen Sie unter Preparation den Eintrag *Custom SQL* und klicken dann auf *Edit SQL*.

![XU_Azure_DWH_CustomSQL_Select](/img/content/XU_Azure_DWH_CustomSQL_Select.jpg){:class="img-responsive"}

Im neuen Fenster wählen Sie *Drop & Create* und klicken auf *Generate Statement*.

![XU_Azure_DWH_CustomSQL_SQL](/img/content/XU_Azure_DWH_CustomSQL_SQL.jpg){:class="img-responsive"}

Tabellenspalten werden mit entsprechendem Datentyp angelegt.<br>
Sie haben die Möglichkeit das SQL-Statement anzupassen bzw. ein anderes zu verwenden. Wir belassen es bei der Standard-Option Create & Drop für Preparation. 


**Extraktion ausführen** 

Um die Extraktion auszuführen, klicken Sie auf den Button *Run*. Im Fenster *Run Extraction* klicken Sie auf einen der beiden *Run* Buttons.

![XU_Vertica_Vertica_RunExtraction](/img/content/XU_Vertica_Vertica_RunExtraction.png){:class="img-responsive"}

Im Designer klicken Sie auf den Button Refresh, um sich den Status der Ausführung anzuschauen. In unserem Beispiel wurden 238 Datensätze in die Datenbank geladen.

![XU_AzureDWH_Extraction_Overview](/img/content/XU_AzureDWH_Extraction_Overview.jpg){:class="img-responsive"}
