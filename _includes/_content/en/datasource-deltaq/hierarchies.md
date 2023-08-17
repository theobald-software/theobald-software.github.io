### Look Up Hierarchies

1. In the main window of the component navigate to **OLTP** and click ![magnifying-glass](/img/content/icons/magnifying-glass.png). The window “Look Up OLTP Source” opens.<br>
![DeltaQ](/img/content/DeltaQ.png){:class="img-responsive"}
2. Enter the name of a *Hierarchy* in the field **Name** or enter the description of a Hierarchy in the field **Description** (1). Use wildcards ( * ), if needed.<br>
![search-ds-mat-attr](/img/content/DeltaQ-Hierarchy-001.png){:class="img-responsive"}
3. Click ![magnifying-glass](/img/content/icons/magnifying-glass.png) and select an extractor from the displayed list (2).
4. Click **[OK]** to confirm your selection. The window "Look UP Hierarchy Details" opens.
5. Select the Hierarchy of your choice from the displayed list. <br>
![DeltaQ-Hierarchy-002](/img/content/DeltaQ-Hierarchy-002.png){:class="img-responsive"}
6. Click **[OK]** to confirm your selection.

The application now returns to the main window of the component.


### Defining the DeltaQ Extraction

After looking up a hierarchy, follow the steps below:

1. Navigate to **Gateway** and click ![magnifying-glass](/img/content/icons/magnifying-glass.png) (1) to look up an RFC destination. 
For more information, see [DeltaQ Customizing](./deltaq-customizing).<br>
![DeltaQ2](/img/content/DeltaQ2.png){:class="img-responsive"}
2. Navigate to **Logical Destination** and click ![magnifying-glass](/img/content/icons/magnifying-glass.png) (2) to look up a logical RFC target system. For more information, see [DeltaQ Customizing](./deltaq-customizing).
3. Click **Customizing Check** (3) to validate the DeltaQ Customizing on the SAP system.
Make sure that all checks are green. For more information, see [DeltaQ Customizing](./deltaq-customizing).<br>
![customizing-check-successfull](/img/content/customizing-check-successfull.png){:class="img-responsive"}
4. Select an [Update Mode](#update-mode), e.g., to initialize delta extractions.
5. Optional: Click the **[Edit]** option next to an item to add [filters](./datasource-parameters). 
6. Optional: Click **[Extracton Settngs]** to set the language of the Hierarchy, see [{% if page.product != "xtract-is" %}Extraction {% endif %} Settings](./extraction-settings). 
7. Click **[Run]** to testrun the extraction and validate your settings.
![Datasource Preview](/img/content/odp/odp-datasource-2lis-11-vaitm-02-preview.png){:class="img-responsive"}

{: .box-tip }
**Tip:** Unlike attributes and transactions, Hierarchies do not have to be activated.

### Hierarchy Output

The output of a Hierarchy is defined by the selected **Representation** in the [{% if page.product != "xtract-is" %}Extraction {% endif %}Settings](./extraction-settings).<br>
The output of a Hierarchy can contain the following columns:

- **NodeID:**
Unique node key.
- **ParentNodeID:**
Key for parent node.
- **FirstChildNodeID:**
Key for first child node.
- **NextNodeID:**
Key for next node in the same hierarchical level.
- **InfoObjectName:**
Name of InfoObject behind the corresponding node.
- **NodeName:**
The node’s (technical) name.
- **NodeText:** 
The description text of the node. This column is only created when the [extraction setting](./hierarchies-extraction-settings) **Fetch description texts** is active.
- **DateFrom:** 
Date from which the node is valid.
- **DateTo:**
Date the node is valid to.
- **Link:** 
If the value in *Link* is greater than 0, the node is a link node. The ID of the original node that was linked from is displayed. 
- **Row:**
Number of the row. The row number can be used as an ID or sort criterion when processing the extracted data.<br>