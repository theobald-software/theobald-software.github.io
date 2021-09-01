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
### Einführung

Dieses Abschnitt beinhaltet Informationen zu Verbindung von Power BI und Xtract Universal über die  *Power BI Connector* Zielumgebung von Xtract Universal. 

Die Zielumgebung *Power BI Connector* bietet zwei Wege zum Verbinden von Power BI mit Xtract Universal:
- Power BI Custom Connector
- Generic Power Query M-script

![Power-BI-Connector-](/img/content/xu/PowerBI_Connector_Architecture_SSO.png){:class="img-responsive"}

### Unterstützte Power BI Umgebungen

Xtract Universal unterstützt folgende Umgebungen: 
- [Power BI Desktop](https://powerbi.microsoft.com/en-us/desktop/) mittels [Power BI Custom Connector](Power-BI-Connector#power-bi-custom-connector-manuell-einrichten)
- [Power BI service](https://docs.microsoft.com/en-us/power-bi/power-bi-overview#the-parts-of-power-bi) mittels [Power BI on-premises data gateway](https://docs.microsoft.com/de-de/data-integration/gateway/service-gateway-onprem)
- [Power BI Report Server](https://docs.microsoft.com/de-de/power-bi/report-server/get-started) mittels [Power Query M-script](Power-BI-Connector#power-query-m-script-in-power-bi-einbrichten)


|  | Custom Connector | M-script |
|------------------------|:---:|:----:|
| Power BI Desktop | X | X |
| Power BI service | X | X |
| Power BI Report Server |  | X |

{% include _content/de/xu-specific/destinationen/general/connection.md %}	

### Verbindung - Destination Details
Um Power BI Connector zu verwenden, müssen keine weiteren Einstellungen vorgenommen werden.

![Power BI Connector (beta) Destination](/img/content/XU_pbi_connector_connection.png){:class="img-responsive"}

### Destination Settings öffnen

1. Eine bestehende Extraktion anlegen oder auswählen (siehe auch [Erste Schritte mit Xtract Universal](../erste-schritte/eine-neue-extraktion-anlegen)).
2. Klicken Sie auf **[Destinations]**. Das Fenster "Destination Settings" wird geöffnet.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

Die folgenden Einstellungen können für die Destination definiert werden. 
  
### Destination Settings - Destinationseinstellungen

![pbi-configuration](/img/content/XU_pbi_connector_destination.png){:class="img-responsive"}

{% include _content/de/xu-specific/destinationen/general/column-name-style.md %}

{% include _content/de/xu-specific/destinationen/general/date-conversion.md %}

Die *Power BI Connector* Destination in Xtract Universal funktioniert in Kombination mit dem benutzerdefinierten Custom Connector für Power BI. Der Dateiname ist *XtractUniversalExtension.pqx*. Die Datei XtractUniversalExtension.pqx befindet sich im Ordner *powerbi* innerhalb des Installationsverzeichnisses von Xtract Universal.

Der Power BI Connector wurde entsprechend den Microsoft Richtlinien zum Erstellen von [Custom Connectors in Power BI](https://docs.microsoft.com/de-de/power-bi/desktop-connector-extensibility) entwickelt.
### Power BI Custom Connector manuell einrichten
Wenn Sie die Anwendung *Power BI Desktop* verwenden, beachten Sie Folgendes: 
1. Prüfen Sie, ob das Verzeichnis *[Documents]\Power BI Desktop\Custom Connectors* existiert.
2. Erstellen Sie dieses Verzeichnis, falls es nicht existiert.
3. Kopieren Sie die Datei *XtractUniversalExtension.pqx* in das Verzeichnis *[Documents]\Power BI Desktop\Custom Connectors*.
4. Starten Sie Power BI neu. <br>
5. Ändern Sie die Sicherheitsstufe in der Option [Datenerweiterung](https://docs.microsoft.com/de-de/power-bi/desktop-connector-extensibility#data-extension-security) innerhalb von Power BI  auf *Alle Erweiterungen ohne Überprüfung oder Warnung laden* (Allow any extension to be load without validation or warning). <br>
Andernfalls wird die Datenquelle *Xtract Universal* in Power BI nicht angezeigt.

![powerbi-datasource](/img/content/XU_pbi_connector_xu_datasouce.png){:class="img-responsive"}

### Power BI Custom Connector automatisch einrichten
1. Öffnen Sie den *powerbi* Ordner, der sich im Installationsverzeichniss von Xtract Universal befindet.
2. Führen Sie das PowerShell Skript *install-connector* aus. <br>
Dieses Skript kopiert die *XtractUniversalExtension.pqx* Datei in den Ordner *[Documents]\Power BI Desktop\Custom Connectors*.
Falls der Ordner nicht existiert, wird er neu angelegt.
3. Führen Sie das PowerShell Skript *trust-connector* aus.<br>
Dieses Skript modifiziert die Registry unter HKLM:\SOFTWARE\Policies\Microsoft\Power BI Desktop.
Falls noch nichtvorhanden, wird der Wert *TrustedCertificateThumbprints* mit dem Fingerabdruck der *XtractUniversalExtension.pqx* Datei angelegt.
Dieser Prozess entspricht den Microsoft-Empfehlungen für 
[vertrauenswürdige Connectoren von Drittanbietern](https://docs.microsoft.com/de-de/power-bi/connect-data/desktop-trusted-third-party-connectors).

### Power BI mit Xtract Universal verbinden

1. Wählen Sie Xtract Universal im Menu *Get Data*.
2. Klicken Sie auf die Schaltfläche *Connect*.
3. Geben Sie die URL des Xtract Universal-Webservers an `<Protocol>://<HOST oder IP address>:<Port>/`.
![powerbi-XU_URL](/img/content/XU_pbi_connector_XU_URL.png){:class="img-responsive"}
	Wenn Sie aufgefordert werden eine der folgenden Authentifizierungsmethoden auszuwählen: *Anonymous*, *Basic* or *Windows*, befolgen Sie die Handlungsanweisungen aus dem Abschnitt [Singe Sign On und SAP-Authentifizierung](Power-BI-Connector#single-sign-on-und-sap-authentifizierung).
	Im Fenster Navigator werden alle *Power BI Connector*- Extraktionen von Xtract Universal aufgelistet. 
4. Wählen Sie eine Extraktion aus der Liste. <br>
Die Vorschau zeigt die SAP-Spaltenkofbezeichnungen und  Vorschaudaten abhängig vom Extraktionstyp, z.B. Echt-Daten oder Dummy-Daten.
5. Klicken Sie auf die Schaltfläche *Load*. <br>
Dies stößt eine Extraktion in Xtract Universal an und die Daten werden in Power BI geladen .

![powerbi-navigator](/img/content/XU_pbi_connector_navigator.png){:class="img-responsive"}

****
#### Weiterführende Links
- [Youtube Tutorial: SAP Power BI Schnittstelle in Xtract Universal](https://www.youtube.com/watch?v=1jqw755yqP4){:target="_blank"}

### Power Query M-script in Power BI einbrichten

Anstelle des Power BI Custom Connector, können Sie auch das Custom Power Query M-script zum Verbinden von Power BI mit Xtract Universal verwenden. 

Das Power BI Query M-Script befindet sich innerhalb des Installationsverzeichnisses von Xtract Universal: `C:\Program Files\XtractUniversal\powerbi\loading_script.txt`.

{: .box-warning }
**Warning! Nutzung des Custom Connectors & Query M-Script**<br>
Power Query M-script und Power BI Custom Connector gehören nicht zusammen.<br>
Verwenden Sie entweder das Power Query M-script **oder** den Power BI Custom Connector.

{: .box-note }
**Hinweis:** Verwenden Sie nur die Extraktionen mit der [Power BI Connector Destination](Power-BI-Connector#verbindung---destination-details).

1. Erstellen Sie einen Power BI-Bericht mittels **Home > Get Data > Blank Query** als Datenquelle.
2. Öffnen Sie den **[Advanced Editor]**.
![Advanced Editor](/img/content/pbi_advanced_editor.png){:class="img-responsive"}
3. Öffnen Sie das Xtract Universal *loading_script* in jedem beliebigen Texteditor.
4. Kopieren Sie den kompletten Inhalt in das Fenster des erweiterten Editors von Power BI.
5. Ändern Sie die Werte in den Feldern **ExtractionName** und  **ServerURL** enstprechend dem Namen Ihrer Xtract Universal Extraktion und dem Webserver. (1)
![PowerQueryEditor](/img/content/XU_PBI_PowerQueryEditor.png){:class="img-responsive"}
6. Bestätigen Sie das Skript durch Klicken auf **[Done]** (2).
7. Klicken Sie die Schaltfläche **{Close & Apply]**.
8. Wenn Sie aufgefordert werden eine der folgenden Authentifizierungsmethoden (*Anonymous*, *Basic* , oder *Windows*) auszuwählen, <br> befolgen Sie die Handlungsanweisungen aus dem Abschnitt [Singe Sign On und SAP-Authentifizierung](Power-BI-Connector#single-sign-on-und-sap-authentifizierung).

### Power BI Service - Voraussetzungen
Die Anbindung des Power BI Service erfordert folgende Komponenten:

- [Power BI Account](https://powerbi.microsoft.com/de-de/landing/signin/)
- [On-premises Data Gateway](https://powerbi.microsoft.com/en-us/gateway/)

### Einrichtung On-premises Data Gateway

Befolgen Sie die folgenden Schritte, um das On-premises Data Gateway mittels Power BI Custom Connector einzurichten.

{: .box-note }
**Hinweis:** Die Verbindung zu Xtract Universal kann mithilfe von Power Query M-script oder Power BI Custom Connector erstellt werden. Die Verwendung von Power Query M-script benötigt keine weitere Konfiguration.

1. Installieren Sie das On-premises Data Gateway auf dem Xtract Universal Anwendungsserver.
2. Konfigurieren Sie das Data Gateway, siehe [Use the on-premises data gateway app](https://docs.microsoft.com/de-de/data-integration/gateway/service-gateway-app).
3. Wechseln Sie in den Tab *Connectors* und hinterlegen Sie den Pfad zum Power BI Custom Connector, z.B. `C:\Program Files\XtractUniversal\powerbi`.<br> Die *XtractUniversalExtension* wird anschließend als Custom Data Connector angezeigt.
![Data-Gateway Connectors](/img/content/xu/data-gateway-connectors.png){:class="img-responsive"}


### Xtract Universal als Datenquelle hinzufügen
Das konfigurierte On-premises Data Gateway wird nachfolgend in die Power BI Service Umgebung eingebunden. Anschließend muss eine DataSource zum Xtract Universal Server eingerichtet werden.

1. Öffnen Sie im Power BI Service **Settings > Manage Gateways**.
2. Öffnen Sie das *GATEWAY CLUSTERS* Menü über **[...]**.
3. Erstellen Sie eine Datenquelle über **[ADD DATA SOURCE]** (1).
![ADD DATA SOURCE](/img/content/xu/add-data-source.png){:class="img-responsive"}
4. Wählen Sie den Data Source Type *Xtract Universal Extraction* aus. 
![NEW DATA SOURCE](/img/content/xu/new-data-source.png){:class="img-responsive"}
5. Tragen Sie die URL des Xtract Universal Servers in der Form `<Protokoll>://<HOST oder IP-Adresse>:<Port>/` ein, z.B. `https://todd.theobald.local:8165/`.
6. Wählen Sie die Authentication Method, z.B. *Basic*, *Windows* oder *Anonymous*.
7. Bestätigen Sie die Eingaben mit **[ADD]** (2).
![Configure DATA SOURCE](/img/content/xu/configure-data-source.png){:class="img-responsive"}

**Data Source Name**<br> Tragen Sie einen beliebigen Namen für die Xtract Universal Power BI Datenquelle ein.

**Data Source Type**<br> Wählen Sie den Eintrag *Xtract Universal Extraction* aus dem Dropdown-Menü. 

{: .box-note }
**Hinweis:** Wenn der Eintrag Xtract Universal nicht in dem Dropdown-Menü verfügbar ist, überprüfen Sie die Konfiguration im Abschnitt [Einrichtung On-premises Data Gateway](Power-BI-Connector#einrichtung-on-premises-data-gateway).

**Xtract Universal Server**<br> Geben Sie die Xract Universal Server URL an, siehe [Web Server](../server/server_einstellungen#web-server).

**Authentication Method**<br> 
Auswahl einer Authentisierungsmethode, siehe [Single Sign On und SAP-Authentifizierung](Power-BI-Connector#einrichtung-on-premises-data-gateway):
- Basic
- Windows
- Anonymous

**Advanced settings**<br> Bei Default-Einstellungen belassen.

### Data Source Status
Überprüfen Sie den Data Source Status und weiterere Einstellungen, z.B. **Schedules Refresh**.  
![DATA SOURCE Settings](/img/content/xu/data-source-settings.png){:class="img-responsive"}


****
#### Weiterführende Links:
- [Was ist ein lokales Datengateway?](https://docs.microsoft.com/de-de/power-bi/connect-data/service-gateway-onprem)
- [Verwenden von benutzerdefinierten Datenconnectors mit dem lokalen Datengateway](https://docs.microsoft.com/de-de/power-bi/connect-data/service-gateway-custom-connectors)
- [Konfigurieren von geplanten Aktualisierungen](https://docs.microsoft.com/de-de/power-bi/connect-data/refresh-scheduled-refresh)

### Single Sign On und SAP-Authentifizierung

Beim erstmaligem Einrichten der Xtract Universal-Datenquelle in Power BI, werden Sie aufgefordert eine der folgenden Authentifizierungsmethoden auszuwählen:

* *Anonymous*: Wählen Sie diese Option, wenn Ihre Xtract Universal-Servereinstellungen keine Authentifizierung erfordern, um eine Extraktion auszuführen.
* *Basic*:  Wählen Sie diese Option, wenn in Xtract Universal in den [SAP Source-Einstellungen](../einfuehrung/sap-verbindungen-anlegen#authentication) die Checkbox *Require SAP Credentials to be explicitly supplied for execution* markiert ist. Geben Sie Ihre SAP-Benutzerdaten in die entsprechenden Eingabefelder ein.
* *Windows*: Wählen Sie diese Option, wenn Sie [SSO](Power-BI-Connector#einrichtung-on-premises-data-gateway) verwenden, oder wenn ein eingeschränkter Zugang zu den Extraktionen in den Xtract Universal-Servereinstellungen definiert ist. <br>
Tragen Sie \<domain>\\\<Windows AD user> ins Feld *user* und Ihr Windows-Passwort ins Feld *Password* ein.

Xtract Universal und die *Power BI Connector* Destination unterstützen Single Sign On (SSO) zu SAP. Wenn SSO korrekt konfiguriert ist, werden die Windows-Anmeldedaten des Power BI-Benutzers den SAP-Anmeldedaten zugeordnet (gemapped). Auf diese Weise wird das SAP-Berechtigungskonzept unterstützt und dem Benutzer werden nur die Daten angezeigt, die seiner SAP-Berechtigung entsprechen.
![XU_PBI_EN_SSO](/img/content/XU_PBI_EN_SSO.png){:class="img-responsive"}

### XU Custom Parameter in Power BI

Custom Parameter (benutzerdefinierte Parameter), die in Xtract Universal für eine Extraktion angelegt wurden, werden in Power BI Desktop als eingabebereit angezeigt.
Wenn Sie den Power BI Custom Connector verwenden, können die in Xtract Universal definierten Custom Parameter zum Zeitpunkt einer Extraktion in Power BI Desktop befüllt werden.

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

*****
#### Weiterführende Links	
- [Parameters in Power BI Desktop](https://docs.microsoft.com/en-us/power-query/power-query-query-parameters)

### Fehlerbehebung

Extraktionen von Xtract Universal, die große Datenmengen extrahieren, können zahlreiche Aufrufe von Power BI zu Xtract Universal verursachen. 
Dieser Vorgang führt dazu, dass mehrfache Einträge für die gleiche Extraktion im Extraktions-Log von Xtract Universal erscheinen.

Um diese Verhaltensweise zu vermeiden,  erhöhen Sie die Größe des Zwischenspeichers (Cache).
![Power BI cache](/img/content/XU_PBI_PBI_Cache.png){:class="img-responsive"}


