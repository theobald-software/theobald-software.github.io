---
ref: ecscore-wd-getting-started-01
layout: page
title: Menüleiste
description: Menüleiste
product: erpconnect-services
parent: erste_schritte_mit_dem_webservice_designer
childidentifier: verbindungen
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=menüleiste
---

In der Menüleiste des ECS Core WebService Designers sind folgende Menüpunkte auswählbar:

![WSD-11](/img/content/ecscore-wsd_11.jpg){:class="img-responsive"}

*Connections*
Hier wird die Server- und SAP-Verbindung definiert.

*Server actions for web services*
In diesem Menüabschnitt finden sich folgende Aktionen:
- Open: Damit wird ein bereits deployter Webservice vom ECS Core Server geöffnet.

![WSD-12](/img/content/ecscore-wsd_12.jpg){:class="img-responsive"}

- Import: Damit können zu einem bereits deployten Webservice Webservice-Operationen eines anderen deployten Webservice hinzugefügt werden. Es können einzelne oder alle auf der rechten Seite aufgeführten Operationen hinzugefügt werden. 

![WSD-13](/img/content/ecscore-wsd_13.jpg){:class="img-responsive"}

- Deploy: Damit wird ein neu angelegter Webservice zum ECS Core Server deployed. 

- Remove: Damit können Webservices wieder vom ECS Core Server entfernt werden.

![WSD-14](/img/content/ecscore-wsd_14.jpg){:class="img-responsive"}         
  

*Project Actions*
Dieser Menüabschnitt bezieht sich auf neue Webservice-Projekte und beinhaltet folgende Aktionen:

- New: Damit wird ein neues Webservice-Projekt angelegt. Wichtig: Bereits geöffnete Daten gehen dabei verloren, bitte vorher sichern!

- Open: Damit wird eine abgespeicherte Webservice-Definition (Dateien mit der Endung *.wsdef*) im Designer geöffnet.

- Import: Damit können Operationen aus einer Webservice Definition zu einem begonnenen Webservice-Projekt hinzugefügt werden.

- Recent: Dort stehen kürzlich geöffnete Webservice-Definitionen zum Öffnen zur Auswahl.

*Options*
In diesem Menüabschnitt finden sich folgende Optionen in Bezug auf Webservice-Projekte und den Export ins OpenApi-Format:

Project Options:
- Underlying SAP system is using UNICODE encoding (Default: Yes): Hier kann festgelegt werden, ob es sich beim zugrundeliegenden SAP-System um ein UNICODE System handelt oder nicht.
- Include error details (Default: Yes): Mit Aktivierung dieses Settings werden detailliertere Fehlermeldugnen im Designer ausgegeben.
- Use empty string as default value for input parameters, variables and custom data types of type string (Default: Yes).
- Use empty structure as default value for input parameters and variables of type collection or custom data type (Default: Yes).

OpenAPi Options:
- Add generic service operations to the definition (Default: No): 
- Add SAP connection parameter ("Service Application") to the definitions of operations (Default: No): 
- Use variable names as "title" parameter (Default: No): 


       

  