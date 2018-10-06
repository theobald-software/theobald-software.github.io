---
layout: page
title: Einschränkungen
description: Einschränkungen
product: xtract-is
parent: xtract-is-table
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=einschraenkungen
---

Standardmäßig bestehen folgende Einschränkungen bei der Extraktion von Tabellen:

- Die Gesamtbreite der zu extrahierenden Spalten darf 512 Bytes nicht überschreiten
- Andere Einschränkungen existieren abhängig von der SAP-Version. 
  Fehler können auftreten bei der Extraktion von Tabellen, die eine oder mehrere Spalten vom Typ f (FLTP, floating point), DEC (Decimal und Prozentzahl z.B.) oder x (RAW, LRAW) haben.

Um diese Einschränkungen zu umgehen, gibt es die Möglichkeit, einen Z-Funktionsbaustein in Ihrem SAP-System zu installieren.

Für hochperformante Massendaten-Extraktion von SAP-Tabellen haben wir den neuen Z-Funktionsbaustein Z_XTRACT_IS_TABLE_COMPRESSION entwickelt. 
Wir empfehlen die Nutzung dieses Z-Funktionsbausteins, welcher gleichzeitig der Nachfolger von unserem älteren Funktionsbaustein Z_XTRACT_IS_TABLE ist.

Um den Z-Funktionsbaustein manuell zu installieren, folgen Sie den Anweisungen in unserem Knowledgebase-Artikel.
Alternativ können Sie den Funktionsbaustein mit Hilfe des mitgelieferten Transportauftrags thtrans.zip installieren, den Sie im Unterordner ABAP des Installationsordners finden. 
Weiterführende Informationen zur Installation eines Transportauftrags finden Sie im folgenden [Knowledgebase-Artikel](https://my.theobald-software.com/index.php?/Knowledgebase/Article/View/68/67/how-to-import-an-sap-transport-request-with-the-transport-management-system-stms) oder in der SAP-Hilfe.

Weitere Details zur manuellen Installation finden Sie im Kapitel SAP Customizing. 
