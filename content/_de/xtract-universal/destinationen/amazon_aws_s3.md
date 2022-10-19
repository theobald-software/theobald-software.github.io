---
ref: destinations-22
layout: page
title: Amazon AWS S3
description: Amazon AWS S3
product: xtract-universal
parent: destinationen
childidentifier: amazon_aws_s3
permalink: /:collection/:path
weight: 22
lang: de_DE
progressstate: 5
---

Der folgende Abschnitt behandelt das Laden der SAP-Extraktionsdaten in den Cloud-Speicher [Amazon S3](https://aws.amazon.com/de/s3/).

## Voraussetzungen

- ein Amazon Web Services ([AWS](https://aws.amazon.com/de/)) Account.
- *entweder* die "[Access Keys](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html)" Ihres AWS Benutzers, bestehend aus "access key ID" und "secret access key". *Oder* eine IAM-Rolle, die an die [EC2-Instanz](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html), auf der Xtract Universal läuft, angebunden wurde.
- einen AWS S3 Bucket, in den Sie Dateien hochladen können.
- ausreichende Berechtigungen für das Auflisten/Lesen von und Schreiben nach S3 Buckets. Die Berechtigungen im nachfolgenden Screenshot funktionierten in unserer Testumgebung.

### Berechtigungen
![IAM_permissions_for_S3_destination](/img/content/xu/S3_desination_IAM_permissions.png){:class="img-responsive"}


{: .box-note }
**Hinweis:** Xtract Universal verwendet für den Upload nach S3 einen sog. [Multipart Upload](https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html). Das heißt, die extrahierten Daten werden Stück für Stück als sogenannte Parts nach S3 geschickt und dort zwischengepuffert. Im Falle einer erfolgreichen Extraktion werden die einzelnen Parts dann zu einer Datei zusammengefügt. Diese Datei ist auf S3 erst dann sichtbar, wenn die Extraktion in XU erfolgreich abgeschlossen ist.

### Fehlgeschlagene Extraktion
Im Falle eines Extraktionsabbruchs aufgrund von Exceptions in XU o.Ä., veranlasst XU das Löschen der einzelnen Parts auf S3-Seite. Im Falle von "unkontrollierten" Extraktionsabbrüchen, z.B. aufgrund von Netzwerkproblemen, kann XU ein Löschen der Multiparts nicht veranlassen.

Aus diesem Grund ist es empfehlenswert, auf S3-Seite ein automatisches Löschen von Parts, z.B. nach einem Tag, vorzunehmen. Die Einstellung findet man, indem man in S3 auf den Bucket klickt und auf den Management Tab wechselt. Dort klickt man unter "Lifecycle" auf "Add lifecycle rule" und fügt eine entsprechende Regel hinzu.

![S3_Multipart_Rule](/img/content/S3_Multipart_Rule.png){:class="img-responsive"}


## Verbindung

{% include _content/de/xu-specific/destinationen/general/connection.md %}	 

### Destination Details

![XU_S3_DestinationDetails](/img/content/XU_S3_DestinationDetails.png){:class="img-responsive"}

### S3 Einstellungen

#### Connection - Verbindung

**Inherit Credentials from IAM role** <br>
Die Anmeldeinformationen und Berechtigungen der IAM Rolle, die der [EC2-Instanz](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html), auf der Xtract Universal läuft, zugewiesen wurde, werden für die Authentisierung verwendet.

**Access key ID und Secret key**<br>
Option zur Authentifizierung gegenüber Amazon AWS. Über das Identity and Access Management ([IAM](https://console.aws.amazon.com/iam/home#/home)) können Sie die notwendige Werte ermitteln.<br>
Nähere Informationen finden Sie in der [AWS Dokumentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html).

**Connect**<br>
Klicken Sie auf **[Connect]**, nachdem Sie Access key ID und Secret key eingegeben haben. Wenn die Verbindung erfolgreich hergestellt ist, können Sie Bucket Name und Region auswählen.

#### Bucket

**Bucket Name und Region**<br>
Wählen Sie einen Bucket und die diesem Bucket zugehörige Region aus. In diesen Bucket werden die extrahierten Daten geschrieben.<br>

{: .box-note }
**Hinweis:** In den Drop-Down Menüs werden **alle** Buckets und Regionen angezeigt. Achten Sie auf die richtige Kombination aus Bucket und Region. Prüfen Sie über die Schaltfläche **[Test Connection]**, dass der Bucket erreichbar ist.

**Test Connection**<br>
Prüft, ob die Kombination aus Bucket und Region korrekt ist und ob der Bucket von Xtract Universal aus mit den eingegebenen Access Keys beschreibbar ist.

#### Server-side encryption

Wählen Sie, wie die Daten nach dem Hochladen in S3 verschlüsselt werden sollen.<br>

**Server-side encryption**<br>
Verschlüsselt die Datei [serverseitig](https://docs.aws.amazon.com/AmazonS3/latest/dev/serv-side-encryption.html), nachdem diese nach S3 hochgeladen wurden.<br>

{: .box-note }
**Hinweis:** Die Einstellungen unter "Server-side encryption" beziehen sich nicht auf die Transportverschlüsselung zwischen Xtract Universal und S3. Transportverschlüsselung zwischen Xtract Universal und S3 ist standardmäßig aktiviert. 

- **None**
   Keine [serverseitig](https://docs.aws.amazon.com/AmazonS3/latest/dev/serv-side-encryption.html) Verschlüsselung der Daten.

- **SSE-S3**
   Verschlüsselung über den für den AWS-Account AWS-seitig automatisch vorhandenen Schlüssel ([S3 Managed Encryption Keys](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingServerSideEncryption.html)).

- **SSE-KMS und Key ID**
   Verschlüsselung über einen AWS-seitig benutzerdefinierten Schlüssel ([AWS Key Management Services](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingKMSEncryption.html)). Der Schlüssel kann auf der [AWS-Webseite](httpshttps://console.aws.amazon.com/iam/home#/encryptionKeys/) angelegt werden.

#### Misc

Alle Einstellungen in *Misc* sind optional.

**Folder Path**<br>
Geben Sie den Pfad ein, in dem Dateien hochgeladen werden.

**File Owner**<br>
Wenn man als AWS User eines Accounts A in den Bucket eines Accounts B hochladen möchte, kann man die Option "Bucket Owner" auswählen.
Ohne Owner können hochgeladene Dateien nicht ohne Weiteres geöffnet werden.

### File Format

**File type**<br>
Wählen Sie das gewünschte Dateiformat zwischen *Parquet* und *CSV*.
![azure_blob_destination_settings_csv_settings](/img/content/xu/XU_S3_DestinationDetails2.png){:class="img-responsive"}

#### CVS Settings - Einstellungen
Die *CSV* Einstellungen entsprechen denen der allgemeinen [Flat File CSV Einstellungen](./csv-flat-file).

#### Parquet Settings - Einstellungen

Die folgenden Kompatibilitätsmodi sind verfügbar:
- *Pure* 
- *Spark* 
- *BigQuery*

Spark unterstützt nicht die im Pure-Mode verwendeten Datentypen, daher müssen andere Datentypen verwendet werden. <br>
Sonderzeichen und Leerzeichen werden im Spark-Modus durch einen Unterstrich `_` ersetzt. 

| SAP | Pure | Spark |
|------|-------------|-------|
| INT1 | UINT_8 | INT16 |
| TIMS | TIME_MILLIS | UTF8 |

![AWS S3 compability](/img/content/xu/xu_S3_dest_comp_mode.png){:class="img-responsive"}

### Column encryption - Verschlüsselung
{% include _content/de/xu-specific/destinationen/general/column-encryption.md %}

### Connection Retry -Verbindungswiederholung

Die Retry-Funktion ist eine eingebaute Funktion der AWS S3 Destination. Die Retry-Funktion ist automatisch aktiviert.
Die Retry-Funktion verhindert, dass Extraktionen fehlschlagen, wenn kurzzeitige Verbindungsunterbrechungen zu AWS S3 auftreten.

Weitere allgemeine Informationen über Strategie der Wiederholversuche in einer AWS-S3-Umgebung finden Sie in der offiziellen [AWS Hilfe](https://docs.aws.amazon.com/general/latest/gr/api-retries.html).
Xtract Universal verfolgt eine exponentielle Strategie der Wiederholversuche. Dies bedeutet, dass 8 Verbindungsversuche gestartet werden in einem Zeitraum von 140 Sekunden.
Sollte in dem Zeitraum von 140 Sekunden keine Verbindung zustande kommen, wird die Extraktion abgebrochen. 


## Einstellungen
### Destination Settings öffnen

1. Eine bestehende Extraktion anlegen oder auswählen (siehe auch [Erste Schritte mit Xtract Universal](../erste-schritte/eine-neue-extraktion-anlegen)).
2. Klicken Sie auf **[Destination]**. Das Fenster "Destination Settings" wird geöffnet.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

Die folgenden Einstellungen können für die Destination definiert werden. 
  
### Destination Settings - Destinationseinstellungen

![XU_S3_DestinationEinstellungen](/img/content/XU_S3_DestinationEinstellungen.png){:class="img-responsive"}

{% include _content/de/xu-specific/destinationen/general/file-name.md %}

{: .box-note }
**Hinweis:** Wenn der Name eines Objekts nicht mit einem Buchstaben beginnt, wird 'x' als Präfix ergänzt, z.B. wird das Objekt `_namespace_tabname.csv` zu `x_namespace_tabname.csv`, wenn es auf die Destination hochgeladen wird.
Damit wird die Kompatibilität zu Azure Data Factory, Hadoop und Spark sichergestellt, die mit Buchstaben beginnende Objektnamen voraussetzen oder die nicht alphabetischen Zeichen besondere Bedeutungen zuweisen.

{% include _content/de/xu-specific/destinationen/general/file-name-script-expressions.md %}

{% include _content/de/xu-specific/destinationen/general/column-name-style.md %}

{% include _content/de/xu-specific/destinationen/general/date-conversion.md %}

### Folder

Geben Sie hier einen Ordnernamen ohne Schrägstriche ein, wenn die Extraktion in einen Ordner innerhalb eines S3 Buckets extrahiert werden soll.<br>
Unterordner werden ebenfalls unterstützt und können wie folgt eingegeben werden:`Ordner/Unterordner1/Unterordner2/`<br>


{% include _content/de/xu-specific/destinationen/general/folder-script-expressions.md %}

{% include _content/de/xu-specific/destinationen/general/compression.md %}

{% include _content/de/xu-specific/destinationen/general/file-splitting.md %}