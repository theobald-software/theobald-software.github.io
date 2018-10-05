---
layout: page
title: Einschränkungen bei Tabellen
description: Einschränkungen bei Tabellen
product: erpconnect-services
parent: ecs-anhang
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=einschraenkungen-bei-tabellen
---

ERPConnect Services und ERPConnect verwenden intern die Klasse ReadTable zum Lesen von SAP-Tabellen. 
Leider gibt es beim Lesen von Tabellen folgende Einschränkungen:

- Die Gesamtbreite der zu extrahierenden Spalten darf 512 Bytes nicht übersteigen.
- Andere Einschränkungen existieren abhängig von der SAP-Version. Zu lesende Tabellen dürfen keine Spalten vom Typ Fließkommazahl (FLTP) enthalten (wie zum Beispiel bei der Tabelle VBAK)
- Spezialtabellen wie TCURR liefern abgehackte Werte.

Sollte eine der obigen Punkte eintreten, wird der Tabellenzugriff mit einer entsprechenden Exception abstürzen. Um dieses Problem zu lösen, müssen Sie einen Z-Baustein im SAP-System installieren. Zur Installation des Funktionsbausteins Z_XTRACT_IS_TABLE
siehe das Kapitel [Z-Baustein installieren](../../../sap-customizing/umgehung-der-einschraenkungen-bei-der-tabellenextraktion).