
{% include _content/de/xis-specific/parametrisierung/parametrization-about.md  %}

### Custom Properties

Liste der *Custom Properties* der BW Hierarchy Komponente:
- DateTo
- FetchText
- HierarchyID
- HierarchyName
- HierarchyVersion
- InfoObject
- InternalXML
- StringConversion
- UseComponentTypeName

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