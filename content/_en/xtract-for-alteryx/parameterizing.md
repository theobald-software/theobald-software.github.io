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

To pass parameters to Xtract components in Alteryx, you can use a batch macro that includes the Xtract component in combination with a control parameter tool. 
 
A batch macro contains a group of tools that can be imported as a single tool into other workflows. 
Control parameters are used as input to run multiple iterations of the batch macro.

The following example shows how to parameterize the Xtract ODP component using a batch macro with control parameters.

### Create an Extraction
The goal of this example is to parameterize a selection filter for the Data Object *0MATERIAL_ATTR*, so that only materials with a material number between the low threshold value *p_MATNR_low* and the high threshold value *p_MATNR_high* are extracted. 

1. Open a **new workflow** and create an Xtract ODP extraction. 
2. Look up the Data Object *0MATERIAL_ATTR*.
3. Create 2 new runtime parameters of type *String* and name them *p_MATNR_low* and *p_MATNR_high*. 
4. Assign the parameters as selection filters to the column *MATNR*, so that only materials with numbers between *p_MATNR_low* and *p_MATNR_high* are included in the result data.

For more detailed information on how to create an ODP extraction, see [Define an ODP Extraction](./odp/odp-define).<br>
General information on how to create an extraction can be found in [Getting Started](./getting-started).

### Create a Batch Macro

A batch macro runs a worklow for each input parameter and creates an output after each run.<br>
The control parameters of a batch macro can be used to update the runtime parameters of the Xtract component.

Make sure to have the Xtract component to be prarameterized already set up in a new workflow, see [Create an Extraction](#create-an-extraction).

1. Navigate to the *Workflow Configuration* and select **Batch Macro** as the Workflow Type from drop down list.<br>
![BatchMacro](/img/content/xfa/batchmakro.png){:class="img-responsive"}
2. Save the workflow as a batch macro. Once the file is saved each tool in the workflow gets a lightning bolt anchor. Only *Interface* Tools can connect to these anchors.
3. Drag&Drop 2 **Control Parameter** tools from the *Interface* toolbox onto the canvas. Enter a text to be displayed for the parameters outside the batch macro e.g., name one *cp_MATNR_low* and the other *cp_MATNR_high* (1).
4. Connect the **Control Parameter** tools to the **Xtract ODP** component. This creates the *Action* tool **Update Value** (2).<br>
![Workflow-Sequence](/img/content/xfa/workflow-sequence.png){:class="img-responsive"}
5. Select one of the **Update Value** tools to display the available parameters of the **Xtract ODP** component in the *Action Configuration* menu.
Check if *p_MATNR_low*  and *p_MATNR_high* are listed in the tree menu. <br>
![Workflow-Sequence2](/img/content/xfa/workflow-sequence2.png){:class="img-responsive"}
6. To assign a control parameter to an Xtract parameter, mark the parameter or setting you want to overwrite (3). <br>
Assign the control parameter *cp_MAKT_low* to the Xtract ODP runtime parameter *p_MATNR_low* and *cp_MAKT_high* to the Xtract ODP runtime parameter *p_MATNR_high*.
7. Drag&Drop the **Macro Output** tool from the *Interface* toolbox onto the canvas to create an output for the batch macro (4). 
8. Connect the **Xtract ODP** component to the **Macro Output** and save the file.

{: .box-note}
**Note:** To use formulas with parameters, select *Update Value with Formula* from the drop-down list **Select an action type** in the *Action Configuration* menu.
Enter a formular directly into the **Formula** field at the buttom of the menu or click **[...]** to open a formula editor.

#### Parameterizing Components without Runtime Parameters

Some Xtract components don't use runtime parameters, but have other settings available for parameterization in the *Action Configuration* menu..

**Example:** <br>
The Xtract Table component uses a where-clause to filter data. To parameterize the whole where clause, mark the where-clause in the tree menu.<br>
To parameterize only parts of the where-clause, activate **Replace a specific string** and specify what part of the where-clause is to be replaced e.g., if the Xtract Table component has the where clause `KNA1~LAND1 = 'param'` "param" can be used as a placeholder for the actual input.
![where-clause-parameter](/img/content/xfa/table-where-parameterize.png){:class="img-responsive"}


### Integrate the Batch Macro into a Workflow

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


****
#### Related Links
- [Alteryx: Batch Macros](http://downloads.alteryx.com/betawh_xnext/BatchMacro.htm)
- [Alteryx: Action Tool](http://downloads.alteryx.com/betawh_xnext/Action.htm)