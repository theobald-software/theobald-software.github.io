### To Open Extraction Settings

![Extraction Settings](/img/content/xu/xu_bw-hierarchies_Extraction-Settings.png){:class="img-responsive"}
1. In the window "Extract SAP BW Hierarchies" click **[Extraction Settings]**. The window "Hierarchy Settings" opens.
2. Change the settings, if needed.
3. Click **[OK]** to confirm.

### Hierarchy Settings
![Hierarchies-Settings](/img/content/Hierarchy-settings.png){:class="img-responsive"}
The window “Hierarchy Settings” contains two subsections:
- Extraction Settings
- Natural Representation Settings

#### Extraction Settings
**Representation:** 
- **ParentChild**: The hierarchy is represented in the SAP parent-child format.
![Hierarchies-Parent-Child](/img/content/Hierarchies-Parent-Child.png){:class="img-responsive"}
- **Natural**: The SAP parent-child hierarchy is transformed into a regular hierarchy.


**Remove Leading Zeros**<br>
Removes all leading zeros (via ALPHA conversion) in the column NodeName.
NodeName can then be used in a JOIN-condition with the corresponding Dimension-Key of a BW Cube extraction.<br>
The conversion works also for compound InfoObjects.<br> 
Example: 0CO_AREA (1000) and 0COSTCENTER (0000003100) becomes 1000/3100.

**Fetch description texts**<br>
Sets the field *NodeText* to the node text based on the system language settings. 

#### Natural Representation Settings

{: .box-note}
**Note:** the subsection **Natural Representation Settings** is only active, when **Representation** field is set to value *Natural*.

**Level Count** <br>
Defines the maximum number of levels. 
The following example depicts the previously shown hierarchy with five levels and in the representation set to *Natural*.
![Hierarchy-Parent-Child-Natural](/img/content/Hierarchy-Parent-Child-Natural.png){:class="img-responsive"}

**Leaves only**<br>
Delivers only the leaves as data records.
![Hierarchy-Parent-Child-Repeat](/img/content/Hierarchy-leaves-only.png){:class="img-responsive"}

**Fill empty levels**  <br>
Copies the bottom element of the hierarchy until the last level.
The following example depicts the previously shown hierarchy with the activated *Repeat Leaves* option.
![Hierarchy-Parent-Child-Repeat](/img/content/Hierarchy-Parent-Child-Repeat.png){:class="img-responsive"}


**Description texts for levels**<br>
Sets the output field *LevelTextN* for each field *LevelN* containing the text based on the system language settings.

