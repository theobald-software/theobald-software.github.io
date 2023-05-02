---
ref: xtract-for-alteryx-08
layout: page
title: Xtract Hierarchy
description: BW Hierarchy
product: xtract-for-alteryx
parent: xtract-for-alteryx
childidentifier: bwhierarchy
permalink: /:collection/:path
weight: 8
lang: en_GB
---
The following section describes the functions of the BW Hierarchy component of Xtract for Alteryx.<br>
The component BW Hierarchy enables the extraction of hierarchies from an SAP BW system.

{: .box-warning}
**Warning!** **Missing Authorization**
To use the BW Hierarchy component, access to the designated authority objects (RFC) in SAP must be available.
For more information, see the knowledge base article on [SAP User Rights: BW Hierarchies](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#bw-hierarchies).

{% include _content/en/hierarchies-recommendation.md %}


{: .box-tip }
**Tip:** To get information on the basics of Xtract for Alteryx, refer to [Getting Started with Xtract for Alteryx](./getting-started).


### How to use the Xtract Hierarchy component
{% include _content/en/alteryx-component-intro.md %}

### Functions overview
The window "Hierarchy Extractor" consists out of two subsections:
- Selected Hierarchy
- Preview

![Hierarchy Extractor](/img/content/xfa/xfa_hierarchy.png){:class="img-responsive"}

#### Selected Hierarchy
Within the subsection **Selected Extraction** you can [search for SAP BW hierarchies](./bwhierarchy/bwhier-define) using **[Search]** ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) icon).<br>
The default value for the field *Date To* is 99991231. 

#### Preview
The **Preview** subsection [displays the fields](./bwhierarchy/bwhier-define#to-preview-selected-hierarchy) of the selected SAP BW hierarchy, when clicking the **[Load Live Preview]** button.

#### Buttons
- **[Extraction Settings]** opens the [extraction specific settings](./bwhierarchy/hierarchies-extraction-settings) e.g., representation or level count. <br>
- **[Load Live Preview]** loads a preview of the hierarchy without executing an extraction.

More information on working with the Xtract Hierarchy component is provided in the following sections.

----

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}
