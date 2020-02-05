---
ref: xu-amzon-redshift-05
layout: page
title: Daten mergen
description: Daten mergen
product: xtract-universal
parent: redshift
permalink: /:collection/:path
weight: 5
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=redshift-daten-mergen
---

In diesem Beispiel werden wir bestehende Datensätze aktualisieren.<br>
Es ist wichtig, dass ein entsprechender Index angelegt ist, da der Merge Befehl sonst fehlschlagen kann.<br>
In diesem Beispiel werden wir die Daten, die zuvor im Abschnitt "Daten einfügen" extrahiert wurden, verwenden.

Zunächst nehmen wir eine Veränderung an den extrahierten Daten vor. Wir werden das Feld name2 mit dem Wert 'Hamburg' überschreiben.

![RS-Merge-After-Update](/img/content/RS-Merge-After-Update.png){:class="img-responsive"}

Nun ändern wir die Extraction-Specific Settings und setzen
- Preparation auf Prepare Merge
- Row Processing auf Fill merge staging table
- Finalization auf Finalize Merge
um die bereits bestehende Tabelle zu aktualisieren.

![XU_redshift_merge](/img/content/XU_redshift_merge.png){:class="img-responsive"}

Der Merge-Befehl sorgt dafür, dass neue Datensätze eingefügt und bestehende Datensätze aktualisiert werden.<br>
Welche Felder aktualisiert werden, kann über den SQL-Befehl gesteuert werden.<br>
Der SQL-Befehl kann bei Bedarf verändert werden, um z.B. bestimmte Felder vom Update auszuschließen.<br>
Felder, die nicht im Merge-Befehl enthalten sind, werden nicht verändert.

In diesem Beispiel wird das Feld name2 mit den Daten aus dem SAP System aktualisiert.

![RS-Merge-Result](/img/content/RS-Merge-Result.png){:class="img-responsive"}

