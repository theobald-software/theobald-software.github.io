---
ref: xu-pbi_connector-07
layout: page
title: Fehlerbehebung
description: Fehlerbehebung
product: xtract-universal
parent: Power-BI-Connector
permalink: /:collection/:path
weight: 7
lang: en_GB
old_url:
---
Extraktionen von Xtract Universal, die große Datenmengen verarbeiten, können zahlreiche Aufrufe von Power BI zu Xtract Universal verursachen. Dieser Vorgang führt dazu, dass mehrfache Einträge für die gleiche Extraktion im Extraktions-Log erscheinen.

Um diese Verhaltensweise zu vermeiden,  erhöhen Sie die Größe des Zwischenspeichers (Cache).
![Power BI cache](/img/content/XU_PBI_PBI_Cache.png){:class="img-responsive"}