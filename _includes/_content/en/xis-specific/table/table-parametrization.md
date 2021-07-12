
{% include _content/en/xis-specific/parameterization/parametrization-about.md  %}

### Custom Properties

The *Custom Properties* define the properties unique to the Xtract Table component. <br>
When parameterizing the Table component using SSIS variables or Data Flow Properties, the *Custom Porperties* are overwritten.

List of *Custom Properties* of the Table component:

|Property|Comment|
|:----|:----|
| *ColumnNameStyle* | Defines the style of the column name. Permitted values are: Code, PrefixedCode, CodeAndText and TextAndCode. "Code" represents the technical column name in SAP and "Text" represents the description of the column in SAP.|
| *ConvertsDates* | Enable or disable conversion of SAP dates. |
| *CustomFunctionName* | Corresponds to the drop-down menu *Function Module* in the Table component's [Settings](./extraction-settings).|
| *InvalidDateReplacement* | In case of invalid date values you need to enter a default date value. Every invalid value will be converted into this value.|
| *MaxDateReplacement* | Converts the SAP date 9999XXXX to the entered value.|
| *MaxRows* | Corresponds to the field *Row Limit* in the Table component's [Settings](./extraction-settings).|
| *MinDateReplacement* | Converts the SAP date 00000000 to the entered value.|
| *OrderBy* | Defines the table field that is used as the sort criterion for the result.|
| *PackageSize*| Corresponds to the field *Package Size* in the Table component's [Settings](./extraction-settings).|
| *UseLegacyDateConversion* | |
| *UserComponentTypeName* | |
| *UseWideStrings* | Defines whether DT_WSTR / DT_NTEXT (true) or DT_STR / DT_TEXT (false) is used as the data type for string columns.|
| *WhereClause* | Corresponds to the tab *WHERE clause* in the Table component. Allows parameterization of the complete WHERE clause, see [Dynamization of WHERE conditions of the XIS table component](https://kb.theobald-software.com/xtract-is/Dynamization-of-WHERE-conditions-of-the-XIS-table-components).|


### Parameterization using Properties
The following properties can be parameterized:

|Property Name|Description|
|:----|:----|
| *[Xtract Table].[WhereClause]*|Corresponds to the tab *WHERE clause* in the Table component. Allows parameterization of the complete WHERE clause, see [Dynamization of WHERE conditions of the XIS table component](https://kb.theobald-software.com/xtract-is/Dynamization-of-WHERE-conditions-of-the-XIS-table-components).|
| *[Xtract Table].[ConvertsDates]*|Enable or disable conversion of SAP dates. |
| *[Xtract Table].[CustomFunctionName]*| Corresponds to the drop-down menu *Function Module* in the Table component's [Settings](./extraction-settings).|
| *[Xtract Table].[MaxRows]*|Corresponds to the field *Row Limit* in the Table component's [Settings](./extraction-settings).|
| *[Xtract Table].[MinDateReplacement]*|Converts the SAP date 00000000 to the entered value.|
| *[Xtract Table].[MaxDateReplacement]*|Converts the SAP date 9999XXXX to the entered value.|
| *[Xtract Table].[InvalidDateReplacement]*|In case of invalid date values you need to enter a default date value. Every invalid value will be converted into this value.|
| *[Xtract Table].[PackageSize]*| Corresponds to the field *Package Size* in the Table component's [Settings](./extraction-settings).|

{: .box-tip }
**Recommendation:** Where possible, use properties for parameterization. 

### Parameterization using SSIS Variables
The following fields and/or custom properties of the component allow entry of an SSIS variable:

|Field Name|Comment|
|:----|:----|
| *WHERE clause* tab| Allows parameterization of the complete WHERE clause or only parts of the WHERE clause. Example: AEDAT > @v_aedat|

****
#### Related Links
- [Table Extraction Settings](./extraction-settings) <br>
- [Parameterization](../parameterization) <br>
- [Dynamization of WHERE conditions of the XIS table component](https://kb.theobald-software.com/xtract-is/Dynamization-of-WHERE-conditions-of-the-XIS-table-components)