---
layout: page
title: Call SAP Function Action mit zusätzlichem XML-Input
description: Call SAP Function Action mit zusätzlichem XML-Input
product: erpconnect-services
parent: call_sap_function
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=call_sap_function_mit_zus_tzlichem_xml_input
---

Über die Funktion *Additional XML table input* im Menüpunkt *Tables* kann optional ein zusätzlicher 
XML-Tabellen-Input verarbeitet werden.

Im folgenden Beispiel möchten wir Ihnen diese Funktion demonstrieren. Beachten Sie, dass Sie für diese Funktion einen SAP 
Funktionsbaustein benötigen, der Tabellen-Inputs verarbeiten kann. Wir verwenden den Funktionsbaustein BAPI_REQUISITION_CREATE. 
Dieser Funktionsbaustein wird verwendet, um eine Bestellanforderung (BANF) in SAP anzulegen. Die Positionen werden der Tabelle 
REQUISITION_ITEMS übergeben. In unserem Beispiel wollen wir eine Bestellanforderung mit mehreren Positionen anlegen. 
Für die Anlage einer Position sind die folgenden Eingabe-Parameter notwendig: Prequisition Item, Doc Type, Material, Plant, Quantity und Delivery Date.

Zwei Positionen sollen über die Eingabe-Tabelle REQUISITION_ITEMS aufgeben werden, eine Position als zusätzlicher XML-Tabellen-Input. 

Angezeigt werden soll die Ausgabetabelle RETURN nach Ausführung des Workflows in der Spalte einer SharePoint Liste. Über die Return-Message 
sieht man, ob die Bestellanforderung korrekt angelegt wurde. Das Ergebnis kann anschließend in SAP überprüft werden.  

Legen Sie zunächst eine SharePoint-Liste (*Custom-List*) an, die die Spalte Output enthält. Wir nennen die Liste *Requisition Create*. <br>
Achten Sie darauf, dass die Spalte Output mit *Multiple lines of text* angelegt wird und *Plain text* erlaubt.

![ECS-Nintex-CallSAPFunction-XMLInput1](/img/content/ECS-Nintex-CallSAPFunction-XMLInput1.png){:class="img-responsive"}

Erstellen Sie anschließend auf Basis dieser Liste einen Nintex Workflow. Fügen Sie die Call SAP Function Custom Action zum Workflow 
hinzu und hinterlegen Sie die ECS Service Application und den SAP Funktionsbaustein BAPI_REQUISITION_CREATE in den 
Konfigurationseinstellungen. Wählen Sie nachdem Sie die Parameter des Funktionsbausteins geladen haben die Tabelle RETURN als XML-Output aus.  

Legen Sie zudem unter Variables die *Variable* Output vom Typ *Multiple lines of text* an und wählen diese Variable unter *XML output variable* aus. 

![ECS-Nintex-CallSAPFunction-XMLInput2](/img/content/ECS-Nintex-CallSAPFunction-XMLInput2.png){:class="img-responsive"}

Anschließend wenden wir uns den Input-Werten zur Anlage der Positionen zu. Klappen Sie das *Tables*-Feld auf und klicken Sie unter *Table input* auf die Tabelle REQUISITION_ITEMS.

![ECS-Nintex-CallSAPFunction-XMLInput3](/img/content/ECS-Nintex-CallSAPFunction-XMLInput3.png){:class="img-responsive"}

Fügen Sie über das *Plus* Symbol eine weitere Zeile hinzu, da wir zwei Positionen anlegen möchten. 

Folgende Eingabewerte sollen verwendet werden:

*Erste Zeile (= erste Materialposition)*

PREQ_ITEM = 00000<br>
DOC_TYPE = NB <br>
MATERIAL = 100-100<br>
PLANT = 1000<br>
QUANTITY = 10<br>
DELIV_DATE = 20150331<br>

*Zweite Zeile (=zweite Materialposition)* 

PREQ_ITEM = 00000<br>
DOC_TYPE = NB<br>
MATERIAL = 100-101<br>
PLANT = 1000<br>
QUANTITY = 20<br>
DELIV_DATE = 20150331<br>

