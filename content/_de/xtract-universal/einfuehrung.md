---
ref: xtract-universal-03
layout: page
title: Einführung in Xtract Universal
description: Einführung
product: xtract-universal
parent: xtract-universal
childidentifier: einfuehrung
permalink: /:collection/:path
weight: 5
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=einfuehrung
progressstate: 5
---

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für Xtract Universal.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [Xtract Universal HelpCenter](https://helpcenter.theobald-software.com/xtract-universal/documentation/introduction/).

### Glossar

Xtract Universal verwendet die folgenden Begriffe für seine Komponenten:

| Begriff | Beschreibung |
|:------------ | :------------ |
| Extraktion | Eine [Extraktion](./erste-schritte/eine-neue-extraktion-anlegen) ist eine Kombination aus einem Quellsystem (SAP-System), einer Destination (z.B. SQL-Server), einem Extraktionstyp (z.B. Table) und den zu extrahierenden SAP-Daten. Wenn eine Extraktion ausgeführt wird, werden die im Extraktionstyp definierten SAP-Daten vom Quellsystem extrahiert und in die zugewiesene Destination geschrieben. Beispiel: Die SAP Tabelle KNA1 wird aus einem SAP S/4HANA System extrahiert und in einen SQL Server geschrieben. <br>Alle angelegten Extraktionen sind im Hauptfenster des Designers aufgelistet: ![extraction](/img/content/xu/main-window-extractionlist.png){:class="img-responsive"}| 
| Extraktionstyp (Komponente) | Der Extraktionstyp definiert, welche SAP Daten extrahiert werden und mit welcher Methode. Xract Universal bietet die folgenden Extraktionstypen: [BAPI](./bapis-und-funktionsbausteine), [BWCube](./bw-infocubes-und-bex-queries), [BW Hierarchy](./bw-hierarchien), [DeltaQ](./datasource-deltaq), [ODP](./odp), [OHS](./bw-open-hub-services), [SAP Query](./sap-queries), [Report](./report-abap-reports-ansteuern), [Table](./table) and [Table CDC](./table-cdc). | 
| Quellsystem | Ein Quellsystem stellt eine Verbindung zu einem SAP-System dar, siehe [SAP-Verbindung anlegen](./einfuehrung/sap-verbindungen-anlegen). | 
| Destination | Eine Destination definiert, wie die extrahierten SAP Daten verarbeitet werden. Daten können für lokale oder cloudbasierte Dateisysteme in ein entsprechendes Datenformat konvertiert werden oder direkt an Zielumgebungen wie Datenbanken und andere APIs übergeben werden. Für eine komplette Liste verfügbarer Destinationen, siehe [Destinationen](./destinationen). | 

{: .box-note }
**Hinweis:** Extraktionstyp ist der bevorzugte Begriff für die Definition, welche SAP-Daten mit welcher Methode extrahiert werden. Der Begriff „Komponente“ oder „Extraktionskomponente“ kann aufgrund der Wiederverwendung von Informationen in allen Produkten von Theobald Software als Synonym angesehen werden.
<!---
| Begriff | Beschreibung |
|:------------ | :------------ |
| Extraktion | Extraktionen sind die Hauptentitäten in Xtract Universal. Eine [Extraktion](./erste-schritte/eine-neue-extraktion-anlegen) ist eine Kombination aus einem Quellsystem (SAP-System), einer Destination (z.B. SQL-Server) und einem definierten Extraktionstyp (z.B. Table). Wenn eine Extraktion ausgeführt wird, werden die Daten, die im Extraktionstyp definiert sind vom Quellsystem extrahiert und in die zugewiesene Destination geschrieben. Eine Extraktion im Designer: ![extraction](/img/content/extraction.png){:class="img-responsive"}| 
| Extraktionstyp | Der Extraktionstyp definiert, welche SAP Daten extrahiert werden und mit welcher Methode. Xract Universal bietet 9 Extraktionstypen: [BAPI](./bapis-und-funktionsbausteine), [BWCube](./bw-infocubes-und-bex-queries), [BW Hierarchy](./bw-hierarchien), [DeltaQ](./datasource-deltaq), [ODP](./odp), [OHS](./bw-open-hub-services), [SAP Query](./sap-queries), [Report](./report-abap-reports-ansteuern) and [Table](./table). | 
| Quellsystem | Ein Quellsystem stellt eine Verbindung zu einem SAP-System dar, siehe [SAP-Verbindung anlegen](./einfuehrung/sap-verbindungen-anlegen). | 
| Destination | Eine Destination definiert, wie die extrahierten SAP Daten verarbeitet werden. Daten können für lokale oder cloudbasierte Dateisysteme in ein entsprechendes Datenformat konvertiert werden oder direkt an Zielumgebungen wie Datenbanken und andere APIs übergeben werden. Für eine komplette Liste verfügbarer Destinationen, siehe [Destinationen](./destinationen). | 
-->

<!---
- **Extraktion:**
Extraktionen sind die Hauptentitäten in Xtract Universal. 
Eine [Extraktion](./erste-schritte/eine-neue-extraktion-anlegen) ist eine Kombination aus einem Quellsystem (SAP-System), einer Destination (z.B. SQL-Server) und einem definierten Extraktionstyp (z.B. Table). 
Wenn eine Extraktion ausgeführt wird, werden die Daten, die im Extraktionstyp definiert sind vom Quellsystem extrahiert und in die zugewiesene Destination geschrieben. 
Eine Extraktion im Designer: <br>
![extraction](/img/content/extraction2.png){:class="img-responsive"}
- **Extraktionstyp:**
Der Extraktionstyp definiert, welche SAP Daten extrahiert werden und mit welcher Methode. 
Xract Universal bietet 9 Extraktionstypen: [BAPI](./bapis-und-funktionsbausteine), [BWCube](./bw-infocubes-und-bex-queries), [BW Hierarchy](./bw-hierarchien), [DeltaQ](./datasource-deltaq), [ODP](./odp), [OHS](./bw-open-hub-services), [SAP Query](./sap-queries), [Report](./report-abap-reports-ansteuern) and [Table](./table).
- **Quellsystem:**
Ein Quellsystem stellt eine Verbindung zu einem SAP-System dar, siehe [SAP-Verbindung anlegen](./einfuehrung/sap-verbindungen-anlegen).
- **Destination:**
Eine Destination definiert, wie die extrahierten SAP Daten verarbeitet werden. 
Daten können für lokale oder cloudbasierte Dateisysteme in ein entsprechendes Datenformat konvertiert werden oder direkt an Zielumgebungen wie Datenbanken und andere APIs übergeben werden. 
Für eine komplette Liste verfügbarer Destinationen, siehe [Destinationen](./destinationen).  
-->

#### Beispiel
![glossary](/img/content/glossary-example.png){:class="img-responsive" width="450px"}


### Grundfunktionalität - Architektur

Die Verwendung von Xtract Universal umfasst zwei Hauptphasen: Entwurfsphase und Ausführungsphase

Während der Designphase kann der Benutzer:
- Extraktionen, Quellen und Destinationen erstellen und modifizieren.
- die [Servereinstellungen](./server/server-einstellungen) im [Designers](./erste-schritte/designer-overview) anpassen. 

Während der Ausführungsphase kann der Benutzer:
- die in der Designphase entworfenen Extraktionen ausführen. 
- Laufzeitparameter an Extraktionen übergeben.

Die Ausführung der Extraktionen findet auf dem [Server](./server) statt. 
Abhängig von der Destination kann eine Ausführung entweder durch das [XU-Kommandozeilen-Tool - xu.exe / xu.elf](./extraktionen-ausfuehren-und-einplanen/call-via-commandline) oder durch die konsumierende Destination ausgelöst werden. 
Für mehr Informationen, siehe [Pull- und Push-Destinationen](./destinationen#pull--und-push-destinationen). 

![xu-arch-01](/img/content/xu/xu-arch-01.png){:class="img-responsive"}

****

Weitere Informationen finden Sie in den folgenden Unterabschnitten:

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}
