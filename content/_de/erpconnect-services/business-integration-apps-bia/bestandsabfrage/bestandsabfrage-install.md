---
ref: ecs-stock-info-01
layout: page
title: Installation
description: Installation
product: erpconnect-services
parent: bestandsabfrage
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=bestandsabfrage-install
---

**Download**

Die zur Installation benötigten Dateien können Sie als ZIP-File [hier](https://cdn-files.theobald-software.com/help/ECS/Theobald.StockInfo.zip) herunterladen.

Folgende Dateien werden ausgeliefert: 

*Theobald.StockInfo.exe*: Das Installerpaket, das Sie auf Ihrem SharePoint 2013 Server installieren müssen. Es enthält das zur Implementierung erforderliche WSP-Paket.  <br>
*Theobald.StockInfo2016.exe*: Das Installerpaket, das Sie auf Ihrem SharePoint 2016 Server installieren müssen. Es enthält das zur Implementierung erforderliche WSP-Paket.  
  
*SAP-Transportauftrag (2 Dateien)*: Der Transportauftrag enthält einen individuellen Funktionsbaustein, der zur Ermittlung der Materialbestände benötigt wird und muss auf dem SAP-System eingespielt werden.  


Hinweis: 

Für SharePoint 2010 bieten wir kein Installerpaket an. Das zur Implementierung der App erforderliche WSP-Paket muss manuell in SharePoint per Management-Shell installiert werden. 

Das WSP-Paket für SP2010 und den SAP-Transportauftrag können Sie als ZIP-File [hier](https://cdn-files.theobald-software.com/help/ECS/Theobald.StockInfoSP2010.zip) herunterladen.  


**Systemvoraussetzungen** 

ERPConnect Services muss auf dem SharePoint Server installiert sein.<br>
Eine ERPConnect Service Applikation muss angelegt werden. Nähere Informationen dazu finden Sie auf unserer [Online-Help](../../ecs-de/ecs-runtime/ecs-konfiguration/ecs-application-anlegen).   



**Installation des SAP-Transportauftrags**

Ein SAP-Transportauftrag muss auf Ihrem SAP-System eingespielt werden. Nähere Informationen zur Installation von [Transportaufträgen](https://kb.theobald-software.com/sap/how-to-import-an-sap-transport-request-with-the-transport-management-system-stms?fromSearch=true).
 finden Sie in unserer Knowledge Base.
**Installation des Solution Packages mit dem Installer**

Führen Sie die Datei *Theobald.StockInfo.exe* aus und folgen Sie der Installationsroutine.<br> 
Das zur Implementierung benötigte SharePoint WSP-Package wird dabei automatisch auf Ihren SharePoint Server deployed und das Feature aktiviert. 


**Das Web Part hinzufügen** 

Nachdem Sie die Lösung installiert haben, können Sie die App als Web Part auf jeder beliebigen SharePoint Seite hinzufügen. <br>  
Klicken Sie auf einer SharePoint Seite auf *Edit -> Insert -> Web Part*. Unter *Categories -> Theobald*  wählen Sie das *Web Part Theobald StockInfo* aus und klicken Sie auf *Add*.

![ECS-BIA-StockInfo7](/img/content/ECS-BIA-StockInfo7.png){:class="img-responsive"}

Sichern Sie die Seite. Die Startseite der Anwendung wird anschließend angezeigt. 

![ECS-BIA-StockInfo8](/img/content/ECS-BIA-StockInfo8.png){:class="img-responsive"}

