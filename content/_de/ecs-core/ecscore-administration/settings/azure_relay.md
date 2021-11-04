---
ref: ecs-core-administration-settings-04
layout: page
title: Azure Relay
description: Azure Relay
product: ecs-core
parent: settings
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /ECS-Core-DE/default.aspx?pageid=azure_relay
---

*Azure Service Bus* ist ein generisches Cloud-basiertes Messaging-System zur Verbindung von Anwendungen, Services und Geräten - egal wo diese sich befinden. <br>
**Azure Relay** heißt ein Dienst, der auf dem Service Bus aufsetzt und mit dem es möglich ist, On-Premises Webservices durch die Firewall in die Cloud zu tunneln. 

Mit der Hilfe von Azure Service Bus und dem Azure Relay können Sie eine sichere System-Umgebung einrichten, entkoppelt von Ihrem Geschäftssystem mit ECS Core und SAP.
Azure Relay verbindet sich dabei per TCP zu einem dedizierten Server und stellt einen Endpunkt bereit, der sichtbar ist für Client-Anwendungen. Dieser Endpunkt kann für den Datenaustausch mit ECS Core und Ihrem SAP System genutzt werden kann. 
Der Vorteil einer solchen Systemarchitektur liegt darin, dass aus der Cloud keine Ports zum On-Premises installierten SAP System geöffnet werden müssen. 

Wichtig: Um diese Funktionalität zu nutzen ist eine Standard Tier Subscription für Microsoft Azure notwendig, die nicht in ECS Core enthalten ist.

Die Einrichtung von *Azure Relay* mit ECS Core funktioniert folgendermaßen:

Beginnen Sie damit, ein neues Relay als Ressource im Azure Management Portal anzulegen (>*create a resource*)

![ecscore-azurerelay_1](/img/content/ecscore-azurerelay_1.png){:class="img-responsive"}

Beachten Sie, dass es alternative Methoden gibt, um Azure Ressourcen anzulegen und zu verwalten (z.B. mit Powershell, falls Sie diesen Prozess automatisieren möchten).

Klicken Sie anschließend auf die neu angelegte Ressource. Der Connection String, der für die Azure Relay Registrierung mit ECS Core erforderlich ist, findet sich unter *SharedAccessPolicies* und *RootManagedShared AccessKey*.
Kopieren Sie den kompletten *Primary Connection String* (Endpoint=sb://...). 

![ecscore-azurerelay_2](/img/content/ecscore-azurerelay_2.png){:class="img-responsive"}

Gehen Sie auf der ECS Core Management Site zu *Settings>Azure Relay* und führen mit *Add Relay Registration* eine neue Registrierung durch.
Fügen Sie dafür den kopierten Connection String in das Feld ein und sichern Sie den Eintrag mit *Add Azure Relay Registration*.

![ecscore-azurerelay_3](/img/content/ecscore-azurerelay_3.png){:class="img-responsive"}

Wichtig: Nach dem Hinzufügen einer neuen Azure Relay Registrierung ist zwingend das Recyclen der ECS Core Application Pools in den IIS erforderlich. Sie können dies manuell vornehmen oder auf der Management Site unter *Settings>System Operations* <br>
mit der Funktion *Clear consumer website caches*.

Im Azure Management Portal sollte nun das Relay mit vorgenommenen Registrierung aufgeführt sein.

![ecscore-azurerelay_4](/img/content/ecscore-azurerelay_4.png){:class="img-responsive"}

 

