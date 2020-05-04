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
![XU_azure_Destination](/img/content/xu/azure_destination-det.png){:class="img-responsive"}
3. Wähen Sie die Destination *Azure Storage (Blob / Data Lake)* aus der Drop-Down-Liste aus.

Das Fenster "Destination Details" besteht aus zwei Tabs:
- Blob Storage Settings
- CSV Settings

### Blob Storage Settings -  Blob Storage Einstellungen
Der Tab *Blob Storage Settings* besteht aus zwei Unterabschnitten:
- Connection 
- Container
![xu-azure-blob-con-01](/img/content/xu-azure-blob-con-01_.png){:class="img-responsive"}

Der Unterabschnitt *Connection* bietet zwei verschiedene Methoden zur Authentifizierung und Zugriffsauthorisierung auf dem Azure-Storage-Account:

1. Authentifizierung über Access Key (Zugangsschlüssel)
2. Authentifizierung über Azure Active Directory  

### Authentifizierung über Access Key (Zugangsschlüssel)

Diese Authentifizierungsmethode ermöglicht den Zugriff auf den gesamten Azure-Storage-Account. Allgemeine Informationen über diese Authentifizierungsmethode finden Sie in der [Microsoft-Dokumentation](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage).

#### Connection (Verbindung)
**Storage account**<br>
Storage-Account-Name im Azure-Portal.

**Access Key**<br>
Zugangsschlüssel zum Azure-Storage-Account.  


