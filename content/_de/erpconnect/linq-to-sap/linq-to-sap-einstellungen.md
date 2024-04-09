---
ref: ec-linq-to-sap-07
layout: page
title: Einstellungen
description: Einstellungen
product: erpconnect
parent: linq-to-sap
permalink: /:collection/:path
weight: 7
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=linq-to-sap-einstellungen
---

{: .box-warning }
**Warnung! Veraltete Komponente** 
Das Add-On *LINQ to SAP* wird ab Visual Studio Version 2019 und .NET4.5 nicht mehr unterstützt.

![LINQToERP-Settings](/img/content/LINQToERP-Settings.png){:class="img-responsive"}

**Reuse Classes** <br>
erlaubt die Verwendung derselben Klasse (einer RFC-Struktur oder RFC-Tabelle) in verschiedenen SAP-Funktionsbausteinen. Haben z.B. zwei verschiedenen Bausteine eine RFC-Tabelle vom selben Typ, dann können beide Tabellen auch den selben Datentyp (z.B. RequestTable) haben und es ist nicht nötig, zwei verschiedene Datentypen(wie RequestTable und RequestTable1) zu definieren.

**Create Objects Outside Of Context Class** <br>
Klassen (wie Strukturen und Tabellen) eines SAP-Funktionsbausteins werden außerhalb der Context-Klasse definiert und könnten somit unabhängig von der Context-Klasse verwendet werden. 