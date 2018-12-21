---
ref: ecs-core-administration-03
layout: page
title: SAP Connections
description: SAP Connections
product: erpconnect-services
parent: ecscore-administration
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=ecscore-service-applikation
---

Im Karteireiter *SAP Connections* können Verbindungen zu einem oder mehreren SAP Systemen neu angelegt und verwaltet werden.  

Klicken Sie auf *New SAP Connection*, um eine neue Verbindung anzulegen.

![ecscore-managementsite_sapconnection-1.jpg](/img/content/ecscore-managementsite_sapconnection-1.jpg){:class="img-responsive"}

Machen Sie zunächst die Eingaben für folgende Felder:

**Name** - 		Frei wählbarer Name für die Verbindung

**Client** -	SAP Mandantennummer.	Beispiel: 800

**Language** -	Die Anmeldesprache am SAP-System. Beispiel: EN

Tragen Sie anschließend die Werte  für die Verbindungseinstellungen zu Ihrem SAP-System ein. Sie haben folgende Alternativen:

**Use Single Application** -	Ein einzelner Applikationsserver wird für die Verbindung verwendet. Tragen Sie den Host-Name und die Systemnummer ein.
Server

**Use Load Balancing** -	Wählen Sie diese Option, wenn sie das SAP Load Balancing benutzen und SAP dazu bringen wollen, einen bestimmten Server für die 	Verbindung zu nutzen. Tragen Sie den Messageserver, die Logon-Gruppe und die SAP System ID (SID) ein.   

Tragen Sie anschließend die Angaben zur Authentifizierungsmethode ein, die für die Verbindung mit dem SAP System genutzt werden soll. Sie haben folgende Optionen:

**Use Secure Store** -		ECSCore nutzt einen Secure Store, um die SAP-Anmeldedaten des angemeldeten Windows-Benutzers zu erhalten.
					Wählen Sie dazu die Option Secure Store Application ID, um eine existierende Secure Store Anwendung zu wählen. 
					Wie man für ECSCore einen Secure Store anlegt erfahren Sie [hier](./ecscore-secure-store). 

**Use SSO Ticket** -		Es wird ein SAP SSO Ticket für die Authentifizierung verwendet. Tragen Sie die Ticket Issuer URL ein. 

**Use SSO Ticket(pass-through)** -		SSO Ticket (pass through) wird für die Authentifizierung verwendet.
 

**Use SNC** - 				Wenn Ihr SAP-System für den Zugriff über SSO mit SNC konfiguriert ist, können Sie die Option SNC wählen und den Partner Name  						setzen. Der Partner Name hat die Form: p:sapservicensp@theobald-software.com. 

**Use technical access** -			Bei technical access als Authentifizierungsmethode tragen Sie in die Felder Username und Password den Benutzername und das
			Passwort des SAP-Benutzers ein.

Sie können eine SAP-Verbindung mit dem Haken bei *Set instance as the default sercvice* als Standard-Verbindung festlegen (sinnvoll bei mehreren Verbindungen). 

Die angelegten Verdbindungen werden anschließend am linken Bildschirmrand aufgeführt und können jederzeit angepasst oder gelöscht werden.

Sie müssen für jeden angelegten Service die Windows-Benutzer oder -Gruppen hinzufügen, die den Servicen nutzen dürfen. Standardmäßig ist die Gruppe *Everyone* bereits hinzugefügt. 
Klicken Sie auf die neu hinterlegte Verdbinung und anschließend auf *Users*:

![ecscore-managementsite_sapconnection-2.jpg](/img/content/ecscore-managementsite_sapconnection-2.jpg){:class="img-responsive"}

Hinzugefügte Windows-Benutzer oder -Gruppen können jederzeit wieder entfernt werden.