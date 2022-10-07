
### Hierarchy Structure in SAP
The original Hierarchy PM_COUNTRY has the following format in SAP:<br>
![Hierarchy-Table-SAP](/img/content/Hierarchy-Table-Output.png){:class="img-responsive"}

### Parent-Child Format

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
The description text of the node. This column is only created when the extraction setting **Fetch description texts** is active.<br>
![Hierarchy-Table-Output](/img/content/Hierarchy-Table-Output-Result.png){:class="img-responsive"}

### Natural Format

- **LevelN:**
Technical name of the node of the nth level. If a level ... The level count starts with level 0. 
- **LevelTextN:**
The description text of the nth level's node. This column is only created when the extraction setting **Description texts for levels** is active.
- **InfoObjectName:**
Name of InfoObject behind the node of the highest available level.
- **NodeName:**
The node’s (technical) name.
- **NodeText:** 
The description text of the current level's node. This column is only created when the extraction setting **Fetch description texts** is active.<br>
![Hierarchy-Table-Output](/img/content/Hierarchy-description-texts.png){:class="img-responsive"}
