---
ref: xtract-is-04
layout: page
title: Erste Schritte mit Xtract IS
description: Erste Schritte mit Xtract IS
product: xtract-is
parent: xtract-is
childidentifier: erste-schritte
progressstate: 5
permalink: /:collection/:path
weight: 4
lang: de_DE
---
Der folgende Abschnitt gibt eine allgemeine Einführung in Xtract IS am Beispiel der Table-Komponente. 
Die im folgenden Abschnitt beschriebenen Informationen sind eine Voraussetzung für alle nachfolgenden Abschnitte.

{: .box-note }
**Hinweis:** Eine [SAP Verbindung](./sap-verbindung) ist eine Voraussetzung für die Verwendung der Komponenten von Xtract IS.

### Eine Extraktion anlegen

1. Erstellen Sie einen **Data Flow Task**, indem Sie die Komponente auf den "Control Flow" Canvas ziehen. Doppelklicken Sie die Komponente, um in den Dataflow Canvas zu wechseln.
2. Fügen Sie mit dem [*Xtract Connection Manager*](./sap-verbindung/verbindungsmanager) eine SAP Verbindung hinzu.
3. Fügen Sie per Drag & drop eine **Xtract Table** Komponente in den Dataflow Task ein. 
![xis_table_overview](/img/content/xis/xis_table_overview.png){:class="img-responsive"}
4. Weisen Sie durch einen Doppelklick auf die **Xtract Table** Komponente einen *Connection Manager* zu. 
5. Doppelklicken Sie auf die **Xtract Table** Komponente. Das Fenster “Extract Single and Joint SAP Tables or Views” öffnet sich. 

{: .box-note }
**Hinweis:** Um einen bestimmten *Connection Manager* zuzuweisen, folgen Sie den Anweisungen in [Einer Xtract Component einen Connection Manager zuweisen](./sap-verbindung/verbindungsmanager#einer-xtract-component-einen-connection-manager-zuweisen).

{% include _content/de/table/extraktion-anlegen.md  %}

*****
#### Weiterführende Links
- [BAPI](./xtract-is-bapi)
- [BW Cube](./bw-cube)
- [BW Hierarchy](./hierarchy)
- [ODP](./odp)
- [Table](./xtract-is-table) - weitere Details zur Table-Komponente
