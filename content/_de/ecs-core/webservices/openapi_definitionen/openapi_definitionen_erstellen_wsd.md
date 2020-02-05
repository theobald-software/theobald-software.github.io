---
ref: ecs-core-webservice-designer-06
layout: page
title: OpenAPI-Definitionen erstellen mit dem WebService Designer
description: OpenAPI-Definitionen erstellen mit dem WebService Designer
product: ecs-core
parent: openapi_definitionen
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ECS-Core-DE/default.aspx?pageid=openapi_definitionen_erstellen_wsd
---

Mit dem **WebService Designer** können Sie eine OpenAPI-Definition folgendermaßen erstellen: 

Erstellen Sie einen neuen Webservice oder rufen Sie einen bereits deployten Webservice vom Server auf. 

Klicken Sie auf *OpenAPI...* unter *Exports* in der Menüleiste. Die Definition wird zur angegeben Destination im JSON-Format exportiert und kann dort manuell mit einem belliebigen JSON-Editor (z.B. Visual Studio) bearbeitet werden. 

![ecscore-nwc_1](/img/content/ecscore-wsd_21.png){:class="img-responsive"}

Der Export nach OpenAPI funktioniert auch bei neu angelegten Webservices, die noch nicht zum ECS Core Server deployed wurden. Der Webservice-Aufruf funktioniert jedoch nur nach erfolgtem Deployment.

Im *OpenAPI Options Dialog* (in der Menüleiste unter *Options*) können Sie folgende Einstellungen vornehmen:


**Add generic service operations to the definition** (Default: No)

Zusätzliche generische Services werden zur Definition hinzugefügt:

- ECS Execute SAP Function: Mit diesem Service sind generische Aufrufe von SAP Funktionsbausteinen möglich. Ein Beispiel zur Service-Definition findet sich [hier](../../../erpconnect-services/ecs-de/ecs-runtime/ecs-webservices/rest-ohne-tecs/ecs-funktionsbaustein-mit-rest).
- ECS Get SAP Function Metadata: Dieser Service kann genutzt werden, um die Ein- und Ausgabeparameter des ECS Execute Function Services zu ermitteln.
- ECS Table Query: Dieser Service ermöglicht den generischen Aufruf jeder beliebigen SAP-Tabelle oder View. Ein Beispiel zur Service-Definition finden Sie [hier](../../../erpconnect-services/ecs-de/ecs-runtime/ecs-webservices/rest-ohne-tecs/ecs-tabelle-mit-rest). 
- ECS XQL Query: Mit diesem Service können spezifische XtractQL (kurz: XQL) Query-Anweisungen für schreibenden und lesenden Zugriff an das SAP System geschickt werden. Die XQL Syntax ist [hier](../../../erpconnect-services/ecs-de/ecs-runtime/ecs-xtractql/ecs-xtractql-syntax) beschrieben. 

**Use variable names as "title" parameter** (Default: No)

Mit dieser Einstellung wird eine verkürzte Bezeichnung für die Webservice-Parameter inder OpenApi Definition verwendet. Der vollständige Pfad von Request Body und Response Body wird dabei weggelassen (z.B. Result anstatt Result Result).


**Add SAP Connection parameter ("Service Application") to the definitions of operations** (Default: No)

Damit wird der Parameter *Custom Service Application*  zur OpenAPI-Definition hinzugefügt, der es ermöglicht, die SAP-Verbindung nachträglich noch in der Konsumenten-Anwendung (z.B. Nintex Workflow Cloud) zu selektieren. Wird diese Einstellung nicht verwendet, wird der im WebService Designer gewählte Service verwendet (Default, falls kein Service gewählt wurde).  

Wichtig: Beachten Sie, dass beim Export aus dem WebService Designer als Webservice-URL die Verbindungseinstellungen aus dem Connection Dialog verwendet werden ("Deployment Endpoint", Standardport: 8085). Diese Einstellungen müssen vor der Nutzung in der exportierten OpenAPI-Definition zwingend editiert werden (möglich z.B. mit notepad ++). <br>
Der Aufruf eines Webservice ist nur über den "Consumer Endpoint" (Standardport 8080) oder per Azure Relay möglich.

![ecscore-nwc_1](/img/content/ecscore-wsd_22.png){:class="img-responsive"}
  
In diesem Fall müsste der HOST-Name entsprechend angepasst werden. 

![ecscore-nwc_1](/img/content/ecscore-wsd_23.png){:class="img-responsive"}

Bei der Nutzung von Azure Relay müssten zusätzlich noch der Pfad ("basePath") auf */ecs/ws* und das Schema ("schemes") auf *https* geändert werden.  

Soll für den Aufruf explizit Basic Authentifizierung verwendet werden, dann müssen zusätzlich die Security Definitionen angepasst werden. Standardmäßig sind dort Authentifizierung via API-Key und Basic aufgeführt, der Abschnitt für API-Key muss gelöscht werden.  

![ecscore-nwc_1](/img/content/ecscore-wsd_24.png){:class="img-responsive"}


Der Import und die Nutzung einer OpenAPI-Definition in einer Konsumenten-Awendung wird für Microsoft Flow [hier](../../integration_mit_office_365/integration_mit_microsoft_flow) und für Nintex Workflow Cloud in [folgendem](../../integration_mit_nintex/nintex_workflow_cloud) Abschnitt beschrieben.  