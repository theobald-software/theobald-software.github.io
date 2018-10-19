---
ref: xu-sharepoint-03
layout: page
title: Einstellungen
description: Einstellungen
product: xtract-universal
parent: sharepoint_list
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=einstellungen1
---

Sie können über **Extraction-Specific Settings** Einstellungen für jede Extraktion bezüglich des Ziels festlegen.

![SharePointExtractionSpecificSettings](/img/content/SharePointExtractionSpecificSettings.png){:class="img-responsive"}


**Mode**<br>
Sie können zwischen den folgenden Export-Varianten wählen:


**Drop & Create**: Legt eine neue Liste in SharePoint an und löscht dabei eine bereits vorhandene Liste gleichen Namens.

**Create if not exists & Merge**: Aktualisiert eine bestehende Liste bzw. legt eine Liste neu an, falls noch keine mit dem angegebenen Namen existiert.

**Truncate & Insert**: Löscht alle Daten innerhalb der Liste und füllt mit den exportierten Daten auf. Im Unterschied zu "Drop & Create" werden die Liste und damit verknüpfte Informationen dabei nicht entfernt.

**Merge only**: Führt Daten zusammen, ohne Datensätze oder die Liste selbst zu löschen.


**Max. threads** (Expertenoption):<br>
Sie können die Anzahl der Threads einstellen, die zur Kommunikation mit dem SharePoint-Server verwendet werden. <br>Eine größere Zahl kann die Geschwindigkeit des Exports verbessern oder aber auch verschlechtern, abhängig von der Server- und Netzwerkumgebung. Das Setzen auf "1" verlangsamt Exporte signifikant, kann aber hilfreich sein, wenn Ihr SharePoint-Server stark ausgelastet ist oder Verbindungsprobleme auftreten. Im Allgemeinen raten wir den meisten Anwendern, den Standardwert nicht zu verändern.     