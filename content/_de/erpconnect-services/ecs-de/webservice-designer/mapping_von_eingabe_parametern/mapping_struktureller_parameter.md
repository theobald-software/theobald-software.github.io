---
ref: ecs-wd-input-parameter-mapping-02
layout: page
title: Struktur-Parameter
description: Struktur-Parameter
product: erpconnect-services
parent: mapping_von_eingabe_parametern
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=mapping_struktureller_parameter
---

In diesem Abschnitt erläutern wir das Vorgehen für das Mapping von Struktur-Parametern einer WebService-Operation, also Parametern, die sich auf eine Datenstruktur beziehen, auf verschiedene Eingabe-Parameter eines SAP Funktionsbausteins. 

**Struktur-Parameter auf Struktur-Parameter mappen**

In diesem Beispiel zeigen wir Ihnen, wie Struktur-Parameter einer Webservice-Operation mit dem WebService Designer auf Struktur-Parameter eines Funktionsbausteins gemappt werden können. Wir betrachten hierbei nur Eingabe-Parameter.  

Als Anwendungsbeispiel ziehen wir den Funktionsbaustein BAPI_CUSTOMER_CHANGEFROMDATA1 heran. Der Funktionsbaustein kann zur Änderung von Kundenstammdaten verwendet werden und beinhaltet mehrere Struktur-Parameter als Eingabeparameter. 

Ziel in diesem Szenario ist es, einen Struktur-Parameter zu definieren, der die Elemente FIRSTNAME, LASTNAME und CITY enthält und diesen auf die gleichlautenden Elemente des Struktur-Parameters PI_PERSONALDATA des Funktionsbausteins zu mappen.

Legen Sie zunächst eine Operation an, die den Funktionsbaustein BAPI_CUSTOMER_CHANGEFROMDATA1 aufruft und kehren Sie zur Übersichtsseite zurück. Rufen Sie den Menüpunkt Custom *Data Types* auf und klicken im folgenden Dialogfenster auf *New*, um einen neuen Datentyp mit dem Namen *Personal* anzulegen. Dieser Datentyp soll in seiner Struktur die genannten Elemente enthalten.

![WSD-MappingStructureMappingInput13](/img/content/WSD-MappingStructureMappingInput13.png){:class="img-responsive"}

Legen Sie anschließend den Eingabe-Parameter PersonalData an, der als Datentyp die eben erstellte Struktur *Personal* enthält. Damit haben Sie den Struktur-Parameter angelegt.

![WSD-MappingStructureMappingInput14](/img/content/WSD-MappingStructureMappingInput14.png){:class="img-responsive"}

Rufen Sie anschließend den Aktivitätsdialog auf und scrollen Sie zum Struktur-Parameter PI_PERSONALDATA. Über die Dropdown-Liste in der *Mapping* Spalte ist der Struktur-Parameter *PersonalData* auswählbar.   


![WSD-MappingStructureMappingInput15](/img/content/WSD-MappingStructureMappingInput15.png){:class="img-responsive"}

Selektieren Sie den Parameter und rufen Sie die Mapping Expression Einstellungen mit einem Klick auf den Button rechts mit den drei Punkten auf. Dort sind alle Felder der Struktur PI_PERSONALDATA aufgelistet. Über die Dropdown-Liste in der Mapping Spalte können den Feldern die entsprechenden Elemente des Struktur-Parameters *PersonalData* zugeordnet werden. 

![WSD-MappingStructureMappingInput16](/img/content/WSD-MappingStructureMappingInput16.png){:class="img-responsive"}

Da die zu mappenden Elemente gleich lauten, kann auch die *Automap* Funktion genutzt werden. 

![WSD-MappingStructureMappingInput17](/img/content/WSD-MappingStructureMappingInput17.png){:class="img-responsive"}

Beenden Sie Ihre Eingaben mit OK. Das Szenario ist damit abgeschlossen. 


**Struktur-Parameter auf skalare Parameter mappen**

Im folgenden Beispiel zeigen wir Ihnen, wie Struktur-Parameter einer Webservice-Operation mit dem WebService Designer auf skalare Eingabe-Parameter eines Funktionsbausteins gemappt werden können. 

Als Anwendungsbeispiel ziehen wir den Funktionsbaustein BAPI_EMPLOYEE_GETDATA heran. Der Funktionsbaustein liest Personalstammdaten aus und schreibt die Ergebnisse in verschiedene Ausgabetabellen. Als Inputparameter  enthält der Funktionsbaustein eine Reihe von skalaren Parametern. 
Ziel in diesem Szenario ist es, einen Struktur-Parameter zu definieren, der die Elemente EMPLOYEE_ID, LASTNAME_M, FSTNAME_M und DATE enthält und diese Elemente auf die gleichlautenden skalaren Eingabe-Parameter des Funktionsbausteins zu mappen.

