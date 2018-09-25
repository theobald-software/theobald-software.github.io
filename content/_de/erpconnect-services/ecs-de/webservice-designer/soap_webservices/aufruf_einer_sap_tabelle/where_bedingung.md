---
layout: page
title: Where Bedingung
description: Where Bedingung
product: erpconnect-services
parent: aufruf_einer_sap_tabelle
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=where_bedingung
---

Soll zusätzlich ein Filter genutzt werden, dann kann dieser über eine sogenannte Where Bedingung 
(Where Clause) in das Modell eingebaut werden. Machen Sie einen Rechtsklick auf die 
*EXECUTE TABLE*-Aktivität und wählen Sie *Edit*. Klicken Sie auf den Button auf der rechten Seite im *Where Clause* Feld, um einen Filter zu definieren. Klicken Sie auf *New*, um eine Filterbedingung mit der Bezeichnung Namefilter anzulegen. Verwenden Sie den Button im *Expression* Feld, um den Filterparameter *Name* auszuwählen.   

![WSD_NewWhereClauseParameterDialog](/img/content/WSD_NewWhereClauseParameterDialog.png){:class="img-responsive"}

![WSD-WhereClauseParameterExpressionDialog](/img/content/WSD-WhereClauseParameterExpressionDialog.png){:class="img-responsive"}

Anschließend muss der Filterwert entsprechend dem technischen Feldnamen in der SAP-Tabelle definiert 
werden. Im vorliegenden Beispiel soll ein Filter für das Tabellenfeld NAME1 angelegt werden.

![WSD-SAPTableKNA1](/img/content/WSD-SAPTableKNA1.png){:class="img-responsive"}

Die Where Bedingung muss sich auf den technischen Feldnamen und den Inputparameter beziehen. <br>
Achten Sie darauf, den Name der Filterbedingung zwischen einfache Anführungszeichen zu setzen.

![WSD-TableWhereClauseDialog2](/img/content/WSD-TableWhereClauseDialog2.png){:class="img-responsive"}

Der Filter lässt sich nach anschließendem Deployen im Webservice nutzen.        