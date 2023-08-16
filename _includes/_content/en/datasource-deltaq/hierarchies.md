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

After looking up a Hierarchy, follow the steps below:

1. In the main window of the component navigate to **Gateway** and click ![magnifying-glass](/img/content/icons/magnifying-glass.png). 
The window “Look Up Rfc Destination” opens.
2. 

2. Select an [Update Mode](#update-mode), e.g., to create delta extractions.
3. Optional: Click the **[Edit]** option next an element to add [Datasource Parameters](./datasource-parameters). 
4. Optional: Click **[Extracton Settngs]** to set the language of the Hierarchy, see [Extraction Settings](./extraction-settings). 
5. Click **[Run]** to testrun the extraction and validate your settings.
![Datasource Preview](/img/content/odp/odp-datasource-2lis-11-vaitm-02-preview.png){:class="img-responsive"}

{: .box-tip }
**Tip:** Unlike attributes and transactions, Hierarchies do not have to be activated.

### Preview Extraction
Click **[Run]** to display the **Run Extraction** window and enable the **Preview** runtime parameter
![DeltaQ-Hierarchy-004](/img/content/DeltaQ-Hierarchy-004.png){:class="img-responsive"}

**NodeID** is the sequential number of a node in the Hierarchy.<br>
**NodeName** is the actual value. <br>
The hierarchy can be reconstructed with the **ParentID** and **ChildID**.<br>
**Short/Medium/Long Text** can be found in the backend area.
