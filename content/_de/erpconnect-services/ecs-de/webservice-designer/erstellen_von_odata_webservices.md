---
ref: ecs-webservice-designer-03
layout: page
title: OData Webservices
description: OData Webservices
product: erpconnect-services
parent: webservice-designer
childidentifier: erstellen_von_odata_webservices
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=erstellen_von_odata_webservices
---

Neben SOAP Webservices, ist es mit WebService Designer auch möglich, Webservices im **OData**-Format zu erstellen und nach SharePoint zu deployen. OData stellt ein gängiges Kommunikationsprotokoll dar, das als offener Standard für die Datenkommunikation mit REST-basierten Webservices verwendet wird. 

REST-basierte Webservices folgen bestimmten Designprinzipien, d.h. Sie nutzen z.B. die spezifischen HTTP-Methoden POST, GET, PUT und DELETE und stellen die Daten im XML oder JSON-Format bereit. Während bei SOAP WSDL-Dokumente bereitgestellt werden, findet die Datenübertragung bei OData über EDMX-Dokumente statt, die die Metadaten beinhalten. OData ist insbesondere dafür geeignet, sogenannte CRUD (**C**reate, **R**etrieve, **U**pdate, **D**elete) Operationen bezogen auf ein Datenmodell durchzuführen. 

Auf der anderen Seite unterliegt OData anders als das sehr freie Datenprotokoll SOAP aufgrund der klaren Strukturierung bestimmten Restriktionen, was sich auch in der Konfiguration der Webservices widerspiegelt.

Ob Sie einen Webservice im SOAP- oder OData Format verwenden sollten, hängt von Ihren individuellen Projekt-Anforderungen ab. In SharePoint Workflows können beispielsweise nur REST-basierte Webservices eingebunden werden (siehe dazu folgenden Knowledgebase-Artikel: [Building an OData web service in ECS WebService Designer and using it in a SharePoint 2013 workflow](https://my.theobald-software.com/index.php?/Knowledgebase/Article/View/139/53/building-an-odata-web-service-in-ecs-webservice-designer-and-using-it-in-a-sharepoint-2013-workflow)).   <br>
In den folgenden Kapiteln erfahren Sie, wie Sie mit dem Werbservice Designer OData-Webservices erstellen. 
                   
{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}