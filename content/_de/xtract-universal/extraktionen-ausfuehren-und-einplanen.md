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
Dieser Abschnitt enthält Details zum automatischen und manuellen Ausführen von Extraktionen mit [Xtract Universal](./erste-schritte/eine-extraktion-ausfuehren). 
Extraktionen können beispielsweise über folgende Optionen aufgerufen werden:
- [Kommandozeile](./extraktionen-ausfuehren-und-einplanen/call-via-commandline)
- [Webservice](./extraktionen-ausfuehren-und-einplanen/call-via-webservice) 
- [Scheduler](./extraktionen-ausfuehren-und-einplanen/call-via-scheduler)
- [ETL-Tool](./extraktionen-ausfuehren-und-einplanen/call-via-etl)

### Ausführen von Extraktionen

Extraktionen werden durch eine HTTP-Anfrage ausgelöst und auf dem [Xtract Universal Server](./server#extraktion-auf-dem-server-ausführen) ausgeführt.

Die Konfiguration von [Quellsystem](./einfuehrung/sap-verbindungen-anlegen#sap-verbindung-erstellen), [Zielumgebung](./destinationen/ziele-verwalten) und [Extraktion](./erste-schritte/eine-neue-extraktion-anlegen#extraktion-anlegen) definiert, wie der Datentransfer durchgeführt wird. <br>
Diese Konfiguration kann dynamische Elemente enthalten, wie [Laufzeitparameter](./extraktionen-ausfuehren-und-einplanen/extraktionsparameter) und [Skript-Ausdrücke](./fortgeschrittene-techniken/script-ausdruecke#skript-ausdrücke-als-auswahlparameter-für-extraktionen-verwenden).

Abhängig von der Zielumgebung kann die Ausführung einer Extraktion entweder interaktiv oder unbeaufsichtigt ausgelöst werden.

#### Interaktive Ausführung
Extraktionen werden typischerweise interaktiv ausgelöst, wenn ein Benutzer neue oder aktualisierte Daten von SAP benötigt und kein zusätzliches Datenspeichersystem (wie ein Data Warehouse) vorhanden ist.

In diesen Szenarien wird die Ausführung einer Extraktion typischerweise durch eines der Plugins von Xtract Universal ausgelöst:
- [Alteryx](./destinationen/alteryx-de)
- [Power BI Connector](./destinationen/Power-BI-Connector)
- [SQL Server Reporting Services](./destinationen/server-report-services)

Oder direkt über die Zielumgebung:
- [QlikSense & QlikView](./destinationen/qlik)

#### Unbeaufsichtigte Ausführung

Wenn ein zusätzliches Datenspeichersystem (Datenbank, Cloud-Speicher, Flat-Files) vorhanden ist, werden Extraktionen typischerweise als Teil eines ELT-Prozesses (Extract, Load, Transform) ausgelöst.
Dieser Prozess wird wiederum in regelmäßigen Abständen unbeaufsichtigt von einem Scheduler oder einer anderen Orchestrierungssoftware ausgeführt, die Extraktionen i.d.R. über das [XU-Kommandozeilen-Tool](./extraktionen-ausfuehren-und-einplanen/call-via-commandline) auslösen.

Für fortgeschrittene Szenarien oder Umgebungen, die keine Kommandozeilen-Tools unterstützen, können die [HTTP-Webservices](./extraktionen-ausfuehren-und-einplanen/call-via-webservice) zum Auslösen und Überwachen einer Extraktion genutzt werden.

{: .box-note }
**Hinweis:** Xtract Universal verfügt nicht über einen eigenen Scheduler. Sie können Scheduler von Drittanbietern verwenden. 


### Ausführung paralleler Extraktionen
Die Anzahl der parallel ausführbaren Extraktionen ist abhängig von den eingesetzten Hardware-Ressourcen des Windows-Servers.

Jede gestartete Extraktion wird im Betriebssystem in einen separaten Prozess ausgeführt. <br>
Entscheidend sind Zuverlässigkeit und Durchsatz der Netzwerkverbindung, verfügbarer Arbeitsspeicher, und Festplattendurchsatz (für Logging und Caching).<br>
Darüber hinaus wird der der mögliche Parallelisierungsgrad wesentlich durch die Performance der SAP-Quellsysteme und der Zielumgebungen bestimmt.

{: .box-note }
**Hinweis:** Xtract Universal skaliert entsprechend der verfügbaren Hardware-Ressourcen der Laufzeitumgebung.

### Automatisches Erstellen von Extraktionen

Ab Xtract Universal Version 4.26.1, wird bei der Installation das Kommandozeilentool xu-config.exe mit ausgeliefert, z.B. in `C:\Program Files\XtractUniversal\xu-config.exe`.<br>
Das Tool ermöglicht das Erstellen von Extraktionen, Datenquellen und Destinationen außerhalb des Xtract Universal Designers. 

Mehr Informationen dazu finden Sie im Knowledge Base Artikel [Creating extractions without using the Xtract Universal designer GUI](https://kb.theobald-software.com/xtract-universal/using-config-command-line-tool).
