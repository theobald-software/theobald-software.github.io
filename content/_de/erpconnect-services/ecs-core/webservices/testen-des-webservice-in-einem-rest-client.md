---
ref: ecs-core-webservice-designer-04
layout: page
title: Den Webservice testen
description: Den Webservice testen
product: erpconnect-services
parent: webservices
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=testen-des-webservice
---

Um einen Webservice testen zu können müssen Sie diesen zunächst zum ECS Core Server deployen. 

Folgende Einstellungen werden im Dialog angezeigt:

**Web Service URL** <br>
Die Webservice URL wird angezeigt gemäß den Einstellungen, die im Connection Dialog gesetzt wurden. Die URL lässt sich im Testdialog nicht ändern. 

**Query String** <br>
Im Query String Fenster sind alle skalaren Eingabeparameter aufgelistet. 

**Request Body** <br>
Komplexe Eingabeparameter so wie Listen (List-Of) und Strukturparameter werden in diesem Fenster angezeigt. Sie müssen nicht Werte für mehr als eine Position befüllen, standardmäßig werden zwei Positionen zur Eingabe für Listen-Parameter angeboten.  

**Execute** <br>
Mit *Execute* wird der Webservice produktiv ausgeführt, es handelt sich nicht um eine Simulation.  

**Validate JSON** <br>
Mit *Validate JSON* wird der JSON string des Webservices überprüft und auf Korrektheit validiert. 

**Response Body** <br>
Im *Response Body* Fenster werden die Rückgabewerte des Webservices angezeigt. Falls Sie Outputparameter im Webservice definiert und gemapped haben, werden diese unter result angezeigt.  


Um einen Webservice zu testen, füllen Sie die Eingabeparameter mit gültigen Werten und führen den Service mit Execute aus. Beachten Sie, dass die Eingaben im SAP konformen Format sein müssen. 

![ecscore-webservices20](/img/content/ecscore-webservices20.png){:class="img-responsive"}

Wie Sie den Webservice in einem separaten REST Client testen können, ist [hier]() beschrieben. Sie können für den Webservice Aufruf in einem REST Client oder anderen Konsumenten-Apps die Einstellungen aus dem Testdialog kopieren und verwenden.  