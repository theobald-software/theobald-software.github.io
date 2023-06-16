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

**Enable column level encryption** (2)<br>
This option needs to be active when using “Column Encryption”, see [Encryption](#encryption).

#### Keywords
One or more keywords (Tags) can be set to an extraction. 
Keywords can be entered directly in the keyword field.
Within the Designer you can use these keywords to filter  extractions. 

### Primary Key Tab
Table extractions inherit the primary keys from SAP. Other objects such as SAP Query, BW Cube etc. require manual setting of the primary keys.  
![General-Settings-Primary-Key](/img/content/XU_table_Primary_key.png){:class="img-responsive"}

The example above shows the SAP object *MAKT* with its primary key inherited from SAP in the general settings of the Designer. In this example the primary key consists of *MANDT*, *MATNR* and *SPRAS*. The primary key is also taken over in the destination. 

{:.box-note}
**Note:** A defined primary key field in a table is a prerequisite for merging data. 

**Generate Surrogate Key Column:**<br>
If this option is active, an additional column THEO_SURR_KEY is added to the extracted data.
The THEO_SURR_KEY column contains surrogate keys that can be used as row IDs. 
The surrogate keys are hash values of type signed 8 byte integer, e.g., #-3008591679982390000.
They are generated from the selected primary key columns and the name of the SAP source that is assigned to the extraction.

<!---
{:.box-warning}
**Warning! Duplicates in large tables!**
When extracting more than 200 million rows, there is a chance of duplicates.
-->

### Encryption

The “Column Encryption” feature enables users to encrypt columns in the extracted data set before uploading them to the destination. 
By encrypting the columns you can ensure the safety of sensitive information. 
You can store data in its encrypted form or decrypt it right away.

The feature also supports random access, meaning that the data is decryptable at any starting point. 
Because random access has a significant overhead, it is not recommended to use column encryption for encrypting the whole data set.

Not all destinations support column encryption.
If the column encryption feature is available, you can select the columns to encrypt from a list of available columns. <br>
![Column-Encryption](/img/content/xu/xu-column-encryption-01.png){:class="img-responsive"}


### Security Tab
The security tab is described in the section [access management](../security/access-management).
![Extraction-Settings_](/img/content/XU_Extraction_Security3.png){:class="img-responsive"}
