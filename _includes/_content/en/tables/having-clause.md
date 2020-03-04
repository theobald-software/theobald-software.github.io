### Using HAVING-clause
The usage of HAVING-clause is shown with the help of an example. The following example shows how many material numbers are assigned to the material art (MTART). After applying the HAVING-clause the preview shows only the material arts with more than 10 material numbers assigned.

{: .box-note }
**Note:** Aggregate function is only supported by nummeric field type, which is why BRGEW (Gross Weight) is used in the example.

1. Select an aggregate function (1) for a field you want to use for the HAVING-clause.  
![Extraction-Settings-01](/img/content/table/Table-Extraction-Having-Clause1.png){:class="img-responsive"}
2. Navigate to tab **HAVING Clause** (2).
2. Enter the HAVING-clause.
3. To display the results in the **Preview** section, click **[Load live preview]**.
![Extraction-Settings-01](/img/content/table/having-clause.png){:class="img-responsive"}

{: .box-note }
**Note:** When fields with the same name exist in different tables, the field names must be formatted as [table name]~[field name], e.g., MAKT~MATNR. This can be the case with [table joins](./table-joins).


With regard to syntax and formulas, the same rules apply as for the [WHERE Clause](./where-clause). 

