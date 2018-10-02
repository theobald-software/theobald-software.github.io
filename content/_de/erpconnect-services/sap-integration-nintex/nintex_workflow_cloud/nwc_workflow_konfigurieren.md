---
layout: page
title: NWC Workflow konfigurieren
description: NWC Workflow konfigurieren
product: erpconnect-services
parent: nintex_workflow_cloud
permalink: /:collection/:path
weight: 5
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=nwc_workflow_konfigurieren
---

Erstellen Sie einen neuen NWC Workflow. Der neu erstellte Konnektor beindet sich auf der linken Seite in der Toolbox zwischen den Standard-Konnektoren. Die Reihenfolge der Toolbox-Actions können Sie in NWC Einstellungen unter *Action and connector sorting* ändern.

*PurchaseRequisiton* lautet der Name der Webservice Operation, die zuvor im WebService Designer erstellt wurde. Optional: Die zusätzlich angezeigten Actions im Konnektor sind generische Services, die hinzugeneriert werden, falls in den OpenAPI Einstellungen des WebService Designers die Option *Add default actions* to the definition angehakt wird.  

Ziehen Sie die *PurchaseRequisition* Action auf die Designer-Oberfläche und öffnen Sie den Konfigurationsbildschirm am rechten Bildschiormrand durch Anklicken des Konnektors: 

![ecscore-nwc_5](/img/content/ecscore-nwc_5.png){:class="img-responsive"}

Sie finden folgende Einstellungsmöglichkeiten im Konfigurationsbildschirm:

**Connection**

Wählen Sie hier die Verbindung zu Ihrem SAP system aus. Wie eine neue Verbindung erstellt wird, ist hier beschrieben. Grundsätzlich funktioniert die Anlage auch direkt über den Konfigurationsbildschirm.  

**Custom Service Application**

Hier können Sie explizit wählen, welcher Service in ECS Core für die SAP Verbindung genutzt werden soll. Falls Sie weder im WebService Designer noch hier einen Service vorgeben wird der Standard-Service verwendet. 

**Eingabeparameter**

Unter den Verbindungseinstellungen sind die Eingabeparameter des Webservice aufgeführt. Die Eingabeparameter sind in dem Format aufgeführt, in dem sie im WebService Designer definiert wurden (Skalar, Listen oder Struktur).

**Ausgabeparameter**

Die Ausgabeparaneter entsprechen den Rückgabewerten des Webservice im Response Body. 

Ein- und Ausgabeparameter können direkt im Konfigurationsscreen mit Werten gefüllt werden (nur möglich für skalare Parameter) oder auf Workflow Variablen gemapped werden.
Abhängig davon, ob im WebService Designer die Option Use variable names as "title" names gewählt wurde, werden die Parameter mit vollem Pfad (z.B. result error message) oder abgekürzt dargestellt (z.B. error message).  


**Konfiguration des Konnektors**

Selektieren Sie zunächst die vorab erstellte Verbindung unter Connection. Es ist auch möglich, die Verbindung direkt im Konfigurationsbildschirm mit Add new connection zu erstellen. 

Mappen Sie anschließend die Eingabeparameter des Konnektors. Im vorliegenden Beispiel möchten wir die Eingabe über eine Nintex Web Form durchführen. 

Klicken Sie auf Start Event und selektieren Sie Nintex als Konnektor und Form als Event. Wählen Sie Web als Verfügbarkeit aus. 

Ertsllen Sie das Web-Formular mit folgenden Eingabefeldern:


**Material Number**: Text 

**Plant**: Text

**Quantity**: Number 

**Delivery Date**: Text

**Cost Center**: Text 

![ecscore-nwc_10](/img/content/ecscore-nwc_10.png){:class="img-responsive"}

Nach dem Sichern stehen die Eingabefelder des Formulars als Start Event Variablen im Workflow zur Verfügung. 

Mappen Sie die Variablen auf die Eingabeparameter des Konnektors in den Konfigurationseinstellungen. Geben Sie fixe Werte für die Felder DOC_TYPE (=NB) and ACCTASSCAT (=K) ein. Grundsätzlich könnten Sie auch im Webservice vornehmen. Das Feld *Custom Service Application* können Sie leer lassen, es wird dann der Standard-Service in ECS Core verwendet. 

![ecscore-nwc_11](/img/content/ecscore-nwc_11.png){:class="img-responsive"}

Mappen Sie anschließend die Ausgabeparameter. Klicken Sie auf den Parameter Result Result und fügen Sie eine Workflow Variable vom Typ Text hinzu. 

Im *Result* Ausgabeparameter wird die BANF ausgegeben, falls die Bestellanforderung erfolgreich in SAP angelegt wurde. Die weiteren Ausgabeparameter sind für das Fehlerlogging gedacht und können optional gemapped werden.  
![ecscore-nwc_12](/img/content/ecscore-nwc_12.png){:class="img-responsive"}

Die eben angelegte Variable zum Ausgabeparameter können Sie mit der *Log to instance details* Action ins Workflow-Log schreiben. 
Sichern und Publizieren Sie danach den Workflow.


Sie können nun den Workflow mit dem Nintex Webformular ausführen. Bitte beachten Sie, dass die Eingabewerte SAP-konform sein müssen. Wenn Sie im Webservice keine Konvertierungsroutinen für das Lieferdatum und die Kostenstelle eingegeben haben, müssen Sie diese Felder SAP-konform eingeben ("yyyyyMMdd" für das Datumsformat und führende Nullen für die 10-stellige Kostenstelle).

![ecscore-nwc_13](/img/content/ecscore-nwc_13.png){:class="img-responsive"}

In den Instanzdetails des Workflows können Sie sehen, ob er abgeschlossen wurde und ob der Ergebnisparameter erfolgreich protokolliert wurde. Wenn eine ID protokolliert wird, können Sie sicher sein, daß die Bestellanforderung in SAP angelegt wurde. 

![ecscore-nwc_14](/img/content/ecscore-nwc_14.png){:class="img-responsive"}

