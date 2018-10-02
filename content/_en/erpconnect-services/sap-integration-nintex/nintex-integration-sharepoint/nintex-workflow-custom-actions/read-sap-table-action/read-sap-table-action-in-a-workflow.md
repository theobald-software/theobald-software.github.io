---
layout: page
title: Read SAP Table Action in a workflow
description: Read SAP Table Action in a workflow
product: erpconnect-services
parent: read-sap-table-action
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=read_sap_table_action_in_a_workflow
---

For using the *Read SAP table* Nintex Workflow Custom Action browse for the action *Read SAP table* in the Nintex Workflow Manager 
or open the menu item ERPConnect Services on the left side. All the Custom Actions provided by Theobald Software are listed there. Via drag & drop the Custom Actions can be added to the workflow.  

![ECS-Nintex-ReadSAPTable-Action1](/img/content/ECS-Nintex-ReadSAPTable-Action1.png){:class="img-responsive"}

After adding the Custom Action to the workflow you have to configure it. 

![ECS-Nintex-ReadSAPTable-Action8](/img/content/ECS-Nintex-ReadSAPTable-Action8.png){:class="img-responsive"}

In the configuration window you first have to select the ERPConnect Service Application. In the *SAP table* field you have to enter the SAP table which should be called. You can use the search button for seaching for a table on your SAP System.

![ECS-Nintex-ReadSAPTable-Action3](/img/content/ECS-Nintex-ReadSAPTable-Action3.png){:class="img-responsive"}

With *Load parameters* all the values of the SAP table are loaded in the configuration screen.

*XML output variable*

You can select a predefined workflow variable here to store the XML output of the SAP table. 



![ECS-Nintex-ReadSAPTable-Action9](/img/content/ECS-Nintex-ReadSAPTable-Action9.png){:class="img-responsive"}

*Column Selection*

In the *Column Selection* you select the columns of the SAP table that should be displayed in the XML output. You can use Select all and Select None for the column selection.

![ECS-Nintex-ReadSAPTable-Action4](/img/content/ECS-Nintex-ReadSAPTable-Action4.png){:class="img-responsive"}

*Advanced Options* 

In the *Advanced Options* section additional processing options for the SAP table can be set. 

*Use custom function Z_XTRACT_IS_TABLE*: With this option Z-function module Z_XTRACT_IS_TABLE is used for table extraction
instead of the SAP standard extraction.

![ECS-Nintex-ReadSAPTable-Action5](/img/content/ECS-Nintex-ReadSAPTable-Action5.png){:class="img-responsive"}

When using this function module for extraction it is possible

- to extract tables whose overall length of all columns to be extracted exceed 512 bytes
- to extract tables that contain at least one column of the type F (floating point) 
- to extract table TCURR which has various problems with meta data in the Data Dictionary     

For further information about the installation of function module Z_XTRACT_IS_TABLE check the section SAP Customizing. 

*Row count (0 = unlimited)*: With this function the overall number of rows displayed can be limited to a certain number. In standard the number is not limited.

![ECS-Nintex-ReadSAPTable-Action6](/img/content/ECS-Nintex-ReadSAPTable-Action6.png){:class="img-responsive"}

*Where Clause*: With this function a Where Clause to be processed with the calling of the SAP table can be set. 

![ECS-Nintex-ReadSAPTable-Action7](/img/content/ECS-Nintex-ReadSAPTable-Action7.png){:class="img-responsive"}
