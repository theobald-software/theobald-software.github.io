
{% include _content/en/xis-specific/parameterization/parametrization-about.md  %}

### Custom Properties

The *Custom Properties* define the properties unique to the Xtract Table component. <br>
When parameterizing the Table component using SSIS variables or Data Flow Properties, the *Custom Porperties* are overwritten.

List of relevant *Custom Properties* of the Table component:

|Property|Comment|
|:----|:----|
| *ColumnNameStyle* | Defines the style of the column name used in the destination. Permitted values are: <br> *Code*: uses the SAP technical column name e.g., MAKTX.<br> *PrefixedCode*: the SAP technical column name is prefixed by SAP object name and the tilde character e.g., MAKT~MAKTX. <br>*CodeAndText*: uses the SAP technical column name and the SAP description separated by an underscore e.g., MAKTX_Material Description (Short Text).<br>*TextAndCode*: uses the SAP description and the SAP technical column name description separated by an underscore e.g., Material Description (Short Text)_MAKTX.|
| *ConvertsDates* | When this property is set to *True* (default) SAP date fields (YYYYMMDD) assume the SSIS pipeline type DT_DBDATE instead of DT_WSTR. In case of invalid data in SAP date fields, the following date conversions are applied: <br>**InvalidDateReplacement**, **MaxDateReplacement**, **MinDateReplacement**. <br>For the date conversions to apply, set the property **UseLegacyDateConversion**  to *False*|
| *CustomFunctionName* | Corresponds to the drop-down menu *Function Module* in the Table component's [Settings](./extraction-settings).|
| *InvalidDateReplacement* | Allows the replacement of an invalid date format. The default value of the property **InvalidDateReplacement** is *1970-01-02*. <br>To use the property enter a replacement value for invalid SAP dates, such as '20190132' (January 32nd  2019) in the format yyyy-mm-dd. The value NULL is supported.|
| *MaxDateReplacement* | Allows replacing the SAP dates with the year 9999. The default value of the property **MaxDateReplacement** is 2099-12-31. <br>To use the property enter a replacement value in the format yyyy-mm-dd that contains the year ‘9999’. Example: ‘99990101’ (January 1st 9999). The value NULL is supported.|
| *MaxRows* | Corresponds to the field *Row Limit* in the Table component's [Settings](./extraction-settings).|
| *MinDateReplacement* | Allows replacing the SAP dates with the year *0000*. The default value of the property **MinDateReplacement** is 1970-01-01. <br>To use the property enter a replacement value in the format yyyy-mm-dd that contains the year '0000'. Example: '00000000'. The value NULL is supported.|
| *OrderBy* | Defines the table field that is used as the sort criterion for the result.|
| *PackageSize*| Corresponds to the field *Package Size* in the Table component's [Settings](./extraction-settings).|
| *UseWideStrings* | Defines whether DT_WSTR / DT_NTEXT (true) or DT_STR / DT_TEXT (false) is used as the data type for string columns.|
| *UseLegacyDateConversion* | Use this property when migrating table extractions from Xtract IS versions < 5.0.0. <br>When set to *True* invalid SAP date values are replaced with the value entered in the **InvalidDateReplacement** property.<br> There is no replacement for SAP dates that contain the year '9999'. SAP dates that contain the year '0000' are replaced with *NULL*. The values entered in the **MaxDateReplacement** and **MinDateReplacement** property are *not* considered. <br>For the conversion to apply, set the property **ConvertsDates** to *True*.|
| *WhereClause* | Corresponds to the tab *WHERE clause* in the Table component. Allows parameterization of the complete WHERE clause, see [Dynamization of WHERE conditions of the XIS table component](https://kb.theobald-software.com/xtract-is/Dynamization-of-WHERE-conditions-of-the-XIS-table-components).|


### Parameterization using Data Flow Properties
The following properties can be parameterized:

|Property Name|Description|
|:----|:----|
| *[Xtract Table].[WhereClause]*|Corresponds to the tab *WHERE clause* in the Table component. Allows parameterization of the complete WHERE clause, see [Dynamization of WHERE conditions of the XIS table component](https://kb.theobald-software.com/xtract-is/Dynamization-of-WHERE-conditions-of-the-XIS-table-components).|
| *[Xtract Table].[ConvertsDates]*|Enable or disable conversion of SAP dates, see [Custom Properties](#custom-properties). |
| *[Xtract Table].[CustomFunctionName]*| Corresponds to the drop-down menu *Function Module* in the Table component's [Settings](./extraction-settings).|
| *[Xtract Table].[MaxRows]*|Corresponds to the field *Row Limit* in the Table component's [Settings](./extraction-settings).|
| *[Xtract Table].[MinDateReplacement]*|Converts the SAP date 00000000 to the entered value, see [Custom Properties](#custom-properties).|
| *[Xtract Table].[MaxDateReplacement]*|Converts the SAP date 9999XXXX to the entered value, see [Custom Properties](#custom-properties).|
| *[Xtract Table].[InvalidDateReplacement]*|Every invalid value will be converted into the entered value, see [Custom Properties](#custom-properties).|
| *[Xtract Table].[PackageSize]*| Corresponds to the field *Package Size* in the Table component's [Settings](./extraction-settings).|

{: .box-tip }
**Recommendation:** Where possible, use properties for parameterization. 

### Parameterization using SSIS Variables
The following fields and/or custom properties of the component allow entry of an SSIS variable:

|Field Name|Comment|
|:----|:----|
| *WHERE clause* tab| Allows parameterization of the complete WHERE clause or only parts of the WHERE clause. Example: AEDAT > @v_aedat. See also [Dynamization of WHERE conditions of the XIS table component](https://kb.theobald-software.com/xtract-is/Dynamization-of-WHERE-conditions-of-the-XIS-table-components).|


****
#### Related Links
- [Table Extraction Settings](./extraction-settings) <br>
- [Parameterization](../parameterization) <br>
- [Dynamization of WHERE conditions of the XIS table component](https://kb.theobald-software.com/xtract-is/Dynamization-of-WHERE-conditions-of-the-XIS-table-components)