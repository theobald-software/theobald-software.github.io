---
ref: ecs-requirements-and-installation-02
layout: page
title: Installation
description: Installation
product: erpconnect-services
parent: ecs-voraussetzungen
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=ecs-installation
---

Die Installation erfolgt über die ausgelieferte oder unter [www.theobald-software.com](https://www.theobald-software.com) downloadbare Installationsroutine.

Fogende Themen werden beschrieben:

- Installation mit dem Wizard
- Client-Installation
- Installation mit Hilfe der WSP-Packages
- SharePoint-Farm

Bitte beachte Sie folgende Punkte, bevor Sie mit der Installation starten (alle SharePoint-Versionen):

- In einer SharePoint-Farm muss ERPConnect Services auf dem Server mit der **Zentraladministration**-Webseite installiert werden.
- Der **SharePoint Administration** Service muss gestartet sein, um die ERPConnect Services installieren zu können.
- Der **SharePoint Timer** Service muss gestartet sein, um die ERPConnect Services installieren zu können.
- Der Benutzer, welche die Installation ausführt, muss Mitglied der Gruppe **SharePoint Farm Administratoren** sein. 
- Auf mindestens einem SP-Server muss der **Microsoft SharePoint Foundation Web Application Service** gestartet sein, um den ERPConnect Service starten und nutzen zu können.

**Installation mit dem Wizard**

                        
Starten Sie die Installation, indem Sie den Installer ausführen: *ERPConnectServicesSetup2XX.exe*. 
Die *Welcome* Seite des Installationsassistenten wird angezeigt.

![ECS-Setup-Welcome](/img/content/ECS-Setup-Welcome.PNG){:class="img-responsive"}

Betätigen Sie die *Next* Schaltfläche, um fortzufahren.

Lesen Sie die Lizenzvereinbarung auf der *License Agreement Seite* und wählen *I Agree* um fortzufahren.

![ECS-Setup-License](/img/content/ECS-Setup-License.PNG){:class="img-responsive"}

Auf der Seite Choose *Install Location* des Installationsassistenten können Sie den Installationspfad für die ERPConnect Services Komponenten festlegen. Der Standardpfad lautet: *C:\Program Files\ERPConnect Services*. 


![ECS-Setup-Location](/img/content/ECS-Setup-Location.PNG){:class="img-responsive"}

Bestätigen Sie die Auswahl mit *Next*.

Auf der *Choose Components* Seite des Assistenten wählen Sie die Komponenten. die Sie installieren möchten.

![ECS-Setup-Components](/img/content/ECS-Setup-Components.png){:class="img-responsive"}

Betätigen Sie die *Next* Schaltfläche, um fortzufahren.

Bitte beachten Sie, dass die ERPConnect Services Runtime Komponenten nur auf einem SharePoint Server installiert werden sollten und vergewissern Sie sich,  dass der SharePoint Administration Service gestartet ist. 

![ECS-Setup-Important-Message](/img/content/ECS-Setup-Important-Message.PNG){:class="img-responsive"}

Betätigen Sie die *Next* Schaltfläche um fortzufahren oder die *Back* Schaltfläche um die Komponentenauswahl zu ändern.

Die Komponenten werden nun auf Ihrem System installiert. Anschließend sollten Sie eine Mitteilung erhalten, dass das Setup erfolgreich beendet wurde.

![ECS-Setup-Completed](/img/content/ECS-Setup-Completed.PNG){:class="img-responsive"}

Betätigen Sie *Next*, um zur letzten Seite des Assistenten zu gelangen.

![ECS-Setup-Finish](/img/content/ECS-Setup-Finish.PNG){:class="img-responsive"}

Betätigen Sie die Finish Schaltfläche, um den Assistenten zu beenden. Die Komponenten BCS Connector und WebService Designer sind nun installiert und Sie können diese im Windows-Startmenü aufrufen.


**Client-Installation**

Eine Client-Installation installiert die Client-Komponenten von ERPConnect Services und kann auf Windows-Betriebssysteme wie Windows 7 oder 8 und muss nicht auf SharePoint server stattfinden. 
Für die Client-Installation wählen eine oder beide Komponenten auf der Wizard-Seite *Choose Components*:

- ERPConnect Services Client: installiert die ECS Runtime Client dll.
- BCS Connector Designer: installiert den BCS Connector.
- WebService Designer: installiert den WebService Designer (WS Designer).

![ECS-Setup-Client-Components](/img/content/ECS-Setup-Client-Components.png){:class="img-responsive"}

**Installation mit Hilfe der WSP-Packages**

Alternativ zur Wizard-Installation können Sie ERPConnect Services manuell mit Hilfe der WSP packages installieren.
Die Client-Installation legt the WSP packages im Installationsordner ab. 

Um ERPConnect Services Runtime zu installieren, benötigen Sie die folgenden WSP Packages:
- *ERPConnectServices.LicenseManager.wsp*: installiert den License Manager der ERPConnect Services.
- *ERPConnectServices.wsp*: installiert die ERPConnect Services Runtime.
- *ERPConnectServices.BCSConnector.wsp*: installiert die BCS Connector Runtime.
- *ERPConnectServices.WebServiceDesigner.wsp*: installiert die WebService Designer Runtime.

Die folgenden WSP-Packages sind optional:
- *ERPConnectServices.NintexWorkflowActions.wsp*: installiert die Nintex Workflow Actions der ERPConnect Services Runtime.
- *ERPConnectServices.WebDemos.wsp*: installiert die Web Demos der ERPConnect Services.
- *ERPConnectServices.WebParts.wsp*: installiert die Web Parts der ERPConnect Services.

Führen Sie die folgenden Schritte aus, um die ERPConnect Services mit Hilfe der WSP-Dateien zu installieren:

*Schritt 1: Die WSP-Dateien auf den SharePoint Server kopieren*<br>
Um die ERPConnect Services auf einem SharePoint Server zu installieren, kopieren Sie zuerst die WSP-Dateien ERPConnectServices.wsp, <br>ERPConnectServices.LicenseManager.wsp und BCSConnector.Solution.wsp<br>
auf den Server, z.B. in den Ordner C:\Program Files\ERPConnect Services.

*Schritt 2: Die WSP Solutions zum SharePoint Server in dieser Reihenfolge hinzufügen*<br> 
Starten Sie die SharePoint Management Shell als Administrator und fügen Sie die die ersten 2 Solutions in dieser Reihenfolge: <br>
*Add-SPSolution -LiteralPath "C:\Program Files\ERPConnect Services\ERPConnectServices.LicenseManager.wsp"<br>
Add-SPSolution -LiteralPath "C:\Program Files\ERPConnect Services\ERPConnectServices.wsp"*

*Die Folgenden sind nötig wenn Sie den BCS Connector bzw. den WebService Designer einsetzen wollen.<br>
Add-SPSolution -LiteralPath "C:\Program Files\ERPConnect Services\ERPConnectServices.BCSConnector.wsp"<br>
Add-SPSolution -LiteralPath "C:\Program Files\ERPConnect Services\ERPConnectServices.WebServiceDesigner.wsp"*

![ECS-Setup-WSP-01](/img/content/ECS-Setup-WSP-01.png){:class="img-responsive"}

In der Zentraladministration (System Settings -> Manage farm solutions) können Sie verifizieren, dass die Solutions hinzugefügt wurden.

![ECS-Setup-SP-CA-Solutions-01](/img/content/ECS-Setup-SP-CA-Solutions-01.png){:class="img-responsive"}

*Schritt 3: Die WSP Solutions (global) deployen*<br>
Die Solutions können nun deployet werden, entweder in der Zentraladministration (System Settings -> Manage farm solutions) oder mit der SharePoint Management Shell:

*Install-SPSolution -Identity erpconnectservices.licensemanager.wsp -GACDeployment<br>
Install-SPSolution -Identity erpconnectservices.wsp -GACDeployment<br>
Install-SPSolution -Identity erpconnectservices.bcsconnector.wsp -GACDeployment<br>
Install-SPSolution -Identity erpconnectservices.webservicedesigner.wsp -GACDeployment*

![ECS-Setup-WSP-02](/img/content/ECS-Setup-WSP-02.png){:class="img-responsive"}

In der Zentraladministration (System Settings -> Manage farm solutions) können Sie verifizieren, dass die Solutions hinzugefügt wurden.

![ECS-Setup-SP-CA-Solutions-02](/img/content/ECS-Setup-SP-CA-Solutions-02.png){:class="img-responsive"}

**SharePoint-Farm**

In einer SharePoint-Farm mit mehreren (APP und Web-Front-End) Servern, muss ECS auf dem Server mit der **Zenraladministration**-Webseite installiert werden.<br>
Auf dem Installations-Server wird die ECS Instanz automatisch gestartet. <br>
Auf einem SP-Server muss der **Microsoft SharePoint Foundation Web Application Service** gestartet sein, um den ERPConnect Service starten und nutzen zu können.

**Services starten und stoppen**

Auf den anderen Farmservern kann die ERPConnect Service Instanz manuell je nach Bedarf gestartet und gestoppt werden.<br>
Gehen Sie zur Zentraladministration -> System Setting -> Manage services on servers und wählen Sie den Server, um eine Liste der installierten Services zu erhalten, welche dann gestartet und gestoppt werden können.

**Eine ERPConnect Service Instanz auf einem neuen Farmserver installieren** 

Um eine ERPConnect Service Instanz auf einem neu zur Farm hinzugefügtem Server zu installieren, starten Sie das ECS Support Tool ERPConnectServices.SupportTool.exe, gehen Sie zum Servers-Tab, wählen Sie den SP-Server und wählen Sie den entsprechenden Eintrag im Kontextmenü.
In einer SharePoint-Farm werden die ERPConnect Services Runtime und die BCS Runtime automatisch global installiert. 

**SharePoint-Farm-Installation für SharePoint 2016 (MinRole-Serverrollen-Konzept)**

Installieren Sie ECS zunächst auf dem Server mit der Zentraladministration. Es ist egal, welche Server-Rolle dieser Server besitzt, auch Shared-Roles werden unterstützt. Schauen Sie nach der Installation zunächst unter Zentraladministration  -> System Settings -> Servers -> Manage services on server ob der ERPConnect Service dort vorhanden ist. Er sollte in der Liste auftauchen und zunächst als Not Compliant markiert sein. Mit Fix oder Stop stoppen Sie den Service auf den Servern, wo er nicht benötigt wird. 

![ECS-Setup-SP-Farm_Services](/img/content/ECS-Setup-SP-Farm_Services.png){:class="img-responsive"}

**Neustarten des SharePoint-Servers**<br>
Jeder SharePoint-Server, auf dem die ERPConnect Services installiert wurden, muss neu gestartet werden.

**ECS Support Tool**<br>
Im Installationsordner finden Sie das Tool **ERPConnectServices.SupportTool.exe**. Das ist ein Support-Tool und zeigt im Wesentlichen nur die Informationen an, die auch über die SharePoint-Zentraladministration (CA) geändert werden können, bis auf die Logging-Informationen und WCF-Service. <br>
Das Tool dient dazu, im Fall, dass der Zugriff über CA nicht möglich ist, auf die ECS-Daten zuzugreifen.<br>
Bitte beachten Sie, dass der Aufruf des Support Tools nur mit Usern möglich ist, die Administratoren-Rechte besitzen. Nach dem Aufruf des Tools erscheint ein Popup-Fenster, in dem Sie sich als Administrator authentifizieren müssen. 

**Die Installation überprüfen**

Wenn die Installation erfolgreich ist, dann finden Sie in der Zentraladministration den Bereich *ERPConnect Services*.<br>
Im zweiten Schritt können Sie [eine ECS Service Application anlegen](). 

Überprüfen Sie außerdem, ob der ERPConnect Service gestartet ist (betrifft insbesondere [SP2016]()):<br>
System Settings -> Servers -> Manage services on Server -> ERPConnect Services -> Start 

![ECS-Setup-SP-CA](/img/content/ECS-Setup-SP-CA.png){:class="img-responsive"}

**Dll-Dateien**<br>
Alle mitgebrachten Dateien werden im Programmverzeichnis abgelegt. Folgende Dateien sind wichtig:<br>

**ERPConnect35.dll** -	ERPConnect.net Assembly für .NET 3.5 <br>
**ERPConnect45.dll** -	ERPConnect.net Assembly für .NET 4.5 <br>
**ERPConnectServices.Server.dll** -	ERPConnect Services Basisfunktionalität<br>
**ERPConnectServices.Server.Common.dll** -	ERPConnect Services Basisfunktionalität (SharePoint Client)<br>
**ERPConnectServices.Client.dll** -	ERPConnect Services Client Assembly (Desktop)