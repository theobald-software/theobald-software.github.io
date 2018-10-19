---
ref: xu-salesforce-03
layout: page
title: Einstellungen
description: Einstellungen
product: xtract-universal
parent: salesforce
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=sf-einstellungen
---

Wenn Sie auf Destination klicken, dann können Sie Einstellungen für die Extraktion bezüglich des Ziels festlegen.

![sf-destination-settings3](/img/content/sf-destination-settings3.PNG){:class="img-responsive"}

**Entity name**<br>
bestimmt den API-Namen des Zielobjektes in Salesforce. Sie haben die folgenden Optionen:
- **Same as name of SAP object**: Name des SAP-Objekts übernehmen
- **Same as name of extraction**: Name der Extraktion übernehmen und
- **Custom**: Hier können Sie einen eigenen Namen definieren.


**Date Conversion**

**Convert date strings**<br>
Konvertiert das zeichenartige SAP-Datum (YYYYMMDD, z.B. 19900101) zu einem formatierten Datum (YYYY-MM-DD, z.B. 1990-01-01). Im Datenziel hat das SAP-Datum keinen String-Datentyp sondern einen echten Datumstyp.

**Convert invalid dates to**<br>
Falls ein SAP-Datum nicht in ein gültiges Datum konvertiert werden kann, wird dieser Standard-Datumswert verwendet.<br>
Ungültige Werte werden dann in das eingegebene Datum konvertiert. NULL wird als Wert unterstützt.

Bei der Konvertierung eines ungültigen SAP-Datums werden zuerst die beiden Sonderfälle 00000000 und 9999XXXX überprüft.

**Convert 00000000 to**<br>
Konvertiert das SAP-Datum 00000000 zu diesem Wert.

**Convert 9999XXXX to**<br>
Konvertiert das SAP-Datum 9999XXXX zu diesem Wert.


**Preparation**<br>
bestimmt, was geschehen soll, bevor die Daten in ein Zielobjekt geschrieben werden.
- **Delete & Create**: Löscht das Objekt mit dem angegebenen Namen und erstellt ein neues Objekt mit den benötigten Einstellungen.
- **Create if not exists**: Erstellt ein neues Objekt, falls kein Objekt mit dem angegebenen Namen existiert.

**Row processing**<br>
bestimmt, wie die Daten in das Zielobjekt geschrieben werden sollen.
- **Insert**: Fügt alle neuen Datensätze in das Objekt ein.
- **Merge**: Fügt alle neuen Datensätze in das Objekt ein und aktualisiert bereits vorhandene Einträge anhand des Primärschlüssels.

**Concurrency mode**<br>
bestimmt, wie die Salesforce Bulk-Api die Daten verarbeitet.
- **Parallel**: Alle Batches werden parallel zueinander verarbeitet.
- **Serial**: Alle Batches werden seriell verarbeitet.
Die parallele Verarbeitung von Batches kann zu Problemen mit der Datenbank führen, wodurch der Job fehlschlägt. Wenn dieses Problem bei Ihnen auftritt, wählen Sie die serielle Verarbeitung aus.



