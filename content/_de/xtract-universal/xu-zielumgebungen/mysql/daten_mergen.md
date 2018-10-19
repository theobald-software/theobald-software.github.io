---
ref: xu-mysql-05
layout: page
title: Daten mergen
description: Daten mergen
product: xtract-universal
parent: mysql
permalink: /:collection/:path
weight: 5
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=daten_mergen
---

In diesem Beispiel wollen wir bestehende Datensätze aktualisieren.<br>
Als Voraussetzung für das Ausführen des Merge Befehls muss ein Primärschlüssel auf der Zieltabelle definiert sein.
   
Schauen wir uns den Datensatz für das Werk 1000 an. Das Feld NAME2 hat den Wert 'Werk'.

![mysql_Merge_1](/img/content/mysql_Merge_1.png){:class="img-responsive"}

Überschreiben wir nun das Feld NAME2 mit dem Wert  'Werk Hamburg'.

![mysql_Merge_2](/img/content/mysql_Merge_2.png){:class="img-responsive"}

Nun ändern wir die extraktionsspezifischen Einstellungen und setzen 
- Preparation auf *Create if Not Exists* und 
- Row Processing auf *Merge*
um die vorhandene Tabelle zu verwenden. <br>
Alternativ können Sie Preparation auf None setzen, wenn die Tabelle schon vorhanden ist.

![mysql_Merge_3](/img/content/mysql_Merge_3.png){:class="img-responsive"}

Der Merge sorgt dafür, dass neue Datensätze eingefügt bzw. bestehende aktualisiert werden. <br>
Bei bestehenden Datensätzen wird ein Update ausgeführt, sonst ein Insert.

![mysql_Merge_4](/img/content/mysql_Merge_4.png){:class="img-responsive"}

Welche Felder aktualisiert werden kann man dem SQL-Statement entnehmen. <br>
Hier kann man das SQL-Statement bei Bedarf ändern, um z.B. bestimmte Spalten von der Aktualisierung auszuschließen.<br>
Felder, welche nicht im SQL-Statement auftauchen, sind von Änderungen nicht betroffen.

Bei der Ausführung wurde das Feld NAME2 mit dem Wert aus SAP aktualisiert.

![mysql_Merge_5](/img/content/mysql_Merge_5.png){:class="img-responsive"}
