---
ref: destinations-82
layout: page
title: Power BI Connector
description: Power BI Connector
product: xtract-universal
parent: destinationen
childidentifier: Power-BI-Connector
permalink: /:collection/:path
weight: 82
lang: DE_DE
old_url: 
progressstate: 5
---
## Einführung

Dieses Abschnitt beinhaltet Informationen zu Verbindung von Power BI und Xtract Universal über die  *Power BI Connector* Zielumgebung von Xtract Universal. 

Die Zielumgebung *Power BI Connector* bietet zwei Wege zum Verbinden von Power BI mit Xtract Universal:
- Power BI Custom Connector
- Generic Power Query M-script

![Power-BI-Connector-](/img/content/xu/PowerBI_Connector_Architecture_SSO.png){:class="img-responsive"}

### Unterstützte Power BI Umgebungen

Xtract Universal unterstützt folgende Umgebungen: 
- [Power BI Desktop](https://powerbi.microsoft.com/en-us/desktop/) mittels [Power BI Custom Connector](#power-bi-custom-connector-manuell-einrichten)
- [Power BI service](https://docs.microsoft.com/en-us/power-bi/power-bi-overview#the-parts-of-power-bi) mittels [Power BI On-Premisess data gateway](https://docs.microsoft.com/de-de/data-integration/gateway/service-gateway-onprem)
- [Power BI Report Server](https://docs.microsoft.com/de-de/power-bi/report-server/get-started) mittels [Power Query M-script](#power-query-m-script-in-power-bi-einbrichten)


|  | Custom Connector | M-script |
|------------------------|:---:|:----:|
| Power BI Desktop | X | X |
| Power BI service | X | X |
| Power BI Report Server |  | X |

## Verbindung
{% include _content/de/xu-specific/destinationen/general/connection.md %}	

### Destination Details
Um Power BI Connector zu verwenden, müssen keine weiteren Einstellungen vorgenommen werden.

![Power BI Connector (beta) Destination](/img/content/XU_pbi_connector_connection.png){:class="img-responsive"}

## Einstellungen

### Destination Settings öffnen

1. Wählen Sie eine bestehende Extraktion oder legen Sie eine neue an (siehe auch [Erste Schritte mit Xtract Universal](../erste-schritte/eine-neue-extraktion-anlegen)).
2. Klicken Sie auf **[Destination]**. Das Fenster "Destination Settings" wird geöffnet.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

Die folgenden Einstellungen können für die Destination definiert werden. 

![pbi-configuration](/img/content/XU_pbi_connector_destination.png){:class="img-responsive"}

{% include _content/de/xu-specific/destinationen/general/column-name-style.md %}

{% include _content/de/xu-specific/destinationen/general/date-conversion.md %}


## Power BI Custom Connector

Die *Power BI Connector* Destination in Xtract Universal funktioniert in Kombination mit dem benutzerdefinierten Custom Connector für Power BI. Der Dateiname ist *XtractUniversalExtension.pqx*. Die Datei XtractUniversalExtension.pqx befindet sich im Ordner *powerbi* innerhalb des Installationsverzeichnisses von Xtract Universal.

Der Power BI Connector wurde entsprechend den Microsoft Richtlinien zum Erstellen von [Custom Connectors in Power BI](https://docs.microsoft.com/de-de/power-bi/desktop-connector-extensibility) entwickelt.

### Power BI Custom Connector manuell einrichten
Wenn Sie die Anwendung *Power BI Desktop* verwenden, beachten Sie Folgendes: 
1. Prüfen Sie, ob das Verzeichnis `[Documents]\Power BI Desktop\Custom Connectors` existiert.
2. Erstellen Sie dieses Verzeichnis, falls es nicht existiert.
3. Öffnen Sie den *powerbi* Ordner im Xtract Universal Installationsverzeichnis, z.B. `C:\Program Files\XtractUniversal\powerbi\`.
4. Kopieren Sie die Datei *XtractUniversalExtension.pqx* aus dem *powerbi* Ordner in das Verzeichnis `[Documents]\Power BI Desktop\Custom Connectors`.
5. Starten Sie Power BI neu. <br>
6. In Power BI Desktop navigieren Sie zu *Datei > Optionen und Einstellungen > Optionen > Sicherheit*.
7. Unter [Datenerweiterung](https://docs.microsoft.com/de-de/power-bi/desktop-connector-extensibility#data-extension-security) aktivieren Sie die Option **(Nicht empfohlen) Alle Erweiterungen ohne Überprüfung oder Warnung laden**. <br>
![powerbi-data-extension](/img/content/power-bi-data-extension.png){:class="img-responsive"}
8. Klicken Sie auf **[OK]**.
9. Starten Sie Power BI neu. <br>

Die Datenquelle *Xtract Universal* ist jetzt in Power BI verfügbar.<br>
![powerbi-datasource](/img/content/XU_pbi_connector_xu_datasouce.png){:class="img-responsive"}

### Power BI Custom Connector automatisch einrichten
1. Öffnen Sie den *powerbi* Ordner, der sich im Installationsverzeichniss von Xtract Universal befindet.
2. Führen Sie das PowerShell Skript *install-connector* aus. <br>
Dieses Skript kopiert die *XtractUniversalExtension.pqx* Datei in den Ordner `[Documents]\Power BI Desktop\Custom Connectors`.
Falls der Ordner nicht existiert, wird er neu angelegt.
3. Führen Sie das PowerShell Skript *trust-connector* aus.<br>
Dieses Skript modifiziert die Registry unter `HKLM:\SOFTWARE\Policies\Microsoft\Power BI Desktop`.
Falls noch nichtvorhanden, wird der Wert *TrustedCertificateThumbprints* mit dem Fingerabdruck der *XtractUniversalExtension.pqx* Datei angelegt.
Dieser Prozess entspricht den Microsoft-Empfehlungen für 
[vertrauenswürdige Connectoren von Drittanbietern](https://docs.microsoft.com/de-de/power-bi/connect-data/desktop-trusted-third-party-connectors).

### Power BI mit Xtract Universal verbinden

1. Wählen Sie Xtract Universal im Menu *Get Data*.
2. Klicken Sie auf die Schaltfläche *Connect*.
3. Geben Sie die URL des Xtract Universal-Webservers an `<Protocol>://<HOST oder IP address>:<Port>/`.
![powerbi-XU_URL](/img/content/XU_pbi_connector_XU_URL.png){:class="img-responsive"}
	Wenn Sie aufgefordert werden eine der folgenden Authentifizierungsmethoden auszuwählen: *Anonymous*, *Basic* or *Windows*, befolgen Sie die Handlungsanweisungen aus dem Abschnitt [Singe Sign On und SAP-Authentifizierung](#single-sign-on-und-sap-authentifizierung).
	Im Fenster Navigator werden alle *Power BI Connector*- Extraktionen von Xtract Universal aufgelistet. 
4. Wählen Sie eine Extraktion aus der Liste. <br>
Die Vorschau zeigt die SAP-Spaltenkofbezeichnungen und  Vorschaudaten abhängig vom Extraktionstyp, z.B. Echt-Daten oder Dummy-Daten.
5. Klicken Sie auf die Schaltfläche *Load*. <br>
Dies stößt eine Extraktion in Xtract Universal an und die Daten werden in Power BI geladen .

![powerbi-navigator](/img/content/XU_pbi_connector_navigator.png){:class="img-responsive"}

## Power Query M-script

Anstelle des Power BI Custom Connector, können Sie auch das Custom Power Query M-script zum Verbinden von Power BI mit Xtract Universal verwenden. 

Das Power BI Query M-Script befindet sich innerhalb des Installationsverzeichnisses von Xtract Universal: `C:\Program Files\XtractUniversal\powerbi\loading_script.txt`.

{: .box-warning }
**Warning! Nutzung des Custom Connectors & Query M-Script**<br>
Power Query M-script und Power BI Custom Connector gehören nicht zusammen.<br>
Verwenden Sie entweder das Power Query M-script **oder** den Power BI Custom Connector.

### Power Query M-script in Power BI einrichten

{: .box-note }
**Hinweis:** Verwenden Sie nur die Extraktionen mit der [Power BI Connector Destination](#verbindung---destination-details).

1. Erstellen Sie einen Power BI-Bericht mittels **Home > Get Data > Blank Query** als Datenquelle.
2. Öffnen Sie den **[Advanced Editor]**.
![Advanced Editor](/img/content/pbi_advanced_editor.png){:class="img-responsive"}
3. Öffnen Sie das Xtract Universal *loading_script* in jedem beliebigen Texteditor.
4. Kopieren Sie den kompletten Inhalt in das Fenster des erweiterten Editors von Power BI.
5. Ändern Sie die Werte in den Feldern **ExtractionName** und  **ServerURL** enstprechend dem Namen Ihrer Xtract Universal Extraktion und dem Webserver. (1)
![PowerQueryEditor](/img/content/XU_PBI_PowerQueryEditor.png){:class="img-responsive"}
6. Bestätigen Sie das Skript durch Klicken auf **[Done]** (2).
7. Klicken Sie die Schaltfläche **{Close & Apply]**.
8. Wenn Sie aufgefordert werden eine der folgenden Authentifizierungsmethoden (*Anonymous*, *Basic* , oder *Windows*) auszuwählen, <br> befolgen Sie die Handlungsanweisungen aus dem Abschnitt [Singe Sign On und SAP-Authentifizierung](#single-sign-on-und-sap-authentifizierung).

## Power BI Service

### Voraussetzungen
Die Anbindung des Power BI Service erfordert folgende Komponenten:

- [Power BI Account](https://powerbi.microsoft.com/de-de/landing/signin/)
- [On-Premisess Data Gateway](https://powerbi.microsoft.com/en-us/gateway/)

### Einrichtung On-Premisess Data Gateway

Befolgen Sie die folgenden Schritte, um das On-Premisess Data Gateway mittels Power BI Custom Connector einzurichten.

{: .box-note }
**Hinweis:** Die Verbindung zu Xtract Universal kann mithilfe von Power Query M-script oder Power BI Custom Connector erstellt werden. Die Verwendung von Power Query M-script benötigt keine weitere Konfiguration.

1. Installieren Sie das On-Premisess Data Gateway auf dem Xtract Universal Anwendungsserver.
2. Konfigurieren Sie das Data Gateway, siehe [Use the On-Premisess data gateway app](https://docs.microsoft.com/de-de/data-integration/gateway/service-gateway-app).
3. Wechseln Sie in den Tab *Connectors* und hinterlegen Sie den Pfad zum Power BI Custom Connector. z.B. in `[Documents]\Power BI Desktop\Custom Connectors`.<br> Die *XtractUniversalExtension* wird anschließend als Custom Data Connector angezeigt.
![Data-Gateway Connectors](/img/content/xu/data-gateway-connectors.png){:class="img-responsive"}


### Xtract Universal als Datenquelle hinzufügen

{: .box-note }
**Hinweis:** Stellen Sie sicher, dass die [Aktivierung und Verwendung von benutzerdefinierten Connectors in Power BI](https://learn.microsoft.com/de-de/power-bi/connect-data/service-gateway-custom-connectors#enable-and-use-custom-connectors) freigeschaltet ist.

Wenn der Eintrag Xtract Universal nicht in dem Dropdown-Menü verfügbar ist, überprüfen Sie die Konfiguration im Abschnitt [Einrichtung On-Premisess Data Gateway](#einrichtung-on-premisess-data-gateway).   

Das konfigurierte On-Premises Data Gateway wird nachfolgend in die Power BI Service Umgebung eingebunden. Anschließend muss eine DataSource zum Xtract Universal Server eingerichtet werden.

1. Im Power BI Service, navigieren Sie zu **Settings > Manage connections and gateways** und klicken Sie auf **[+ New]**. Das Fenster *New Connection* wird geöffnet. 
![connection-gateway](/img/content/xu/pbi-settings-connections-gateways.png){:class="img-responsive"}
2. Wählen Sie den Verbindungstyp *On-premises* (Default-Einstellung). Füllen Sie die notwendigen Felder aus:
![connection-settings](/img/content/xu/pbi-gateways-settings.png){:class="img-responsive"}
3. Wählen Sie den zuvor angelegten "Data Gateway" aus dem Drop-Down-Menü **Gateway cluster name** aus. 
![gateway-cluster](/img/content/xu/pbi_gateway-cluster.png){:class="img-responsive"}
4. Vergeben Sie der Verbindung einen Namen unter **Connection name**.
5.  Wählen Sie "Xtract Universal Extraction" unter **Connection type** aus. 

{: .box-note }
**Hinweis:** Wenn der Eintrag Xtract Universal nicht in dem Dropdown-Menü verfügbar ist, überprüfen Sie die Konfiguration im Abschnitt [Einrichtung On-Premisess Data Gateway](#einrichtung-on-premisess-data-gateway).   

6.  Geben Sie die Xract Universal Server URL unter **Server** an, siehe [Web Server](../server/server_einstellungen#web-server).
7.  Entscheiden Sie sich für die angemessene Authentisierungsmethode unter **Authentication Method**, siehe [Single Sign On und SAP-Authentifizierung](#single-sign-on-und-sap-authentifizierung):<br> 
Entscheiden Sie sich für eine passende Option: 
- Basic
- Windows
- Anonymous
8. Klicken Sie auf **[Create]**, eine Verbindung wird erstellt und ein automatischer Verbindungstest wird durchgeführt.

### Data Source Status
1. Überprüfen Sie den Data Source Status und weitere Einstellungen, z.B. **Schedules Refresh**. 

2. Unter **[Workspace settings]** navigieren Sie zu den Einstellungen vom Dataset **[...]**.
![workflow](/img/content/xu/pbi_workflow.png){:class="img-responsive"}

3. Klappen Sie den Eintrag **Gateway and cloud connections** auf.
![gateways cloud connections](/img/content/xu/pbi_gateway-cloud-connections.png){:class="img-responsive"}

4. Konfigurieren die Verbindung des hochgeladenen Power BI Datasets. 
5. Markieren Sie das definierte Gateway und wählen Sie unter der Option **Extention** den Namen der Verbindung (hier XtractUniversal) aus dem Drop-Down-Menü aus. <br>
Der Status der Verbindung wird geprüft und im Feld **Status** zurückgemeldet.

## Single Sign On und SAP-Authentifizierung

Beim erstmaligem Einrichten der Xtract Universal-Datenquelle in Power BI, werden Sie aufgefordert eine der folgenden Authentifizierungsmethoden auszuwählen:

* *Anonymous*: Wählen Sie diese Option, wenn Ihre Xtract Universal-Servereinstellungen keine Authentifizierung erfordern, um eine Extraktion auszuführen.
* *Basic*:  Wählen Sie diese Option, wenn in Xtract Universal in den [SAP Source-Einstellungen](../einfuehrung/sap-verbindungen-anlegen#authentication) die Checkbox *Require SAP Credentials to be explicitly supplied for execution* markiert ist. Geben Sie Ihre SAP-Benutzerdaten in die entsprechenden Eingabefelder ein.
* *Windows*: Wählen Sie diese Option, wenn Sie [SSO](Power-BI-Connector#einrichtung-On-Premisess-data-gateway) verwenden, oder wenn ein eingeschränkter Zugang zu den Extraktionen in den Xtract Universal-Servereinstellungen definiert ist. <br>
Tragen Sie \<domain>\\\<Windows AD user> ins Feld *user* und Ihr Windows-Passwort ins Feld *Password* ein.

Xtract Universal und die *Power BI Connector* Destination unterstützen Single Sign On (SSO) zu SAP. Wenn SSO korrekt konfiguriert ist, werden die Windows-Anmeldedaten des Power BI-Benutzers den SAP-Anmeldedaten zugeordnet (gemapped). Auf diese Weise wird das SAP-Berechtigungskonzept unterstützt und dem Benutzer werden nur die Daten angezeigt, die seiner SAP-Berechtigung entsprechen.
![XU_PBI_EN_SSO](/img/content/XU_PBI_EN_SSO.png){:class="img-responsive"}

## Parametrisierung

Custom Parameter (benutzerdefinierte Parameter), die in Xtract Universal für eine Extraktion angelegt wurden, werden in Power BI Desktop als eingabebereit angezeigt.
Wenn Sie den Power BI Custom Connector verwenden, können die in Xtract Universal definierten Custom Parameter zum Zeitpunkt einer Extraktion in Power BI Desktop befüllt werden.

### Power BI Custom Connector

Bei der Verwendung des Power BI Custom Connectors können XU Custom Parameter beim Erstellen einer Verbindung befüllt werden.

Sie haben eine Extraktion erstellt, die über XU Custom Parameter verfügt. Die Liste der Custom Parameter der ausgewählten Extraktion werden unter dem Tab *Custom* im Fenster *Run Extraction* angezeigt. 
Im dargestellten Beispiel enthält die Liste einen Eintrag *BUKRS_low*. <br>

![XU-Custom-Parameter-angezeigt](/img/content/XU_PBI_XU_Parameters_1.png){:class="img-responsive"}

In Power BI Desktop können Sie sich die Liste der verfügbaren XU Custom Parameter ansehen, wenn ein Report auf Basis der ausgewählten Extraktion erstellt wird. Die angezeigten XU Custom Parameter können in Power BI Desktop mit Werten befüllt werden. 
![XU-Custom-Parameter-angezeigt](/img/content/XU_PBI_XU_Parameters_2.png){:class="img-responsive"}

### Power Query M-Script

1. Öffnen Sie das Power Query M-Script.
2. Navigieren Sie zu "Parameters" und ersetzen Sie die Werte durch die echten Werte oder durch in Power BI definierte Parameter. 

```
    // Record containing run parameters with corresponding values, can be empty
    // Usage: <XU parameter name>= <value or Power BI parameter>
    // MUST NOT use "name" as a record field here
    Parameters = [ /*rows= "300", myparameter= SomePowerBIParameter*/ ],
```

Echte Werte:
![XU-Custom-Parameter-angezeigt](/img/content/XU_PBI_XU_Parameters_3.png){:class="img-responsive"}

Power BI Parameter:
![XU-Custom-Parameter-angezeigt](/img/content/XU_PBI_XU_Parameters_4.png){:class="img-responsive"}

![XU-Custom-Parameter-angezeigt](/img/content/XU_PBI_XU_Parameters_5.png){:class="img-responsive"}


## Power BI Optionen und Einstellungen

Nehmen Sie folgende Einstellungen in Power BI vor:

1. Navigieren Sie zu **File > Options and settings > Options**, um die Optionen zu öffnen.
2. Aktivieren Sie im Tab *Security* die Option **(Not recommended) Allow any extension to load without validation or warning**.<br>
![Power BI cache](/img/content/XU_PBI_PBI_Security.png){:class="img-responsive"}
3. Optional: Erhöhen Sie die Größe des Zwischenspeichers (Cache) im Tab *Load Sata*, um zu vermeiden dass bei der Extraktion großer Datenmengen Power BI mehrfach Aufrufe an Xtract Universal sendet. 
Das mehrfache Aufrufen führen dazu, dass mehrere Einträge für die gleiche Extraktion im Extraktions-Log von Xtract Universal erscheinen.<br>
![Power BI cache](/img/content/XU_PBI_PBI_Cache.png){:class="img-responsive"}


****
## Weiterführende Links
- [Youtube Tutorial: SAP Power BI Schnittstelle in Xtract Universal](https://www.youtube.com/watch?v=1jqw755yqP4){:target="_blank"}
- [Was ist ein lokales Datengateway?](https://docs.microsoft.com/de-de/power-bi/connect-data/service-gateway-onprem)
- [Verwenden von benutzerdefinierten Datenconnectors mit dem lokalen Datengateway](https://docs.microsoft.com/de-de/power-bi/connect-data/service-gateway-custom-connectors)
- [Konfigurieren von geplanten Aktualisierungen](https://docs.microsoft.com/de-de/power-bi/connect-data/refresh-scheduled-refresh)
- [Parameters in Power BI Desktop](https://docs.microsoft.com/en-us/power-query/power-query-query-parameters)
