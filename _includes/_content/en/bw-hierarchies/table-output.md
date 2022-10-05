
### Output of a Hierarchy Structure

The output of Hierarchy components is always contains the same columns:

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
The descriptive text in the respective logon language (only when FetchText is set to *true* in the settings).<br>
![Hierarchy-Table-Output](/img/content/Hierarchy-Table-Output-Result.png){:class="img-responsive"}


### Output in SAP
The Hierarchy PM_COUNTRY has the following format in SAP:<br>
![Hierarchy-Table-SAP](/img/content/Hierarchy-Table-Output.png){:class="img-responsive"}

The corresponding flat data output in a browser looks as follows:<br>
![Hierarchy-Table-SAP](/img/content/Hierarchy-Table-Output-Browser.png){:class="img-responsive"}

