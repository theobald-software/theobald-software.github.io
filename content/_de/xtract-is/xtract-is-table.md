---
ref: xtract-is-05
layout: page
title: Xtract IS Table
description: Xtract IS Table
product: xtract-is
parent: xtract-is
childidentifier: xtract-is-table
permalink: /:collection/:path
weight: 5
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=table
---

Der folgende Abschnitt gibt einen Überblick über die Komponente Xtract IS Table. 
![XIS_Table_overview](/img/content/xis/xis_table_overview.png){:class="img-responsive"}

### Extraktionstypen von Xtract IS Table

- **Table**: ermöglicht die Massendatenextraktion direkt aus SAP-Tabellen und -Views.<br>
- **Table-Join**: ermöglicht das Zusammenführen von zwei oder mehr SAP-Tabellen auf der SAP-Seite vor der Extraktion.<br>

### Quell-Objekte unterstützt von Xtract IS Table

- Transparente Tabellen
- ABAP CDS views
- Views
- Pool Tabellen (kein Joining möglich)
- Cluster Tabellen (kein Joining möglich)

### Xtract Table component
1. Wählen Sie die Komponente Xtract Table aus der SSIS-Toolbox aus. 
2. Ziehen Sie die Komponente per Drag & Drop auf die Datenflussaufgabe. 
3. Doppelklicken Sie auf das Symbol **Xtract Table**. Das Fenster "Define data source for SAP Tables" wird geöffnet.

Die folgenden Abschnitte geben einen Überblick über die Funktionen, die über das Hauptfenster "Define data source for SAP Tables" zugänglich sind.
![Table_define_source](/img/content/xis/table_define_data_source_window.png){:class="img-responsive"}

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}