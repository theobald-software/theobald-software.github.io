---
layout: page
title: Workflow testen
description: Workflow testen
product: erpconnect-services
parent: nintex_workflow_cloud
permalink: /:collection/:path
weight: 6
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=workflow_testen
---

Testen Sie den Workflow, indem Sie das Webformular ausfüllen und abschicken. Die URL für das Webformular erhalten Sie nach dem Publizieren des Workflows.

Beachten Sie dabei, dass die Eingabewerte im SAP-konformen Datenformat sein müssen. Falls Sie im Webservice keine Umwandlungsroutinen für die Felder Delivery Date und Cost Center hinterlegt haben, müssen Sie diese entsprechend SAP-konform eingeben ("yyyyMMdd" als Datumsformat und führende Nullen für die 10-stellige Kostenstelle).

![ecscore-nwc_13](/img/content/ecscore-nwc_13.png){:class="img-responsive"}

Sie können nun in den Workflow Instanz-Details sehen, ob der Workflow erfolgreich beendet wurde und ein Rückgabewert erzeugt wurde. Ist dies der Fall, können Sie sicher sein, dass die Bestellanforderung erfolgreich in SAP angelegt wurde. 

![ecscore-nwc_14](/img/content/ecscore-nwc_14.png){:class="img-responsive"}