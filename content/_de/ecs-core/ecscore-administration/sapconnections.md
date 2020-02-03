---
ref: ecs-core-administration-03
layout: page
title: SAP Connections
description: SAP Connections
product: ecs-core
parent: ecscore-administration
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /ECS-Core-DE/default.aspx?pageid=ecscore-service-applikation
---

Im Karteireiter *SAP Connections* können Verbindungen zu einem oder mehreren SAP Systemen neu angelegt und verwaltet werden.  

Klicken Sie auf *New SAP Connection*, um eine neue Verbindung anzulegen.

![ecscore-managementsite_sapconnection-1.png](/img/content/ecscore-managementsite_sapconnection-1.png){:class="img-responsive"}

Machen Sie zunächst die Eingaben für folgende Felder:

**Name** - 		Frei wählbarer Name für die SAP-Verbindung.

**Client** -	SAP Mandantennummer.	Beispiel: 800

**Language** -	Die SAP Anmeldesprache. Beispiel: EN <br


Tragen Sie anschließend die Werte  für die Verbindungseinstellungen zu Ihrem SAP-System ein. Sie haben folgende Alternativen:

**Use Single Application** -	Ein einzelner Applikationsserver wird für die Verbindung verwendet. Tragen Sie den Host-Name und die Systemnummer ein.
Server

**Use Load Balancing** -	Wählen Sie diese Option, wenn sie das SAP Load Balancing benutzen und SAP dazu bringen wollen, einen bestimmten Server für die 	Verbindung zu nutzen. Tragen Sie den Messageserver, die Logon-Gruppe und die SAP System ID (SID) ein. <br


Tragen Sie anschließend die Angaben zur Authentifizierungsmethode ein, die für die Verbindung mit dem SAP-System genutzt werden soll. Sie haben folgende Optionen:

**Use Secure Store** -		ECS Core nutzt einen Secure Store, um die SAP-Anmeldedaten des angemeldeten Windows-Benutzers zu erhalten.
					Wählen Sie dazu die Option Secure Store Application ID, um eine existierende Secure Store Anwendung zu wählen. 
					Wie man für ECS Core einen Secure Store anlegt erfahren Sie [hier](./ecscore-secure-store). 

**Use SSO Ticket** -		Es wird ein SAP SSO Ticket für die Authentifizierung verwendet. Tragen Sie die Ticket Issuer URL ein. 

**Use SSO Ticket(pass-through)** -		SSO Ticket (pass through) wird für die Authentifizierung verwendet.
 

**Use SNC** - 				Wenn Ihr SAP-System für den Zugriff über SSO mit SNC konfiguriert ist, können Sie die Option SNC wählen und den Partner Name  						setzen. Der Partner Name hat die Form: p:sapservicensp@theobald-software.com. 

**Use technical access** -			Bei *Use technical access* als Authentifizierungsmethode tragen Sie in die Felder Username und Password den Benutzername und das
			Passwort des SAP-Benutzers ein.

Sie können eine SAP-Verbindung mit *Set instance as the default service* als Standard-Verbindung festlegen (sinnvoll bei mehreren Verbindungen). <br


Die angelegten Verbindungen werden anschließend am linken Bildschirmrand aufgeführt und können jederzeit angepasst oder gelöscht werden.

Sie müssen für jede angelegte Verbindung die Windows-Benutzer oder -Benutzergruppen hinzufügen, die die Verbindung nutzen dürfen. Standardmäßig ist die Windows-Benutzergruppe *Everyone* bereits hinzugefügt. 
Klicken Sie auf die neu hinterlegte Verbindung und anschließend auf *Users*:

![ecscore-managementsite_sapconnection-2.png](/img/content/ecscore-managementsite_sapconnection-2.png){:class="img-responsive"}

Hinzugefügte Windows-Benutzer oder -Benutzergruppen können jederzeit wieder entfernt werden.