---
ref: xu-amzon-redshift-04
layout: page
title: Daten einfügen
description: Daten einfügen
product: xtract-universal
parent: redshift
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=redshift-daten-einfuegen
---

In diesem Beispiel laden wir eine Extraktion in eine Redshift-Datenbank.

**Extraktion definieren**

Wir definieren eine auf der Tabelle T001W für Werke basierende Extraktion.

![XU_redshift_table_extraction](/img/content/XU_redshift_table_extraction.png){:class="img-responsive"}

**Destination festlegen**

Wir wählen eine Zielverbindung zur Datenbank.

![XU_redshift_destination](/img/content/XU_redshift_destination.png){:class="img-responsive"}

**Einstellungen festlegen**

Wir übernehmen die Standardeinstellungen.

![XU_redshift_destination_settings](/img/content/XU_redshift_destination_settings.png){:class="img-responsive"}

Mit dem Preparation-Befehl Drop & Create wird eine neue Tabelle mit dem Namen T001W angelegt. Falls diese Tabelle bereits existiert, wird sie vorher gelöscht und daraufhin neu angelegt.<br>
Optional kann das SQL-Statement auch angeschaut werden. Dafür muss Custom SQL ausgewählt werden und dann auf den Button Edit SQL geklickt werden.


![XU_redshift_destination_customsql](/img/content/XU_redshift_destination_customsql.png){:class="img-responsive"}

Im neuen Fenster kann dann der gewünschte Befehl (z.B. Drop & Create) ausgewählt und mit einem Klick auf "Generate Statement" automatisch generiert werden.

![XU_redshift_destination_customsql2](/img/content/XU_redshift_destination_customsql2.png){:class="img-responsive"}

Spalten werden mit dem am besten passenden Datentypen angelegt.


**Extraktion ausführen**

Um die Extraktion auszuführen, klicken wir auf den Button Run. Im Run Extraction Dialog klicken wir dann auf *Run* in xu.exe oder *Run* in Browser. Die Extraktion wird nun ausgeführt.

![XU_redshift_run_dialog](/img/content/XU_redshift_run_dialog.png){:class="img-responsive"}

Um den Status der Extraktion zu aktualisieren, klicken wir im Designer auf Refresh. In diesem Beispiel wurden 238 Datensätze in die Datenbank geschrieben.

![XU_redshift_extraction_overview](/img/content/XU_redshift_extraction_overview.png){:class="img-responsive"}

