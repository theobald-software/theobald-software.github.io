---
ref: xtract-for-alteryx-08
layout: page
title: ODP (Operational Data Provisioning)
description: Operational Data Provisioning (ODP)
product: xtract-for-alteryx
parent: xtract-for-alteryx
childidentifier: odp
permalink: /:collection/:path
weight: 8
lang: de_DE
---


{% include _content/de/odp/odp-introduction.md %} 

### Xtract ODP Verwenden
Grundkenntnisse von Xtract for Alteryx sind erforderlich, um die folgenden Abschnitte zu verstehen. Mehr Details dazu finden Sie im Abschnitt [Erste Schritte mit Table - Use-Case](./erste-schritte).
1. Ziehen Sie die Komponente Xtract ODP per Drag & Drop in Ihren Alteryx-Workflow.
2. Wählen Sie eine SAP-Verbindung, navigieren Sie zu **Selected Extraction** und klicken Sie auf **[Edit]**. Das Hauptfenster der Komponente "Xtract ODP" wird geöffnet.

Auf die meisten Funktionen der Komponente können Sie über das Hauptfenster zugreifen.


###  Funktionsübersicht

Das Fenster "ODP" besteht aus folgenden Unterabschnitten:
![ODP Component](/img/content/xfa/xfa_odp_overview.png){:class="img-responsive"}

- [Operational Data Provider](./odp/odp-define#ein-objekt-data-object-suchen) (1) - Suche und Anzeige des Namens des Quellobjekts.
- Additional info (2) - Zeigt den ODP-Provider-Kontext und den Datentyp des Quellobjekts an.
- [Update mode](./odp/odp-define#load-verfahren-update-mode) (3) - Definiert das Load-Verfahren - Full-Load oder Deltaverarbeitung.
- [Fields](./odp/odp-define#selektion-und-filter) (4) - Ermöglicht die Auswahl und Einstellung der Filteroptionen für [Extraktoren](./odp/odp-extractors).
- Preview (5) - Klicken Sie auf **[Load Live Preview]**, um eine Echtzeit-Vorschau der Extraktionsdaten anzuzeigen.

#### Schaltflächen
- **[[Show active subscriptions ](./odp/odp-settings#abonnements)]** - Schaltfläche zum Anzeigen der Details zum Abonnentenprozess.
- **[[Edit parameters](./odp/odp-settings#parameter-bearbeiten)]** - Schaltfläche zum Definieren der Laufzeitparameter, die als Platzhalter zum Auswählen der Daten verwendet werden können.
- **[[Advanced Settings](./odp/odp-settings#fortgeschrittene-einstellungen)]** - Enthält Einstellungen für die **package size** der Extraktion.
- **[Load Live Preview]** - Schaltfläche zum Anzeigen der Echtzeitvorschau der zu extrahierten Daten ohne Ausführung einer Extraktion. 

****
#### Weiterführende Links
- [SAP community Wiki](https://wiki.scn.sap.com/wiki/pages/viewpage.action?pageId=449284646)

