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

### Eigenschaften von LINQ to SAP
Die Eigenschaften von *LINQ to SAP* werden im Fenster **Properties** der .erp-Datei angezeigt. <br>
Die wichtigsten Eigenschaften sind *Create Objects Outside Of Context Class* und *Reuse Classes*.

![LINQToERP-Settings](/img/content/LINQToERP-Settings.png){:class="img-responsive"}

#### Create Objects Outside Of Context Class
Klassen wie Strukturen und Tabellen eines SAP-Funktionsbausteins werden außerhalb der Context-Klasse definiert und können somit unabhängig von der Context-Klasse verwendet werden.

#### Reuse Classes
Erlaubt die Verwendung derselben Klasse einer RFC-Struktur oder RFC-Tabelle in verschiedenen SAP-Funktionsbausteinen. 

Beispiel:
Wenn zwei verschiedene Bausteine eine RFC-Tabelle vom selben Typ haben, können beide Tabellen auch den selben Datentyp (z.B. RequestTable) haben.
Es ist nicht nötig, zwei verschiedene Datentypen (z.B. RequestTable und RequestTable1) zu definieren.
 