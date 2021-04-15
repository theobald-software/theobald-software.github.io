---
ref: xtract-universal-execution
layout: page
title: Extraktionen Ausführen und Einplanen 
description: Ausführen und Automatisieren von Extraktionen
product: xtract-universal
parent: xtract-universal
childidentifier: automation
permalink: /:collection/:path
weight: 15
lang: de_DE
progressstate: 5
---
Der folgende Abschnitt beschäftigt sich mit dem Ausführen von Extraktionen, sowohl [manuell im Xtract Universal Designer](./erste-schritte/eine-extraktion-ausfuehren) als auch automatisch. 

Extraktionen können über folgende Wege automatisch aufgerufen und eingeplant werden: 

- Über die [Kommandozeile](./automation/call-via-commandline)
- Über einen [Webservice](./automation/call-via-webservice)
- Über ein [externes Skript](./automation/call-via-script)
- Über einen [Scheduler](./automation/call-via-scheduler)
- Über ein [ETL-Tool](./automation/call-via-etl)

{: .box-note }
**Hinweis:** Xtract Universal verfügt über keinen eigenen Scheduler. In der Regel können eine Vielzahl von Drittanbieter Scheduler verwendet werden. 


{: .box-note }
**Hinweis:** Bei [Pull-Destinationen](./xu-destinationen#pull--und-push-destinationen) erfolgt die Automatisierung bzw. das Scheduling über das Tool, das die Webservice-Schnittstelle (HTTP- oder HTTPS-Streams) im CSV oder json-Format konsumiert. 


Beim Aufruf von Extraktionen können die [Extraktionsparameter](./automation/extraktionsparameter) dynamisch zur Laufzeit mitgegeben werden. 

Diese Parameter können auch in einem [SQL-Skript](./automation/xu-parameter-sql) verwendet werden, falls die Destination eine SQL-Datenbank ist. 

