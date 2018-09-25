---
layout: page
title: Neue Operation
description: Neue Operation
product: erpconnect-services
parent: einen-neuen-webservice-erstellen
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=neue-operation
---

Der WebService Designer bringt ein fertiges Beispiel für einen Webservice, welcher Kundendaten aus SAP liefert. <br>
Den Webservice können Sie im Catalog des WebService Designers finden.<br>
In diesem Szenario werden wir dieses fertige Beispiel nutzen. 

Unter dem *Operations*-Abschnitt klicken Sie auf den New-*Knopf*.<br>
Das Dialogfenster *New Operation Dialog* erscheint. Klicken Sie auf *Catalog*.

![WSD-NewOperationDialog](/img/content/WSD-NewOperationDialog.PNG){:class="img-responsive"}

Wählen Sie CustomerWebService als Webservice, dann wählen Sie die Operation *GetCustomers*.<br>
Klicken Sie auf OK.

![WSD-CatalogDialog](/img/content/WSD-CatalogDialog.PNG){:class="img-responsive"}

Klicken Sie nochmal im Fenster *New Operation Dialog* auf OK. 

![WSD-NewOperationGetCustomer](/img/content/WSD-NewOperationGetCustomer.PNG){:class="img-responsive"}

Die Operation GetCustomer wird im ECS Web Service Designer-Fenster angezeigt.<br>
Die Operation hat einen START-Punkt mit dem Namen der Operation.<br>
Danach folgt eine *EXECUTE FUNCTION*-Aktivität, welche den remotefähigen Funktionsbaustein SD_RFC_CUSTOMER_GET in SAP aufruft.<br>
In den nächsten Schritten widmen wir uns der Aktivität im Detail. <br>
Nach der EXECUTE FUNCTION-Aktivität  wird die Webservice-Operation beendet. 

![WSD-WebServiceDesigner1](/img/content/WSD-WebServiceDesigner1.PNG){:class="img-responsive"}