---
ref: xtract-for-alteryx-20
layout: page
title: Parameterizing
description: Parameterizing via Batch Macro and Control Parameters
product: xtract-for-alteryx
parent: xtract-for-alteryx
childidentifier: parameterizing
permalink: /:collection/:path
weight: 20
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=abap-reports
---

About/Introduction

### Create an Extraction

Create an extraction with input parameters.<br>
This example uses an ODP extraction of the Data Object *0MATERIAL_ATTR*.

1. Create a new Xtract ODP extraction.
2. Look up the Oata Object *0MATERIAL_ATTR*.
3. Load a live preview of the Operational Data Provider.
4. Create a new runtime parameter of type *String* and name *p_MATNR*.
5. Assign the parameter as a selection filter to the column *MATNR*, so that only material numbers equal to the parameter value are included in the result data.

For more detailed information on how to creat an ODP extraction see [Define an ODP Extraction](./odp/odp-define).<br>
General information on how to create extractions can be found in [Getting Started](./getting-started).

### Create a Batch Macro

Kurze Erklärung was Batch Macro ist...
Batch Makro erstellen und einen Workflow mit Control Parametern.
For each Control Parameter the Macro will reconfigure and run from beginning to end.

1. Navigate to the *Workflow Configuration* and select **Batch Macro** as the Workflow Type from drop down list.<br>
![BatchMacro](/img/content/xfa/batchmakro.png){:class="img-responsive"}
2. Save the project as a Batch Macro. Each tool in the workflow gets a lightning bolt anchor. Only *Interface* Tools can connect to these anchors.
3. Drag&Drop the **Control Parameter** component from the *Interface* toolbox onto the canvas. Enter the text or question to be displayed during runtime.
4. Connect the **Control Parameter** component to the **Xtract ODP** component. This creates the *Action* **Update Value**.
5. When selecting **Update Value** the available parameters of the **Xtract ODP** component are displayed in a tree structure under *Value or Attribute to Update* in the *Action Configuration* menu.
Check if *p_MATNR* is listed in Xtract ODP > RuntimeParameters > *p_MATNR*.
![Workflow-Sequence](/img/content/xfa/workflow-sequence.png){:class="img-responsive"}
6. Drag&Drop the **Macro Output** component from the *Interface* toolbox onto the canvas to create an output for the Macro. 
7. Connect the **Xtract ODP** component to the **Macro Output**.

{: .box-note}
**Note:** To update runtime parameters using formulas, select *Update Value with Formula* from the drop-down list **Select an action type** in the *Action Configuration* menu.
You can enter a formular directly into the **Formula** field at the buttom of the menu or click **[...]** to open a formula editor.

### Use the Batch Macro in a Workflow

****
#### Related Links
- [Alteryx: Batch Macros](http://downloads.alteryx.com/betawh_xnext/BatchMacro.htm)
- [Alteryx: Action Tool](http://downloads.alteryx.com/betawh_xnext/Action.htm)