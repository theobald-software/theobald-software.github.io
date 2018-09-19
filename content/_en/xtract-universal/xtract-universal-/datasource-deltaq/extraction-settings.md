---
layout: page
title: Extraction Settings
description: Extraction Settings
product: xtract-universal
parent: datasource-deltaq
permalink: /:collection/:path
weight: 8
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=deltaq-extraction-settings
---

Click the *Extraction Settings* link to open the Extraction Settings dialog.

![XU_DeltaQ_Settings_thumb](/img/content/XU_DeltaQ_Settings_thumb.jpg){:class="img-responsive"}

**Transfer Mode**<br>
The raw data packages can be send by SAP by a *tRFC* call or a *Data-IDoc*. Normally the tRFC is optimal for the default setting. If it is necessary, e.g. to examine the raw data packages for debugging reasons, you can change the transfer mode to IDoc. Then you can examine the data packages in the transaction WE02 (IDoc-Monitoring).

**Check IDoc Request State**<br>
Defines that the request state of the sent IDocs will be validated before the process continues. The IDoc number will be logged and the IDoc’s state is checked to be successful.<br> 
This behavior might be helpful to detect errors. It’s a good idea to activate this option for debugging purpose. Especially when extractions fail constantly or don’t generate any jobs in SM37 without additional messages.<br>
In the default state (no check), these checks are omitted which in general increases performance.

**Don't resend tRFC errors automatically / Resend errors (deprecated)**<br>
These options are no longer available in the current version of the DeltaQ. Please set the resend in SAP.<br>
Go to transaction SM59 -> Edit -> tRFC Options and set number of connection attempts to 30 and the time span between 2 tries to 2 minutes. 

**Automatic Synchronisation**<br>
Depending on the system landscape it could happen that developments only be performed in a test system. If SSIS packages should be used later in the productive environment, the data source has to be enabled there. To avoid manual changes in the transactional system you can activate this option. In this case the activation will be automatically done and the timestamp of the data source will be changed that it will be consistent to the SAP system setting. <br>
If the DataSource was modified in the SAP system, e.g. a field’s name, data type or length was changed or a field was excluded from data transfer, you will still have to manually activate the DataSource in the DeltaQ component, even if Automatic Synchronisation is switched on. Otherwise data load will fail. This behaviour is by SAP design and is described in [SAP help]().

**Add Serialization Info to Output**<br>
Adds the two columns *DataPackageID* and *RowCounter* to the output.<br>
In this Case the following 3 columns will be available in the output:<br>
*RequestID, DataPackageID* and *RowCounter*, which are a composite key of the records delivered by SAP.  
Newer data have a higher PackageID. In the same package newer data have a higher RowCounter.

**Automatic Data Type conversion**<br>
SAP data types (e.g. date YYMMDDDD) will be converted to an appropriate (e.g. date) data type. 

**Accept Gaps in DataPackage Id**<br>
The Delta Q component makes at the end of each extraction a consistency check. Only when all packets have arrived correctly, the extraction is considered consistent. In the case that the customer has built a filter function in the user exit of an OLTP source that causes certain data packets to not be sent, the consistency check must be mitigated. Otherwise the customer filter function would be seen as inconsistency. If this option is activated, gaps in the packet numbering will not be counted by the DeltaQ as inconsistency but as intentionally withheld information. The option should only be used if a corresponding filter function exists in the user exit.

**Timeout**<br>
Defines the time period within the Xtract Universal server should wait for a "Notify" from the SAP system (in seconds).

**Request Maintenance**<br>
To show and delete the Init Requests (Requests in RSA7).

- **Delete Request**<br>
    delete the initialisation requests (requests in RSA7).

- **Allow BW requests deletion**<br>
  	allow the deletion of the initialisation requests of the export datasources in BW. 


**Hierarchy Settings**

For a Hierarchy DataSource Extraction you can use the following hierarchy settings on the Hierarchy tab.

![Deltaq-Preferences-Hierarchy](/img/content/Deltaq-Preferences-Hierarchy.jpg){:class="img-responsive"}

**Language**<br>
Defines the Language, if a Hierarchy is extracted.

**Hierarchy Name**<br>
Defines the Hierarchy Name.

**Hierarchy Class**<br>
Defines the Hierarchy Class.

**Representation**

- **ParentChild**: The hierarchy has the SAP parent-child format.

![Deltaq-Hierarchies-Parent-Child](/img/content/Deltaq-Hierarchies-Parent-Child.png){:class="img-responsive"}

- **Natural**: The parent child hierarchy will be transformed in a regular hierarchy.

**Level Count**

Defines the maximum number of levels if the representation natural is selected. In the following screenshot you see the hierarchie shown in the previous screenshot with five levels in the representation natural.

![Deltaq-Hierarchies-Parent-Child-Natural](/img/content/Deltaq-Hierarchies-Parent-Child-Natural.png){:class="img-responsive"}

**Fill empty levels** 

If the representation natural is selected the bottom element of the hierarchy will be copied until the last level. In the following screenshot you will see the hierarchy from above with the option Repeat Leaves activated.

![Deltaq-Hierarchies-Parent-Child-Repeat](/img/content/Deltaq-Hierarchies-Parent-Child-Repeat.png){:class="img-responsive"}

**Description texts for levels**<br>
Means, that the output has a field LevelTextN for each field LevelN, that contains the text based on the system language settings.

**Leaves only**<br>
Delivers only the leaves as data records. 