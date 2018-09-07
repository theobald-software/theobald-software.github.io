---
layout: page
title: Settings
description: Settings
product: xtract-is
parent: q-delta
permalink: /:collection/:path
weight: 9
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=deltaq-settings
---

Click the *Settings* link to open the Extraction Settings dialog.


![XIS_DeltaQ_Settings](/img/content/XIS_DeltaQ_Settings.jpg){:class="img-responsive"}


**Automatic String Conversion**<br>
All strings are converted into VarChar strings if the source system is non-Unicode, and all strings are converted into NVarChar if the source system is Unicode.

**Convert Strings to VarChar**<br>
All strings are converted to VarChar regardless if the source system is Unicode or not.

**Convert Strings to NVarChar**<br>
All strings are converted to NVarChar regardless if the source system is Unicode or not.

**Transfer Mode**<br>
The raw data packages can be send by SAP by a *tRFC* call or a Data-*IDoc*. Normally the tRFC is optimal for the default setting. If it is necessary, e.g. to examine the raw data packages for debugging reasons, you can change the transfer mode to IDoc. Then you can examine the data packages in the transaction WE02 (IDoc-Monitoring).

**Language**<br>
Defines the Language, if a Hierarchy is extracted.

**Hierarchy Name**<br>
Defines the Hierarchy Name.

**Hierarchy Class**<br>
Defines the Hierarchy Class.

**Update Mode Variable**<br>
Defines a variable for the update mode.
Set the value of the **Update Mode** to **V - SSIS Variable** and define the SSIS Variable for the Update Mode. The SSIS Variable can process the following values: F, C, D, S, I and R, as it is listed in the values of the Update Mode.

**Request ID**<br>
This field is optional. 
If a value (e.g. XtractDatasource) is set, it will be used as suffix in the SAP job name (e.g. BIXtractDatasource), otherwise a combination of process ID and timestamp will be used (e.g. REQU_pppppppp_yyyyMMddHHmmss), with process ID being the ID of the Windows process, the XtractDeltaQServerPool.exe is running under.

**Debug Details**<br>
Defines that the debug details will be logged.

**Check IDoc Request State**<br>
Defines that the request state of the sended IDocs will be validated.
Defines that the request state of the sent IDocs will be validated before the process continues. The IDoc number will be logged and the IDoc’s state is checked to be successful. 
This behavior might be helpful to detect errors. It’s a good idea to activate this option for debugging purpose. Especially when extractions fail constantly or don’t generate any jobs in SM37 without additional messages.
In the default state (no check), these checks are omitted which in general increases performance.

**Resend errors (deprecated)**<br>
in earlier versions of Xtract IS this setting was named *Don't resend tRFC errors automatically* and was activated by default. In the current version of Xtract IS this setting is deactivated by default as it shouldn't be required anymore.
This setting is used if the DeltaQ component should trigger a resend of stuck tRFC calls. This can happen, when the RFC server destination (e.g. XTRACT01) is not reachable or busy and can therefore not accept any tRFC calls. In this case, these calls are queued up in SAP transaction SM58, waiting to be resent.
This setting triggers a resend of those stuck tRFC data packages. 
However, instead of using this setting, we recommend having the SAP system trigger this resend. 

1. Go to transaction SM59 -> Edit -> tRFC Options and set number of connection attempts to 30 and the time span between 2 tries to 2 minutes. 
2. Go to DeltaQ settings and check the setting "Don't resend tRFC error automatically".

**Automatic Synchronisation**<br>
Depending on the system landscape it could happen that developments only be performed in a test system. If SSIS packages should be used later in the productive environment, the data source has to be enabled there. To avoid manual changes in the transactional system you can activate this option. In this case the activation will be automatically done and the timestamp of the data source will be changed that it will be consistent to the SAP system setting. 
If the DataSource was modified in the SAP system, e.g. a field’s name, data type or length was changed or a field was excluded from data transfer, you will still have to manually activate the DataSource in the DeltaQ component, even if Automatic Synchronisation is switched on. Otherwise data load will fail. This behaviour is by SAP design and is described in [SAP help]().

**Add Serialization Info to Output**<br>
Adds the two columns *DataPackageID* and *RowCounter* to the output.
In this Case the following 3 columns will be available in the output:
*RequestID*, *DataPackageID* and *RowCounter*, which are a composite key of the records delivered by SAP.  
Newer data have a higher PackageID. In the same package newer data have a higher RowCounter. 

**Automatic Data Type conversion**<br>
SAP data types (like Date) will be converted to an appropriate SQL data type. 

**Value for invalid date [YYYYMMDD]**<br>
In case of no convertable date values you have to enter a default date value into the textbox. Every invalid value will be converted into this value. SAP date '00000000' will be converted to NULL, irrespective of the entered date.

**Request Maintenance**<br>
Shows the content of SAP table ROOSPRMSC.
Allows the deletion of Init Requests (Requests in RSA7).
In general, only one entry which corresponds to one Init Request should be visible here.
Only if you've executed Init Requests with non-overlapping selection criteria, can you have more than one entry in this view.

**Generate Documentation**<br>
Generates an excel documentation about the datasource and its fields.
