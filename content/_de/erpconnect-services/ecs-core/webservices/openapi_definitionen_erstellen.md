---
layout: page
title: OpenAPI Definitionen erstellen
description: OpenAPI Definitionen erstellen
product: erpconnect-services
parent: webservices
permalink: /:collection/:path
weight: 5
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=openapi_definitionen_erstellen
---

Nachdem Sie einen Webservice erfolgreich erstellt und getestet haben, können Sie diesen in eine OpenAPI-Definition exportieren. OpenAPI (früher: Swagger) ist ein API Beschreibungsformat für REST APIs. Verschiedene Cloud-Anwendungen wie Nintex Workflow Cloud oder Microsoft Flow unterstützen den Import von OpenAPI Dateien als Custom Konnektoren. Der Vorteil dabei ist, dass solche Konnektoren einfacher zu konfigurieren sind als ein relativ technischer direkter Webservice Aufruf. 

Um einen Webservice in eine OpenAPI-Definition zu exportieren klicken Sie auf *Export OpenAPI Definition* in der Menüleiste. Die Definition wird zur angegeben Destination im JSON-Format exportiert und kann dort manuell mit einem belliebigen JSON-Editor (z.B. Visual Studio) bearbeitet werden. 

![ecscore-nwc_1](/img/content/ecscore-nwc_1.png){:class="img-responsive"}

Im *Edit OpenAPI Options* Menü können Sie folgende Einstellungen vornehmen:


**Add default actions to the definition**

Zusätzliche generische Services werden zur Definition hinzugefügt:

- ECS Execute SAP Function: Mit diesem Service sind generische Aufrufe von SAP Funktionsbausteinen möglich. Ein Beispiel zur Service-Definition findet sich [hier](../../ecs-de/ecs-runtime/ecs-webservices/rest-ohne-tecs/ecs-funktionsbaustein-mit-rest).
- ECS Get SAP Function Metadata: Dieser Service kann genutzt werden, um die Ein- und Ausgabeparameter des ECS Execute Function Services zu ermitteln.
- ECS Table Query: Dieser Service ermöglicht den generischen Aufruf jeder beliebigen SAP-Tabelle oder View. Ein Beispiel zur Service-Definition finden Sie [hier](../../ecs-de/ecs-runtime/ecs-webservices/rest-ohne-tecs/ecs-tabelle-mit-rest). 
- ECS XQL Query: Mit diesem Service können spezifische XtractQL (kurz: XQL) Query-Anweisungen für schreibenden und lesenden Zugriff an das SAP System geschickt werden. Die XQL Syntax ist [hier](../../ecs-de/ecs-runtime/ecs-xtractql/ecs-xtractql-syntax) beschrieben. 

**Use variable names as "title" parameter**

Mit dieser Einstellung wird eine verkürzte Bezeichnung für die Webservice-Parameter inder OpenApi Definition verwendet. Der vollständige Pfad von Request Body und Response Body wird dabei weggelassen (z.B. Result anstatt Result Result).


**Add "ServiceApplication" parameter to WebServices**

Damit wird der Parameter *Custom Service Application*  zur OpenApi Definition hinzugefügt, der es ermöglicht, die Service Applikation nachträglich noch in der Konsumenten-Anwendung (z.B. Nintex Workflow Cloud) zu selektieren. Wird diese Einstellung nicht verwendet, wird der im WebService Designer gewählte Service verwendet (Default, falls kein Service gewählt wurde).  

Der Import und die Nutzung einer OpenAPI Definition in einer Konsumenten-Awendung wird für Microsoft Flow hier und für Nintex Workflow Cloud in folgendem Abschnitt beschrieben.  