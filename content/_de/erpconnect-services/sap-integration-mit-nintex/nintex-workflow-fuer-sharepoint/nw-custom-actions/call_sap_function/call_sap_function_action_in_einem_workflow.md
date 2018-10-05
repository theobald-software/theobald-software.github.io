---
layout: page
title: Call SAP Function Action in einem Workflow
description: Call SAP Function Action in einem Workflow
product: erpconnect-services
parent: call_sap_function
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=call_sap_function_action_in_einem_workflow
---

Um die *Call SAP Function* Nintex Workflow Custom Action zu verwenden, suchen Sie im Nintex Workflow Manager nach der Action *Call SAP Function* oder rufen Sie den Menüpunkt mit ERPConnect Services auf der linken Seite auf. Dort sind alle Custom Actions der ERPConnect Services aufgelistet. Per Drag & Drop lässt sich die Action zum Workflow hinzufügen.

![ECS-Nintex-CallSAPFunction-Action2](/img/content/ECS-Nintex-CallSAPFunction-Action2.png){:class="img-responsive"}

Anschließend muss die Custom Action konfiguriert werden. Rufen Sie dafür über die Dropdown-Liste innerhalb der Action den Punkt *Configure* auf. 

![ECS-Nintex-CallSAPFunction-Action3](/img/content/ECS-Nintex-CallSAPFunction-Action3.png){:class="img-responsive"}

In den Konfigurations-Einstellungen muss zunächst die ERPConnect Service Application in der Dropdown-Liste ausgewählt werden.<br>
Die ERPConnect Service Application muss vorher in der Zentraladministration angelegt werden: <br>
[ECS Service Application anlegen](../../../../ecs-de/ecs-runtime/ecs-konfiguration/ecs-application-anlegen) 

Im Feld *SAP Function* wird der Funktionsbaustein eingetragen, der aufgerufen werden soll. Mit Search lässt sich in dem hinterlegten SAP System nach dem Funktionsbaustein suchen. 

![ECS-Nintex-CallSAPFunction-Action4](/img/content/ECS-Nintex-CallSAPFunction-Action4.png){:class="img-responsive"}

Mit dem Button *(Re-)Load parameters* werden die Parameter des Funktionsbausteins in die Konfigurationsmaske geladen. Denken Sie daran, dass alle Konfigurationseinstellungen verloren gehen, wenn Sie die Parameter neu laden. 

**Input**

Der Punkt *Input* lässt sich mit einem Klick auf das Pluszeichen aufklappen. Darunter sind alle Input-Parameter des Funktionsbausteins aufgeführt und können mit Werten hinterlegt werden. Oftmals benötigen Funktionsbausteine zwingend Eingabewerte wie z.B. ein Datum oder eine Personalnummer, um Rückgabewerte zu liefern. <br>
Schauen Sie sich daher vor der Nutzung der Custom Action immer zunächst die Eigenschaften des Funktionsbausteins in SAP an. 

![ECS-Nintex-CallSAPFunction-Action8](/img/content/ECS-Nintex-CallSAPFunction-Action8.png){:class="img-responsive"}

**Changings**
            
Unter *Changings* sind Changing-Parameter eines Funktionsbausteins aufgeführt, falls dieser solche enthält. Ansonsten ist dieser Bereich leer.  

![ECS-Nintex-CallSAPFunction-Action11](/img/content/ECS-Nintex-CallSAPFunction-Action11.png){:class="img-responsive"}

**Tables**

Unter Tables sind alle Ein- und Ausgabetabellen des Funktionsbausteins aufgeführt und stehen für die Dateneingabe zur Verfügung.

![ECS-Nintex-CallSAPFunction-Action9](/img/content/ECS-Nintex-CallSAPFunction-Action9.png){:class="img-responsive"}

**Table Input**

Neben *Table Input* sind alle Eingabetabellen des Funktionsbausteins aufgelistet. Mit einem Klick auf die jeweilige Tabelle öffnet sich ein Editierfenster, in dem Werte für die entsprechenden Tabellenfelder hinterlegt werden können. Zum Editieren klickt man auf das Symbol mit dem Stift. 

![ECS-Nintex-CallSAPFunction-Action12](/img/content/ECS-Nintex-CallSAPFunction-Action12.png){:class="img-responsive"}

![ECS-Nintex-CallSAPFunction-Action13](/img/content/ECS-Nintex-CallSAPFunction-Action13.png){:class="img-responsive"}

Über den Plus-Button können zusätzlich Zeilen hinzugefügt und mit Daten hinterlegt werden, vorausgesetzt der SAP Funktionsbaustein unterstützt die Verarbeitung mehreren Input-Zeilen. 

