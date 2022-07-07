### Custom Properties
Die Eigenschaften der Komponente werden in den *Custom Properties* der Komponente definiert.
Bei der Parametrisierung der Komponente durch SSIS Variablen werden diese Eigenschaften überschrieben.

Liste der relevanten *Custom Properties*:

|Property|Beschreibung|
|:----|:----|
| *MaxRows* | Entspricht dem Feld *MaxRows* in den [Settings](./query-settings) der Query Komponente.|
| *QueryDescription* | Beschreibung der zu extrahierenden Query.|
| *QueryName* | Name der zu extrahierenden Query.|
| *StringConversion* | Entspricht den Einstellungen in den [Settings](./query-settings) der Query Komponente.|
| *UserGroup* | Name der Benutzergruppe, unter der die Query abgelegt ist.|
| *Variant* | Entspricht dem Feld *Use Variant Variable* in den [Settings](./query-settings) der Query Komponente. |
| *VariantDescription* | Beschreibung der Variante.|

{% include _content/de/xis-specific/parametrisierung/parametrization-via-variables.md  %}

#### Verfügbare Parameter für SSIS Variablen
Liste der Eingabefelder / *Custom Properties*, die die Verwendung von SSIS-Variablen erlauben:

|Feldname|Beschreibung|
|:----|:----|
| *Variant* | Aktivieren Sie die Checkbox *Use Variant Variable* in den [Settings](./query-settings) der Query Komponente. <br>Dadurch ermöglichen Sie die Verwendung von SSIS-Variablen für das Feld *Variant*.|


****
#### Weiterführende Links
- [SSIS Variablen mit Xtract Komponenten verwenden](../parametrisierung/parametrisierung-variablen) 
- [Integration Services-Variablen (SSIS)](https://docs.microsoft.com/de-de/sql/integration-services/integration-services-ssis-variables?view=sql-server-ver15)