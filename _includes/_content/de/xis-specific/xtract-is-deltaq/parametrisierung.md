
{% include _content/de/parametrization/parametrization-about.md  %}

### Parameterisierung mit Properties
Die folgenden *Custom Properties* können parametrisiert werden:

|Property|Beschreibung|
|:----|:----|
| *[Xtract DeltaQ].[GatewayHost]*|Entspricht dem Feld *Gateway Host* der DeltaQ Komponente, siehe [Customizing Check](./customizing-check).|
| *[Xtract DeltaQ].[GatewayService]*|ntspricht dem Feld *Gateway Service* der DeltaQ Komponente, siehe [Customizing Check](./customizing-check).|
| *[Xtract DeltaQ].[ProgramID]*|Entspricht dem Feld *Program ID* der DeltaQ Komponente, siehe [Customizing Check](./customizing-check).|
| *[Xtract DeltaQ].[TargetSystem]*|Entspricht dem Feld *Log. Destination* der DeltaQ Komponente, siehe [Customizing Check](./customizing-check).|
| *[Xtract DeltaQ].[RequestID]*|Entspricht dem Feld *RequestID* in den [Settings](./settings) der DeltaQ Komponente.|
| *[Xtract DeltaQ].[UpdateType]*|Entspricht dem Drop-down-Menü *Update Mode* in der DeltaQ Komponente. Erlaubte Werte sind: (F)ull, (D)elta, (C) Init, (S) Init w/o data, (R)epeat, (I) non cumulative Init, (A)ctivate.  |


### Parametrierung mit SSIS Variablen
Die folgenden Felder und/oder *Custom Properties* der Komponente erlauben die Verwendung von SSIS-Variablen:

|Feldname|Beschreibung|
|:----|:----|
| *Log. Destination*| Entspricht dem Feld *Log. Destination* der DeltaQ Komponente, siehe [Customizing Check](./customizing-check).|
| *Gateway Host*| Entspricht dem Feld *Gateway Host* der DeltaQ Komponente, siehe [Customizing Check](./customizing-check).|
| *Gateway Service*|Entspricht dem Feld *Gateway Service* der DeltaQ Komponente, siehe [Customizing Check](./customizing-check).|
| *Program ID*|Entspricht dem Feld *Program ID* der DeltaQ Komponente, siehe [Customizing Check](./customizing-check).|
| *Update Mode Variable*| Verwende dieses Feld in Kombination mit dem Update Mode 'V'.|
| *RequestID*|Entspricht dem Feld *RequestID* in den [Settings](./settings) der DeltaQ Komponente.|
| *Edit*| Geben Sie eine SSIS-Variable als Auswahlkriterium ein.|


****
#### Weiterführende Links
- [Parameterisierung](../parameterisierung) 
- [DeltaQ Datasource Parameters](./parameter) 
- [Customizing Check](./customizing-check) 
- [Dynamization of WHERE conditions of the XIS table components](https://kb.theobald-software.com/xtract-is/Dynamization-of-WHERE-conditions-of-the-XIS-table-components)