*Additional XML table input*

Mit *Additional XML table input* kann zusätzlich über eine Workflow Variable ein weiterer XML-Input zu einer oder mehreren Input-Tabellen hinzugefügt werden. Zum Aufbau des XML-Input schauen Sie sich bitte im weiteren Verlauf das Beispiel [Call SAP Function mit zusätzlichem XML-Input](./call_sap_function_mit_zus_tzlichem_xml_input)  an. 

![ECS-Nintex-CallSAPFunction-Action14](/img/content/ECS-Nintex-CallSAPFunction-Action14.png){:class="img-responsive"}

*XML output table/ XML output variable*

Mit der Funktion *XML Output table* und *XML Output variable* ist es möglich, die Rückgabewerte der Tabellen des Funktionsbausteins in eine Output-Variable wegzuschreiben. Daten können einem Nintex-Workflow grundsätzlich immer nur immer nur im XML-Format gespeichert werden. <br>

In der Dropdown-Liste neben *XML Output table* sind alle *Tabellen* des Funktionsbausteins aufgelistet. Es stehen folgende Auswahloptionen zur Verfügung:

- Die Auswahl einer einzelnen Tabelle
- Die Auswahl keiner Tabelle 
- Die Auswahl aller Tabellen 

![ECS-Nintex-CallSAPFunction-Action5](/img/content/ECS-Nintex-CallSAPFunction-Action5.png){:class="img-responsive"}

Eine Workflow-Variable muss in der Konfigurationsmaske im Menüpunkt *Variables* zunächst angelegen werden, damit sie unter *XML output variable* auswählbar ist.     

![ECS-Nintex-CallSAPFunction-Action6](/img/content/ECS-Nintex-CallSAPFunction-Action6.png){:class="img-responsive"}

**Output**

*Output parameters*

Unter *Output parameters* sind alle Export-Parameter des gewählten Funktionsbausteins aufgelistet und können 
zur Sicherung der Rückgabewerte Workflow-Variablen zugewiesen werden. <br>
Die Workflow-Variablen müssen im Menüpunkt *Variables* in der Konfigurationsmaske erst angelegen werden, damit sie auswählbar sind. Es kann dabei nur jeweils ein Element einer Workflow-Variable zugewiesen werden.

![ECS-Nintex-CallSAPFunction-Action7](/img/content/ECS-Nintex-CallSAPFunction-Action7.png){:class="img-responsive"}

**Advanced Options**

Unter *Advanced Options* stehen zusätzlich noch folgende Optionen zur Verfügung:

![ECS-Nintex-CallSAPFunction-Action10](/img/content/ECS-Nintex-CallSAPFunction-Action10.png){:class="img-responsive"}

*Transaction commit* 

Wenn der Haken bei *Transaction commit* gesetzt wird, wird nach der Verarbeitung des gewählten Funktionsbaustein noch der Bapi BAPI_TRANSACTION_COMMIT aufgerufen. Manche SAP Funktionsbausteine benötigen diese Commit-Funktion zwingend, um Daten erfolgreich in der Datenbank zu verbuchen. 

*Connection Scope*

Einige Szenarien erfordern es, dass mehrere Funktionsbausteine hintereinander ausgeführt werden, um den Prozess erfolgreich abzuschließen. Insbesondere bei HR-Prozessen ist dies der Fall, wo häufig eine Personalnummer zunächst gesperrt und nach der Verbuchung im entsprechenden Infotyp wieder entsperrt werden muss. Dieses Hintereinanderschalten von Funktionen muss jedoch immer im selben sogenannten *Connection Scope* erfolgen. Damit wird sichergestellt, dass die Funktionen zusammenhängen.

Um einen Connection Scope zu nutzen, gehen Sie bitte folgendermaßen vor:

Schritt 1: Variable definieren<br>
Frei benennbare Variable vom Typ *Multiple lines of text* anlegen und im Feld Connection Scope selektieren. 

Schritt 2: Scope beginnen<br>
In der selben Action für den Beginn des Scopes den Haken bei *Begin scope here* setzen. 

Schritt 3: Funktionen innerhalb des Scopes setzen (falls erforderlich)<br>
Für zusätzliche Funktionen innerhalb des Scope lediglich die XML-Variable im Feld *Connection Scope* hinzufügen.

Schritt 4: Scope schließen <br>
Haken bei *End connection scope here* setzen. Optional kann zusätzlich noch der Haken bei Transaction commit gesetzt werden, falls dies der Baustein erfordert.  

Nach dieser Vorgehensweise ist die Nutzung mehrerer Scopes innerhalb eines Workflows möglich. 