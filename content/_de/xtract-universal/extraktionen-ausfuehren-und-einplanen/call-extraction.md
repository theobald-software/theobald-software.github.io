---
ref: xu-run-dialog-01
layout: page
title: Extraktionen ausführen
description: Extraktion manuell mit dem Run Dialog ausführen
product: xtract-universal
parent: extraktionen-ausfuehren-und-einplanen
permalink: /:collection/:path
weight: 1
lang: de_DE
---
Xtract Universal ist entsprechend einer [Client-Server-Architektur](../einfuehrung) aufgebaut. 

Die Ausführung einer Extraktion findet auf dem [XU Server](../server#extraktion-auf-dem-server-ausführen) statt. Xtract Universal bietet zwei Möglichkeiten, um eine angelegte Extraktion auszuführen:

- Aufruf über das mitgelieferte [Kommandozeilen-Tool](./call-via-commandline), das in einer Windows- und einer Linux-Version (xu.exe bzw. xu.elf) angeboten wird  
- Aufruf via [Webservice-Call](./call-via-webservice) 

### Ausführung paralleler Extraktionen

Die Anzahl der parallel ausführbaren Extraktionen ist abhängig von den eingesetzten Hardware-Ressourcen des Windows-Servers.  
Jede gestartete Extraktion wird im Betriebssystem in einen separaten Prozess ausgeführt. Somit ist die Anzahl der Prozessorkerne für den Grad der Parallelisierung ausschlaggebend.

{: .box-note }
**Hinweis:** Xtract Universal skaliert entsprechend der eingesetzten Hardware-Ressourcen der Laufzeitumgebung.

### Extraktion im XU Designer manuell ausführen 
Die manuelle Extraktion und direkte Ausführung im Designer wird im Abschnitt [Eine Extraktion ausführen](../erste-schritte/eine-extraktion-ausfuehren) beschrieben.
Extraktionsparameter können wie im dort beschriebenen Beispiel beim Aufruf der Extraktion dynamisch gesetzt werden. Mehr Details zum Setzen der Parameter finden Sie im Abschnitt [Extraktionsparameter](./extraktionsparameter).

<!---
Offene Frage und Vorschläge von YW:
- Ich fände einen Verlgeich, Vor-/Nachteile zwischen Anstarten der Extraktion via xu.exe vs. http-Webservice sehr hilfreich
- Frage: Was passiert, wenn man dieselbe Extraktione mehrfach anstartet?
- Wieviele Extraktionen können gleichzeitig ausgeführt werden?
-->
****
#### Weiterführende Links:
- [Pull- und Push-Destinationen ](../destinationen#pull--und-push-destinationen)
