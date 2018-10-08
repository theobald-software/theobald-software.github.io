---
layout: page
title: Verbindung
description: Verbindung
product: xtract-universal
parent: azure_blob_storage
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=blob-verbindung
---

Die folgenden Einstellugne werden für die Verbindung benötigt.  

**Account Name and Key**

Hierüber authentifizieren Sie sich beim Azure BLOB Storage. Über das Azure Portal können Sie diese Werte ermitteln.
- Account Name: ist der Storage-Kontoname.
- Key: ist der Schlüssel und kann in Ihrem Azure BLOB Konto unter Settings -> Access keys -> key1 gefunden werden. 

![azure-blob-access-keys](/img/content/azure-blob-access-keys.png){:class="img-responsive"}

![xu-azure-blob-con-01](/img/content/xu-azure-blob-con-01.png){:class="img-responsive"}

Nähere Informationen finden Sie in der Azure Dokumentation.

**Connect**

Klicken Sie auf die Connect-Schaltfläche, nachdem Sie Account Name und Key eingegeben haben. <br>
Wenn die Verbindung erfolgreich war, poppt ein Infofenster hoch, und Sie können anschließend einen Container auswählen.

![xu-azure-blob-con-02](/img/content/xu-azure-blob-con-02.png){:class="img-responsive"}

**Container**

Wählen Sie einen Container. In diesen Container werden die extrahierten Daten geschrieben. 