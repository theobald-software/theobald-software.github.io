---
ref: xu-run-dialog-01
layout: page
title: Extraktionen ausführen
description: Extraktion manuell mit dem Run Dialog ausführen
product: xtract-universal
parent: automation
permalink: /:collection/:path
weight: 1
lang: de_DE
---
Xtract Universal ist entsprechend einer [Client-Server-Architektur](../einfuehrung) aufgebaut. 
Die Ausführung einer Extraktion findet auf dem [XU Server](../server#extraktion-auf-dem-server-ausführen) statt. Xtract Universal bietet zwei Möglichkeiten, um eine angelegte Extraktion auszuführen:
- Aufruf über das mitgelieferte [Kommandozeilen-Tool](../automation/call-via-commandline), das in einer Windows- und einer Linux-Version (xu.exe bzw. xu.elf) angeboten wird  
- Aufruf via [Webservice-Call](../automation/call-via-webservice) 

### Ausführung paralleler Extraktionen

Die Anzahl der parallel ausführbaren Extraktionen ist abhängig von den eingesetzten Hardware-Ressourcen des Windows-Servers. 

Generell skaliert Xtract Universal im Zuge dieser Ressourcen durch gekapselte Ausführungsprozesse des Windows-Betriebsystems. 

Jede gestartete Extraktion wird im Betriebssystem in einen separaten Prozess ausgeführt. Somit ist die Anzahl der Prozessorkerne für den Grad der Parallelisierung ausschlaggebend.

{: .box-note }
**Hinweis:** Xtract Universal skaliert im Zuge der eingesetzten Hardware-Ressourcen der Laufzeitumgebung.

### Extraktion im XU Designer manuell ausführen 
Die manuelle Extraktion und direkte Ausführung im Designer wird im Abschnitt [Eine Extraktion ausführen](../erste-schritte/eine-extraktion-ausfuehren) beschrieben.

Das beschriebene Beispiel zeigt, dass die Werte bestimmter Parameter der Extraktionen dynamisch beim Aufruf gesetzt werden können. Mehr Details zum Setzen der Parameter finden Sie im Abschnitt [Parametrisierung](../automation/xu-parameter).

<!---
Offene Frage und Vorschläge von YW:
- Ich fände einen Verlgeich, Vor-/Nachteile zwischen Anstarten der Extraktion via xu.exe vs. http-Webservice sehr hilfreich
- Frage: Was passiert, wenn man dieselbe Extraktione mehrfach anstartet?
- Wieviele Extraktionen können gleichzeitig ausgeführt werden?
-->
****
#### Weiterführende Links:
- [Pull- und Push-Destinationen ](../xu-destinationen#pull--und-push-destinationen)