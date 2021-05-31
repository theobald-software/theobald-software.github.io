---
ref: xi-hierarchy-04
layout: page
title: Parametrisierung
description: Parametrisierung
product: xtract-is
parent: hierarchy
permalink: /:collection/:path
weight: 4
lang: de_DE

---

{% include _content/de/parametrization/parametrization-about.md  %}

### Parametrierung mit SSIS Variablen
Die folgenden Felder und/oder *Custom Properties* der Komponente erlauben die Verwendung von SSIS-Variablen:

|Feldname|Beschreibung|
|:----|:----|
| *HierarchyName* | Eine SSIS-Variable kann den *Custom Properties* der Komponente zugewiesen werden. In Kombination mit einem Foreach-Schleifencontainer können mehrere Hierarchien mit demselben IndoObjekt extrahiert werden.|
| *HierarchyVersion* | Eine SSIS-Variable kann den *Custom Properties* der Komponente zugewiesen werden. In Kombination mit einem Foreach-Schleifencontainer können mehrere Versionen derselben Hierarchie extrahiert werden.|

****
#### Weiterführende Links
- [SSIS Variablen mit Xtract Komponenten verwende](../parametrisierung/parametrisierung-variablen) 
- [Integration Services-Variablen (SSIS)](https://docs.microsoft.com/de-de/sql/integration-services/integration-services-ssis-variables?view=sql-server-ver15)