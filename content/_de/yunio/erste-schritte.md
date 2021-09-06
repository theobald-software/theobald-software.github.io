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

1. Stellen Sie sicher, dass der YunIO-Dienst läuft.
2. Öffnen Sie einen Browser Ihrer Wahl.
3. Das URL-Pattern zum Aufruf der Web UI lautet: `http://[host]:[port]`. Beispiel: `http://localhost:8077`.<br>
	- Wenn der YunIO-Dienst auf einem lokalen Server läuft, geben Sie *localhost* als `[host]` an.
	- Wenn der YunIO-Dienst nicht auf demselben Rechner wie Ihr Browser läuft, geben Sie als `[host]` den Hostnamen ein, auf dem der YunIO-Dienst läuft. <br>
	- Nach Installation des YunIO-Services ist die Web UI unter dem Standard-Port 8077 erreichbar. Stellen Sie sicher, dass der Port nicht durch Ihre Firewall blockiert wird.
	- Sie können den Port in der YunIO Web-UI unter *Settings* konfigurieren. <br>
4. Nach korrekter Eingabe der URL wird im Browser die YunIO Web UI angezeigt.

### Eine SAP-Verbindung herstellen

Unter *Connections* können Sie neue SAP-Verbindungen hinzufügen und bereits angelegte SAP-Verbindung bearbeiten oder löschen. 

1. Um eine neue Verbindung anzulegen, klicken Sie auf **[Add Connection]**. <br>
Um eine bereits vorhandene Verbindung zu bearbeiten, klicken Sie den Namen der Verbindung.
2. Geben Sie die Verbindungsinformationen zu Ihrem SAP-System unter *System* ein.
3. Geben Sie SAP-Anmeldedaten unter *Authentication* ein.
4. Klicken Sie auf **[Test Connection]**, um die Verbindung zu prüfen.<br>
Je nachdem ob der Verbindungsaufbau erfolgreich war oder nicht, öffnet sich ein Fenster mit einer entsprechende Statusmeldung.
5. Klicken Sie auf **[Save]** um Ihre Eingaben zu speichern.

Für eine detailiertere Beschreibung zum Erstellen einer SAP-Verbindung, siehe [SAP-Verbindung](.einfuehrung/sap-verbindungen-anlegen).

### Eine Extraktion anlegen

Unter *Services* können Sie neue Extraktionen erstellen und bereits angelegte Extraktionen bearbeiten, ausführen und löschen.

1. Um eine neue Extraktion anzulegen, klicken Sie auf **[Add Service]**. 
2. Geben Sie unter *Endpoint* einen Namen für die Extraktion ein und wählen Sie Ihre SAP-Verbindung als **Source System** aus.
3. Wählen Sie unter *Extraction Type* ob eine Tabelle oder eine BAPI/Funktionsbaustein extrahiert werden soll.
4. Optional: Sie können unter *Description* eine kurze Beschreibung der Extraktion hinzufügen.
5. Klicken Sie auf **[Next]**.
6. Geben Sie in das Feld **Search Term** den Namen der zu extrahierenden Tabelle/BAPI ein. Sie können für die Suche Wildcards ( * ) verwenden. 
7. Klicken Sie auf **[Search]**, um die Suchergebnisse anzuzeigen.
8. Wählen Sie die gewünschte Quelldatei aus, indem Sie auf den Namen der Tabelle/BAPI klicken.
9. Je nach gewähltem Extraktionstyp können Sie weitere Einstellungen vornehmen, siehe [SAP Tabelle oder Ansicht](./xtract-is-table) oder [Funktionsbausteine](./xtract-is-bapi).
10. Klicken Sie auf **[Save]**, um die Extraktion zu speichern. <br>
Sie können die Extraktion bearbeiten, indem Sie neben der Extraktion unter *Actions* auf **[..]** klicken und **Edit** wählen.

<!--- Um eine bereits vorhandene Extraktion zu bearbeiten, klicken Sie unter *Actions* auf **[..]** und wählen Sie **Edit**.
--->

*****
#### Weiterführende Links
- [BAPI](./xtract-is-bapi)
- [Table](./xtract-is-table)

