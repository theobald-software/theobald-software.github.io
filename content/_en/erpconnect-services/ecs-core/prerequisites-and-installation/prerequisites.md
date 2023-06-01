---
ref: ecs-core-prerequisites-and-installation-01
layout: page
title: Prerequisites
description: Prerequisites
product: erpconnect-services
parent: prerequisites-and-installation
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=prerequisites
---

**Windows operating system**

- Windows 8 or above
- Windows Server 2012 R2 or above
- IIS webserver version 8.5 or above
- .Net Framework 4.5 or above

**IIS components / features required for the deployment**

- Common HTTP-Features<br>
	-HTTP Redirection<br>
- Security<br>
	-Basic Authentication<br>
	-Windows Authentication<br>
- Application Development<br>
	-ASP.NET 4.5<br>
	-ISAPI Extension<br>
	-ISAPI Filters<br>
- Management Tools<br>
	-IIS Management Tools and Scripts<br>
- HTTPS (recommended)

Please go to the Server Manager (Windows Server) or to Windows Features (Windows) and install them manually.

**Supported SAP Releases**

- SAP R/3 Version 4.0B and higher versions or SAP ECC.
- SAP S/4 HANA
- SAP BW Version 3.1 and higher.
- SAP BW/4 HANA

The Integration occurs on the SAP application server level. The database under the SAP system is irrelevant. 
SAP systems on HANA particularly are supported without any restrictions.   

**SAP Authentication**

- Custom authentication.
- SAP system or dialog user with appropriate [authority objects](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights).

**Ports**

Following ports have to be opened depending on the SAP system, 
where nn is the instance number of the SAP system (e.g. 00 or 99).

- SAP Application Server: Port 33nn
- SAP Message Server (Load Balancing): Port 36nn
- Secure Network Communications (SNC): Port 48nn
- SAP Router: Port 3299

**SAP Licenses**

Additional SAP licenses might be required for extracting data from SAP. Contact SAP to verify these requirements.