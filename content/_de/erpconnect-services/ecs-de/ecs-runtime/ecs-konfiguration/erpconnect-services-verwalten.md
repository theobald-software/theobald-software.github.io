---
layout: page
title: ERPConnect Services verwalten
description: ERPConnect Services verwalten
product: erpconnect-services
parent: ecs-konfiguration
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=erpconnect-services-verwalten
---

In der *Central Administration* finden Sie im Abschnitt *ERPConnect Services* folgende Funktionen:

- *Manage Licenses* verwaltet die Lizenzen, siehe [Lizenz einspielen](../../ecs-voraussetzungen/ecs-lizenz-einspielen).
- *Manage Objects* verwaltet die angelegten ERPConnect Services-Objekte.
- *Test Application Proxy* testet die ERPConnect Services-Application.
- *Version History* zeigt die Versionshistorie an.

![ECS-SP-Admin-ECS](/img/content/ECS-SP-Admin-ECS.jpg){:class="img-responsive"}

**ERPConnect Services-Objekte**

Ein Klick auf *Manage Objects* öffnet eine Übersichtsseite mit allen während der Installation erzeugten und über die Zentraladministration definierten ERPConnect Services-Objekte:

![ECS-SP-ECS-Objects](/img/content/ECS-SP-ECS-Objects.jpg){:class="img-responsive"}

Es sollten keine Service-Objekte direkt mithilfe dieser Seite gelöscht oder erzeugt werden. Die Übersichtsseite dient dem Support-Team zur Unterstützung bei technischen Problemen.


**ERPConnect Services testen**

Klicken Sie auf Test, um den Zugriff auf die ERPConnect Services-Application zu prüfen.<br>
Klicken Sie auf Test SAP, um den Zugriff auf die ERPConnect Services-Application und die SAP-Verbindung zu prüfen.

![ECS-SP-ECS-Test](/img/content/ECS-SP-ECS-Test.jpg){:class="img-responsive"}

![ECS-SP-ECS-Test-Success](/img/content/ECS-SP-ECS-Test-Success.jpg){:class="img-responsive"}

Um den SAP-Verbindungstest erfolgreich in SP 2013 durchzuführen, folgendes muss sichergestellt werden: 
- der Service "Claims to Windows Token Service" muss gestartet werden (CA -> Manage services on server). 
- der Windows Service "Claims to Windows Token Service" muss gestartet werden.  
- das Farm-Konto bzw. jeder Tester (d.h. CA-Admin) must ein Mitglied der lokalen Gruppe "WSS_WPG" sein. 

Nach eine Änderung müssen Sie IIS neustarten. 

**ERPConnect Services-Versionshistorie**

Klicken Sie auf *Version History*, um die Versionshistorie anzuzeigen.

![ECS-SP-ECS-Version-History](/img/content/ECS-SP-ECS-Version-History.jpg){:class="img-responsive"}

