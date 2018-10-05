---
layout: page
title: Einschränkungen
description: Einschränkungen
product: xtract-rs
parent: sap-tabellen
permalink: /:collection/:path
weight: 5
lang: de_DE
old_url: /Xtract-RS-DE/default.aspx?pageid=einschraenkungen
---

Standardmäßig bestehen folgende Einschränkungen bei der Extraktion von Tabellen:

- Die Gesamtbreite der zu extrahierenden Spalten darf 512 Bytes nicht überschreiten.
- Es ist nicht möglich, Tabellen zu extrahieren, die eine oder mehrere Spalten von Typ F (Floating Point) haben.

Um diese Einschränkungen zu umgehen, gibt es die Möglichkeit, einen Z-Funktionsbaustein in Ihrem SAP-System zu installieren. 

Die folgende Schritt-für-Schritt-Anleitung zeigt, wie es gemacht wird: [Umgehung der Einschränkungen bei der Tabellenextraktion](../../sap-customizing/umgehung-der-einschraenkungen-bei-der-tabellenextraktion). 
Nach erfolgreicher Installation können Sie in den Settings das Kennzeichen „User Custom Function“ setzen. Damit nutzt Xtract IS den neuen Baustein und umgeht die oben beschriebenen Einschränkungen.


Für hochperformante Massendaten-Extraktion von SAP-Tabellen haben wir den neuen Z-Funktionsbaustein*Z_XTRACT_IS_TABLE_COMPRESSION* entwickelt. <br>
Wir empfehen die Nutzung des neuen Z-Funktionsbausteins, welcher gleichzeitig der Nachfolger von *Z_XTRACT_IS_TABLE* ist.<br>
Um den Z-Funktionsbaustein zu installieren, folgen Sie bitte den Anweisungen im Kapitel [Funktionsbaustein für Tabellen-Komprimierung](../../sap-customizing/funktionsbaustein-fuer-table-komprimierung).