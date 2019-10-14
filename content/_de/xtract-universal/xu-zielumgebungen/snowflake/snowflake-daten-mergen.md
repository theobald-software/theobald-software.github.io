---
ref: xu-snowflake-05
layout: page
title: Daten mergen
description: Daten mergen
product: xtract-universal
parent: snowflake
permalink: /:collection/:path
weight: 5
lang: de_DE
---

In diesem Beispiel wollen wir Extraktionsdaten mit bestehenden Datensätzen zusammenführen.<br>

Eine Voraussetzung ist, dass ein Schlüsselfeld für die Tabelle definiert ist. Das können Sie unter *General Settings -> Primary Key* überprüfen.

![Snowflake-Extraction-Primary-Key](/img/content/xu/snowflake/snowflake-t001w-primary-key.png){:class="img-responsive"}

Beim einem Merge ist es empfehlenswert, dass ein entsprechender Index auf der Tabelle anlegt ist, um den Merge-Befehl schnell auszuführen. Ohne einen Index würde die Ausführung des Merge-Befehls abhängig von der Datenmenge sehr lange dauern. 

Nun ändern wir die extraktionsspezifischen Einstellungen und setzen Preparation auf *None*, da die Tabelle schon vorhanden ist. 
Setzen wir Row Processing auf *Merge data to table*, um die Daten zusammenzuführen. 

![Snowflake-Extraction-Specific-Settings-Merge-T001w](/img/content/xu/snowflake/snowflake-t001w-Extraction-Specific-Settings-Merge.png){:class="img-responsive"}

Der Merge-Befehl sorgt dafür, dass neue Datensätze eingefügt bzw. bestehende aktualisiert werden.<br> 
Bei bestehenden Datensätzen wird ein Update ausgeführt, sonst ein Insert.

![Snowflake-Custom-SQL-Merge](/img/content/xu/snowflake/snowflake-t001w-Custom-SQL-Merge.png){:class="img-responsive"}

Welche Felder aktualisiert werden, kann man dem SQL-Statement entnehmen. <br>
Hier kann man das SQL-Statement bei Bedarf ändern, um z.B. bestimmte Spalten von der Aktualisierung auszuschließen.<br>
Felder, welche nicht im SQL-Statement auftauchen, sind von Änderungen nicht betroffen.

