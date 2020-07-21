---
ref: ec-rfc-server-03
layout: page
title: Connection time-outs
description: Connection time-outs for rfc server
produc: erpconnectx
parent: rfc-server
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=connection-time-outs
---

In most cases, an RFC server is designed to run for very long periods of time (often day and night). Because of this, the connection to the SAP system is bound to time out sooner or later. This can happen when the SAP system is booted or, for example, when there is a disruption in the connection within the network.

To ensure that the RFC server can handle such situations, the following procedure is recommended:

1. Start a timer object parallel to the RFC server. This will activate the _Elapsed_ event every 30 or 60 seconds. 
2. Query the RFC server's attribute _IsRunning_, which determines if there is still a connection to SAP. If this function outputs false, relaunch the server object with _Start()_.
3. Even if a connection interrupt could be intercepted in the _OnInternalException_ event, you should resist the temptation to call _Start()_ directly from within this event. It makes no sense to try to reboot after an interrupt because the reason for the interrupt has not been determined or debugged at this point.
