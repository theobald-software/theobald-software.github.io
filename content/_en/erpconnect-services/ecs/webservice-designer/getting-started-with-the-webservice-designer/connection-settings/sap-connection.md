---
ref: ecs-wd-gs-connection-settings-01
layout: page
title: SAP Connection
description: SAP Connection
product: erpconnect-services
parent: connection-settings
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=sap_connection
---

To configure the SAP connection, select the Edit Connection button from the ribbon.

![WSD-EditConnection](/img/content/WSD-EditConnection.PNG){:class="img-responsive"}

The *SAP Connection Dialog* will be shown.

![WSD-SAPConnection](/img/content/WSD-SAPConnection.PNG){:class="img-responsive"}

Specify the following parameters:<br>
**Client**- 	 	The SAP client. Example: 800<br>
**Language**- 	The logon language for the SAP system. Example: EN<br>
**Username**-	The user for the SAP connection.<br>
**Password**-	The password for the SAP connection.<br>

Choose one of the following options for connecting to your SAP system:<br>

**Use Single Application Server**-	Choose this option to connect to a single SAP server using an RFC type connection <br>
**Host Name of the SAP server**-	System The SAP System Number (00…99).<br>
**Use Load Balancing**-	Choose this option if you have SAP load balancing configured in your landscape and want to SAP determine the appropriate server for your connection.<br>
**Message Server**-	Name of the SAP Message server.<br>
**Group / SID**-	 Group and System ID for the SAP Server selection<br>
**Use HTTP / Web Service**-	Choose this option if you have SAP load balancing configured in your landscape and want to SAP determine the appropriate server for your connection<br>
**HTTP-URL**	Group and System ID for the SAP Server selection<br>

Use the Test Connection button to validate the connection parameters. You should see a confirmation message, indicating that the connection to the SAP system was successful. 
            

Select *OK* to close the message. Select *OK* again to complete the configuration of the SAP connection.
The status bar at the bottom of your window should now indicate that a connection to an SAP system has been configured.  

![WSD-SAPConnectionConfigured](/img/content/WSD-SAPConnectionConfigured.PNG){:class="img-responsive"} 
