---
ref: xi-bw-cube-05
layout: page
title: Parametrisierung
description: Parametrisierung
product: xtract-is
parent: bw-cube
permalink: /:collection/:path
weight: 5
lang: de_DE

---
### Custom Properties

Die Eigenschaften der Komponente werden in den *Custom Properties* der Komponente definiert.
Bei der Parametrisierung der Komponente durch SSIS Variablen werden diese Eigenschaften überschrieben.

Liste der relevanten *Custom Properties*:

|Property |Beschreibung|
|:----|:----|
| *CubeName* | Entspricht dem Suchfeld *Cube Name* in der BW Cube Komponente, siehe [Eine BW Cube oder Query Extraktion finden](./cubes-suchen#eine-bw-cube-oder-query-extraktion-finden).|
| *DelimiterForMultipleSSISVariableValues* | Trennzeichen für aufeinanderfolgende Variablen, siehe *Variables* in [Parametrisierung mit SSIS Variablen](#Parametrisierung-mit-ssis-variablen).|
| *IgnoreMDXErrors* | Wenn diese Option auf *true* gesetzt ist, führen MDX-Fehler nicht zu SSIS-Fehlern.|
| *MDXVariable* | Geben Sie eine SSIS-Variable in die MDX Textbox ein und füllen Sie die SSIS-Variable mit dem kompletten MDX-Ausdruck, siehe *MDXVariable* in [Parametrisierung mit SSIS Variablen](#Parametrisierung-mit-ssis-variablen). |
| *StringConversion* | Siehe [Settings - String Conversion](./bw-cube-settings#string-conversion). |


{% include _content/de/xis-specific/parametrisierung/parametrization-via-variables.md  %}

#### Verfügbare Parameter für SSIS Variablen
Liste der Eingabefelder / *Custom Properties*, die die Verwendung von SSIS-Variablen erlauben:

|Feldname|Beschreibung|
|:----|:----|
|*Variables*| Geben Sie eine SSIS-Variable ein, um eine BEx-Variable zu füllen, siehe [Variablen](./variablen). <br>Für BEx-Variablen des Typs *Multiple Single* geben Sie eine einzelne SSIS-Variable ein, setzen ein Trennzeichen für die Eigenschaft *DelimiterForMultipleSSISVariableValues* und geben unter Verwendung des Trennzeichens mehrere Werte in die Variable ein.|
|*Member Filter*        | Geben Sie eine SSIS-Variable in das Feld *Variable* ein, siehe [Filter](./filter). <br>Die SSIS-Variable kann mit mehreren Einträgen gefüllt werden, die von einem Komma getrennt sind.|
|*MDXVariable*        | Geben Sie eine SSIS-Variable in die MDX Textbox ein und füllen Sie die SSIS-Variable mit dem kompletten MDX-Ausdruck.|


****
#### Weiterführende Links
- [Dynamization of WHERE conditions of the XIS table components](https://kb.theobald-software.com/tables/xtract-is-Dynamization-of-WHERE-conditions-of-the-XIS-table-components)
- [Integration Services-Variablen (SSIS)](https://docs.microsoft.com/de-de/sql/integration-services/integration-services-ssis-variables?view=sql-server-ver15)
