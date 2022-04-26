
{% include _content/en/xis-specific/parameterization/parametrization-about.md  %}

### Custom Properties

The *Custom Properties* define the properties unique to the Xtract Table component. <br>
When parameterizing the Table component using SSIS variables or Data Flow Properties, the *Custom Porperties* are overwritten.

For a list of available *Custom Properties*, see [Table Custom Properties](./properties).


### Parameterization using Data Flow Properties
The following properties can be parameterized:

|Property Name|Description|
|:----|:----|
| *[Xtract Table].[WhereClause]*|Corresponds to the tab *WHERE clause* in the Table component. Allows parameterization of the complete WHERE clause, see [Dynamization of WHERE conditions of the XIS table component](https://kb.theobald-software.com/xtract-is/Dynamization-of-WHERE-conditions-of-the-XIS-table-components).|
| *[Xtract Table].[ConvertsDates]*|Enable or disable conversion of SAP dates, see [Table Custom Properties](./properties). |
| *[Xtract Table].[CustomFunctionName]*| Corresponds to the drop-down menu *Function Module* in the Table component's [Settings](./extraction-settings).|
| *[Xtract Table].[MaxRows]*|Corresponds to the field *Row Limit* in the Table component's [Settings](./extraction-settings).|
| *[Xtract Table].[MinDateReplacement]*|Converts the SAP date 00000000 to the entered value, see [Table Custom Properties](./properties).|
| *[Xtract Table].[MaxDateReplacement]*|Converts the SAP date 9999XXXX to the entered value, see [Table Custom Properties](./properties).|
| *[Xtract Table].[InvalidDateReplacement]*|Every invalid value will be converted into the entered value, see [Table Custom Properties](./properties).|
| *[Xtract Table].[PackageSize]*| Corresponds to the field *Package Size* in the Table component's [Settings](./extraction-settings).|

{: .box-tip }
**Recommendation:** Where possible, use properties for parameterization. 

### Parameterization using SSIS Variables
The following fields and/or custom properties of the component allow entry of an SSIS variable:

|Field Name|Comment|
|:----|:----|
| *WHERE clause* tab| Allows parameterization of the complete WHERE clause or only parts of the WHERE clause. For more information, see [Using SSIS Variables in the WHERE Clause Editor](where-clause#using-ssis-variables-in-the-where-clause-editor) or the knowledge base article [Dynamization of WHERE conditions of the XIS table component](https://kb.theobald-software.com/xtract-is/Dynamization-of-WHERE-conditions-of-the-XIS-table-components).|


****
#### Related Links
- [Table Extraction Settings](./extraction-settings) <br>
- [Parameterization](../parameterization) <br>
- [Dynamization of WHERE conditions of the XIS table component](https://kb.theobald-software.com/xtract-is/Dynamization-of-WHERE-conditions-of-the-XIS-table-components)