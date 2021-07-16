
{% include _content/de/xis-specific/parametrisierung/parametrization-about.md  %}

### Custom Properties

Die Eigenschaften der Xtract BW Loader Komponente wird in den *Custom Properties* der Komponente definiert. <br>
Bei der Parametrisierung der Komponente durch SSIS Variablen werden diese Eigenschaften überschrieben.

Liste der relevanten *Custom Properties* der BW Loader Komponente:

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

### Parametrierung mit SSIS Variablen
Die folgenden Felder und/oder *Custom Properties* der Komponente erlauben die Verwendung von SSIS-Variablen:

|Feldname|Beschreibung|
|:----|:----|
| *Package Size* | Entspricht dem Feld *Package Size* in der BW Loader Komponente, siehe [Settings](./bw-loader-settings#general).|
| *Gateway host* | Entspricht dem Feld *Gateway host* in der BW Loader Komponente, siehe [Datenquelle und Ziel verbinden](./datenquelle-und-ziel-verbinden). |
| *Gateway service* | Entspricht dem Feld *Gateway service* in der BW Loader Komponente, siehe [Datenquelle und Ziel verbinden](./datenquelle-und-ziel-verbinden).|
| *Program ID* | Entspricht dem Feld *Program ID* in der BW Loader Komponente, siehe [Datenquelle und Ziel verbinden](./datenquelle-und-ziel-verbinden).|


****
#### Weiterführende Links
- [SSIS Variablen mit Xtract Komponenten verwenden](../parametrisierung/parametrisierung-variablen) 
- [Integration Services-Variablen (SSIS)](https://docs.microsoft.com/de-de/sql/integration-services/integration-services-ssis-variables?view=sql-server-ver15)