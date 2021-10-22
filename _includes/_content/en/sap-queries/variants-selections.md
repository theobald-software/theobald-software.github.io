### Variants and Selections
Most queries allow entering selections before query execution.
Selections limit the result set of the Query so as to extract only records that match the selection.<br>

A selection variant can be created in SAP at the selection screen of a Query. The purpose of a variant is to save selection settings. 
This minimizes the need to enter selections each time you run a query.

{: .box-note }
**Note:** Manual selections and variants can be combined. Manual selections overwrite any selections in the variant.



### Choose a Variant

1. Click the small **[binocular icon]** (1). The window "Look Up Variant" opens.
![Query-Variants-Selection](/img/content/Query-Variants-Selections.png){:class="img-responsive"}
2. Select a Variant from the list of available variants. <br>
![Query-Variant-02](/img/content/Query-Variant-02.png){:class="img-responsive"}
3. Confirm your input with **[OK]**.

To remove the variant, click the **[X]** button (2).<br>

{: .box-tip }
**Tip**: You can dynamize the variant by using a corresponding parameter in the extraction URL.


### Edit Selections
This section corresponds to the query's selection screen in SAP. Some selection fields only have a technical name and no description. 
To understand which field corresponds to a field in SAP, take a look at the query’s selection screen in SAP. 
Click on a selection field and press function key F1. This displays the technical name of a selection field.

In general, selection parameters overwrite the selected variant. 
This ensures that there are possible combinations for the selection.

{% include _content/en/sap-data-format.md  %}

1. Click the **[Edit]** button next to the selection you want to edit (3). The window “Edit Range” opens.
![Query-Selection-Parameters-02](/img/content/Selection-Options-Fill-02.png){:class="img-responsive"}
2. Choose if the selection is to be included or excluded (4) from the extracted data under *Sign*.
3. Select an operator (Equal, GreaterThan, etc.) from the drop-down list under *Option* (5).
4. Enter the selection in the respective Low and High fields. The High field is active for input when the *between* ([]) or *not between*(][) operator was selected.
5. Click **[OK]** to confirm the selections.

To delete a selection, click the button in the bottom left corner (6).

| logical operator   | description   |
|---------------|-------------------------|
| "="     | equal      |
| "!=" | not equal     |
| "<"     | lower than   | 
| "<="      | lower equal than   | 
| ">"    | greater than   | 
| ">="   | greater equal than | 
| "[]" | between (interval) | 
| "]["       | not between (Intervall) | 
| " * "    | contains pattern (Like) | 

