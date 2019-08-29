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

{% include _content/de/xu-specific/xu-destinations/general/entity-name.md %}

{% include _content/de/xu-specific/xu-destinations/general/date-conversion.md %

**Preparation**<br>
bestimmt, was geschehen soll, bevor die Daten in ein Zielobjekt geschrieben werden.
- **Delete & Create**: Löscht das Objekt mit dem angegebenen Namen und erstellt ein neues Objekt mit den benötigten Einstellungen.
- **Create if not exists**: Erstellt ein neues Objekt, falls kein Objekt mit dem angegebenen Namen existiert.

**Row processing**<br>
bestimmt, wie die Daten in das Zielobjekt geschrieben werden sollen.
- **Insert**: Fügt alle neuen Datensätze in das Objekt ein.
- **Merge**: Fügt alle neuen Datensätze in das Objekt ein und aktualisiert bereits vorhandene Einträge anhand des Primärschlüssels.

#### Concurrency mode

bestimmt, wie die Salesforce Bulk-API die Daten verarbeitet.
- **Parallel**: Alle Batches werden parallel zueinander verarbeitet.
- **Serial**: Alle Batches werden seriell verarbeitet.
Die parallele Verarbeitung von Batches kann zu Problemen mit der Datenbank führen, wodurch der Job fehlschlägt. Wenn dieses Problem bei Ihnen auftritt, wählen Sie die serielle Verarbeitung aus.



