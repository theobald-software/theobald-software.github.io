---
ref: xfa-bwhier-settings
layout: page
title: Extraction Settings
description: BW Hierarchy Settings
product: xtract-for-alteryx
parent: bwhierarchy
permalink: /:collection/:path
weight: 2
lang: en_GB
---

To access the extraction settings, click **[Extraction Settings]** in the main window of the component. The window “Hierarchy Settings” opens.<br>
![Hierarchies-Settings](/img/content/Hierarchy-settings.png){:class="img-responsive"}

### Extraction Settings
**Representation:** 
- *ParentChild*: The hierarchy is represented in the SAP parent-child format, see [Output Formats: Parent-Child](./table-output#parent-child-format). Example:<br>
![Hierarchies-Parent-Child](/img/content/Hierarchy-Table-Output-Result.png){:class="img-responsive"}
- *Natural*: The SAP parent-child hierarchy is transformed into a regular hierarchy, see [Output Formats: Natural](./table-output#natural-format). Example:<br>
![Hierarchy-Parent-Child-Natural](/img/content/Hierarchy-Parent-Child-Natural.png){:class="img-responsive"}

**Remove Leading Zeros:**<br>
If this option is active, all leading zeros in the column *NoName* are removed via ALPHA conversion.
*NodeName* can then be used in a JOIN-condition with the corresponding Dimension-Key of a BW Cube extraction.<br>
The conversion works for compound InfoObjects, too. 
Example: 0CO_AREA (1000) and 0COSTCENTER (0000003100) becomes 1000/3100.

**Fetch description texts:**<br>
Sets the node text in the column *NodeText* based on the system language settings. 

### Natural Settings

{: .box-note}
**Note:** the subsection *Natural Settings* is only active, when **Representation** field is set to *Natural*.

**Level Count:** <br>
Defines the maximum number of levels. The following example shows a hierarchy with four levels. <br>
![Hierarchy-Parent-Child-Natural](/img/content/Hierarchy-Parent-Child-Natural.png){:class="img-responsive"}

**Leaves only:**<br>
Returns only the leaves as data records.<br>
![Hierarchy-Leaves-Only](/img/content/Hierarchy-leaves-only.png){:class="img-responsive"}

**Fill empty levels:**  <br>
Copies the bottom element of the hierarchy until the last level.
The following example depicts the previously shown hierarchy with the activated *Repeat Leaves* option.<br>
![Hierarchy-Parent-Child-Repeat](/img/content/Hierarchy-Parent-Child-Repeat.png){:class="img-responsive"}

**Description texts for levels:**<br>
Sets the output field *LevelTextN* for each field *LevelN* containing the text based on the system language settings.<br>
![Hierarchy-Description-Texts](/img/content/Hierarchy-description-texts.png){:class="img-responsive"}

### Debug

**Enable Debug Logging:**<br>
Adds more detailed logs for the Hierarchy component to the extraction logs. Activate **Enable Debug Logging** only when necessary e.g., upon request of the support team.

*****
#### Related Links
- [About SAP BW Hierarchies](https://help.sap.com/saphelp_scm41/helpdata/en/90/fd36709c6411d5b4000050dadfb23f/content.htm?no_cache=true)
