---
ref: yunio-04
layout: page
title: Erste Schritte mit yunIO
description: Erste Schritte mit yunIO
product: yunio
parent: yunio
permalink: /:collection/:path
weight: 10
lang: de_DE
---

YunIO ist ein Konnektor zur SAP-Prozessintegration auf Cloud-Umgebungen. <br>
Der folgende Abschnitt gibt eine allgemeine Einführung in die Verwendung von yunIO.

### Installation

Bevor Sie die Installation starten, stellen Sie sicher, dass Sie die Systemvoraussetzungen für yunIO erfüllen, siehe [yunIO Systemvoraussetzungen](./systemvoraussetzungen).

{: .box-note }																   
**Hinweis:** Administratorrechte sind notwendig, um den yunIO-Dienst zu installieren.

Der yunIO-Dienst wird auf einer lokalen oder Cloud-gehosteten Windows-Serverumgebung installiert. <br>
Die `yunIOSetup.exe` ist ein branchenübliches Setup. 
Führen Sie die Datei `yunIOSetup.exe` aus und folgen Sie den Anweisungen des Setups.

![XU-Setup](/img/content/yunio/yunio-setup.png){:class="img-responsive"}

#### Dateien des Programmverzeichnisses
Die folgende Liste beinhaltet die wichtigsten Dateien, die nach der Installation in dem Standardverzeichnis `C:\Program Files\Theobald Software\yunIO` abgelegt werden:

|Dateiname | Beschreibung |
|:----|:---|
| logs Verzeichnis| Verzeichnis mit Server- und Extraktionsprotokollen etc. |
| config Verzeichnis | Verzeichnis mit allen SAP-Verbindungen, Extraktionen, Destinationen und anderen Einstellungen.|
| Uninstall yunIO Shortcut | Shortcut zum Deinstallieren und Entfernen von yunIO mit allen dazugehörigen Komponenten von Ihrer Maschine. |
| yunIOSetup.exe| Setup der aktuell installierten Version. |
| yunIOLicense.json | Lizenzdatei mit Komponenten- und Laufzeitinformationen. |


#### Neuinstallation und Update

{: .box-warning}
**Warnung!** **Datenverlust:**
Systemänderungen oder Updates können die Funktionalität der Software einschränken, dabei können Daten verloren gehen. 
Erstellen Sie ein Backup des Verzeichnis: `C:\Program Files\Theobald Software\yunIO\config` in regelmäßigen Abständen.


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


### Einen Service anlegen

Unter *Services* können Sie neue Services erstellen und bereits angelegte Services bearbeiten, ausführen und löschen.

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
7. Wählen Sie eine Quelldatei aus (8). Das Menü für die Extraktionseinstellungen öffnet sich automatisch, siehe [Tabellenextraktion](#tabellenextraktion).
8. Klicken Sie auf **[Save]**, um den Service zu speichern. <br>


### Tabellenextraktionen

Das *SAP Table and Views*-Menü besteht aus den folgenden Unterabschnitten:

![yunIO-table](/img/content/yunio/table-settings.png){:class="img-responsive" width="750px"}

1. **Table and View:**<br>
Name und Beschreibung der gewählten Tabelle oder Ansicht werden im Unterabschnitt *Table and View* angezeigt.<br>
Um eine andere Quelldatei zu suchen, klicken Sie in der oberen, rechten Ecke des Unterabschnitts auf **Select**.
2. **Advanced Settings:**<br>
- **Max Row**: Gibt die maximale Anzahl der extrahierten Datensätze an. 0 extrahiert die komplette Tabelle.
- **Function Module**: Bezeichnet den Namen des verwendeten Funktionsbausteins für die Datenextraktion. Dieses Feld wird automatisch befüllt in Abhängigkeit davon, welche Funktionsbausteine auf Ihrem SAP System vorhanden sind. 
- **Rows per Package**: Die extrahierten Daten werden in Pakete mit der angegebenen Größe aufgeteilt. Der Standardwert ist 50000 Zeilen. 
Eine Paketgröße zwischen 20000 und 50000 ist sinnvoll für große Datenmengen. 0 bedeutet, es findet keine Parkettierung statt. 
Keine Parkettierung kann bei Extraktionen großer Datenmengen zu einem RFC-Timeout führen.
- **Run as background job**: <br>
Durch Ankreuzen der Checkbox “Extract data in background” wird die Tabellenextraktion als Hintergrund-Job in SAP ausgeführt. 
Aktivieren Sie diese Einstellung für langlaufende Extraktionen mit sehr großen Datenmengen, die im Vordergrundmodus in einen Timeout-Fehler (“Time limit exceeded”) laufen könnten.
3. **Output Columns:**<br>
Wählen Sie die Spalten aus, die extrahiert werden sollen.
4. **WHERE-Clause:**<br>
Optional: Sie können eine WHERE-Bedingung verwenden, um Ihre Daten zu filtern.
Für Informationen zur OpenSQL-Syntax der WHERE-Bedingung, siehe [SAP Hilfe - Select WHERE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/de-DE/abapwhere.htm?file=abapwhere.htm).

<!---

### Function Modules

Das *Function Module*-Menü besteht aus den folgenden Unterabschnitten:



1. **Function Module:**<br>
Name und Beschreibung des gewählten Funktionsbausteins/BAPIs werden im Unterabschnitt *Function Module* angezeigt.<br>
Um eine andere Quelldatei zu suchen, klicken Sie in der oberen, rechten Ecke des Unterabschnitts auf **Select**.
2. **Advanced Settings:**<br>
- **Commits Transactions:** ...
3. **Function Module Interface Parameters:**<br>
- **Import:** Definieren Sie statische Eingabeparameter (*Default*) oder dynamische Eingabeparameter (*Parameterized*).
- **Export:** Selektieren Sie die Daten, die der Ergebnismenge hinzugefügt werden sollen.
- **Tables:** Tabellen können an einen Funktionsbaustein/BAPI übergeben werden oder extrahiert werden. 
Um Tabellen zu übergeben, geben Sie den Namen der Tabelle unter *Input Value* an. 
Um eine Tabelle zu extrahieren, markieren Sie die Tabelle unter *Output*. 
-->


### Service ausführen

Webdienste, die mit yunIO erstellt werden, sind in alle Cloud Anwendungen integrierbar, die
REST API/Swagger (OpenAPI) unterstützen, z.B. Power Automate, Nintex, Firestart, Webcon uvm.

Um einen Service zu testen, können SIe die URL des Service Endpoints unter **Service** (1) triggern.
Der Service wird dann direkt im Browser ausgeführt.

{: .box-note }
**Hinweis:** Wenn Sie einen Dienst im Browser ausführen, können keine Parameter übergeben werden.
Im Browser werden nur Daten ohne Eingabeparameter angezeigt.


Um einen yunIO Web-Service in ein Prozessautomatisierungstool zu integrieren, das Swagger/OpenAPI unterstützt, kopieren Sie den Code oder laden Sie die Definition des Services herunter (2).

![yunIO-Services](/img/content/yunio/yunio-run-services.png){:class="img-responsive" }
