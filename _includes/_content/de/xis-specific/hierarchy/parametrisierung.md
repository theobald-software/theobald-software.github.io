
{% include _content/de/xis-specific/parametrisierung/parametrization-about.md  %}

### Custom Properties

Die Eigenschaften der Xtract BW Hierarchy Komponente wird in den *Custom Properties* der Komponente definiert. <br>
Bei der Parametrisierung der Komponente durch SSIS Variablen werden diese Eigenschaften überschrieben.

Liste der relevanten *Custom Properties* der BW Hierarchy Komponente:

|Property|Beschreibung|
|:----|:----|
| *DateTo* | Der Standard-Wert von Date To ist 99991231.|
| *FetchText* | Entspricht dem Feld *Fetch description texts* in [Settings - Extraction Settings](./hierarchy-settings#extraction-settings).|
| *HierarchyID* |  ID der zu extrahierenden Hierarchy.|
| *HierarchyName* | Name der zu extrahierenden Hierarchy. |
| *HierarchyVersion* | Version der zu extrahierenden Hierarchy. |
| *InfoObject* | Entspricht dem Suchfeld *InfoObject* in [BW Hierarchie finden](./hierarchien-suchen#bw-hierarchie-finden). |
| *StringConversion* | Siehe [Settings - String Conversion](./hierarchy-settings#string-conversion). |

### Parametrierung mit SSIS Variablen
Die folgenden Felder und/oder *Custom Properties* der Komponente erlauben die Verwendung von SSIS-Variablen:

|Feldname|Beschreibung|
|:----|:----|
| *HierarchyName* | Eine SSIS-Variable kann den *Custom Properties* der Komponente zugewiesen werden. In Kombination mit einem Foreach-Schleifencontainer können mehrere Hierarchien mit demselben IndoObjekt extrahiert werden.|
| *HierarchyVersion* | Eine SSIS-Variable kann den *Custom Properties* der Komponente zugewiesen werden. In Kombination mit einem Foreach-Schleifencontainer können mehrere Versionen derselben Hierarchie extrahiert werden.|

****
#### Weiterführende Links
- [SSIS Variablen mit Xtract Komponenten verwenden](../parametrisierung/parametrisierung-variablen) 
- [Integration Services-Variablen (SSIS)](https://docs.microsoft.com/de-de/sql/integration-services/integration-services-ssis-variables?view=sql-server-ver15)