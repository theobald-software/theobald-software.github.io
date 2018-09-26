---
layout: page
title: Flow testen
description: Flow testen
product: erpconnect-services
parent: integration_mit_microsoft_flow
permalink: /:collection/:path
weight: 5
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=flow_testen
---

Sie können den Flow testen, indem Sie das Start-Event auslösen. Geben Sie gültige Eingabewerte in das Microsoft Forms Formular ein und schicken dieses ab.

Beachten Sie dabei, dass die Eingabewerte im SAP-konformen Datenformat sein müssen. Falls Sie im Webservice keine Umwandlungsroutinen für die Felder Delivery Date und Cost Center hinterlegt haben, müssen Sie diese entsprechend SAP-konform eingeben ("yyyyMMdd" als Datumsformat und führende Nullen für die 10-stellige Kostenstelle).

![ecscore_flow_6](/img/content/ecscore_flow_6.png){:class="img-responsive"}

Sie können in der Workflow-Historie nachschauen, ob der Flow erfolgreich beendet und ob eine BANF-Nummer in SAP erstellt wurde.  

![ecscore_flow_13](/img/content/ecscore_flow_13.png){:class="img-responsive"}
