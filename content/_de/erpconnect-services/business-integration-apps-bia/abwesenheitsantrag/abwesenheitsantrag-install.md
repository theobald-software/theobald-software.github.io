---
ref: ecs-leave-request-04
layout: page
title: Installation
description: Installation
product: erpconnect-services
parent: abwesenheitsantrag
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=abwesenheitsantrag-install
---

**Download**

Die zur Installation benötigten Dateien können Sie als ZIP-File [hier](https://cdn-files.theobald-software.com/help/ECS/Theobald.LeaveRequest.zip) herunterladen.

Folgende Dateien werden ausgeliefert:

*Theobald.LeaveRequest.exe*: Installerpaket für die App zum Abwesenheitsantrag, die von den Mitarbeitern ausgeführt wird. Der Installer enthält das zur Implementierung erforderliche WSP-Paket und muss lediglich auf Ihrem SharePoint-Server installiert werden.  

*Theobald.LeaveRequestManager.exe*: Installerpaket für die App zur Abwesenheitsgenehmigung, die von den Vorgesetzten bedient wird. 

*SAP-Transportauftrag (2 Dateien)*: Der Transportauftrag enthält einen individuellen Funktionsbaustein, der für die Verbuchung von Daten ins SAP-System benötigt wird und auf dem SAP-System eingespielt werden muss.

Hinweis: 

Für SharePoint 2010 bieten wir kein Installerpaket an. Die zur Implementierung der App erforderlichen WSP-Pakete müssen manuell in SharePoint per Management-Shell installiert werden. 

Die WSP-Pakete für SP2010 und den SAP-Transportauftrag können Sie als ZIP-File [hier](https://cdn-files.theobald-software.com/help/ECS/Theobald.LeaveRequestSP2010.zip) herunterladen.  


**Systemvoraussetzungen** 

ERPConnect Services muss auf dem SharePoint Server installiert sein.<br>
Eine ERPConnect Service Applikation muss angelegt werden. Nähere Informationen dazu finden Sie auf unserer Online-Hilfe.   


**SAP Customizing**

Da sich die Apps der Einstellungen aus SAP für die Abwesenheitsbeantragung- und Genehmigung bedienen, müssen SAP-seitig dieselben Voraussetzungen im Customizing geschaffen sein, die auch notwendig sind, um das SAP ESS/MSS-Standardszenario zu betreiben:

- Aufgebautes Organisationsmanagement zur Abbildung von Teams und zur Genehmigerfindung
- Angelegte Zeitkontingte für die Kontingentabtragung 
- Einrichtung von Abwesenheitsarten
- Servicespezifische Einstellungen für Abwesenheitsmitteilung, Teamkalender und Zeitkonten
- Angelegte ESS-User mit entsprechenden Berechtigungsrollen
- Verknüpfung von ESS-Usern mit Personalnummern in der Personaladministration 
- Funktionierender Genehmigungsworkflow

Grundsätzlich können in SAP viele Standard-Einstellungen für das Customizing verwendet werden, z.B. steht standardmäßig bereits ein funktionierender Genehmigungsworkflow zur Verfügung. Der Aufwand, um das Szenario lauffähig zu bekommen und mit sinnvollen Daten zu füllen, hält sich damit in einem überschaubaren Rahmen.


**Installation des SAP-Transportauftrags** 

Der SAP-Transportauftrag muss auf Ihrem SAP System eingespielt werden. Nähere Informationen zur Installtion von Transportaufträgen finden Sie in unserer Knowledge base.


**Installation des Solution Packages mit dem Installer** 

Führen Sie die Dateien Theobald.LeaveRequest.exe und Theobald.LeaveRequestManager.exe aus und folgen Sie der Installationsroutine. 
Die zur Implementierung benötigten SharePoint WSP-Pakete werden dabei automatisch auf Ihren SharePoint Server übertragen und das Feature aktiviert. 


**Das Web Part hinzufügen** 

Nachdem Sie die Lösung installiert haben, können Sie die App als Web Part auf jeder beliebigen SharePoint Seite hinzufügen.   

Klicken Sie auf einer SharePoint Seite auf Edit -> Insert -> Web Part. Unter Categories -> Theobald  wählen Sie das Web Part Theobald Leave Request/ Theobald Leave Request Manager aus und klicken Sie auf Add.

![bia-install-01](/img/content/bia-install-01.png){:class="img-responsive"}

Sichern Sie die Seite. Die Startseit der Anwendung wird dann auf der SharePoint Seite angezeigt. 

![bia-install-02](/img/content/bia-install-02.png){:class="img-responsive"}
