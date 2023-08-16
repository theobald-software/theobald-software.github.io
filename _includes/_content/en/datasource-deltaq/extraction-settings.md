To access the extraction settings, click {% if page.product == "xtract-is" %}**Settings** {% else %} **[Extraction Settings]**{% endif %} in the main window of the component.
The window “DeltaQ Settings” opens. The window has two tabs:
- [Base](#base)
- [Hierarchy](#hierarchy)

![XU_DeltaQ_Settings_thumb](/img/content/XU_DeltaQ_Settings_thumb.png){:class="img-responsive"}

## Base

### Transfer Mode

The raw data packages can be sent by SAP via *tRFC* call or *Data-IDoc*. *tRFC* is is the default setting. <br>
Switch to *IDoc* to monitor the raw data packages in the transaction WE02 (IDoc-Monitoring) for debugging reasons. 

### Misc.

**Automatic Synchronization**<br>
Activate this option to avoid manual changes in the transactional system when switching from test environment to production environment. <br>
Example: To use DeltaQ extractions in the production environment, the data source has to be enabled in the production environment. 
If **Automatic Synchronization** is active, the activation is done automatically and the timestamp of the data source is changed to be consistent with the settings of the SAP system. <br>

{: .box-note }
**Note** If the data source is modified in the SAP system, you have to manually activate the data source in the {% if page.product == "xtract-is" or page.product == "xtract-for-alteryx"%}Xtract{% endif %} DeltaQ component, even when **Automatic Synchronization** is active. 
Otherwise data load will fail. This behavior is by SAP design, see [SAP Documentation: Replication of DataSources](https://help.sap.com/viewer/ccc9cdbdc6cd4eceaf1e5485b1bf8f4b/7.4.19/en-US/4a12eaff76df1b42e10000000a42189c.html).

**Add Serialization Info to Output**<br>
Adds the columns *DataPackageID* and *RowCounter* to the output.<br>
Example: the following columns that are a composite key of the SAP records are included in the output:
- *RequestID*
- *DataPackageID* 
- *RowCounter*

{: .box-note }
**Note** Newer data have a higher PackageID. In the same package newer data have a higher RowCounter.

**Accept Gaps in DataPackage Id**<br>
At the end of each extraction the{% if page.product == "xtract-is" or page.product == "xtract-for-alteryx"%}Xtract{% endif %} DeltaQ component does a consistency check. 
The extraction is considered consistent if all data packages arrive correctly. 
Example: When using a filter function in the user exit of an OLTP source certain data packages are not sent. 
In this case the filter function is an inconsistency. <br>
If **Accept Gaps in DataPackage Id** is active, gaps in the package numbering are not considered inconsistencies. 
Only use this option when a filter function exists in the user exit.

**Timeout (sec)**<br>
Enter a time period (in seconds). The timeout applies when an extraction finishes on the SAP side, but not all tRFC calls have been received. 


## Hierarchy

The following settings only apply to Hierarchy extractions.

![Deltaq-Preferences-Hierarchy](/img/content/Deltaq-Preferences-Hierarchy.png){:class="img-responsive"}

### Extraction

**Language**<br>
Enter the language of the Hierarchy, e.g., 'E' or 'D'.

**Hierarchy Name**<br>
Enter the name of the Hierarchy.

**Hierarchy Class**<br>
Enter the class of the Hierarchy.

**Representation:** 
- *ParentChild*: The Hierarchy is represented in the SAP parent-child format. Example:<br>
![Hierarchies-Parent-Child](/img/content/extractors.bwhier/Hierarchy-Table-Output-Result.png){:class="img-responsive"}
- *Natural*: The SAP parent-child Hierarchy is transformed into a regular hierarchy. Example:<br>
![Hierarchy-Parent-Child-Natural](/img/content/extractors.bwhier/Hierarchy-Parent-Child-Natural.png){:class="img-responsive"}
- *ParentChildWithNodeNames*: The Hierarchy is represented in a reduced SAP parent-child format that only includes single nodes and their parent. Example:<br>
![Hierarchy-Parent-Child-With-Node-Names](/img/content/extractors.bwhier/Hierarchy-ParentChildWithNodes.png){:class="img-responsive"}

### Natural Representation

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


## Maintenance

1. Click **[Maintenance]** to open a list of init requests of the DataSource (SAP transaction RSA7).<br>
![Hierarchy-Description-Texts](/img/content/Hierarchy-description-texts.png){:class="img-responsive"}
2. Click ![bin](/img/content/icons/trashbin.png) to delete an init request. This is necessary when re-initializing a delta process.
