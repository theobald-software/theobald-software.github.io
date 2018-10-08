---
layout: page
title: Einstellungen
description: Einstellungen
product: xtract-universal
parent: powerbi_cloud
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=powerbi-einstellungen
---

Sie können über **Extraction-Specific Settings** Einstellungen für jede Extraktion bezüglich des Ziels festlegen.

![powerbi-settings](/img/content/powerbi-settings.jpg){:class="img-responsive"}

**Automatic dataset**<br>
Ein dataset mit einer einzigen Tabelle wird automatisch angelegt. 

**Dataset and table Name**<br>
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

**Power Bi Settings** 

**Rows per Package**
Gibt die Anzahl der Datensätze an, die pro Packet in die Tabelle des Datasets geschrieben werden. <br>
Welche Werte in Ihrem Fall optimal sind, muss ausprobiert werden.

**Custom Dataset** 

Sie haben auch die Möglichkeit manuell ein Dataset zu erstellen.<br>
Sie können auch beliebig viele Tabellen im Dataset definieren. <br>
Beachten Sie, dass aufgrund der Einschränkungen in der PowerBI-Schnittstelle später keine Tabellen mehr dem vorhandenen Dataset hinzugefügt werden können. 

![powerbi-settings-custom-01](/img/content/powerbi-settings-custom-01.jpg){:class="img-responsive"}

**Create dataset**

Klicken Sie drauf, um ein neues Dataset zu erstellen.

![powerbi-settings-custom-02](/img/content/powerbi-settings-custom-02.jpg){:class="img-responsive"}

Geben Sie den Namen des Datasets und die Namen der Tabellen, welcher erstellt werden müssen. 

![powerbi-settings-custom-03](/img/content/powerbi-settings-custom-03.jpg){:class="img-responsive"}

Bestätigen Sie mit **create**.

![powerbi-settings-custom-04](/img/content/powerbi-settings-custom-04.jpg){:class="img-responsive"}

Nun wählen Sie ein Dataset und eine Tabelle aus der Liste. 

![powerbi-settings-custom-05](/img/content/powerbi-settings-custom-05.jpg){:class="img-responsive"}

Wenn die Extraktion ausgeführt wird, dann werden die Daten in die gewählte Dataset-Tabelle geschrieben.