---
ref: xtract-for-alteryx-07
layout: page
title: Xtract Cube
description: Xtract Cube Component
product: xtract-for-alteryx
parent: xtract-for-alteryx
childidentifier: bw-cube
permalink: /:collection/:path
weight: 7
lang: en_GB
progressstate: 5
---

{: .box-warning}
**Warning: Deprecated documentation** <br>
You are using the old version of the online help for Xtract for Alteryx.<br>
Make sure to use the documentation within the new [Xtract for Alteryx](https://helpcenter.theobald-software.com/xtract-for-alteryx/documentation/introduction/).

The following section describes the functions of the Xtract Cube component in Xtract for Alteryx.<br>
The Xtract Cube component can be used to extract data from SAP BW (BEx) Queries and InfoProviders (e.g. InfoCubes). 
The Xtract Cube component supports two different extraction modes: MDX and BICS (beta).

{: .box-warning}
**Warning!** **Missing Authorization**
To use the BW Cube component, access to the designated authority objects (RFC) in SAP must be available.
For more information, refer to the knowledge base article [SAP User Rights: BW Query / BW Cube](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#bw-query--bw-cube).

{: .box-tip }
**Tip:** To get information on the basics of Xtract for Alteryx, refer to [Getting Started with Xtract for Alteryx](./getting-started).

### How to use the Xtract Cube component
{% include _content/en/alteryx-component-intro.md %}

### Functions overview
The main window of the Xtract Cube component consists of two subsections and several buttons:

- Cube or Query
- Preview
![Cube Extractor](/img/content/xfa/xfa-cube-query-overview.png){:class="img-responsive"}

#### Cube or Query
Within the subsection **Cube or Query** you can search for a BEx Query or an InfoProvider using ![magnifying-glass](/img/content/icons/magnifying-glass.png).
The *Key Figures*, *Dimensions* and *Properties* that can be selected for the output are displayed in this subsection. 


#### Preview
The **Preview** subsection displays real preview data of the selected BEx Query or InfoProvider when clicking the **[Load Live Preview]** button. 

{: .box-note }
**Note:** In MDX mode, the first 100 rows are fetched for preview. In BICS mode, the **complete** result set is fetched.

#### Buttons
- **[Extraction Settings]** opens the [extraction specific settings](./bw-cube/bw-cube-extraction-settings) e.g., **Package Size**, **Row Limit** or **Automatic Slicing Dimension**. <br>
- **[Load live preview]** loads real preview data of selected BEx Query or InfoProvider.
- **[Show MDX]** displays the MDX statement which will be executed at runtime on the BW system. Not available in BICS mode. For testing purposes, run the MDX statement in SAP transaction *MDXTEST*.
- **[Edit Variables]** allows defining [BEx Query variables](./bw-cube/variables). 
- **[Edit Runtime Parameters]** allows defining [runtime parameters](./bw-cube/edit-runtime-parameters). 

More information on working with the Xtract Cube component is provided in the following sections.

---

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}