---
ref: ec-administration-04
layout: page
title: SOAP Service administrieren
description: SOAP Service administrieren
product: erpconnect
parent: administration
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=soap-service-administrieren
---

**Warnung:** Das SOAP-Protokoll ist obsolete in ERPConnect ab Version 4.25.0 (Mai 2015). 

Falls Sie das SOAP / HTTP – Protokoll und nicht RFC für die Kommunikation einsetzen möchten, benutzen Sie bitte die folgenden Transaktionen für die Administration.

Falls Sie den HTTP-Service prüfen oder aktivieren möchten, gehen Sie wie folgt vor:

*Transaktion SMICM -> Springen -> Services*.

Auf diesem Bild können Sie herausfinden, auf welchen Port der HTTP-Server hört (z.B. 80). 

![SOAP-Administration_001](/img/content/SOAP-Administration_001.png){:class="img-responsive"}

Bitte benutzen Sie die Transaktion SICF um sicherzustellen, dass im Service-Baum der folgende Service aktiviert ist:

*default host -> sap -> bc -> soap -> rfc*

Falls der Service inaktiv ist, benutzen Sie bitte die rechte Maustaste -> *Service aktivieren*.  



![SOAP-Administration_002](/img/content/SOAP-Administration_002.png){:class="img-responsive"}
