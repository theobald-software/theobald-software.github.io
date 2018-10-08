---
layout: page
title: Daten mergen
description: Daten mergen
product: xtract-universal
parent: ibm-db2
permalink: /:collection/:path
weight: 5
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=db2-daten-mergen
---

In diesem Beispiel wollen wir bestehende Datensätze aktualisieren.<br>
Es ist wichtig, dass ein entsprechender Index anlegt ist, um den Merge-Befehl schnell auszuführen. Ohne einen Index würde die Ausführung des Merge-Befehls abhängig von der Datenmenge sehr lange dauern. 

Schauen wir uns den Datensatz für das Werk 1000 an, das Feld NAME2 hat den Wert NULL.

![DB2-Select-Before-Merge](/img/content/DB2-Select-Before-Merge.jpg){:class="img-responsive"}

Überschreiben wir nun das Feld NAME2 mit dem Wert 'Hamburg'.

![DB2-Update-Merge-Example-Data](/img/content/DB2-Update-Merge-Example-Data.jpg){:class="img-responsive"}

Nun ändern wir die extraktionsspezifischen Einstellungen und setzen Preparation auf *Create if Not Exists* und Row Processing auf *Merge*, um die vorhandene Tabelle zu verwenden. Alternativ können Sie Preparation auf None setzen, wenn die Tabelle schon vorhanden ist.


![DB2-Extraction-Specific-Settings-Merge](/img/content/DB2-Extraction-Specific-Settings-Merge.jpg){:class="img-responsive"}

Der Merge-Befehl sorgt dafür, dass neue Datensätze eingefügt bzw. bestehende aktualisiert werden. <br>
Bei bestehenden Datensätzen wird ein Update ausgeführt, sonst ein Insert.


![DB2-Edit-SQL-Merge-Statement](/img/content/DB2-Edit-SQL-Merge-Statement.jpg){:class="img-responsive"}

Welche Felder aktualisiert werden, kann man dem SQL-Statement entnehmen. <br>
Hier kann man das SQL-Statement bei Bedarf ändern, um z.B. bestimmte Spalten von der Aktualisierung auszuschließen.<br>
Felder, welche nicht im SQL-Statement auftauchen, sind von Änderungen nicht betroffen.

Bei der Ausführung wurde das Feld NAME2 mit dem Wert aus SAP aktualisiert.

![DB2-Select-After-Merge](/img/content/DB2-Select-After-Merge.jpg){:class="img-responsive"}

