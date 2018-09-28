---
layout: page
title: Installation
description: Installation
product: erpconnect-services
parent: angebotserstellung
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=angebotserstellung-install
---

**Download**

Die zur Installation benötigte Datei können Sie als ZIP-File [hier]() herunterladen.

Folgende Dateien werden ausgeliefert: 

*Theobald.SapQuotation.exe*: Das Installerpaket, das Sie auf Ihrem SharePoint Server installieren müssen. Es enthält das zur Implementierung erforderliche WSP-Paket.  

*Theobald.SapQuotation2016.exe*: Das Installerpaket, das Sie auf Ihrem SharePoint Server installieren müssen. Es enthält das zur Implementierung erforderliche WSP-Paket.

Hinweis: 

Für SharePoint 2010 bieten wir kein Installerpaket an. Das zur Implementierung der App erforderliche WSP-Paket muss manuell in SharePoint per Management-Shell installiert werden. 

Das WSP-Paket für SP2010 können Sie als ZIP-File [hier]() herunterladen.  

**Systemvoraussetzungen** 

ERPConnect Services muss auf dem SharePoint Server installiert sein.<br>
Eine ERPConnect Service Applikation muss angelegt werden. Nähere Informationen dazu finden Sie auf unserer [Online-Hilfe]().   


**Installation des Solution Packages mit dem Installer**

Führen Sie die Datei Theobald.SapQuotation.exe aus und folgen Sie der Installationsroutine. <br>
Das zur Implementierung benötigte SharePoint WSP-Paket wird dabei automatisch auf Ihren SharePoint Server deployed und das Feature aktiviert. 


**Das Web Part hinzufügen** 
	
Nachdem Sie die Lösung installiert haben, können Sie die App als Web Part auf jeder beliebigen SharePoint Seite hinzufügen.   

Klicken Sie auf einer SharePoint Seite auf *Edit -> Insert -> Web Part*. Unter *Categories -> Theobald*  wählen Sie das Web Part *Theobald SAPQuotation* aus und klicken Sie auf Add.

![ECS-BIA-SAPQuotation20](/img/content/ECS-BIA-SAPQuotation20.png){:class="img-responsive"}

Sichern Sie die Seite. Die Startseite der Anwendung wird anschließend angezeigt. 

![ECS-BIA-SAPQuotation21](/img/content/ECS-BIA-SAPQuotation21.png){:class="img-responsive"}
