### Server Settings
Access Management is activated once you mark the checkbox **Restrict Designer access to the following users/groups**. <br>
After activation only the listed users or user groups are able to log on to Designer.

![Server-Settings_](/img/content/Server-Settings_.png){:class="img-responsive"}

#### Access Rights - Read, Modify, Create, Admin
A user or a user group can have one of the following rights. These rights only concern actions (read, create, modify) that can be performed within the Xtract Universal Designer. 

| Rights Type | Description | 
| :------ |:--- | 
| Read | Group members cannot edit extractions, but can read the definitions of the extractions. | 
| Modify | Group members can perform identical actions as the members with the “Read” type rights. Additionally, members with the “Modify” type rights can modify, but not create or clone extractions. | 
| Create | Group members can perform identical actions as the members with the “Modify” type rights. Additionally, members with the “Create” type rights can create or clone extractions, but not perform any admin tasks. |
| Admin | Group members with admin rights type have all privileges, no restrictions and can perform admin tasks. Admin tasks include changing server settings, access server logs or manage users and connections (SAP sources and target destinations). Access limitations on extractions or sources are ignored. | 


### Extraction Settings
Access can be additionally restricted on extraction level. Access restrictions for extractions override restrictions imposed on server level.

![Server-Settings_](/img/content/XU_Extraction_Security.png){:class="img-responsive"}

### Source Settings
Access can be additionally restricted on source level. Access restrictions for sources override restrictions imposed on server level.

![Server-Settings_](/img/content/XU_Extraction_Security2.png){:class="img-responsive"}


