
### Look Up a Hierarchy

1. In the main window of the component click **[Search]** ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) icon). The window “Hierarchy Lookup” opens.
2. Enter the name of a Hierarchy in the field **Hierarchy Name** or the name of an InfoObject in the field **InfoObject** (1). Use wildcards (*) if needed. <br>
![Look Up Hierarchy](/img/content/extractors.bwhier/Hierarchy-Search-01.png){:class="img-responsive"}
3. Click ![magnifying-glass](/img/content/icons/magnifying-glass.png) and select the Hierarchy of your choice from the displayed list (2).
4. Click **[Select]** to confirm.


### Format the Output
1. Click **[Extraction Settings]** (3) to define the output format of the Hierarchy, see [{% if page.product == "xtract-is" %}{% else %}Extraction{% endif %} Settings](./hierarchies-extraction-settings).
{% if page.product == "xtract-for-alteryx" %}![Hierarchy](/img/content/extractors.bwhier/Define-Data-Source-Hierarchy.png){:class="img-responsive"} {% elsif page.product == "xtract-is" %}![Hierarchy](/img/content/xis/xis-hierarchy.png){:class="img-responsive"} {% else" %}![Hierarchy](/img/content/xu/hierarchy-settings.png){:class="img-responsive"} {% endif %}
2. Click **[Load live preview]** (4) to display a live preview of the data without running an extraction.
{% if page.product == "xtract-for-alteryx" or page.product == "xtract-is" %} {% else" %}3. Optional: Open the general settings to set primary keys, encryption and other settings. For more information, see [General Settings](./general-settings). 
4. Optional: The default value for **Date To** is *99991231*. To change the value, override the *dateTo* runtime parameter in the ["Run Extraction" window](../getting-started/run-an-extraction). {% endif %}

****
#### Related Links
- [Hierarchy{% if page.product == "xtract-is" %} {% else %} Extraction{% endif %} Settings](./hierarchies-extraction-settings)
- [SAP Documentation: Uploading Hierarchies from Flat Files](https://help.sap.com/saphelp_scm700_ehp02/helpdata/en/fa/e92637c2cbf357e10000009b38f936/frameset.htm)
