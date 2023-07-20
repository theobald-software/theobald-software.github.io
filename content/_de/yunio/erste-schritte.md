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
Die hier beschriebenen Informationen sind eine Voraussetzung für alle nachfolgenden Abschnitte.

### yunIO Designer aufrufen

Um auf den yunIO Designer zuzugreifen, öffnen Sie die Designer URL in einem [Webbrower](https://help.theobald-software.com/de/yunio/einfuehrung/systemvoraussetzungen#unterst%C3%BCtzte-webbrowser)<br>
Das URL-Pattern zum Aufruf des yunIO Designers lautet: `http://[host]:[port]`. Beispiel: `http://localhost:8077`.<br>
- Wenn der yunIO-Service auf einem lokalen Server läuft, geben Sie *localhost* als `[host]` an.
- Wenn der yunIO-Service nicht auf demselben Rechner wie Ihr Browser läuft, geben Sie als `[host]` den Hostnamen ein, auf dem der yunIO-Service läuft. <br>
- Nach der Installation ist der yunIO Designer unter dem Standard-Port 8077 erreichbar.<br>
Sie können den Port im yunIO Designer unter *Settings* konfigurieren. <br>

{: .box-note}
**Hinweis:** Achten Sie darauf, dass der yunIO-Service läuft und dass der Standard-Port 8077 nicht von Ihrer Firewall geblockt wird.

### Eine SAP-Verbindung herstellen

Unter *Connections* können Sie neue SAP-Verbindungen hinzufügen und bereits angelegte SAP-Verbindung bearbeiten oder löschen. 

1. Um eine neue Verbindung anzulegen, klicken Sie auf **[Add Connection]** (1). <br>
Um eine bereits vorhandene Verbindung zu bearbeiten, klicken Sie auf *Edit* (![Edit](/img/content/yunio/edit.png) Icon).<br>
![web-ui](/img/content/yunio/web-ui.png){:class="img-responsive"}
2. Geben Sie die Verbindungsinformationen zu Ihrem SAP-System unter *System* (2) ein.<br>
![yunIO-connection](/img/content/yunio/yunio-connections.png){:class="img-responsive" width="750px" }
3. Geben Sie SAP-Anmeldedaten unter *Authentication* (3) ein.
4. Um die Verbindung zu prüfen, klicken Sie auf **[Test Connection]** (4).<br>
Je nachdem ob der Verbindungsaufbau erfolgreich war oder nicht, öffnet sich ein Fenster mit einer entsprechenden Statusmeldung.
5. Speichern Sie Ihre Eingaben über **[Save]**.

Für mehr Informationen zum Einrichten der SAP-Verbindung, siehe [SAP-Verbindung](./sap-verbindungen-anlegen).

### Einen Service anlegen

Unter *Services* können Sie neue Webservices erstellen und bereits angelegte Services bearbeiten, ausführen und löschen.

1. Um einen neuen Service anzulegen, klicken Sie auf **[Add Service]** (1). <br>
![yunIO-Services](/img/content/yunio/yunio-services.png){:class="img-responsive" }
2. Geben Sie unter *Endpoint* einen Namen für den Service ein und wählen Sie Ihre SAP-Verbindung aus (2).
![yunIO-new-service](/img/content/yunio/create-table.png){:class="img-responsive" width="750px"}
3. Optional: Geben Sie unter Description eine kurze Beschreibung des Services ein.
4. Wählen Sie einen Extraktionstyp (3). yunIO bietet folgende Optionen: *SAP Tables or Views*, *Function Modules* und *Transactions*.
5. Klicken Sie auf **[Save and edit]**.
Richten Sie den Service ein, siehe [SAP Tabelle oder Ansicht](./table-and-views), [Funktionsbausteine / BAPIs](./bapis-and-function-modules) oder [Transaktionen](./transactions).

Um den Namen, die Beschreibung und das Quellsystem eines Service zu bearbeiten, klicken Sie auf das ![Edit](/img/content/yunio/edit-type-icon.png) Icon.<br>
Um die Extraktionseinstellungen eines Service zu bearbeiten, klicken Sie auf das ![Edit](/img/content/yunio/edit-cog-icon.png) Icon.<br>

### Einen Service ausführen

Mit yunIO erstellte Webservices sind in alle Cloud-Anwendungen integrierbar, die REST und Swagger/OpenAPI unterstützen, z.B. Power Automate, Nintex, uvm.

- Um einen Service zu testen, können Sie die URL des Service Endpoints unter **Service** (1) triggern.
Der Service wird dann direkt im Browser ausgeführt.<br>
- Um einen yunIO Webservice in ein Prozessautomatisierungstool zu integrieren, das Swagger/OpenAPI unterstützt, kopieren Sie den Code oder laden Sie die Definition des Services herunter (2).
![yunIO-Services](/img/content/yunio/yunio-run-services.png){:class="img-responsive" }

{: .box-note}
**Hinweis:** Nur Services, die keine Eingangsparameter erfordern, zeigen SAP-Ergebnisse im Browser an. Verwenden Sie für parametrisierte Services ein Tool, das Swagger/OpenAPI-Definitionen unterstützt 
(z. B. [Swagger Inspector](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-swagger-inspector) oder [Postman](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-postman)).

#### POSt vs GET
yunIO Services unterstützen die HTTP-Methoden `POST` und `GET`.

|  | POST | GET |
|--|-----|------|
| Datenlänge| Keine Einschränkungen. | Maximuale Länge der URL ist 2048 Zeichen. |
| Parameter | Parameter sind Teil des HTTP Request Bodys. |Unterstützt Query-Parameter in der URL. | 
| Datensicherheit | Parameter werden nicht im Browserverlauf und den Server-Logs gespeichert. | Parameter sind in der URL offen sichtbar. Daten werden gecacht. | 
| Datentypen | Keine Einschränkungen.  | Unterstützt nur ASCII-Zeichen. |

{: .box-tip}
**Empfehlung:** Wir empfehlen die Verwendung der POST-Methode mit [Transport Layer Security]() (HTTPS), um Ihre Daten zu schützen. Verwenden Sie nicht die GET-Methode, wenn Sie sensible Daten übertragen, z.B. Zugangsdaten. 

Wenn Sie die OpenAPI/Swagger Definition verwenden, sind die Methoden `POST` und `GET` beide verfügbar. Sie können eine der beiden Methode auswählen:<br>
![yunIO-HTTP-POST-GET](/img/content/yunio/http-post-get.png){:class="img-responsive" }

Beispiel für die `POST`-Methode mit einem Eingabeparameter *NAME1*:<br>
![yunIO-HTTP-POST](/img/content/yunio/http-post.png){:class="img-responsive" }

Beispiel für die `GET`-Methode mit einem Eingabeparameter *NAME1*:<br>
![yunIO-HTTP-GET](/img/content/yunio/http-get.png){:class="img-responsive" }

*****
#### Weiterführende Links
- [SAP Tabelle oder Ansicht](./table-and-views)
- [Funktionsbaustein / BAPI](./bapis-and-function-modules)
- [Transaktionen](./transactions)
