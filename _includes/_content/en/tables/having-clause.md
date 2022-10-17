
### Using HAVING-clause

The HAVING clause can be used to filter groups of rows, see [SAP ABAP Documentation: SELECT-HAVING](https://help.sap.com/doc/abapdocu_750_index_htm/7.50/en-US/abaphaving_clause.htm).

The following example shows how many materials are assigned to a material type (MTART). 
After applying the HAVING-clause the preview shows only the material types with more than 10 materials assigned.

{: .box-note }
**Note:** Aggregate functions are only supported for numeric field types, which is why the field BRGEW (Gross Weight) is used in the example.

1. Select an aggregate function (1) for a field you want to use in the HAVING-clause.  
![Extraction-Settings-01](/img/content/table/Table-Extraction-Having-Clause1.png){:class="img-responsive"}
2. Navigate to tab **HAVING Clause** (2).
2. Enter the HAVING-clause.
3. To display the results in the **Preview** section, click **[Load live preview]**.
![Extraction-Settings-01](/img/content/table/having-clause.png){:class="img-responsive"}

{: .box-note }
**Note:** When fields with the same name exist in different tables, the field names must be formatted as [table name]~[field name], e.g., MAKT~MATNR. This can be the case with [table joins](./table-joins).

### HAVING Clause Syntax 

With regard to syntax and formulas, the same rules apply as for the [WHERE Clause](./where-clause#where-clause-syntax). 

