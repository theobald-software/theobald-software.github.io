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

### Blob Storage Einstellungen

Folgende Einstellungen werden für die Verbindung zum Azure-Storage-Account benötigt.  
Die notwendigen Eingabewerte können Sie dem Azure-Portal entnehmen.

![azure-blob-access-keys](/img/content/azure-blob-access-keys.png){:class="img-responsive"}

### Azure Storage Destination hinzufügen
1. Navigieren Sie im Hauptfenster des Designers zu **[Server] > [Manage Destinations]**. Das Fenster "Manage Destinations" wird geöffnet.
2. Klicken Sie auf **[Add]**, um eine neue Destination hinzuzufügen. Das Fenster "Destination Details" wird geöffnet.
![XU_azure_Destination](/img/content/xu/azure_destination-det.png){:class="img-responsive"}
3. Wähen Sie die Destination *Azure Storage* aus der Drop-Down-Liste aus.

Das Fenster "Destination Details" besteht aus zwei Tabs:
- Blob Storage Settings
- CSV Settings

### Blob Storage Settings -  Blob Storage Einstellungen
Der Tab *Blob Storage Settings* besteht aus zwei Unterabschnitten:
- Connection 
- Container
![xu-azure-blob-con-01](/img/content/xu-azure-blob-con-01_.png){:class="img-responsive"}

#### Connection
**Account Name**<br>
Storage-Account-Name im Azure-Portal.

**Key**<br>
Zugangsschlüssel zum Azure-Storage-Account.  

**Connect**<br>
Schaltfläche zum Herstellen einer Verbindung.<br>
Wenn die Verbindung erfolgreich ist, poppt das Infofenster "Connection successful" auf. Klicken Sie auf **[OK]** zum Bestätigen.

#### Container
**Container**<br>
Ermöglicht die Auswahl des Blob Containers, in den die extrahierten Daten geschrieben werden.



### CSV Settings

Die Einstellungsmöglichkeiten im Tab CSV Settings entsprechen denen der allgemeinen [http-csv Settings](../csv-via-http).

![azure_blob_destination_settings_csv_settings](/img/content/xu-azure-blob-con-04.png){:class="img-responsive"}

 
