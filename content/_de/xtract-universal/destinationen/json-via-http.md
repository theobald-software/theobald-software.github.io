---
ref: destinations-10
layout: page
title:  Webservice - JSON
description: JSON (via HTTP)
product: xtract-universal
parent: destinationen
permalink: /:collection/:path
weight: 13
lang: de_DE

---
Die JSON-Destination ist ein generischer JSON-Stream über HTTP. 

## Verbindung

### Eine Destination hinzufügen

1. Navigieren Sie im Hauptfenster des Designers zu **Server > [Manage Destinations](./ziele-verwalten)**. Das Fenster "Manage Destination" wird geöffnet.
2. Klicken Sie auf **[Add]**, um eine neue Destination hinzufügen. Das Fenster "Destination Details" wird geöffnet.
3. Geben Sie einen **Namen** für die Destination ein.
4. Wählen Sie den Destinationstyp aus dem Dropdown-Menü aus.

### Destination Details
Für das Anlegen einer JSON Zielumgebung, müssen keine weiteren Einstellungen vorgenommen werden.

## Einstellungen

### Destination Settings öffnen

1. Eine bestehende Extraktion anlegen oder auswählen (siehe auch [Erste Schritte mit Xtract Universal](../erste-schritte/eine-neue-extraktion-anlegen)).
2. Klicken Sie auf **[Destination]**. Das Fenster "Destination Settings" wird geöffnet.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

Die folgenden Einstellungen können für die Destination definiert werden. 
  
### Destination Settings - Destinationseinstellungen

![XU_http-json_Destination](/img/content/XU_http-json_Destination.png){:class="img-responsive"}

{% include _content/de/xu-specific/destinationen/general/column-name-style.md %}
{% include _content/de/xu-specific/destinationen/general/date-conversion.md %}



## Extraktion im Browser ausführen
1. Führen Sie die HTTP-JSON-Destination im Browser aus. Sehen Sie auch [Erste Schritte mit Xtract Universal](../erste-schritte/eine-extraktion-ausfuehren).
2. Überprüfen Sie das Ergebnis im Browser.
![JSON-Extraction-in-Browser](/img/content/xu/json/json_run-in-browser.png){:class="img-responsive"}

