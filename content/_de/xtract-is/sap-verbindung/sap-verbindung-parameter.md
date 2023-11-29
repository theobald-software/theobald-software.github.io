---
ref: xi-sap-connection-03
layout: page
title: SAP Verbindungsparameter
description: SAP Connection Parameters
product: xtract-is
parent: sap-verbindung
permalink: /:collection/:path
weight: 3
lang: de_DE
---


### Parametrisieren eines Xtract Connection Managers

Den Eigenschaften des [Xtract Connection Managers](./verbindungsmanager) können Parameter zugewiesen werden.
Führen Sie die folgenden Schritte aus, um Projektparameter für Connection-Manager-Eigenschaften einzurichten:

1. Klicken Sie mit der rechten Maustaste auf einen Xtract Connection Manager und wählen Sie **Parameterize...**. Das Fenster "Parameterize" öffnet sich.
2. Wählen Sie die Eigenschaft aus, die Sie parametrisieren möchten.<br>
![connection-manager-parameterize](/img/content/xis/connection-manager-parameterize.png){:class="img-responsive"}
3. Wählen Sie **Use existing parameter**, um der ausgewählten Eigenschaft einen Parameter zuzuweisen oder wählen Sie **Create New Parameter**, um einen neuen Parameter zu erstellen.
4. Im Abschnitt *Scope* wählen Sie **Project**, um einen Projektparameter zu erstellen. 
5. Klicken Sie auf **[OK]**. Der neue Projektparameter ist jetzt unter *Project.params* im "Solution Explorer" verfügbar.<br>
![connection-manager-project-params](/img/content/xis/connection-manager-project-params.png){:class="img-responsive"}

Weitere Informationen zu Paket-und Projektparametern finden Sie unter [Microsoft Documentation: Integration Services (SSIS) Package and Project Parameters](https://learn.microsoft.com/en-us/sql/integration-services/integration-services-ssis-package-and-project-parameters?view=sql-server-ver16).

### Liste der Xtract Connection-Manager-Eigenschaften

|Property Name|Description|
|:----|:----|
| *AppServer* | Hostname oder IP-Adresse des SAP-Application-Servers.|
| *AttachesSapGui* | Wird für Reports und BAPIs, die eine installierte SAP GUI erfordern, auf *True* gesetzt.|
| *Client* | Die dreistellige Nummer des SAP-Mandanten zwischen 000 und 999. |
| *InstanceNumber* | Eine zweistellige Zahl zwischen 00 und 99. |
| *InternalTableFunction*| Der Funktionsbaustein, der für die interne Kommunikation von Xtract IS mit SAP verwendet wird, z. B. das Abrufen von Metadaten. |
| *Language* | Die Anmeldesprache für das SAP-System, z. B. EN für Englisch oder DE für Deutsch. |
| *LegacyStorageMode* | Aktiviert Abwärtskompatibilität. SAP-Verbindungsparameter werden nicht mehr als Verbindungszeichenfolgen, sondern als Eigenschaften gespeichert. |
| *LoadBalancingEnabled* | Ermöglicht Load Balancing (SAP-Message Server). |
| *LogOnGroup*| SAP-Anmeldegruppe für Load Balancing. |
| *MessageServer* | Name oder IP-Adresse des SAP-Message Servers. |
| *Name* | Name des Connection Managers.|
| *Password* | Passwort des SAP-Benutzers. |
| *PasswordObfuscated* | Wenn *LegacySorageMode* aktiviert ist, bestimmt diese Eigenschaft, ob das Passwort als Klartext gespeichert oder maskiert wird. |
| *RfcLibrary* | Wählen Sie eine RFC-Bibliothek aus, um eine RFC-Verbindung zu einem SAP-System herzustellen. |
| *SncEnabled* | Aktiviert eine sichere Netzwerkverbindung (SNC).|
| *SncLibraryPathX64* |  Der vollständige Pfad zum Bibliotheksspeicherort für 64-Bit-Systeme. |
| *SncLibraryPathX86* | Der vollständige Pfad zum Bibliotheksspeicherort für 32-Bit-Systeme.|
| *SncPartnerName* | Der für den SAP-Application-Server konfigurierte SAP-Partnername, z. B. `p:SAPserviceERP/do_not_care@THEOBALD.LOCAL` |
| *SncQualityOfProtection* | Die SNC-Schutzstufe, z. B. *9 – Maximum*|
| *SystemId* | Eine dreistellige System-ID, z.B. MSS. |
| *TraceDirectory* | Ein lokaler Pfad zu einem Ordner, in dem Sie die Debug-Informationen speichern möchten. |
| *User*| Name des SAP-Benutzers.|

### Sensible Umgebungsvariablen im SSIS Katalog

Umgebungsvariablen im [SSISDB-Katalog](https://learn.microsoft.com/en-us/sql/integration-services/catalog/ssis-catalog?view=sql-server-ver16) können in Kombination mit den Projektparametern verwendet werden, um Folgendes zu erreichen:

- Parametrisieren der SSIS-Pakete nach der Bereitstellung auf dem Server.
- Verschlüsseln der sensiblen Daten, z. B. SAP-Passwörter.

Führen Sie die folgenden Schritte aus, um eine sensible Umgebungsvariable für eine Xtract Connection Manager-Eigenschaft einzurichten:

1. Konfigurieren Sie einen Xtract Connection Manager, der Projektparameter verwendet, siehe [Parametrisieren eines Xtract Connection Managers](#parameterisieren-eines-xtract-connection-managers).
2. Stellen Sie das Projekt in einem SSISDB-Katalog bereit. 
3. Erstellen Sie eine Umgebung im SSISDB-Katalog.
4. Erstellen Sie eine sensible Variable in den Umgebungseigenschaften.<br>
![XIS_sensitive_variable_1](/img/content/XIS_sensitive_variable_1.png){:class="img-responsive" }
5. Öffnen Sie das Konfigurationsmenü des Projekts. Die Projektparameter aus Schritt 1 stehen in der Parameterliste zur Verfügung.
6. Klicken Sie auf **[...]**, um einem Projektparameter sensible Umgebungsvariablen zuzuweisen.<br>
![XIS_sensitive_variable_1](/img/content/XIS_sensitive_variable_2.png){:class="img-responsive" }
7. Führen Sie ein Paket mithilfe der Umgebung aus.


*****

#### Weiterführende Links
- [Xtract Connection Manager](./verbindungsmanager)
- [SAP-Verbindung mit SNC](./sap-verbindung-mit-snc)
- [Microsoft Documentation: SSIS Catalog](https://learn.microsoft.com/en-us/sql/integration-services/catalog/ssis-catalog?view=sql-server-ver16)
- [Microsoft Documentation: Access Control for Sensitive Data in Packages](https://learn.microsoft.com/en-us/sql/integration-services/security/access-control-for-sensitive-data-in-packages#protection-level-setting-and-the-ssisdb-catalog)
