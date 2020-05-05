---
ref: ecs-core-administration-03
layout: page
title: Services
description: Services
product: erpconnect-services
parent: ecscore-administration
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=ecscore-service-applikation
---

Im Tab *Services* können Services zur Verbindung zu einem SAP System neu angelegt und verwaltet werden.  

Klicken Sie auf *Add Service*, um einen neuen Service anzulegen.

![ecscore-managementsite4](/img/content/ecscore-managementsite4.png){:class="img-responsive"}

Machen Sie zunächst die Eingaben für folgende Felder:

**Name** - 		Frei wählbarer Name für den Service

**Client** -	SAP Mandantennummer.	Beispiel: 800

**Language** -	Die Sprache in der die Anmeldung am SAP System erfolgen soll. Beispiel: EN

![ecscore-managementsite5](/img/content/ecscore-managementsite5.png){:class="img-responsive"}

Tragen Sie anschließend die Werte ein für die Verbindungseinstellungen zu Ihrem SAP Systems. Sie haben folgende Alternativen:

**Use Single Application** -	Ein einzelner Applikationsserver wird für die Verbindung verwendet. Tragen Sie den Host-Name und die Systemnummer ein.
Server

**Use Load Balancing** -	Wählen Sie diese Option, wenn sie das SAP Load Balancing benutzen und SAP dazu bringen wollen, einen bestimmten Server für die 	Verbindung zu nutzen. Tragen Sie den Messageserver, die Logon-Gruppe und die SAP System ID (SID) ein.   

![ecscore-managementsite6](/img/content/ecscore-managementsite6.png){:class="img-responsive"}

Tragen Sie anschließend die Angaben zur Authentifizierungsmethode ein, die für die Verbindung mit dem SAP System genutzt werden soll. Sie haben folgende Optionen:

**Use Secure Store** -		ECSCore nutzt einen Secure Store, um die SAP-Anmeldedaten des angemeldeten Windows-Benutzers zu erhalten.
					Wählen Sie dazu die Option Secure Store Application ID, um eine existierende Secure Store Anwendung zu wählen. 
					Wie man für ECSCore einen Secure Store anlegt erfahren Sie [hier](./ecscore-secure-store). 

**Use SSO Ticket** -		Es wird ein SAP SSO Ticket für die Authentifizierung verwendet. Tragen Sie die Ticket Issuer URL ein. 

**Use SSO Ticket(pass-through)** -		SSO Ticket (pass through) wird für die Authentifizierung verwendet.
 

**Use SNC** - 				Wenn Ihr SAP-System für den Zugriff über SSO mit SNC konfiguriert ist, können Sie die Option SNC wählen und den Partner Name  						setzen. Der Partner Name hat die Form: p:sapservicensp@theobald-software.com. 

**Use technical access** -			Bei technical access als Authentifizierungsmethode tragen Sie in die Felder Username und Password den Benutzername und das
			Passwort des SAP-Benutzers ein.

Sie können außerdem definieren, dass diese Service Applikation als Standard verwendet werden soll (nur sinnvoll bei mehreren Services). 

![ecscore-managementsite7](/img/content/ecscore-managementsite7.png){:class="img-responsive"}

Die angelegten Services werden anschließend links aufgeführt und können jederzeit angepasst oder gelöscht werden.

![ecscore-managementsite8](/img/content/ecscore-managementsite8.png){:class="img-responsive"}

Sie müssen für jeden angelegten Service die Benutzer hinzufügen, die diesen Servicen nutzen dürfen.
Klicken Sie auf den neu hinterlegten Service und anschließend auf *Users*:

![ecscore-managementsite9](/img/content/ecscore-managementsite9.png){:class="img-responsive"}

Neue User fügen Sie mit Add User hinzu. Es sind damit die User Ihres Windows Systems gemeint. Sie können nach Bedarf einzelne Windows User oder Gruppen hinzufügen. 


Hinzugefügte Windows User oder Gruppen können jederzeit wieder entfernt werden.


