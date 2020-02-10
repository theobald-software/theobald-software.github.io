---
ref: xu-sharepoint-03
layout: page
title: Settings
description: Settings
product: xtract-universal
parent: sharepoint
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=settings1
---
The following section gives an overview over the settings that can be changed for the SharePoint destination.
The settings can be changed in the window "Destination Settings". 

![SharePointExtractionSpecificSettings](/img/content/xu/SP_destination_settings.png){:class="img-responsive"}

### Opening destination settings
1. In the main window of the designer choose the extraction with the destination type SharePoint.
2. Click **[Destination]**. The window "Destination Settings" opens.

### Subsections of the window "Destination Settings"

#### SharePoint List Name

- **Same as name of SAP object**: Gives the SharePoint list name, which is identical to the technical SAP object name.
- **Same as name of extraction**: Gives the SharePoint list name, which is identical to the extraction name.
- **Custom**: The SharePoint list name can be chosen freely.  

#### Mode

- **Drop, Create & Insert**: Creates a new list on the SharePoint system, deleting any previous list with the same name.
- **Create if not exists & Merge**: Merges data with an existing list or creates a new list, if none with the specified name is found.
- **Truncate & Insert**: Deletes all rows in the list and fills it with the new exported data. It differs from "Drop, Create & Insert" by not deleting the list or any associated information.
 - **Merge only**: Merges rows, without deleting rows or the list itself
 - **Max. threads** (expert option): Sets the number of threads for communication with the SharePoint server. 

{:.box-note}
**Note:** Increasing the thread number may increase the upload speed, depending on the server and network setup. Setting the value to *1* slows down the speed significantly, which may help with a heavy load of the SharePoint server or when connection problems occur.

{:.box-tip}
**Recommendation:** Keep the default value (2) for Max. threads.

#### Column name style
{% include _content/en/xu-specific/xu-destinations/general/column-name-style.md %}
