---
ref: xtract-for-alteryx-06
layout: page
title: Xtract Cube
description: Xtract Cube Component
product: xtract-for-alteryx
parent: xtract-for-alteryx
childidentifier: bw-cube
permalink: /:collection/:path
weight: 6
lang: en_GB
progressstate: 5
---
The following section describes the functions of the Xtract Cube component in Xtract for Alteryx.<br>
The Xtract Cube component can be used to extract data from SAP BW (BEx) Queries and InfoProviders (e.g. InfoCubes). The Xtract Cube component supports two different extraction modes: MDX and BICS (beta).

{: .box-tip }
**Tip:** To get information on the basics of Xtract for Alteryx, refer to [Getting Started with Xtract for Alteryx](./getting-started).

### How to use the Xtract Cube component
1. Drag & drop the Xtract Cube component to your Alteryx workflow.
2. Select an SAP connection, navigate to **Selected Extraction** and click **[Edit]**. The main window of the component opens.


### Component overview
The main window of the Xtract Cube component consists of two subsections and several buttons:

- Cube or Query
- Preview
![Cube Extractor](/img/content/xfa/xfa-cube-query-overview.png){:class="img-responsive"}

#### Cube or Query
Within the subsection **Cube or Query** you can search for a BEx Query or an InfoProvider using **[Search]** (magnifying glass icon).
The *Key Figures*, *Dimensions* and *Properties* that can be selected for the output are displayed in this subsection. 


#### Preview
The **Preview** subsection displays real preview data of the selected BEx Query or InfoProvider when clicking the **[Load Live Preview]** button. 

{: .box-note }
**Note:** In MDX mode, the first 100 rows are fetched for preview. In BICS mode, the **complete** result set is fetched.

#### Buttons
- **[Extraction Settings]** opens the [extraction specific settings](./bw-cube/bw-cube-settings) e.g., Package Size, Row Limit or Automatic Slicing Dimension. <br>
- **[Load live preview]** loads real preview data of selected BEx Query or InfoProvider.
- **[Show MDX]** displays the MDX statement which will be executed at run-time on the BW system. Not available when BICS mode was selected.  For testing purposes, run the MDX statement in SAP transaction *MDXTEST*.
- **[Edit Variables]** allows defining [BEx Query variables](./bw-cube/bw-cube-variables). 
- **[Edit Runtime Parameters]** allows defining [runtime parameters](./bw-cube/edit-runtime-parameters). 

More information on working with the Xtract Cube component is provided in the following sections.

---

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}