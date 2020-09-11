---
ref: xtract-universal-execution
layout: page
title: Ausführen und Automatisieren von Extraktionen
description: Ausführen und Automatisieren von Extraktionen
product: xtract-universal
parent: xtract-universal
childidentifier: automation
permalink: /:collection/:path
weight: 8
lang: de_DE
---

<!--
Ausführen und Einplanen von Extraktionen
1.      Einführung
    a.      Run Dialog (Extraktion im Xtract Universal Designer ausführen)
    b.      GRUNDSÄTZLICH: Command Line und http-Aufruf
    c.      Aufruf aus Linux
    d.      Pro / Contra
2.      Aufruf via Skript (Powershell, Command)
3.      Aufruf via Scheduler
4.      Aufruf via ETL-Tool
5.      Parametrisierter Aufruf via URL-Parameter
a.      Parameterübergabe via http-Aufruf
b.      Parameterübergabe in xu.exe
6.      Ausführlicher Use Case (asynchroner Aufruf, parallel…)
        - asynchroner Aufruf
        - Run extraction in parallel
        – especially for incremental data load.
        - Ability to do dynamics filtering for the extraction

-->

Dieser Abschnitt beschäftigt sich mit dem [Ausführen](./automation/call-extraction) und Automatisieren von Extraktionen.

Die Extraktionen können über verschiedene Wege aufgerufen werden: 
- Über die [Kommandozeile](./automation/call-via-commandline)
- Über ein [Webservice](./automation/call-via-webservice)
- Über ein [externes Skript](./automation/call-via-script)
- Über einen [Scheduler](./automation/call-via-scheduler)
- Über ein [ETL-Tool](./automation/call-via-etl)

Extraktionen können über zwei Wege parametrisiert werden:
- Über [Extraktionsparameter](../xu-parameter)
- Über [Parametrisierung in SQL](../xu-parameter-sql)

