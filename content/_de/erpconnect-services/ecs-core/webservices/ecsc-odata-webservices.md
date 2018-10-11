---
layout: page
title: OData Webservices         
description: OData Webservices         
product: erpconnect-services
parent: webservices
permalink: /:collection/:path
weight: 6
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=ecsc-odata-webservices
---

Um einen OData-Webservice für ECS Core anzulegen wählen Sie bei der Neuanlage die Option *Creates Odata specific web service* und bestätigen die Auswahl mit *OK*.

![ecscore-webservices7](/img/content/ecscore-webservices7.png){:class="img-responsive"}

Geben Sie dem Webservice einen Namen und legen Sie anschließend einen neuen Custom Data Type an, bei welchem Sie zunächst die Parameter der Tabelle REQUISITION_ITEMS des BAPIs BAPI_REQUISITION_CREATE importieren:

![ecscore-webservices8](/img/content/ecscore-webservices8.png){:class="img-responsive"}

Deselektieren Sie die Gesamtauswahl und importieren Sie nur die Felder DOC_TYPE, MATERIAL, PLANT, QUANTITY, 
DELIV_DATE und ACCTASSCAT.

![ecscore-webservices9](/img/content/ecscore-webservices9.png){:class="img-responsive"}

Sichern Sie die Einstellungen mit Finish und legen Sie zusätzlich noch manuell den Parameter COST_CTR an.  

![ecscore-webservices10](/img/content/ecscore-webservices10.png){:class="img-responsive"}

Legen Sie anschließend eine neue Entität an, in welcher Sie den eben erstellen Custom Data Type verwenden, das Schlüsselfeld ist in diesem Fall unerheblich (z.B. Doc_TYPE). Wählen Sie mit einem Doppelklick die CRUD Operation *Create* aus. 


![ecscore-webservices11](/img/content/ecscore-webservices11.png){:class="img-responsive"}

Rufen Sie mit der *Execute Function* Activity den BAPI BAPI_REQUISITION_CREATE auf. 

![ecscore-webservices12](/img/content/ecscore-webservices12.png){:class="img-responsive"}

Wichtige Info: Sie werden feststellen, dass Sie unter *Parameters* keine Möglichkeit haben, Parameter anzulegen oder zu editieren. Dies ist eine Einschränkung von OData. Auch die Anlage von Return- oder Outputparametern ist damit nicht möglich, was bedeutet, dass OData für ECS Core im Grunde nur zum Posten oder Abrufen von Daten geeignet ist und nicht, um Rückgabewerte wegzuschreiben.  
 
Das Parameter-Mapping muss daher mit dem hinterlegten Strukturparameter des vorhin angelegten Custom Data Types erfolgen.  

Öffnen Sie die Execute Function Aktivität und scrollen Sie zur Input-Tabelle REQUISITION_ITEMS. Klicken Sie sich durch den Mapping-Dialog bis Sie zur Mapping-Tabelle gelangen. Nehmen Sie anschließend das Mapping für die Parameter DOC_TYPE, MATERIAL, PLANT, QUANTITY, DELIV_DATE und ACCTASSCAT vor. Einzelheiten zum Mappen von Struktur-Parametern auf Tabellenwerte finden Sie in der [hier](../../ecs-de/webservice-designer/mapping_von_eingabe_parametern/mapping_struktureller_parameter).

![ecscore-webservices13](/img/content/ecscore-webservices13.png){:class="img-responsive"}

Mappen Sie anschließend noch den Parameter COST_CTR auf das entsprechende Feld der Tabelle REQUISITION_ACCOUNT_ASSIGNMENT.

Sichern Sie alle Einstellungen mit OK und kehren Sie zur Einstiegsmaske zurück. Sie können nun den Webservice nach ECSCore deployen. 

Sie finden den Webservice anschließend auf der Management-Site Ihrer ECS Core-Maschine unter *Extensions>Services oder im Unterverzeichnis WSD der Port 8080 Seite im IIS Manager*. 

Wie Sie den Webservice in einem REST-Client testen können, erfahren Sie [hier](./testen-des-webservice-in-einem-rest-client).

Wie Sie den Webservice in Nintex für Office 365 aufrufen können, wird [hier](../../sap-integration-nintex/nintex-workflow-fuer-office-365) beschrieben.  