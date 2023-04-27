### Hierarchy Structure in SAP
The example Hierarchy PM_COUNTRY has the following format in SAP:<br>
![Hierarchy-Table-SAP](/img/content/Hierarchy-Table-Output.png){:class="img-responsive"}

### ParentChild Format

The default output of the BW Hierarchy component contains the following columns:

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
The description text of the node. This column is only created when the [extraction setting](./bwhier-settings) **Fetch description texts** is active.
- **DateFrom:** 
Date from which the node is valid
- **DateTo:**
Date the node is valid to.
- **Link:** 
If the value in *Link* is greater than 0, the node is a link node. The ID of the original node that was linked from is displayed. 
- **Row:**
Number of the row. The row number can be used as an ID or sort criterion when processing the extracted data.<br>
![Hierarchy-Table-Output](/img/content/Hierarchy-Table-Output-Result.png){:class="img-responsive"}

### Natural Format

- **LevelN:**
Technical name of the node of the nth level. The number of levels is set in the [extraction setting](./bwhier-settings) **Level Count**. The level count starts at level 0. 
- **LevelTextN:**
The description text of the nth level's node. This column is only created when the [extraction setting](./bwhier-settings) **Description texts for levels** is active.
- **InfoObjectName:**
Name of InfoObject behind the node of the highest level.
- **NodeName:**
Technical name of the node of the highest level.
- **NodeText:** 
The description text of the node of the highest level. This column is only created when the [extraction setting](./bwhier-settings) **Fetch description texts** is active.
- **DateFrom:** 
Date from which the node is valid
- **DateTo:**
Date the node is valid to.
- **Link:** 
If the value in *Link* is greater than 0, the node is a link node. The ID of the original node that was linked from is displayed. 
- **Row:**
Number of the row. The row number can be used as an ID or sort criterion when processing the extracted data.<br>
![Hierarchy-Table-Output](/img/content/Hierarchy-description-texts.png){:class="img-responsive"}

### ParentChildWithNodeNames Format

- **NodeID:**
Unique node key.
- **NodeName:**
The node’s (technical) name.
- **NodeText:** 
The description text of the node. This column is only created when the [extraction setting](./bwhier-settings) **Fetch description texts** is active.
- **ParentNodeID:**
Key for parent node.
- **ParentNodeName:**
Name of the parent node.
- **InfoObjectName:**
Name of InfoObject behind the corresponding node.
- **DateFrom:** 
Date from which the node is valid
- **DateTo:**
Date the node is valid to.
- **Link:** 
If the value in *Link* is greater than 0, the node is a link node. The ID of the original node that was linked from is displayed. 
- **Row:**
Number of the row. The row number can be used as an ID or sort criterion when processing the extracted data.<br>
![Hierarchy-Table-Output](/img/content/extractors.bwhier/Hierarchy-ParentChildWithNodes.png){:class="img-responsive"}

