---
ref: destinations-102
layout: page
title: SharePoint
description: SharePoint
product: xtract-universal
parent: destinations
childidentifier: sharepoint
permalink: /:collection/:path
weight: 102
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=sharepoint_list
progressstate: 5
---

The following section describes the loading of the SAP extraction data into a Custom list on a SharePoint server.

## Requirements

To extract data into a SharePoint Custom list, you need either your own SharePoint server or access to a SharePoint Online system as part of Office365.

If your SharePoint server isn't configured for remote access already, go to **Central Administration -> Application Management -> Configure alternate access mappings** and add an appropriate mapping for the zone "Internet".

## Connection

{% include _content/en/xu-specific/destinations/general/connection.md %}	

### Destination Details

![XU_Sharepoint_Dest](/img/content/XU_Sharepoint_Dest.png){:class="img-responsive"}            


**SharePoint on-premises or SharePoint Online**<br>
Select the type of SharePoint environment you are going to export to.

**Site URL**<br>
Enter the URL of your SharePoint server here (optionally including sub-directories if you want to export into a specific site on the server).
Make sure you only enter the base path, omit page information a browser might show you in the address line like `_layouts/15/start.aspx#/` or similar.

**User**<br>
Enter your SharePoint user name.

**Password**<br>
Enter the password for your SharePoint user account.

**Test connection**<br>
Check the database connection. 

## Settings

### Opening destination settings
1. In the main window of the designer choose the extraction with the destination type SharePoint.
2. Click **[Destination]**. The window "Destination Settings" opens.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

The following settings can be defined for the destination:  

### Destination Settings

![SharePointExtractionSpecificSettings](/img/content/xu/SP_destination_settings.png){:class="img-responsive"}

{% include _content/en/xu-specific/destinations/general/file-name.md %}

{% include _content/en/xu-specific/destinations/general/column-name-style.md %}

### Mode

- **Drop, Create & Insert**: Creates a new list on the SharePoint system, deleting any previous list with the same name.
- **Create if not exists & Merge**: Merges data with an existing list or creates a new list, if none with the specified name is found.
- **Truncate & Insert**: Deletes all rows in the list and fills it with the new exported data. It differs from "Drop, Create & Insert" by not deleting the list or any associated information.
 - **Merge only**: Merges rows, without deleting rows or the list itself
 - **Max. threads** (expert option): Sets the number of threads for communication with the SharePoint server. 

{:.box-note}
**Note:** Increasing the thread number may increase the upload speed, depending on the server and network setup. Setting the value to *1* slows down the speed significantly, which may help with a heavy load of the SharePoint server or when connection problems occur.

{:.box-tip}
**Recommendation:** Keep the default value (2) for Max. threads.