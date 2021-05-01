### Select Data Source
As shown in [Defining an extractor](./extraction-define), select in the editor "Look Up OLTP Source" by using the **Search** (magnifying glass symbol) an **OLTP Source Name**.

Example: Data source *0COSTCENTER_0101_HIER*.
![DeltaQ-Hierarchy-001](/img/content/DeltaQ-Hierarchy-001.png){:class="img-responsive"}

In the editor "Look UP Hierarchy Details" select a **Hierarchy Name**.

Example: Hierarchy Name *0001C2000*
![DeltaQ-Hierarchy-002](/img/content/DeltaQ-Hierarchy-002.png){:class="img-responsive"}

In main window "Extract SAP DataSources and Extractors" displays the structure that is the same in every hierarchy. 

Click on **[Extraction Settings]** to set the language of the hierarchy.
![DeltaQ-Hierarchy-003](/img/content/Deltaq-Hierarchy-Selected.png){:class="img-responsive"}

### Preview Extraction
Enable the data viewer for the data flow and execute the DeltaQ extraction.
![DeltaQ-Hierarchy-004](/img/content/xis/data_view_deltaQ_xtract_is.png){:class="img-responsive"}

**NodeID** is the sequential number of a node in the hierarchy.
**NodeName** is the actual value. The hierarchy can be reconstructed with the **ParentID** and **ChildID**.
**Short/Medium/Long Text** can be found in the backend area.

{: .box-tip }
**Tip:** Unlike attributes and transactions, hierarchies do not have to be activated.








