
{% include _content/de/xis-specific/parametrisierung/parametrization-about.md  %}


### Custom Properties

Die Eigenschaften der Xtract DeltaQ Komponente wird in den *Custom Properties* der Komponente definiert. <br>
Bei der Parametrisierung der Komponente durch SSIS Variablen oder Data Flow Properties werden diese Eigenschaften überschrieben.

Liste der *Custom Properties* der DeltaQ Komponente:

|Property|Beschreibung|
|:----|:----|
| *GatewayHost* | Entspricht dem Feld *Gateway Host* der DeltaQ Komponente, siehe [Customizing Check](./customizing-check).|
| *GatewayService* | Entspricht dem Feld *Gateway Service* der DeltaQ Komponente, siehe [Customizing Check](./customizing-check).|
| *HierClass* | |
| *HierName* | Name der zu extrahierenden Hierarchy, siehe [Hierarchien](./hierarchien). |
| *Language* | |
| *NewTimeStampFormatInRequestLog* | Wenn dieser Wert auf *true* (X) gesetzt wird, wird das Format des Zeitstempels im Request Protokoll geändert.|
| *OLTPSourceName* | Name der zu extrahierenden OLTP-Quelle.|
| *OLTPSourceType* | Typ der zu extrahierenden OLTP-Quelle.|
| *ProgramID* | Entspricht dem Feld *Program ID* der DeltaQ Komponente, siehe [Customizing Check](./customizing-check).|
| *RequestID* | Entspricht dem Feld *RequestID* in den [Settings](./extraktionseinstellungen) der DeltaQ Komponente.|
| *StringConversion* | Siehe [Settings - String Conversion](./extraktionseinstellungen#string-conversion).|
| *TargetSystem* | Entspricht dem Feld *Log. Destination* der DeltaQ Komponente, siehe [Customizing Check](./customizing-check).|
| *Timeout* | |
| *TransferMethod* | Sie können zwischen Transfer via tRTF (T) oder IDoc (I) wählen.|
| *TransferStructure* | Transferstruktur der zu extrahierenden Quelle.|
| *UpdateType* | Entspricht dem Drop-down-Menü *Update Mode* in der DeltaQ Komponente. Erlaubte Werte sind: (F)ull, (D)elta, (C) Init, (S) Init w/o data, (R)epeat, (I) non cumulative Init, (A)ctivate.|
| *UserComponentTypeName* | |

### Parameterisierung mit Data Flow Properties
Die folgenden *Custom Properties* können parametrisiert werden:

|Property|Beschreibung|
|:----|:----|
| *[Xtract DeltaQ].[GatewayHost]*|Entspricht dem Feld *Gateway Host* der DeltaQ Komponente, siehe [Customizing Check](./customizing-check).|
| *[Xtract DeltaQ].[GatewayService]*|Entspricht dem Feld *Gateway Service* der DeltaQ Komponente, siehe [Customizing Check](./customizing-check).|
| *[Xtract DeltaQ].[ProgramID]*|Entspricht dem Feld *Program ID* der DeltaQ Komponente, siehe [Customizing Check](./customizing-check).|
| *[Xtract DeltaQ].[TargetSystem]*|Entspricht dem Feld *Log. Destination* der DeltaQ Komponente, siehe [Customizing Check](./customizing-check).|
| *[Xtract DeltaQ].[RequestID]*|Entspricht dem Feld *RequestID* in den [Settings](./extraktionseinstellungen) der DeltaQ Komponente.|
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
| *RequestID*|Entspricht dem Feld *RequestID* in den [Settings](./extraktionseinstellungen) der DeltaQ Komponente.|
| *Edit*| Geben Sie eine SSIS-Variable als Auswahlkriterium ein.|


****
#### Weiterführende Links
- [Parametrisierung](../parametrisierung) 
- [DeltaQ Datasource Parameters](./datasource-parameter) 
- [Customizing Check](./customizing-check) 
- [Dynamization of WHERE conditions of the XIS table components](https://kb.theobald-software.com/xtract-is/Dynamization-of-WHERE-conditions-of-the-XIS-table-components)