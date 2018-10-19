---
ref: ecs-getting-started-with-the-bcs-connector-07
layout: page
title: Exporting a Model
description: Exporting a Model
product: erpconnect-services
parent: getting-started-with-the-bcs-connector
permalink: /:collection/:path
weight: 7
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=bcs-exporting-a-model
---

**Export to XML**

You can export a model that you are working with in the BCS Connector to an XML file. For this operation, you have to be connected to a SharePoint system and the model has to exist in its BCS metadata store. The model will be saved in XML format as a BDC Model file(.bdcm). You can subsequently import a .bdcm file into a different SharePoint BCS metadata store using the Central Administration console or you can work with a .bdcm file in Visual Studio for developing advanced SharePoint solutions.

To export a BCS model to an XML file, select the *Export to XML* command from the ribbon.

![BCS-Export-XML-01](/img/content/BCS-Export-XML-01.png){:class="img-responsive"}

In the dialog titled *Where do you want to save the file?*, specify the location and the name of the model file.

![BCS-Export-XML-02](/img/content/BCS-Export-XML-02.png){:class="img-responsive"}

Select the *Save* button. The file will be saved as a BDC Model file (.bdcm).


**Export to Visual Studio**

You can export a model that you are working with in the BCS Connector to Visual Studio 2010. The BCS Connector will generate a complete Visual Studio solution file (.sln), including the BCS model definition file (.bdcm), as well as the code files (.cs or .vb) for the entity and entity method implementations. This solution file provides an ideal starting point for the development of advanced SharePoint solutions.

To export a model to a Visual Studio 2010 solution, select the *Export to VS2010* command from the ribbon.

![BCS-Export-Visual-Studio-01](/img/content/BCS-Export-Visual-Studio-01.png){:class="img-responsive"}

In the Export to Visual Studio dialog, specify the following parameters:


**Solution Name** -	Name of the solution in Visual Studio. The default value is the name of your model in the BCS Connector.<br>
**Solution Folder** -	Location where you want to save the solution files to. It is recommended to save each solution into its own separate folder.<br>
**Namespace** -	Namespace for the class definitions in the Visual Studio Solution. The default value is the name of your model in the BCS Connector.<br>
**Model** -	Name of the model in the Visual Studio project. The default is the name of the model in the BCS Connector, followed by 'VS2010'.<br>
**LOB System** -	Name of the LOB System in the Visual Studio project. The default is the name of the LOB System in the BCS Connector, followed by 'VS2010'.<br>
**LOB System Instance** -	Name of the LOB System Instance in the Visual Studio project. The default is the name of the LOB System Instance in the BCS Connector, followed by 'VS2010'.<br>
**Entity Namespace Appendix** -	Appendix to differentiate the entities in the Visual Studio solution from the entities in the BCS Connector. Default is 'VS2010'.<br>
**Language Choose between** -	Visual Basic or C Sharp. Default is C Sharp.<br>
**Open Folder** -	Check to open the solution folder after the export.

![BCS-Export-Visual-Studio-02](/img/content/BCS-Export-Visual-Studio-02.png){:class="img-responsive"}

Select the *OK* button to export the model to the specified Visual Studio 2010 solution.

You will see a confirmation message that the Visual Studio solution was created successfully.

![BCS-Export-Visual-Studio-03](/img/content/BCS-Export-Visual-Studio-03.png){:class="img-responsive"}

You should now see a solution file (.sln) in the export folder, with a subfolder containing the source files for your solution.

![BCS-Export-Visual-Studio-04](/img/content/BCS-Export-Visual-Studio-04.png){:class="img-responsive"}

You can now open the solution file (.sln) in Visual Studio 2010 and start developing your advanced SharePoint solution.