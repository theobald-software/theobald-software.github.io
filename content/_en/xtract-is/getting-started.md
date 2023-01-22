---
ref: xtract-is-04
layout: page
title: Getting Started with Xtract IS
description: Getting Started with Xtract IS
product: xtract-is
parent: xtract-is
childidentifier: getting-started
progressstate: 5
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=getting-started
---


The following section gives a general introduction to working with Xtract IS using the Table component as an example. 
The information described in the following section is a prerequisite for all subsequent sections.

{: .box-note }
**Note:** An [SAP Connection](./sap-connection) is a requirement for using any of Xtract IS components.

### Creating an Extraction

1. Set up a **Data Flow Task** by dragging the dataflow component into the "Control Flow" canvas. Double-click the component to access the dataflow canvas.
2. Add an SAP Connection using the [*Connection Manager*](./sap-connection/the-connection-manager).
3. Drag & drop the **Xtract Table** component to the data flow task. 
![xis_table_overview](/img/content/xis/xis_table_overview.png){:class="img-responsive"}
4. Assign a *Connection Manager* by double-clicking the **Xtract Table** component. 
5. Double-click the **Xtract Table** component. The window “Extract Single and Joint SAP Tables or Views” opens. 

{: .box-note }
**Note:** To assign a specific *Connection Manager* instead of assigning one automatically, follow the instructions in [Assign a Connection Manager](./sap-connection/the-connection-manager#assigning-a-connection-manager-to-an-xtract-component).

{% include _content/en/tables/define-a-table-extraction.md  %}

*****
#### Related Links
- [BAPI](./bapi)
- [BW Cube](./bw-cube)
- [BW Hierarchy](./hierarchy)
- [ODP](./odp)
- [Table](./table) - further details on the Table component
