---
ref: ecs-core-administration-settings-azure_relay-02
layout: page
title: Azure Relay Configuration
description: Azure Relay Configuration
product: erpconnect-services
parent: azurerelay
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=ecscore-azure_relay_configuration
---

Beginnen Sie mit der Azure Relay Konfiguration, indem Sie eine neue Relay Instanz im Azure Management Portal anlegen (>*create a resource*)

![ecscore-azurerelay_1](/img/content/ecscore-azurerelay_1.png){:class="img-responsive"}

Beachten Sie, dass es alternative Methoden gibt, um Azure Ressourcen anzulegen und zu verwalten (z.B. mit Powershell, falls Sie diesen Prozess automatisieren möchten).

Klicken Sie anschließend auf die neu angelegte Ressource. Der Connection String, der für die Azure Relay Registrierung mit ECS Core erforderlich ist, findet sich unter *SharedAccessPolicies* und *RootManagedShared AccessKey*.
Kopieren Sie den kompletten Connection String (Endpoint=sb://...). 

![ecscore-azurerelay_2](/img/content/ecscore-azurerelay_2.png){:class="img-responsive"}

Gehen Sie auf dem ECS Core Management Dashboard zu *Settings>Azure Relay* und führen mit *Add Relay Registration* eine neue Registrierung durch.
Fügen Sie dafür den kopierten Connection String in das Feld ein und sichern Sie den Eintrag mit *Add Azure Relay Registration*.

![ecscore-azurerelay_3](/img/content/ecscore-azurerelay_3.jpg){:class="img-responsive"}

Wichtig: Nach dem Hinzufügen einer eneu nAzure Relay Registrierung ist immer das Recyclen der ECS Core Application Pools in den IIS erforderlich. Sie können dies manuell vornehmen oder auf dem Management Dashboard unter *Settings>System Operations* <br
mit der Funktion *Clear consumer website caches*.

Im Azure Management Portal sollte nun das Relay mit vorgenommenen Registrierung aufgeführt sein.

![ecscore-azurerelay_4](/img/content/ecscore-4.jpg){:class="img-responsive"}




 
