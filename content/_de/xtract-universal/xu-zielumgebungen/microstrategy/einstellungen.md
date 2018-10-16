---
ref: xu-microstrategy-03
layout: page
title: Einstellungen
description: Einstellungen
product: xtract-universal
parent: microstrategy
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=einstellungen6
---

Wenn Sie auf die **Destination** Schaltfläche klicken, können Sie extraktionsspezifische Einstellungen bezüglich des Ziels festlegen.

![mstr-destinations](/img/content/mstr-destinations.png){:class="img-responsive"}

**Table Name**

bestimmt den Namen der Zieltabelle. Sie haben die folgenden Optionen:
- **Same as name of SAP object**: Name des SAP-Objekts übernehmen
- **Same as name of extraction**: Name der Extraktion übernehmen und
- **Custom**: Hier können Sie einen eigenen Namen definieren.  

**Column Name Style** 

Definiert den Spaltennamen. Folgende Optionen sind verfügbar: 

![Ex-Spec-Settings-Makt-ColumnName](/img/content/Ex-Spec-Settings-Makt-ColumnName.jpg){:class="img-responsive"}

**Code**: Der technische Spaltenname aus SAP wird als Spaltenname verwendet, z.B. MAKTX.<br>
**CodeAndText**: Der technische Name und die Beschreibung der Spalte aus SAP werden mit einem Unterstrich verbunden als Spaltennamen verwendet, z.B. MAKTX_Material Description (Short Text).<br>
**TextAndCode**: Die Beschreibung und der technische Name der Spalte SAP werden mit einem Unterstrich verbunden als Spaltennamen verwendet, z.B. Material Description (Short Text)_MAKTX.

**Table Name**<br>
Dieser entspricht sowohl dem Namen des Datasets, sofern ein neues erstellt wird, als auch dem der Tabelle.

**Folder Name**<br>
Optional. Geben Sie den Namen eines existierenden Folders unter My Objects in Microstrategy. Der generierte Cube wird in diesen Folder abgelegt.

**Dataset ID**<br>
ID des Datasets mit dem gearbeitet werden soll. Diese kann entweder manuell gesetzt werden, oder wird automatisch vom Server bezogen. Wird in jedem Fall auch ins Log geschrieben. 

**Update Policy**<br>
Beschreibt die Art, wie die Daten in MSTR geschrieben werden. <br>
**DropAndCreate** ist der default Wert. Vorhandene Tabelle wird ggf. gelöscht und Daten werden eingefügt. <br>
**Add** verhält sich wie ein Insert und fügt Daten in die vorhandene Tabelle neu hinzu, sofern sie noch nicht in der Datenbank existieren. Dataset ID wird benötigt. <br>
**Update**: aktualisiert die metrischen Werte im Datensatz, wenn bereits ein passender Schlüssel im Datensatz vorhanden ist; neue Datensätze werden ignoriert. <br>
**Upsert**: aktualisiert bestehende Datensätze und fügt dann auch neue hinzu. <br>
**Replace** verhält sich wie ein Truncate and Insert. Alle vorhandenen Daten werden gelöscht und durch die neuen ersetzt. Dataset ID wird benötigt.

**Attributes and metrics** 

Attribute and Metriken (Kennzahlen) werden automatisch basiert auf dem Datentyp des Quellobjekts definiert. <br>
Um sie im Einzelfall anders definieren zu können, klicken Sie auf den entsprechenden Knopf, um die JSON-Definition zu generieren und ggf. zu ändern. 

![mstr-extraction-settings_metrics](/img/content/mstr-extraction-settings_metrics.PNG){:class="img-responsive"}

![mstr-extraction-settings_attr](/img/content/mstr-extraction-settings_attr.png){:class="img-responsive"}

**Date conversion**

**Convert date strings**<br>
Konvertiert das zeichenartige SAP-Datum (YYYYMMDD, z.B. 19900101) zu einem formatierten Datum (YYYY-MM-DD, z.B. 1990-01-01). Im Datenziel hat das SAP-Datum keinen String-Datentyp sondern einen echten Datumstyp.

**Convert invalid dates to**<br>
Falls ein SAP-Datum nicht in ein gültiges Datum konvertiert werden kann, wird dieser Standard-Datumswert verwendet.<br>
ungültige Wert wird dann in das eingegebene Datum konvertiert. NULL wird als Wert unterstützt.

Bei der Konvertierung eines ungültigen SAP-Datums werden zuerst die beiden Sonderfälle 00000000 und 9999XXXX überprüft.

**Convert 00000000 to**<br>
Konvertiert das SAP-Datum 00000000 zu diesem Wert.

**Convert 9999XXXX to**<br>
Konvertiert das SAP-Datum 9999XXXX zu diesem Wert.
![](/img/content/.png){:class="img-responsive"}
