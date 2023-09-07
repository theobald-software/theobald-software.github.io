---
ref: xi-bw-loader-07
layout: page
title: Parametrisierung
description: Parametrisierung
product: xtract-is
parent: bw-loader
permalink: /:collection/:path
weight: 7
lang: de_DE

---
### Custom Properties

Die Eigenschaften der Komponente werden in den *Custom Properties* der Komponente definiert.
Bei der Parametrisierung der Komponente durch SSIS Variablen werden diese Eigenschaften überschrieben.

Liste der relevanten *Custom Properties*:

|Property|Beschreibung|
|:----|:----|
| *DataSourceType* | Entspricht dem Feld *Data Source* in der BW Loader Komponente, siehe [Datenquelle und Ziel verbinden](./datenquelle-und-ziel-verbinden). |
| *GatewayHost* | Entspricht dem Feld *Gateway host* in der BW Loader Komponente, siehe [Datenquelle und Ziel verbinden](./datenquelle-und-ziel-verbinden).|
| *GatewayService* | Entspricht dem Feld *Gateway service* in der BW Loader Komponente, siehe [Datenquelle und Ziel verbinden](./datenquelle-und-ziel-verbinden).|
| *InfoPackage* | Entspricht dem Suchfeld *InfoPackage* in der BW Loader Komponente, siehe [Eine BW Loader Extraktion definieren](./infopackages-suchen).|
| *InfoSource* | Entspricht dem Suchfeld *InfoSource* in der BW Loader Komponente, siehe [Eine BW Loader Extraktion definieren](./infopackages-suchen).|
| *LogSys* | Entspricht dem Feld *Logical System* in der BW Loader Komponente, siehe [Datenquelle und Ziel verbinden](./datenquelle-und-ziel-verbinden)..|
| *NolPackageStartOnlyWait* | Entspricht dem Feld *No InfoPackage Start (Only Wait)* in der BW Loader Komponente, siehe [Settings](./bw-loader-settings).|
| *PackageSize* | Entspricht dem Feld *Package Size* in der BW Loader Komponente, siehe [Settings](./bw-loader-settings#general).|
| *ProcessChain* | Entspricht dem Feld *Trigger Process Chain after Upload* in der BW Loader Komponente, siehe [Settings](./bw-loader-settings#general).|
| *ProgramID* | Entspricht dem Feld *Program ID* in der BW Loader Komponente, siehe [Datenquelle und Ziel verbinden](./datenquelle-und-ziel-verbinden). |
| *WaitUntilFinished* | Entspricht dem Feld *Wait data transfer to be finished* in der BW Loader Komponente, siehe [Settings](./bw-loader-settings#general). |


{% include _content/de/xis-specific/parametrisierung/parametrization-via-variables.md  %}

#### Verfügbare Parameter für SSIS Variablen

Liste der Eingabefelder / *Custom Properties*, die die Verwendung von SSIS-Variablen erlauben:

|Feldname|Beschreibung|
|:----|:----|
| *Package Size* | Entspricht dem Feld *Package Size* in der BW Loader Komponente, siehe [Settings](./bw-loader-settings#general).|
| *Gateway host* | Entspricht dem Feld *Gateway host* in der BW Loader Komponente, siehe [Datenquelle und Ziel verbinden](./datenquelle-und-ziel-verbinden). |
| *Gateway service* | Entspricht dem Feld *Gateway service* in der BW Loader Komponente, siehe [Datenquelle und Ziel verbinden](./datenquelle-und-ziel-verbinden).|
| *Program ID* | Entspricht dem Feld *Program ID* in der BW Loader Komponente, siehe [Datenquelle und Ziel verbinden](./datenquelle-und-ziel-verbinden).|



****
#### Weiterführende Links
- [Dynamization of WHERE conditions of the XIS table components](https://kb.theobald-software.com/tables/xtract-is-Dynamization-of-WHERE-conditions-of-the-XIS-table-components)
- [Integration Services-Variablen (SSIS)](https://docs.microsoft.com/de-de/sql/integration-services/integration-services-ssis-variables?view=sql-server-ver15)
