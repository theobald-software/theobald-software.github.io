---
ref: xu-pbi_connector-02
layout: page
title: Einstellungen
description: Einstellungen
product: xtract-universal
parent: Power-BI-Connector
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url:
---

Hier können Sie die spezifischen Einstellungen für die gewählte Zielumgebung definieren:

![pbi-configuration](/img/content/XU_pbi_connector_destination.jpg){:class="img-responsive"}

###Date Conversion

**Convert date strings**<br>
Konvretiert das SAP-Datum (JJJJMMTT, z.B. 19900101) in einen formatierten Wert. Im Datenziel hat das SAP-Datum keinen String-Datentyp, sondern einen Datum-Datentyp (JJJJ-MM-TT z.B. 1990-01-01).

**Convert invalid dates to** <br>
Jeder ungültige Wert wird zu dem eingegebenen Wert konvertiert NULL wird als Wert unterstüzt.
Setzen Sie diesen Wert, wenn es keine konvertierbaren Datumsformate verfügbar sind.
Bei der Konvertierung eines ungültigen SAP-Datums werden zuerst die beiden Sonderfälle 00000000 und 9999XXXX überprüft.

**Convert 00000000**
Konvertiert das SAP-Datum 00000000 zu dem eingegebenen Wert.<br>
**Convert 9999XXXX**
Konvertiert das SAP-Datum 9999XXXX zu dem eingegebenen Wert.

**Column Name Style**

Definiert den Stil des Spaltennamens. Folgende Optionen sind verfügbar:

![Ex-Spec-Settings-Makt-ColumnName](/img/content/Ex-Spec-Settings-Makt-ColumnName.jpg){:class="img-responsive"}

* *Code*: Der technische Spaltenname aus SAP wird als Spaltenname verwendet, z.B. MAKTX.<br>
* *CodeAndText*: Der technische Name und die Beschreibung der Spalte aus SAP mit einem Unterstrich verbunden werden als Spaltennamen verwendet, z.B. MAKTX_Material Description (Short Text).<br>
* *TextAndCode*: Die Beschreibung und der technische Name der Spalte SAP mit einem Unterstrich verbunden werden als Spaltennamen verwendet, z.B. Material Description (Short Text)_MAKTX.