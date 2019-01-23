---
ref: ecscore-wd-input-parameter-mapping-03
layout: page
title: Listenartige Parameter
description: Listenartige Parameter
product: erpconnect-services
parent: mapping_von_eingabe_parametern
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=listenartige_parameter
---

Im folgenden Beispiel für das Mapping von Eingabe-Parametern zeigen wir Ihnen, wie listenartige Eingabe-Parameter gemappt werden können. Ein listenartiger Parameter ist vergleichbar mit einem Struktur-Parameter, beinhaltet seine Datenelemente aber in Form einer Liste. Listenartige Parameter wurden insbesondere für das Mapping von Ein- oder Ausgabetabellen konzipiert.  

Als Beispiel verwenden wir den Funktionsbaustein BAPI_REQUISITION_CREATE. Dieser FuBa wird verwendet, um eine Bestellanforderung (BANF) in SAP anzulegen. Die Positionen werden der Tabelle REQUISITION_ITEMS übergeben.
In unserem Szenario wollen wir nur eine Position übergeben. Dafür sind die folgenden fünf Eingabe-Parameter notwendig: Material, Quantity, Plant, Delivery Date und DocType. Das Ziel ist es, einen listenartigen Eingabe-Parameter zu definieren, der fünf Listen-Elemente enthält und diese auf die oben genannten Felder der Tabelle REQUISITION_ITEMS zu mappen.  

Legen Sie dafür zunächst eine Operation an, die den Funktionsbaustein BAPI_REQUISITION_CREATE aufruft. <br>
Rufen Sie anschließend den Menüpunkt *Custom Data Types* in der Übersichtsmaske auf und legen einen neuen Datentyp mit dem Namen *ReqItem* an. Dieser Datentyp soll die Elemente Material, Quantity, Plant, Delivery Date und DocType enthalten.   

![WSD-MappingStructureNewCustomDataType6](/img/content/WSD-MappingStructureNewCustomDataType6.png){:class="img-responsive"}

Als nächsten Schritt definieren Sie Ihren listenartigen Eingabe-Parameter. Rufen Sie dafür in der Übersichtsmaske den Menüpunkt Parameters auf und klicken auf *New*. Benennen Sie den neuen Parameter als SAPReqItems und wählen als Datentyp *ListofReqItem*. Beenden Sie die Eingaben mit OK. Der listenartige Eingabe-Parameter ist damit angelegt.

![WSD-MappingSkalarParameterDialog2](/img/content/WSD-MappingSkalarParameterDialog2.png){:class="img-responsive"}

Rufen Sie anschließend den Aktivitätsdialog auf, um das Mapping vorzunehmen. Scrollen Sie zur Input-Tabelle REQUISITION_ITEMS und wählen in der Dropdown-Liste im Mapping-Feld den listenartigen Parameter *SAPReqItems* aus. Rufen Sie danach mit einem Klick auf den Button rechts mit den drei Punkten die Mapping Expression Einstellungen auf.

![WSD-MappingSkalarMappingInput9](/img/content/WSD-MappingSkalarMappingInput9.png){:class="img-responsive"}

Sie können nun jeweils über die Dropdown-Liste unter *Mapping* die gelisteten Elemente des listenartigen Parameters *SAPReqItems* auswählen und den entsprechenden Tabellenfeldern zuordnen. Falls die Listen-Elemente und die Tabellenfelder gleich benannt sind, kann auch die Automap Funktion genutzt werden.  

![WSD-MappingSkalarMappingInput10](/img/content/WSD-MappingSkalarMappingInput10.png){:class="img-responsive"}

![WSD-MappingSkalarMappingInput11](/img/content/WSD-MappingSkalarMappingInput11.png){:class="img-responsive"}

Bestätigen Sie Ihre Eingaben mit OK. Damit Ist das Mapping der listenartigen Eingabe-Parameter abgeschlossen. 