
{% include _content/de/xis-specific/parametrisierung/parametrization-about.md  %}

### Custom Properties
Die Eigenschaften der Xtract BAPI Komponente wird in den *Custom Properties* der Komponente definiert. <br>
Bei der Parametrisierung der Komponente durch SSIS Variablen werden diese Eigenschaften überschrieben.

Liste der relevanten *Custom Properties* der BAPI Komponente:

|Property|Beschreibung|
|:----|:----|
| *RFCFunctionName* | Name des zu extrahierenden BAPIs oder RFC-Bausteins.|


### Parametrierung mit SSIS Variablen
Die folgenden Felder und/oder *Custom Properties* der Komponente erlauben die Verwendung von SSIS-Variablen:

|Feldname|Beschreibung|
|:----|:----|
| Imports - *Edit*| Geben Sie eine SSIS-Variable als Selektionskriterium ein. Im Fall von Strukturen, geben Sie eine SSIS-Variable für jedes Element der Struktur ein, siehe [Parameter](./parameter).|
| Exports - *Edit*| Die Exportparameter einer BAPI können in eine SSIS-Variable oder in die SSIS Pipeline geschrieben werden, siehe. Geben Sie eine SSIS-Variable in das jeweilige Feld des Exportparameters ein. Im Fall von Strukturen, geben Sie eine SSIS-Variable für jedes Element der Struktur ein.|


****
#### Weiterführende Links
- [SSIS Variablen mit Xtract Komponenten verwenden](../parametrisierung/parametrisierung-variablen) 
- [Integration Services-Variablen (SSIS)](https://docs.microsoft.com/de-de/sql/integration-services/integration-services-ssis-variables?view=sql-server-ver15)