---
ref: ec-rfc-server-03
layout: page
title: Verbindungsunterbrechungen
description: Verbindungsunterbrechungen
produc: erpconnectx
parent: rfc-server
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=rfc-server-verbindungsunterbrechungen
---

Ein RFC-Server ist im Normalfall so gestaltet, dass er sehr lange Zeit (oftmals Tag und Nacht) läuft. Es wird also früher oder später passieren, dass die Verbindung zum SAP-System abbricht. Dies kann vorkommen, weil das SAP-System durchgestartet wird oder weil beispielsweise innerhalb des Netzwerks eine Unterbrechung der Verbindung stattfindet.

Um sicherzustellen, dass der RFC-Server mit dieser Situation umgehen kann, ist folgende Vorgehensweise empfohlen:

1. Starten Sie parallel zum RFC-Server auch ein Timer-Objekt, das alle 30 oder 60 Sekunden das *Elapsed*-Event auslöst. 
2. Fragen Sie im Timer-Event die Eigenschaft *IsRunning* des RFC-Servers ab, die definiert, ob noch eine Verbindung zum SAP besteht. Falls diese Funktion *false* zurückliefert, starten Sie das Server-Objekt mit *Start()* erneut. 
3. Auch wenn ein Verbindungsabbruch im Event *OnInternalException* abgefangen werden könnte, widerstehen Sie der Versuchung, direkt in diesem Event ein *Start()* aufzurufen. Es macht keinen Sinn, sofort nach dem Abbruch einen Neustart zu versuchen, da der Grund für den Abbruch zu diesem Zeitpunkt bestimmt noch nicht bereinigt ist.
