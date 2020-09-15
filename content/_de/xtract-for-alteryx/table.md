---
ref: xtract-for-alteryx-09
layout: page
title: Table
description: Table
product: xtract-for-alteryx
parent: xtract-for-alteryx
childidentifier: table
permalink: /:collection/:path
weight: 9
lang: de_DE
---

### Über die Table-Komponente
Die Table-Komponente kann verwendet werden, um Inhalte aus SAP-Tabellen und Views zu extrahieren und sie in Alteryx zu verarbeiten.
Die Table-Komponente wird auch verwendet, um mehrere Tabellen auf der SAP-Seite zu joinen, siehe[Table-Joins](./table/table-joins).<br> 

Die Table-Komponente unterstützt die folgenden Tabellentypen:
- Transparente Tabellen
- Pool-Tabellen
- Cluster-Tabellen

Eine Einführung in die Komponente und ihre Grundfunktionen finden Sie unter [Erste Schritte mit Xtract for Alteryx](./erste-schritte).

{: .box-note }
**Hinweis:** Beim Extrahieren von Tabellen aus SAP können Sie bei der Verwendung des SAP-Standardfunktionsbausteins (RFC_READ_TABLE) auf einige **Einschränkungen** stoßen.<br>
Um mögliche Einschränkungen umzugehen, können Sie auf Ihrem SAP-System den Theobald Software Z-Funktionsbaustein  *Z_THEO_READ_TABLE* verwenden. 

Weitere Informationen zu möglichen Einschränkungen und zur Installation des Z-Funktionsbausteins finden Sie unter [SAP Customizing - Z-Funktionsbaustein](./sap-customizing).

{: .box-note }
**Hinweis:** Die Table-Komponente wird im Allgemeinen für ein Full-Load verwendet. Für die inkrementelle Datenextraktion aus Tabellen und Views können Sie eine WHERE-Bedingung für bestimmte Felder, z.B. Zeitstempel, definieren. 

{: .box-tip }
**Tipp:** Die ODP-Komponente ist eine bequemere Option für die inkrementelle Datenextraktion, z.B. mit Hilfe von [Extraktoren](./odp/odp-extractors).

### Table-Komponente verwenden

1. Ziehen Sie "Xtract Table" per drag & drop auf Ihr Alteryx-Workflow.
2. Wählen Sie eine SAP-Verbindung, navigieren Sie zu der **gewählten Extraktion** und klicken Sie auf **[Edit]**. Das Hauptfenster der Komponente wird geöffnet.

Auf die meisten Funktionen der Komponente kann über das Hauptfenster zugegriffen werden.

### Table Hauptfenster - Funktionsübersicht
Die folgenden Abschnitte geben einen Überblick über die Funktionen, auf die über das Hauptkomponentenfenster zugegriffen werden kann.
![Table Extractor](/img/content/xfa/xfa-table-extractor.png){:class="img-responsive"}

Die folgenden Abschnitte enthalten Einzelheiten zu der Komponente:
{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}