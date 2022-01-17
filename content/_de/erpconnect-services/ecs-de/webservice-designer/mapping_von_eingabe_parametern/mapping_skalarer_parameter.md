---
ref: ecs-wd-input-parameter-mapping-01
layout: page
title: Skalare Parameter
description: Skalare Parameter
product: erpconnect-services
parent: mapping_von_eingabe_parametern
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=mapping_skalarer_parameter
---

In diesem Abschnitt erläutern wir das Vorgehen für das Mapping skalarer Eingabe-Parameter einer WebService-Operation - das bedeutet Parameter mit einem Einzelwert - auf verschiedene Eingabe-Parameter eines SAP Funktionsbausteins. 

**Skalare Parameter auf Struktur-Parameter mappen**

Im folgenden Beispiel für das Mapping skalarer Eingabe-Parametern, zeigen wir Ihnen, wie skalare Eingabe-Parameter einer WebService Operation auf Struktur-Parameter eines Funktionsbausteins gemapped werden können. 

Als Anwendungsfall ziehen wir den Funktionsbaustein BAPI_CUSTOMER_CREATEFROMDATA1 heran. Mit dem Funktionsbaustein können Kundendaten im SAP-System angelegt werden. Für die Anlage eines Datensatzes muss der im Funktionsbaustein als Eingabe-Parameter definierte Struktur-Parameter PI_PERSONALDATA mit verschiedenen Werten versorgt werden. Wir beschränken uns im Beispiel auf die Felder FIRSTNAME, LASTNAME und CITY. 
Ziel ist es, drei skalare Eingabe-Parameter in der WebService-Operation zu definieren und diese auf die genannten Felder des Struktur-Parameters zu mappen. 

Legen Sie zunächst eine neue Operation an, die den Funktionsbaustein BAPI_CUSTOMER_CREATEFROMDATA1 aufruft und kehren Sie zur Übersichtsseite zurück.

Definieren Sie nun Ihre skalaren Eingabe-Parameter. Benennen Sie diese wie die geforderten Felder des Struktur-Parameters: Firstname, Lastname und City.    

![WSD-MappingSkalarMappingInput15](/img/content/WSD-MappingSkalarMappingInput15.png){:class="img-responsive"}

Rufen Sie anschließend den Aktivitätsdialog auf und scrollen Sie zum Struktur-Parameter PI_PERSONALDATA.

![WSD-MappingSkalarMappingInput16](/img/content/WSD-MappingSkalarMappingInput16.png){:class="img-responsive"}

Markieren Sie die Zeile und rufen Sie das Dialogfenster für die Mappingeinstellungen mit dem Button rechts von der Spalte *Mapping Expression* auf. Sie finden dort alle Felder der Struktur PI_PERSONALDATA aufgelistet vor.

![WSD-MappingSkalarMappingInput17](/img/content/WSD-MappingSkalarMappingInput17.png){:class="img-responsive"}

Markieren Sie die Zeile mit dem Feld FIRSTNAME und rufen Sie mit dem Button rechts die weiteren Mapping-Einstellungen auf. Hier wählen Sie mit einem Doppelklick den Eingabe-Parameter *Firstname* der WebService-Operation aus. 

![WSD-MappingSkalarMappingInput18](/img/content/WSD-MappingSkalarMappingInput18.png){:class="img-responsive"}

Verfahren Sie ebenso mit den beiden anderen Feldern LASTNAME und CITY. 

![WSD-MappingSkalarMappingInput19](/img/content/WSD-MappingSkalarMappingInput19.png){:class="img-responsive"}

Beenden Sie Ihre Eingaben mit OK. Das Szenario ist damit abgeschlossen. 


**Skalare Parameter auf Tabellenwerte mappen**

Im folgenden Beispiel stellen wir Ihnen vor, wie skalare Eingabe-Parameter einer Webservice-Operation mit dem WebService Designer auf Tabellenwerte eines Funktionsbausteins gemappt werden können. 

Als Anwendungsbeispiel ziehen wir den Funktionsbaustein BAPI_REQUISITION_CREATE heran. <br> 
Der Funktionsbaustein BAPI_REQUISITION_CREATE wird verwendet, um eine Bestellanforderung (BANF) in SAP anzulegen. <br>
Die Positionen werden der Tabelle REQUISITION_ITEMS übergeben.In unserem Szenario wollen wir nur eine Position übergeben. Dafür sind die folgenden fünf skalaren Eingabe-Parameter notwendig: Material, Quantity, Plant, Delivery Date und DocType.<br>
Ziel ist es, in der WebService Operation fünf skalare Eingabe-Parameter zu definieren und diese auf die oben genannten Felder der TabelleREQUISITION_ITEMS zu mappen. 

