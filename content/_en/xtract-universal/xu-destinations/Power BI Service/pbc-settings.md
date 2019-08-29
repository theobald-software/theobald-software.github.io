---
ref: xu-powerbi-cloud-03
layout: page
title: Settings
description: Settings
product: xtract-universal
parent: Power BI Service
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=powerbi-settings
---

Click on **Extraction-Specific Settings** to define the destination settings of the extraction.

![powerbi-settings](/img/content/powerbi-settings.jpg){:class="img-responsive"}

#### Automatic dataset

A dataset including one table will be created.  

#### Custom Dataset

Here you have the possibility to create a custom Dataset.
The custom Dataset can have as many tables as you define.
Please note that the PowerBI interface does not allow to add tables after the Dataset has been created. 

![powerbi-settings-custom-01](/img/content/powerbi-settings-custom-01.jpg){:class="img-responsive"}

**Create dataset**<br>
Click the button to create a new Dataset. 

![powerbi-settings-custom-02](/img/content/powerbi-settings-custom-02.jpg){:class="img-responsive"}

Enter the name of the Dataset and the tables to be created. 

![powerbi-settings-custom-03](/img/content/powerbi-settings-custom-03.jpg){:class="img-responsive"}

Click on **create** to confirm.

![powerbi-settings-custom-04](/img/content/powerbi-settings-custom-04.jpg){:class="img-responsive"}

To specify an existent **Dataset** and a **table** please select a Dataset and a Table from the list.  

![powerbi-settings-custom-05](/img/content/powerbi-settings-custom-05.jpg){:class="img-responsive"}

When you run the extraction the SAP data will be written to the specified table in the Dataset. 

{% include _content/en/xu-specific/xu-destinations/general/table-name.md %}

{% include _content/en/xu-specific/xu-destinations/general/column-name-style.md %}

{% include _content/en/xu-specific/xu-destinations/general/date-conversion.md %}

#### Power Bi Settings

**Rows per Package** <br>
The number of rows that are written to the Dataset table in a request package.
You can change the default value to find an optimal value. 

