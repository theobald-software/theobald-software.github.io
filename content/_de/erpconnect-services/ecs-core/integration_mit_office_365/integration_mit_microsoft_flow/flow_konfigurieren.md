---
ref: ecs-core-integration365-microsoft-flow-04
layout: page
title: Flow konfigurieren
description: Flow konfigurieren
product: erpconnect-services
parent: integration_mit_microsoft_flow
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=flow_konfigurieren
---

Nach dem erfolgreichen Importieren, Konfigurieren und Testen des benutzerdefinierten Konnektors, können Sie diesen in Flow verwenden.  

Aks Workflow Trigger soll Microsoft Forms verwendet werden. Mit Microsoft Forms ist es möglich, einfache Eingabe- und Umfrageformulare zu erstellen und für Desktop- und mobile Anwendungen zu teilen.  


Erstellen Sie zunächst ein Microsoft Forms Formular, das die folgenden Inputparameter als Textfelder enthält:



**Material Number** 

**Plant**

**Quantity**

**Delivery Date**

**Cost Center** 

![ecscore_flow_9](/img/content/ecscore_flow_9.png){:class="img-responsive"}

Nach Fertigstellung des Formulars klicken Sie in Microsoft Flow auf Create from blank in *My Flows* und wählen dort *Microsoft Forms - when a new response is submitted*  als Workflow-Trigger-Action aus. Wählen Sie das vorab erstellte Formular unter *Form ID** und fügen Sie Microsoft Forms - Get response details* als weiteren Schritt zum Workflow hinzu. 

Wählen Sie das Formular unter *Form ID*  fügen Sie das Feld *Response ID* als Kennung zum *Response ID* Feld hinzu. Das Feld *List of response notifications* wird automatisch über den vorherigen Schritt hinzugefügt.  

![ecscore_flow_10](/img/content/ecscore_flow_10.png){:class="img-responsive"}

Danach fügen Sie den benutzerdefinierten Konnektor zur Anlage einer BANF zum *Apply to each* Abschnitt hinzu und mappen die Rückgabewerte des Formulars auf die entsprechenden Eingabeparameter. Für die Felder DOC_TYPE (=NB) und ACCTASSCAT (=K) hinterlegen wir fixe Werte. Eine alternative Möglichkeit wäre, diese fixen Werte direkt im Webservice zuzuweisen. 

Es ist außerdem notwendig das Feld *Quantity* mit einer *int(value)* Formel ins Integer-Format zu konvertieren, da im Moment 
das Hinzufügen von Nummernfeldern in Microsoft Forms noch nicht unterstützt wird. 

Das Feld *applicationName* kann leer gelassen werden, dann wird der Default-Service für die SAP-Verbindung in ECS Core verwendet, wenn nicht explizit ein Service im REST Webservice hinzugefügt wurde.   

![ecscore_flow_11](/img/content/ecscore_flow_11.png){:class="img-responsive"}

Beachten Sie, dass dieses Beispiel mit skalaren Eingabeparametern erstellt wurde. Komplexe Parameter (Listen und Strukturen) werden 
ebenfalls unterstützt in Flow, dies erlaubt die Umsetzung von Szenarien zur Erstellung mehrerer Positionen. 
 
Als letzten Schritt fügen Sie die *Data Operation - Parse JSON Action* zum Flow hinzu. Damit wird die Rückgabe des Konnektors im Response Body nach Ergebniswerten durchsucht. Falls alles funktioniert sollte im result  Statement eine BANF-Nummer angezeigt werden.

Das folgende Schema kann in diesem Szenario zum Parsen der JSON-Rückgabe verwendet werden: 

```
{
"type": "object",
	"properties": {
		"result": {
		"type": "string"
		}
	}
}
```

![ecscore_flow_12](/img/content/ecscore_flow_12.png){:class="img-responsive"}