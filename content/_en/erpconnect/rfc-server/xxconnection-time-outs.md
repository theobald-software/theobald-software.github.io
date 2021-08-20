---
ref: ec-rfc-server-04
layout: page
title: Connection Timeouts
description: Connection time-outs for rfc server
product: erpconnect
parent: rfc-server
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=connection-time-outs
---
This section shows how to handle connection timeouts.

### Check Connection and Restart
In most cases, an RFC server is designed to run for long periods of time. 
Because of this, the connection to the SAP system is bound to time out sooner or later e.g, when SAP is booted or when there is a disruption in the network connection.

To ensure that the RFC server can handle such situations, the following procedure is recommended:

1. Start a timer object parallel to the RFC server. This will activate the *Elapsed* event every 30 or 60 seconds. 
2. Query the RFC server's attribute *IsRunning*, which checks the connection to SAP. 
If the output of this function is *false*, relaunch the server object with *Start*.
3. If a connection interruption is intercepted in the *OnInternalException* event, 
do not call *Start* directly from within this event. 
Do not reboot after an interruption, when the reason for the interruption has not been determined or debugged yet.
