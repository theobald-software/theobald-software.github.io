---
ref: ecs-configuration-02
layout: page
title: ECS Service Application anlegen
description: ECS Service Application anlegen
product: erpconnect-services
parent: ecs-konfiguration
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=ecs-application-anlegen
---

Die SharePoint Service Applikationen stellen das wesentliche Verbindungsobjekt zu einem SAP-System dar und speichern alle für den SAP-Verbindungsaufbau notwendigen Systeminformationen (siehe Schaubild unten). 

Diese Informationen umfassen Angaben zum SAP-Applicationserver bzw. Message Server für das Load Balancing-Verfahren. Zusätzlich können und müssen ERPConnect Services-spezifische Angaben gemacht werden. Diese umfassen den zu erstellenden bzw. einzusetzenden Application Pool und die Aufnahme in die default-Gruppe.

Um eine neue ECS Service Application anzulegen, klicken Sie auf *New -> ERPConnect Service Application*.

![ECS-Create-Application-01](/img/content/ECS-Create-Application-01.png){:class="img-responsive"}

Für den Einsatz individueller SAP-Zugangsdaten pro angemeldetem SharePoint-Benutzer unterstützt ERPConnect Services die Verwendung der *Secure Store Services*. Hier nutzen wir eine schon vorhandene Secure Store Services Application. Alternativ können Sie auch den Technial Access (SAP-Benutzer und Passwort) verwenden.

Das Kapitel [Secure Store Application anlegen](./ecs-secure-store-application-anlegen)  beschreibt, wie eine Secure Store Application für ERPConnect Services angelegt und eingerichtet wird.<br>
Weitere Infos zur Authentifizierung finden Sie unter [SAP-Authentifizierung](../ecs-sap-verbindung/ecs-sap-authentifizierung).

![ECS-Create-Application-02](/img/content/ECS-Create-Application-02.png){:class="img-responsive"}

Als IIS Application Pool kann entweder ein bestehender Pool verwendet oder ein weiterer neuer Pool angelegt werden. Alle für SharePoint zur Verfügung stehenden Application Pools werden in der Combobox angezeigt.

Es ist nicht zwingend notwendig, dass jeder neuen ERPConnect Service Application ein neuer Pool zugewiesen wird. Mehrere Service Applikationen können den gleichen Application Pool verwenden.

Mit der Angabe *Default Service Application* kann die aktuelle Applikation als Standard-Applikation definiert werden. D.h., dass bei einem SAP-Datenzugriff über ERPConnect Services die Standard-Applikation verwendet wird, falls nicht explizit eine andere Applikation für die Ausführung festgelegt wurde.<br>
Mit Klick auf den Button *Create* wird die neue ERPConnect Service Application erstellt und im System registriert.

![ECS-Create-Application-03](/img/content/ECS-Create-Application-03.png){:class="img-responsive"}

Für jede neue ERPConnect Service Application wird ein Service Application- und ein Service Application Proxy-Objekt erstellt. Die Proxy-Klasse ist für die Anwendungsentwicklung wesentlich.

Nach der Installation stellen Sie sicher, dass der angelegte ERPConnect Service mit der SharePoint Web Application (z.:. SharePoint - 80) assoziert ist: Central Administration -> Manage Web Applications -> Service Connections.

Nach der Erstellung einer Service Application wird diese umgehend gestartet und fügt sich in den Farmverbund von SharePoint ein. Für weitere Informationen zur neuen SharePoint Service Architektur wird an dieser Stelle auf die Microsoft-Dokumentation verwiesen.