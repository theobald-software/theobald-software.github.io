---
ref: xtract-is-odp-define
layout: page
title: Eine ODP Extraktion definieren
description: ODP Extracttion
product: xtract-is
parent: odp
permalink: /:collection/:path
weight: 2
lang: de_DE
progressstate: 5
---

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für Xtract IS.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [Xtract IS HelpCenter](https://helpcenter.theobald-software.com/xtract-is/documentation/introduction/).

Der folgende Abschnitt beschreibt die Anwendung der ODP Komponente. 
{% include _content/de/odp/odp-define.md %}
{% include _content/de/odp/odp-settings-update_mode.md %} 

{: .box-note }
**Hinweis:** TS_SEQUENCE_NUMBER ist ein technischer Primärschlüssel, der zur Ausgabe hinzugefügt werden kann. 
Bei identischen Datensätzen ist der Datensatz aktueller, dessen TS_SEQUENCE_NUMBER am höchsten ist.

{% include _content/de/odp/odp-settings-filtering.md %}

