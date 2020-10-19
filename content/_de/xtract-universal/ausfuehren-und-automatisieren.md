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

Dieser Abschnitt beschäftigt sich mit dem Ausführen von Extraktionen, sowohl [manuell](./automation/call-extraction) als auch automatisch. 

Extraktionen können über folgende Wege automatisch aufgerufen und eingeplant werden: 

- Über die [Kommandozeile](./automation/call-via-commandline)
- Über ein [Webservice](./automation/call-via-webservice)
- Über ein [externes Skript](./automation/call-via-script)
- Über einen [Scheduler](./automation/call-via-scheduler)
- Über ein [ETL-Tool](./automation/call-via-etl)

Hinweis: Xtract Universal verfügt über keinen eigenen Scheduler. In der Regel können Sie einen beliebigen Scheduler nutzen. 

Hinweis: Bei den pull-Destinationen erfolgt die Automatisierung bzw. Scheduling über dem Tool, welches die Webservice-Schnittstelle (http- oder https-Streams in CSV oder json-Format) konsumiert. 


Beim Aufruf von Extraktionen können Extraktionsparameter dynamisch zur Laufzeit mitgegeben werden:
- Siehe [Extraktionsparameter](../xu-parameter)
- Diese Parameter können auch in einem SQL-Skript verwendet werden, falls die Destination eine SQL-Datenbank ist. [Parametrisierung in SQL](../xu-parameter-sql)

