---
ref: ecscore-wd-getting-started-01
layout: page
title: Menüleiste
description: Menüleiste
product: erpconnect-services
parent: erste_schritte_mit_dem_webservicedesigner
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=menüleiste
---

In der Menüleiste des ECS Core WebService Designers sind folgende Punkte auswählbar:

![WSD-11](/img/content/ecscore-wsd_11.jpg){:class="img-responsive"}


**Connections** <br>
Hier werden die Server- und SAP-Verbindung definiert.

**Server actions for web services** <br>
In diesem Menüabschnitt finden sich folgende Aktionen:
- *Open*: Öffnen eines bereits deployten Webservices vom ECS Core Server.

- *Import*: Importieren von Webservice-Operationen eines anderen deployten Webservice zum geöffneten Webservice. Es können einzelne oder alle Operationen hinzugefügt werden. 

- *Deploy*: Deployment eines neu angelegten Webservice zum ECS Core Server. 

- *Remove*: Entfernen von Webservices vom ECS Core Server. 
  

**Project Actions** <br>
Dieser Menüabschnitt bezieht sich auf neue Webservice-Projekte und beinhaltet folgende Aktionen:

- *New*: Anlegen eines neuen Webservice-Projekts. Wichtig: Bereits geöffnete Daten gehen dabei verloren, bitte vorher sichern!

- *Open*: Öffnen einer gespeicherten Webservice-Definition (Dateien mit der Endung *.wsdef*) im Designer.

- *Import*: Importieren von Operationen aus einer Webservice Definition zu einem begonnenen Webservice-Projekt.

- *Recent*: Zugriff auf kürzlich geöffnete Webservice-Definitionen.

**Options** <br>
In diesem Menüabschnitt finden sich erweiterte Optionen für Webservice-Projekte allgemein und für den Export ins OpenApi-Format.

Project Options:
- *Underlying SAP system is using UNICODE encoding (Default: Yes)*: Auswahl, ob es sich um ein SAP UNICODE-System handelt oder nicht.

- *Include error details (Default: Yes)*: Ausgabe von detaillierteren Fehlermeldungen im Designer.

- *Use empty string as default value for input parameters, variables and custom data types of type string (Default: Yes)*.

- *Use empty structure as default value for input parameters and variables of type collection or custom data type (Default: Yes)*.

OpenAPi Options (ausführlich beschrieben unter [OpenAPI Definitionen](../openapi_definitionen)):
- *Add generic service operations to the definition*
- *Add SAP connection parameter ("Service Application") to the definitions of operations* <br>
- *Use variable names as "title" parameter*

**Export** <br>
Hier können Webservices in bestimmte Formate exportiert werden.

OpenAPI (ausführlich beschrieben unter [OpenAPI Definitionen](../openapi_definitionen)):
- Der Webservice wird als OpenAPI Defintion exportiert.

C#:
- Der Webservice wird als C#-Projekt exportiert (Entwicklertools wie Visual Studio sind zur weiteren Bearbeitung notwendig). 

**App** <br>
Über diesen Menüabschnitt können Sie die Hilfeseite aufrufen oder die Anwendung verlassen. 


       

  