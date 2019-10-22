Click the *Extraction Settings* link to open the Extraction Settings dialog.

**Representation** 

- **ParentChild**: The hierarchy has the SAP parent-child format.

![Hierarchies-Parent-Child](/img/content/Hierarchies-Parent-Child.png){:class="img-responsive"}

- **Natural**: The parent child hierarchy will be transformed in a regular hierarchy.

**Remove Leading Zeros**<br>
Removes all leading zeros using ALPHA conversion in the column NodeName. NodeName can then be used in a join condition with the corresponding Dimension-Key of a BWCube extraction.<br>
Works also for compound InfoObjects. Example: 0CO_AREA (1000) and 0COSTCENTER (0000003100) will become 1000/3100.

**Fetch description texts**<br>
This means that the field NodeText contains the node text based on the system language settings. 

**Natural Representation Settings**<br>
is active only, when Representation has the value Natural

**Level Count** <br>
Defines the maximum number of levels if the representation natural is selected. In the following screenshot you see the hierarchie shown in the previous screenshot with five levels in the representation natural.

![Hierarchy-Parent-Child-Natural](/img/content/Hierarchy-Parent-Child-Natural.png){:class="img-responsive"}

**Fill empty levels**  <br>
If the natural representation is selected the bottom element of the hierarchy will be copied until the last level. In the following screenshot you will see the hierarchy from above with the option Repeat Leaves activated.


![Hierarchy-Parent-Child-Repeat](/img/content/Hierarchy-Parent-Child-Repeat.png){:class="img-responsive"}

**Description texts for levels**<br>
Means, that the output has a field LevelTextN for each field LevelN, that contains the text based on the system language settings.

**Leaves only**<br>
Delivers only the leaves as data records.