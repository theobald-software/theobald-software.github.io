---
ref: yunio-04
layout: page
title: Erste Schritte
description: Erste Schritte mit YunIO
product: yunio
parent: yunio
permalink: /:collection/:path
weight: 10
lang: de_DE
---

Der folgende Abschnitt gibt eine allgemeine Einführung in YunIO. 
Die im folgenden Abschnitt beschriebenen Informationen sind eine Voraussetzung für alle nachfolgenden Abschnitte.

### Web-UI aufrufen

Um auf die Web-UI von YunIO zuzugreifen, öffnen Sie einen Browser Ihrer Wahl und geben die URL des Servers ein, auf dem der YunIO-Dienst läuft.<br>
Das URL-Pattern zum Aufruf der Web UI lautet: `http://[host]:[port]`. Beispiel: `http://localhost:8077`.<br>
- Wenn der YunIO-Dienst auf einem lokalen Server läuft, geben Sie *localhost* als `[host]` an.
- Wenn der YunIO-Dienst nicht auf demselben Rechner wie Ihr Browser läuft, geben Sie als `[host]` den Hostnamen ein, auf dem der YunIO-Dienst läuft. <br>
- Nach Installation des YunIO-Services ist die Web UI unter dem Standard-Port 8077 erreichbar.<br>
Sie können den Port in der YunIO Web-UI unter *Settings* konfigurieren. <br>

{: .box-note}
**Hinweis:** Achten Sie darauf, dass der YunIO-Dienst läuft und dass der Standard-Port 8077 nicht von Ihrer Firewall geblockt wird.

### Eine SAP-Verbindung herstellen

Unter *Connections* können Sie neue SAP-Verbindungen hinzufügen und bereits angelegte SAP-Verbindung bearbeiten oder löschen. 

1. Um eine neue Verbindung anzulegen, klicken Sie auf **[Add Connection]** (1). <br>
Um eine bereits vorhandene Verbindung zu bearbeiten, klicken Sie auf den Namen der Verbindung (2).<br>
![web-ui](/img/content/yunio/web-ui.png){:class="img-responsive"}
2. Geben Sie die Verbindungsinformationen zu Ihrem SAP-System unter *System* (3) ein.<br>
![YunIO-connection](/img/content/yunio/yunio-connections.png){:class="img-responsive" width="750px" }
3. Geben Sie SAP-Anmeldedaten unter *Authentication* (4) ein.
4. Um die Verbindung zu prüfen, klicken Sie auf **[Test Connection]** (5).<br>
Je nachdem ob der Verbindungsaufbau erfolgreich war oder nicht, öffnet sich ein Fenster mit einer entsprechenden Statusmeldung.
5. Speichern Sie Ihre Eingaben über **[Save]**.

Für eine detailiertere Beschreibung zum Erstellen einer SAP-Verbindung, siehe [SAP-Verbindung](./sap-verbindungen-anlegen).

### Einen Service anlegen

Unter *Services* können Sie neue Web-Services erstellen und bereits angelegte Services bearbeiten, ausführen und löschen.

1. Um eine neue Extraktion anzulegen, klicken Sie auf **[Add Service]** (1). <br>
Um einen bereits vorhandenen Service zu bearbeiten, klicken Sie auf den Namen des Services (2).<br>
![YunIO-Services](/img/content/yunio/yunio-services.png){:class="img-responsive" }
2. Geben Sie unter *Endpoint* einen Namen für den Service ein und wählen Sie Ihre SAP-Verbindung aus (3).
![YunIO-new-service](/img/content/yunio/create-table.png){:class="img-responsive" width="750px"}
3. Wählen Sie einen Extraktionstyp (4). YunIO bietet hierfür zwei Möglichkeiten: *SAP Tables or Views* oder *Function Modules*.
4. Optional: Geben Sie unter *Description* eine kurze Beschreibung des Services ein (5). Klicken Sie auf **[Next]**.
5. Je nach gewähltem Extraktionstyp geben Sie den Namen oder die Beschreibung der zu extrahierenden Tabelle/Ansicht oder des zu extrahierenden Funktionsmoduls/BAPIs ein (6). 
Verwenden Sie Wildcards ( * ), falls nötig. <br>
![YunIO-search](/img/content/yunio/search-table.png){:class="img-responsive" width="750px"}
6. Klicken Sie auf **[Search]**, um die Suchergebnisse anzuzeigen (7). 
7. Wählen Sie eine Quelldatei aus (8). Das Menü für die Extraktionseinstellungen öffnet sich automatisch, siehe [SAP Tabelle oder Ansicht](./xtract-is-table) oder [Funktionsbausteine](./xtract-is-bapi).
8. Klicken Sie auf **[Save]**, um den Service zu speichern. <br>

### Einen Service ausführen

Die Web-Services, die mit YunIO erstellt werden, verwenden ein auf .json basierendes Protokoll, um Daten nach und von SAP zu schreiben.

Um einen YunIO Web-Service in Ihre Prozesse (z.B. in Power Automate, Nintex, Swagger, etc.) zu integrieren, können Sie entweder die URL des Service Endpoints (1) kopieren oder kopieren/downloaden Sie den .json-Code des Services (2).

![YunIO-Services](/img/content/yunio/yunio-run-services.png){:class="img-responsive" }


*****
#### Weiterführende Links
- [BAPI](./xtract-is-bapi)
- [Table](./xtract-is-table)

