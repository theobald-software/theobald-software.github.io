---
ref: ec-rfc-server-04
layout: page
title: Verbindungsunterbrechungen
description: Verbindungsunterbrechungen
product: erpconnect
parent: rfc-server
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=rfc-server-verbindungsunterbrechungen
---
Dieser Abschnitt enthält Informationen darüber, wie Sie mit Verbindungsunterbrechungen umgehen können.

### Verbindung prüfen und neustarten
Ein RFC-Server ist i.d.R. so gestaltet, dass er lange Zeit läuft, häufig Tag und Nacht. 
Dadurch ist es wahrscheinlich, dass die Verbindung zum SAP-System irgendwann abbricht, z.B. wenn das SAP-System gebootet wird oder wenn eine Netzwerkunterbrechung stattfindet.

Um sicherzustellen, dass der RFC-Server mit diesen Situationen umgehen kann, wird folgende Vorgehensweise empfohlen:

1. Starten Sie parallel zum RFC-Server ein Timer-Objekt, das alle 30 oder 60 Sekunden das *Elapsed*-Event auslöst. 
2. Fragen Sie im Timer-Event die Eigenschaft *IsRunning* des RFC-Servers ab, die die Verbindung zu SAP prüft. 
Falls diese Funktion *false* zurückliefert, starten Sie das Server-Objekt mit *Start* erneut. 
3. Wenn ein Verbindungsabbruch im Event *OnInternalException* abgefangen wird, rufen Sie nicht direkt *Start* auf. 
Starten Sie nach einem Abbruch nicht direkt neu ohne den Grund für den Abbruch zu bestimmen und zu bereinigen.
