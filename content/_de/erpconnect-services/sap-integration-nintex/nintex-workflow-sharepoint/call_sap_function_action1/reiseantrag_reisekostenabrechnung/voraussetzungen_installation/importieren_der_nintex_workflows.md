---
ref: ecs-sin-nis-tr-installing-the-solution-04
layout: page
title: Importieren der Nintex Workflows
description: Importieren der Nintex Workflows
product: erpconnect-services
parent: voraussetzungen_installation
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=importieren_der_nintex_workflows
---

Nachdem Sie die SharePoint-Listen aufgebaut, die Nintex-Forms Formulare importiert und die User Defined Actions installiert haben, können Sie nun die List-Workflows zu den entsprechenden SharePoint-Listen importieren. 

Öffnen Sie zunächst die SharePoint Liste *Travel Requests* und gehen im List  Menü auf *Workflow Settings>Create a Workflow in Nintex Workflow*.

![ECS-Nintex-TravelScenarios22](/img/content/ECS-Nintex-TravelScenarios22.png){:class="img-responsive"}

Importieren Sie im Workflow Designer über den *Import* Button die Datei *Review_Travel_Request_SAP.nwf* 

![ECS-Nintex-TravelScenarios23](/img/content/ECS-Nintex-TravelScenarios23.png){:class="img-responsive"}

Anschließend können Sie den Workflow publizieren. 

![ECS-Nintex-TravelScenarios24](/img/content/ECS-Nintex-TravelScenarios24.png){:class="img-responsive"}

Es kann unter Umständen sein, dass sich der Workflow nicht gleich publizieren lässt, da sich einige Workflow-Eigenschaften nicht importieren ließen oder wichtige Hintergrundeigenschaften wie ein angebundenes Active Directory fehlen. In dem Fall müssen zunächst die entsprechenden Konfigurationen vorgenommen werden. Solange die benötigten Konfigurationen nicht stimmen, kann der Workflow nur gesichert und nicht publiziert werden.               

Öffnen Sie anschließend die SharePoint-Liste Travel Expenses und importieren Sie nach der gleichen Vorgehensweise die Workflow-Datei *Create_New_Expense_Report_SAP.nwf*<br>
Auch hier kann es sein, dass erst Konfigurationen vorgenommen werden müssen, damit sich der Workflow publizieren lässt. 