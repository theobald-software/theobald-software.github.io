
### Hierarchies

If the selected source object is of type Hierarchy, the window "Select Hierarchy" opens.

1. Select a Hierarchy from the list of Hierarchies in the "Select Hierarchy" window. <br>
![Select-Hierarchy](/img/content/odp/odp-hierarchy-lookup.png){:class="img-responsive"}
2. Confirm your selection with **[OK]**. The name of the selected Hierarchy is displayed under *Selected Hierarchy* (1).
3. Select which segments to extract (2). 
![Select-Hierarchy](/img/content/odp/select-hierarchy.png){:class="img-responsive"}


#### Segment(s) to extract
Hierarchies are divided into segments by the API.
Choose which segments of the Hierarchy to extract (2).
The selected data is displayed in the *Fields* section.

| **Merges**      | All segments contain the field Node ID. <br> Using the Node ID *Merges* automatically combines all 3 segments. | 
| **Elements**      | The segment *Elements* contains information about the elements of the Hierarchy e.g., name, parent, child, etc.     | 
| **Texts** | The segment *Texts* contains the description texts of the *Elements*. <br> The language of the descriptions depends on the language settings of the SAP connection.     | 
| **Intervals** | The segment *Intervals* contains additional information if an element is an interval.      | 


{: .box-note }
**Note:** Hierarchies can be passed as runtime parameters at runtime.