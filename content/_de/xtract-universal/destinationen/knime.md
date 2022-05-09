---
ref: destinations-14
layout: page
title: KNIME
description: KNIME
product: xtract-universal
parent: destinationen
childidentifier: csv-flat-file
permalink: /:collection/:path
weight: 55
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=zielumgebungen
---

Die Destination *Flat File* erzeugt eine generische CSV-Datei. 

## Verbindung

### Eine Destination hinzufügen

1. Navigieren Sie im Hauptfenster des Designers zu **Server > [Manage Destinations](./ziele-verwalten)**. Das Fenster "Manage Destination" wird geöffnet.
2. Klicken Sie auf **[Add]**, um eine neue Destination hinzufügen. Das Fenster "Destination Details" wird geöffnet.
3. Geben Sie einen **Namen** für die Destination ein.
4. Wählen Sie den Destinationstyp aus dem Dropdown-Menü aus.

Für die KNIME-Destination ist keine Konfiguration erforderlich.

## Einstellungen

### Destination Settings öffnen

1. Eine bestehende Extraktion anlegen oder auswählen (siehe auch [Erste Schritte mit Xtract Universal](../erste-schritte/eine-neue-extraktion-anlegen)).
2. Klicken Sie auf **[Destinations]**. Das Fenster "Destination Settings" wird geöffnet.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

Die folgenden Einstellungen können für die Destination definiert werden. 
  
### Destination Settings - Destinationseinstellungen

![XU_KNIME_Destination](/img/content/XU_KNIME_Destination.png){:class="img-responsive"}

{% include _content/de/xu-specific/destinationen/general/column-name-style.md %}
{% include _content/de/xu-specific/destinationen/general/date-conversion.md %}

## KNIME Integration via SAP Reader

### Voraussetzungen

Die folgenden Anwendungen müssen für die Integration on KNIME installiert sein:
- die aktuelle Version von Xtract Universal, siehe [Download Trial Version](https://theobald-software.com/en/download-trial)
- die aktuelle Version von [KNIME Analytics Platform](https://www.knime.com/downloads)

### Schritt-für-Schritt-Anleitung

1. Erstellen Sie eine Extraktion in Xtract Universal. Wählen Sie KNIME als Destination für die Extraktion aus.
![XU Extraction](/img/content/knime/xu_extraction.png){:class="img-responsive"}
2. Starten Sie *KNIME Analytics Platform*. 
3. Installieren Sie die [SAP Reader (Theobald Software)](https://hub.knime.com/knime/extensions/org.knime.features.sap.theobald/latest/org.knime.sap.theobald.node.SAPTheobaldReaderNodeFactory) Erweiterung von KNIME.
![Install KNIME Extension](/img/content/knime/install_sap_reader.png){:class="img-responsive"}
4. Ziehen Sie die 'SAP Reader (Theobald Software)' Komponente (2) auf den KNIME Canvas.
![KNIME Extension](/img/content/knime/sap_reader_knime_extension.png){:class="img-responsive"}
5. Öffnen Sie die SAP Reader Task 'Settings' und geben Sie die URL des Xtract Universal Servers ein, z.B. `http://localhost:8065/` (3).
![SAP Reader Settings](/img/content/knime/sap_reader_settings.png){:class="img-responsive"}
6. Klicken Sie auf **[Fetch Queries]** (4) und wählen Sie eine Extraktion.
7. Bestätigen Sie die Eingabe mit **[OK]** (5).
8. Starten Sie die Extraktion über **[Execute]**. 
![Execute SAP Reader](/img/content/knime/execute_sap_reader.png){:class="img-responsive"}
9. Prüfen Sie die extrahierten SAP-Daten über **[SAP Query Result]**.
![SAP Reader Results](/img/content/knime/sap_query_results.png){:class="img-responsive"}


****
## Weiterführende Links
- [Youtube-Video: Webinar "SAP Data to Insights with KNIME"](https://www.youtube.com/watch?v=KQLLoDUoOEg)
- [Dynamic Runtime Parameter within KNIME Workflow](https://kb.theobald-software.com/xtract-universal/dynamic-runtime-paramater%20within-KNIME-workflow)