Legen Sie zunächst eine Operation an, die den Funktionsbaustein BAPI_EMPLOYEE_GETDATA aufruft und kehren Sie zur Übersichtsseite zurück. Rufen Sie den Menüpunkt Custom Data Types auf und klicken im folgenden Dialogfenster auf *New*, um einen neuen Datentyp mit dem Namen *Personal* anzulegen. Dieser Datentyp soll in seiner Struktur die genannten Elemente enthalten.

Da Name DATE bei den Datentypen ein geschützer Feldname ist, wählen Sie einen Alternativname für dieses Feld, z.B. CALENDARDATE. 

![WSD-MappingStructureMappingInput7](/img/content/WSD-MappingStructureMappingInput7.png){:class="img-responsive"}

Legen Sie anschließend den Eingabe-Parameter *PersonalData* an, der diesen Datentyp enthält. Damit haben Sie den Struktur-Parameter angelegt.

![WSD-MappingStructureMappingInput8](/img/content/WSD-MappingStructureMappingInput8.png){:class="img-responsive"}

Wechseln Sie anschließend in den Aktivitätsdialog und scrollen Sie zu den Inputparametern. Zunächst wollen wir das Element EMPLOYEE_ID unseres Struktur-Parameters PersonalData auf den skalaren Inputparameter EMPLOYEE_ID des Funktionsbausteins mappen. Markieren Sie die Zeile mit dem Parameter EMPLOYEE_ID und rufen Sie mit dem Button rechts die weiteren Mapping-Einstellungen auf.   

![WSD-MappingStructureMappingInput9](/img/content/WSD-MappingStructureMappingInput9.png){:class="img-responsive"}

Im *Mapping Expression Dialog* wählen Sie den Parameter PersonalData mit einem Doppelklick aus. Entscheidend ist nun, in der Mapping Expression-Zeile einen Verweis auf das zu mappende Element des Struktur-Parameters einzufügen. Im vorliegenden Beispiel für das Element EMPLOYEE_ID hängen Sie die Endung .*EMPLOYEE_ID* an die Mapping Expression an. Beachten Sie, dass zwischen Groß- und Kleinschreibung unterschieden wird.

![WSD-MappingStructureMappingInput10](/img/content/WSD-MappingStructureMappingInput10.png){:class="img-responsive"}

Verfahren Sie ebenso mit den übrigen Element LASTNAME_M und FSTNAME_M und DATE. Denken Sie daran, dass wir das Element DATE in der Datenstruktur in CALENDARDATE umbenennen mussten. Die Mapping Expression muss sich auf diese Feldbezeichnung beziehen. 

![WSD-MappingStructureMappingInput11](/img/content/WSD-MappingStructureMappingInput11.png){:class="img-responsive"}

Bestätigen Sie Ihre Eingaben mit OK. Damit ist das Szenario abgeschlossen.  


**Struktur-Parameter auf eine Tabelle mappen** 

Im folgenden Beispiel zeigen wir Ihnen, wie Struktur-Parameter einer Webservice-Operation mit dem WebService Designer auf tabellarische Eingabe-Parameter eines Funktionsbausteins gemappt werden können. 

Als Anwendungsbeispiel dient uns der Funktionsbaustein BAPI_REQUISITION_CREATE. Dieser Funktionsbaustein wird verwendet, um eine Bestellanforderung (BANF) in SAP anzulegen. Die Positionen werden der Tabelle REQUISITION_ITEMS übergeben.
In unserem Szenario wollen wir nur eine Position übergeben. Dafür sind die folgenden fünf Eingabe-Parameter notwendig: Material, Quantity, Plant, Delivery Date und DocType.

Das Ziel ist es, einen Struktur-Parameter zu definieren, der fünf Strukturelemente enthält und diese Elemente auf die oben genannten Felder der Tabelle REQUISITION_ITEMS zu mappen.  

Legen Sie zunächst eine Operation an, die den Funktionsbaustein BAPI_REQUISITION_CREATE aufruft. <br>
Rufen Sie anschließend den Menüpunkt Custom Data Types in der Übersichtsmaske auf und klicken im folgenden Dialogfenster auf *New*, um einen neuen Datentyp mit dem Namen *ReqItem* anzulegen. Dieser Datentyp soll in seiner Struktur die Elemente Material, Quantity, Plant, Delivery Date und DocType enthalten.

![WSD-MappingStructureNewCustomDataType1](/img/content/WSD-MappingStructureNewCustomDataType1.png){:class="img-responsive"}

Um die geforderten Datentypen anzulegen, können Sie unter Properties entweder auf *New* klicken und diese manuell anlegen, oder Sie nutzen die Importfunktion wie im weiteren Verlauf dargestellt.

