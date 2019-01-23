---
ref: ecs-core-webservice-designer-04
layout: page
title: Erstellen von REST Webservices
description: Erstellen von REST Webservices
product: ecs-core
parent: webservices
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /ECS-Core-DE/default.aspx?pageid=rest-webservices-erstellen
---

Um einen neuen REST-Webservice für ECS Core anzulegen, öffnen Sie den WebService Designer und definieren Sie zunächst Ihre Server- und SAP-Verbindung (In der Menüleiste bei *Connections*). 
Detailierte Informationen zum Thema Webservice-Authentifizierung finden Sie im Abschnitt [Webservice Authentifizierung](./webservice_authentifizierung) 

Die SAP Verbindung wird zum Zugriff auf die SAP Metadaten bei der Erstellung des Webservice benötigt.

Geben Sie die im *SAP Connection Dialog* Ihre Verbindungsinformationen ein. 

Sie müssen folgende Daten eintragen: 
- Mandant (Client)
- Sprache (Language)
- Benutzername (Username) 
- Passwort (Password). 

Wenn Sie sich mit einem Single-Applicationsserver verbinden wollen, dann füllen Sie die Felder Host und System Number. 
Wenn Sie sich über Load-Balancing mit einem Message-Server verbinden wollen, dann füllen Sie die Felder Message Server , Group und SID. 
Es ist außerdem möglich, sich über einen HTTP-Webservice mit dem SAP-System zu verbinden. In dem Falle füllen Sie das Feld HTTP-URL. 

Sollten Sie diese Parameter nicht kennen, schauen Sie in Ihrer SAP-GUI nach oder fragen Sie Ihre SAP-Basis.

![ecscore-webservices1](/img/content/ecscore-wsd_1.png){:class="img-responsive"}


Im folgenden Beispiel möchten wir einen REST-Service erstellen, mit dem eine Bestellanforderung (BANF) in SAP angelegt werden kann. 


Beginnen Sie mit der Anlage einer neuen Operation mit dem Namen *PurchaseRequisition*, innerhalb welcher Sie mit der *Execute Function* Aktivität den SAP-Baustein BAPI_REQUISITION_CREATE aufrufen. Speichern Sie die Aktivität zunächst ohne die Konfiguration von Parametern ab:

![ecscore-webservices2](/img/content/ecscore-wsd_2.png){:class="img-responsive"}

Legen Sie unter *Parameters* die folgenden Input-Parameter an: 
- MATERIAL (Data Type: String)
- DOC_TYPE (Data Type: String)
- QUANTITY (Data Type: Decimal)
- PLANT (Data Type: String)
- DELIV_DATE (Data Type: DateTime)
- ACCTASSCAT (Data Type: String)

Mappen Sie diese auf die entsprechenden Werte der Input-Tabelle REQUISITION_ITEMS in der Execute Function Aktivität.

Legen Sie außerdem den Input-Parameter COST_CTR an und mappen diesen auf das entsprechende Feld der Input-Tabelle REQUISITION_ACCOUNT_ASSIGNMENT.

Da eine Feldkonvertierung nicht notwendiger Weise auf Konsumenten-Seite unterstützt wird (z.B. nicht in Nintex für Office365) kann diese im WebService Designer vorgenommen werden. Im vorliegenden Beispiel wird eine Feldkonvertierung für die Input-Felder *Delivery Date* und *Cost Center* benötigt. SAP benötigt das Datumsformat *yyyyMMdd* und führende Nullen bei der 10-stelligen Kostenstelle.     

Hinterlegen Sie für das Feld DELIV_DATE folgende Mapping Expression nach dem Parameter: ToString("yyyyMMdd")
Damit wird das Datum ins SAP-konforme Datumsformat konvertiert. 

![ecscore-webservices18](/img/content/ecscore-wsd_3.png){:class="img-responsive"}

Hinterlegen Sie für das Feld COST_CTR folgende Mapping Expression:*ToString("0000000000")*. Damit wird die Kostenstelle ins SAP-konforme Format mit führenden Nullen konvertiert. Alternativ kann die Formel *PadLeft(10, '0')* verwendet werden, um die führenden Nullen zu erzeugen. 


![ecscore-webservices19](/img/content/ecscore-wsd_4.png){:class="img-responsive"}

Zuletzt legen Sie den Return-Parameter ReqItemID (Data Type: String) an und mappen diesen auf den Output-Parameter NUMBER.

![ecscore-webservices3](/img/content/ecscore-wsd_5.png){:class="img-responsive"}

Beachten Sie, dass Sie auch einen *Custom Data Type* anlegen können, der die erforderlichen Felder enthält. In diesem Fall würden Sie im Parameter Dialog einen Listenparameter anstatt skalarer Parameter anlegen (List of [Custom Data Type]). Mit der Nutzung von Listenparametern ist es möglich, mehrere Positionen zu erstellen. Der SAP Baustein muss das erlauben. 

Vor dem Deployment können Sie explizit wählen, welche in ECS Core gepflegte SAP-Verbindung, der Webservice verwenden soll.

Öffnen Sie den *Server defined SAP connections dialog*:

![ecscore-webservices32](/img/content/ecscore-wsd_6.png){:class="img-responsive"}

Alle Services, die auf ECS Core Seite angelegt sind, werden hier aufgelistet. Falls Sie keine explizit auswählen, wird die Default Service Applikation verwendet. 

![ecscore-webservices33](/img/content/ecscore-wsd_7.png){:class="img-responsive"}

Übertragen Sie anschließend den Webservice nach ECS Core mit dem *Deploy* Button (In der Menüleiste bei *Server actions for web services*). 

Nach erfolgreichem Deployment finden Sie den Webservice auf der Management-Site Ihrer ECS Core Installation unter *Web Services*.
Der Webservice kann hier in eine OpenAPI-Definition exportiert werden und die Webservice-Definition kann lokal gesichert werden. Zudem kann der Webservice mit *Remove* auch entfernt werden. 

![ecscore-webservices6](/img/content/ecscore-wsd_8.png){:class="img-responsive"}

Sie finden ihn außerdem im IIS Manager unter der der Management Site (Standard-Port 8080) im Unterverzeichnis bin>WebServices:

![ecscore-webservices6](/img/content/ecscore-wsd_9.png){:class="img-responsive"}