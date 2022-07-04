---
ref: xis-odp-settings
layout: page
title: Settings
description: ODP Settings
product: xtract-is
parent: odp
permalink: /:collection/:path
weight: 3
lang: de_DE
progressstate: 5
---

Der folgende Abschnitt beschreibt die Einstellungen der ODP-Komponente, die über das Hauptfenster der Komponente zugänglich sind.

![ODP Component](/img/content/xis/odp-settings.png){:class="img-responsive"}

{% include _content/de/odp/odp-settings-subscriptions.md %}

### Edit Runtime Parameters - Laufzeitparameter

Verwenden Sie Laufzeitparameter für dynamische [Selektionen und Filter](./odp-define#selektion-und-filter).
{% include _content/de/edit-runtime-parameters.md %}

{: .box-note }
**Hinweis:** Verwenden Sie die *Properties* der Komponente in Kombination mit *Expressions*, um die Parameter in SSIS zu übergeben, siehe [Parametriesierung mit Properties](./odp-parametrisierung). 

{% include _content/de/odp/odp-settings-advanced.md %}
