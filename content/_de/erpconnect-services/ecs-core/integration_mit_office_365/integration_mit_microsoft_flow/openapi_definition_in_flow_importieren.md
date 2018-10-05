---
layout: page
title: OpenAPI Definition in Flow importieren
description: OpenAPI Definition in Flow importieren
product: erpconnect-services
parent: integration_mit_microsoft_flow
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=openapi_definition_in_flow_importieren
---

Um die OpenAPI Definition in Flow zu importieren loggen Sie sich in Ihren Microsoft Flow Account ein und klicken auf *Custom Connectors*  in den Account Einstellungen, um einen neuen benutzerdefinierten Konnektor anzulegen. Beachten Sie, dass die Erstellung von benutzerdefinierten Konnektoren nur in einem Premium Account enthalten ist.  

Klicken Sie auf *Create Custom Connector* und selektieren Sie *Import an OpenAPI* file.

Definieren Sie einen Titel für Ihren benutzerdefinierten Konnektor und wählen Sie die vorab erstellte OpenAPI Definition aus

![ecscore_flow_1](/img/content/ecscore_flow_1.png){:class="img-responsive"}

Die Host URL wird automatisch von den Verbindungseinstellungen übernommen, die im WebService Designer definiert und in die OpenAPI Definition exportiert wurden. Optional können Sie einen individuellen Icon für den Konnektor hochladen. 

![ecscore_flow_2](/img/content/ecscore_flow_2.png){:class="img-responsive"}

Klicken Sie auf *Continue*. In den *Security* Einstellungen müssen Sie den Authentifizierungstyp auswählen. Wir empfehlen die Authentifizierung mit einem API Key. Die übrigen Einstellungen können Sie so beibehalten.

![ecscore_flow_3](/img/content/ecscore_flow_3.png){:class="img-responsive"}

Im *Definition* Abschnitt erhalten Sie eine Übersicht der im Konnektor enthaltenen Aktionen, der Request Eigenschaften (Request URL, Query-Parameter, etc.) und die Form der Rückgabe. Darüber hinaus werden die einzelnen Aktionen validiert, was dabei hilft, potentielle Fehler zu identifizieren. Grundsätzlich muss auf dieser Seite nichts geändert werden. Unter *Actions* werden neben den individuell erstellten Webservice Operationen auch zusätzliche generische Services aufgelistet, falls im Designer die Option *Add default actions to the definition* option in den OpenAPI Einstellungen gewählt wurde.    

![ecscore_flow_7](/img/content/ecscore_flow_7.png){:class="img-responsive"}

Bevor Sie den Konnektor testen können, müssen Sie diesen generieren. Nur wenn alle Validierungen erfolgreich sind, gelingt die Erstellung. 

Im *Test* Abschnitt kann die Funktionalität des Custom Konnektors getestet werden. Dafür muss zunächst eine Verbindung angelegt werden. Klicken Sie auf *New connection* und geben Sie einen gültigen API Key in der folgenden Form ein: <br>
APIKEY [BASE64 encoded ECS Core API Key]

Beispiel: APIKEY QjGCMTMxMjE0MTA3NDhCMUE5MUNZTzAyQjBDRTg1OUP= (vgl. *Verbindungseinstellungen mit API Key* in [Webservice Authentifizierung](../../webservices/webservice_auhtentifizierung)). 

![ecscore_flow_4](/img/content/ecscore_flow_4.png){:class="img-responsive"}
Unter Umständen müssen Sie auf den *Refresh* Button klicken um die neu erstellte Verbindung zu sehen.  
Danach geben Sie bitte gültige Werte für die definierten Eingabeparameter ein und klicken Sie auf *Test* operation. 

![ecscore_flow_5](/img/content/ecscore_flow_5.png){:class="img-responsive"}

Sie sollten als Rückgabewert im Response Fenster die erzeugte BANF Nummer aus SAP angezeigt bekommen. Ist dies der Fall und werden keine Fehlermeldungen angezeigt, dann funktioniert der Konnektor und kann in Flow verwendet werden. 

![ecscore_flow_8](/img/content/ecscore_flow_8.png){:class="img-responsive"}

![](/img/content/.png){:class="img-responsive"}

![](/img/content/.png){:class="img-responsive"}