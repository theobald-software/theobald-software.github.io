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
Dieser Abschnitt enthält Details zum automatischen und manuellen Ausführen von Extraktionen mit [Xtract Universal](./erste-schritte/eine-extraktion-ausfuehren). 
Extraktionen können über folgende Optionen aufgerufen werden:
- [Kommandozeile](./extraktionen-ausfuehren-und-einplanen/call-via-commandline)
- [Webservice](./extraktionen-ausfuehren-und-einplanen/call-via-webservice) 
- [Scheduler](./extraktionen-ausfuehren-und-einplanen/call-via-scheduler)
- [ETL-Tool](./extraktionen-ausfuehren-und-einplanen/call-via-etl)

### Ausführen von Extraktionen

Extraktionen werden durch eine HTTP-Anfrage ausgelöst und auf dem [Xtract Universal Server](./server#extraktion-auf-dem-server-ausführen) ausgeführt.
Abhängig von der Zielumgebung kann die Ausführung einer Extraktion entweder interaktiv oder unbeaufsichtigt ausgelöst werden.

#### Interaktive Ausführung
Extraktionen werden typischerweise interaktiv ausgelöst, wenn ein Benutzer neue oder aktualisierte Daten von SAP benötigt und kein zusätzliches Datenspeichersystem (wie ein Data Warehouse) vorhanden ist.

In diesen Szenarien wird die Ausführung einer Extraktion typischerweise durch eines der Plugins von Xtract Universal ausgelöst:
- [Alteryx](./destinationen/alteryx-de)
- [Power BI Connector](./destinationen/Power-BI-Connector)

Oder direkt über die Zielumgebung:
- [QlikSense & QlikView](./destinationen/qlik)

#### Unbeaufsichtigte Ausführung

Wenn ein zusätzliches Datenspeichersystem (Datenbank, Cloud-Speicher, Flat-Files) vorhanden ist, werden Extraktionen typischerweise als Teil eines ELT-Prozesses (Extract, Load, Transport) ausgelöst.
Dieser Prozess wird wiederum in regelmäßigen Abständen unbeaufsichtigt von einem Scheduler oder einer anderen Orchestrierungssoftware ausgeführt, die Extraktionen i.d.R. über das [XU-Kommandozeilen-Tool](./extraktionen-ausfuehren-und-einplanen/call-via-commandline) auslösen.

{: .box-note }
**Hinweis:** Xtract Universal verfügt nicht über einen eigenen Scheduler. Sie können Scheduler von Drittanbietern verwenden. 

{: .box-note }
**Hinweis:** Verwenden Sie das Tool, das mit der Webservice-Schnittstelle (HTTP- oder HTTPS-Streams) im CSV- oder JSON-Format kommuniziert, um [Pull-Destinationen](./destinationen#pull--und-push-destinationen) zu planen.

Für fortgeschrittene Szenarien oder Umgebungen, die keine Kommandozeilen-Tools unterstützen, können die [HTTP-Webservices](./extraktionen-ausfuehren-und-einplanen/call-via-webservice) zum Auslösen und Überwachen einer Extraktion auch über andere Wege gesendet werden.

### Ausführung paralleler Extraktionen
Die Anzahl der parallel ausführbaren Extraktionen ist abhängig von den eingesetzten Hardware-Ressourcen des Windows-Servers.

Jede gestartete Extraktion wird im Betriebssystem in einen separaten Prozess ausgeführt. Somit ist die Anzahl der Prozessorkerne für den Grad der Parallelisierung ausschlaggebend.

{: .box-note }
**Hinweis:** Xtract Universal skaliert entsprechend der verfügbaren Hardware-Ressourcen der Laufzeitumgebung.