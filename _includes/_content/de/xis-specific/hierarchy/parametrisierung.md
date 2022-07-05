
### Custom Properties

Die Eigenschaften der Komponente werden in den *Custom Properties* der Komponente definiert.
Bei der Parametrisierung der Komponente durch SSIS Variablen werden diese Eigenschaften überschrieben.

Liste der relevanten *Custom Properties*:

|Property|Beschreibung|
|:----|:----|
| *DateTo* | Der Standard-Wert von Date To ist 99991231.|
| *FetchText* | Entspricht dem Feld *Fetch description texts* in [Settings - Extraction Settings](./hierarchy-settings#extraction-settings).|
| *HierarchyID* |  ID der zu extrahierenden Hierarchy.|
| *HierarchyName* | Name der zu extrahierenden Hierarchy. |
| *HierarchyVersion* | Version der zu extrahierenden Hierarchy. |
| *InfoObject* | Entspricht dem Suchfeld *InfoObject* in [BW Hierarchie finden](./hierarchien-suchen#bw-hierarchie-finden). |
| *StringConversion* | Siehe [Settings - String Conversion](./hierarchy-settings#string-conversion). |


{% include _content/de/xis-specific/parametrisierung/parametrization-via-variables.md  %}

#### Verfügbare Parameter für SSIS Variablen
Liste der Eingabefelder, die die Verwendung von SSIS-Variablen erlauben:

|Feldname|Beschreibung|
|:----|:----|
| *HierarchyName* | Eine SSIS-Variable kann den *Custom Properties* der Komponente zugewiesen werden. In Kombination mit einem Foreach-Schleifencontainer können mehrere Hierarchien mit demselben IndoObjekt extrahiert werden.|
| *HierarchyVersion* | Eine SSIS-Variable kann den *Custom Properties* der Komponente zugewiesen werden. In Kombination mit einem Foreach-Schleifencontainer können mehrere Versionen derselben Hierarchie extrahiert werden.|


****
#### Weiterführende Links
- [Verwenden von Eigenschaftsausdrücken in Paketen](https://docs.microsoft.com/de-de/sql/integration-services/expressions/use-property-expressions-in-packages?view=sql-server-ver15)
- [Dynamization of WHERE conditions of the XIS table components](https://kb.theobald-software.com/xtract-is/Dynamization-of-WHERE-conditions-of-the-XIS-table-components)
- [Integration Services-Variablen (SSIS)](https://docs.microsoft.com/de-de/sql/integration-services/integration-services-ssis-variables?view=sql-server-ver15)
