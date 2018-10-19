---
ref: ecs-extending-a-solution-in-visual-studio-05
layout: page
title: Erstellen einer benutzerdefinierten Aktion in SharePoint
description: Erstellen einer benutzerdefinierten Aktion in SharePoint
product: erpconnect-services
parent: bcs-erweitern-einer-visual-studio-loesung
permalink: /:collection/:path
weight: 5
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=bcs-erstellen-einer-benutzerdefinierten-aktion-in-sharepoint
---

Mit der erstellten Seite und dem Web Part zum Freigeben einer Bestellung können Sie jetzt eine benutzerdefinierte Aktion für die Purchase Order Entität definieren.


Öffnen Sie die SharePoint 2010 Central Administration und navigieren Sie zu *Application Management -> Manage Service Applications*.

Wählen Sie *Business Data Connectivity Service* und betätigen Sie *Manage*.

Öffnen Sie den *External Content Type* 'PurchaseOrders' den Sie zuvor aus Visual Studio übertragen haben.

Scrollen Sie in der Eigenschaftenliste herunter, dort sollte im externen Content Typ kein Eintrag für Actions definiert sein.

![BCS-PO-VS-Custom-Action-01](/img/content/BCS-PO-VS-Custom-Action-01.png){:class="img-responsive"}

Wählen sie auf dem Ribbon die *Add* Schaltfläche in der *Actions* Gruppe.

Auf der *Add Action* Seite geben Sie die nachfolgenden Werte ein:

**Action Name** -	 Release<br>
**Navigate to this URL** -	  //SitePages/ReleasePO.aspx?poid={0">http:////SitePages/ReleasePO.aspx?poid={0}<br>
**Parameter Property** -	 0 PurchaseOrder<br>
**Label** -	 lbl_Message

![BCS-PO-VS-Custom-Action-02](/img/content/BCS-PO-VS-Custom-Action-02.png){:class="img-responsive"}

Scrollen sie herunter und betätigen Sie *OK*, um die Aktion hinzuzufügen. Sie sollten nun den externen Content Type unter *Actions* gelistet sehen.


**Erstellen der externen Liste und überprüfen der Ergebnisse**

Im letzten Schritt erstellen Sie die externe Liste 'Purchase Orders' und überprüfen, ob die benutzerdefinierte Aktion für die Freigabe der Bestellung aktiviert ist und funktioniert.

Navigieren Sie zu der Seite, auf der Sie die externe Liste 'Purchase Orders' einbinden wollen.

Wählen Sie aus dem Site Actions Menü den Eintrag More Options.

Im *Create* Dialogfenster filtern Sie nach *List* und wählen *External List*. Betätigen Sie die *Create* Schaltfläche.

![BCS-PO-VS-External-List-01](/img/content/BCS-PO-VS-External-List-01.png){:class="img-responsive"}

Im *New External List* Fenster geben Sie die nachfolgenden Werte ein:

**Name** -	Purchase Orders.<br>
**Description** -	Purchase Orders for Release.<br>
**External Content Types** -	 Wählen Sie den externen Content Type für die Bestellungen, die sie zuvor mit Visual Studio übertragen haben.

Betätigen Sie Create.

![BCS-PO-VS-External-List-02](/img/content/BCS-PO-VS-External-List-02.png){:class="img-responsive"}

Die externe Liste wird nun im Browser angezeigt. Sie sollten die 'Release' Aktion im Menü für das PurchaseOrder Item finden.

![BCS-PO-VS-External-List-03](/img/content/BCS-PO-VS-External-List-03.png){:class="img-responsive"}

Wenn Sie die 'Release' Aktion ausführen, werden Sie zu der zuvor erstellten Seite weitergeleitet. Die Seite zeigt die Bestelldetails an und ermöglicht es die Bestellung freizugeben.

![BCS-PO-VS-External-List-04](/img/content/BCS-PO-VS-External-List-04.png){:class="img-responsive"}

