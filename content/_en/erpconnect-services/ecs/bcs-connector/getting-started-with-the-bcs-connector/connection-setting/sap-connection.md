---
ref: ecs-getting-started-connection-setting-02
layout: page
title: SAP Connection
description: SAP Connection
product: erpconnect-services
parent: connection-setting
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: //ERPConnect-Services-EN/default.aspx?pageid=bcs-sap-connection
---

In the main screen of the BCS Connector Designer, select the ellipsis button next to *SAP R/3 Connection*.
The *SAP Connection* dialog will appear.

![BCS-Connection-SAP-01](/img/content/BCS-Connection-SAP-01.png){:class="img-responsive"}

Specify the following parameters:

| Parameter           |                                                                                                                                                         |
|---------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Client**          | The SAP client.<br> Example: 800                                                                                                                        |
| **Language**        | The logon language for the SAP system.<br> Example: EN                                                                                                  |
| **Username**        | The user for the SAP connection.                                                                                                                        |
| **Password**        | The password for the SAP connection.                                                                                                                    |
| **Secure Store ID** | Optional parameter; used for lookup of SAP credentials in a SharePoint Secure Store Application (for more information, see Configuring Single Sign-On). |


Choose one of the following options for connecting to your SAP system:

| Option                         |                                                                                                                                                       |
|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Use Single Application Server** | Choose this option to connect to a single SAP server using an RFC type connection.                                                                    |
| **Host**                          | Name of the SAP server.                                                                                                                               |
| **System**                        | The SAP System Number (00…99).                                                                                                                        |
| **Use Load Balancing**            | Choose this option if you have SAP load balancing configured in your landscape  and want to SAP determine the appropriate server for your connection. |
| **Message Server**                | Name of the SAP Message server.                                                                                                                       |
| **Group / SID**                   | Group and System ID for the SAP Server selection.                                                                                                     |
| **Use HTTP / Web Service**        | Choose this option if you have SAP load balancing configured in your landscape  and want to SAP determine the appropriate server for your connection. |
| **HTTP-URL**                      | Group and System ID for the SAP Server selection.                                                                                                     |

Use the *Test Connection* button to validate the connection parameters.

You should see a confirmation message, indicating that the connection to the SAP system was successful. Select *OK* to close the message.

![BCS-Connection-SAP-02](/img/content/BCS-Connection-SAP-02.png){:class="img-responsive"}

Select *OK* to complete the configuration of the SAP connection. Notice the status bar at the bottom of your window, indicating that a connection to an SAP system has been configured.