{: .box-tip }
**Tipp**: Kopieren Sie den Azure-Storage-Account-Namen und den Access Key (Zugangsschlüssel) aus dem [Azure-Portal](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?toc=/azure/storage/blobs/toc.json#view-access-keys-and-connection-string).

![xu-azure-blob-con-10](/img/content/xu-azure-blob-con-10.png){:class="img-responsive"}

**Connect**<br>
Schaltfläche zum Herstellen einer Verbindung zum Azure-Storage-Account.<br>
Wenn die Verbindung erfolgreich ist, poppt das Info-Fenster "Connection successful" auf.<br> 
Klicken Sie auf **[OK]** zum Bestätigen.

#### Container
Dieser Unterabschnitt wird aktiviert, nachdem eine Verbindung zu dem Azure-Storage-Account erfolgreich hergestellt wurde.<br>
**Storage account** <br>
Bei der Authentifizierung über Access Key (Zugangsschlüssel) ist dieses Feld für die Eingabe deaktiviert.

**Container**<br>
Bei der Authentifizierung  über Access Key (Zugangsschlüssel) kann ein Blob-Container aus dem Dropdown-Menü ausgewählt werden.

**Test connection to container** (Verbindung zum Container Testen)<br>
Schaltfläche zur Überprüfung, ob auf den Storage-Container zugegriffen werden kann. <br>
Bei einer erfolgreichen Verbindung wird das Info-Fenster "Connection to container <*Container-Name*> successful" geöffnet. <br>
Klicken Sie auf **[OK]** zum Bestätigen. <br>
Navigieren Sie zum Tab *CSV Settings* oder klicken Sie auf **[OK]**.<br>
Die Destination *Azure Storage (Blob / Data Lake)* kann nun verwendet werden.

![xu-azure-blob-con-02](/img/content/xu-azure-blob-con-02_.png){:class="img-responsive"}


### Authentifizierung über Azure Active Directory 
Die Authentifizierung über Azure Active Directory verwendet OAuth 2.0 und Azure AD zur Authentifizierung.
Im Vergleich zur *Authentication via Access Key* (Authentifizierung über Zugriffsschlüssel) stellt diese Option eine detailliertere Art der Zugriffsautorisierung dar. Dabei kann man auf den Azure-Storage-Account und auf einzelne Storage-Container zugreifen.
Allgemeine Informationen über diese Art der Authentifizierung finden Sie in der [Microsoft-Dokumentation](https://docs.microsoft.com/en-us/azure/storage/common/storage-auth-aad-app).

#### Voraussetzungen 

{: .box-note }
**Hinweis:** Die Authentifizierung über Azure Active Directory erfordert einen Azure AD-Mandanten. Die Einrichtung eines Azure AD-Mandanten ist in der [Microsoft-Dokumentation] (https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-create-new-tenant) beschrieben. 

Bevor Sie die Authentifizierung über Azure Active Directory verwenden, führen Sie die folgenden Schritte auf dem Azure-Portal durch:
1. Öffnen Sie auf dem Azure-Portal den Service *Azure Active Directory*.
2. Registrieren Sie eine Anwendung mit Ihrem Azure AD-Mandanten. Um dies zu tun, folgen Sie den Schritten beschrieben in der [Microsoft-Dokumentation](https://docs.microsoft.com/en-us/azure/storage/common/storage-auth-aad-app#register-your-application-with-an-azure-ad-tenant). Registrieren Sie die Anwendung als *Public client/native (mobile & desktop)*.
3. Fügen Sie der registrierten Anwendung *API permissions* (API-Berechtigungen) hinzu, um den Zugriff auf die Azure Storage-Web-API zu gewähren.<br> 
Die folgenden Berechtigungen sind erforderlich: *Azure Storage - Delegated permissions - user impersonation*, *Microsot Graph - User.Read*. Folgen Sie den Schritten beschrieben in der [Microsoft-Dokumentation](https://docs.microsoft.com/en-us/azure/storage/common/storage-auth-aad-app#grant-your-registered-app-permissions-to-azure-storage).
4. Öffnen Sie auf dem Azure-Portal Ihr Azure-Storage-Account.
5. Weisen Sie Zugriffsrechte dem Azure-Storage zu. Folgen Sie den Schritten beschrieben in der [Microsoft-Dokumentation](https://docs.microsoft.com/en-us/azure/storage/common/storage-auth-aad-rbac-portal#assign-rbac-roles-using-the-azure-portal). Die erforderliche RBAC-Rolle ist *Storage Blob Data Contributor*.
![xu-azure-blob-con-07](/img/content/xu-azure-blob-con-07.png){:class="img-responsive"}

{: .box-tip }
**Tipp:** Zugriffsrechte können auf Storage-Account- oder auf Container-Ebene gewährt werden. 

#### Connection (Verbindung)
**Tenant ID**<br>
ID des Azure AD-Mandanten

**Client ID**<br>
ID der registrierten Anwendung

{: .box-tip }
**Tipp:** Kopieren Sie die Mandanten-ID und Anwendungs-ID aus dem Azure-Portal.

![xu-azure-blob-con-08](/img/content/xu-azure-blob-con-08.png){:class="img-responsive"}


**Connect**<br>
Schaltfläche zum Verbinden mit dem Azure-Storage-Account.<br>
1. Klicken Sie auf **[Connect]**. Ein Browser-Fenster wird geöffnet.
2. Melden Sie sich mit Ihren Azure AD-Zugangsdaten an.
![xu-azure-blob-con-05](/img/content/xu-azure-blob-con-05.png){:class="img-responsive"}
3. Das Fenster "Permissions requested" (Angeforderte Berechtigungen) listet die angeforderten Berechtigungen auf (siehe oben). Klicken Sie auf **[Accept]**.
![xu-azure-blob-con-06](/img/content/xu-azure-blob-con-06.png){:class="img-responsive"}
4. Wenn die Verbindung erfolgreich ist, wird das Info-Fenster "Connection successful" geöffnet. Klicken Sie auf **[OK]** zum Bestätigen. <br>


#### Container
Dieser Unterabschnitt wird aktiviert, nachdem eine Verbindung zu dem Azure-Storage-Account erfolgreich hergestellt wurde.<br>
**Storage account** <br>
Bei der Authentifizierung über Azure Active Directory, muss der Storage-Account-Name hier eingegeben werden.

**Container**<br>
Bei der Authentifizierung über Azure Active Directory, muss der Blob-Container hier eingegeben werden.

{: .box-note }
**Hinweis:** Bei der Verwendung der Authentifizierung über Azure-Active-Directory, ist das Dropdown-Menü nicht verfügbar.
Geben Sie den Namen des Blob-Containers manuell ein.

**Test connection to container** (Verbindung zum Container Testen)<br>
Schaltfläche zur Überprüfung, ob auf den Storage-Container zugegriffen werden kann. <br>
Bei einer erfolgreichen Verbindung wird das Info-Fenster "Connection to container <*Container-Name*> successful" geöffnet. <br>
Klicken Sie auf **[OK]** zum Bestätigen. <br>
Navigieren Sie zum Tab *CSV Settings* oder klicken Sie auf **[OK]**.<br>
Die Destination *Azure Storage (Blob / Data Lake)* kann nun verwendet werden.

![xu-azure-blob-con-09](/img/content/xu-azure-blob-con-09.png){:class="img-responsive"}


### CSV Settings (CSV Einstellungen)

Die Einstellungsmöglichkeiten im Tab CSV Settings entsprechen denen der allgemeinen [http-csv Settings](../csv-via-http).

![azure_blob_destination_settings_csv_settings](/img/content/xu-azure-blob-con-04.png){:class="img-responsive"}

 
