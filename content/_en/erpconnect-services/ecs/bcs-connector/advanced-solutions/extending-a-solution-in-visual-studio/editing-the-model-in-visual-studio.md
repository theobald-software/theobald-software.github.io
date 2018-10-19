---
ref: ecs-extending-a-solution-in-visual-studio-03
layout: page
title: Editing the Model in Visual Studio
description: Editing the Model in Visual Studio
product: erpconnect-services
parent: extending-a-solution-in-visual-studio
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=bcs-editing-the-model-in-visual-studio
---

In the following steps, you will export the 'SAP PO Model' to Visual Studio and extend the solution there. You will add a custom method *Release* to the model which will enable the user to release a selected purchase order.

**Exporting the Model to Visual Studio**

To export your model to a Visual Studio 2010 solution, select the *Export to VS2010* command from the ribbon.

Specify the export parameters for the solution and Select *OK*.

For this example, you will change the *Solution Folder* and otherwise accept the default values and default 'CSharp' language selection.

For further information see [Exporting a Model](../../getting-started-with-the-bcs-connector/exporting-a-model).

![BCS-PO-VS-Export](/img/content/BCS-PO-VS-Export.png){:class="img-responsive"}

You should see a confirmation message that the Visual Studio solution was created successfully. In the Explorer window showing the export folder, you will see the solution file (.sln), with a subfolder containing the source files for your solution.


**Adding the Release Method**

Open the solution file (.sln) in Visual Studio 2010. The *Solution Explorer* window in Visual Studio will show the structure and contents of your solution.

Below the solution node, you will see a SharePoint project 'SAPPOModel' (or the name that you specified when exporting to Visual Studio). This project contains the BCS model 'SAPPOModelVS2010' and a C# code file named 'ServiceBase.cs'.

Expand the BCS model 'SAPPOModelVS2010'. You will see three items below the model:

**PO_HEADERS.cs** -	 C# class definition file for the purchase order entity.<br>
**PO_HEADERSService.cs** -	 C# service definition file for the purchase order entity methods.<br>
**SAPPOModelVS2010.bdcm** -	 BDC model file.<br>

Double-click on the BDC model file 'SAPPOModelVS2010.bdcm' to open it in the designer window.

The designer window will show the 'PurchaseOrders' entity. The entity has the identifier 'PONumber' and two methods 'ReadData' and 'ReadDataItem'. Select the entity to show the 'BDC Method Details' window below.

Expand the method nodes to see the parameter, instance and filter definitions.

![BCS-PO-VS-BDC-Model-01](/img/content/BCS-PO-VS-BDC-Model-01.png){:class="img-responsive"}

In the *Solution Explorer* window, double-click on the 'PurchaseOrders.cs' file to open it in the editor.

This file contains the class definition for the 'PurchaseOrders' entity.

![BCS-PO-VS-BDC-Model-02](/img/content/BCS-PO-VS-BDC-Model-02.png){:class="img-responsive"}

In the *Solution Explorer* window, double-click on the 'PurchaseOrdersService.cs' file to open it in the editor.

This file contains the code for the two public methods 'ReadData' and 'ReadDataItem' of the entity. The other methods in the file are used to format the data structures.

![BCS-PO-VS-BDC-Model-03](/img/content/BCS-PO-VS-BDC-Model-03.png){:class="img-responsive"}

Go back to the model design window by selecting the 'SAPPOModelVS2010' tab.

In the *BDC Method Details* window, collapse the existing methods 'ReadData' and 'ReadDataItem'.

Select and choose *Create Blank Method* from the menu.

![BCS-PO-VS-BDC-Model-04](/img/content/BCS-PO-VS-BDC-Model-04.png){:class="img-responsive"}

In the *Properties* window, rename the new method to 'Release'.

![BCS-PO-VS-BDC-Model-05](/img/content/BCS-PO-VS-BDC-Model-05.png){:class="img-responsive"}

In the *BDC Method Details* window, below the *Parameters* node, select *Add a Parameter*, and then .

![BCS-PO-VS-BDC-Model-06](/img/content/BCS-PO-VS-BDC-Model-06.png){:class="img-responsive"}

Using the Properties window, change the name of the new parameter to 'O_NUMBER'.

![BCS-PO-VS-BDC-Model-07](/img/content/BCS-PO-VS-BDC-Model-07.png){:class="img-responsive"}

Select the value shown in the *Type Descriptor* column. Using the Properties window, change the name of the *Type Descriptor* to 'PO_NUMBER'.

![BCS-PO-VS-BDC-Model-08](/img/content/BCS-PO-VS-BDC-Model-08.png){:class="img-responsive"}

Scroll down in the *Properties* window to select 'PurchaseOrder' in the *Identifier* field.

![BCS-PO-VS-BDC-Model-09](/img/content/BCS-PO-VS-BDC-Model-09.png){:class="img-responsive"}

Repeat the above step to define a second input parameter with the name 'PO_REL_CODE'. For the Type Descriptor, specify 'PO_REL_CODE' and the type System.String.

![BCS-PO-VS-BDC-Model-10](/img/content/BCS-PO-VS-BDC-Model-10.png){:class="img-responsive"}

Typically, you would define the return parameter(s) for the method using the same steps. For this exercise you will skip this step.

In the *BDC Method Details* window, below the *Instances* node, select *Add a Method Instance*, and then . Note that the Finder Instance is the only possible selection.

In the *Properties* window, change the Name to 'Release' and the Type to 'Updater'.

![BCS-PO-VS-BDC-Model-11](/img/content/BCS-PO-VS-BDC-Model-11.png){:class="img-responsive"}

In the *Solution Explorer* window, double-click the file 'PurchaseOrdersServices.cs' to display the code file.

Scroll down to the new ‘Release’ method, it will initially look like this:
```
public static void Release(string PO_NUMBER, string PO_REL_CODE)
        {
            throw new System.NotImplementedException();
        }
```
       
Replace the method code to implement the release function based on the SAP interface 'BAPI_PO_RELEASE':

```
public static void Release(string PO_NUMBER, string PO_REL_CODE)
        {
            R3Connection connection = GetConnection();
  
            RFCFunction function = connection.CreateFunction("BAPI_PO_RELEASE");
            function.Exports["PURCHASEORDER"].ParamValue = PO_NUMBER;
            function.Exports["PO_REL_CODE"].ParamValue = PO_REL_CODE;
            function.Execute();
        }
```

In the *Solution Explorer*, right-click on the 'SAPPOModel' project and *Build* the project. The *Output* window should indicate the successful build of the project.

![BCS-PO-VS-BDC-Model-12](/img/content/BCS-PO-VS-BDC-Model-12.png){:class="img-responsive"}