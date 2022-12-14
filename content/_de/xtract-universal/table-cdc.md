---
ref: xtract-universal-19
layout: page
title: Table CDC
description: Table
product: xtract-universal
parent: xtract-universal
childidentifier: table-cdc
permalink: /:collection/:path
weight: 86
lang: de_DE
progressstate: 5
---
Der folgende Abschnitt beschreibt die Funktion der Xtract Universal **Table CDC** Komponente.<br>
Mit der Komponente lassen sich Delta-Inhalte aus SAP Tabellen und Views abziehen. 
Dafür wird in SAP eine Log-Tabelle erstellt, die alle Änderungen (Einfügen, Ändern, Löschen) einer ausgewählten Tabelle oder Ansicht aufzeichnet.

{: .box-warning}
**Warnung!** **Fehlende Berechtigungen**
Um die Table Komponente zu verwenden, muss der Zugriff auf die entsprechenden Berechtigungsobjekte (RFC) in SAP verfügbar sein. 
Weitere Informationen finden Sie im Knowledge-Base-Artikel [SAP Zugriffsrechte: Table](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#table).

{: .box-tip }
**Tipp:** Grundlagen zum Produkt sind im Abschnitt [Erste Schritte mit Xtract Universal](./erste-schritte) beschrieben.

### Voraussetzungen

- SAP Version x.xx oder höher.
- Zugriff auf die entsprechenden Berechtigungsobjekte (RFC) in SAP muss gewährleistet sein, siehe [SAP Zugriffsrechte: Table](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#table).
- Der Benutzer, mit dem die SAp-Verbindung aufgebaut wird, muss SAP Tabellene rstellen dürfen, siehe [SAP Verbindung - Authentication](./erste-schritte/sap-verbindungen-anlegen#authentication).

### Table verwenden
{% include _content/de/xu-specific/define-extraction.md %}

Weitere Informationen zum Arbeiten mit der Table Komponente finden Sie in den folgenden Unterabschnitten.

---

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}