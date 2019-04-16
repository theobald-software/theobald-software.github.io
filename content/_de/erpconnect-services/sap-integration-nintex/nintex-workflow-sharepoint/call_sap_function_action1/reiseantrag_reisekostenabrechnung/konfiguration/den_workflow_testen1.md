---
ref: ecs-sin-nis-tr-configuring-the-solution-03
layout: page
title: Die Workflows testen
description: Die Workflows testen
product: erpconnect-services
parent: konfiguration
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=den_workflow_testen1
---

Nachdem Sie die Workflows eingerichtet und in Ihrer Systemumgebung konfiguriert haben, können und sollten Sie diese testen.
Stellen Sie mit einem User, für den ein Vorgesetzter im Active Directory hinterlegt ist, zunächst einen Reiseantrag.

Wichtig: 

- Der Vorgesetzte muss in der Liste Approver mit E-Mail-Adresse und entsprechendem Genehmigungslimit hinterlegt sein.
- Der SAP User, für den Anträge erfasst werden, muss für die Reisekostenabrechnung entsprechend eingerichtet sein (z.B. Infotyp 0017 vorhanden).
- Tests sollten Sie nicht auf Ihrem Produktivsystem durchführen.

![ECS-Nintex-WorkflowTest1](/img/content/ECS-Nintex-WorkflowTest1.png){:class="img-responsive"}

Der Workflow startet automatisch und der Antrag wird zur Genehmigung an den Vorgesetzten übermittelt. 

![ECS-Nintex-WorkflowTest2](/img/content/ECS-Nintex-WorkflowTest2.png){:class="img-responsive"}

Genehmigen Sie den Antrag. 

![ECS-Nintex-WorkflowTest3](/img/content/ECS-Nintex-WorkflowTest3.png){:class="img-responsive"}

Der Workflow ist erfolgreich beendet und es wird eine Reisenummer in SAP und in der SharePoint-Liste erzeugt. 

![ECS-Nintex-WorkflowTest4](/img/content/ECS-Nintex-WorkflowTest4.png){:class="img-responsive"}

Mit Abschluss des Reiseantrags wird in der SharePoint-Liste *Travel Expenses* ein neues Item erzeugt.

![ECS-Nintex-WorkflowTest5](/img/content/ECS-Nintex-WorkflowTest5.png){:class="img-responsive"}

Bearbeiten Sie das Item und erfassen Sie Reisekosten im Nintex Forms Formular. Hinweis: Falls Sie eine abweichende Kontierung im Reiseantrag angegeben hatten, 
muss diese hier erneut aufgegeben werden. 

![ECS-Nintex-WorkflowTest6](/img/content/ECS-Nintex-WorkflowTest6.png){:class="img-responsive"}

Der Workflow startet automatisch und der Antrag wird zur Genehmigung an den Vorgesetzten übermittelt. 

![ECS-Nintex-WorkflowTest7](/img/content/ECS-Nintex-WorkflowTest7.png){:class="img-responsive"}

Genehmigen Sie den Antrag mit dem User des zuständigen Managers und der Workflow wird damit beendet. 

![ECS-Nintex-WorkflowTest8](/img/content/ECS-Nintex-WorkflowTest8.png){:class="img-responsive"}

Im SAP-System können Sie anschließend überprüfen, ob alle Daten korrekt verbucht wurden. <br>
Öffnen Sie dazu den Travel Expense Manager mit der Transaktion PR05 und rufen Sie die entsprechende Reisenummer auf.<br>
Alle Angaben aus dem Reiseantrag/der Reisekostenabrechnung im SharePoint-Szenario sollten hier aufgeführt sein.

![ECS-Nintex-WorkflowTest9](/img/content/ECS-Nintex-WorkflowTest9.png){:class="img-responsive"}
