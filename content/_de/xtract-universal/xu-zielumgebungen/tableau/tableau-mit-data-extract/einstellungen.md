---
ref: xu-tableau-data-extract-03
layout: page
title: Einstellungen
description: Einstellungen
product: xtract-universal
parent: tableau-mit-data-extract
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=einstellungen
---

Klicken Sie auf Destination, um über extractionsspezifische Einstellungen bezüglich des Ziels festlegen.

![Tableau-Extraction-Specific-Settings](/img/content/Tableau-Extraction-Specific-Settings.png){:class="img-responsive"}                    
                                   

**File Name**<br>
bestimmt den Namen der Zieldatei. Sie haben die folgenden Optionen: <br>
**Same as name of SAP object**: Name des SAP-Objekts übernehmen <br>
**Same as name of extraction** Name der Extraktion übernehmen und<br>
**Custom**: Hier können Sie einen eigenen Namen definieren.

**Append timestamp**: Eine neue Zieldatei wird angelegt und ein Zeitstempel wird an den Namen angehängt. 
                                   
                          
**Existing files**

**Replace file**: eine vorhandene Zieldatei wird überschrieben. <br>
**Append results**: Daten werden an eine bereits bestehende Zieldatei angehängt. <br>
**Abord extraction**: Der Prozess wird abgebrochen, falls eine Zeildatei bereits existiert.  


**Date Conversion**

**Convert date strings** <br>
Konvertiert das zeichenartige SAP-Datum (YYYYMMDD, z.B. 19900101) zu einem formatierten Datum (YYYY-MM-DD, z.B. 1990-01-01). Im Datenziel hat das SAP-Datum keinen String-Datentyp sondern einen echten Datumstyp.

**Convert invalid dates to**<br>
Falls ein SAP-Datum nicht in ein gültiges Datum konvertiert werden kann, wird dieser Standard-Datumswert verwendet. <br>
ungültige Wert wird dann in das eingegebene Datum konvertiert. NULL wird als Wert unterstützt.

**Bei der Konvertierung eines ungültigen** <br>SAP-Datums werden zuerst die beiden Sonderfälle 00000000 und 9999XXXX überprüft. 

**Convert 00000000 to** <br>
Konvertiert das SAP-Datum 00000000 zu diesem Wert. 

**Convert 9999XXXX to** <br>
Konvertiert das SAP-Datum 9999XXXX zu diesem Wert.