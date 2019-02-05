---
ref: ecscore-wd-creating-new-web-service-01
layout: page
title: Neue Operation
description: Neue Operation
product: ecs-core
parent: einen_neuen_webservice_erstellen
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ECS-Core-DE/default.aspx?pageid=neue-operation
---

Der WebService Designer liefert über den Webservice-Katalog ein fertiges Beispiel für einen Webservice, der Kundendaten aus SAP liefert. <br>
In diesem Szenario werden wir dieses fertige Beispiel nutzen. 

Unter dem *Operations*-Abschnitt klicken Sie auf den *Create a new operation*-Knopf.<br>
Das Dialogfenster *New Operation Dialog* erscheint. Klicken Sie auf *Catalog*. <br>

Wählen Sie *SAPCustomerWebService* als Webservice, dann wählen Sie die Operation *GetCustomers*.<br>
Klicken Sie auf OK.

![WSD-CatalogDialog](/img/content/ecscore-wsd_27.png){:class="img-responsive"}

Klicken Sie nochmal im Fenster *New Operation Dialog* auf OK. 

Die Operation GetCustomer wird im ECS Web Service Designer-Fenster angezeigt.<br>
Die Operation hat einen START-Punkt mit dem Namen der Operation.<br>
Danach folgt eine *EXECUTE FUNCTION*-Aktivität, welche den remotefähigen Funktionsbaustein SD_RFC_CUSTOMER_GET in SAP aufruft.<br>
In den nächsten Schritten widmen wir uns der Aktivität im Detail. <br>
Nach der EXECUTE FUNCTION-Aktivität  wird die Webservice-Operation beendet. 

![WSD-OperationDialog](/img/content/WSD-WebServiceDesigner1.PNG){:class="img-responsive"}