---
ref: xu-azure-blob-storage-02
layout: page
title: Verbindung
description: Verbindung
product: xtract-universal
parent: azure-storage
permalink: /:collection/:path
weight: 2
progressstate: 5
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=blob-verbindung
---
{% include _content/de/xu-specific/destinationen/general/connection.md %}

### Destination Details

![xu-azure-blob-con-01](/img/content/xu/xu-azure-blob-con-01.png){:class="img-responsive"}

### Connection Type - Verbindungstyp (1)

Der Unterabschnitt *Connection* bietet zwei verschiedene Methoden zur Authentifizierung und Zugriffssteuerung auf dem Azure Storage:

1. Authentifizierung über Access Key (Zugangsschlüssel)
2. Authentifizierung über Azure Active Directory (Azure AD) 

#### 1. Authentifizierung über Access Key (Zugangsschlüssel)

Diese Authentifizierungsmethode ermöglicht den Zugriff auf das gesamte Azure Storage. 
Allgemeine Informationen über diese Authentifizierungsmethode finden Sie in der [Microsoft-Dokumentation](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage).<br>
Wählen Sie die **[Access key]** Checkbox aus, um diesen Verbindungstyp zu verwenden.

#### Verbindung via Acces Key (Zugangsschlüssel)
**Storage account**<br>
Geben Sie den Namen des Azure Storage Accounts ein.

**Access Key**<br>
Geben Sie den Azure Storage Zugangsschlüssel ein.  


