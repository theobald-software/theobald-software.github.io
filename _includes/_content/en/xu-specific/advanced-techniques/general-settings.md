General Settings are independent of the extraction type.

### To Open General Settings
1. In the main window of the Designer, double-click an extraction.<br>
The main window of the component opens.<br>
Example:
![General-Settings](/img/content/General-Settings_designer.png){:class="img-responsive"}

2. Within the opened window, click **[General Settings]**.<br>
The window "General Settings" opens.



### Misc. Tab
The miscellaneous tab consists of two subsections:
- Options
- Keywords

![General-Settings](/img/content/General-Settings.png){:class="img-responsive"}


#### Options
**Cache results** (1)

{:.box-note}
**Note:** The *Cache results* option is only available in [pull destinations](../destinations#pull-and-push-destinations) (e.g., PBI, Qlik etc.).

Pull destinations often pull the data from SAP for several times. To decrease the SAP server load, you can select the **Cache results** option, this way the pull destination pulls the data from cache and not from the SAP.
This increases the performance and limits the impact on the SAP system. If this behavior is not desired (for example, because the data must be always 100% up to date), the cache option must be explicitly turned off.

**Preview Mode** (2)
If preview mode is activated, only a small portion of data is extracted from SAP or, if extraction is not possible, sample data is generated instead.


#### Keywords
One or more keywords (Tags) can be set to an extraction. 
Keywords can be entered directly in the keyword field (3).
Within the Designer you can use these keywords to filter  extractions. 

{:.box-tip}
**Tip:** to display filter options, navigate to **[Extractions] > [Filter]** or press **[CTRL]+[F]**.
 

### Primary Key Tab
Table extractions inherit the primary keys from SAP. Other objects such as SAP Query, BW Cube etc. require manual setting of the primary keys.  
![General-Settings-Primary-Key](/img/content/XU_table_Primary_key.png){:class="img-responsive"}

Depicted example demonstrates the SAP object *KNA1* and *KNVV* with their primary key inherited from SAP in the general settings of the Designer. In this example the primary key consists of *KUNNR*, *VKORG*, *VTWEG* and *SPART*. The demonstrated primary key is also taken over in the destination. 

{:.box-note}
**Note:** A defined primary key field in a table is a prerequisite for merging data. 

### Encryption

Coming soon.

![General-Settings-Encryption](/img/content/XU-General_Settings-Encryption.png){:class="img-responsive"}


### Security Tab
The security tab is described in the section [access management](../security/access-management).
