---
ref: xu-azure-blob-storage-02
layout: page
title: Verbindung
description: Verbindung
product: xtract-universal
parent: azure-storage
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=blob-verbindung
---


### Eine Azure Storage Destination hinzufügen
1. Navigieren Sie im Hauptfenster des Designers zu **[Server] > [Manage Destinations]**. Das Fenster "Manage Destinations" wird geöffnet.
2. Klicken Sie auf **[Add]**, um eine neue Destination hinzuzufügen. Das Fenster "Destination Details" wird geöffnet.
![XU_azure_Destination](/img/content/add-select-destination.png){:class="img-responsive"}
3. Wählen Sie die Destination *Azure Storage (Blob / Data Lake)* aus der Drop-down-Liste aus.

Das Fenster "Destination Details" besteht aus zwei Tabs:
- Azure Storage Connection
- File Format

### Azure Storage Connection -  Azure Storage Einstellungen
Der Tab *Azure Storage Settings* besteht aus zwei Unterabschnitten:
- Connection 
- Container
![xu-azure-blob-con-01](/img/content/xu-azure-blob-con-01_.png){:class="img-responsive"}

Der Unterabschnitt *Connection* bietet zwei verschiedene Methoden zur Authentifizierung und Zugriffssteuerung auf dem Azure Speicherkonto:

1. Authentifizierung über Access Key (Zugangsschlüssel)
2. Authentifizierung über Azure Active Directory  

### Authentifizierung über Access Key (Zugangsschlüssel) (1)

Diese Authentifizierungsmethode ermöglicht den Zugriff auf den gesamten Azure Speicherkonto. Allgemeine Informationen über diese Authentifizierungsmethode finden Sie in der [Microsoft-Dokumentation](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage).

#### Connection (Verbindung)
**Storage account**<br>
Name des Speicherkontos im Azure-Portal

**Access Key**<br>
Zugangsschlüsel des Azure Speicherkontos.  


