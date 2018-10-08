---
layout: page
title: Einschränkungen umgehen
description: Einschränkungen umgehen
product: board-connector
parent: erste-schritte-mit-table
permalink: /:collection/:path
weight: 7
lang: de_DE
old_url: /BOARD-Connector-DE/default.aspx?pageid=einschraenkungen-umgehen
---

Standardmäßig bestehen folgende Einschränkungen bei der Extraktion von Tabellen:

- Die Gesamtbreite der zu extrahierenden Spalten darf 512 Bytes nicht überschreiten.
- Es können Fehler auftreten bei der Extraktion von Tabellen, die eine oder mehrere Spalten von Typ F (Floating Point) haben.

Um diese Einschränkungen zu umgehen, gibt es die Möglichkeit, einen Z-Baustein in Ihrem SAP-System zu installieren. Im Kaptiel SAP Customizing - [Einschränkungen umgehen](../sap-customizing/umgehung-der-einschraenkungen-bei-der-tabellenextraktion)  finden Sie eine Schritt-für-Schritt-Anleitung, die Ihnen zeigt, wie es gemacht wird. 

Die folgende Schritt-für-Schritt-Anleitung zeigt, wie es gemacht wird: [Umgehung der Einschränkungen bei der Tabellenextraktion](../sap-customizing/umgehung-der-einschraenkungen-bei-der-tabellenextraktion). <br>
Nach erfolgreicher Installation können Sie in den Settings das Kennzeichen „User Custom Function“ setzen. Damit nutzt die Komponente den neuen Baustein und umgeht die oben beschriebenen Einschränkungen.

Für hochperformante Massendaten-Extraktion von SAP-Tabellen haben wir den neuen Z-Funktionsbaustein *Z_XTRACT_IS_TABLE_COMPRESSION* entwickelt. <br>
Wir empfehen die Nutzung des neuen Z-Funktionsbausteins, welcher gleichzeitig der Nachfolger von*Z_XTRACT_IS_TABLE* ist.
Um den Z-Funktionsbaustein zu installieren, folgen Sie bitte den Anweisungen im Kapitel [Funktionsbaustein für Tabellen-Komprimierung](../sap-customizing/funktionsbaustein-fuer-table-komprimierung).