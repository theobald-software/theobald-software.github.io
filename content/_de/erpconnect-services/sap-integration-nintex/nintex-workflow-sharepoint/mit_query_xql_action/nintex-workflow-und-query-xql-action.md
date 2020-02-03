---
ref: ecs-sin-nis-using-query-xql-action-01
layout: page
title: Nintex-Workflow und Query XQL-Action
description: Nintex-Workflow und Query XQL-Action
product: erpconnect-services
parent: mit_query_xql_action
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=nintex-workflow-und-query-xql-action
---

In diesem Abschnitt werden wir den bestehenden Workflow änderun und die Query XQL Action verwenden, um ein Material im SAP anzulegen. 

Navigieren Sie zur Liste Material Maintenance Requests und wählen Sie Workflow Settings -> Manage Workflows with Nintex Workflow.

![Nintex-Material-XQL-WF1](/img/content/Nintex-Material-XQL-WF1.png){:class="img-responsive"}

Wählen Sie den Product Approval Workflow, um ihn zu bearbeiten.

![Nintex-Material-XQL-WF2](/img/content/Nintex-Material-XQL-WF2.png){:class="img-responsive"}

Löschen (oder deaktivieren) Sie die Call web service Activity.<br>
Fügen Sie eine Query XQL Action wie unten beschrieben ein. 

![Nintex-Material-XQL-WF3](/img/content/Nintex-Material-XQL-WF3.png){:class="img-responsive"}

Konfigurieren Sie die Query XQL Activity:<br>
**Application Name** = (ERPConnect Services Application that is configured in your SharePoint system)<br>
**XQLQuery** = (XQL Query to create the material record in SAP)<br>
In diesem Beispiel: EXECUTE FUNCTION 'Z_ECS_MATERIAL_MAINTAIN'<br>
EXPORTING MATERIALBASE-MATNR='{ItemProperty:Material_x0020_Number}', MATERIALBASE-MATDESC1='{ItemProperty:Material_x0020_Name}', MATERIALBASE-MATL_TYPE='{ItemProperty:MaterialType}', MATERIALBASE-IND_SECTOR='{ItemProperty:Industry}', MATERIALBASE-BASE_UOM='{ItemProperty:UnitofMeasure}', MATERIALBASE-OLD_MAT_NO='{ItemProperty:Old_x0020_Material_x0020_Number}'

![Nintex-Material-XQL-WF4](/img/content/Nintex-Material-XQL-WF4.png){:class="img-responsive"}

Speichern und veröffentlichen Sie den Workflow.<br>
Wiederholen Sie die restlichen im ersten Szenario beschriebenen Schritte, um die Funktionalität des aktualisierten Workflows zu verifizieren.

Legen Sie ein neues Material an und genehmigen Sie die Anfrage. 


![Nintex-Material-XQL-WF-Completed](/img/content/Nintex-Material-XQL-WF-Completed.png){:class="img-responsive"}

Prüfen Sie das Resultat im SAP-System.

![Nintex-Material-XQL-SAP](/img/content/Nintex-Material-XQL-SAP.png){:class="img-responsive"}