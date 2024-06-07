To access the extraction settings, click **Extraction Settings** in the main window of the component.
The window “DeltaQ Settings” opens. The window contains two tabs:

{% if page.product == "xtract-is" %}
- [Base](#base)
- [Misc](#misc) 
- [Hierarchy](#hierarchy)
{% else %}
- [Base](#base)
- [Hierarchy](#hierarchy)
{% endif %}

{% if page.product == "xtract-is" %}
![XU_DeltaQ_Settings_thumb](/img/content/xis/DeltaQ-Settings.png){:class="img-responsive"}
{% else %}
![XU_DeltaQ_Settings_thumb](/img/content/XU_DeltaQ_Settings_thumb.png){:class="img-responsive"}
{% endif %}

## Base

### Transfer Mode

The raw data packages can be sent by SAP via *tRFC* call or *Data-IDoc*. *tRFC* is is the default setting. <br>
Switch to *IDoc* to monitor the raw data packages in the transaction WE02 (IDoc-Monitoring) for debugging reasons. 

{% if page.product == "xtract-is" %}

### Convert Dates

**Replace year 0 with**<br>
Converts the SAP date 00000000 to the entered value. NULL is supported as a value.

**Replace year 9999 with**<br>
Converts the SAP date 9999XXXX to the entered value. NULL is supported as a value.

**Replace invalid year with**<br>
In case of no convertable date values you have to enter a default date value into the textbox. Every invalid value is converted into this value.

## Misc.
![XU_DeltaQ_Settings_thumb](/img/content/xis/DeltaQ-Settings2.png){:class="img-responsive"}

**Update Mode Variable**<br>
Defines a variable for the update mode. 
Enter the name of an SSIS variable in the format `@variable_name` and set the component's custom property *UseLegacyVarUpdate* to *true* to overwrite the Update Mode. 
The SSIS variable can process the following values: F, C, D, S, I and R, as it is listed in [Update Mode](./update-mode).

**Request ID**<br>
This field is optional. If a value (e.g., XtractDatasource) is set, it will be used as suffix in the SAP job name (e.g., BIXtractDatasource), otherwise a combination of process ID and timestamp will be used (e.g. REQU_pppppppp_yyyyMMddHHmmss), with process ID being the ID of the Windows process, the XtractDeltaQServerPool.exe is running under.

{% else %}
### Misc.
{% endif %}

**Automatic Synchronization**<br>
Option to prevent manual changes in the transactional system when switching from test environment to production environment. <br>
Example: To use DeltaQ extractions in the production environment, the data source has to be enabled in the production environment. 
If **Automatic Synchronization** is active, the activation is performed automatically and the timestamp of the data source is changed to be consistent with the settings of the SAP system. <br>

{: .box-note }
**Note** If the data source is modified in the SAP system, manually activate the data source in the {% if page.product == "xtract-is" or page.product == "xtract-for-alteryx"%}Xtract{% endif %} DeltaQ component, even when **Automatic Synchronization** is active. 
Otherwise data load will fail. This behavior belongs to the SAP design, see [SAP Documentation: Replication of DataSources](https://help.sap.com/viewer/ccc9cdbdc6cd4eceaf1e5485b1bf8f4b/7.4.19/en-US/4a12eaff76df1b42e10000000a42189c.html).

**Add Serialization Info to Output**<br>
Adds the columns *DataPackageID* and *RowCounter* to the output.<br>
Example: the following columns that are a composite key of the SAP records are included in the output:
- *RequestID*
- *DataPackageID* 
- *RowCounter*

{: .box-note }
**Note** Newer data has a higher PackageID. In the same package newer data has a higher RowCounter.

{% if page.product != "xtract-is" %}

**Accept Gaps in DataPackage Id**<br>
At the end of each extraction the DeltaQ component performs a consistency check. 
The extraction is considered consistent if all data packages arrive correctly. 
Example: When using a filter function in the user exit of an OLTP source, certain data packages are not sent. 
In this case the filter function is an inconsistency. <br>
If **Accept Gaps in DataPackage Id** is active, gaps in the package numbering are not considered inconsistencies. 
Only use this option when a filter function exists in the user exit.

**Timeout (sec)**<br>
Enter a time period (in seconds). The timeout applies when an extraction finishes on the SAP side, but not all tRFC calls have been received. 

{% endif %}

## Hierarchy

The following settings only apply to Hierarchy extractions.

{% if page.product == "xtract-is" %}
![XU_DeltaQ_Settings_thumb](/img/content/xis/DeltaQ-Settings3.png){:class="img-responsive"}
{% else %}
![Deltaq-Preferences-Hierarchy](/img/content/Deltaq-Preferences-Hierarchy.png){:class="img-responsive"}
### Extraction
{% endif %}

**Language**<br>
Enter the language of the Hierarchy, e.g., 'E' or 'D'.

**Hierarchy Name**<br>
Enter the name of the Hierarchy.

**Hierarchy Class**<br>
Enter the class of the Hierarchy.

<!---
representation in copied from the Hierarchy component
-->

{% if page.product != "xtract-is" %}

**Representation:** 
- *ParentChild*: The Hierarchy is represented in the SAP parent-child format. Example:<br>
![Hierarchies-Parent-Child](/img/content/extractors.bwhier/Hierarchy-Table-Output-Result.png){:class="img-responsive"}
- *Natural*: The SAP parent-child Hierarchy is transformed into a regular hierarchy. Example:<br>
![Hierarchy-Parent-Child-Natural](/img/content/extractors.bwhier/Hierarchy-Parent-Child-Natural.png){:class="img-responsive"}
- *ParentChildWithNodeNames*: The Hierarchy is represented in a reduced SAP parent-child format that only includes single nodes and their parent. Example:<br>
![Hierarchy-Parent-Child-With-Node-Names](/img/content/extractors.bwhier/Hierarchy-ParentChildWithNodes.png){:class="img-responsive"}

### Natural Representation

<!---
The following section in copied from the Hierarchy component
-->


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

{% endif %}

## Maintenance

Click **[Maintenance]** to open a list of Init requests of the DataSource (SAP transaction RSA7).

![Hierarchy-Description-Texts](/img/content/DeltaQ_Request_Maintenance.png){:class="img-responsive"}

Click ![bin](/img/content/icons/trashbin.png) to delete an Init request. This is necessary when re-initializing a delta process.
