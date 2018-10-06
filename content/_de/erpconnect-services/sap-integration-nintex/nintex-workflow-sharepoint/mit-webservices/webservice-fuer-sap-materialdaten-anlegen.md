---
layout: page
title: Webservice für SAP-Materialdaten anlegen
description: Webservice für SAP-Materialdaten anlegen
product: erpconnect-services
parent: mit-webservices
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=webservice-fuer-sap-materialdaten-anlegen
---

Mit dem WebService Designer legen wir einen neuen Webservice an.

![Nintex-Material-WS-Designer](/img/content/Nintex-Material-WS-Designer.jpg){:class="img-responsive"}

Der folgende benutzerdefinierte Datentyp (custom data type) wird benötigt. 

![Nintex-Material-WS-Custom-Data-Type](/img/content/Nintex-Material-WS-Custom-Data-Type.jpg){:class="img-responsive"}

Die Webservice-Operation enthält eine Execute Function-Aktivität, um ein SAP-Funktionsmodul (Z_ECS_MATERIAL_MAINTAIN) aufzurufen.  

![Nintex-Material-WS-Activity](/img/content/Nintex-Material-WS-Activity.jpg){:class="img-responsive"}

Die Webservice-Operation hat den folgenden Inputparameter.

![Nintex-Material-WS-Parameters](/img/content/Nintex-Material-WS-Parameters.jpg){:class="img-responsive"}

In der Execute Function-Aktivität wird der Inputparameter entsprechend zugewiesen.

![Nintex-Material-WS-Function-Activity](/img/content/Nintex-Material-WS-Function-Activity.jpg){:class="img-responsive"}

Im Folgenden finden Sie die Abbildung der Felder des Inputparameters.

![Nintex-Material-WS-Mapping-Structure](/img/content/Nintex-Material-WS-Mapping-Structure.jpg){:class="img-responsive"}

Nun deployen Sie den Webservice auf SharePoint. 

![Nintex-Material-WS-Deployed](/img/content/Nintex-Material-WS-Deployed.jpg){:class="img-responsive"}

[Hier](/img/SAPMaterialWebService.zip) können Sie die WebService-Definition herunterladen (zip).