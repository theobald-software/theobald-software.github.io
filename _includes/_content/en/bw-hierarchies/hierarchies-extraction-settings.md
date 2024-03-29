To access the extraction settings, click {% if page.product == "xtract-is" %}**Settings** {% else %} **[Extraction Settings]**{% endif %} in the main window of the component. The window “Hierarchy Settings” opens.<br>
![Hierarchies-Settings](/img/content/extractors.bwhier/Hierarchy-settings.png){:class="img-responsive"}

### Extraction Settings
**Representation:** 
- *ParentChild*: The Hierarchy is represented in the SAP parent-child format, see [Output Formats: ParentChild](./table-output#parentchild-format). Example:<br>
![Hierarchies-Parent-Child](/img/content/extractors.bwhier/Hierarchy-Table-Output-Result.png){:class="img-responsive"}
- *Natural*: The SAP parent-child Hierarchy is transformed into a regular hierarchy, see [Output Formats: Natural](./table-output#natural-format). Example:<br>
![Hierarchy-Parent-Child-Natural](/img/content/extractors.bwhier/Hierarchy-Parent-Child-Natural.png){:class="img-responsive"}
- *ParentChildWithNodeNames*: The Hierarchy is represented in a reduced SAP parent-child format that only includes single nodes and their parent, see [Output Formats: ParentChildWithNodeNames](./table-output#parentchildwithnodenames-format). Example:<br>
![Hierarchy-Parent-Child-With-Node-Names](/img/content/extractors.bwhier/Hierarchy-ParentChildWithNodes.png){:class="img-responsive"}

**Remove Leading Zeros:**<br>
If this option is active, all leading zeros in the column *NodeName* of the leaves are removed.
*NodeName* can then be used in a JOIN-condition with the corresponding Dimension-Key of a BW Cube extraction.<br>
The conversion works for compound InfoObjects, too. 
Example: 0CO_AREA (1000) and 0COSTCENTER (0000003100) become 1000/3100.

**Fetch description texts:**<br>
Sets the node text in the column *NodeText*. <br>
All texts of InfoObjects that have language dependent texts will be retrieved in the language that the SAP source connection uses. 
If no texts exist, the result does not contain any texts for entries of that InfoObject.

### Natural Settings

{: .box-note}
**Note:** the subsection *Natural Settings* is only active, when the **Representation** is set to *Natural*.

**Level Count:** <br>
Defines the maximum number of levels. The following example shows a Hierarchy with four levels. <br>
![Hierarchy-Parent-Child-Natural](/img/content/extractors.bwhier/Hierarchy-Parent-Child-Natural.png){:class="img-responsive"}

**Leaves only:**<br>
Returns only the leaves as data records.<br>
![Hierarchy-Leaves-Only](/img/content/extractors.bwhier/Hierarchy-leaves-only.png){:class="img-responsive"}

**Fill empty levels:**  <br>
Copies the bottom element of the Hierarchy until the last level.
The following example depicts the previously shown Hierarchy with the activated *Repeat Leaves* option.<br>
![Hierarchy-Parent-Child-Repeat](/img/content/extractors.bwhier/Hierarchy-Parent-Child-Repeat.png){:class="img-responsive"}

**Description texts for levels:**<br>
Sets the output field *LevelTextN* for each field *LevelN* containing the text based on the system language settings.<br>
![Hierarchy-Description-Texts](/img/content/Hierarchy-description-texts.png){:class="img-responsive"}

### Debug

**Enable Debug Logging:**<br>
Adds more detailed logs for the{% if page.product == "xtract-is" or page.product == "xtract-for-alteryx"%} Xtract{% endif %} Hierarchy component to the extraction logs. Activate **Enable Debug Logging** only when necessary e.g., upon request of the support team.

*****
#### Related Links
- [SAP Documentation: About SAP BW Hierarchies](https://help.sap.com/saphelp_scm41/helpdata/en/90/fd36709c6411d5b4000050dadfb23f/content.htm?no_cache=true)
