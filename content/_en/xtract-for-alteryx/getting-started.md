---
ref: xtract-for-alteryx-05
layout: page
title: Getting Started with Xtract for Alteryx
description: Getting Started with Table
product: xtract-for-alteryx
parent: xtract-for-alteryx
childidentifier: getting-started
permalink: /:collection/:path
weight: 5
lang: en_GB

---
The following section gives a general introduction to working with Xtract for Alteryx using the Xtract Table component as an example.
The information described in the following section is a prerequisite for all subsequent sections.

{: .box-note }
**Note:** An [SAP Connection](./sap-connection) is a requirement for using any of Xtract for Alteryx components.

### Creating an Extraction

1. Drag the **Xtract Table** (1) component to the canvas to create a new table extraction. The "Configuration" window opens.
![Create-New-Table-Extraction](/img/content/xfa/xfa_create_table_extraction_01.png){:class="img-responsive"}
2. Under subsection **Connection**, select an existing SAP connection (2) or create a new one (3). (See also [SAP Connection](./introduction/sap-connection)).
3. Under subsection **Selected Extraction** click **[Edit]**  to configure a new table extraction.
![Create-New-Table-Extraction2](/img/content/xfa_create_table_extraction_02.png){:class="img-responsive"}
4. The main window of the component opens. In this window you can define simple table extractions or join tables for extractions. In the following example, a single table is extracted.

{% include _content/en/tables/define-a-table-extraction.md  %}
![Table-Main](/img/content/xfa/xfa-table-preview.png){:class="img-responsive"}

*****
#### Related Links
- [BAPI](./bapi)
- [BW Cube](./bw-cube)
- [BW Hierarchy](./bwhierarchy)
- [ODP](./odp)
- [Table](./table) - further details on the Table component





