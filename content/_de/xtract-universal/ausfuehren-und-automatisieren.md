---
ref: xtract-universal-execution
layout: page
title: Extraktionen Ausführen und Einplanen 
description: Ausführen und Automatisieren von Extraktionen
product: xtract-universal
parent: xtract-universal
childidentifier: automation
permalink: /:collection/:path
weight: 8
lang: de_DE
---

Der folgende Abschnitt beschäftigt sich mit dem Ausführen von Extraktionen, sowohl [manuell](./automation/call-extraction) als auch automatisch. 

Extraktionen können über folgende Wege automatisch aufgerufen und eingeplant werden: 

- Über die [Kommandozeile](./automation/call-via-commandline)
- Über ein [Webservice](./automation/call-via-webservice)
- Über ein [externes Skript](./automation/call-via-script)
- Über einen [Scheduler](./automation/call-via-scheduler)
- Über ein [ETL-Tool](./automation/call-via-etl)

{: .box-note }
**Hinweis:** Xtract Universal verfügt über keinen eigenen Scheduler. In der Regel können Sie einen beliebigen Scheduler nutzen. 


{: .box-note }
**Hinweis:** Bei [Pull-Destinationen](./xu-destinationen#pull--und-push-destinationen) erfolgt die Automatisierung bzw. Scheduling über das Tool, welches die Webservice-Schnittstelle (HTTP- oder HTTPS-Streams) im CSV oder json-Format konsumiert. 


Beim Aufruf von Extraktionen können die [Extraktionsparameter](../xu-parameter) dynamisch zur Laufzeit mitgegeben werden. 
Diese Parameter können auch in einem [SQL-Skript](../xu-parameter-sql) verwendet werden, falls die Destination eine SQL-Datenbank ist. 

