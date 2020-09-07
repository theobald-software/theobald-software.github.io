---
ref: xtract-for-alteryx-04
layout: page
title: Getting Started with Xtract for Alteryx
description: Getting Started with Table
product: xtract-for-alteryx
parent: xtract-for-alteryx
childidentifier: getting-started
permalink: /:collection/:path
weight: 4
lang: en_GB

---
The following section gives a general introduction to working with Xtract for Alteryx using the Table component as an example.
The information described in the following section is a prerequisite for all subsequent sections.

{: .box-note }
**Note:** An [SAP Connection](./introduction/sap-connection) is a requirement for using any of Xtract for Alteryx components.

### Creating an Extraction

1. Drag the **Xtract Table** (1) component to the canvas to create a new table extraction. The "Configuration" window opens.
![Create-New-Table-Extraction](/img/content/xfa/xfa_create_table_extraction_01.png){:class="img-responsive"}
2. Under subsection **Connection**, select an existing SAP connection (2) or create a new one (3). (See also [Configuring SAP Connection](./sap-connection)).
3. Under subsection **Selected Extraction** click **[Edit]**  to configure a new table extraction.
![Create-New-Table-Extraction2](/img/content/xfa_create_table_extraction_02.png){:class="img-responsive"}
4. The window “Table extractor” opens. In this window you can define simple table extractions or join tables for extractions. In the following example, a single table is extracted.

### Adding an SAP Table

{: .box-tip }
**Tip:** Wildcard such as * are supported. 

1. Within the window "Table Extractor" click **[Add]** to add a table.<br>
![Add-New-Table](/img/content/xfa/table_main-window_add.png){:class="img-responsive"} <br/>
The window "Table Lookup" opens. <br/>
![Look-Up-Table](/img/content/table/table_look-up.png){:class="img-responsive"} <br/>
2. In the field **Table name** (1) enter the name of the table to extract. <br>
3. Click **[Search]** (magnifying glass) (2).
Search results appear in the preview window.
4. Select the desired table (3) and click **[OK]** (4). <br>

The application now returns to the main window of the component. <br>

Columns of the table retrieved from SAP are displayed in the subsection **Fields**. <br>
![Table-Form](/img/content/xfa/table_fields_filter.png){:class="img-responsive"}<br>

### Filtering tables

You can select either all or only individual columns for extraction. 
All columns are automatically selected for table extraction. Deselect the ones you don't wish to extract.<br>
Click the header fields to sort the columns by name or description.<br>
To search for a certain column name or description, start typing the word in the filter boxes.<br>

![Table-Main](/img/content/table/fields_filter-search.png){:class="img-responsive"}

### Using live preview

1. Click **[Load live preview]** to load 100 records for preview.
2. Click **[OK]** to confirm and save the extraction in the repository, i.e. on the server.

![Table-Main](/img/content/xfa/xfa-table-preview.png){:class="img-responsive"}


*****
#### Related Links
- [Xtract BAPI](./bapi)
- [Xtract BW Cube](./bw-cube)
- [Xtract BW Hierarchy](./bwhierarchy)
- [Xract ODP](./odp)
- [Xtract Table](./table) - further details to Xtract Table component





