---
ref: xtract-is-88
layout: page
title: Parametrisierung
description: Parametrisierung
product: xtract-is
parent: xtract-is
childidentifier: parametrisierung
permalink: /:collection/:path
weight: 88
lang: de_DE
---

Verschiedene Einstellungen der Extraktionen (z. B. Package Size, Selektionskriterien, etc.) können parametrisiert werden.
Die Parameter und die Eigenschaften (Properties) werden zur Laufzeit des SSIS-Pakets mit Hilfe von Standard-SSIS-Funktionen wie Ausdrücken, Variablen usw. gefüllt. 
Dazu bietet Xtract IS zwei technische Möglichkeiten an:
- über [Properties](./parametrisierung-properties) (Ausdrucks-Eigenschaften)
- über [Variablen](./parametrisierung-variablen)


Abhängig von einer Komponente können Sie entweder Variablen oder Properties oder beides verwenden, um Parameter einzustellen.

### Parametrisierungsoptionen der Komponente 

| Komponente   | Variablen | Eigenschaften |
|-------------|:-----:|:----:|
| [BAPI](../xtract-is-bapi/parametrisierung)        |   x    |      | 
| [BW Cube](../bw-cube/parametrisierung)     |   x    |      | 
| [BW Hierarchy](../hierarchy/parametrisierung)|    x   |      |
| [BW Loader](../bw-loader/parametrisierung)   |  x     |      |
| [DeltaQ](../xtract-is-deltaq/parametrisierung)      | x      |  x    |
| [ODP](../odp/odp-parametrisierung)         |   x    |   x   |
| [OHS](../open-hub-service/parametrisierung)         |     x  |      |
|[Query](../query/parametrisierung)       |   x    |      |
| [Report](../report/parametrisierung) |    x   |      | 
| [Table](../xtract-is-table/table-parametrisierung)       | x      |  x    |


{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}