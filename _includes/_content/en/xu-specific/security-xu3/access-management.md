## Server Settings
Access Management will be activated once you check the checkbox *Restrict Designer access to the following users/groups*. <br>
Once activated, only the listed users or user groups will be able to log on.

![Server-Settings_](/img/content/Server-Settings_.png){:class="img-responsive"}

**Read, Modify, Create, Admin**<br>
A user group can have one of the following rights. These rights only concern actions (read, create, modify) that can be performed within the Xtract Universal designer. 

- Admin rights: Users of this group have all privileges. They can do anything that “Create”
users can do. Additionally, they can perform admin tasks, such as changing server settings, access server logs or manage users and connections (SAP sources and target destinations). Access limitations on extractions or sources will be ignored.

- Create new extractions: Members of this group can do anything that “Modify” users can do. Additionally they can create or clone extractions. Group members may not perform any admin tasks.

- Modify extractions: Members of this group can do anything that “Read” users can do.
Additionally, they can modify existing extractions, however they may not create or clone extractions.

- Read extractions: Group members may not edit extractions but may read their definition.



## Extraction Settings
Access restrictions can be performend on extraction level, as well. Access restrictions for extractions override restrictions made on server level.

![Server-Settings_](/img/content/XU_Extraction_Security.png){:class="img-responsive"}

## Source Settings
Access restrictions can be performend on source level, as well. Access restrictions for sources override restrictions made on server level.

![Server-Settings_](/img/content/XU_Extraction_Security2.png){:class="img-responsive"}


