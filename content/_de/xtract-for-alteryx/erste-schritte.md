---
ref: xtract-for-alteryx-05
layout: page
title: Erste Schritte mit Xtract for Alteryx
description: Erste Schritte mit Table
product: xtract-for-alteryx
parent: xtract-for-alteryx
childidentifier: erste-schritte
permalink: /:collection/:path
weight: 5
lang: de_DE
---

Der folgende Abschnitt gibt eine allgemeine Einführung in Xtract for Alteryx am Beispiel der Xtract Table-Komponente.
Die im folgenden Abschnitt beschriebenen Informationen sind eine Voraussetzung für alle nachfolgenden Abschnitte.

{: .box-note }
**Hinweis:** Eine [SAP-Verbindung](./sap-verbindungen-anlegen) ist eine Voraussetzung für die Verwendung der Komponenten von Xtract for Alteryx.

### Eine Extraktion anlegen

1. Ziehen Sie die **Xtract Table** (1) Komponente auf den Canvas um eine neue Tabellenextraktion anzulegen. Das Konfigurationsfenster wird geöffnet. 
![Create-New-Table-Extraction](/img/content/xfa/xfa_create_table_extraction_01.png){:class="img-responsive"}
2. Unter **Connection**, wählen Sie eine vorhandene  SAP-Verbindung (2) oder erstellen Sie eine neue SAP-Verbindung (3). Für mehr Informationen, siehe [SAP-Verbindung](./sap-verbindungen-anlegen).
3. Unter **Selected Extraction** klicken Sie auf **[Edit]**  um eine neue Tabellenextraktion zu konfigurieren.
![Create-New-Table-Extraction2](/img/content/xfa_create_table_extraction_02.png){:class="img-responsive"}
4. Das Hauptfenster der Komponente wird geöffnet. In diesem Fenster können Sie einfache Tabellenextraktionen oder Tabellen-Joins für Extraktionen definieren. Im folgenden Beispiel wird eine einzelne Tabelle extrahiert.

{% include _content/de/table/extraktion-anlegen.md  %}
![Table-Main](/img/content/xfa/xfa-table-preview.png){:class="img-responsive"}


*****
#### Weiterführende Links
- [BAPI](./bapis-und-funktionsbausteine)
- [BW Cube](./bw-cube)
- [BW Hierarchy](./bw-hierarchien)
- [ODP](./odp)
- [Table](./table) - weitere Details zur Table-Komponente
