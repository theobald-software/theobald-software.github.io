---
ref: xu-microsoft-sql-server-03
layout: page
title: Einstellungen
description: Einstellungen
product: xtract-universal
parent: microsoft-sql-server
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=sql-server-einstellungen
---

Wenn Sie auf die **Destination** Schaltfläche klicken, können Sie extraktionsspezifische Einstellungen bezüglich des Ziels festlegen.

![ext_spec_set_de_form_debug](/img/content/ext_spec_set_de_form_debug.jpg){:class="img-responsive"}

{% include _content/de/xu-specific/xu-destinations/general/table-name.md %}

{% include _content/de/xu-specific/xu-destinations/general/column-name-style.md %}

{% include _content/de/xu-specific/xu-destinations/general/date-conversion.md %}

{% include _content/de/xu-specific/xu-destinations/general/sql-commands.md %}

**Transaction style**

**One Transaction** <br>
Prepare, Row Processing und Finalization werden in einer einer einzigen Transaktion ausgeführt.<br>
Vorteil: sauberer Rollback aller Änderungen.<br>
Nachteil: ggf. umfangreiches Locking während der gesamten Extraktionsdauer 


**Three Transactions**<br>
Prepare, Row Processing und Finalization werden jeweils in einer eigenen Transaktion ausgeführt.<br>
Vorteil: sauberer Rollback der einzelnen Abschnitte, evtl. kürzere Locking-Phasen als bei One Transaction (z. B. bei DDL im Prepare wird die gesamte DB nur beim Prepare gelockt und nicht für die gesamte Extraktionsdauer)<br>
Nachteil: Kein Rollback von vorangegangen Schritt möglich (Fehler im Row Processing rollt nur Row-Processing-Änderungen zurück, aber nicht Prepare) 


**RowProcessingOnly**<br> 
Nur Row Processing wird in einer Transaktion ausgeführt. Prepare und Finalization ohne explizite Transaktion (implizite commits).<br>
Vorteil: DDL im Perpare und Finalization bei DMBS, die kein DDL in expliziten Transaktionen zulassen (z. B. AzureDWH)<br>
Nachteil: Kein Rollback von Prepare/Finalization, auch nicht als Teilschritt 


**No Transaction**<br>
Keine expliziten Transaktionen.<br>
Vorteil: Keine Transaktionsverwaltung durch DBMS benötigt (Locking, DB-Transaktionslog, etc.). Dadurch kein Locking und evtl. Performancevorteile<br>
Nachteil: Kein Rollback
