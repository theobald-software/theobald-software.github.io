
1. Create a new extraction by clicking **[New]** in the main window of the Designer. The window "Create Extraction" opens.<br>
{% if page.product == "xtract-universal" %} ![New](/img/content/xu/xu-intro.png){:class="img-responsive"}
{% elsif page.product == "board-connector" %}![New](/img/content/board/bc-intro.png){:class="img-responsive"} {% endif %}
2. Select an [SAP connection](./introduction/sap-connection) from the drop-down menu in **Source** and enter a unique name for your extraction.
3. Select the extraction type / component and click **[OK]** to confirm. The main window of the component opens automatically.

The extraction is now listed in the main window of the Designer. 
Double click the extraction to open the main window of the component.
The majority of the functions of the component can be accessed using the main window.

{% if page.product == "xtract-universal" %}
#### Assign a Destination

When creating a new extraction, data is written to the *http-csv* destination by default.
To assign a different destination to an extraction, select the extraction and click **[Destination]**.
The window "Destination Settings" opens. 
In the "Destination Settings" window you can select the destination.<br>
![Destinations](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

- For information on how to create destinations, see [Loading an Extraction into a Database](./getting-started/load-an-extraction-into_database).
- For information on available destinations, see [Destinations](./destinations).
{% endif %}