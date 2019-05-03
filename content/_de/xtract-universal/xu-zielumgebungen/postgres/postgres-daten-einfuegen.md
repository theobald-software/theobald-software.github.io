---
ref: xu-postgres-04
layout: page
title: Daten einfügen
description: Daten einfügen
product: xtract-universal
parent: postgres
permalink: /:collection/:path
weight: 4
lang: de_DE
---

In diesem Beispiel laden wir eine Extraktion in die PostgreSQL-Datenbank.

**Extraktion definieren**

Wir definieren eine Extraktion basierend auf der Tabelle T001W für Werke.

![Exa-Table-Extraction-T001w](/img/content/xu/postgres_table_t001w.png){:class="img-responsive"}

**Destination festlegen**

Wir wählen eine Zielverbindung zur Datenbank. 

![Exa-Destination-Details](/img/content/xu/postgres_destination_details.png){:class="img-responsive"}

**Einstellungen festlegen**

Wir übernehmen die Default-Einstellungen.

![Exa-Extraction-Specific-Settings-T001w](/img/content/xu/postgres_destination.png){:class="img-responsive"}

Damit wird mit der Option "Drop & Create" eine Tabelle mit dem Namen T001W neu angelgt. Falls die Tabelle schon existiert, wird sie ggf. vorher von der Datenbank gelöscht.<br> 
Sie können sich das SQL-Statement dafür anschauen, dazu wählen Sie *Custom SQL* für Preparation und klicken Sie dann auf *Edit SQL*.

![Exa-Extraction-Specific-Settings-Custom-SQL](/img/content/xu/postgres_custom_sqlt.png){:class="img-responsive"}

Im neuen Fenster wählen Sie *Drop & Create* und klicken Sie auf *Generate Statement*. 

![Exa-Custom-SQL-Drop-And-Create](/img/content/xu/postgres_destination_sql_statement_drop_and_create.png){:class="img-responsive"}

Spalten werden mit dem entsprechenden Datentyp angelegt. Sie haben die Möglichkeit das SQL-Statement anzupassen bzw. ein anderes zu verwerden. Wir belassen es bei der Standard-Option *Create & Drop* für Preparation.

**Extraktion ausführen**

Um die Extraktion auszuführen, klicken Sie auf den Button *Run*. Im Fenster Run Extraction klicken Sie erneut auf den Button *Run*. 

![Exa-Run-Extraction-T001w](/img/content/xu/postgres_run_extraction.png){:class="img-responsive"}

Im Designer klicken Sie auf Refresh, um sich den Status der Ausführung anzuschauen. In unserem Beispiel wurden 239 Datensätze in die Datenbank geladen.  

![Exa-Designer-Status](/img/content/xu/postgres_xu_designer_overview.png){:class="img-responsive"}

**Ergebnis in der Datenbank überprüfen**

In einem DB-Client Ihrer Wahl. können Sie sich Tabellenstruktur sowie -Inhalt  anschauen.

![Exa-Table-Extracted-Data](/img/content/xu/dbeaver_client_postgres.png){:class="img-responsive"}


