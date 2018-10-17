---
ref: ecs-sharepoint-configuration-01
layout: page
title: Setting BCS Permissions
description: Setting BCS Permissions
product: erpconnect-services
parent: sharepoint-configuration
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=setting-bcs-permissions
---

In a SharePoint system, the BCS metadata store contains all the information about models, external systems, external content types and their methods. In the previous step, you published a model with an external content type from SAP to the SharePoint BCS metadata store. In order for a user to access external data, you need to set the appropriate permissions on the objects in the BCS metadata store.

In the BCS Connector Designer, you can view the permission level in the BCS metadata store for the current user.

From the BCS Connector ribbon, select the *Show Permissions* dialog.

![BCS-SP-Show-Permissions](/img/content/BCS-SP-Show-Permissions.png){:class="img-responsive"}

Select *OK* to close the *Show Permissions* dialog.

To set the BCS metadata store permissions, you will use the *SharePoint 2010 Central Administration* tool. From the *Start* menu of your SharePoint system, launch *SharePoint 2010 Central Administration*.

![BCS-SP-Manage-Service-Applications](/img/content/BCS-SP-Manage-Service-Applications.png){:class="img-responsive"}

In the *Application Management* group, select the *Manage service applications* link.

![BCS-SP-Manage](/img/content/BCS-SP-Manage.png){:class="img-responsive"}

Select the *Business Data Connectivity Service* application, and then select the *Manage* button from the ribbon.

![BCS-SP-Service-Application-Information](/img/content/BCS-SP-Service-Application-Information.PNG){:class="img-responsive"}

On the *Service Application Information* page, you will see the external content types that you previously published.

Select the *Set Metadata Store Permissions* command from the ribbon.

By default, you will see your own user name in the list of accounts with the assigned permissions shown below.

![BCS-SP-Set-Metadata-Store-Permissions-01](/img/content/BCS-SP-Set-Metadata-Store-Permissions-01.png){:class="img-responsive"}

Select the address book icon below the '*To add an account, or group…*' field to browse for additional accounts or a groups.

For example, to specify permissions for all authenticated users, you select *All Users*, and then the group *All Authenticated Users*, followed by the *Add* button. Select *OK* to confirm your group selection.

![BCS-SP-Set-Metadata-Store-Permissions-02](/img/content/BCS-SP-Set-Metadata-Store-Permissions-02.png){:class="img-responsive"}

Back in the *Set Metadata Store Permissions* dialog, select the *Add button* to move the group ‘All Authenticated Users’ to the list below.

In the *Permissions for All Authenticated Users* list, select the *Execute* permission, and leave the others unchecked. Make sure you select the option *Propagate permissions to all BDC Models, External Systems and External Content Types in the BDC Metadata Store* so that permissions apply across all objects.

Select *OK* to finalize your permission settings.

![BCS-SP-Set-Metadata-Store-Permissions-03](/img/content/BCS-SP-Set-Metadata-Store-Permissions-03.png){:class="img-responsive"}

Close the *SharePoint Central Administration* window.
