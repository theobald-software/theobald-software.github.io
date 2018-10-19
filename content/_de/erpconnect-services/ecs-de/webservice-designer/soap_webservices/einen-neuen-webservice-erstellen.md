---
ref: ecs-wd-soap-web-services-01
layout: page
title: Einen neuen Webservice erstellen
description: Einen neuen Webservice erstellen
product: erpconnect-services
parent: soap_webservices
childidentifier: einen-neuen-webservice-erstellen
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=einen-neuen-webservice-erstellen
---

Um einen neuen Standard-Webservice im SOAP-Format zu erstellen, müssen Sie zuerst den Typ des Webservices wählen. <br>
Im Ribbon klicken Sie auf den New-Knopf in der *SharePoint Package* Gruppe.

![WSD-NewPackage](/img/content/WSD-NewPackage.PNG){:class="img-responsive"}

Nun müssen Sie den Typ des Webservices wählen. <br>
Sie können entweder einen WCF Webservice mit beliebigen Operationen wählen, oder einen OData-Service basierend auf einem Entitätsmodell. <br>
In diesem Beispiel wählen Sie die Option *Creates default web service*.

![WSD-WebServiceType](/img/content/WSD-WebServiceType.PNG){:class="img-responsive"}

Klicken Sie auf OK um das Dialogfenster zu schließen.

Geben Sie dem Webservice einen Namen, und optional einen Titel und eine Beschreibung. <br>
In diesem Beispiel erstellen wir einen Webservice, welcher Kundendaten aus dem SAP-System liefert.  

![WSD-WSName](/img/content/WSD-WSName.PNG){:class="img-responsive"}
             
Wichtig: Achten Sie darauf, dass im Webservice-Namen keine Leerzeichen sind. Dies kann nicht verarbeitet werden und führt bei den weiteren Schritten (Erstellen einer Service-Operation) zu einer Fehlermeldung. 

![WSD-WSName2](/img/content/WSD-WSName2.png){:class="img-responsive"}


{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}