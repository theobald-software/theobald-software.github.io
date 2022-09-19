---
ref: xtract-for-alteryx-09
layout: page
title: Xtract ODP (Operational Data Provisioning)
description: Operational Data Provisioning (ODP)
product: xtract-for-alteryx
parent: xtract-for-alteryx
childidentifier: odp
permalink: /:collection/:path
weight: 9
lang: de_DE
---

Der folgende Abschnitt beschreibt die Funktion der Xtract ODP-Komponente. <br>
{% include _content/de/odp/odp-introduction.md %} 

{: .box-tip }
**Tipp:** Grundlagen zum Produkt sind im Abschnitt [Erste Schritte mit Xtract for Alteryx](./erste-schritte) beschrieben.

### Xtract ODP Verwenden
1. Ziehen Sie die "Xtract ODP" Komponente per Drag & Drop in Ihren Alteryx-Workflow.
2. Wählen Sie eine SAP-Verbindung, navigieren Sie zu **Selected Extraction** und klicken Sie auf **[Edit]**. Das Hauptfenster der Komponente wird geöffnet.

Auf die meisten Funktionen der Komponente kann über das Hauptfenster zugegriffen werden.


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

---

Weitere Informationen zum Arbeiten mit der Xtract ODP Komponente finden Sie in den folgenden Unterabschnitten.

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}
