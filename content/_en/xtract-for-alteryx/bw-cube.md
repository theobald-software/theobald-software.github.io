---
ref: xtract-for-alteryx-06
layout: page
title: BW Cube
description: BW Cube
product: xtract-for-alteryx
parent: xtract-for-alteryx
childidentifier: bw-cube
permalink: /:collection/:path
weight: 6
lang: en_GB
progressstate: 5
---
The following section describes the functions of the BW Cube component of Xtract for Alteryx.<br>
The Xtract Cube component for Alteryx BW Cube data source can be used to extract data from SAP BW InfoProviders (e.g., Cubes) or Queries and process it further in Alteryx.

{: .box-tip }
**Tip:** To get information on the basics of Xtract for Alteryx, refer to [Getting Started with Xtract for Alteryx](./getting-started).

### How to use the BW Cube component
1. Drag & drop the "Xtract BW Cube" component to your Alteryx workflow.
2. Select an SAP connection, navigate to **Selected Extraction** and click **[Edit]**. The main window of the component opens.

The majority of the functions of the component can be accessed using the main window.

### Functions overview
The main window of the BW Cube component consists of two subsections and several buttons:

- Cube or Query
- Preview
![Cube Extractor](/img/content/xfa/xfa-cube-query-overview.png){:class="img-responsive"}

#### Cube or Query
Within the subsection **Cube or Query** you can search for a Query or a BW Cube / InfoProvider using **[Search]** (magnifying glas icon).
The *Key Figures*, *Dimensions* and *Properties* that can be selected for the output are displayed in this subsection. 


#### Preview
The **Preview** subsection displays the content of the selected Query or a BW Cube / InfoProvider when clicking the **[Load Live Preview]** button.

#### Buttons
- **[Extraction Settings]** opens the [extraction specific settings](./bw-cube/bw-cube-settings) e.g., Package Size, Row Limit or Automatic Slicing Dimension. <br>
- **[Load live preview]** loads a preview of a Query or a BW Cube / InfoProvider.
- **[Show MDX]** displays the MDX statement generated for the selection, which will be executed at run-time on the BW system. When the access to BW system is available, you can additionally use the transaction *MDXTEST* to run the MDX statement.
- **[Edit Variables]** allows defining [variables](./bw-cube/bw-cube-variables). 
- **[Edit Runtime Parameters]** allows defining [runtime parameters](./bw-cube/edit-runtime-parameters). 

More information on working with the Cube component is provided in the following sections.

---

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}