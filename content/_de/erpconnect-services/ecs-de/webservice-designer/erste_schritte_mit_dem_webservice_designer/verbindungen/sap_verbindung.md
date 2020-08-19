---
ref: ecs-wd-gs-connection-settings-01
layout: page
title: SAP-Verbindung
description: SAP-Verbindung
product: erpconnect-services
parent: verbindungen
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=sap_verbindung
---

Im Hauptbildschirm des WebService Designers klicken sie im Ribbon auf *Edit Connection*.

![WSD-EditConnection](/img/content/WSD-EditConnection.PNG){:class="img-responsive"}

Der *SAP Connection* Dialog öffnet sich.

![WSD-SAPConnection](/img/content/WSD-SAPConnection.PNG){:class="img-responsive"}

Ergänzen Sie die nachfolgenden Parameter:

**Client** - Der SAP Client. Beispiel: 800<br>
**Language** - Die Sprache in der die Anmeldung am SAP System erfolgen soll. Beispiel: EN<br>
**Username** -	Der Benutzername für die SAP Verbindung.<br>
**Password** -	Das Kennwort für die SAP Verbindung.<br>
**Secure Store ID** -	Der optionale Parameter wird benötigt um die SAP Anmeldedaten aus der SharePoint Secure Store Anwendung zu ermitteln (für weiterführende Informationen lesen Sie das Abschnitt [Secure Store Application anlegen](../../../ecs-runtime/ecs-konfiguration/ecs-secure-store-application-anlegen)).

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

In der Statusleiste unten links des Designers sehen Sie, dass die SAP-Verbindung konfiguriert wurde. 

![WSD-SAPConnectionConfigured](/img/content/WSD-SAPConnectionConfigured.PNG){:class="img-responsive"}

