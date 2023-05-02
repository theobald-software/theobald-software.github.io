### Server Settings
Access Management is activated when the checkbox **Restrict Designer access to the following users/groups** is marked. <br>
Once activated, only the listed users or user groups can log on.
![Server-Settings_](/img/content/Server-Settings.png){:class="img-responsive"}

#### Access Rights - Read, Modify, Create, Admin
A user group can have one of the following rights. These rights only concern actions (read, create, modify) that can be performed within the Designer. 

|Rights Type | Description| 
| :--------  | :-------|
|Read | Members of this group have read access, but cannot edit extractions.|
|Modify | Members of this group have the same access rights as users with "read" rights. Furthermore, users with "modify" rights can edit existing extractions, but cannot create or clone extractions.|
|Create |  Members of this group have identical access rights as the users with "modify" rights. In addition, users with "create" rights can create and clone extractions, but cannot perform any admin activities.|
| Admin| Members of this group have all rights, no restrictions and can perform admin tasks. Admin activities include changing server settings, accessing server logs, or editing users and connections (SAP and target environments). Access restrictions on extractions or the source system are ignored.|



### Extraction Settings - Extraction Level
Access control can also be performed at extraction level. <br>
Open the main window of the component and click **[General Settings] > Tab *Security**.
![Extraction-Settings_](/img/content/XU_Extraction_Security3.png){:class="img-responsive"}
The access control on extraction level overrides the settings at server level.

### Extraction Settings - Source Level
Access control can also be performed at the source level. This access control overrides the settings at server level.
![Server-Settings_](/img/content/xu/sap_source-accesscontrol.png){:class="img-responsive"}