{: .box-tip }
**Tipp**: Kopieren Sie Name und Access Key (Zugangsschlüssel) des Azure Storage aus dem [Azure-Portal](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?toc=/azure/storage/blobs/toc.json#view-access-keys-and-connection-string).

![xu-azure-blob-con-10](/img/content/xu-azure-blob-con-10.png){:class="img-responsive"}

**Connect**<br>
Klicken Sie auf **[Connect]**, um eine Verbindung zum Azure Storage herzustellen. 
Wenn die Verbindung erfolgreich ist, öffnet sich das Info-Fenster "Connection successful". 
Klicken Sie auf **[OK]** zum Bestätigen.

#### 2. Authentifizierung über Azure Active Directory 
Die Authentifizierung über Azure AD verwendet OAuth 2.0 und Azure AD zur Authentifizierung.
Im Vergleich zur *Authentifizierung via Access Key* erlaubt diese Option eine granularere Zugriffssteuerung.
Der Zugriff kann auf das komplette Azure Storage oder auf einzelne Storage-Container autorisiert werden. 
Allgemeine Informationen über diese Art der Authentifizierung finden Sie in der [Microsoft-Dokumentation](https://docs.microsoft.com/en-us/azure/storage/common/storage-auth-aad-app).

#### Voraussetzungen 

{: .box-note }
**Hinweis:** Die Authentifizierung über Azure AD erfordert einen Mandanten (tenant). Die Einrichtung eines Azure AD-Mandanten ist in der [Microsoft-Dokumentation](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-create-new-tenant) beschrieben. 

Bevor Sie die Authentifizierung über Azure AD verwenden, führen Sie die folgenden Schritte auf dem Azure-Portal durch:
1. Öffnen Sie auf dem Azure-Portal den Dienst *Azure Active Directory*.
2. Registrieren Sie eine Anwendung auf Ihrem Azure AD-Mandanten, wie beschrieben in der [Microsoft-Dokumentation](https://docs.microsoft.com/en-us/azure/storage/common/storage-auth-aad-app#register-your-application-with-an-azure-ad-tenant). Registrieren Sie die Anwendung als *Public client/native (mobile & desktop)*.
3. Fügen Sie der registrierten Anwendung *API-Berechtigungen* hinzu, um den Zugriff auf die Azure Storage-Web-API zu gewähren.<br> 
Die folgenden Berechtigungen sind erforderlich: <br> 
*Azure Storage - Delegated permissions - user impersonation*, <br> 
*Microsoft Graph - User.Read*. <br> 
Folgen Sie hierfür den Schritten aus der [Microsoft-Dokumentation](https://docs.microsoft.com/en-us/azure/storage/common/storage-auth-aad-app#grant-your-registered-app-permissions-to-azure-storage).
4. Weisen Sie [https://login.microsoftonline.com/common/oauth2/nativeclient](https://login.microsoftonline.com/common/oauth2/nativeclient) als Standard-Redirect-URI zu (1). 
Dies kann in der Azure AD-App-Registrierung über **Manage > Authentication > Add a platform > Mobile and desktop applications** erfolgen. 
Kopieren Sie die URL und fügen Sie sie in das Feld *Custom redirect URI* ein (2) und klicken Sie auf **[Configure]** (3). 
Bestätigen Sie im Bildschirm *Authentication* mit **[Save]**.
![xu-azure-blob-con-11](/img/content/xu/xu-azure-blob-con-11.png){:class="img-responsive"} 
5. Öffnen Sie auf dem Azure-Portal Ihr Azure Storage.
6. Weisen Sie dem Azure-Storage Zugriffsrechte zu. Folgen Sie hierfür den Schritten beschrieben in der [Microsoft-Dokumentation](https://docs.microsoft.com/en-us/azure/storage/common/storage-auth-aad-rbac-portal#assign-rbac-roles-using-the-azure-portal). 
Die erforderliche RBAC-Rolle ist *Storage Blob Data Contributor*.
![xu-azure-blob-con-07](/img/content/xu-azure-blob-con-07.png){:class="img-responsive"}

{: .box-tip }
**Tipp:** Zugriffsrechte können auf Azure Storage- oder Container-Ebene gewährt werden. 


#### Verbindung über Azure Active Directory

![xu-azure-active-directory-connection](/img/content/xu/azure_destination-activedirectory.png){:class="img-responsive"}

**Storage account**<br>
Geben Sie den Namen des Azure Storage Accounts ein.

**Tenant ID**<br>
Geben Sie die ID des Azure AD-Mandanten ein.

**Client ID**<br>
Geben Sie die Client ID der registrierten Anwendung ein.

{: .box-tip }
**Tipp:** Kopieren Sie die Tenant-ID und Client-ID aus dem Azure-Portal.

![xu-azure-blob-con-08](/img/content/xu-azure-blob-con-08.png){:class="img-responsive"}


**Connect**<br>
Verbindung mit dem Azure Storage aufbauen:<br>
1. Klicken Sie auf **[Connect]**. Ein Browser-Fenster wird geöffnet.
2. Melden Sie sich mit Ihren Azure AD-Zugangsdaten an.
![xu-azure-blob-con-05](/img/content/xu-azure-blob-con-05.png){:class="img-responsive"}
3. Das Fenster "Permissions requested" (Angeforderte Berechtigungen) listet die angeforderten Berechtigungen auf (siehe *Voraussetzungen* oben). Klicken Sie auf **[Accept]**.
![xu-azure-blob-con-06](/img/content/xu-azure-blob-con-06.png){:class="img-responsive"}
4. Wenn die Verbindung erfolgreich ist, wird das Info-Fenster "Connection successful" geöffnet. Klicken Sie auf **[OK]** zum Bestätigen. <br>


### Container (2)
Dieser Unterabschnitt wird aktiviert, nachdem eine Verbindung zum Azure Storage (Storage Account) erfolgreich hergestellt wurde.<br>

**Container**<br>
Bei der Authentifizierung über Access Key (Zugangsschlüssel) kann ein Blob-Container aus dem Drop-down-Menü ausgewählt werden.<br>
Bei der Authentifizierung über Azure AD geben Sie den Namen eines Blob Containers manuell ein.

**Test connection** <br>
(Verbindung zum Container testen)<br>
Klicken Sie auf **[Test Connection]**, um zu überprüfen ob auf den Storage-Container zugegriffen werden kann.<br>
Bei einer erfolgreichen Verbindung wird das Info-Fenster "Connection to container <*Container-Name*> successful" geöffnet. <br>

![azure_blob_test-connection](/img/content/xu-azure-blob-con-09.png){:class="img-responsive"}
Klicken Sie auf **[OK]** zum Bestätigen. <br>

Die Destination *Azure Storage (Blob / Data Lake)* kann nun verwendet werden.

### Misc (3)

{: .box-note }
**Hinweis:** Die Einstellungen in *Misc* können nur in Kombination mit einem Blob Container verwendet werden.<br> 

**Folder path**<br>
Option zum Erstellen eines Verzeichnisses innerhalb des Containers zum Abspeichern von Dateien. 
Siehe auch: [**Einstellungen > Folder Path**](./blob-einstellungen#folder-path).<br>
Wenn die Extraktionsdaten in einen Ordner innerhalb eines Azure-Blob-Containers geschrieben werden sollen, geben Sie hier einen Ordnernamen ohne Schrägstriche ein: `[Ordner]` <br>
Unterordner werden ebenfalls unterstützt und können wie folgt eingegeben werden: `[ordner]/[unterordner_1]/[unterordner_2]/…`


Anstatt eines festen Verzeichnisses, kann der Verzeichnispfad mithilfe von [Skript-Ausdrücken](./../../fortgeschrittene-techniken/script-ausdruecke#definierte-eigenschaften) definiert werden. 
Hierbei wird der Verzeichnispfad dynamisch beim Ausführen der Extraktion ermittelt. <br>

### Column Encryption (4)
{% include _content/de/xu-specific/destinationen/general/column-encryption.md %}

### File Format 

**File type**<br>
Wählen Sie das gewünschte Dateiformat aus dem Dropdown Menü. 
Die Formate *Parquet* und *CSV* sind verfügbar.
![AWS S3](/img/content/xu/XU_S3_DestinationDetails2.png){:class="img-responsive"}

#### CVS Settings
Die Einstellungen für den Dateityp *CSV* entsprechen den allgemeinen [Flat File CSV Einstellungen](../csv-flat-file).

#### Parquet Settings
**Compatibility mode**<br>
Sie können zwischen *Pure* und *Spark* für den Kompatibilitätsmodus wählen.
Spark unterstützt nicht die im Pure-Mode verwendeten Datentypen, daher müssen andere Datentypen verwendet werden.

| SAP | Pure | Spark |
|------|-------------|-------|
| INT1 | UINT_8 | INT16 |
| TIMS | TIME_MILLIS | UTF8 |

### Retry- und Rollback-Funktion

Die Retry- und Rollback-Funktionen sind eingebaute Wiederholungsmechanismen der Azure Storage Destination, die automatisch aktiviert sind.

Die Retry-Funktion verhindert, dass Extraktionen fehlschlagen wenn kurzzeitige Verbindungsunterbrechungen zu Azure auftreten.
Die Implementierung der Retry- und Rollback-Funktion entspricht den [Microsoft Richtlinien](https://docs.microsoft.com/en-us/azure/architecture/best-practices/retry-service-specific#retry-strategies).
Die Logik der Funktion basiert auf dem WebExceptionStatus. 

Sollte eine Ausnahme (Exception) ausgelöst werden, verfolgt Xtract Universal eine exponentielle Strategie der Wiederholversuche.
Das bedeutet, dass 7 Verbindungsversuche gestartet werden in einem Zeitraum von 140 Sekunden. 
Sollte in diesem Zeitraum keine Verbindung zustande kommen, wird die Extraktion abgebrochen. 

Die Rollback-Funktion deckt Szenarien ab, bei denen eine Extraktion nicht wegen eines Verbindungsfehlers zu Azure fehlschlägt, sondern z.B. wegen eines Verbindungsfehlers zu SAP.
In solchen Fällen versucht Xtract Universal alle Dateien aus dem Azure Storage zu entfernen, die im Laufe der Extraktion erstellt wurden.
  


 
