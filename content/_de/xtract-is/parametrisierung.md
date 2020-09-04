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
| ABAP Report |       |      | 
| BAPI        |       |      | 
| BW Cube     |       |      | 
| BW Hierarchy|       |      |
| BW Loader   |       |      |
| DeltaQ      |       |      |
| ODP         |   x    |   x   |
| OHS         |       |      |
| Query       |       |      |
| Table       |       |      |
| Table Join  |       |      |


### Parameter in SSIS anschauen
Parameter erscheinen als Eigenschaften des SSIS-Datenflusses (Data Flow).

![Properties](/img/content/xis/properties.png){:class="img-reagierend"}

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}