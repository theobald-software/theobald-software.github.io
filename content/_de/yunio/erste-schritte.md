---
ref: yunio-04
layout: page
title: Erste Schritte
description: Erste Schritte mit yunIO
product: yunio
parent: yunio
permalink: /:collection/:path
weight: 9
lang: de_DE
---

Der folgende Abschnitt gibt eine allgemeine Einführung in yunIO. 
Die im folgenden Abschnitt beschriebenen Informationen sind eine Voraussetzung für alle nachfolgenden Abschnitte.

### Web-UI aufrufen

Um auf die Web-UI von yunIO zuzugreifen, öffnen Sie einen Browser Ihrer Wahl und geben die URL des Servers ein, auf dem der yunIO-Dienst läuft.<br>
Das URL-Pattern zum Aufruf der Web UI lautet: `http://[host]:[port]`. Beispiel: `http://localhost:8077`.<br>
- Wenn der yunIO-Dienst auf einem lokalen Server läuft, geben Sie *localhost* als `[host]` an.
- Wenn der yunIO-Dienst nicht auf demselben Rechner wie Ihr Browser läuft, geben Sie als `[host]` den Hostnamen ein, auf dem der yunIO-Dienst läuft. <br>
- Nach Installation des yunIO-Services ist die Web UI unter dem Standard-Port 8077 erreichbar.<br>
Sie können den Port in der yunIO Web-UI unter *Settings* konfigurieren. <br>

{: .box-note}
**Hinweis:** Achten Sie darauf, dass der yunIO-Dienst läuft und dass der Standard-Port 8077 nicht von Ihrer Firewall geblockt wird.

### Eine SAP-Verbindung herstellen

Unter *Connections* können Sie neue SAP-Verbindungen hinzufügen und bereits angelegte SAP-Verbindung bearbeiten oder löschen. 

1. Um eine neue Verbindung anzulegen, klicken Sie auf **[Add Connection]** (1). <br>
Um eine bereits vorhandene Verbindung zu bearbeiten, klicken Sie auf den Namen der Verbindung (2).<br>
![web-ui](/img/content/yunio/web-ui.png){:class="img-responsive"}
2. Geben Sie die Verbindungsinformationen zu Ihrem SAP-System unter *System* (3) ein.<br>
![yunIO-connection](/img/content/yunio/yunio-connections.png){:class="img-responsive" width="750px" }
3. Geben Sie SAP-Anmeldedaten unter *Authentication* (4) ein.
4. Um die Verbindung zu prüfen, klicken Sie auf **[Test Connection]** (5).<br>
Je nachdem ob der Verbindungsaufbau erfolgreich war oder nicht, öffnet sich ein Fenster mit einer entsprechenden Statusmeldung.
5. Speichern Sie Ihre Eingaben über **[Save]**.

Für eine detailiertere Beschreibung zum Erstellen einer SAP-Verbindung, siehe [SAP-Verbindung](./sap-verbindungen-anlegen).

### Einen Service anlegen

Unter *Services* können Sie neue Web-Services erstellen und bereits angelegte Services bearbeiten, ausführen und löschen.

1. Um eine neue Extraktion anzulegen, klicken Sie auf **[Add Service]** (1). <br>
Um einen bereits vorhandenen Service zu bearbeiten, klicken Sie auf den Namen des Services (2).<br>
![yunIO-Services](/img/content/yunio/yunio-services.png){:class="img-responsive" }
2. Geben Sie unter *Endpoint* einen Namen für den Service ein und wählen Sie Ihre SAP-Verbindung aus (3).
![yunIO-new-service](/img/content/yunio/create-table.png){:class="img-responsive" width="750px"}
3. Wählen Sie einen Extraktionstyp (4). yunIO bietet hierfür zwei Möglichkeiten: *SAP Tables or Views* oder *Function Modules*.
4. Optional: Geben Sie unter *Description* eine kurze Beschreibung des Services ein (5). Klicken Sie auf **[Next]**.
5. Je nach gewähltem Extraktionstyp geben Sie den Namen oder die Beschreibung der zu extrahierenden Tabelle/Ansicht oder des zu extrahierenden Funktionsmoduls/BAPIs ein (6). 
Verwenden Sie Wildcards ( * ), falls nötig. <br>
![yunIO-search](/img/content/yunio/search-table.png){:class="img-responsive" width="750px"}
6. Klicken Sie auf **[Search]**, um die Suchergebnisse anzuzeigen (7). 
7. Wählen Sie eine Quelldatei aus (8). Das Menü für die Extraktionseinstellungen öffnet sich automatisch, siehe [SAP Tabelle oder Ansicht](./xtract-is-table) oder [Funktionsbausteine](./xtract-is-bapi).
8. Klicken Sie auf **[Save]**, um den Service zu speichern. <br>

### Einen Service ausführen

Webdienste, die mit yunIO erstellt werden, sind in alle Cloud Anwendungen integrierbar, die
REST API/Swagger (OpenAPI) unterstützen, z.B. Power Automate, Nintex, Firestart, Webcon uvm.

Um einen Service zu testen, können SIe die URL des Service Endpoints unter **Service** (1) triggern.
Der Service wird dann direkt im Browser ausgeführt.<br>
Um einen yunIO Web-Service in ein Prozessautomatisierungstool zu integrieren, das Swagger/OpenAPI unterstützt, kopieren Sie den Code oder laden Sie die Definition des Services herunter (2).

![yunIO-Services](/img/content/yunio/yunio-run-services.png){:class="img-responsive" }

*****
#### Weiterführende Links
- [SAP Table or View](./table)
- [Function Module](./bapi)

