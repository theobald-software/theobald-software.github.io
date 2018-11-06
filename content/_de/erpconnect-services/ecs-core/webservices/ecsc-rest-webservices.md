---
ref: ecs-core-webservice-designer-03
layout: page
title: REST Webservices
description: REST Webservices
product: erpconnect-services
parent: webservices
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=ecsc-rest-webservices
---

Um einen REST-Webservice für ECS Core anzulegen, wählen Sie bei der Neuanlage die Option *Creates default web service* und bestätigen die Auswahl mit OK.  

Im folgenden Beispiel möchten wir einen REST-Service anlegen, mit dem eine Bestellanforderung (BANF) in SAP angelegt werden kann. 


Beginnen Sie mit der Anlage einer neuen Operation, innerhalb welcher Sie mit *Execute Function* den SAP Baustein BAPI_REQUISITION_CREATE aufrufen:

![ecscore-webservices2](/img/content/ecscore-webservices2.png){:class="img-responsive"}

Legen Sie unter *Parameters* die Input-Parameter  MATERIAL, DOC_TYPE, QUANTITY, DELIV_DATE, PLANT und  ACCTASSCAT an und mappen diese auf die entsprechenden Werte der Input-Tabelle REQUISITION_ITEMS.

Legen Sie außerdem den Input-Parameter COST_CTR an und mappen diesen auf das entsprechende Feld der Input-Tabelle REQUISITION_ACCOUNT_ASSIGNMENT.

Da eine Feldkonvertierung nicht notwendiger Weise auf Konsumenten-Seite unterstützt wird (z.B. nicht in Nintex für Office365) kann diese im WebService Designer vorgenommen werden. Im vorliegenden Beispiel wird eine Feldkonvertierung für die Input-Felder *Delivery Date* und *Cost Center* benötigt. SAP benötigt das Datumsformat *yyyyMMdd* und führende Nullen bei der 10-stelligen Kostenstelle.     

Hinterlegen Sie für das Feld DELIV_DATE folgende Mapping Expression nach dem Parameter: ToString("yyyyMMdd")
Damit wird das Datum ins SAP-konforme Datumsformat konvertiert. 

![ecscore-webservices18](/img/content/ecscore-webservices18.png){:class="img-responsive"}

Hinterlegen Sie für das Feld COST_CTR folgende Mapping Expression:*ToString("0000000000")*. Damit wird die Kostenstelle ins SAP-konforme Format mit führenden Nullen konvertiert. Alternativ kann die Formel *PadLeft(10, '0')* verwendet werden, um die führenden Nullen zu erzeugen. 


![ecscore-webservices19](/img/content/ecscore-webservices19.png){:class="img-responsive"}

Zuletzt legen Sie den Return-Parameter ReqItemID an und mappen diesen auf den Output-Parameter NUMBER.

![ecscore-webservices3](/img/content/ecscore-webservices3.png){:class="img-responsive"}

Beachten Sie, dass Sie auch einen *Custom Data Type* anlegen können, der die erforderlichen Felder enthält. In diesem Fall würden Sie im Parameter Dialog einen Listenparameter anstatt skalarer Parameter anlegen (List of [Custom Data Type]). Mit der Nutzung von Listenparametern ist es möglich, mehrere Positionen zu erstellen. Der SAP Baustein muss das erlauben. 

Vor dem Deployment können Sie explizit wählen, welche Service Applikation für die SAP Verbindung in ECS Core verwendet werden soll.

Öffnen Sie den *ECS Service Application* Selektionsdialog:

![ecscore-webservices32](/img/content/ecscore-webservices32.png){:class="img-responsive"}

Alle Services, die auf ECS Core Seite angelegt sind, werden hier aufgelistet. Falls Sie keine explizit auswählen, wird die Default Service Applikation verwendet. 

![ecscore-webservices33](/img/content/ecscore-webservices33.png){:class="img-responsive"}

Übertragen Sie anschließend den Webservice nach ECS Core mit *Deploy*. 


Nach erfolgreichem Deployment finden Sie den Webservice auf der Management-Site Ihrer ECS Core-Maschine unter *Extensions>Services*.

![ecscore-webservices5](/img/content/ecscore-webservices5.png){:class="img-responsive"}

Sie finden ihn außerdem im IIS Manager unter der Port 8080-Site im Unterverzeichnis WSD:

![ecscore-webservices6](/img/content/ecscore-webservices6.png){:class="img-responsive"}

Wie Sie den Webservice in Nintex für Office 365 aufrufen können wird [hier]() beschrieben.  
