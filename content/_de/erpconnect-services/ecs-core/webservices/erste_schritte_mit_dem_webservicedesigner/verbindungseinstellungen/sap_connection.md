---
ref: ecs-wd-gs-connection-settings-01
layout: page
title: SAP-Verbindung
description: SAP-Verbindung
product: erpconnect-services
parent: verbindungseinstellungen
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=sap_verbindung
---

Im Hauptbildschirm des WebService Designers klicken sie im Ribbon bei *Connections* auf *SAP...*.
Die hier definierte SAP-Verbindung zum Abruf von SAP-Metadaten bei der Erstellung eines neuen Webservices vorgesehen.
Die SAP-Verbindung für den Webservice-Aufruf wird im Hauptmenü unter *SAP connection name to use* definiert.  

Der *SAP Connection Dialog* öffnet sich.

Ergänzen Sie die nachfolgenden Parameter:

**Client** - Der SAP Client. Beispiel: 800<br>
**Language** - Die SAP-Anmeldesprache. Beispiel: EN<br>
**Username** -	Der Benutzername für die SAP Verbindung.<br>
**Password** -	Das Kennwort für die SAP Verbindung.<br>

Wählen Sie eine der folgenden Optionen für die Verbindung zu Ihrem SAP System:

**Use Single Application Server** -	Wählen Sie diese Option, um sich mit einem einzelnen SAP Server über RFC zu verbinden.<br>
**Host** -	Name des SAP Servers.<br>
**System** -	Die SAP Systemnummer (00…99).<br>
**Use Load Balancing** - Wählen Sie diese Option, wenn sie das SAP Load Balancing benutzen und SAP dazu bringen wollen, einen bestimmten Server für die Verbindung zu nutzen.<br>
**Message Server** - Name des SAP Message Server. <br>
**Group / SID** -	Gruppe und System ID für die SAP Serverauswahl.<br>
**Use HTTP / Web Service** -	Wählen Sie diese Option, wenn sie auf die SAP Web Services zugreifen wollen.<br>
**HTTP-URL** -	Die URL für die SAP Web Services.

Benutzen Sie die Test Connection Schaltfläche, um die Verbindung zu überprüfen.

Es sollte jetzt ein Bestätigungsfenster erscheinen, wenn die Verbindung zum SAP System erfolgreich hergestellt wurde. Klicken Sie *OK*, um die Mitteilung ausblenden.


