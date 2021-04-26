---
ref: xtract-universal-execution
layout: page
title: Extraktionen Ausführen und Einplanen 
description: Ausführen und Automatisieren von Extraktionen
product: xtract-universal
parent: xtract-universal
childidentifier: extraktionen-ausfuehren-und-einplanen
permalink: /:collection/:path
weight: 15
lang: de_DE
progressstate: 5
---
Der folgende Abschnitt beschäftigt sich mit dem Ausführen von Extraktionen, sowohl [manuell im Xtract Universal Designer](./erste-schritte/eine-extraktion-ausfuehren) als auch automatisch. 

Extraktionen können über folgende Wege automatisch aufgerufen und eingeplant werden: 

- Über die [Kommandozeile](./extraktionen-ausfuehren-und-einplanen/call-via-commandline)
- Über einen [Webservice](./extraktionen-ausfuehren-und-einplanen/call-via-webservice)
- Über ein [externes Skript](./extraktionen-ausfuehren-und-einplanen/call-via-script)
- Über einen [Scheduler](./extraktionen-ausfuehren-und-einplanen/call-via-scheduler)
- Über ein [ETL-Tool](./extraktionen-ausfuehren-und-einplanen/call-via-etl)

{: .box-note }
**Hinweis:** Xtract Universal verfügt über keinen eigenen Scheduler. In der Regel können eine Vielzahl von Drittanbieter Scheduler verwendet werden. 


{: .box-note }
**Hinweis:** Bei [Pull-Destinationen](./destinationen#pull--und-push-destinationen) erfolgt die Automatisierung bzw. das Scheduling über das Tool, das die Webservice-Schnittstelle (HTTP- oder HTTPS-Streams) im CSV oder json-Format konsumiert. 


Beim Aufruf von Extraktionen können die [Extraktionsparameter](./extraktionen-ausfuehren-und-einplanen/extraktionsparameter) dynamisch zur Laufzeit mitgegeben werden. 

Diese Parameter können auch in einem [SQL-Skript](./extraktionen-ausfuehren-und-einplanen/xu-parameter-sql) verwendet werden, falls die Destination eine SQL-Datenbank ist. 

