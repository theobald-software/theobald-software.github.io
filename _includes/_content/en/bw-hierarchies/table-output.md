
### Output of a Hierarchy Structure

Compared to other source components, the output of hierarchy components is fixed. It always contains the same columns.
![Hierarchy-Table-Output](/img/content/Hierarchy-Table-Output-Result.png){:class="img-responsive"}

**NodeID**<br>
Unique node key.

**ParentNodeID**<br>
Key for parent node.

**FirstChildNodeID**<br>
Key for first child node.

**NextNodeID**<br>
Key for next node in the same hierarchical level.

**InfoObjectName**<br>
Name of InfoObject behind the corresponding node.

**NodeName**<br>
The node’s (technical) name.

**NodeText** <br>
The descriptive text in the respective logon language (only when FetchText is set to *true* in the settings).

### Output in SAP
The PM_COUNTRY hierarchy from the example, looks in SAP as follows:

![Hierarchy-Table-SAP](/img/content/Hierarchy-Table-Output.png){:class="img-responsive"}

The corresponding flat data output in a browser looks as follows:
![Hierarchy-Table-SAP](/img/content/Hierarchy-Table-Output-Browser.png){:class="img-responsive"}

