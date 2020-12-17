### Defining a Hierarchy Extraction
First steps, see [Defining a Table Extraction](../define-a-table-extraction).

### Creating an Extraction
Choose from the two possibilities to create an extraction.

#### 1. Defining a new Extraction
1. In the main window of the **Xtract Universal Designer** click **[New]**.
2. Field **Source** (1) states the SAP connection. Choose the SAP connection you created previously from the drop-down menu.
![Create-Hierarchy-Extraction](/img/content/xu/xu_select-bw-hierarchy.png){:class="img-responsive"}
3. Enter a unique name for your extraction (2).
4. Choose **BW Hierarchy** (3).
5. Click **[OK]** (4) to confirm.
The window "Extract SAP BW Hierarchies" opens.
6. To continue see next section task (2).

#### 2. Using an existing Extraction
1. In the main window of the **Xtract Universal Designer** click in the subsection on an existing Extraction to open.
The window "Extract SAP BW Hierarchies" opens.
2. Search for **Hierarchy Names** by using the (magnifying glass symbol).
![Search Hierarchy Names](/img/content/xu/xu_search_hierarchy_name.png){:class="img-responsive"}
The search form **Look Up Hierarchy** appears.
![Look Up Hierarchy](/img/content/xu/xu_look-up-hierarchy.png){:class="img-responsive"}
3. By using wildcards (* as a placeholder) (1), a hierarchy can be searched (2).
Search Results are displayed (3).
4. Select one (3) and click **[OK]** to confirm.
![Look Up Hierarchy](/img/content/xu/xu_search-hierarchy-name-filled.png){:class="img-responsive"}
After making your selection, the component saves all relevant data needed for the extraction later on.

**Date To**<br>
1. The defalut value for **Date To** is *99991231*. To change it, click on **[Run]**.
2. Select **dateTo** in the list entry, tick to activate and override the value.