### Defining a Hierarchy Extraction
 Create a Hierarchy extraction, see [Defining a Table Extraction](../getting-started/define-a-table-extraction).

### Defining a new Extraction
1. In the main window of the **Xtract Universal Designer** click **[New]**.
2. Field **Source** (1) states the SAP connection. Select the SAP connection you created previously from the drop-down menu.
![Create-Hierarchy-Extraction](/img/content/xu/xu_select-bw-hierarchy.png){:class="img-responsive"}
3. Enter a unique name for your extraction (2).
4. Select **BW Hierarchy** (3).
5. Click **[OK]** (4) to confirm.
The window "Extract SAP BW Hierarchies" opens.
6. Search for **Hierarchy Names** by using the (magnifying glass symbol).
![Search Hierarchy Names](/img/content/xu/xu_search_hierarchy_name.png){:class="img-responsive"}
The search form **Look Up Hierarchy** appears.
![Look Up Hierarchy](/img/content/xu/xu_look-up-hierarchy.png){:class="img-responsive"}
3. Search for a particular hierarchy by name or InfoObject (5). You can use wildcards (*), if needed.<br>
The search results appear in the preview section (6).
4. Select an item and click **[OK]** to confirm.
The window "Extract SAP BW Hierarchies" displayes the selcted values.<br>
The component saves all relevant data for further processing.<br>
The settings can be altered after creating extractions any time.<br>

**Date To**<br>
The defalut value for **Date To** is *99991231*. To change the value, click **[Run]** and override the value.