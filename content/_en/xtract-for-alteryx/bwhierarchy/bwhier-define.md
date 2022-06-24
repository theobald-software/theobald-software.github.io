---
ref: xfa-bwhier-define
layout: page
title: Defining a Hierarchy Extraction
description: Defining a BW Hierarchy Extraction
product: xtract-for-alteryx
parent: bwhierarchy
permalink: /:collection/:path
weight: 1
lang: en_GB
---
The following section shows how to use the Xtract Hierarchy component.

### Look up a BW Hierarchy

1. In the main window of the component navigate to subsection **Hierarchy Extraction** and click **[Search]** ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) icon)(1). 
![Define-Data-Source-Hierarchy](/img/content/xfa/Define-Data-Source-Hierarchy_1.png){:class="img-responsive"}
The window "Hierarchy Lookup" opens.
2. In the field **Hierarchy Name** (2) enter a name of an extractor using wildcards (*), if needed.
![Look-Up-Hierarchy](/img/content/extractors.bwhier/Look-Up-Hierarchy.png){:class="img-responsive"}
3. Click **[Search]** ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) icon) (3) and select the extractor of your choice from the displayed list (4).
4. Click **[OK]** (5) to confirm.
5. Click **[[Extraction Settings](./bwhier-settings)]** to define hierarchy settings.

### To Preview Selected Hierarchy
Click **[Load live preview]** (6) to display a live preview of the data without executing an extraction.<br>

![Define-Data-Source-Hierarchy](/img/content/extractors.bwhier/Define-Data-Source-Hierarchy.png){:class="img-responsive"}

The displayed hierarchy has a parent-child format, therefore the output columns are fixed. The output has always the following columns for every hierarchy:

![Hierarchy-Table-Output](/img/content/xfa/Hierarchy-Table-Output-Result.png){:class="img-responsive"}

| **NodeID** | **ParentNodeID**  | **FirstChildNodeID**  |  **NextNodeID** | **InfoObjectName**  | **NodeName** | **NodeText**  |
|---|---|---|---|---|---|---|---|
| Unique node key  | Key for parent node  | Key for first child node  | Key for next node in the same hierarchical level  | Name of InfoObject behind the corresponding node  | The node’s (technical) name | The descriptive text in the respective logon language (only when FetchText is set to true in the settings)|


The original hierarchy of PM_COUNTRY in SAP looks as follows:

![Hierarchy-Table-SAP](/img/content/extractors.bwhier/Hierarchy-Table-Output.png){:class="img-responsive"}


****
#### Related Links
- [BW Hierarchy Settings](./bwhier-settings)
- [SAP Online Help - Uploading Hierarchies from Flat Files](https://help.sap.com/saphelp_scm700_ehp02/helpdata/en/fa/e92637c2cbf357e10000009b38f936/frameset.htm)
