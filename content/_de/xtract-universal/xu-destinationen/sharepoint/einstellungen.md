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
### Destination Settings öffnen

1. Eine bestehende Extraktion anlegen oder auswählen (siehe auch [Erste Schritte mit Xtract Universal](../../erste-schritte/eine-neue-extraktion-anlegen)).
2. Klicken Sie auf **[Destinations]**. Das Fenster "Destination Settings" wird geöffnet.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

Die folgenden Einstellungen können für die Destination definiert werden. 
  
### Destination Settings - Destinationseinstellungen

![SharePointExtractionSpecificSettings](/img/content/xu/SP_destination_settings.png){:class="img-responsive"}

{% include _content/de/xu-specific/xu-destinations/general/file-name.md %}

{% include _content/de/xu-specific/xu-destinations/general/column-name-style.md %}

### Mode

- **Drop, Create & Insert**:  Legt eine neue Liste in SharePoint an und löscht dabei eine bereits vorhandene Liste gleichen Namens.
- **Create if not exists & Merge**: Aktualisiert eine bestehende Liste bzw. legt eine Liste neu an, falls noch keine mit dem angegebenen Namen existiert.
- **Truncate & Insert**:  Löscht alle Daten innerhalb der Liste und füllt die Liste mit den exportierten Daten auf. Im Unterschied zu "Drop & Create & Insert" werden die Liste und damit verknüpfte Informationen dabei nicht entfernt.
- **Merge only**:  Führt Daten zusammen, ohne Datensätze oder die Liste selbst zu löschen.
 - **Max. threads** (Expertenoption): Definiert die Anzahl der Threads, die zur Kommunikation mit dem SharePoint-Server verwendet werden.



Eine größere Zahl der Threads kann die Geschwindigkeit des Exports verbessern oder aber auch verschlechtern, abhängig von der Server- und Netzwerkumgebung.
Das Setzen auf "1" verlangsamt Exporte signifikant, kann aber hilfreich sein, wenn Ihr SharePoint-Server stark ausgelastet ist oder Verbindungsprobleme auftreten. 
   
 
{:.box-note}
**Note:** Eine größere Zahl der Threads kann die Geschwindigkeit des Exports verbessern oder aber auch verschlechtern, abhängig von der Server- und Netzwerkumgebung.
 Das Setzen auf *1* verlangsamt Exporte signifikant, kann aber hilfreich sein, wenn Ihr SharePoint-Server stark ausgelastet ist oder Verbindungsprobleme auftreten. 
 
{:.box-tip}
**Empfehlung:** Verändern Sie nicht den Standardwert (2) ohne einen triftigen Grund.  

