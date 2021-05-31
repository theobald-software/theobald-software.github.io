---
ref: xi-bapi-08
layout: page
title: Settings
description: Settings
product: xtract-is
parent: xtract-is-bapi
permalink: /:collection/:path
weight: 8
lang: de_DE

---

{% include _content/de/parametrization/parametrization-about.md  %}

### Parametrierung mit SSIS Variablen
Die folgenden Felder und/oder *Custom Properties* der Komponente erlauben die Verwendung von SSIS-Variablen:

|Feldname|Beschreibung|
|:----|:----|
| Imports - *Edit*| Geben Sie eine SSIS-Variable als Selektionskriterium ein. Im Fall von Strukturen, geben Sie eine SSIS-Variable für jedes Element der Struktur ein, siehe [Skalare Parameter](./skalare-parameter) und [Strukturen](./strukturen).|
| Exports - *Edit*| Die Exportparameter einer BAPI können in eine SSIS-Variable oder in die SSIS Pipeline geschrieben werden, siehe [Settings](./bapi-settings). Geben Sie eine SSIS-Variable in das jeweilige Feld des Exportparameters ein. Im Fall von Strukturen, geben Sie eine SSIS-Variable für jedes Element der Struktur ein.|


****
#### Weiterführende Links
- [SSIS Variablen mit Xtract Komponenten verwende](../parametrisierung/parametrisierung-variablen) 
- [Integration Services-Variablen (SSIS)](https://docs.microsoft.com/de-de/sql/integration-services/integration-services-ssis-variables?view=sql-server-ver15)