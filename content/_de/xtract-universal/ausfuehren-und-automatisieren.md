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
Dieser Abschnitt enthält Details zum automatischen und manuellen Ausführen von Extraktionen im [Xtract Universal Designer](./erste-schritte/eine-extraktion-ausfuehren). Extraktionen können mit den folgenden Optionen aufgerufen werden:
- [Kommandozeile](./extraktionen-ausfuehren-und-einplanen/call-via-commandline)
- [Webservice](./extraktionen-ausfuehren-und-einplanen/call-via-webservice) 
- [Scheduler](./extraktionen-ausfuehren-und-einplanen/call-via-scheduler)
- [ETL-Tool](./extraktionen-ausfuehren-und-einplanen/call-via-etl)

### Ausführen einer Extraktion
Beim Ausführen einer Extraktion werden Daten aus dem SAP-Quellsystem extrahiert und in die Zielumgebung übertragen.

Die Konfiguration der Entitäten [source](./einfuehrung/sap-verbindungen-anlegen#sap-verbindung-erstellen), [destination](./destinationen/ziele-verwalten) und [extraction](./erste-schritte/eine-neue-extraktion-anlegen#extraktion-anlegen) definiert, wie genau dieser Datentransfer durchgeführt wird. 

Diese Konfiguration kann dynamische Elemente enthalten, wie dynamische [Laufzeitparameter](./extraktionen-ausfuehren-und-einplanen/extraktionsparameter) und [script-expressions](./fortgeschrittene-techniken/script-ausdruecke#skript-ausdrücke-als-auswahlparameter-für-extraktionen-verwenden).

Extraktionen werden durch eine HTTP-Anfrage ausgelöst und auf dem [Xtract Universal Server](./server#extraktion-auf-dem-server-ausführen) ausgeführt.

### Ausführung paralleler Extraktionen
Die Anzahl der parallel ausführbaren Extraktionen ist abhängig von den eingesetzten Hardware-Ressourcen des Windows-Servers.

Jede gestartete Extraktion wird im Betriebssystem in einen separaten Prozess ausgeführt. Somit ist die Anzahl der Prozessorkerne für den Grad der Parallelisierung ausschlaggebend.

{: .box-note }
**Hinweis:** Xtract Universal skaliert entsprechend den verfügbaren Hardware-Ressourcen der Laufzeitumgebung.

### Auslösen von Extraktionen
Abhängig von der Zielumgebung kann die Ausführung einer Extraktion entweder interaktiv oder unbeaufsichtigt ausgelöst werden.

{: .box-note }
**Hinweis:** Xtract Universal verfügt nicht über einen eigenen Scheduler. Sie können Scheduler von Drittanbietern verwenden. 

Extraktionen werden typischerweise interaktiv ausgelöst, wenn ein Benutzer neue oder aktualisierte Daten von SAP benötigt und kein zusätzliches Datenspeichersystem (wie ein Data Warehouse) vorhanden ist.

In diesen Szenarien wird die Ausführung einer Extraktion typischerweise durch eines der Plugins von Xtract Universal ausgelöst:
- [Alteryx](./destinationen/alteryx-de)
- [Power BI Connector](./destinationen/Power-BI-Connector)

Oder direkt über die Zielumgebung:
- [QlikSense & QlikView](./destinationen/qlik)

{: .box-note }
**Hinweis:** Verwenden Sie das Tool, das mit der Webservice-Schnittstelle (HTTP- oder HTTPS-Streams) im CSV- oder JSON-Format kommuniziert, um [pull destinations](./destinationen#pull--und-push-destinationen) zu planen.

Wenn ein zusätzliches Datenspeichersystem (Datenbank, Cloud-Speicher, Flat-Files) vorhanden ist, werden Extraktionen typischerweise als Teil eines ELT-Prozesses (**E**xtract, **L**oad, **T**ransform) ausgelöst, <br> der in regelmäßigen Abständen unbeaufsichtigt von einem Scheduler oder einer anderen Orchestrierungssoftware ausgeführt wird.

In diesen Szenarien wird die Ausführung einer Extraktion typischerweise durch die Ausführung des [XU-Kommandozeilen-Tools](./extraktionen-ausfuehren-und-einplanen/call-via-commandline) von der Orchestrierungssoftware ausgelöst. 

{: .box-tip }
**Empfehlung:** Für fortgeschrittene Szenarien oder Umgebungen, die keine Befehlszeilenprogramme unterstützen, können die [HTTP-Webservices](./extraktionen-ausfuehren-und-einplanen/call-via-webservice) zum Auslösen der Extraktion und Überwachung auch über andere Wege gesendet werden.
