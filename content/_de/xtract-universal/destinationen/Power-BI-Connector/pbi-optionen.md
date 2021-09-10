---
ref: xu-pbi_connector-07
layout: page
title: Power BI Optionen
description: Power BI Optionen
product: xtract-universal
parent: Power-BI-Connector
permalink: /:collection/:path
weight: 8
lang: en_GB
old_url:
---

Nehmen Sie folgende Einstellungen in Power BI vor:

1. Navigieren Sie zu **File > Options and settings > Options**, um die Optionen zu öffnen.
2. Aktivieren Sie im Tab *Security* die Option **(Not recommended) Allow any extension to load without validation or warning**.<br>
![Power BI cache](/img/content/XU_PBI_PBI_Security.png){:class="img-responsive"}
3. Optional: Erhöhen Sie die Größe des Zwischenspeichers (Cache) im Tab *Load Sata*, um zu vermeiden dass bei der Extraktion großer Datenmengen Power BI mehrfach Aufrufe an Xtract Universal sendet. 
Das mehrfache Aufrufen führen dazu, dass mehrere Einträge für die gleiche Extraktion im Extraktions-Log von Xtract Universal erscheinen.<br>
![Power BI cache](/img/content/XU_PBI_PBI_Cache.png){:class="img-responsive"}