{: .box-tip }
**Tipp**: Kopieren Sie Namen und Access Key (Zugangsschlüssel) des Azure Speicherkontos aus dem [Azure-Portal](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?toc=/azure/storage/blobs/toc.json#view-access-keys-and-connection-string).

![xu-azure-blob-con-10](/img/content/xu-azure-blob-con-10.png){:class="img-responsive"}

**Connect**<br>
Schaltfläche zum Herstellen einer Verbindung zum Azure Speicherkonto.<br>
Wenn die Verbindung erfolgreich ist, poppt das Info-Fenster "Connection successful" auf.<br> 
Klicken Sie auf **[OK]** zum Bestätigen.

#### Container
Dieser Unterabschnitt wird aktiviert nachdem eine Verbindung zum Azure Speicherkonto (Storage account) erfolgreich hergestellt wurde.<br>
**Storage account** <br>
Bei der Authentifizierung über Access Key (Zugangsschlüssel) ist dieses Feld für die Eingabe deaktiviert.

**Container**<br>
Bei der Authentifizierung  über Access Key (Zugangsschlüssel) kann ein Blob-Container aus dem Drop-down-Menü ausgewählt werden.

**Test connection to container** <br>
(Verbindung zum Container testen)<br>
Schaltfläche zur Überprüfung, ob auf den Storage-Container zugegriffen werden kann. <br>
Bei einer erfolgreichen Verbindung wird das Info-Fenster "Connection to container <*Container-Name*> successful" geöffnet. <br>

![azure_blob_test-connection](/img/content/xu-azure-blob-con-09.png){:class="img-responsive"}
Klicken Sie auf **[OK]** zum Bestätigen. <br>
Die Destination *Azure Storage (Blob / Data Lake)* kann nun verwendet werden.

**Folder path**<br>
Option zum Erstellen eines Verzeichnisses innerhalb des Containers zum Abspeichern von Dateien. <br>
Mehr Details im Abschnitt [Destination Settings - Destinationseinstellungen > Folder Path](./blob-einstellungen#destination-settings---destinationseinstellungen).

*****************

### Authentifizierung über Azure Active Directory  (2)
Die Authentifizierung über Azure Active Directory verwendet OAuth 2.0 und Azure AD zur Authentifizierung.
Im Vergleich zur *Authentication via Access Key* (Authentifizierung über Zugriffsschlüssel) erlaubt diese Option eine granularere Zugriffssteuerung.
Der Zugriff kann auf das komplette Azure Speicherkonto oder auf einzelne Storage-Container autorisiert werden. Allgemeine Informationen über diese Art der Authentifizierung finden Sie in der [Microsoft-Dokumentation](https://docs.microsoft.com/en-us/azure/storage/common/storage-auth-aad-app).

#### Voraussetzungen 

{: .box-note }
**Hinweis:** Die Authentifizierung über Azure Active Directory erfordert einen Azure AD-Mandanten (tenant). Die Einrichtung eines Azure AD-Mandanten ist in der [Microsoft-Dokumentation] (https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-create-new-tenant) beschrieben. 

Bevor Sie die Authentifizierung über Azure Active Directory verwenden, führen Sie die folgenden Schritte auf dem Azure-Portal durch:
1. Öffnen Sie auf dem Azure-Portal den Dienst *Azure Active Directory*.
2. Registrieren Sie eine Anwendung auf Ihrem Azure AD-Mandanten, wie beschrieben in der [Microsoft-Dokumentation](https://docs.microsoft.com/en-us/azure/storage/common/storage-auth-aad-app#register-your-application-with-an-azure-ad-tenant). Registrieren Sie die Anwendung als *Public client/native (mobile & desktop)*.
3. Fügen Sie der registrierten Anwendung *API-Berechtigungen* hinzu, um den Zugriff auf die Azure Storage-Web-API zu gewähren.<br> 
Die folgenden Berechtigungen sind erforderlich: *Azure Storage - Delegated permissions - user impersonation*, *Microsot Graph - User.Read*. Folgen Sie hierfür den Schritten beschrieben in der [Microsoft-Dokumentation](https://docs.microsoft.com/en-us/azure/storage/common/storage-auth-aad-app#grant-your-registered-app-permissions-to-azure-storage).
4. Öffnen Sie auf dem Azure-Portal Ihr Azure Speicherkonto.
5. Weisen Sie dem Azure-Storage Zugriffsrechte zu. Folgen Sie hierfür den Schritten beschrieben in der [Microsoft-Dokumentation](https://docs.microsoft.com/en-us/azure/storage/common/storage-auth-aad-rbac-portal#assign-rbac-roles-using-the-azure-portal). Die erforderliche RBAC-Rolle ist *Storage Blob Data Contributor*.
![xu-azure-blob-con-07](/img/content/xu-azure-blob-con-07.png){:class="img-responsive"}

{: .box-tip }
**Tipp:** Zugriffsrechte können auf Azure Speicherkonto- oder auf Container-Ebene gewährt werden. 

#### Connection (Verbindung)
**Tenant ID**<br>
ID des Azure AD-Mandanten

**Client ID**<br>
ID der registrierten Anwendung

{: .box-tip }
**Tipp:** Kopieren Sie die Mandanten-ID und Anwendungs-ID aus dem Azure-Portal.

![xu-azure-blob-con-08](/img/content/xu-azure-blob-con-08.png){:class="img-responsive"}


**Connect**<br>
Schaltfläche zum Verbinden mit dem Azure Speicherkonto.<br>
1. Klicken Sie auf **[Connect]**. Ein Browser-Fenster wird geöffnet.
2. Melden Sie sich mit Ihren Azure AD-Zugangsdaten an.
![xu-azure-blob-con-05](/img/content/xu-azure-blob-con-05.png){:class="img-responsive"}
3. Das Fenster "Permissions requested" (Angeforderte Berechtigungen) listet die angeforderten Berechtigungen auf (siehe oben). Klicken Sie auf **[Accept]**.
![xu-azure-blob-con-06](/img/content/xu-azure-blob-con-06.png){:class="img-responsive"}
4. Wenn die Verbindung erfolgreich ist, wird das Info-Fenster "Connection successful" geöffnet. Klicken Sie auf **[OK]** zum Bestätigen. <br>


#### Container
Dieser Unterabschnitt wird aktiviert, nachdem eine Verbindung zum Azure Speicherkonto erfolgreich hergestellt wurde.<br>
**Storage account** <br>
Bei Authentifizierung über Azure Active Directory muss der Azure Speicherkontoname in diesem Feld eingegeben werden.

**Container**<br>
Bei Authentifizierung über Azure Active Directory muss der Blob-Container in diesem Feld eingegeben werden.

{: .box-note }
**Hinweis:** Bei Authentifizierung über Azure Active Directory, ist das Drop-down-Menü nicht verfügbar.
Geben Sie den Namen des Blob-Containers manuell ein.

**Test connection to container** (Verbindung zum Container Testen)<br>
Schaltfläche zur Überprüfung, ob auf den Storage-Container zugegriffen werden kann. <br>
Bei einer erfolgreichen Verbindung wird das Info-Fenster "Connection to container <*Container-Name*> successful" geöffnet. <br>
![azure_blob_test-connection](/img/content/xu-azure-blob-con-09.png){:class="img-responsive"}
Klicken Sie auf **[OK]** zum Bestätigen. <br>
Die Destination *Azure Storage (Blob / Data Lake)* kann nun verwendet werden.

**Folder path** <br>
Option zum Erstellen eines Verzeichnisses innerhalb des Containers zum Abspeichern von Dateien. Mehr Details im Abschnitt [Destination Settings - Destinationseinstellungen > Folder Path](./blob-einstellungen#destination-settings---destinationseinstellungen).


### File Format 
Wählen Sie das gewünschte Dateiformat zwischen "Parquet" und "CSV".
![azure_blob_destination_settings_csv_settings](/img/content/xu/xu-azure-blob-con-04.png){:class="img-responsive"}
Die "CSV" Einstellungen entsprechen denen der allgemeinen [Flat File CSV Einstellungen](../csv-flat-file).

Wenn Sie "Parquet" Dateiformat auswählen, können Sie im Feld "Compatibility mode" zwischen "Pure" und "Spark" auswählen.

![azure_blob_destination_settings_csv_settings](/img/content/xu/xu-azure-blob-con-05.png){:class="img-responsive"}

| SAP | Pure | Spark |
|------|-------------|-------|
| INT1 | UINT_8 | INT16 |
| TIMS | TIME_MILLIS | UTF8 |

Spark unterstützt nicht die im Pure-Mode verwendeten Datentypen, daher müssen andere Datentypen verwendet werden.

### Retry- und Rollback-Funktion

Die Retry- und Rollback-Funktionen sind eingebaute Wiederholungsmechanismen der Azure Storage Destination, die automatisch aktiviert sind.
Die Retry-Funktion verhindert, dass Extraktionen fehlschlagen, wenn kurzzeitige Verbindungsunterbrechungen zu Azure auftreten.
Die Retry- und Rollback-Funktion ist implementiert entsprechend den [Microsoft Richtlinien](https://docs.microsoft.com/en-us/azure/architecture/best-practices/retry-service-specific#retry-strategies).
Die Logik hinter der Funktion basiert auf dem WebExceptionStatus. Sollte eine Ausnahme (Exception) ausgelöst sein, verfolgt Xtract Universal eine exponentielle Strategie der Wiederholversuche.
Dies bedeutet, dass 7 Verbindungsversuche gestartet werden in einem Zeitraum von 140 Sekunden. Sollte in dem Zeitraum von 140 Sekunden keine Verbindung zustande kommen, wird die Extraktion abgebrochen. 

Die Rollback-Funktion deckt Szenarien ab, bei denen eine Extraktion fehlschlägt, wenn ein Problem auftritt, das nicht mit der Verbindung zu Azure im Zusammenhang steht. Ein Beispiel dafür ist eine Extraktion, die aufgrund eines Verbindungsfehlers zu SAP fehlschlägt.
In solchen Fällen versucht Xtract Universal, alle Dateien aus dem Azure-Speicher zu entfernen, die im Laufe der Extraktion erstellt wurden.
  


 
