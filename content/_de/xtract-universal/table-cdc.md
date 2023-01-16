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

<!---
{: .box-warning}
**Warnung!** **Fehlende Berechtigungen**
Um die Table Komponente zu verwenden, muss der Zugriff auf die entsprechenden Berechtigungsobjekte (RFC) in SAP verfügbar sein. 
Weitere Informationen finden Sie im Knowledge-Base-Artikel [SAP Zugriffsrechte: Table](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#table).
-->

{: .box-tip }
**Tipp:** Grundlagen zum Produkt sind im Abschnitt [Erste Schritte mit Xtract Universal](./erste-schritte) beschrieben.

### Über Table CDC

Change Data Capture (CDC) ist eine Methode, um Datenänderungen nachzuverfolgen, z.B. einfügen, aktualisieren und löschen in SAP Tabellen.
Die Table CDC component ertsellt in SAP eine Log-Tabelle, die alle Änderungen in einer ausgewählten SAP Tabelle oder Ansicht erfasst. 
Der Inhalt der Log-Tabelle wird nach jeder erfolgreichen Extraktion gelöscht. Daten, die nicht extrahiert wurden, werden nicht aus der Log-Tabelle gelöscht.


{: .box-note }
**Hinweis:** Cluster- und Pool-Tabellen werden von der Table CDC Komponente nicht unterstützt.

### Voraussetzungen

Die Installation der Funktionbausteine Z_THEO_DELETE_LOG_ENTRIES und Z_THEO_READ_TABLE ist Voraussetzung für die Nutzung der Table CDC Komponente. Die SAP Transportaufträge für beide Funktionbausteine befinden sich im Installationsverzeichnis:
`C:\ProgramFiles\XtractUniversal\ABAP\`.

<!---
- SAP Version x.xx oder höher.
- Zugriff auf die entsprechenden Berechtigungsobjekte (RFC) in SAP muss gewährleistet sein, siehe [SAP Zugriffsrechte: Table](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#table).
- Der Benutzer, mit dem die SAp-Verbindung aufgebaut wird, muss SAP Tabellene rstellen dürfen, siehe [SAP Verbindung - Authentication](./erste-schritte/sap-verbindungen-anlegen#authentication).
-->

### Table verwenden
{% include _content/de/xu-specific/define-extraction.md %}


---

Weitere Informationen zum Arbeiten mit der Table Komponente finden Sie in den folgenden Unterabschnitten.

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}