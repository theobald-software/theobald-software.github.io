
The following section shows how to use the {% if page.product == "xtract-is" or page.product == "xtract-for-alteryx"%}Xtract{% endif %} Query component.

### Look up a Query

1. In the main window of the component click ![magnifying-glass](/img/content/icons/magnifying-glass.png).
The window “Query Lookup” opens.<br>
{% if page.product == "xtract-universal" or page.product == "board-connector"%}![Variants-Section](/img/content/xu/empty-Query.png){:class="img-responsive"}{% elsif page.product == "xtract-for-alteryx"%}![Query](/img/content/xfa/empty-Query.png){:class="img-responsive"}{% endif %}
2. Enter the name of a query in the field **Query Name** or enter the name of a user group in the field **User group** (1). Use wildcards (*) if needed. <br>
![Look Up Hierarchy](/img/content/query/query-lookup.png){:class="img-responsive"}
3. Select the query work area that contains the query object (2). For more information, see [SAP Documentation: Query Areas](https://help.sap.com/doc/saphelp_nw74/7.4.16/en-us/4e/3bdad0b8503b0fe10000000a42189e/frameset.htm).
4. Click ![magnifying-glass](/img/content/icons/magnifying-glass.png) and select the preferred query from the displayed list (2).
5. Click **[OK]** to confirm your selection.

The application now returns to the main window of the component.

### Define a Query Extraction
<!--- ### Eine Query Extraktion Einrichten -->

[Look up a query](#look-up-a-query) and follow the steps below to set up a query extraction:

1. If the query has variants, select a variant in the *Variant* section of the main window.
For more information, see [Variants and Selections: Choose a Variant](./variant-selections#choose-a-variant).<br>
2. Optional: Edit selections in the *Selection Screen* section of the main window. For more information, see [Variants and Selections: Edit Selections](./variant-selections#edit-selections).<br>
3. Optional: Change the [Extraction Settings](./extraction-settings).
4. Click **[OK]** to save the extraction.
