---
ref: xu-postgres-05
layout: page
title: Daten mergen
description: Daten mergen
product: xtract-universal
parent: postgres
permalink: /:collection/:path
weight: 5
lang: de_DE
---

In diesem Beispiel wollen wir bestehende Datensätze aktualisieren.<br>
Es ist wichtig, dass ein entsprechender Index anlegt ist, um den Merge-Befehl schnell auszuführen. Ohne einen Index würde die Ausführung des Merge-Befehls abhängig von der Datenmenge sehr lange dauern. 

Schauen wir uns den Datensatz für das Werk 1200 an, das Feld NAME2 hat den Wert NULL.

![Select-Before-Merge](/img/content/xu/select_werks_1200.png){:class="img-responsive"}

Überschreiben wir nun das Feld NAME2 mit dem Wert 'Hamburg'.

![Update-Merge-Example-Data](/img/content/xu/update_werks_1200.png){:class="img-responsive"}

Nun ändern wir die extraktionsspezifischen Einstellungen und setzen 

- Preparation auf *Prepare Merge,* um eine temporäte Staging-Tabelle anzulegen.
- Row Processing auf *Fill merge staging table*, um Daten in die Staging-Tabelle einzufügen und 
- Finalization auf *Finalize Merge*, um die Staging-Tabelle mit der Zieltabelle zu mergen und anschließen die Staging-Tabelle zu löschen.

![Extraction-Specific-Settings-Merge-Makt](/img/content/xu/destination_data_merge.png){:class="img-responsive"}

Der Merge-Befehl sorgt dafür, dass neue Datensätze eingefügt bzw. bestehende aktualisiert werden. <br>
Bei bestehenden Datensätzen wird ein Update ausgeführt, sonst ein Insert.

Welche Felder aktualisiert werden, kann man dem SQL-Statement entnehmen. <br>
Hier kann man das SQL-Statement bei Bedarf ändern, um z.B. bestimmte Spalten von der Aktualisierung auszuschließen.<br>
Felder, welche nicht im SQL-Statement auftauchen, sind von Änderungen nicht betroffen.

Bei der Ausführung wurde das Feld *NAME2* mit dem Wert aus SAP aktualisiert.

![Merge-Result-Table-Data](/img/content/xu/merge_name2_werks_1200.png){:class="img-responsive"}

