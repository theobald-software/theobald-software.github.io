---
ref: xtract-for-alteryx-07
layout: page
title: BW Hierarchy
description: BW Hierarchy
product: xtract-for-alteryx
parent: xtract-for-alteryx
childidentifier: bwhierarchy
permalink: /:collection/:path
weight: 7
lang: en_GB
---
### About BW Hierarchy
The component BW Hierarchy enables the extraction of hierarchies from an SAP BW system.


### To Use BW Hierarchy
Basic knowledge of Xtract for Alteryx is required to understand the following sections, see [Getting Started with Xtract for Alteryx](./getting-started#creating-an-extraction).

1. Drag & drop BW Hierarchy component to your Alteryx workflow.
2. Select an SAP connection, navigate to **Selected Extraction** and click **[Edit]**. The main window of the component “Hierarchy Extractor” opens.

The majority of the functions of the component can be accessed using the main window.

### Hierarchy Extractor - Functions Overview
The window "Hierarchy Extractor" consists out of two subsections:
- Hierarchy Extraction
- Preview

![Hierarchy Extractor](/img/content/xfa/xfa_hierarchy.png){:class="img-responsive"}

#### Hierarchy Extraction
Within the subsection **Hierarchy Extraction** you can [search for SAP BW hierarchies](./bwhierarchy/bwhier-define) using the **Hierarchy Lookup** (magnifying glass symbol).
![Hierarchy search](/img/content/xfa/xfa_hierarchy_search.png){:class="img-responsive"}

**Date To**<br>
The default value for the field *Date To* is 99991231. To change the value, click **[Run]** and override the value. 

#### Preview
The **Preview** subsection [displays the fields](./bwhierarchy/bwhier-define#to-preview-selected-hierarchy) of the selected SAP BW hierarchy, when clicking the **[Load Live Preview]** button.
![Hierarchy preview](/img/content/xfa/xfa_hierarchy_buttons.png){:class="img-responsive"}

#### Buttons
- **[Extraction Settings]** opens the [extraction specific settings](./bwhierarchy/bwhier-settings) e.g., representation or level count. <br>
- **[Load Live Preview]** loads a preview of the hierarchy without executing an extraction.


***
#### Related Links
- [SAP Online Help - Uploading Hierarchies from Flat Files](https://help.sap.com/saphelp_scm700_ehp02/helpdata/en/fa/e92637c2cbf357e10000009b38f936/frameset.htm)