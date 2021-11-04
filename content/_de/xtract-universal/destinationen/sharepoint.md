---
ref: destinations-102
layout: page
title: SharePoint
description: SharePoint
product: xtract-universal
parent: destinationen
childidentifier: sharepoint_list
permalink: /:collection/:path
weight: 102
lang: de_DE
progressstate: 5
---

Der folgende Abschnitt behandelt das Laden der SAP-Extraktionsdaten auf einen SharePoint-Server.

## Voraussetzungen

Um Daten in eine SharePoint-Liste zu extrahieren, benötigen Sie entweder einen SharePoint 2013 Server oder ein SharePoint Online System innerhalb von Office365.

Wenn Ihr SharePoint-Server noch nicht bereits für Zugriff über das Internet konfiguriert ist, stellen Sie bitte unter  **Central Administration -> Application Management -> Configure alternate access mappings**  ein entsprechendes Mapping für die Zone "Internet" ein.

## Verbindung

{% include _content/de/xu-specific/destinationen/general/connection.md %}	

### Destination Details

![XU_Sharepoint_Dest](/img/content/XU_Sharepoint_Dest.png){:class="img-responsive"}


**SharePoint On-Premises oder SharePoint Online**<br>
Wählen Sie hier die SharePoint-Umgebung aus, in die Sie exportieren.

**Site URL**<br>
Geben Sie hier die URL des SharePoint-Servers an (optional mit Unterverzeichnissen, falls Sie in eine spezifische Seite auf dem Server exportieren möchten).<br>
Bitte achten Sie darauf, nur den Basispfad anzugeben. Zusätzliche Seiteninformationen wie `_layouts/15/start.aspx#/`, die Ihnen in einem Browser angezeigt werden, gehören nicht zur URL.

**User**<br>
SharePoint-Benutzername eingeben.

**Password**<br>
Passwort Ihres SharePoint-Benutzers eingeben.

**Test connection**<br>
Testet die Verbindung zum SharePoint-Server.

## Einstellungen

### Destination Settings öffnen

1. Eine bestehende Extraktion anlegen oder auswählen (siehe auch [Erste Schritte mit Xtract Universal](../erste-schritte/eine-neue-extraktion-anlegen)).
2. Klicken Sie auf **[Destinations]**. Das Fenster "Destination Settings" wird geöffnet.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

Die folgenden Einstellungen können für die Destination definiert werden. 
  
### Destination Settings - Destinationseinstellungen

![SharePointExtractionSpecificSettings](/img/content/xu/SP_destination_settings.png){:class="img-responsive"}

{% include _content/de/xu-specific/destinationen/general/file-name.md %}

{% include _content/de/xu-specific/destinationen/general/column-name-style.md %}

### Mode

- **Drop, Create & Insert**:  Legt eine neue Liste in SharePoint an und löscht dabei eine bereits vorhandene Liste gleichen Namens.
- **Create if not exists & Merge**: Aktualisiert eine bestehende Liste bzw. legt eine Liste neu an, falls noch keine mit dem angegebenen Namen existiert.
- **Truncate & Insert**:  Löscht alle Daten innerhalb der Liste und füllt die Liste mit den exportierten Daten auf. Im Unterschied zu "Drop & Create & Insert" werden die Liste und damit verknüpfte Informationen dabei nicht entfernt.
- **Merge only**:  Führt Daten zusammen, ohne Datensätze oder die Liste selbst zu löschen.
- **Max. threads** (Expertenoption): Anzahl der Threads, die zur Kommunikation mit dem SharePoint-Server verwendet werden.

Eine größere Zahl der Threads kann die Geschwindigkeit des Exports verbessern oder aber auch verschlechtern, abhängig von der Server- und Netzwerkumgebung.
Das Setzen auf "1" verlangsamt Exporte signifikant, kann aber hilfreich sein, wenn Ihr SharePoint-Server stark ausgelastet ist oder Verbindungsprobleme auftreten. 
   
 
{:.box-note}
**Note:** Eine größere Zahl der Threads kann die Geschwindigkeit des Exports verbessern oder aber auch verschlechtern, abhängig von der Server- und Netzwerkumgebung.
 Das Setzen auf *1* verlangsamt Exporte signifikant, kann aber hilfreich sein, wenn Ihr SharePoint-Server stark ausgelastet ist oder Verbindungsprobleme auftreten. 
 
{:.box-tip}
**Empfehlung:** Verändern Sie nicht den Standardwert (2) ohne einen triftigen Grund.  

