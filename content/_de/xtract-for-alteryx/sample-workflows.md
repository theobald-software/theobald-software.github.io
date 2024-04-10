---
ref: xtract-for-alteryx-120
layout: page
title: Beispiel-Workflows
description: Templates
product: xtract-for-alteryx
parent: xtract-for-alteryx
permalink: /:collection/:path
weight: 120
lang: de_DE
---

Der folgende Abschnitt bietet Beispiel-Workflows und Vorlagen zum Download an.

### SAP Migration Scenarios

Die folgenden Workflows sind darauf ausgelegt, eine SAP-Migration, z. B. ECC nach S/4HANA, zu unterstützen.

| Workflow | Beschreibung  |
| :------ | :--- |
| [Data Anonymization and Replication to QA system](/docs/alteryx-workflows/S4 Migration - Data Anonymization and Replication to QA system.yxzp){:download="S4 Migration - Data Anonymization and Replication to QA system.yxzp"}  | Dieser Workflow nutzt die Komponente [Xtract Table](./table), um Entwicklungs-und Testdatensätze mit anonymisierten Daten aus dem Produktivsystem zu erstellen und so Qualitätssicherungsprozesse zu beschleunigen. |
| [Short-term bridge app.yxwz](/docs/alteryx-workflows/S4 Migration - Short-term bridge app.yxwz){:download="S4 Migration - Short-term bridge app.yxwz"}  | TSein Workflow verwendet die Komponente [Xtract Table](./table), um eine SAP-Migration zu unterstützen, die in einem schrittweisen Ansatz erfolgt, indem die Daten abhängig von der Benutzereingabe aus dem relevanten System extrahiert werden. |
| [Source & Target Validations - Report level.yxmd](/docs/alteryx-workflows/S4 Migration - Source & Target Validations - Report level.yxmd){:download="S4 Migration - Source & Target Validations - Report level.yxmd"}  | Dieser Workflow verwendet die Komponente [Xtract Report](./reports), um die Datenintegrität zwischen Quell- und Zielumgebung zu validieren. |
| [Source & Target Validations - Table level.yxmd](/docs/alteryx-workflows/S4 Migration - Source & Target Validations - Table level.yxmd){:download="S4 Migration - Source & Target Validations - Table level.yxmd"}  | Dieser Workflow verwendet die Komponente [Xtract Table](./table), um die Datenintegrität zwischen Quell- und Zielumgebung zu validieren.|
| [Source & Target Validations - Table & other.yxzp](/docs/alteryx-workflows/S4 Migration - Source & Target Validations - Table & other.yxzp){:download="S4 Migration - Source & Target Validations - Table & other.yxzp"}  | Dieser Workflow verwendet die Komponente [Xtract Table](./table), um die Datenintegrität zwischen Quell- und Zielumgebung zu validieren. Dieser Workflow kann für Tests und Demos verwendet werden, da er eine Flatfile als Zielumgebung verwendet. Diese Zielumgebung ähnelt dem Quellsystem und enthält kleine Änderungen, die beim Abgleich entdeckt werden.

### Xtract BAPI


