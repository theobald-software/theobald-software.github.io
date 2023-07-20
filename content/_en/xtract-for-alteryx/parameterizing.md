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

There are 2 ways to parameterize Xtract components:
- Pass parameters using the input arrows of Xtract components. <br>
Input arrows are available for all Xtract components as of Xtract for Alteryx version 1.19.
- Pass parameters using [control parameters](http://downloads.alteryx.com/betawh_xnext/ControlParam.htm) in [batch macros](http://downloads.alteryx.com/betawh_xnext/BatchMacro.htm).<br> 
The parameterization via batch macros is supported by Xtract BAPI, Xtract Table, Xtract Cube and Xtract ODP.

The following sections describe how to parameterize Xtract components using batch macros.

### Creating an Extraction for a Batch Macro
The following example uses the Xtract ODP component to show how to parameterize selection filters.

1. Create a **new** workflow.
2. Add an Xtract ODP component. 
3. Look up the DataSource *0MATERIAL_ATTR*.
4. Create 2 new runtime parameters of type *String* and name them *p_MATNR_low* and *p_MATNR_high*. 
5. Assign the parameters as selection filters to the column *MATNR*, so that only materials with numbers between *p_MATNR_low* and *p_MATNR_high* are included in the result data.

For more detailed information on how to create an ODP extraction, see [Define an ODP Extraction](./odp/odp-define).<br>

### Creating a Batch Macro with Control Parameters

1. Create a new workflow that contains an extraction as described in [Creating an Extraction for a Batch Macro](#creating-an-extraction-for-a-batch-macro).
2. To use the workflow as a batch macro, navigate to the *Workflow Configuration* and select **Batch Macro** as the Workflow Type from drop down list.<br>
![BatchMacro](/img/content/xfa/batchmakro.png){:class="img-responsive"}
3. Save the file. Once the workflow is saved as a batch macro each tool in the workflow gets a lightning bolt anchor. Only *Interface* Tools can connect to these anchors.
4. Add a **Control Parameter** tool from the *Interface* toolbox and label the parameter e.g., name one *cp_MATNR_low* and another *cp_MATNR_high* to differentiate between the two (1).
5. Connect the **Control Parameter** tools to the Xtract component. This creates the *Action* tool **Update Value** (2).<br>
![Workflow-Sequence](/img/content/xfa/workflow-sequence.png){:class="img-responsive"}
6. To assign the control parameters to an Xtract parameter, select an **Update Value** tool and mark the Xtract parameter in the tree menu *Value or Attribute to Update* (3). 
![Workflow-Sequence2](/img/content/xfa/workflow-sequence2.png){:class="img-responsive"}
For this example, assign the control parameter *cp_MAKT_low* to the Xtract ODP runtime parameter *p_MATNR_low* and *cp_MAKT_high* to *p_MATNR_high*.
7. Drag&Drop the **Macro Output** tool from the *Interface* toolbox onto the canvas to create an output for the batch macro (4). 
8. Save the macro.

{: .box-note}
**Note:** To use formulas with parameters, select *Update Value with Formula* from the drop-down list **Select an action type** in the *Action Configuration* menu.
Enter a formula directly into the **Formula** field at the bottom of the menu or click **[...]** to open a formula editor.

#### Parameterizing Components without Runtime Parameters

Some Xtract components don't use runtime parameters, but have offer other settings in the *Action Configuration* menu.

Example: Parameterizing a WHERE-clause of an Xtract Table component <br>
- To parameterize a WHERE-clause, mark the WHERE-clause in the tree menu *Value or Attribute to Update*.<br>
- To parameterize only parts of a WHERE-clause, activate **Replace a specific string** and specify what part of the WHERE-clause is to be replaced e.g., in the WHERE-clause `KNA1~LAND1 = 'param'` "param" can be used as a placeholder for the actual input.
![WHERE-clause-parameter](/img/content/xfa/table-where-parameterize.png){:class="img-responsive"}

### Integrating a Batch Macro into a Workflow

This example uses the **Text Input** tool to define the parameters for the extraction.

1. Add a **Text Input** tool to define the input for the batch macro. Enter valid parameter values and add a new column for every control parameter (1). <br>
Example: 000000000000000023 as input for *p_MATNR_low* and 000000000000000100 as input for *p_MATNR_high*. <br>
![Input-Text](/img/content/xfa/input-text.png){:class="img-responsive"}
2. To import the batch macro right-click the canvas and navigate to **Insert > Macro**. Add the macro that contains the Xtract component.<br>
3. Connect the **Text Input** to the batch macro (2).
4. Select the batch macro (2) and use the drop-down list **Choose field** to assign the values from the **Text Input** columns to the control parameters of the batch macro.<br>
![Import-Macro](/img/content/xfa/importmacro.png){:class="img-responsive"}
5. Add the **Browse** tool (3) to check the results of the batch macro and run the workflow.<br>


****
#### Related Links
- [Alteryx Help](https://help.alteryx.com/20212/designer)
- [Alteryx Help: Batch Macros](http://downloads.alteryx.com/betawh_xnext/BatchMacro.htm)
