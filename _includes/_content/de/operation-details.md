In diesem Abschnitt widmen wir uns der EXECUTE FUNCTION-Aktivität in der GetCustomers-Operation.<br>
Machen Sie einen Rechtsklick auf die EXECUTE FUNCTION-Aktivität und wählen Sie *Edit*.

![WSD-ExecuteFunctionEdit](/img/content/WSD-ExecuteFunctionEdit.png){:class="img-responsive"}

Im Dialogfenster *Execute Function Activity Dialog* sehen Sie im Feld Name den Namen des SAP-Funktionsbausteines (*SD_RFC_CUSTOMER_GET*).<br>
Darunter sind die verschiedenen Parameter, also *EXPORTS, IMPORTS, CHANGINGS* und TABLES (*Input* und *Output*), des *Funktionsbausteins* (FuBa) und die entsprechende Zuordnung (*Mapping*) aufgeführt. 


Die EXPORTS-Parameter bestehen aus zwei einfachen Inputparametern. <br>
Der FuBa-Parameter *NAME1* wird dem Webservice-Eingabeparameter *namePattern* zugeordnet.<br>
Der Webservice-Eingabeparameter namePattern wird beim Aufruf der Webserviceoperation mitgegeben. <br>
Wir sehen uns die Definition später an. 

![WSD-FM-Exports](/img/content/WSD-FM-Exports.PNG){:class="img-responsive"}

Der FuBa hat einen einzigen TABLES-Parameter *CUSTOMER_T*, den wir für die Ausgaben nutzen und dem Ausgabeparameter *customerList* der Webservice-Operation zuweisen.

Der Parameter customerList wird beim Aufruf der Webservice-Operation verfügbar sein. 

![WSD-FM-Tables](/img/content/WSD-FM-Tables.PNG){:class="img-responsive"}

Klicken Sie auf OK, um das Dialogfenster *Execute Function Activity Dialog* zu schließen.<br>
Im Dialogfenster *ECS Web Service Designer* klicken Sie nun auf den *Parameters*-Knopf.

![WSD-WebServiceDesigner2](/img/content/WSD-WebServiceDesigner2.PNG){:class="img-responsive"}

Im Dialogfenster *Parameters* verwalten Sie die Eingabe- und Ausgabe-Parameter der Operation. 
Folgende Parameter sind definiert:<br>
namePattern: Eingabeparameter (Direction Input) vom Typ String. <br>
customerList: Listenartiger Ausgabeparameter (Direction Return) vom Typ List of Customer. Die Definition des Datentyps *Customer* sehen wir uns gleich an.

Über den Edit-Knopf können Sie dem Parameter *namePattern* einen Standardwert (Default Value) z.B. T* zuweisen. 

![WSD-Parameters](/img/content/WSD-Parameters.PNG){:class="img-responsive"}

Klicken Sie auf OK, um das Fenster zu schließen. 

Im *ECS Web Service Designer dialog* klicken Sie auf den Knopf *Custom Data Types*.
Das Fenster *Custom Data Types Dialog* listet den definierten Datentypen *Customer*. 

![WSD-CustomerDataTypes](/img/content/WSD-CustomerDataTypes.PNG){:class="img-responsive"}

Wählen Sie den Datentyp *Customer* und klicken Sie auf Edit. 
Der Datentyp Customer hat zwei Eigenschaften (properties) ID und Name.

![WSD-CustomDataTypesEdit](/img/content/WSD-CustomDataTypesEdit.PNG){:class="img-responsive"}

Klicken Sie jeweils auf OK, um zum Hauptfenster zu gelangen. 