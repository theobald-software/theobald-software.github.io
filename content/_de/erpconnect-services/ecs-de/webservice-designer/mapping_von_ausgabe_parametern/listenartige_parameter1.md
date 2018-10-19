---
ref: ecs-wd-output-parameter-mapping-03
layout: page
title: Listenartige Parameter
description: Listenartige Parameter
product: erpconnect-services
parent: mapping_von_ausgabe_parametern
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=listenartige_parameter1
---

Im folgenden Beispiel für das Mapping von Ausgabe-Parametern zeigen wir Ihnen, wie listenartige Ausgabe-Parameter gemappt werden können. Ein listenartiger Parameter ist vergleichbar mit einem Struktur-Parameter, beinhaltet seine Datenelemente aber in Form einer Liste. Listenartige Parameter wurden grundsätzlich für das Mapping von Ein- oder Ausgabetabellen konzipiert.  
 
Als Anwendungsbeispiel ziehen wir den Funktionsbaustein BAPI_EMPLOYEE_GETDATA heran. Der Funktionsbaustein liest Personalstammdaten aus und schreibt die Ergebnisse in verschiedene Ausgabetabellen. <br>
Ziel in diesem Szenario ist es, einen listenartigen Parameter zu definieren, der die Elemente EMPLOYEE_ID, LASTNAME_M und FSTNAME_M enthält und die entsprechenden Werte der Ausgabetabelle PERSONAL_DATA auf diese Listenelemente zu mappen.

Legen Sie zunächst eine Operation an, die den Funktionsbaustein BAPI_EMPLOYEE_GETDATA aufruft und kehren Sie zur Übersichtsseite zurück. Rufen Sie den Menüpunkt *Custom Data Types* auf und klicken im folgenden Dialogfenster auf *New*, um einen neuen Datentyp mit dem Namen *Personal* anzulegen. Dieser Datentyp soll die Elemente EMPLOYEE_ID, LASTNAME_M und FSTNAME_M enthalten.

![WSD-MappingListMappingOutput1](/img/content/WSD-MappingListMappingOutput1.png){:class="img-responsive"}

Als nächsten Schritt definieren Sie Ihren listenartigen Ausgabe-Parameter. Rufen Sie dafür in der Übersichtsmaske den Menüpunkt Parameters auf und klicken auf *New*. Benennen Sie den neuen Parameter als *PersonalData* und wählen als Datentyp *ListofPersonal*. Beenden Sie die Eingaben mit OK. Der listenartige Ausgabe-Parameter ist damit angelegt.

![WSD-MappingListMappingOutput2](/img/content/WSD-MappingListMappingOutput2.png){:class="img-responsive"}

Rufen Sie anschließend den Aktivitätsdialog auf, um das Mapping vorzunehmen. Scrollen Sie zur Output-Tabelle PERSONAL_DATA und wählen in der Dropdown-Liste im Mapping-Feld den listenartigen Parameter *PersonalData* aus. Rufen Sie mit einem Klick auf den Button rechts mit den drei Punkten anschließend die Mapping Expression Einstellungen auf.

![WSD-MappingListMappingOutput3](/img/content/WSD-MappingListMappingOutput3.png){:class="img-responsive"}

Sie können nun jeweils über die Dropdown-Liste unter *Mapping* die gelisteten Tabellenfelder auswählen und den entsprechenden Elementen des listenartigen Parameters zuordnen. 

![WSD-MappingListMappingOutput4](/img/content/WSD-MappingListMappingOutput4.png){:class="img-responsive"}

Versuchen Sie auch die Funktion *Automap*. Wenn die Elemente gleich benannt wurden, können diese automatisch zugeordnet werden. Dies ist in unserem Beispiel für das Listenelement EMPLOYEE_ID nicht der Fall. In der Ausgabetabelle lautet das Feld PERNO und muss daher manuell zugeordnet werden. 

![WSD-MappingListMappingOutput5](/img/content/WSD-MappingListMappingOutput5.png){:class="img-responsive"}

![WSD-MappingListMappingOutput6](/img/content/WSD-MappingListMappingOutput6.png){:class="img-responsive"}

Bestätigen Sie Ihre Eingaben mit OK. Damit ist das Mapping-Szenario abgeschlossen.
