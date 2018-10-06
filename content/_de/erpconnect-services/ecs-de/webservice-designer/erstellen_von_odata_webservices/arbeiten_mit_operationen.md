---
layout: page
title: Arbeiten mit Operationen
description: Arbeiten mit Operationen
product: erpconnect-services
parent: erstellen_von_odata_webservices
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=arbeiten_mit_operationen
---

Aufgrund der Einschränkungen, die das OData-Protokoll insbesondere beim Parameter-Mapping bei den Standard-Operationen *GetAll, Create, Update* und *Delete* mit sich bringt, ist es unter Umständen erforderlich, bei der Erstellung von OData-Webservices mit zusätzlichen Operationen zu arbeiten. In der WebService Designer Oberfläche existiert hierfür neben dem Bereich Entities der *Abschnitt* Operations.

![WSD-OData-Operations1](/img/content/WSD-OData-Operations1.png){:class="img-responsive"}

Als Anwendungsbeispiel soll das eben aufgebaute Szenario zur Anlage einer Bestellanforderung mit der Standard-Funktion *Create* mit einer Operation erweitert werden. Ziel ist es, zusätzlich zur Anlage der Bestellanforderung, die Belegnummer, die beim Erstellen erzeugt wird, als Return-Parameter zurückzuschreiben. Das Mappen von Return-Parametern wird innerhalb der Standard-Funktionen nicht unterstützt und funktioniert nur mit einer Operation. 

Legen Sie eine neue Operation mit dem Namen *ReqItem* an. 

![WSD-OData-Operations2](/img/content/WSD-OData-Operations2.png){:class="img-responsive"}

Sie landen auf der WebService Designer Oberfläche. Legen Sie auch hier eine *Execute Function* Aktivität an, in welcher Sie den SAP-BAPIBAPI_REQUISITION_CREATE aufrufen.

![WSD-OData-Operations3](/img/content/WSD-OData-Operations3.png){:class="img-responsive"}

Legen Sie manuell folgende Parameter einzeln an. Die Anlage von *List* of-Parametern wird hier nicht unterstützt. 


**Material:** Type: String, Direction: Input

**DocType:** Type: String, Direction: Input

**Plant:** Type: String, Direction: Input

**Quantity:** Type: Decimal, Direction: Input

**DeliveryDate:** Type: String, Direction: Input

**AccAssCat:** Type: String, Direction: Input

**CostCenter:** Type: String, Direction: Input

**Result:** Type: String, Direction: Return

![WSD-OData-Operations4](/img/content/WSD-OData-Operations4.png){:class="img-responsive"}

Mappen Sie anschließend die Parameter Material, DocType, Plant, Quantity, DeliveryDate, AccAssCat und CostCenter entsprechend dem vorhergehenden Beispiel auf die Items der Input-Tabellen REQUISTION_ITEMS und REQUISITION_ACCOUNT_ASSIGNMENT. Da die Parameter nicht exakt gleich lauten wie die Tabellenfelder, funktioniert die Automap-Funktion in diesem Fall nicht.

Am Beispiel des Parameters *DocType* wird das Vorgehen kurz beschrieben. Mappen Sie auf diese Weise auch die übrigen Parameter.  

![WSD-OData-Operations5](/img/content/WSD-OData-Operations5.png){:class="img-responsive"}

![WSD-OData-Operations6](/img/content/WSD-OData-Operations6.png){:class="img-responsive"}

![WSD-OData-Operations7](/img/content/WSD-OData-Operations7.png){:class="img-responsive"}

![WSD-OData-Operations8](/img/content/WSD-OData-Operations8.png){:class="img-responsive"}

Mappen Sie anschließend den Output-Parameter *NUMBER* auf den Return-Parameter *Result*. Der Return-Parameter lässt sich in der Dropdown-Liste in der Mapping-Zeile auswählen

![WSD-OData-Operations9](/img/content/WSD-OData-Operations9.png){:class="img-responsive"}

Das Mapping ist damit abgeschlossen und der Webservice kann nach SharePoint deployed werden. 

![WSD-OData-Operations10](/img/content/WSD-OData-Operations10.png){:class="img-responsive"}

Achten Sie beim Testen des Webservice darauf, die HTTP-Methode *GET* zu verwenden, nur diese Methode kann beim Aufruf von Operationen verwendet werden. Alle definierten Input-Parameter müssen hier entsprechend im Request hinterlegt werden. Beachten Sie außerdem, die OData-Parameter-Konventionen einzuhalten: [http://www.odata.org/documentation/odata-version-2-0/overview/](http://www.odata.org/documentation/odata-version-2-0/overview/)  Für Dezimalwerte (Parameter Quantity) muss beispielsweise ein M angehängt und die Hochkommas weggelassen werden.

Für ECS wurden die Parameterübergabe für OData optimiert. Optionale Parameter werden mit Hilfe von Nullable-Datentypen automatisch für OData-Serviceoperationen unterstützt. Wenn keine Standardwerte für Parameter definiert wurden, wird der Systemwert (meist 0 für numerische Typen) verwendet.

Bei erfolgreichem Ausführen des Webservice wird der Return-Parameter in der Result-Message ausgegeben. In SAP kann anschließend überprüft werden, ob die Bestellanforderung mit der ausgegebenen Belegnummer angelegt wurde. 

![WSD-OData-Operations11](/img/content/WSD-OData-Operations11.png){:class="img-responsive"}
