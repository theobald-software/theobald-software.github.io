---
layout: page
title: Synchrones Senden und Statusabfrage
description: Synchrones Senden und Statusabfrage
product: erpconnect
parent: idocs-senden-und-empfangen
permalink: /:collection/:path
weight: 5
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=synchrones-senden-und-statusabfrage
---

**Sie finden den Code dieses Beispiels im ERPConnect-Installationsverzeichnis im Verzeichnis SendOrderIdoc** 


In den letzten Beispielen haben wir die zu sendenden IDocs immer asynchron an das SAP-System versendet. Das hat den Vorteil, dass das Sendeprogramm mit dem Sendevorgang sehr schnell fertig ist, da die rechenzeitintensive Verarbeitung im Hintergrund stattfindet. Nachteil dieser Vorgehensweise ist, dass das Sendeprogramm keine Aussage darüber treffen kann, ob die *IDoc*-Verarbeitung im SAP auf einen Fehler gelaufen ist oder nicht. Aus diesem Grund stellt ERPConnect bzw. die Idoc-Klasse zwei Funktionen zur Verfügung: *SendAndWait* anstelle von Send wartet, bis das IDoc im SAP prozessiert ist. Ab diesem Zeitpunkt ist auch das Feld *IDoc.DOCNUM* (also die Idocnummer) gefüllt. Nun lässt sich mit Hilfe von *GetCurrentStatus* ein *IdocStatus*-Objekt abrufen, das eventuelle Erfolgs- oder Fehlermeldungen enthält.

Der folgende Code basiert auf dem OrderIdoc-Beispiel aus Kapitel [Ein ORDER-IDoc versenden](../idocs-senden-und-empfangen/ein-order-idoc-versenden)  und zeigt das synchrone Senden und die Statusabfrage:

<details>
<summary>[C#]</summary>
{% highlight csharp %}
idoc.SendAndWait(); 
IdocStatus status = idoc.GetCurrentStatus(); 
MessageBox.Show(status.Status + " -> " + status.Description);
{% endhighlight %}
</details>

![SAP-Send-IDoc-003](/img/content/SAP-Send-IDoc-003.png){:class="img-responsive"}
