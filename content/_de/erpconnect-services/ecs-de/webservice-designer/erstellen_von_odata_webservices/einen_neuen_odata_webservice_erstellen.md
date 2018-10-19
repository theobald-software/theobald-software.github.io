---
ref: ecs-wd-odata-web-services-01
layout: page
title: Einen neuen OData Webservice erstellen
description: Einen neuen OData Webservice erstellen
product: erpconnect-services
parent: erstellen_von_odata_webservices
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=einen_neuen_odata_webservice_erstellen
---

Um einen OData-Webservice anzulegen müssen Sie als Webservice-Typ explizit den OData-spezifischen auswählen. Klicken Sie auf den *New*-Knopf in der *SharePoint Package* Gruppe und wählen Sie die Option *Creates OData specific web service*.

![WSD-OData-Example1](/img/content/WSD-OData-Example1.png){:class="img-responsive"}

Als Beispiel soll ein Webservice angelegt werden, mit dem Bestellanforderungen in SAP erzeugt werden können. Nennen Sie den Webservice *PurchaseRequisition*.

![WSD-OData-Example2](/img/content/WSD-OData-Example2.png){:class="img-responsive"}

Erstellen Sie, nachdem Sie die SharePoint- und SAP-Verbindung eingerichtet haben, einen neuen Custom Data Type. Um Bestellanforderungen in SAP zu erzeugen, nutzen wir den Standard-BAPI BAPI_REQUISITION_CREATE. Verwenden Sie den Import-Button, um im *New Custom Data Type Dialog*  die folgenden Parameter zu importieren. Diese stellen die mindestens erforderlichen Parameter für die Anlage einer Bestellanforderung in SAP inklusive Kontierung dar.

Importieren Sie von der Tabelle REQUISITION_ITEMS folgende Felder:<br>
**DOC_TYPE** -    (Document Type)<br>
**MATERIAL** -    (Material)<br>
**PLANT** -       (Plant)<br>
**QUANTITY** -    (Quantity)<br>
**DELIV_DATE** -    (Delivery Date)<br>
**ACCTASSCAT** -   (Account Assignment Category)<br>

![WSD-OData-Example3](/img/content/WSD-OData-Example3.png){:class="img-responsive"}

![WSD-OData-Example4](/img/content/WSD-OData-Example4.png){:class="img-responsive"}

![WSD-OData-Example5](/img/content/WSD-OData-Example5.png){:class="img-responsive"}

![WSD-OData-Example6](/img/content/WSD-OData-Example6.png){:class="img-responsive"}

![WSD-OData-Example7](/img/content/WSD-OData-Example7.png){:class="img-responsive"}

Sichern Sie die Einstellungen und fügen Sie manuell das Item COST_CTR (Cost Center) hinzu. Dieses benötigen wir für die Kontierung.
 
![WSD-OData-Example8](/img/content/WSD-OData-Example8.png){:class="img-responsive"}

Nennen Sie den Datentyp *ReqItems* und sichern Sie die Einstellungen mit *OK*.

![WSD-OData-Example9](/img/content/WSD-OData-Example9.png){:class="img-responsive"}

Legen Sie anschließend eine neue Entität an. 

![WSD-OData-Example10](/img/content/WSD-OData-Example10.png){:class="img-responsive"}

Verwenden Sie als Custom Data Type den eben angelegten Datentyp *ReqItems*. Da nur Daten nach SAP geschrieben und nicht gelesen werden sollen, ist es nicht notwendig einen speziellen Key (Primärschlüssel) festzulegen. Wählen Sie einfach ein beliebiges Item aus der Liste. Wählen Sie als *Entity Set Name* den *Name* Items. Als CRUD Operation wählen Sie die Operation *Create*, die für die Anlage von Daten konzipiert ist. Mit einem Doppelklick auf Create landen Sie in der WebService Designer Oberfläche. 

![WSD-OData-Example11](/img/content/WSD-OData-Example11.png){:class="img-responsive"}

Wählen Sie die *Execute* Function Aktivität und ziehen diese per Drag & Drop auf das Ablaufdiagramm. 

![WSD-OData-Example12](/img/content/WSD-OData-Example12.png){:class="img-responsive"}

Wählen Sie BAPI_REQUISITION_CREATE als Funktion. Schließen Sie den Aktivitätsdialog mit OK. Den Mappingeinstellungen wenden wir uns im nächsten Kapitel zu. 

![WSD-OData-Example13](/img/content/WSD-OData-Example13.png){:class="img-responsive"}

![WSD-OData-Example14](/img/content/WSD-OData-Example14.png){:class="img-responsive"}

