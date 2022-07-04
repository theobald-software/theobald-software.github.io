---
ref: xfa-odp-settings
layout: page
title: Einstellungen
description: ODP Settings
product: xtract-for-alteryx
parent: odp
permalink: /:collection/:path
weight: 3
lang: de_DE
progressstate: 5
---

Der folgende Abschnitt beschreibt die Einstellungen der ODP-Komponente, die über das Hauptfenster der Komponente zugänglich sind.

![ODP Component](/img/content/odp/odp-settings.png){:class="img-responsive"}

{% include _content/de/odp/odp-settings-subscriptions.md %}

### Edit Parameters - Laufzeitparameter
Verwenden Sie Laufzeitparameter für dynamische [Selektionen und Filter](./odp-define#selektion-und-filter).
{% include _content/de/edit-runtime-parameters.md %}

{% include _content/de/odp/odp-settings-advanced.md %}

### Load Live Preview - Vorschau

Ermöglicht eine Echtzeit-Vorschau der Extraktionsdaten ohne dafür die Extraktion auszuführen.

### Refresh Metadata - Metadaten erneuern

Führt einen erneuten Lookup auf den selektierten Extraktor aus. 
Bestehende Selektionen bleiben dabei erhalten, anders als beim erneuten Hinzufügen.
Die Refresh Metadata Funktionalität kann z.B. notwendig sein, wenn eine Tabelle SAP-seitig angepasst, ein anderes Quellsystem angebunden, oder ein Update des Quellsystems durchgeführt wurde. 
In solchen Fällen kann es zu Datenschiefständen kommen, die durch diese Funktion bereinigt werden.

