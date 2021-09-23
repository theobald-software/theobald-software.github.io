---
ref: yunio-04
layout: page
title: Erste Schritte mit YunIO
description: Erste Schritte mit YunIO
product: yunio
parent: yunio
permalink: /:collection/:path
weight: 10
lang: de_DE
---

In Kürze verfügbar.<br>

<!---
YunIO ist ein Windows-Dienst mit einer eingebetteten Web-UI. <br>
Der folgende Abschnitt gibt eine allgemeine Einführung in die Verwendung von YunIO.

### Installation

{: .box-note }																   
**Hinweis:** Administratorrechte sind notwendig, um den YunIO-Dienst zu installieren.

Der YunIO-Dienst wird auf einer lokalen oder Cloud-gehosteten Windows-Serverumgebung installiert. <br>
Die `YunIOSetup.exe` ist ein branchenübliches Setup. 
Führen Sie die Datei `YunIOSetup.exe` aus und folgen Sie den Anweisungen des Setups.

![XU-Setup](/img/content/yunio/yunio-setup.png){:class="img-responsive"}

#### Dateien des Programmverzeichnisses
Die folgende Liste beinhaltet die wichtigsten Dateien, die nach der Installation in dem Standardverzeichnis `C:\Program Files\Theobald Software\YunIO` abgelegt werden:

|Dateiname | Beschreibung |
|:----|:---|
| logs Verzeichnis| Verzeichnis mit Server- und Extraktionsprotokollen etc. |
| config Verzeichnis | Verzeichnis mit allen SAP-Verbindungen, Extraktionen, Destinationen und anderen Einstellungen.|
| Uninstall YunIO Shortcut | Shortcut zum Deinstallieren und Entfernen von YunIO mit allen dazugehörigen Komponenten von Ihrer Maschine. |
| YunIOSetup.exe| Setup der aktuell installierten Version. |
| YunIOLicense.json | Lizenzdatei mit Komponenten- und Laufzeitinformationen. |


#### Neuinstallation und Update

{: .box-warning}
**Warnung!** **Datenverlust:**
Systemänderungen oder Updates können die Funktionalität der Software einschränken, dabei können Daten verloren gehen. 
Erstellen Sie ein Backup des Verzeichnis: `C:\Program Files\Theobald Software\YunIO\config` in regelmäßigen Abständen.


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

1. Um eine neue Verbindung anzulegen, klicken Sie auf **[Add Connection]**. <br>
Um eine bereits vorhandene Verbindung zu bearbeiten, klicken Sie den Namen der Verbindung.
2. Geben Sie die Verbindungsinformationen zu Ihrem SAP-System unter *System* ein.
3. Geben Sie SAP-Anmeldedaten unter *Authentication* ein.
4. Um die Verbindung zu prüfen, klicken Sie auf **[Test Connection]**, .<br>
Je nachdem ob der Verbindungsaufbau erfolgreich war oder nicht, öffnet sich ein Fenster mit einer entsprechenden Statusmeldung.
5. Speichern Sie Ihre Eingaben über **[Save]**.


### Einen Service anlegen

Unter *Services* können Sie neue Services erstellen und bereits angelegte Services bearbeiten, ausführen und löschen.

1. Um eine neue Extraktion anzulegen, klicken Sie auf **[Add Service]**. 
2. Geben Sie unter *Endpoint* einen Namen für den Service ein und wählen Sie Ihre SAP-Verbindung aus.
3. Wählen Sie einen Extraktionstyp. YunIO bietet hierfür zwei Möglichkeiten: Tabellen/Ansichten oder Funktionsbausteine/BAPIs.
4. Optional: Geben Sie unter *Description* eine kurze Beschreibung des Services ein.
5. Klicken Sie auf **[Next]**.
6. Je nach gewähltem Extraktionstyp geben Sie in das Feld **Search Term** den Namen der zu extrahierenden Tabelle/Ansicht oder des zu extrahierenden Funktionsmoduls/BAPIs ein. 
Verwenden Sie Wildcards ( * ), falls nötig. 
7. Klicken Sie auf **[Search]**, um die Suchergebnisse anzuzeigen. 
8. Wählen Sie eine Quelldatei aus. Das Menü für die Extraktionseinstellungen öffnen sich automatisch, siehe [Tabellenextraktion](#tabellenextraktion) oder [Funktionsbausteine und BAPIs](#funktionsbausteine-und-bapis).
9. Klicken Sie auf **[Save]**, um den Service zu speichern. <br>
Um einen Service zu bearbeiten, klicken Sie in der Übersicht auf den Namen des entsprechenden Services.

Um eine bereits vorhandene Extraktion zu bearbeiten, klicken Sie unter *Actions* auf **[..]** und wählen Sie **Edit**.

### Tabellenextraktion


### Service ausführen

-->

