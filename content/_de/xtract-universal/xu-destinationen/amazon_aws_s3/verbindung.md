---
ref: xu-amazon-aws-s3-02
layout: page
title: Verbindung
description: Verbindung
product: xtract-universal
parent: amazon_aws_s3
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=verbindung6
---

Folgende Einstellungen können für die Verbindung zu Amazon S3 vorgenommen werden.

![XU_S3_DestinationDetails](/img/content/XU_S3_DestinationDetails.png){:class="img-responsive"}

### S3 Einstellungen

**Inherit Credentials from IAM role** <br>
Die Anmeldeinformationen und Berechtigungen der IAM Rolle, die der [EC2-Instanz](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html), auf der Xtract Universal läuft, zugewiesen wurde, werden für die Authentisierung verwendet.

**Access key ID und Secret key**<br>
Option zur Authentifizierung gegenüber Amazon AWS. Über das Identity and Access Management ([IAM](https://console.aws.amazon.com/iam/home#/home)) können Sie die notwendige Werte ermitteln.<br>
Nähere Informationen finden Sie in der [AWS Dokumentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html).

**Connect**<br>
Klicken Sie auf **[Connect]**, nachdem Sie Access key ID und Secret key eingegeben haben. Wenn die Verbindung erfolgreich hergestellt ist, poppt ein Infofenster auf, und Sie können anschließend Bucket name und Region auswählen.

**Bucket name und Region**<br>
Wählen Sie einen Bucket und die diesem Bucket zugehörige Region aus. In diesen Bucket werden die extrahierten Daten geschrieben.<br>

{: .box-note }
**Hinweis:** In den Drop Down-Listen werden **alle** Buckets und Regionen angezeigt. Achten Sie auf die richtige Kombination aus Bucket und Region. Prüfen Sie über die Schaltfläche **[Test Connection]**, dass der Bucket erreichbar ist.

**Test Connection**<br>
Prüft, ob die Kombination aus Bucket und Region korrekt ist und ob der Bucket von Xtract Universal aus mit den eingegebenen Access Keys beschreibbar ist.

**Server-side encryption**<br>
Verschlüsselt die Datei [serverseitig](https://docs.aws.amazon.com/AmazonS3/latest/dev/serv-side-encryption.html), nachdem Sie nach S3 hochgeladen wurden.<br>

{: .box-note }
**Hinweis:** Die Einstellungen unter "Server-side encryption" beziehen sich nicht auf die Transportverschlüsselung zwischen Xtract Universal und S3. Transportverschlüsselung zwischen Xtract Universal und S3 ist standardmäßig aktiviert. 

- **None**
   Keine serverseitige Verschlüsselung der Daten.

- **SSE-S3**
   Verschlüsselung über den für den AWS-Account AWS-seitig automatisch vorhandenen Schlüssel ([S3 Managed Encryption Keys](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingServerSideEncryption.html)).

- **SSE-KMS und Key ID**
   Verschlüsselung über einen AWS-seitig benutzerdefinierten Schlüssel ([AWS Key Management Services](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingKMSEncryption.html)). Der Schlüssel kann auf der [AWS-Webseite](httpshttps://console.aws.amazon.com/iam/home#/encryptionKeys/) angelegt werden.


### File Format
Wählen Sie das gewünschte Dateiformat zwischen "Parquet" und "CSV".
![azure_blob_destination_settings_csv_settings](/img/content/xu/XU_S3_DestinationDetails2.png){:class="img-responsive"}
Die "CSV" Einstellungen entsprechen denen der allgemeinen [Flat File CSV Einstellungen](../csv-flat-file).

Wenn Sie "Parquet" Dateiformat auswählen, können Sie im Feld "Compatibility mode" zwischen "Pure" und "Spark" auswählen.

![azure_blob_destination_settings_csv_settings](/img/content/xu/xu_S3_dest_comp_mode.png){:class="img-responsive"}

| SAP | Pure | Spark |
|------|-------------|-------|
| INT1 | UINT_8 | INT16 |
| TIMS | TIME_MILLIS | UTF8 |

Spark unterstützt nicht die im Pure-Mode verwendeten Datentypen, daher müssen andere Datentypen verwendet werden.

### Retry-Funktion

Die Retry-Funktion ist eine eingebaute Funktion der AWS S3 Destination. Die Retry-Funktion ist automatisch aktiviert.
Die Retry-Funktion verhindert, dass Extraktionen fehlschlagen, wenn kurzzeitige Verbindungsunterbrechungen zu AWS S3 auftreten.
Weitere allgemeine Informationen über Strategie der Wiederholversuche in einer AWS-S3-Umgebung finden Sie in der offiziellen [AWS Hilfe](https://docs.aws.amazon.com/general/latest/gr/api-retries.html).
Xtract Universal verfolgt eine exponentielle Strategie der Wiederholversuche. Dies bedeutet, dass 8 Verbindungsversuche gestartet werden in einem Zeitraum von 140 Sekunden. Sollte in dem Zeitraum von 140 Sekunden keine Verbindung zustande kommen, wird die Extraktion abgebrochen. 
