---
layout: page
title: Installation
description: Installation
product: erpconnect-services
parent: nw-custom-actions
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=nintex-action-installation
---

**Lösung mit Installer installieren**

Die Theobald Software Custom Actions für Nintex Workflow (Query XQL Action, Call SAP Function und Read SAP table) werden als 
Installer-Paket mit der Installation der ERPConnect Services ausgeliefert. Voraussetzung für die Implementierung der Nintex Workflow Custom Actions ist die Installation von Nintex Workflow auf Ihrem SharePoint Server (Unterstützte Versionen: 2010, 2013 und 2016).

Die Installationsdatei befindet sich in folgendem Verzeichnis:  <br>
C:\Program Files\ERPConnect Services\ERPConnectServices.NintexWorkflowActions.exe

Folgen Sie der Installationsroutine, damit wird die Lösung automatisch nach SharePoint deployed und aktiviert. 

![ECS-Nintex-WorkflowAction_Installation1](/img/content/ECS-Nintex-WorkflowAction_Installation1.png){:class="img-responsive"}

Ist bereits eine frühere Version installiert, existieren die Optionen *Repair* und *Remove*. 

Mit *Repair* wird die bereits installierte Version entfernt und die neueste Version aus dem Installationspaket installiert. Mit *Remove* wird die Lösung komplett entfernt und gelöscht, ohne erneute Installation.  


![ECS-Nintex-WorkflowAction_Installation2](/img/content/ECS-Nintex-WorkflowAction_Installation2.png){:class="img-responsive"}

Bei neueren Nintex Workflow Versionen (ab 3.1.4) ist es erforderlich, dass bei einer Neuinstallation und bei *Repair* 
die Workflow Actions noch explizit auf der jeweiligen Site Collection aktiviert werden müssen. Rufen Sie dafür die Site Settings der Site Collection auf, unter welcher Sie die Workflow Actions nutzen möchten und öffnen den Menüpunkt *Nintex Workflow> Manage Allowed Actions*. Dort haken Sie die drei Custom Actions in der Kategorie *ERPConnect Services* an und sichern die Einstellungen mit *OK*. Anschließend stehen die Custom Actions dann in Nintex Workflow zur Verfügung. 

![ECS-Nintex-WorkflowAction_Installation3](/img/content/ECS-Nintex-WorkflowAction_Installation3.png){:class="img-responsive"}

Bei Repair  ist es zudem noch erforderlich, die Web Application für den Nintex Workflow erneut zu aktivieren. Tut man dies nicht, lassen sich eventuell neu angelegte Workflows nicht publizieren. Navigieren Sie zur *Central Administration* und wählen Sie *Nintex Workflow Management*. Klicken Sie auf Web *Application Activation*.
Die default Web Application sollte automatisch gewählt sein. Klicken Sie auf Activate.

**Lösung manuell installieren** 
            
Alternativ zur Installation per Installer, besteht die Möglichkeit, die Lösung manuell zu installieren. Im Pfad C:\Program Files\ERPConnect Services steht die SharePoint Lösung (Solution Package) *ERPConnectServices.NintexWorkflowActions.wsp* zur manuellen Installation zur Verfügung.           

Installieren Sie die Lösung mit Hilfe der SharePoint Management Shell:<br>
add-spsolution -LiteralPath "C:\Program Files\ERPConnect Services\ERPConnectServices.NintexWorkflowActions.sp20xx.wsp"

**Lösung manuell deinstallieren**

Falls Sie eine neuere Version installieren, muss die veraltete Lösung zunächst deinstalliert und entfernt werden:

Zur Deinstallation gehen Sie zu Central Administration->System Settings->Manage farm solutions->*ERPConnectServices.NintexWorkflowActions.wsp* und klicken Sie auf Retract Solution.

Entfernen Sie die Solution mit der SharePoint Mangement Shell:<br>
remove-spsolution -identity "ERPConnectServices.NintexWorkflowActions.sp20xx.wsp"

Die Custom Actions sind anschließend noch in der Nintex Actions Verwaltung vorhanden. Um sie vollständig zu entfernen, führen Sie folgende SharePoint Management Shell Befehle aus: 

NWAdmin.exe -o RemoveAction -adapterType ERPConnectServices.NintexWorkflowActions.ReadTableAdapter<br>
NWAdmin.exe -o RemoveAction -adapterType ERPConnectServices.NintexWorkflowActions.CallBAPIAdapter<br>
NWAdmin.exe -o RemoveAction -adapterType ERPConnectServices.NintexWorkflowActions.ExecuteXQLAdapter

**Lösung deployen** 

1. Gehen Sie zu Central Administration und klicken Sie auf System Settings.
2. Klicken Sie auf Manage farm solutions im Abschnitt Farm Management.
3. Klicken Sie auf *ERPConnectServices.NintexWorkflowActions.wsp* und dann klicken Sie auf *Deploy Solution*.
4. Stellen Sie sicher, dass *All content Web applications* im Abschnitt Deploy To gewählt ist und klicken Sie auf OK.
5. Nach einem Augenblick werden Sie auf die Seite Solution Management weitergeleitet. 
   *ERPConnectServices.NintexWorkflowActions.wsp* erscheint nun als *deployed*.                       

Mit dem Deployment wird i.d.R auch das Feature automatisch aktiviert. Dennoch empfiehlt es sich die Feature Aktivierung 
zu überprüfen und das Feature ggf. manuell zu aktivieren:  

**Feature Aktivierung [vor Version 1.1.178.0]**

1. Navigieren Sie zu Central Administration und gehen Sie zu Site Settings.
2. Klicken Sie auf Manage Site features im Abschnitt Site Actions.
3. Navigieren Sie zu *ERPConnect Services Nintex Workflow Actions* und klicken Sie auf *Activate*.
4. Nach einem Augenblick wird die Seite aktualisiert und der Status erscheint als Active.

            
**Feature Aktivierung [ab Version 1.1.178.0]**

1. Navigieren Sie zu *Central Administration* und gehen Sie zu *Application Management*.
2. Klicken Sie auf Manage web applications und markieren Sie die *SharePoint* Seite, für die Sie die Solution aktivieren möchten.
3. Navigieren Sie in der Menüleiste zu Manage features und klicken Sie bei *ERPConnect Services Nintex Workflow Actions Feature* auf *Activate*.
4. Nach einem Augenblick wird die Seite aktualisiert und der Status erscheint als *Active*.
            

**Custom Actions auf Site Collection aktivieren [ab Nintex Workflow Version 3.1.4]**

1. Navigieren Sie auf der gewünschten Site Collection zu Site *Settings>Nintex Workflow> Manage Allowed Actions*
2. Setzen Sie die Haken bei den Custom Actions in der Kategorie *ERPConnect Services*. 
3. Sichern Sie die Einstellungen mit *OK*. 

            
**Web Application aktivieren** 

1. Navigieren Sie zur  *Central Administration* und wählen Sie Nintex *Workflow Management*.
2. Klicken Sie auf *Web Application Activation*. Die default Web Application sollte automatisch gewählt sein. 
3. Klicken Sie auf *Activate*.