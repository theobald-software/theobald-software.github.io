---
ref: xu-google-cloud-storage-02
layout: page
title: Verbindung
description: Verbindung
product: xtract-universal
parent: google-cloud-storage
permalink: /:collection/:path
weight: 2
lang: de_DE
progressstate: 5
---

### Google Cloud Storage Destination hinzufügen
1. Im Hauptfenster des Designers navigieren Sie zu **Server > Manage Destinations**. Das Fenster "Manage Destinations" wird geöffnet.
2. Klicken Sie auf **[Add]**, um eine neue Destination hinzuzufügen. Das Fenster "Destination Details" wird geöffnet.
![xu-google-cloud-req-01](/img/content/xu/googlecloudstorage/xu-google-cloud-con-01.png){:class="img-responsive"}
3. Wählen Sie die Destination *Google Cloud Storage*  aus der Drop-Down-Liste aus.

Das Fenster "Destination Details" besteht aus zwei Tabs:
- GCS Settings
- File Format

### GCS Settings
Der Tab *GCS Settings* besteht aus drei Unterabschnitten:
- Connection 
- Bucket
- Encryption

#### Connection
**Client ID**<br>
*Client ID* erstellt im OAuth 2.0-Setup (siehe [Voraussetzungen](./requirements)).

**Client Secret**<br>
*Client Secret* erstellt im OAuth 2.0-Setup.

**Connect**<br>
Verarbeitet den zuvor erstellten OAuth-Flow, um eine Verbindung mit dem Speicherkonto herzustellen.
Wählend Sie Ihr Google-Konto aus und gewähren Sie Xtract Universal Zugriff in allen erforderlichen Fenstern. <br>

{: .box-note }
Hinweis: Wenn Sie die Anwendung nicht verifiziert haben, erscheint ein Fenster mit der Meldung: "This App isn't verified" (Diese App ist nicht verifizert). Klicken Sie auf **[Advanced]** und **[Go to Xtract Universal (unsafe)]**. <br>  

Nach einer erfolgreichen Verbindung erscheint die Meldung: "Authentication succeeded" (Authentifizierung erfolgreich)  im Browser. In Xtract Universal wird die Meldung "Connection established" (Verbindung hergestellt" in einem separaten Dialog angezeigt. <br>  

![xu-google-cloud-con-01](/img/content/xu/googlecloudstorage/xu-google-cloud-con-03.png){:class="img-responsive"}

#### Bucket
Der Unterabschnitt "Bucket" kann nach einer erfolgreichen Verbindung zum Google-Cloud-Storage-Konto ausgefüllt werden..<br>
**Project ID** <br>
Die Projekt-ID kann im GCP-Dashboard unter *Project info* nachgeschlagen werden.

![xu-google-cloud-con-04](/img/content/xu/googlecloudstorage/xu-google-cloud-con-04.png){:class="img-responsive"}

**Bucket name**<br>
Klicken Sie auf **[Get buckets]**, um verfügbare Buckets anzeigen zu lassen.

Ein Bucket kann im Navigationsmenü unter **Storage > Browser** erstellt werden.

![xu-google-cloud-con-05](/img/content/xu/googlecloudstorage/xu-google-cloud-con-05.png){:class="img-responsive"}

Sie können den Bucket-Namen (bucket name), den Standorttyp (location type) und die Storage-Klasse (storage class) oder die Zugriffskontrolle (access control) frei wählen.

Unter **Advanced Settings (optional)** können Sie die gewünschte Verschlüsselungsmethode auswählen, die auf den Bucket angewendet wird. Weitere Informationen zur Verschlüsselung finden Sie auf der offiziellen [Google-Hilfeseite](https://cloud.google.com/storage/docs/encryption).      
![xu-google-cloud-con-06](/img/content/xu/googlecloudstorage/xu-google-cloud-con-06.png){:class="img-responsive"}


#### Encryption (Verschlüsselung)
**Default** <br>
Wendet die in Ihrem GCS-Bucket angegebene Verschlüsselungsmethode an. <br>
Google verschlüsselt standardmäßig alle Daten, die auf den Google-Servern gespeichert sind. Darüber hinaus können Sie den Google Cloud Key Management Service (KMS) nutzen, um Schlüssel zu erstellen und auf Ihre Buckets anzuwenden. <br>
Der KMS kann im Navigationsmenü der GCP-Konsole aktiviert werden unter **Security > Cryptographic Keys**.

**Customer-supplied** <br>
Wenn Sie die Option *Customer-supplied* ankreuzen, müssen Sie einen gültigen AES256-Kryptoschlüssel (256 Bit lang) angeben.<br>
Der Kryptoschlüssel wird nicht innerhalb der GCP gespeichert und es erfordert daher zusätzlichen Aufbewahrungsaufwand, um Ihre Daten später entschlüsseln zu können.<br>

**Crypto field** <br>
Tragen Sie im Feld *Crypto field* den kryptografischen Schlüssel ein, wenn Sie "*Customer Supplied"* als Verschlüsselungsmethode gewählt haben.

### File Format 
Wählen Sie das gewünschte Dateiformat zwischen "CSV" ,"JSON" und "Parquet".

Die "CSV" Einstellungen entsprechen denen der allgemeinen [Flat File CSV Einstellungen](../csv-flat-file).

![xu-google-cloud-con-02](/img/content/xu/googlecloudstorage/xu-google-cloud-con-02.png){:class="img-responsive"}

### Retry-Funktion

Die Retry-Funktion ist eine eingebaute Funktion von der Google Cloud Storage Destination. Die Retry-Funktion ist automatisch aktiviert.
Die Retry-Funktion verhindert, dass Extraktionen fehlschlagen, wenn es kurzzeitige Verbindungsunterbrechungen zu Google Cloud auftreten.
Weitere allgemeine Informationen über Wiederholungsstrategien in einer Google Cloud Storage-Umgebung finden Sie in der offiziellen [Google Cloud-Hilfe](https://cloud.google.com/storage/docs/gsutil/addlhelp/RetryHandlingStrategy).
Xtract Universal verfolgt eine exponentielle Retry-Strategie. Dies bedeutet, dass 8 Verbindungsversuche gestartet werden in einem Zeitraum von 140 Sekunden. Sollte in dem Zeitraum von 140 Sekunden keine Verbindung zu Stande kommen, wird die Extraktion abgebrochen. 



