---
ref: ecs-cats-01
layout: page
title: Installation
description: Installation
product: erpconnect-services
parent: arbeitszeitblatt
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=arbeitszeitblatt-install
---

**Download**

Die zur Installation benötigten Dateien können Sie als ZIP-File [hier](https://cdn-files.theobald-software.com/help/ECS/Theobald.CATS.zip) herunterladen.

Folgende Dateien werden ausgeliefert:

*Theobald.CATS.exe*: Das Installerpaket, das Sie auf Ihrem SharePoint Server installieren müssen. Es enthält das zur Implementierung erforderliche WSP-Paket.  
 


**Systemvoraussetzungen** 

ERPConnect Services muss auf dem SharePoint Server installiert sein.<br>
Eine ERPConnect Service Applikation muss angelegt werden. Nähere Informationen dazu finden Sie auf unserer Online-Hilfe.   

Zur gesicherten Authentifizierung innerhalb der App wird eine Secure Store Applikation benötigt. Legen Sie diese in der Zentraladministration an. Wie dies funktioniert steht in der [Online Hilfe](../../ecs-de/ecs-runtime/ecs-konfiguration/ecs-application-anlegen).   

Berechtigungen: Stellen Sie sicher, dass die user, die im Secure Store hinterlegt sind, ausreichende Berechtigungen besitzen. Sie benötigen sowohl volle Zugriffsrechte auf die Secure Store Service Applikation als auch zumindest lesende Berechtigungen auf die ECS Service Applikation. 

**SAP Customizing**

SAP-seitig muss die Bebuchung von Zeiten auf Projektaufträge über CATS gecustomized sein, dazu gehören z.B. die Einrichtung eines Erfassungsprofils und die Einstellungen im SAP Projektsystem . Der auf die CATS-App zugreifende SAP-User muss über den Infotyp 105 in den Personalstammdaten einem Mitarbeiter zugeordnet sein. 


**Installation des Solution Packages mit dem Installer** 

Führen Sie die Datei Theobald.CATS.exe aus und folgen Sie der Installationsroutine. 
Das zur Implementierung benötigte SharePoint WSP-Package wird dabei automatisch auf Ihren SharePoint Server deployed und das Feature aktiviert. 

**Das Web Part hinzufügen und konfigurieren**
    
Nachdem Sie die Lösung installiert haben, können Sie die App als Web Part auf jeder beliebigen SharePoint Seite hinzufügen.   

Klicken Sie auf einer SharePoint Seite auf Edit -> Insert -> Web Part. Unter Categories -> Custom wählen Sie das Web Part CATS4SharePoint  aus und klicken Sie auf Add.

![cats-install-01](/img/content/cats-install-01.png){:class="img-responsive"}

Zunächst wird eine Fehlermeldung angezeigt, da das Web Part noch nicht konfiguriert nicht. Öffnen Sie daher zunächst die Konfigurationseinstellungen des Web Part. 

![cats-install-02](/img/content/cats-install-02.png){:class="img-responsive"}

Im Punkt CATS4SharePoint Configuration können Sie die ECS Service Applikation sowie die Secure Store Service Applikation über eine Dropdownliste auswählen und eintragen. Zudem muss der Kostenrechnungskreis des SAP Mandanten ausgewählt werden, für den die App genutzt werden soll. Geben Sie außerdem das CATS-Profil an, das für die Erfassung genutzt werden soll. Dieses muss auf Ihrem SAP-System eingerichtet sein.

![cats-install-03](/img/content/cats-install-03.png){:class="img-responsive"}

Sichern Sie die Web Part-Einstellungen mit OK und speichern Sie die SharePoint Seite. 

![cats-install-04](/img/content/cats-install-04.png){:class="img-responsive"}

Die Eingabemaske der CATS App wird anschließend angezeigt und kann verwendet werden. 

![cats-install-05](/img/content/cats-install-05.png){:class="img-responsive"}
