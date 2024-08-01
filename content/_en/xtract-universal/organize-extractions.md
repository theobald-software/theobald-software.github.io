---
ref: xu-14
layout: page
title: Organize Extractions
description: How to group extractions
product: xtract-universal
parent: xtract-universal
permalink: /:collection/:path
weight: 14
lang: en_GB
progessstate: 5
---

{: .box-warning}
**Warning: Deprecated documentation** <br>
You are using the old version of the online help for Xtract Universal.<br>
Make sure to use the documentation within the new [Xtract Universal HelpCenter](https://helpcenter.theobald-software.com/xtract-universal/documentation/introduction/).

This page shows how to organize extractions in groups to improve maintenance.

### Group Extractions

Follow the steps below to create a new group and add extractions to the group.

1. In the tree view of the Designer, right-click the *extractions* folder. The context menu opens.<br>
![main-window-treeview](/img/content/xu/main-window-treeview.png)
2. Click **New subfolder**. The window "Create new subdirectory" opens.<br>
![create-new-subdirectory](/img/content/xu/create-new-subdirectory.png)
3. Enter a unique name for the extraction group and click **[OK]**. The new subfolder is displayed in the tree view.
Nested groups are supported.
4. To add extractions to the subfolder, open the list of extractions in the *extractions* folder (or any other subfolder) and select all relevant extractions.
Use **[CTRL]+[left mouse button]** to select multiple extractions.
5. Drag and drop extractions from the list of extractions into the new subfolder. <br>
![main-window-treeview-move-extractions](/img/content/xu/main-window-treeview-move-extractions.png)

The treeview in the main window of the Designer reflects the folder structure in the directory `C:\Program Files\XtractUniversal\config\extractions`.


{: .box-tip }
**Tip:** You can assign an SAP source system or a destination to all extractions within an extraction group by using **[Ctrl]+[A]** to select all extractions in the group. 
To assign an SAP source system, use the GUI button **[Source]**. To assign a destination, use the GUI button **[Destination]**.   

### Rename or Delete Groups

Right-click a group to open the context menu. 
Click **Rename** to rename the group.
Click **Delete** to delete the group and its content.

### Look Up Extractions

#### Search within an Extraction Group

Use the search bar above the extraction list to filter the displayed extractions. Wildcards (*) are not supported.

![main-window-filter-extractions.png](/img/content/xu/main-window-filter-extractions.png)

#### Search in all Extraction Groups

Follow the steps below to look up an extraction in all extraction groups:

1. In the main window of the Designer, click **[Search]**. The window "Search Extractions" opens.<br>
![main-window-search](/img/content/xu/main-window-search.png)
2. Enter the name of a group, extraction, extraction type, source system, destination or a keyword in the search bar.<br>
![search-extractions](/img/content/xu/search-extractions.png)
3. Click ![magnifying-glass](/img/content/icons/magnifying-glass.png). Search results are displayed.
4. Select an extraction from search results.
5. Click **[Go]**. 

The corresponding extraction group opens and the extraction is is selected.
