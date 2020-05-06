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
lang: en_GB
old_url: /BOARD-Connector-EN/
---
Welcome to the Online Help of the BOARDConnector.

The BOARDConnector is a SAP Connector that makes various SAP objects available in the BOARD Server in pull mode.

### Architektur

![BOARDConnector-architecture](/img/content/board/Board.png)

The components that can be used in an SAP-ERP and SAP-BW system are shown in the following overview.

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

This help contains the following sections:

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}