Legen Sie zunächst eine neue Operation an, die den Funktionsbaustein BAPI_REQUISITION_CREATE aufruft und kehren Sie zur Übersichtsseite zurück.

Definieren Sie nun Ihre skalaren Inputparameter.  Wir nennen diese Material, Quantity, Plant, Delivery Date und DocType. 

![WSD-MappingSkalarParameterDialog1](/img/content/WSD-MappingSkalarParameterDialog1.png){:class="img-responsive"}

Rufen Sie anschließend den Aktivitäts-Dialog auf und scrollen Sie herunter zur Input-Tabelle REQUISITION_ITEMS.

![WSD-MappingSkalarMappingInput1](/img/content/WSD-MappingSkalarMappingInput1.png){:class="img-responsive"}

Zum Mappen der Tabelle klicken Sie auf den Eingabebutton rechts des Feldes *Mapping Expression* und wählen im anschließenden Dialogfenster *New*. 

![WSD-MappingSkalarMappingInput2](/img/content/WSD-MappingSkalarMappingInput2.png){:class="img-responsive"}

Ordnen Sie nun die Inputparameter den entsprechenden Feldern zu. Klicken Sie dafür auf die Zeile mit dem gewünschten Tabellenfeld und klicken Sie auf den Eingabebutton rechts um ins nächste Dialogfenster zu gelangen. 

![WSD-MappingSkalarMappingInput14](/img/content/WSD-MappingSkalarMappingInput14.png){:class="img-responsive"}

Wählen Sie aus der Liste den passenden Inputparameter mit einem Doppelklick aus.

![WSD-MappingSkalarMappingInput3](/img/content/WSD-MappingSkalarMappingInput3.png){:class="img-responsive"}

Ordnen Sie auf diese Weise alle Inputparameter zu und beenden Ihre Eingaben mit OK.

![WSD-MappingSkalarMappingInput4](/img/content/WSD-MappingSkalarMappingInput4.png){:class="img-responsive"}

![WSD-MappingSkalarMappingInput5](/img/content/WSD-MappingSkalarMappingInput5.png){:class="img-responsive"}

Das Mapping-Szenario ist damit abgeschlossen.  


**Skalare Parameter auf skalare Parameter mappen**

Im abschließenden Beispiel für das Mapping skalarer Eingabe-Parameter zeigen wir Ihnen, wie skalare Eingabe-Parameter einer WebService-Operation auf skalare Eingabe-Parameter eines Funktionsbausteins gemappt werden können. 

Als Anwendungsbeispiel ziehen wir den Funktionsbaustein BAPI_COMPANYCODE_GETDETAIL heran. Dieser Funktionsbaustein liest Firmeninformationen zu einem bestimmten Buchungskreis aus und benötigt als Eingabe-Parameter den skalaren Parameter *COMPANYCODEID*.<br> 
Ziel ist es, in der Webservice-Operation einen skalaren Eingabe-Parameter zu definieren und diesen auf den Eingabe-Parameter *COMPANYCODEID* des Funktionsbausteins zu mappen.

Legen Sie zunächst eine Operation an, die den Funktionsbaustein BAPI_COMPANYCODE_GETDETAIL aufruft und kehren Sie zur Übersichtsseite zurück. <br>
Legen Sie als nächsten Schritt den Eingabe-Parameter an. Wir nennen diesen *CompanyID*. Klicken Sie in der Parameters Dialogbox aufNew, um einen neuen Eintrag anzulegen. Als Datentyp wählen Sie *String* und als Verarbeitungsrichtung *Input*.  

Optional können Sie einen Standardwert hinterlegen. Das Ergebnis wird dann auf diesen Wert eingeschränkt.   

![WSD-MappingSkalarMappingInput12](/img/content/WSD-MappingSkalarMappingInput12.png){:class="img-responsive"}

Öffnen Sie anschließend den Aktivitätsdialog und markieren Sie den Input-Parameter COMPANYCODEID. Rufen mit dem Button rechts das Mapping-Dialogfenster auf. Wählen Sie dort mit einem Doppelklick den unter *Parameters* aufgeführten Eingabe-Parameter CompanyID aus. 

![WSD-MappingSkalarMappingInput13](/img/content/WSD-MappingSkalarMappingInput13.png){:class="img-responsive"}

Das Mapping ist damit abgeschlossen. 
