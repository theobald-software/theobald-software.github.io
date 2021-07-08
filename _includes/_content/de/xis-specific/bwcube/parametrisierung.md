
{% include _content/de/xis-specific/parametrisierung/parametrization-about.md  %}

### Custom Properties

Liste der *Custom Properties* der BW Cube Komponente:
- CubeName
- DelimiterForMultipleSSISVariableValues
- IgnoreMDXErrors
- InternalXML
- MDXVariable
- ReservedXML
- StringConversion
- UserComponentTypeName

### Parametrierung mit SSIS Variablen
Die folgenden Felder und/oder *Custom Properties* der Komponente erlauben die Verwendung von SSIS-Variablen:

|Feldname|Beschreibung|
|:----|:----|
|*Variables*| Geben Sie eine SSIS-Variable ein, um eine BEx-Variable zu füllen, siehe [Variablen](./variablen). <br>Für BEx-Variablen des Typs *Multiple Single* geben Sie eine einzelne SSIS-Variable ein, setzen ein Trennzeichen für die Eigenschaft *DelimiterForMultipleSSISVariableValues* und geben unter Verwendung des Trennzeichens mehrere Werte in die Variable ein.|
|*Member Filter*        | Geben Sie eine SSIS-Variable in das Feld *variable* ein. Die SSIS-Variable kann mit mehreren Einträgen gefüllt werden, die von einem Komma getrennt sind.|
|*Extraction Type MDX* |SSIS-Variablen können als Teil des MDX-Ausdrucks für BEx-Variablen oder Dimensionsfilter verwendet werden. |
|*MDXVariable*        |Verwenden Sie *MDXVariable* in Kombination mit *Extraction Type MDX*. Geben Sie eine SSIS-Variable in die MDX Textbox ein und füllen Sie die SSIS-Variable mit dem kompletten MDX-Ausdruck.|


****
#### Weiterführende Links
- [SSIS Variablen mit Xtract Komponenten verwenden](../parametrisierung/parametrisierung-variablen) 
- [Integration Services-Variablen (SSIS)](https://docs.microsoft.com/de-de/sql/integration-services/integration-services-ssis-variables?view=sql-server-ver15)