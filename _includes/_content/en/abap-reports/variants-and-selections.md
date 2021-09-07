
Most reports allow entering selections before report execution. Selections limit the result set of the report so as to extract only records that match the selection. 

A selection variant can be created in SAP at the input screen of an ABAP report. The purpose of a variant is to save selection settings on your input screen. 
This minimizes the need to enter selections each time you run a report. 

{: .box-note }
**Note:** Manual selections and variants can be combined. Manual selections overwrite any selections in the variant.

![Report-Variants-Section](/img/content/Report-Variants-Selection.png){:class="img-responsive"}
### Choose a Variant
Choose a variant from the drop-down-list *Variant* (1). If you create a new variant in SAP after the report extraction was created, click the **[Refresh]** button next to the drop-down list to access the new variant.

{: .box-note }
**Note:** The selections of the variant are **not** displayed in the *Selection Screen* section of the window. To see the definition of a variant, take a look at the report's variant in SAP.

### Edit Selections

This section corresponds to the report's input screen in SAP. Some selection fields only have a technical name and no description. 
To understand which field corresponds to a field in SAP, take a look at the report's input screen in SAP. Click on a selection field and press function key F1. 
This displays the technical name of a selection field.

1. Click the **[Edit]** button next to the selection you want to edit. The window "Edit Selection" opens.
![Report-Edit-Selections](/img/content/Report-Edit-Selections.png){:class="img-responsive"}
2. Choose if the selection is to be included or excluded (3) from the extracted data.
3. Select an operator (*Equal*, *GreaterThan*, etc.) from the *Option* drop-down list (4). 
4. Enter the selection in the respective *Low* and *High* fields. The *High* field is active for input when the *between* or *not between* operator was selected.
5. Optional: click **[Add Selection]** (5) to add conditions.
6. Click **[OK]** (6) to confirm the selections.

{: .box-tip }
**Tip:** If you use multiple selection parameters, create a variant in SAP. Use the variant instead of entering selections.

### Data Format

{% include _content/en/sap-data-format.md  %}
