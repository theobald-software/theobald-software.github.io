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

### Opening destination settings
1. In the main window of the designer choose the extraction with the destination type SharePoint.
2. Click **[Destination]**. The window "Destination Settings" opens.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

The following settings can be defined for the destination:  

### Destination Settings

![SharePointExtractionSpecificSettings](/img/content/xu/SP_destination_settings.png){:class="img-responsive"}

{% include _content/de/xu-specific/destinations/general/file-name.md %}

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


