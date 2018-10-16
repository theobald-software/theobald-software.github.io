---
ref: xu-exasol-05
layout: page
title: Daten mergen
description: Daten mergen
product: xtract-universal
parent: exasol
permalink: /:collection/:path
weight: 5
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=exasol-daten-mergen
---

In diesem Beispiel wollen wir bestehende Datensätze aktualisieren.<br>
Es ist wichtig, dass ein entsprechender Index anlegt ist, um den Merge-Befehl schnell auszuführen. Ohne einen Index würde die Ausführung des Merge-Befehls abhängig von der Datenmenge sehr lange dauern. 

Schauen wir uns den Datensatz für das Werk 1000 an, das Feld NAME2 hat den Wert NULL.

![Exa-Select-Before-Merge](/img/content/Exa-Select-Before-Merge.jpg){:class="img-responsive"}

Überschreiben wir nun das Feld NAME2 mit dem Wert 'Hamburg'.

![Exa-Update-Merge-Example-Data](/img/content/Exa-Update-Merge-Example-Data.jpg){:class="img-responsive"}

Nun ändern wir die extraktionsspezifischen Einstellungen und setzen 

- Preparation auf *Prepare Merge,* um eine temporäte Staging-Tabelle anzulegen.
- Row Processing auf *Fill merge staging table*, um Daten in die Staging-Tabelle einzufügen und 
- Finalization auf *Finalize Merge*, um die Staging-Tabelle mit der Zieltabelle zu mergen und anschließen die Staging-Tabelle zu löschen.

![Exa-Extraction-Specific-Settings-Merge-Makt](/img/content/Exa-Extraction-Specific-Settings-Merge-Makt.jpg){:class="img-responsive"}

Der Merge-Befehl sorgt dafür, dass neue Datensätze eingefügt bzw. bestehende aktualisiert werden. <br>
Bei bestehenden Datensätzen wird ein Update ausgeführt, sonst ein Insert.

Welche Felder aktualisiert werden, kann man dem SQL-Statement entnehmen. <br>
Hier kann man das SQL-Statement bei Bedarf ändern, um z.B. bestimmte Spalten von der Aktualisierung auszuschließen.<br>
Felder, welche nicht im SQL-Statement auftauchen, sind von Änderungen nicht betroffen.

Bei der Ausführung wurde das Feld *NAME2* mit dem Wert aus SAP aktualisiert.

![Exa-Merge-Result-Table-Data](/img/content/Exa-Merge-Result-Table-Data.jpg){:class="img-responsive"}
