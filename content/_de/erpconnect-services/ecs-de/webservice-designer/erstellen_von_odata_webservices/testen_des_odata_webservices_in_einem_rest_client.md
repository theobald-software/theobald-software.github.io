---
layout: page
title: Testen des OData Webservices in einem REST-Client
description: Testen des OData Webservices in einem REST-Client
product: erpconnect-services
parent: erstellen_von_odata_webservices
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=testen_des_odata_webservices_in_einem_rest_client
---

Um mit dem Webservice weiter zu arbeiten und diesen beispielsweise in einen SharePoint-Workflow einzubinden, empfiehlt es sich, zu überprüfen, ob der Webservice aufrufbar und voll funktionstüchtig ist. Sehr komfortabel geht dies mit einem REST-Client. Grundsätzlich können Sie jeden beliebigen Open Source-REST-Client verwenden, der HTTP-Methoden verarbeiten kann und das Setzen von Header-Werten zulässt.

Geben Sie die Webservice-URL in die REST-Client Kommandozeile ein und ersetzen Sie die Endung *$metadata* mit Items. Dies ist der Befehl, um mit der HTTP-Methode *POST* Listenelemente zu erstellen.

Grundsätzliches zu den CRUD-Operationen für Listen und Listenelemente mit der SharePoint2013 REST-Schnittstelle finden Sie z.B. hier: <br>
[https://msdn.microsoft.com/de-de/library/office/dn292552.aspx](https://msdn.microsoft.com/de-de/library/office/dn292552.aspx)

![WSD-OData-Example26](/img/content/WSD-OData-Example26.png){:class="img-responsive"}

![WSD-OData-Example27](/img/content/WSD-OData-Example27.png){:class="img-responsive"}

Wählen Sie die HTTP-Methode POST im REST-Client und fügen Sie folgende Header-Werte hinzu. 

**Content-Type:** application/json

**Accept:** application/json

**Authorization:** Basic > Der Header wird über den *Basic Auth* Karteireiter erzeugt. Basic Authentication muss dafür in den Internet Information Services (IIS) aktiviert sein.

![WSD-OData-Example28](/img/content/WSD-OData-Example28.png){:class="img-responsive"}

Im Request Body müssen die Parameter hinterlegt werden, die mit dem Webservice übertragen werden sollen. Wählen Sie für jeden im Webservice definierten Parameter (MATERIAL, DOC_TYPE, etc.) sinnvolle Eingabewerte.

Beachten Sie dabei unbedingt die OData Parameter-Konventionen, sonst erhalten beim Senden des Webservices einen Fehler: [http://www.odata.org/documentation/odata-version-2-0/overview/](http://www.odata.org/documentation/odata-version-2-0/overview/)

![WSD-OData-Example29](/img/content/WSD-OData-Example29.png){:class="img-responsive"}

Führen Sie anschließend den Webservice aus. Wenn alles korrekt konfiguriert ist, werden die geposteten Daten im Result-Fenster angezeigt. 

![WSD-OData-Example31](/img/content/WSD-OData-Example31.png){:class="img-responsive"}

Auf SAP-Seite kann anschließend überprüft werden, ob die Bestellanforderung angelegt wurde (Tabelle EBAN).

![WSD-OData-Example32_1](/img/content/WSD-OData-Example32_1.png){:class="img-responsive"}  