| Workflow | Quellsystem| Beschreibung Quellsystem|
| :------ |:--- | :--- | :--- |
| [BAPI-ERP-Read-And-Write](/docs/alteryx-workflows/BAPI-ERP-ReadandWrite.yxmd){:download="BAPI-ERP-ReadandWrite.yxmd"}  | SAP ERP | Dieser Workflow zeigt die Verwendung von [Xtract BAPI](./bapis-und-funktionsbausteine), um eine Bestellanforderung (purchase requisition) in SAP zu erstellen und die Daten der Bestellanforderung in Alteryx zu laden. |
| [SAP-Read-Long-Texts](/docs/alteryx-workflows/SAP-Read-Long-Texts.yxmd){:download="SAP-Read-Long-Texts.yxmd"}  | SAP ERP | Dieser Workflow zeigt das Auslesen von SAP Langtexten in verschiedenen Sprachen. |
| [SAP-Read-Attachment-Files](/docs/alteryx-workflows/SAP-Read-Attachment-Files.yxmd){:download="SAP-Read-Attachment-Files.yxmd"}   | SAP ERP | Dieser Workflow zeigt das Herunterladen von SAP-Dateien (Attachments) in beliebigen Formaten. Weitere Informationen zu diesem Workflow finden Sie in dem Knowledge-Base-Artikel [Read and Download SAP Attachment Files](https://kb.theobald-software.com/xtract-for-alteryx/read-sap-attachment-files).|
|[BAPI - Sync PRs from ERP to S4](/docs/alteryx-workflows/BAPI-Sync-PRs-from-ERP-to-S4.yxmd){:download="BAPI-Sync-PRs-from-ERP-to-S4.yxmd"} | SAP ERP | Dieser Workflow zeigt das Synchronisieren von Bestellanforderungen vom ERP zum S/4. Es beinhaltet das Erstellen einer neuen Anforderung im ERP, das Überprüfen ihrer Abwesenheit im S/4, das Synchronisieren durch das Generieren entsprechender Einträge in beiden Systemen und das Bestätigen das Vorhandensein im S/4. |

### Xtract Cube

| Workflow | Quellsystem | Beschreibung Quellsystem|
| :------ |:--- | :--- | :--- | :--- |
| [Cube-BWInfoProvider](/docs/alteryx-workflows/Cube-BWInfoProvider.yxmd){:download="Cube-BWInfoProvider.yxmd"}  | SAP BW | TDieser Workflow zeigt die Verwendung von  [Xtract Cube](./bw-cube), um Daten aus einem SAP BW InfoProvider zu laden.|
| [Cube-BWQuery](/docs/alteryx-workflows/Cube-BWQuery.yxmd){:download="Cube-BWQuery.yxmd"}  | SAP BW | Dieser Workflow zeigt die Verwendung von [Xtract Cube](./bw-cube) to load data from an SAP BW Query. |

### Xtract Hierarchy

| Workflow | Quellsystem | Beschreibung Quellsystem|
| :------ |:--- | :--- | :--- | :--- |
| [Hierarchy-BW](/docs/alteryx-workflows/Hierarchy-BW.yxmd){:download="Hierarchy-BW.yxmd"}  | SAP BW | Dieser Workflow zeigt die Verwendung von [Xtract Hierarchy](./bw-hierarchien), um Daten aus eine SAP BW CostCenter Hierarchy zu laden. Dieser Workflow demonstiert die unterschiedlichen Hierarchy-Repräsentationen "Parent-Child" und "Natural".  |

### Xtract ODP

| Workflow  | Quellsystem | Beschreibung Quellsystem|
| :------ |:--- | :--- | :--- | :--- |
| [ODP-BW-Full](/docs/alteryx-workflows/ODP-BW-Full.yxmd){:download="ODP-BW-Full.yxmd"}  | SAP BW | Dieser Workflow zeigt die Verwendung von [Xtract ODP](./odp), um Verkaufsdokumente und Kundendaten aus einem SAP BW-System zu laden. Die geladenen Daten werden dann kombiniert, bereinigt und für weitere Analysen vorbereitet. |
| [ODP-BW-Delta](/docs/alteryx-workflows/ODP-BW-Delta.yxmd){:download="ODP-BW-Delta.yxmd"}  | SAP BW | Dieser Workflow zeigt die Verwendung von [Xtract ODP](./odp), um Delta-Verkaufsbelege und Kundenstammdaten aus einem SAP BW-System zu laden. Die Verkaufsbelege werden mit der Delta-Funktion von Xtract ODP geladen, die nur die seit der letzten Ausführung geänderten Daten abruft. |
| [ODP-ERP-Full](/docs/alteryx-workflows/ODP-ERP-Full.yxmd){:download="ODP-ERP-Full.yxmd"}  |  SAP ERP | Dieser Workflow zeigt die Verwendung von [Xtract ODP](./odp), um Verkaufsbelege und Kundenstammdaten aus einem SAP ERP System zu laden. Die geladenen Daten werden dann kombiniert, bereinigt und für die weitere Analyse vorbereitet.
| [ODP-ERP-Delta](/docs/alteryx-workflows/ODP-ERP-Delta.yxmd){:download="ODP-ERP-Delta.yxmd"}  | SAP ERP | Dieser Workflow zeigt die Verwendung von [Xtract ODP](./odp), um Delta-Verkaufsbelege und Kundenstammdaten aus einem SAP ERP System zu laden. ie Verkaufsbelege werden mit der Delta-Funktion von Xtract ODP geladen, die nur die seit der letzten Ausführung geänderten Daten abruft. <br> Weitere Informationen zu diesem Workflow finden Sie in dem Knowledge-Base-Artikel [ODP based Delta Extraction of Sales and Customer Data](https://kb.theobald-software.com/xtract-for-alteryx/ODP-based.delta-extraction-of-sales-data).  |
| [ODP-S4-Full](/docs/alteryx-workflows/ODP-S4-Full.yxmd){:download="ODP-S4-Full.yxmd"}  | SAP S/4HANA | Dieser Workflow zeigt die Verwendung von [Xtract ODP](./odp), um Business-Partner-Stammdaten aus den SAP S/4HANA CDS Views zu laden. Die geladenen Daten werden dann bereinigt und für die weitere Analyse gefiltert. |
| [ODP-S4-Delta](/docs/alteryx-workflows/ODP-S4-Delta.yxmd){:download="ODP-S4-Delta.yxmd"}  | SAP S/4HANA | Dieser Workflow zeigt die Verwendung von [Xtract ODP](./odp) um die Delta-Daten von Lieferanten und Kunden aus SAP S/4HANA CDS Views zu laden. Die geladenen Daten werden dann auf fehlende Adressinformationen geprüft. |

### Xtract Report

| Workflow  | Quellsystem | Beschreibung Quellsystem|
| :------ |:--- | :--- | :--- | :--- |
| [Report-ERP-ABAPReport](/docs/alteryx-workflows/Report-ERP-ABAPReport.yxmd){:download="Report-ERP-ABAPReport.yxmd"}  | SAP ERP | Dieser Workflow zeigt die Verwendung von [Xtract Report](./reports), um Daten aus dem ABAP Report RLT10010 (Auswertung von Bewegungen pro Lagertyp) zu laden. |
| [Report-S4-TCode](/docs/alteryx-workflows/Report-S4-TCode.yxmd){:download="Report-S4-TCode.yxmd"}  | SAP S/4HANA | Dieser Workflow zeigt die Verwendung von [Xtract Report](./reports) , um eine Liste von Kundenaufträgen aus einer SAP S/4HANA-Transaktion zu laden. |

### Xtract Table

| Workflow | Quellsystem | Beschreibung Quellsystem|
| :------ |:--- | :--- | :--- | :--- |
| [Table-ERP](/docs/alteryx-workflows/Table-ERP.yxmd){:download="Table-ERP.yxmd"}  | SAP ERP | Dieser Workflow zeigt die Verwendung von [Xtract Table](./table), um Kundenstammdaten zu laden und die Daten für weitere Analysen in Excel oder einer BI-Lösung eines Drittanbieters vorzubereiten. |
| [Table-ERP-Join](/docs/alteryx-workflows/Table-ERP-Join.yxmd){:download="Table-ERP-Join.yxmd"}  | SAP ERP | Dieser Workflow zeigt die Verwendung von [Xtract Table](./table), um einen Tabellen-Join der SAP-Tabellen KNA1 (Kundenstammdaten) und KNVV (Kundenstamm-Verkaufsdaten) durchzuführen und die Daten für weitere Analysen in Excel oder einer BI-Lösung eines Drittanbieters vorzubereiten. |
| [Table-S4](/docs/alteryx-workflows/Table-S4.yxmd){:download="Table-S4.yxmd"}  | SAP S/4HANA | Dieser Workflow zeigt die Verwendung von [Xtract Table](./table), um Daten aus dem Universal Journal von SAP S/4HANA zu laden und die Daten für die weitere Analyse in Excel oder einer BI-Lösung eines Drittanbieters vorzubereiten. |
| [Table-S4-Dynamic-Parameters.yxmd](/docs/alteryx-workflows/Table-Dynamic-Parameters.yxmd){:download="Table-Dynamic-Parameters.yxmd"}  | SAP S/4HANA | Dieser Workflow zeigt die Verwendung von Skalar- und Listenparameter mit der [Xtract Table](./table) Komponente. |

******
#### Weiterführende Links
- [Theobald Software Website: Xtract for Alteryx](https://theobald-software.com/xtract-for-alteryx/)
- [Knowledge Base: Xtract for Alteryx](https://kb.theobald-software.com/xtract-for-alteryx)