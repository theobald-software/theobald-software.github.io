---
layout: page
title: Importieren der Nintex Forms Formulare
description: Importieren der Nintex Forms Formulare
product: erpconnect-services
parent: voraussetzungen_und_installation
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=importieren_der_nintex_forms_formulare
---

Nachdem Sie die SharePoint Listen angelegt haben importieren Sie als nächstes die Nintex Forms Formulare, über welche die Anwender dann ihre Eingaben vornehmen.

Wählen Sie zunächst die SharePoint-Liste **Travel Request** aus und klicken Sie im List-Menü auf *Nintex Forms>Customize the Item Form*. 
Hier können Sie über den *Import* Button dann die Nintex Form-Datei *TravelRequestFormSAP.xml*  importieren.

![ECS-Nintex-TravelScenarios5](/img/content/ECS-Nintex-TravelScenarios5.png){:class="img-responsive"}

![ECS-Nintex-TravelScenarios6](/img/content/ECS-Nintex-TravelScenarios6.png){:class="img-responsive"}

![ECS-Nintex-TravelScenarios7](/img/content/ECS-Nintex-TravelScenarios7.png){:class="img-responsive"}

Gehen Sie genauso bei der SharePoint-Liste **Travel Expenses** vor und importieren Sie die Nintex Forms-Datei *ExpenseReportFormSAP.xml*

![ECS-Nintex-TravelScenarios8](/img/content/ECS-Nintex-TravelScenarios8.png){:class="img-responsive"}

Beachten Sie Folgendes beim Importieren der Nintex Forms-Dateien:

- Eventuell müssen nach dem Import einige Felder neu mit den entsprechenden SharePoint Listen-Spalten verknüpft werden. Gehen Sie dafür in die Control Settings der jeweiligen Control und wählen in der Dropdown-Liste neben Connected To die entsprechende passende Spalte aus (z.B. Spalte Travel Destination für die gleichnamige Single Line Textbox)

![ECS-Nintex-TravelScenarios9](/img/content/ECS-Nintex-TravelScenarios9.png){:class="img-responsive"}
