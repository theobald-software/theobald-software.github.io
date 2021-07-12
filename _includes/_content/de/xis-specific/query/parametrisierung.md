
{% include _content/de/xis-specific/parametrisierung/parametrization-about.md  %}

### Custom Properties
Die Eigenschaften der Xtract Query Komponente wird in den *Custom Properties* der Komponente definiert. <br>
Bei der Parametrisierung der Komponente durch SSIS Variablen werden diese Eigenschaften überschrieben.

Liste der *Custom Properties* der Query Komponente:
|Property|Beschreibung|
|:----|:----|
| *InternalXML* | |
| *MaxRows* | Entspricht dem Feld *MaxRows* in den [Settings](./query-settings) der Query Komponente.|
| *QueryDescription* | Beschreibung der zu extrahierenden Query.|
| *QueryName* | Name der zu extrahierenden Query.|
| *Reserved* | |
| *StringConversion* | Entspricht den Einstellungen in den [Settings](./query-settings) der Query Komponente.|
| *UserGroup* | Name der Benutzergruppe, unter der die Query abgelegt ist.|
| *Variant* | Entspricht dem Feld *Use Variant Variable* in den [Settings](./query-settings) der Query Komponente. |
| *VariantDescription* | Beschreibung der Variante.|
| *WorkSpace* | |

### Parametrierung mit SSIS Variablen
Die folgenden Felder und/oder *Custom Properties* der Komponente erlauben die Verwendung von SSIS-Variablen:

|Feldname|Beschreibung|
|:----|:----|
| *Variant* | Aktivieren Sie die Checkbox *Use Variant Variable* in den [Settings](./query-settings) der Query Komponente. <br>Dadurch ermöglichen Sie die Verwendung von SSIS-Variablen für das Feld *Variant*.|


****
#### Weiterführende Links
- [SSIS Variablen mit Xtract Komponenten verwenden](../parametrisierung/parametrisierung-variablen) 
- [Integration Services-Variablen (SSIS)](https://docs.microsoft.com/de-de/sql/integration-services/integration-services-ssis-variables?view=sql-server-ver15)