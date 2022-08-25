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


## Voraussetzungen

- Google account
- Google Cloud Platform (GCP) Abonnement (Demoversion wird angeboten)
- Projekt ("My First Project" ist  vordefiniert)
- Google Cloud Storage (GCS) Bucket für Datenextraktionen.

### GCP-Konsole
Die GCP-Konsole ermöglicht die Konfiguration aller Ressourcen und Dienste. 
Um zur Dashboard-Übersicht zu gelangen, navigieren Sie zur [Google Cloud Storage](https://cloud.google.com/storage) Seite und klicken Sie auf **[Console]** oder **[Go to console]**. 

Um auf alle Einstellungen und Dienste zuzugreifen, verwenden Sie das Navigationsmenü auf der linken oberen Seite.

![xu-google-cloud-req-01](/img/content/xu/googlecloudstorage/xu-google-cloud-req-01.png){:class="img-responsive"}
 
### OAuth 2.0 Setup
Xtract Universal verwendet OAuth 2.0 zur Authentifizierung gegenüber den Google-Servern.
Um das OAuth 2.0-Protokoll zu aktivieren, konfigurieren Sie einen OAuth-Flow mit den erforderlichen Zugriffsberechtigungen auf Xtract Universal.

{: .box-note }
Hinweis: Google stuft Anwendungen von Drittanbietern zunächst allgemein als unsicher ein und gibt eine Warnung aus. 
Eine offizielle App-Verifizierung ist mit laufenden Kosten verbunden. 

1. Wählen Sie **APIs & Services > Credentials** im Navigationsmenü aus.
![xu-google-cloud-req-02](/img/content/xu/googlecloudstorage/xu-google-cloud-req-02.png){:class="img-responsive"}
2. Im Abschnitt "Credentials" wählen Sie **Create Credentials > OAuth client ID** aus.
![xu-google-cloud-req-03](/img/content/xu/googlecloudstorage/xu-google-cloud-req-03.png){:class="img-responsive"}
3. Klicken Sie auf **[Configure consent screen]**. Der "Configure consent screen" wird mit dem OAuth-Flow verarbeitet, der beim Verbindungsaufbau im Designer gestartet wird (siehe [Verbindung](#verbindung)).
![xu-google-cloud-req-04](/img/content/xu/googlecloudstorage/xu-google-cloud-req-04.png){:class="img-responsive"}
4. Wenn Ihr Konto zu einer Organisation gehört, können Sie die Nutzung von Xtract Universal in Kombination mit GCS auf Ihre Organisation beschränken. Wählen Sie dazu "intern" in der Option " User Type".  Diese Option ist nur verfügbar, wenn Sie ein [GSuite-Benutzer](https://gsuite.google.com/) sind. <br>
Alternativ können Sie jedem Benutzer mit Zugriff auf die OAuth-Anmeldeinformationen erlauben, Xtract Universal die Erlaubnis zu erteilen, Daten in Ihre GCS-Buckets zu schreiben. Wählen Sie dazu "extern" in der Option " User Type". <br> 
Klicken Sie auf **[Create]**, zum Fortfahren.
![xu-google-cloud-req-05](/img/content/xu/googlecloudstorage/xu-google-cloud-req-05.png){:class="img-responsive"}
5. Geben Sie im Abschnitt "App information" einen App-Namen Ihrer Wahl an. <br>
"Support email" und "Developer contact information" sind auch Pflichtfelder. Klicken Sie auf **[Save and continue]**, um zur nächsten Sektion weiterzugehen. <br>
![xu-google-cloud-req-06](/img/content/xu/googlecloudstorage/xu-google-cloud-req-06.png){:class="img-responsive"}
![xu-google-cloud-req-07](/img/content/xu/googlecloudstorage/xu-google-cloud-req-07.png){:class="img-responsive"}
6. Klicken Sie im folgenden Abschnitt auf **[Add or remove scopes]**.
Xtract Universal benötigt Lese- und Schreibrechte für seine Operationen, die im Abschnitt "Scopes" konfiguriert werden.
![xu-google-cloud-req-08](/img/content/xu/googlecloudstorage/xu-google-cloud-req-08.png){:class="img-responsive"}
7. Geben Sie `https://www.googleapis.com/auth/devstorage.read_write` unter **Manually add scopes** ein und klicken Sie auf **[Add to table]**.
![xu-google-cloud-req-09](/img/content/xu/googlecloudstorage/xu-google-cloud-req-09.png){:class="img-responsive"}
Der neu hinzugefügte Bereich (Scope) ist der erste Eintrag in der Tabelle. Klicken Sie auf **[Update]**, um den Eintrag zu erstellen. 
![xu-google-cloud-req-10](/img/content/xu/googlecloudstorage/xu-google-cloud-req-10.png){:class="img-responsive"}
8. Klicken Sie auf **[Continue]**, wenn das Fenster mit der Meldung "Verfification required" erscheint. <br>
![xu-google-cloud-req-11](/img/content/xu/googlecloudstorage/xu-google-cloud-req-11.png){:class="img-responsive"}
9. Bestätigen Sie zweimal mit **[Save and continue]**. Klicken Sie auf **[Back to dashboard]**, um zu Dashboard zurückzukehren.      
![xu-google-cloud-req-12](/img/content/xu/googlecloudstorage/xu-google-cloud-req-12.png){:class="img-responsive"}
![xu-google-cloud-req-13](/img/content/xu/googlecloudstorage/xu-google-cloud-req-13.png){:class="img-responsive"}
![xu-google-cloud-req-14](/img/content/xu/googlecloudstorage/xu-google-cloud-req-14.png){:class="img-responsive"}
10. Kehren Sie zum Menü "Credentials" zurück, klicken Sie auf **[Create credentials]** und wählen Sie eine "OAuth client ID". <br>
Wählen Sie "Desktop app" als Applikationstyp aus, vergeben Sie einen beliebigen Namen und klicken Sie auf **[Create]**.
![xu-google-cloud-req-15](/img/content/xu/googlecloudstorage/xu-google-cloud-req-15.png){:class="img-responsive"}
11. Ihr OAuth-Client ist erstellt. <br>
Die "Client ID" und der "Client secret" sind für die Konfiguration der Destination in Xtract Universal notwendig (siehe [Verbindung](#verbindung)).
![xu-google-cloud-req-16](/img/content/xu/googlecloudstorage/xu-google-cloud-req-16.png){:class="img-responsive"}


{: .box-note }
Hinweis: Ab Version 5.11.16 unterstützt Xtract Universal auch die Authentifizierung über ein Dienstkonto. Voraussetzung ist, dass der Designer und der XU Server auf derselben Maschine laufen.

## Verbindung

{% include _content/de/xu-specific/destinationen/general/connection.md %}	 

### Destination Details
![xu-google-cloud-req-01](/img/content/xu/googlecloudstorage/xu-google-cloud-con-01.png){:class="img-responsive"}

### GCS Settings


#### Connection Type

- Wählen Sie **User Login**, um sich mit Ihrer OAuth Client ID einzuloggen, siehe [Connection Parameters](#connection-parameters).<br>
- Wählen Sie **Service Account** um sich mit einem Dienstkonto einzuloggen, siehe [Service Acccount File Location](#service-acccount-file-location).

{: .box-note }
**Hinweis**: Um ein Dienstkonto für die Authentifizierung zu verwenden, müssen der Xtract Universal Designer und der XU Server auf derselben Maschine laufen.

#### Connection Parameters

Die folgenden Optionen sind nur verfügbar, wenn **User Login** als Authentifizierungsmethode ausgewählt ist.

**Client ID**<br>
*Client ID* erstellt im OAuth 2.0-Setup (siehe [Voraussetzungen](#requirements)).

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

**Key File**<br>
Das Dienstkonto wird über ein RSA Schlüsselpaar identifiziert.
Wenn Sie die Schlüssel erstellen, erhalten Sie eine Dienstkontodatei von Google, die Informationen über das Konto enthält.
Geben Sie das Verzeichnis an, in dem die Dienstkontodatei abgelegt ist. 
Der Xtract Universal Designer und der XU Server müssen auf derselben Maschine laufen.

**Connect**<br>
Klicken Sie auf **[Connect]**, um eine Verbindung mit dem Speicherkonto herzustellen.
Wählen Sie Ihr Google-Konto aus und gewähren Sie Xtract Universal Zugriff in allen erforderlichen Fenstern.


#### Bucket
Der Unterabschnitt "Bucket" kann nach einer erfolgreichen Verbindung zum Google-Cloud-Storage-Konto ausgefüllt werden.<br>

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

#### CVS Settings
Die Einstellungen für den Dateityp *CSV* entsprechen den allgemeinen [Flat File CSV Einstellungen](./csv-flat-file).

#### Parquet Settings
**Compatibility mode**<br>
Sie können zwischen *Pure* und *Spark* für den Kompatibilitätsmodus wählen.
Spark unterstützt nicht die im Pure-Mode verwendeten Datentypen, daher müssen andere Datentypen verwendet werden. Sonderzeichen und Leerzeichen werden im Spark-Modus durch einen Unterstrich `_` ersetzt. 

| SAP | Pure | Spark |
|------|-------------|-------|
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
1. Eine bestehende Extraktion anlegen oder auswählen (siehe auch [Erste Schritte mit Xtract Universal](../erste-schritte/eine-neue-extraktion-anlegen)).
2. Klicken Sie auf **[Destinations]**. Das Fenster "Destination Settings" wird geöffnet.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

Die folgenden Einstellungen können für die Destination definiert werden. 

### Destination Settings - Destinationseinstellungen

![xu-google-cloud-dest-01](/img/content/xu/googlecloudstorage/xu-google-cloud-dest-01.png){:class="img-responsive"}

{% include _content/de/xu-specific/destinationen/general/file-name.md %}

{: .box-note }
**Hinweis:** Wenn der Name eines Objekts nicht mit einem Buchstaben beginnt, wird 'x' als Präfix ergänzt, z.B. wird das Objekt `_namespace_tabname.csv` zu `x_namespace_tabname.csv`, wenn es auf die Destination hochgeladen wird.
Damit wird die Kompatibilität zu Azure Data Factory, Hadoop und Spark sichergestellt, die mit Buchstaben beginnende Objektnamen voraussetzen oder die nicht alphabetischen Zeichen besondere Bedeutungen zuweisen.


{% include _content/de/xu-specific/destinationen/general/column-name-style.md %}

{% include _content/de/xu-specific/destinationen/general/date-conversion.md %}

### Folder name - Verzeichnisname

Um Extraktionsdaten an einen Speicherort innerhalb eines bestimmten Ordners in einem Google Cloud Storage-Bucket zu schreiben, geben Sie einen Ordnernamen ohne Slashes ein.
Unterordner werden unterstützt und können mit der folgenden Syntax definiert werden: 
`[Verzeichnis]/[Unterverzeichnis_1]/[Unterverzeichnis_2]/…`

{% include _content/de/xu-specific/destinationen/general/compression.md %}

{% include _content/de/xu-specific/destinationen/general/file-splitting.md %}
