---
ref: xi-query-05
layout: page
title: Parametrisierung
description: Parametrisierung
product: xtract-is
parent: query
permalink: /:collection/:path
weight: 5
lang: de_DE

---
{% include _content/de/parametrization/parametrization-about.md  %}

### Parametrierung mit SSIS Variablen
Die folgenden Felder und/oder *Custom Properties* der Komponente erlauben die Verwendung von SSIS-Variablen:

|Feldname|Beschreibung|
|:----|:----|
| *Variant* | Aktivieren Sie die Checkbox *Use Variant Variable* in den [Settings](./query-settings) der Query Komponente. <br>Dadurch ermöglichen Sie die Verwendung von SSIS-Variablen für das Feld *Variant*.|


****
#### Weiterführende Links
- [SSIS Variablen mit Xtract Komponenten verwenden](../parametrisierung/parametrisierung-variablen) 
- [Integration Services-Variablen (SSIS)](https://docs.microsoft.com/de-de/sql/integration-services/integration-services-ssis-variables?view=sql-server-ver15)