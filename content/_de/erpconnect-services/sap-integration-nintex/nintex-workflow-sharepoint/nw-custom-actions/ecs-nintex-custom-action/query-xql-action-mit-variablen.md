---
layout: page
title: Query XQL Action mit Variablen
description: Query XQL Action mit Variablen
product: erpconnect-services
parent: ecs-nintex-custom-action
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=query-xql-action-mit-variablen
---

In diesem Beispiel setzen wir die Query XQL action in einem Nintex Workflow ein, um SAP-Benutzerdaten abzurufen. <br>
Wir verwenden den unten angezeigten SAP-Funktionsbaustein *BAPI_USER_GET_DETAIL* und verarbeiten mehrere Rückgabetabellen als XQL-Variablen im Workflow. 

Der Parameter *USERNAME* muss gesetzt werden, um den Funktionsbaustein ausführen zu können. Folgende Rückgabetabellen *PARAMETER, PROFILES* und *RETURN* benötigen wir im Workflow.

![ecs-nintex-usergetdetail-sap](/img/content/ecs-nintex-usergetdetail-sap.jpg){:class="img-responsive"}

Wir wollen das folgende XQL-statement verwenden. 

<details>
<summary>XQL Statement</summary>
{% highlight sql %}
EXECUTE FUNCTION 'BAPI_USER_GET_DETAIL'
EXPORTS USERNAME = 'Elzein'
TABLES RETURN INTO @RETVAL, PROFILES INTO @SAPProfiles, PARAMETER INTO @SAPParameter;
{% endhighlight %}
</details>

Zuerst führen wir es im XtractQL Explorer aus und prüfen das Ergebnis.

![ecs-nintex-usergetdetail-xqlexplorer](/img/content/ecs-nintex-usergetdetail-xqlexplorer.jpg){:class="img-responsive"}

In Sharepoint legen wir die folgende benutzerdefinierte Liste an.  

![ecs-nintex-usergetdetail-splist0](/img/content/ecs-nintex-usergetdetail-splist0.jpg){:class="img-responsive"}

Für die Liste legen wir einen Nintex-Workflow mit den folgenden Actions an. 

![ecs-nintex-usergetdetail-wf](/img/content/ecs-nintex-usergetdetail-wf.jpg){:class="img-responsive"}

Nun defineren wir die folgenden Workflow-Variablen, um die SAP-Rückgabe zu speichern. 

![ecs-nintex-usergetdetail-wfvariables](/img/content/ecs-nintex-usergetdetail-wfvariables.jpg){:class="img-responsive"}

In der Query XQL Action setzen wir eine vorhande ECS Service Application ins Feld *Application Name*. 

Ins Feld *XQL Query* setzen wir unser XQL-Statement. We verwenden den Knopf *Insert Reference*, um den Parameter *USERNAME* zu setzen. 

Um eine XQL-Ausgabevariable (z.B. *@SAPProfiles*) einer Workflowvariable (z.B. *VarProfiles*) zuzuweisen, setzen wir *@SAPProfiles* ins Variablenfeld und klicken wir auf *Add*. In the Liste wählen wir nun die Workflowvariable *VarProfiles*.

![ecs-nintex-usergetdetail-xql-action](/img/content/ecs-nintex-usergetdetail-xql-action.jpg){:class="img-responsive"}

Bearbeiten wir nun das *Update Item* action, um die Listenfelder anhand der Workflowvariablen zu aktualisieren. 

![ecs-nintex-usergetdetail-updateitem](/img/content/ecs-nintex-usergetdetail-updateitem.jpg){:class="img-responsive"}

Nun legen wir einen neuen Datensatz an und setzen wir das Feld *SAP User name*. 

![ecs-nintex-usergetdetail-splist1](/img/content/ecs-nintex-usergetdetail-splist1.jpg){:class="img-responsive"}

Wenn der Workflow läuft, werden die Listenfelder mit den SAP-Daten aktualisiert.  

![ecs-nintex-usergetdetail-splist2](/img/content/ecs-nintex-usergetdetail-splist2.jpg){:class="img-responsive"}

Auch SAP-Fehlermeldungen werden verarbeitet und werden ins Feld *SAP result* gespeichert, wie das untere Beispiel für einen ungültigen SAP-Nutzer zeigt. 

![ecs-nintex-usergetdetail-splist3](/img/content/ecs-nintex-usergetdetail-splist3.jpg){:class="img-responsive"}
