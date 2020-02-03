---
ref: ecs-runtime-sap-connection-03
layout: page
title: SAP-Anmeldedaten verwalten
description: SAP-Anmeldedaten verwalten
product: erpconnect-services
parent: ecs-sap-verbindung
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=ecs-sap-anmeldedaten-verwalten
---

ERPConnect Services liefert einen Webpart, welcher den SharePoint-Benutzern ermöglicht, ihre SAP-Anmeldedaten selbständig in den SharePoint Secure Store Services zu pflegen.<br>
Der SharePoint-User braucht nicht im SS explizit angelegt zu werden. Er wird beim ersten Anmeldeversuch automatisch angelegt. 

Die Lösung ERPConnectServices.WebParts.wsp wird im Installationsordner abgelegt (z.B. C:\Program Files\ERPConnect Services). 

**Lösung installieren** 

Im ersten Schritt muss die Lösung auf SharePoint installiert und aktiviert werden. Im folgenden zeigen wir die nötigen Schritte mit der SharePoint 2010 Management Shell-Konsole:

add-spsolution -LiteralPath "C:\Program Files\ERPConnect Services\ERPConnectServices.WebParts.wsp"<br>
install-spsolution -WebApplication http://juliet2/ -Identity erpconnectservices.webparts.wsp -GACDeployment<br>
install-spfeature -path ERPConnectServices.WebParts_Feature<br>
enable-spfeature -identity ERPConnectServices.WebParts_Feature -URL http://juliet2


**Zur Nachprüfung:**

In der Zentraladministration wurde die Lösung installiert (unter System Settings -> Manage farm solutions). 

Der folgende Ordner wurde angelegt <br>
C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\14\TEMPLATE\FEATURES\ERPConnectServices.WebParts_Feature 

Das Feature ist nun unter den Site Collection Features ihrer Webanwendung aktiviert ist (Site Settings -> Site Collection Features).

**Webpart zu einer bestehende Seite hinzufügen**

Nun wollen wir den Webpart zu einer bestehenden Page hinzufügen. 

![ECS-SS-Manager-Webpart-01](/img/content/ECS-SS-Manager-Webpart-01.png){:class="img-responsive"}

Wählen Sie ERPConnect Services -> Secure Store Web Part. Klicken Sie auf Add.

![ECS-SS-Manager-Webpart-02](/img/content/ECS-SS-Manager-Webpart-02.png){:class="img-responsive"}

Wählen Sie Edit Web part, um zu den Einstellungen zu gelangen.

![ECS-SS-Manager-Webpart-03](/img/content/ECS-SS-Manager-Webpart-03.png){:class="img-responsive"}

Wählen Sie die entsprechende Secure Store Anwendung aus der Liste, für welche die SharePoint-Benutzer ihre SAP-Anmeldedaten pflegen sollen.

![ECS-SS-Manager-Webpart-04](/img/content/ECS-SS-Manager-Webpart-04.png){:class="img-responsive"}

Klicken Sie auf Ok. Dann klicken Sie auf Save and Close.

![ECS-SS-Manager-Webpart-05](/img/content/ECS-SS-Manager-Webpart-05.png){:class="img-responsive"}

Nun kann der Webpart verwendet werden. Geben Sie den SAP-Benutzernamen und das Kennwort ein. Klicken Sie auf Add.

![ECS-SS-Manager-Webpart-06](/img/content/ECS-SS-Manager-Webpart-06.png){:class="img-responsive"}

Die SAP-Anmeldedaten wurden in der enstprechenden Secure Store-Anwendung gespeichert und dem aktuellen SharePoint-Benutzer zugewiesen.

![ECS-SS-Manager-Webpart-07](/img/content/ECS-SS-Manager-Webpart-07.png){:class="img-responsive"}

Hinweis über die Zugriffsrechte auf den Secure Store Service

Der SharePoint-Benutzer braucht mindestens die Berechtigung *Manage Target Application*, um diesen Webpart für die Pflege der SAP-Zugangsdaten verwenden zu können. 

Die Berechtigung kann in der SharePoint-Zentraladministration gesetzt werden:
- Gehen Sie zu *Application Management*
- Klicken Sie auf *Manage Service Applications*
- Klicken Sie leicht auf den Link *Secure Store Application* um die Zeile hervorzuheben.  
- Klicken Sie auf den Knopf *Administrators* im Menü und fügen Sie den Benutzer oder die Benutzergruppe zum Feld hinzu. 
- Wählen Sie die Option *Manage target applications*.