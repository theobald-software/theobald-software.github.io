---
ref: ecs-core-webservice-designer-06
layout: page
title: Den Webservice testen
description: Den Webservice testen
product: ecs-core
parent: webservices
permalink: /:collection/:path
weight: 6
lang: de_DE
old_url: /ECS-Core-DE/default.aspx?pageid=testen-des-webservice
---

Um einen Webservice testen zu können, müssen Sie diesen zunächst zum ECS Core Server deployen. 
Um das Testen des Service in einem REST-Client zu erleichtern, können die Einstellungen zuvor im *Web Service Test Data Generation Dialog* nachgeschlagen und von dort kopiert werden. 

![ecscore-webservicetestdialog](/img/content/ecscore-wsd_20.png){:class="img-responsive"}

Folgende Einstellungen werden im Dialog angezeigt:

**Operation Endpoint with URL parameters** <br>
Die Webservice URL mit Dummy-Port 9999 wird angezeigt. Falls der Service skalare Eingabeparameter enthält, sind diese direkt in der URL aufgeführt. <br>
Mit *Copy to clipboard* wird die Webservice-URL in die Zwischenablage kopiert. 

**Query String** <br>
Im Query String Fenster sind alle skalaren Eingabeparameter aufgelistet. 

**Request Body** <br>
Komplexe Eingabeparameter so wie Listen (List-Of) und Strukturparameter werden in diesem Fenster angezeigt. Standardmäßig werden zwei Positionen zur Eingabe für Listen-Parameter angeboten. <br> 
Mit *Copy to clipboard* wird der Inhalt des Request Bodies in die Zwischenablage kopiert. 

**Validate JSON** <br>
Mit *Validate JSON* wird der JSON string des Webservices überprüft und auf Korrektheit validiert. 