Öffnen Sie mit dem Stift-Symbol das Editierfenster für die erste Zeile und machen Sie zunächst die Eingaben für die erste Materialposition.

Geben Sie zunächst die Eingaben für die Felder PREQ_ITEM und DOC_TYPE ein.

![ECS-Nintex-CallSAPFunction-XMLInput4](/img/content/ECS-Nintex-CallSAPFunction-XMLInput4.png){:class="img-responsive"}

Scrollen Sie anschließend nach unten und geben Sie die Werte für die Felder  MATERIAL und PLANT ein. Der Parameter 
MATERIAL bezeichnet die Materialnummer, PLANT bezeichnet den Buchungskreis.

![ECS-Nintex-CallSAPFunction-XMLInput5](/img/content/ECS-Nintex-CallSAPFunction-XMLInput5.png){:class="img-responsive"}

Scrollen Sie weiter nach unten und geben Sie die Werte für die zwei restlichen Felder QUANTITY und DELIV_DATE ein. 
QUANTITY bezeichnet die Materialmenge und DELIV_DATE das Lieferdatum. Dieses (31.03.2015) kann entweder direkt im SAP-konformen Datums-Format yyyyMMdd hinterlegt werden, oder Sie verwenden die Inline Function *FormatDate*, um das Datum umzuformatieren (siehe [Call SAP Function Action mit Variablen](./call_sap_function_action_in_einem_workflow)).  

![ECS-Nintex-CallSAPFunction-XMLInput6](/img/content/ECS-Nintex-CallSAPFunction-XMLInput6.png){:class="img-responsive"}

Scrollen Sie anschließend ganz nach oben und sichern Sie die Einstellungen mit Save. Danach nehmen Sie die Eingaben für die zweite Zeile vor. 

![ECS-Nintex-CallSAPFunction-XMLInput19](/img/content/ECS-Nintex-CallSAPFunction-XMLInput19.png){:class="img-responsive"}

Die Eingaben auf Seiten des Funktionsbausteins sind damit abgeschlossen. Wir wenden uns damit dem zusätzlichen XML-Tabellen-Input zu. 
Legen Sie unter Variables eine neue Variable mit dem Namen *XML-Input* an. Die Variable muss vom Typ *Multiple lines of text* sein, da 
sich das XML-Statement über mehrere Zeilen erstreckt. 

![ECS-Nintex-CallSAPFunction-XMLInput7](/img/content/ECS-Nintex-CallSAPFunction-XMLInput7.png){:class="img-responsive"}

Das XML-Statement kann anschließend in der Textbox bei *Default Value* hinterlegt werden und muss folgenden Aufbau haben:

Das TABLES-Element umschließt den ganzen Inhalt. In der nächsten Hierarchie-Ebene befinden sich die Tabellen, realisiert als 
TABLE-Elemente mit dem Attribut name, das den Tabellennamen enthält. Eine Stufe tiefer befinden sich die Datensätze, die 
jeweils den Namen der Tabelle tragen, darunter dann die jeweiligen Felder der Tabelle mit ihrem Inhalt.
Dieses Format wird beim XML-Input und auch bei der Ausgabe verwendet.

Im vorliegenden Beispiel sieht das Statement dann folgendermaßen aus:

![ECS-Nintex-CallSAPFunction-XMLInput18](/img/content/ECS-Nintex-CallSAPFunction-XMLInput18.png){:class="img-responsive"}

Wir verwenden für das XML-Input für den Parameter MATERIAL den Wert 100-110 und für den Parameter QUANTITY, 
den Wert 15. Für die übrigen Parameter hinterlegen wir die gleichen Eingabewerte, wie für die beiden Positionen, die 
über den Tabellen-Input angelegt werden (DOC_TYPE = NB, etc.) 

