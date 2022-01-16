---
ref: ecs-sin-nis-read-sap-table-action-02
layout: page
title: Read SAP Table Action mit Advanced Options
description: Read SAP Table Action mit Advanced Options
product: erpconnect-services
parent: call_sap_table
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=read_sap_table_action_mit_advanced_options
---

Im folgenden Beispiel zeigen wir, wie Sie mit der *Read SAP Table* Action eine SAP-Tabelle aufrufen und sich das XML-Output in einer 
SharePoint Liste anzeigen lassen können. Unter Advanced Options sollen weitere Bedingungen für den Aufruf der Tabelle definiert werden.

Als Beispiel ziehen wir die Tabelle MAKT heran. Diese Tabelle beinhaltet nur wenige Spalten und listet Materialien anhand ihrer Materialnummer und zugehörigem Lang- und Kurztext auf.  

Ziel in unserem Szenario ist es, die Spalten MATNR, SPRAS und MAKTX der Tabelle MAKT als XML-Output ausgeben zu lassen und das Output in die Workflow-Variable Output schreiben zu lassen. Die Anzeigemenge soll auf 20 Zeilen begrenzt werden. Des Weiteren soll als WHERE-Bedingung definiert werden, dass die Spalte SPRAS (Sprache) auf den Wert EN (Englisch) eingeschränkt wird. 

Das XML-Output soll anschließend in der Spalte einer SharePoint-Liste angezeigt werden.

Legen Sie zunächst eine SharePoint-Liste (*Custom-List)* an, die die Spalte *Output* enthält. Wir nennen die Liste *Material Data*. <br>
Achten Sie darauf, die Spalte *Output* als *Multiple lines of text* zu konfigurieren, da der spätere XML-Output mehrere Zeilen enthalten wird. 
Wählen Sie zudem als Texttyp *Plain text*, es kann sonst zu Formatierungsfehlern kommen.  

![ECS-Nintex-ReadSAPTable-Example1](/img/content/ECS-Nintex-ReadSAPTable-Example1.png){:class="img-responsive"}

Rufen Sie anschließend über das *LIST* Menü und den Menüpunkt *Workflow Settings* den Punkt *Create Workflow in Nintex Workflow* auf, um einen neuen Workflow anzulegen.

Wählen Sie im Nintex Workflow Manager die *Call SAP Function Custom Action* aus und ziehen Sie diese per Drag & Drop auf das Workflow-Diagramm. Öffnen Sie anschließend die Konfigurationseinstellungen der Action.

![ECS-Nintex-ReadSAPTable-Example2](/img/content/ECS-Nintex-ReadSAPTable-Example2.png){:class="img-responsive"}

Definieren Sie die *ERPConnect Service Application* und tragen Sie bei *SAP table* die Tabelle MAKT ein. <br>
Klicken Sie anschließend auf *Load parameters* um die Tabellenwerte in die Konfigurationsmaske zu laden. 
Unter *Column selection* sind die verfügbaren Spalten der Tabelle aufgeführt. Schränken diese gleich auf die drei gewünschten Spalten  MATNR, SPRAS und MAKTX ein.


![ECS-Nintex-ReadSAPTable-Example3](/img/content/ECS-Nintex-ReadSAPTable-Example3.png){:class="img-responsive"}

Rufen Sie anschließend den Menüpunkt Variables auf, um die Workflow-Variable anzulegen, 
in die der XML-Output geschrieben werden soll. Klicken Sie unter *Workflow Variables* auf *New*, um eine neue Variable anzulegen. Benennen Sie die Variable *Output*. Da der XML-Output mehrere Zeilen enthalten wird, wählen Sie als Typ *Multiple lines of text* und klicken Sie anschließend auf Save, um die Variable abzuspeichern. 

![ECS-Nintex-ReadSAPTable-Example4](/img/content/ECS-Nintex-ReadSAPTable-Example4.png){:class="img-responsive"}

Die Output-Variable kann anschließend im Feld *XML output variable* zugeordnet werden. Damit haben wir sichergestellt, 
dass der erzeugte XML-Output für die Tabelle MAKT in die Workflow-Variable *Output* geschrieben wird. 


![ECS-Nintex-ReadSAPTable-Example5](/img/content/ECS-Nintex-ReadSAPTable-Example5.png){:class="img-responsive"}

Öffnen Sie anschließend die *Advanced Options*. Dort sollen zusätzliche Einschränkungen und Bedingungen zur Anzeige der Tabelle hinterlegt werden. <br>
Die Anzahl der ausgegebenen Zeilen soll auf 20 beschränkt werden. Tragen Sie daher bei *Row Count* den Wert 20 ein. Des weiteren soll als Where-Klausel definiert werden, dass die Spalte SPRAS auf den Wert EN begrenzt wird. Tragen Sie dafür im Eingabefenster bei *Where Clause* die Bedingung SPRAS = 'EN' ein. 

![ECS-Nintex-ReadSAPTable-Example6](/img/content/ECS-Nintex-ReadSAPTable-Example6.png){:class="img-responsive"}

Sichern Sie die Einstellungen mit Save. Die Konfiguration der *Read SAP table* Custom Action ist damit abgeschlossen. 

Anschließend muss noch festgelegt werden, dass das XML-Output in der Spalte *Output* unserer SharePoint-Liste *Material Data* ausgegeben wird. Fügen Sie dafür die Nintex Workflow Action Set Field Value zum Workflow hinzu und öffnen Sie die Konfigurationseinstellungen. 


![ECS-Nintex-ReadSAPTable-Example7](/img/content/ECS-Nintex-ReadSAPTable-Example7.png){:class="img-responsive"}

Wählen Sie hier in der Auswahl bei Set die Spalte *Output* der SharePoint-Liste aus. Diese soll der Workflow-Variablen *Output* zugewiesen werden. Wählen Sie dafür bei *Equals* den Wert *Workflow Data* und wählen Sie in der Dropdown-Liste die Workflow Variable *Output* aus. Sichern Sie die Eingaben mit Save. 

![ECS-Nintex-ReadSAPTable-Example8](/img/content/ECS-Nintex-ReadSAPTable-Example8.png){:class="img-responsive"}

Sichern und Publizieren Sie anschließend den Workflow. Wir wählen als Workflow-Name *Material Data*. 

![ECS-Nintex-ReadSAPTable-Example9](/img/content/ECS-Nintex-ReadSAPTable-Example9.png){:class="img-responsive"}

Kehren Sie zur SharePoint-Liste Material Data zurück und Starten Sie manuell über den Menüpunkt *Items* den Workflow, nachdem Sie ein neues Item mit dem Namen Material angelegt haben.

![ECS-Nintex-ReadSAPTable-Example10](/img/content/ECS-Nintex-ReadSAPTable-Example10.png){:class="img-responsive"}

![ECS-Nintex-ReadSAPTable-Example11](/img/content/ECS-Nintex-ReadSAPTable-Example11.png){:class="img-responsive"}

Der XML-Output wird wie gewünscht mit den definierten Einschränkungen in der Spalte Output ausgegeben.

![ECS-Nintex-ReadSAPTable-Example12](/img/content/ECS-Nintex-ReadSAPTable-Example12.png){:class="img-responsive"}
