---
ref: destinations-31
layout: page
title: Google Cloud Storage
description: Google Cloud Storage
product: xtract-universal
parent: destinationen
childidentifier: google-cloud-storage
permalink: /:collection/:path
weight: 31
lang: de_DE
progressstate: 5
---

Der folgende Abschnitt beschreibt die Extraktion von Daten nach Google Cloud Storage.

Google Cloud Platform (GCP) ist eine Sammlung von Cloud-Diensten  bereitgestellt von Google.
Google Cloud Platform ist verfügbar unter [cloud.google.com](https://cloud.google.com).
Google Cloud Storage ist einer der Google-Dienste zur Speicherung von Daten in der Google-Infrastruktur.
Für mehr Informationen siehe [Google Cloud Storage Dokumentation](https://cloud.google.com/storage/docs?hl=de#docs).

## Voraussetzungen

- Google account
- Google Cloud Platform (GCP) Abonnement (Demoversion wird angeboten)
- Projekt ("My First Project" ist vordefiniert)
- Google Cloud Storage (GCS) Bucket für Datenextraktionen

## GCP-Konsole
Die GCP-Konsole ermöglicht die Konfiguration aller Ressourcen und Dienste. 
Um zur Dashboard-Übersicht zu gelangen, navigieren Sie zur [Google Cloud Storage](https://cloud.google.com/storage) Seite und klicken Sie auf **[Console]** oder **[Go to console]**. 

Um auf alle Einstellungen und Dienste zuzugreifen, verwenden Sie das Navigationsmenü auf der linken oberen Seite.

![xu-google-cloud-req-01](/img/content/xu/googlecloudstorage/xu-google-cloud-req-01.png){:class="img-responsive"}
 
## Verbindung

{% include _content/de/xu-specific/destinationen/general/connection.md %}	 

### Destination Details
![xu-google-cloud-req-01](/img/content/xu/googlecloudstorage/xu-google-cloud-con-01.png){:class="img-responsive"}

### GCS Settings

#### Connection Type

Es werden zwei Authentisierungsverfahren unterstützt:
- Wählen Sie **User Login**, um sich mit Ihrer OAuth Client ID einzuloggen, siehe [Connection Parameters](#connection-parameters).<br>
- Wählen Sie **Service Account** um sich mit einem Dienstkonto einzuloggen, siehe [Service Acccount File Location](#service-acccount-file-location).

#### Connection Parameters

Die folgenden Optionen sind nur verfügbar, wenn **User Login** als Authentifizierungsmethode ausgewählt ist.<br>
Um das OAuth 2.0-Protokoll zur Authentifizierung zu aktivieren, konfigurieren Sie einen OAuth-Flow mit den erforderlichen Zugriffsberechtigungen auf Xtract Universal.
Für mehr Informationen siehe [Knowledge Base Artikel: Setting Up OAuth 2.0 for the Google Cloud Storage Destination](https://kb.theobald-software.com/xtract-universal/google-cloud-storage-oauth).

**Client ID**<br>
*Client ID* erstellt im OAuth 2.0-Setup.

**Client Secret**<br>
*Client Secret* erstellt im OAuth 2.0-Setup.

**Connect**<br>
Verarbeitet den zuvor erstellten OAuth-Flow, um eine Verbindung mit dem Speicherkonto herzustellen.
Wählen Sie Ihr Google-Konto aus und gewähren Sie Xtract Universal Zugriff in allen erforderlichen Fenstern. <br>

{: .box-note }
**Hinweis**: Wenn Sie die Anwendung nicht verifiziert haben, erscheint ein Fenster mit der Meldung: "This App isn't verified" (Diese App ist nicht verifizert). Klicken Sie auf **[Advanced]** und **[Go to Xtract Universal (unsafe)]**. <br>  

Nach einer erfolgreichen Verbindung erscheint die Meldung: "Authentication succeeded" (Authentifizierung erfolgreich)  im Browser. In Xtract Universal wird die Meldung "Connection established" (Verbindung hergestellt" in einem separaten Fenster angezeigt. <br>  

#### Service Account File Location

Die folgenden Optionen sind nur verfügbar, wenn **Service Account** als Authentifizierungsmethode ausgewählt ist.

![xu-google-cloud-req](/img/content/xu/googlecloudstorage/xu-google-cloud-con.png){:class="img-responsive"}

**Key File**<br>
Das Dienstkonto wird über ein RSA Schlüsselpaar identifiziert.
Wenn Sie die Schlüssel erstellen, erhalten Sie eine Dienstkontodatei von Google, die Informationen über das Konto enthält.
Geben Sie das Verzeichnis an, in dem die Dienstkontodatei abgelegt ist.
Stellen Sie sicher, dass der Xtract Universal Service Zugriff auf die Datei hat.

#### Bucket
Wenn Sie die OAuth 2.0 Authentifizierung verwenden, kann der Unterabschnitt "Bucket" erst nach einer erfolgreichen Verbindung zum Google-Cloud-Storage-Konto ausgefüllt werden.<br>

**Project ID** <br>
Die Projekt-ID kann im GCP-Dashboard unter *Project info* nachgeschlagen werden.

![xu-google-cloud-con-04](/img/content/xu/googlecloudstorage/xu-google-cloud-con-04.png){:class="img-responsive"}

**Bucket name**<br>
Wenn Sie die OAuth 2.0 Authentifizierung verwenden, klicken Sie auf **[Get buckets]**, um verfügbare Buckets anzeigen zu lassen.

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

#### CVS Settings
Die Einstellungen für den Dateityp *CSV* entsprechen den allgemeinen [Flat File CSV Einstellungen](./csv-flat-file).

#### Parquet Settings
Die folgenden Kompatibilitätsmodi sind verfügbar:
- *Pure* 
- *Spark* 
- *BigQuery*

Spark unterstützt nicht die im Pure-Mode verwendeten Datentypen, daher müssen andere Datentypen verwendet werden. <br>
Sonderzeichen und Leerzeichen werden im Spark-Modus durch einen Unterstrich `_` ersetzt. 

| SAP | Pure / BigQuery | Spark |
|------|-------------|-------|-------|
| INT1 | UINT_8 | INT16 |
| TIMS | TIME_MILLIS | UTF8 |

![xu-google-cloud-con-02](/img/content/xu/googlecloudstorage/xu-google-cloud-con-02.png){:class="img-responsive"}

### Retry-Funktion

Die Retry-Funktion ist eine eingebaute Funktion von der Google Cloud Storage Destination. Die Retry-Funktion ist automatisch aktiviert.

Die Retry-Funktion verhindert, dass Extraktionen fehlschlagen, wenn kurzzeitige Verbindungsunterbrechungen zu Google Cloud auftreten.
Weitere allgemeine Informationen über Strategie der Wiederholversuche in einer Google Cloud Storage-Umgebung finden Sie in der offiziellen [Google Cloud-Hilfe](https://cloud.google.com/storage/docs/gsutil/addlhelp/RetryHandlingStrategy).
Xtract Universal verfolgt eine exponentielle Strategie der Wiederholversuche. Dies bedeutet, dass 8 Verbindungsversuche gestartet werden in einem Zeitraum von 140 Sekunden. Sollte in dem Zeitraum von 140 Sekunden keine Verbindung zustande kommen, wird die Extraktion abgebrochen. 

## Einstellungen

### Destination Settings öffnen
1. Eine bestehende Extraktion anlegen oder auswählen, siehe [Erste Schritte mit Xtract Universal](../erste-schritte/eine-neue-extraktion-anlegen).
2. Klicken Sie auf **[Destination]**. Das Fenster "Destination Settings" wird geöffnet.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

Die folgenden Einstellungen können für die Destination definiert werden. 

### Destination Settings - Destinationseinstellungen

![xu-google-cloud-dest-01](/img/content/xu/googlecloudstorage/xu-google-cloud-dest-01.png){:class="img-responsive"}

{% include _content/de/xu-specific/destinationen/general/file-name.md %}

{: .box-note }
**Hinweis:** Wenn der Name eines Objekts nicht mit einem Buchstaben beginnt, wird 'x' als Präfix ergänzt, z.B. wird das Objekt `_namespace_tabname.csv` zu `x_namespace_tabname.csv`, wenn es auf die Destination hochgeladen wird.
Damit wird die Kompatibilität zu Azure Data Factory, Hadoop und Spark sichergestellt, die mit Buchstaben beginnende Objektnamen voraussetzen oder die nicht alphabetischen Zeichen besondere Bedeutungen zuweisen.

{% include _content/de/xu-specific/destinationen/general/file-name-script-expressions.md %}

{% include _content/de/xu-specific/destinationen/general/column-name-style.md %}

{% include _content/de/xu-specific/destinationen/general/date-conversion.md %}

### Folder name - Verzeichnisname

Um Extraktionsdaten an einen Speicherort innerhalb eines bestimmten Ordners in einem Google Cloud Storage-Bucket zu schreiben, geben Sie einen Ordnernamen ohne Slashes ein.
Unterordner werden unterstützt und können mit der folgenden Syntax definiert werden: 
`[Verzeichnis]/[Unterverzeichnis_1]/[Unterverzeichnis_2]/…`

{% include _content/de/xu-specific/destinationen/general/compression.md %}

{% include _content/de/xu-specific/destinationen/general/file-splitting.md %}
