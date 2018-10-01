---
layout: page
title: Einstellungen
description: Einstellungen
product: xtract-universal
parent: alteryx-de
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=einstelungen-alteryx-de
---

Wenn Sie auf Destination klicken, dann können Sie Einstellungen für die Extraktion bezüglich des Ziels festlegen.

![alteryx-configuration](/img/content/alteryx-configuration.PNG){:class="img-responsive"}

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

**Column Name Style** 

Definiert den Spaltennamen. Folgende Optionen sind verfügbar: 

![Ex-Spec-Settings-Makt-ColumnName](/img/content/Ex-Spec-Settings-Makt-ColumnName.jpg){:class="img-responsive"}

**Code**: Der technische Spaltenname aus SAP wird als Spaltenname verwendet, z.B. MAKTX.<br>
**CodeAndText**: Der technische Name und die Beschreibung der Spalte aus SAP werden mit einem Unterstrich verbunden als Spaltennamen verwendet, z.B. MAKTX_Material Description (Short Text).<br>
**TextAndCode**: Die Beschreibung und der technische Name der Spalte SAP werden mit einem Unterstrich verbunden als Spaltennamen verwendet, z.B. Material Description (Short Text)_MAKTX.