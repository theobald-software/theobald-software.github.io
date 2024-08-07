---
ref: xtract-universal-100
layout: page
title: Web-API
description: Web-API
product: xtract-universal
parent: xtract-universal
redirect_from:
  - de/xtract-universal/fortgeschrittene-techniken/metadata-zugriff-ueber-http-json
permalink: /:collection/:path
weight: 17
lang: de_DE

---

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für Xtract Universal.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [Xtract Universal HelpCenter](https://helpcenter.theobald-software.com/xtract-universal/documentation/introduction/).

Der folgende Abschnitt enthält Informationen zur Web-API von Xtract Universal.

Xtract Universal bietet eine Web-API, die das Ausführen von Extraktionen und das Abfragen von Metainformationen und Extraktionsprotokollen von Xtract Universal über Webaufrufe ermöglicht.
Die Web-API gibt das Ergebnis als http-json-Stream zurück.

{% include _content/de/xu-specific/fortgeschrittene-techniken/api-base-url.md %}

{: .box-note } 
**Hinweis:** Stellen Sie sicher, dass Sie die richtigen Ports verwenden, siehe [Server Ports](./server/ports).

{% include _content/de/xu-specific/fortgeschrittene-techniken/api-config.md %}

{% include _content/de/xu-specific/fortgeschrittene-techniken/api-run-extractions.md %}

{% include _content/de/xu-specific/fortgeschrittene-techniken/api-logs.md %}

