---
layout: page
title: Nintex-Workflow anlegen
description: Nintex-Workflow anlegen
product: erpconnect-services
parent: mit-business-connectivity-services-bcs-und-externen-listen
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=nintex_workflow-anlegen
---

Navigieren Sie nun zur Liste für die Materialanträge und wählen Sie Create a Workflow in Nintex Workflow unter List -> Workflow Settings. 

![Nintex-SP-List-Create-WF](/img/content/Nintex-SP-List-Create-WF.jpg){:class="img-responsive"}

Wählen Sie Blank als Workflow-Vorlage.<br> 
Fügen Sie die zwei Actions zum Workflow hinzu: 

- Request approval 
- Create item 

![Nintex-SP-List-Initial-WF](/img/content/Nintex-SP-List-Initial-WF.jpg){:class="img-responsive"}

Konfigurieren Sie die Request approval Action folgendermaßen:

- Approvers = SHAREPOINT2010\manager
- Approval options = Only one approval is required

![Nintex-SP-List-WF-Action-RA](/img/content/Nintex-SP-List-WF-Action-RA.jpg){:class="img-responsive"}

Speichern Sie die Request approval Action.

Konfigurieren Sie nun die Create Item Action:<br>
Addieren Sie die Felder, welche für die Anlage eines neuen Datensatzes nötig sind. Mit Hilfe des Knopfs Insert Reference rechts zu jedem Feld können Sie aus der Liste das geeignete Feld wählen.

![Nintex-SP-List-WF-Action-Create-Item](/img/content/Nintex-SP-List-WF-Action-Create-Item.jpg){:class="img-responsive"}

Speichern Sie die Action.<br>
Wählen Sie nun Workflow Settings -> Workflow Settings. 

![Nintex-SP-List-WF-Settings](/img/content/Nintex-SP-List-WF-Settings.jpg){:class="img-responsive"}

Setzen Sie die Option Start when items are created auf Yes. 

![Nintex-SP-List-WF-Settings-2](/img/content/Nintex-SP-List-WF-Settings-2.jpg){:class="img-responsive"}

Speichern und publizieren Sie nun den Workflow. 