---
ref: ecscore-wd-web-services-03
layout: page
title: Einen neuen Webservice erstellen
description: Einen neuen Webservice erstellen
product: ecs-core
parent: webservices
childidentifier: einen_neuen_webservice_erstellen
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /ECS-Core-DE/default.aspx?pageid=einen-neuen-webservice-erstellen
---

Um einen neuen REST Webservice zu erstellen, öffnen Sie den WebService Designer und definieren zunächst die SAP-Verbindung zum Abruf der Metadaten und die Server-Verbindung für das Deployment des Webservice (beschrieben unter [Verbindungseinstellungen](../webservices/erste_schritte_mit_dem_webservicedesigner/verbindungseinstellungen)).  

Geben Sie dem Webservice einen Namen, und optional einen Titel und eine Beschreibung. Auch die Zuordnung einer SAP Verbindung vom ECS Core Server ist optional. Weist man keine SAP-Verbindung zu, wird die Default-Verbindung verwendet. <br>

![WSD-Description](/img/content/ecscore-wsd_26.png){:class="img-responsive"}

In diesem Beispiel erstellen wir einen Webservice, welcher Kundendaten aus dem SAP-System liefert. <br>  
             
Wichtig: Achten Sie darauf, dass im Webservice-Namen keine Leer- oder Sonderzeichen enthalten sind.  

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}

