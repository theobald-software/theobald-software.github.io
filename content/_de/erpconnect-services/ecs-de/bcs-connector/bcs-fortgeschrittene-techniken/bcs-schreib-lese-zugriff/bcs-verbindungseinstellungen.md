---
layout: page
title: Verbindungseinstellungen
description: Verbindungseinstellungen
product: erpconnect-services
parent: bcs-schreib-lese-zugriff
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=bcs-verbindungseinstellungen
---

Starten Sie den BCS Connector Designer, um ein neues BCS Modell zu erstellen. Zuerst definieren Sie die Verbindung zum SharePoint Server und zu Ihrem SAP System.

Betätigen Sie die *Edit SharePoint* Schaltfläche auf dem Ribbon. Das *SharePoint Connection* Dialogfenster erscheint.  

Geben Sie die nachfolgenden Verbindungsparameter ein:

**Site URL** -	Die URL der SharePoint Seite in die Sie die SAP Daten integrieren wollen. Sie können den BCS Connector nutzen, um auf dieser Seite eine externe Liste zu erstellen.<br>
**Domain** -	Optional. Die Domain des Benutzers der SharePoint Verbindung, wenn Sie sich von der aktuellen Domain unterscheidet.<br>
**Username** -	Optional. Der Benutzername für die SharePoint Verbindung, wenn Sie sich vom aktuellen Benutzernamen unterscheidet.<br>
**Password** -	Optional. Das Kennwort der SharePoint Verbindung, wenn es sich vom aktuellen Kennwort unterscheidet.

Benutzen Sie die *Test Connection* Schaltfläche, um die Verbindungseinstellungen zu testen und schließen Sie die Konfiguration der SharePoint-Verbindung mit *OK* ab. In der Statuszeile des BCS Connector Designer Fensters wird die SharePoint Seite, mit der Sie verbunden sind, angezeigt.

Um die SAP Verbindung einzurichten, betätigen Sie die Schaltfläche neben dem Text *SAP R/3 Connection*. Das *SAP Connection* Dialogfenster wird geöffnet.

Geben Sie die nachfolgenden Verbindungsparameter ein:

**Client** -	Der SAP Client. Beispiel: 800 <br>
**Language** -	Die Anmeldesprache für das SAP System. Beispiel: EN<br>
**Username** -	Der Benutzername für die SAP Verbindung.<br>
**Password** -	Das Kennwort für die SAP Verbindung.<br>
**Secure Store ID** -	Optionaler Parameter. Wird benötigt um die Verbindungsinformationen für die SAP Anmeldung aus einer SharePoint Secure Store Anwendung zu beziehen (für mehr Informationen lesen Sie bitte Kapitel [Konfiguration Single Sign-On](../../bcs-sharepiont-konfigurieren/bcs-konfiguration-single-sign-on)).

Wählen Sie eine der nachfolgenden Optionen für die Verbindung zu Ihrem SAP System:

**Use Single Application Server** -	Wählen Sie diese Option, wenn Sie sich mit einem einzelnen SAP Server über RFC verbinden wollen.<br>
**Host** -	Name des SAP Server.<br>
**System** -	Die SAP Systemnummer (00…99).<br>
**Use Load Balancing** -	Wählen Sie diese Option wenn Sie in Ihrer Systemumgebung das SAP Load Balancing eingestellt haben und SAP den Server für den Verbindungsaufbau bestimmen lassen wollen.<br>
**Message Server** -	Name des SAP Message Servers.<br>
**Group / SID** -	Group und System ID für die SAP Server Auswahl.<br>
**Use HTTP / Web Service** -	Wählen Sie diese Option, wenn Sie einen Web Service nutzen wollen.<br>
**HTTP-URL** -	Die URL zum SAP Webservice.

Nutzen Sie die *Test Connection* Schaltfläche, um die Verbindungsparameter zu testen und anschließend *OK*, um die Konfiguration der SAP Verbindungseinstellungen abzuschließen. Beachten Sie die Anzeige in der Statusleiste des Fensters die jetzt anzeigt, dass die SAP Verbindung konfiguriert ist.