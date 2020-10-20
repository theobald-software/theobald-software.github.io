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

Xtract Universal ist entsprechend einer [Client-Server-Architektur](./einfuehrung) aufgebaut. 
Die Ausführung einer Extraktion findet auf dem [Server](./server) statt. Xtract Universal bietet zwei Möglichkeiten, um eine angelegte Extraktion auszuführen:
- Aufruf über das mitgelieferte [Kommandozeilen-Tool](./call-via-commandline), das in einer Windows- und einer Linux-Version (xu.exe bzw. xu.elf) angeboten wird  
- Aufruf via [Webservice-Call](./call-via-webservice) 

### Extraktion im XU Designer manuell ausführen 
Die manuelle Extraktion und direkte Ausführung im Designer wird im Abschnitt [Eine Extraktion ausführen](./erste-schritte/eine-extraktion-ausfuehren) beschrieben.

Das beschriebene Beispiel zeigt, dass die Werte bestimmter Parameter der Extraktionen dynamisch beim Aufruf gesetzt werden können. Mehr Details zum Setzen der Parameter finden Sie im Abschnitt [Parametrisierung](./xu-parameter).

<!---
Offene Frage und Vorschläge von YW:
- Ich fände einen Verlgeich, Vor-/Nachteile zwischen Anstarten der Extraktion via xu.exe vs. http-Webservice sehr hilfreich
- Frage: Was passiert, wenn man dieselbe Extraktione mehrfach anstartet?
- Wieviele Extraktionen können gleichzeitig ausgeführt werden?
-->
*********
#### Weitereführende Links:
- [Pull- und Push-Destinationen ](./xu-destinationen#pull--und-push-destinationen)