Hinterlegen Sie das Statement im Default-Fenster. Achten Sie darauf, dass keine Leerzeilen vorhanden sind. <br>
Bei umfangreichen Statements empfiehlt sich die vorherige Aufbereitung in einem Texteditor. Alternativ kann das Textfeld 
auch freigelassen werden und bei Show on startform ein Haken gesetzt werden. Das Statement kann dann beim Start des
Workflows in einem etwas größeren Fenster eingegeben und/oder angepasst werden.  


![ECS-Nintex-CallSAPFunction-XMLInput8](/img/content/ECS-Nintex-CallSAPFunction-XMLInput8.png){:class="img-responsive"}

Sichern Sie die Variable mit *Save*. Ordnen Sie anschließend unter *Additional XML table input* im Menüpunkt Tables die eben angelegte *Variable* 
zu und sichern Sie die Einstellungen mit Save. 

![ECS-Nintex-CallSAPFunction-XMLInput10](/img/content/ECS-Nintex-CallSAPFunction-XMLInput10.png){:class="img-responsive"}

Die Konfiguration der Call SAP Function Custom Action ist damit abgeschlossen. Wir wenden uns nun der Darstellung des XML-Outputs 
in der SharePoint-Liste zu.

Fügen Sie dafür in der Übersichtsmaske des Workflow Managers die Custom Action Set field value dem Workflow hinzu und rufen Sie 
die Konfigurationseinstellungen auf. 

![ECS-Nintex-CallSAPFunction-XMLInput9](/img/content/ECS-Nintex-CallSAPFunction-XMLInput9.png){:class="img-responsive"}

Ordnen Sie hier der SharePoint Listenspalte *Output* die Workflow-Variable *Output* zu und sichern Sie die Einstellungen.

![ECS-Nintex-CallSAPFunction-XMLInput11](/img/content/ECS-Nintex-CallSAPFunction-XMLInput11.png){:class="img-responsive"}

Sichern und publizieren Sie anschließend den Workflow. Wir nennen den Workflow *Requisiton Create*.

![ECS-Nintex-CallSAPFunction-XMLInput12](/img/content/ECS-Nintex-CallSAPFunction-XMLInput12.png){:class="img-responsive"}

Kehren Sie zu Ihrer SharePoint-Liste zurück und starten Sie den Workflow manuell über die Menüleiste im Punkt Items. 
Legen Sie dafür zunächst ein neues Item mit dem Namen New Requisition an. 

![ECS-Nintex-CallSAPFunction-XMLInput15](/img/content/ECS-Nintex-CallSAPFunction-XMLInput15.png){:class="img-responsive"}

![ECS-Nintex-CallSAPFunction-XMLInput13](/img/content/ECS-Nintex-CallSAPFunction-XMLInput13.png){:class="img-responsive"}

Im Feld Output sollte nach erfolgreicher Durchführung des Workflows die Return-Message zur Anlage der 
Bestellanforderung aufgeführt sein.

![ECS-Nintex-CallSAPFunction-XMLInput14](/img/content/ECS-Nintex-CallSAPFunction-XMLInput14.png){:class="img-responsive"}

Im Beispiel wurde die Bestellanforderung mit der Nummer 0010017297 angelegt. Es kann nun im SAP-System überprüft werden, 
ob die Eingaben über die Tabelle REQUISITION_ITEMS und das zusätzliche XML-Input korrekt verarbeitet wurden. Rufen Sie 
dafür im SAP-System die Tabelle EBAN auf und geben in der Selektionsmaske der Transaktion SE16 die erstellte 
Bestellanforderungsnummer ein. 


![ECS-Nintex-CallSAPFunction-XMLInput16](/img/content/ECS-Nintex-CallSAPFunction-XMLInput16.png){:class="img-responsive"} 
            

Dort sollten nun die drei angelegten Positionen mit den Materialnummern 100-100, 100-101 und 100-110 aufgeführt sein.<br> 
Die Anlage der Bestellanforderung über die Call SAP Function Custom Action inklusive zusätzlichem XML-Input war damit erfolgreich
und das Szenario ist abgeschlossen. 


![ECS-Nintex-CallSAPFunction-XMLInput17](/img/content/ECS-Nintex-CallSAPFunction-XMLInput17.png){:class="img-responsive"}