---
ref: ecs-sin-nis-using-web-services-02
layout: page
title: Nintex-Workflow für den Webservice anlegen
description: Nintex-Workflow für den Webservice anlegen
product: erpconnect-services
parent: mit-webservices
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=nintex_workflow_f_r_den_webservice_anlegen
---

In den folgenden Schritten ändern wir der Nintex-Workflow und nutzen die Action Call Web Service action an der Stelle von Create item, um ein SAP-Material in SAP mithilfe des Webservices anzulegen.

Navigieren Sie zur Liste Material Maintenance Requests und wählen Sie Manage Workflows with Nintex Workflow unter List -> Workflow Settings.

![Nintex-Material-WS-WF-Manage](/img/content/Nintex-Material-WS-WF-Manage.png){:class="img-responsive"}

Klicken Sie auf den Workflow, um ihn zu editieren.  

![Nintex-Material-WS-WF-List](/img/content/Nintex-Material-WS-WF-List.png){:class="img-responsive"}

Deaktivieren (disable) oder löschen Sie die Create item-Action. 

![Nintex-Material-WS-WF-Disable](/img/content/Nintex-Material-WS-WF-Disable.png){:class="img-responsive"}

Fügen Sie nun die Action Call web service wie unten angezeigt ein.

![Nintex-Material-WS-WF-WSAction-1](/img/content/Nintex-Material-WS-WF-WSAction-1.png){:class="img-responsive"}

Konfigurieren Sie die Call web service-Action:

URL = http://sp2013/_vti_ bin/SAPMaterialWebService.svc/mex<br>
Username / Password = (Setzen Sie die Anmeldedaten für den Zugriff auf den Webservice)<br>
Web method = CreateSAPMaterial<br>
Web service input:  Die SOAP-Nachricht enthält die Referenzen zu den Feldern der Liste Material Maintenance Request .

![Nintex-Material-WS-WF-WSAction-2](/img/content/Nintex-Material-WS-WF-WSAction-2.png){:class="img-responsive"}

Speichern und publizieren Sie den Workflow.<br>
Wiederholen Sie die im vorigen Szenario beschriebenen Schritte, um das Resultat zu verifizieren. 

Hier sehen Sie den genehmigten Antrag für die Materialanlage.

![Nintex-Material-WS-Request-Completed](/img/content/Nintex-Material-WS-Request-Completed.png){:class="img-responsive"}

Wie Sie auch im SAP verfizieren können, wurde das Material angelegt.

![Nintex-Material-WS-SAP](/img/content/Nintex-Material-WS-SAP.png){:class="img-responsive"}
