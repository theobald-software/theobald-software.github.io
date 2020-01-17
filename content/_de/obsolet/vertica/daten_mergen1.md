---
ref: xu-hp-vertica-05
layout: page
title: Daten mergen
description: Daten mergen
product: xtract-universal
parent: vertica
permalink: /:collection/:path
weight: 5
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=daten_mergen1
---

In diesem Beispiel wollen wir bestehende Datensätze aktualisieren.<br>
Es ist wichtig, dass ein entsprechender Index anlegt ist, um den Merge-Befehl schnell auszuführen. Ohne einen Index würde die Ausführung des Merge-Befehls abhängig von der Datenmenge sehr lange dauern. 

Schauen wir uns den Datensatz für das Werk 1000 an, das Feld NAME2 hat den Wert NULL.

![XU_Vertica_Vertica_DBVusializer_WERKS1000](/img/content/XU_Vertica_Vertica_DBVusializer_WERKS1000.png){:class="img-responsive"}

Überschreiben wir nun das Feld NAME2 mit dem Wert 'WERK HAMBURG'.

![XU_Vertica_Vertica_DBVisualizer_UPDATE](/img/content/XU_Vertica_Vertica_DBVisualizer_UPDATE.png){:class="img-responsive"}

Nun ändern wir die Destination Einstellungen und setzen 

- Preparation auf *Prepare Merge*, um eine temporäte Staging-Tabelle anzulegen.
- Row Processing auf *Fill merge staging table*, um Daten in die Staging-Tabelle einzufügen und 
- Finalization auf *Finalize Merge*, um die Staging-Tabelle mit der Zieltabelle zu mergen und anschließen die Staging-Tabelle zu löschen.

![XU_Vertica_Vertica_Merge_Setting](/img/content/XU_Vertica_Vertica_Merge_Setting.png){:class="img-responsive"}

Der *Prepare Merge* Befehl erstellt eine temporäre Staging Tabelle auf der Datenbank.

![XU_Vertica_Vertica_SQL_Prepare_Merge](/img/content/XU_Vertica_Vertica_SQL_Prepare_Merge.png){:class="img-responsive"}

Der *Finalize Merge* Befehl sorgt dafür, dass neue Datensätze eingefügt bzw. bestehende aktualisiert werden. <br>
Bei bestehenden Datensätzen wird ein Update ausgeführt, sonst ein Insert.

Welche Felder aktualisiert werden, kann man dem SQL-Statement entnehmen. <br>
Hier kann man das SQL-Statement bei Bedarf ändern, um z.B. bestimmte Spalten von der Aktualisierung auszuschließen.<br>
Felder, welche nicht im SQL-Statement auftauchen, sind von Änderungen nicht betroffen.

![XU_Vertica_Vertica_SQL_Finalize_Merge](/img/content/XU_Vertica_Vertica_SQL_Finalize_Merge.png){:class="img-responsive"}

Nach der Ausführung wurde das Feld NAME2 mit dem Wert aus SAP aktualisiert.