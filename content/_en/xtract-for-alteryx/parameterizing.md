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

To pass parameters to Xtract components in Alteryx, you can use a batch macro that includes the Xtract component to be parameterized in combination with a control parameter tool. 

A batch macro runs the worklow for each control parameter that configures the runtime parameters of the Xtract component and also creates an output for each control parameter.
The batch macro can then be integrated into your workflow to pass values via the macro's control parameter.

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

A batch macro runs a worklow for each input parameter and creates an output after each run.<br>
How to create a batch macro for parameterizing an Xtract component:

1. Navigate to the *Workflow Configuration* and select **Batch Macro** as the Workflow Type from drop down list.<br>
![BatchMacro](/img/content/xfa/batchmakro.png){:class="img-responsive"}
2. Save the project as a Batch Macro. Each tool in the workflow gets a lightning bolt anchor. Only *Interface* Tools can connect to these anchors.
3. Drag&Drop the **Control Parameter** tool from the *Interface* toolbox onto the canvas. Enter the text or question to be displayed during runtime.
4. Connect the **Control Parameter** tool to the **Xtract ODP** component. This creates the *Action* **Update Value**.
5. When selecting **Update Value** the available parameters of the **Xtract ODP** component are displayed in a tree structure under *Value or Attribute to Update* in the *Action Configuration* menu.
Check if *p_MATNR* is listed in Xtract ODP > RuntimeParameters > *p_MATNR*.
![Workflow-Sequence](/img/content/xfa/workflow-sequence.png){:class="img-responsive"}
6. Drag&Drop the **Macro Output** tool from the *Interface* toolbox onto the canvas to create an output for the Macro. 
7. Connect the **Xtract ODP** component to the **Macro Output** and save the file.

{: .box-note}
**Note:** To update runtime parameters using formulas, select *Update Value with Formula* from the drop-down list **Select an action type** in the *Action Configuration* menu.
You can enter a formular directly into the **Formula** field at the buttom of the menu or click **[...]** to open a formula editor.

### Use the Batch Macro in a Workflow

To use the batch macro, you need to import the macro and provide an input text for the parameter *p_MATNR*. <br>
How to integrate the macro into your workflow:
1. Drag&Drop the **Text Input** tool from the *In/Out* toolbox onto the canvas.
2. Enter a valid input for the runtime parameters of the Xtract component in the **Text Input**. Example: 000000000000000023 as input for *p_MATNR*. <br>
3. To import the macro right-click the canvas, navigate to **Insert > Macro** and select the macro that contains the control parameter and Xtract component. In this example the batch macro was saved as "Demo.yxmc". <br>
![Import-Macro](/img/content/xfa/insertmacro.png){:class="img-responsive"}
4. Connect the **Text Input** tool to the macro.
5. Select the macro and choose the input parameter from the drop-down-list **Choose field**.
6. Now that macro and input are set, you can add a Browse tool to review the result of the macro and run the workflow.<br>
![Input-Text](/img/content/xfa/input-text.png){:class="img-responsive"}


****
#### Related Links
- [Alteryx: Batch Macros](http://downloads.alteryx.com/betawh_xnext/BatchMacro.htm)
- [Alteryx: Action Tool](http://downloads.alteryx.com/betawh_xnext/Action.htm)