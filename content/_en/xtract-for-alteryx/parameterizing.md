---
ref: xtract-for-alteryx-20
layout: page
title: Parameterizing Xtract Components
description: Parameterizing via Batch Macro and Control Parameters
product: xtract-for-alteryx
parent: xtract-for-alteryx
childidentifier: parameterizing
permalink: /:collection/:path
weight: 20
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=abap-reports
---

To pass parameters to Xtract components in Alteryx, you can use a batch macro that includes the Xtract component in combination with a control parameter tool. 
 
A macro contains a group of tools that can be used as a single tool in other workflows. 
Batch macros use control parameters as input to run the included tools, see [Alteryx: Batch Macros](http://downloads.alteryx.com/betawh_xnext/BatchMacro.htm) for more information.
By assigning control parameters to the Xtract runtime parameters, the batch macro runs the extraction for each set of parameters.

The following example shows how to parameterize the Xtract ODP component using control parameters in a batch macro.

### Create an Extraction

Create a **new workflow** and add an extraction with input parameters.<br>
This example uses an extraction of the Data Object *0MATERIAL_ATTR* with the Xtract ODP component. 
The goal of this example is to parameterize the selection filter of the column *MATNR*, so that the extraction only returns materials between the low threshold value *p_MATNR_low* and the high threshold value *p_MATNR_high*. 

1. Add an Xtract ODP extraction into the workflow.
2. Look up the Data Object *0MATERIAL_ATTR*.
3. Load a live preview of the Operational Data Provider.
4. Create 2 new runtime parameters of type *String* and name them *p_MATNR_low* and *p_MATNR_high*.
5. Assign the parameters as selection filters to the column *MATNR*, so that only materials with numbers between *p_MATNR_low* and *p_MATNR_high* are included in the result data.

For more detailed information on how to create an ODP extraction and create runtime parameters, see [Define an ODP Extraction](./odp/odp-define) and [Edit Parameters](./odp/odp-settings#edit-parameters).<br>
General information on how to create an extraction can be found in [Getting Started](./getting-started).

### Create a Batch Macro

A batch macro runs a worklow for each input parameter and creates an output after each run.<br>
The control parameters of a batch macro can be used to update the runtime parameters of the Xtract component.
Make sure to have the Xtract component to be prarameterized already set up in a new workflow, see [Create an Extraction](#create-an-extraction).

How to create a batch macro for parameterizing an Xtract component:

1. Navigate to the *Workflow Configuration* and select **Batch Macro** as the Workflow Type from drop down list.<br>
![BatchMacro](/img/content/xfa/batchmakro.png){:class="img-responsive"}
2. Save the workflow as a batch macro. Once the file is saved each tool in the workflow gets a lightning bolt anchor. Only *Interface* Tools can connect to these anchors.
3. Drag&Drop 2 **Control Parameter** tools from the *Interface* toolbox onto the canvas. Enter a text to be displayed for the parameters outside the batch macro e.g., name one *cp_MATNR_low* and the other *cp_MATNR_high* (1).
4. Connect the **Control Parameter** tools to the **Xtract ODP** component. This creates the *Action* tool **Update Value** (2).<br>
![Workflow-Sequence](/img/content/xfa/workflow-sequence.png){:class="img-responsive"}
5. Click on one of the **Update Value** tools to display the available parameters of the **Xtract ODP** component in the *Action Configuration* menu.
Check if *p_MATNR_low*  and *p_MATNR_high* are listed in the tree structure under Xtract ODP > RuntimeParameters. <br>
![Workflow-Sequence2](/img/content/xfa/workflow-sequence2.png){:class="img-responsive"}
6. To assign a control parameter to an Xtract runtime parameter, select the Xtract runtime parameter in the tree structure (3). 
Assign the control parameter *cp_MAKT_low* to the Xtract runtime parameter *p_MATNR_low* and *cp_MAKT_high* to the Xtract runtime parameter *p_MATNR_high*.
7. Drag&Drop the **Macro Output** tool from the *Interface* toolbox onto the canvas to create an output for the batch macro (4). 
8. Connect the **Xtract ODP** component to the **Macro Output** and save the file.

{: .box-note}
**Note:** To update runtime parameters using formulas, select *Update Value with Formula* from the drop-down list **Select an action type** in the *Action Configuration* menu.
You can enter a formular directly into the **Formula** field at the buttom of the menu or click **[...]** to open a formula editor.

### Use the Batch Macro in a Workflow

The batch macro containing the Xtract component can be imported into a **new workflow** with the control parameters as input.<br>
This example uses the **Text Input** tool to define the parameters for the extraction.

1. Drag&Drop the **Text Input** tool from the *In/Out* toolbox onto the canvas.
2. Enter a valid input for the parameters in configuration dialog of the **Text Input** tool. Add a new column to the **Text Input** for every parameter (1). Example: 000000000000000023 as input for *p_MATNR_low* and 000000000000000100 as input for *p_MATNR_high*. <br>
![Input-Text](/img/content/xfa/input-text.png){:class="img-responsive"}
3. To import the batch macro right-click the canvas and navigate to **Insert > Macro**. Select or browse the macro that contains the Xtract component.<br>
4. Connect the **Text Input** tool to the batch macro.
5. Select the batch macro and use the drop-down lists **Choose field** to assign the values from the **Text Input** columns to the control parameters of the batch macro.<br>
![Import-Macro](/img/content/xfa/importmacro.png){:class="img-responsive"}
6. Drag&Drop the **Browse** tool from the *In/Out* toolbox onto the canvas and run the workflow to check the results.<br>

### How to use Control Parameters for a Where-Clause

When using the Xtract Table Component, filtering is done via the where-clause of the component.

****
#### Related Links
- [Alteryx: Batch Macros](http://downloads.alteryx.com/betawh_xnext/BatchMacro.htm)
- [Alteryx: Action Tool](http://downloads.alteryx.com/betawh_xnext/Action.htm)