![WSD-MappingStructureNewCustomDataType2](/img/content/WSD-MappingStructureNewCustomDataType2.png){:class="img-responsive"}

Wählen Sie den Funktionsbaustein BAPI_REQUISITION_CREATE, um die gewünschten Elemente zu importieren.

![WSD-MappingStructureNewCustomDataType3](/img/content/WSD-MappingStructureNewCustomDataType3.png){:class="img-responsive"}

In der folgenden Dialogmaske wählen Sie die Tabelle REQUISITION_ITEMS und klicken Sie auf *Next*. 

![WSD-MappingStructureNewCustomDataType4](/img/content/WSD-MappingStructureNewCustomDataType4.png){:class="img-responsive"}

Zunächst sind alle Felder der Tabelle selektiert. Nutzen Sie den Button *Deselect All*, um anschließend nur die gewünschten Felder auszuwählen, die Sie als Elemente in Ihrer Struktur verwenden möchten. Beenden Sie Ihre Eingaben mit *Finish*.

![WSD-MappingStructureNewCustomDataType5](/img/content/WSD-MappingStructureNewCustomDataType5.png){:class="img-responsive"}

Bestätigen Sie die beiden folgenden Dialogfenster mit *OK*.

![WSD-MappingStructureNewCustomDataType6](/img/content/WSD-MappingStructureNewCustomDataType6.png){:class="img-responsive"}

![WSD-MappingStructureNewCustomDataType7](/img/content/WSD-MappingStructureNewCustomDataType7.png){:class="img-responsive"}

Als nächsten Schritt definieren Sie einen Inputparameter, der die angelegte Datenstruktur enthält. Rufen Sie dafür in der Übersichtsmaske den Menüpunkt *Parameters* auf und klicken auf New. Nennen Sie den neuen Parameter *SAPReqItems* und wählen Sie als Datentyp *ReqItem*. Beenden Sie Ihre Eingaben mit OK. Damit haben Sie Ihren Struktur-Parameter erstellt.   

![WSD-MappingStructureNewParameter](/img/content/WSD-MappingStructureNewParameter.png){:class="img-responsive"}

Rufen Sie anschließend den Aktivitätsdialog auf, um das Mapping vorzunehmen. Scrollen Sie zur Input-Tabelle REQUISITION_ITEMS und rufen die Mapping Expression-Einstellungen mit einem Klick auf den Button rechts mit den drei Punkten auf. 

![WSD-MappingStructureMappingInput18](/img/content/WSD-MappingStructureMappingInput18.png){:class="img-responsive"}

![WSD-MappingStructureMappingInput1](/img/content/WSD-MappingStructureMappingInput1.png){:class="img-responsive"}

Klicken Sie auf *New*. Damit gelangen Sie in das nächste Dialogfenster. Hier sind alle Felder der Tabelle REQUISITION_ITEMS aufgelistet und können auf die Eingabe-Parameter der WebService Operation gemapped werden. Wählen Sie zunächst das Feld DOC_TYPE mit einem Klick auf die Zeile aus. Mit einem Klick auf den Button rechts neben der Spalte Mapping Expression gelangen Sie in die Mapping-Einstellungen für dieses Tabellenfeld.

![WSD-MappingStructureMappingInput12](/img/content/WSD-MappingStructureMappingInput12.png){:class="img-responsive"}

Als Mapping-Parameter steht der Struktur-Parameter *SAPReqItems* zur Verfügung. 
Wählen Sie diesen mit einem Doppelklick aus. 

![WSD-MappingStructureMappingInput2](/img/content/WSD-MappingStructureMappingInput2.png){:class="img-responsive"}

Wichtig ist nun, in der Mapping Expression-Zeile noch einen Verweis auf die entsprechenden Elemente des Struktur-Parameters einzufügen. Im vorliegenden Beispiel für das Feld *DOC_TYPE* hängen Sie die Endung .DOC_TYPE an die Mapping Expression-Zeile an. Beachten Sie, dass zwischen Groß- und Kleinschreibung unterschieden wird.

![WSD-MappingStructureMappingInput3](/img/content/WSD-MappingStructureMappingInput3.png){:class="img-responsive"}

Führen Sie das Mapping mit dieser Vorgehensweise für alle benötigten Datenfelder durch und bestätigen dann die beiden Dialogmaske mit OK.

![WSD-MappingStructureMappingInput4](/img/content/WSD-MappingStructureMappingInput4.png){:class="img-responsive"}

![WSD-MappingStructureMappingInput5](/img/content/WSD-MappingStructureMappingInput5.png){:class="img-responsive"}

Das Mapping-Szenario ist damit abgeschlossen. 
