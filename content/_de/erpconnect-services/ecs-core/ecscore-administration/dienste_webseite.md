---
layout: page
title: Services Site
description: Services Site
product: erpconnect-services
parent: ecscore-administration
permalink: /:collection/:path
weight: 8
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=dienste_webseite
---

Die *Services Site* findet sich standradmäßig unter http://localhost:8085. Sie steht inbesondere zum Test der unter *Administration* beschriebenen Einstellungen zur Verfügung.

Beachten Sie, dass für die Verbindung mit der Services Site nur lokale Windows-Benutzer in der Administratoren Gruppe verwendet werden können.   

Der Standardport der Management Site ist 8080 (http://localhost:8080). Die Webseite können Sie anschließend als Lesezeichen im Webbrowser speichern.

![ecscore-servicessite1](/img/content/ecscore-servicessite1.jpg.png){:class="img-responsive"}

Es sind folgende Dienste aufrufbar:

**Clear caches**

Nach Modifikationen jeglicher Art, wie das Hinzufügen eines neuen Azure Service Bus Connection Strings, der Verwaltung neuer SAP-Service-Benutzer etc. sollten die Caches geleert werden.

![ecscore-servicessite2](/img/content/ecscore-servicessite2.jpg.png){:class="img-responsive"}

Wichtig: Bei bestimmten Konstellationen kann es außerdem helfen, die IIS bzw. die ECSCore Webseiten neu zu starten. Änderungen werden erst dann unter Umständen korrekt angezeigt.  

![ecscore-servicessite3](/img/content/ecscore-servicessite3.jpg.png){:class="img-responsive"}

**Test services**

Für alle hinterlegten SAP-Services gibt es die Möglichkeit, die Verbindung bzw. Anmeldedaten zu SAP-Server(n) zu überprüfen.

![ecscore-servicessite5](/img/content/ecscore-servicessite5.jpg.png){:class="img-responsive"}

**Setup Azure Service Bus** 

Dieser Service zeigt den aktuellen Stand des [Azure Service Bus](../../zugriff__ber_azure_service_bus/) an (*connected* oder not *connected*). Wenn beispielsweise in der web.config Datei die automatische Azure Service Bus Registrierung auf false gesetzt ist, oder aus einem anderen Grund die Verbindung getrennt wurde, kann hier die Verbindung neu hergestellt werde. Ausführliche Informationen zum Thema Azure Service Bus finden Sie hier.

![ecscore-servicessite6](/img/content/ecscore-servicessite6.jpg.png){:class="img-responsive"}
