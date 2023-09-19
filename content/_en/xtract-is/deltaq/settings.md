---
ref: xi-q-delta-09
layout: page
title: Settings
description: Settings
product: xtract-is
parent: deltaq
permalink: /:collection/:path
weight: 9
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=deltaq-settings
---
Click the the main window "Extract SAP DataSources and Extractors" on **[Settings]**.
The window **Xtract IS DeltaQPrefernces** open. The window consists of four main sections and buttons.

![XIS_DeltaQ_Settings](/img/content/XIS_DeltaQ_Settings.png){:class="img-responsive"}

### String Conversion

**Automatic String Conversion**<br>
All strings are converted into VarChar strings if the source system is non-Unicode, and all strings are converted into NVarChar if the source system is Unicode.

**Convert Strings to VarChar**<br>
All strings are converted to VarChar regardless if the source system is Unicode or not.

**Convert Strings to NVarChar**<br>
All strings are converted to NVarChar regardless if the source system is Unicode or not.

### Transfer Mode

The raw data packages can be send by SAP by a *tRFC* call or a Data-*IDoc*. Normally the tRFC is optimal for the default setting. 
If it is necessary to  e.g., examine the raw data packages for debugging reasons, you can change the transfer mode to IDoc. Then you can examine the data packages in the transaction WE02 (IDoc-Monitoring).

### Hierarchy Settings

**Language**<br>
Defines the Language, if a Hierarchy is extracted.

**Hierarchy Name**<br>
Defines the Hierarchy Name.

**Hierarchy Class**<br>
Defines the Hierarchy Class.

**Hierarchy Version**<br>
Defines the Hierarchy Version.

### Misc. 

**Update Mode Variable**<br>
Defines a variable for the update mode.
Set the value of the **Update Mode** to **V - SSIS Variable** and define the SSIS Variable for the Update Mode. The SSIS Variable can process the following values: F, C, D, S, I and R, as it is listed in the values of the Update Mode.

**Request ID**<br>
This field is optional. 
If a value (e.g., XtractDatasource) is set, it will be used as suffix in the SAP job name (e.g., BIXtractDatasource), otherwise a combination of process ID and timestamp will be used (e.g. REQU_pppppppp_yyyyMMddHHmmss), with process ID being the ID of the Windows process, the XtractDeltaQServerPool.exe is running under.

**Automatic Synchronisation**<br>
Depending on the system landscape, developments may only be performed in a test system. If SSIS packages should be used later in the production environment, the data source has to be enabled production environment. To avoid manual changes in the transactional system you can activate *Automatic Synchronisation*. In this case, the activation is automatically performed and the timestamp of the data source is changed, so it is consistent to the SAP system setting. 
If the DataSource was modified in the SAP system, e.g., a field’s name, data type or length was changed or a field was excluded from data transfer, you need to manually activate the DataSource in the DeltaQ component, even if Automatic Synchronisation is switched on. Otherwise data load will fail. This behaviour belongs to SAP design and is described in the [SAP help](https://help.sap.com/viewer/ccc9cdbdc6cd4eceaf1e5485b1bf8f4b/7.4.19/en-US/4a12eaff76df1b42e10000000a42189c.html).

**Add Serialization Info to Output**<br>
Adds the two columns *DataPackageID* and *RowCounter* to the output. In this case, the following 3 columns are be available in the output: *RequestID*, *DataPackageID* and *RowCounter*. These columns are a composite key of the records delivered by SAP.  
Newer data has a higher PackageID. In the same package newer data has a higher RowCounter. 

**Automatic Data Type conversion**<br>
SAP data types (e.g., Date) are converted to an appropriate SQL data type. 

**Value for invalid date [YYYYMMDD]**<br>
In case of no convertable date values you have to enter a default date value into the textbox. Every invalid value is converted into this value. SAP date '00000000' is converted to NULL, irrespective of the entered date.

**Replace date 00000000 with [YYYYMMDD]**<br>
SAP date '00000000' is converted to NULL or the entered date [YYYYMMDD]. 

**Replace invalid date  with[YYYYMMDD]**<br>
In case of no convertable date values you have to enter a default date value into the textbox. Every invalid value is converted into this value.<br>

### Request Maintenance
**[Request Maintenance]** shows the content of SAP table ROOSPRMSC.
Allows the deletion of Init Requests (Requests in RSA7).
In general, only one entry which corresponds to one Init Request should be visible here.
Only if you executed Init Requests with non-overlapping selection criteria, you can have more than one entry in this view.

### Generate Documentation
**[Generate Documentation]** generates an excel documentation about the data source and its fields.
