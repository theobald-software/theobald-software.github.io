---
ref: xis-odp-introduction
layout: page
title: Funktionsübersicht
description: ODP Funktionsübersicht
product: xtract-is
parent: odp
permalink: /:collection/:path
weight: 1
lang: de_DE
progressstate: 5
---

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für Xtract IS.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [Xtract IS HelpCenter](https://helpcenter.theobald-software.com/xtract-is/documentation/introduction/).

Der folgende Abschnitt beschreibt die Einstellungen der Komponente Xtract ODP. Die Einstellungen können im Hauptfenster “ODP” der Komponente angepasst werden. 
![ODP Component](/img/content/xis/odp_functions.png){:class="img-responsive"}

###  Funktionsübersicht

Das Fenster "ODP" besteht aus folgenden Unterabschnitten:
- [Operational Data Provider](./odp-define#ein-objekt-data-object-suchen) (1) - Suche und Anzeige des Namens des Quellobjekts.
- Additional info (2) - Zeigt den ODP-Provider-Kontext und den Datentyp des Quellobjekts an.
- [Update mode](./odp-define#load-verfahren-update-mode) (3) - Definiert das Load-Verfahren - Full-Load oder Deltaverarbeitung.
- [Fields](./odp-define#selections-and-filters) (4) - Ermöglicht die Auswahl und Einstellung der Filteroptionen für [Extraktoren](./odp-extractors).
- Preview (5) - Klicken Sie auf **[Load Live Preview]**, um eine Echtzeit-Vorschau der Extraktionsdaten anzuzeigen.

#### Schaltflächen
- **Xtract IS Info** - Schaltfläche zum Anzeigen allgemeiner Informationen über Xtract IS.
- **[Show active subscriptions](./odp-settings#abonnements)** - Schaltfläche zum Anzeigen der Details zum Abonnentenprozess.
- **[Edit runtime parameters](./odp-settings#parameter-bearbeiten)** - Schaltfläche zum Definieren der Laufzeitparameter, die als Platzhalter zum Auswählen der Daten verwendet werden können.
- **[Advanced Settings](./odp-settings#fortgeschrittene-einstellungen)** - Enthält Einstellungen für die **package size** der Extrraktion..
- **[Load Live Preview]** - Schaltfläche zum Anzeigen der Echtzeitvorschau der zu extrahierten Daten ohne Ausführung einer Extraktion. 
- **[Refresh Metadata]** - Durchführung eines erneuten Lookups. Bestehende Extraktionseinstellungen bleiben dabei erhalten, anders als beim erneuten Hinzufügen.

{: .box-note }
**Hinweis:** Verwenden Sie **[Refresh Metadata]**, um die Metadaten zu aktualisieren.
Dies ist nötig, wenn eine Datenquelle SAP-seitig angepasst, ein anderes Quellsystem angebunden, oder ein Update des Quellsystems durchgeführt wurde. 
