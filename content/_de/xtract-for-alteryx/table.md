---
ref: xtract-for-alteryx-09
layout: page
title: Xtract Table
description: Table
product: xtract-for-alteryx
parent: xtract-for-alteryx
childidentifier: table
permalink: /:collection/:path
weight: 9
lang: de_DE
---

Der folgende Abschnitt beschreibt die Funktion der Xtract Table-Komponente. <br>
Die Table Komponente kann verwendet werden, um Inhalte aus SAP-Tabellen und Views zu extrahieren und sie in Alteryx zu verarbeiten.
Die Table Komponente wird auch verwendet, um mehrere Tabellen auf der SAP-Seite zu joinen, siehe [Table-Joins](./table/table-joins).<br> 

Die Table-Komponente unterstützt die folgenden Tabellentypen:
- Transparente Tabellen
- Pool-Tabellen
- Cluster-Tabellen

{: .box-warning}
**Warnung!** **Fehlende Berechtigungen**
Um die Table Komponente zu verwenden, muss der Zugriff auf die entsprechenden Berechtigungsobjekte (RFC) in SAP verfügbar sein. 
Weitere Informationen finden Sie im Knowledge-Base-Artikel [SAP Zugriffsrechte: Table](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#table).


{: .box-note }
**Hinweis:** Beim Extrahieren von Tabellen aus SAP können Sie bei der Verwendung des SAP-Standardfunktionsbausteins (RFC_READ_TABLE) auf einige **Einschränkungen** stoßen.
Um mögliche Einschränkungen umzugehen, können Sie auf Ihrem SAP-System den Theobald Software Z-Funktionsbaustein  *Z_THEO_READ_TABLE* verwenden. 
Weitere Informationen zu möglichen Einschränkungen und zur Installation des Z-Funktionsbausteins finden Sie unter [SAP Customizing - Z-Funktionsbaustein](./sap-customizing).

{: .box-tip }
**Tipp:** Die Table-Komponente wird im Allgemeinen für einen Full-Load verwendet. 
Für die inkrementelle Datenextraktion aus Tabellen und Views kann eine WHERE-Bedingung für bestimmte Felder, z.B. Zeitstempel, definiert werden. 
Eine einfachere Option für die inkrementelle Datenextraktion bietet die ODP-Komponente, z.B. mit Hilfe von [Extraktoren](./odp/odp-extractors).

### Table verwenden

1. Ziehen Sie die "Xtract Table" Komponente per drag & drop auf Ihr Alteryx-Workflow.
2. Wählen Sie eine SAP-Verbindung, navigieren Sie zu der **gewählten Extraktion** und klicken Sie auf **[Edit]**. Das Hauptfenster der Komponente wird geöffnet.

Auf die meisten Funktionen der Komponente kann über das Hauptfenster zugegriffen werden.

{: .box-tip }
**Tipp:** Grundlagen zum Produkt sind im Abschnitt [Erste Schritte mit Xtract for Alteryx](./erste-schritte) beschrieben.

### Funktionsübersicht
Die folgenden Abschnitte geben einen Überblick über die Funktionen, auf die über das Hauptkomponentenfenster zugegriffen werden kann.
![Table Extractor](/img/content/xfa/xfa-table-extractor.png){:class="img-responsive"}

Weitere Informationen zum Arbeiten mit der Table Komponente finden Sie in den folgenden Unterabschnitten.

---

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}