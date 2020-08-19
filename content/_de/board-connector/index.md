---
ref: board-connector-01
layout: page
title: BoardConnector
description: BoardConnector main page
product: board-connector
parent: home
childidentifier: board-connector
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /BOARD-Connector-DE/
---
Willkommen in der Online Help vom BOARDConnector.

Der BOARDConnector ist ein SAP Connector, der diverse SAP Objekte im Pull-Verfahren im BOARD Server verfügbar macht. 

### Architektur

![BOARDConnector-architecture](/img/content/board/Board.png)

Die verwendbaren Komponenten in einem SAP ERP- und BW-System werden in der nachfolgenden Übersicht dargestellt.

| Komponente   | ERP | BW |
|-------------|:---:|:--:|
| Table       | X   | X  |
| Table Join  | X   | X  |
| BAPI        | X   | X  |
| Query       | X   |    |
| ABAP Report | X   |    |
| DeltaQ      | X   | X  |
| BW Cube     |     | X  |
| Hierarchy   |     | X  |
| OHS         |     | X  |
| ODP         | X | X |

Diese Hilfe beinhaltet folgende Abschnitt:

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}
