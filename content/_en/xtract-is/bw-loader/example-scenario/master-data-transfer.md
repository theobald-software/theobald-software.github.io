---
ref: xi-example-scenario-01
layout: page
title: Master Data Transfer
description: Master Data Transfer
product: xtract-is
parent: example-scenario
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=master-data-transfer
---
In this first example, our goal is to create and fill in a master data InfoObject. Set up a new data flow and create an OleDB source that reads the product table. Link the pipeline with a BW Loader target (after setting up the connection manager to SAP):

![BWLoader-StammDataTransfer-01](/img/content/BWLoader-StammDataTransfer-01.png){:class="img-responsive"}


Now you can open the editor of the BW Loader. Click the *New* button for the InfoSource.

 
![BWLoader-StammDataTransfer-02](/img/content/BWLoader-StammDataTransfer-02.png){:class="img-responsive"}

Select *Master Data* in the following dialog window.

![BWLoader-StammDataTransfer-03](/img/content/BWLoader-StammDataTransfer-03.png){:class="img-responsive"}


Now a dialogue window will open in which an InfoSource can be set up. This InfoSource should be based on a master data InfoObject that does not yet exist. For this purpose, click the *Create New InfoObject* button.

![BWLoader-StammDataTransfer-04](/img/content/BWLoader-StammDataTransfer-04.png){:class="img-responsive"}


Enter the name of the InfoObject (ZPROD) here and click the *CHAR data type* (with a length of 20). In addition, short and long texts are to be filled here later, which are language dependant, and the InfoObject will have master data:


![BWLoader-StammDataTransfer-05](/img/content/BWLoader-StammDataTransfer-05.png){:class="img-responsive"}

Our products also have another attribute: their color. This attribute has to be added to the ZPROD InfoObject. The color attribute can be newly created by clicking the *Create New Attribute* button. The screenshot below shows the ZCOLOR InfoObject to be created; it has no master data, but allows lower case characters (see above right).

![BWLoader-StammDataTransfer-06](/img/content/BWLoader-StammDataTransfer-06.png){:class="img-responsive"}


Now the *ZPROD* InfoObject is complete and can be saved and activated. The program returns to our original InfoSource setup. Some specifications still have to be made here (see screenshot). Then the InfoSource can also be saved and activated. Apart from creating an InfoSource, transfer rules for the selected source system are also created here.

![BWLoader-StammDataTransfer-07](/img/content/BWLoader-StammDataTransfer-07.png){:class="img-responsive"}


In our last step, we still need an InfoPackage, which you can create in the main template with the *Create New InfoPackage* button. The InfoPackage is based on the previously created InfoSource.

![BWLoader-StammDataTransfer-08](/img/content/BWLoader-StammDataTransfer-08.png){:class="img-responsive"}


Back in the main template, the following tasks now have to be completed: Definition of the technical access parameters for the source system and mapping of the pipeline elements to the InfoPackage's transfer structure. The main template should look like this when you're done:

![BWLoader-StammDataTransfer-09](/img/content/BWLoader-StammDataTransfer-09.png){:class="img-responsive"}


Now the upload can be started in debug-mode. In the monitor in transaction RSA1, the upload will look like this:

![BWLoader-StammDataTransfer-10](/img/content/BWLoader-StammDataTransfer-10.png){:class="img-responsive"}