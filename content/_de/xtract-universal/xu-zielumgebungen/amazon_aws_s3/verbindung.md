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

**Inherit Credentials from IAM role** <br>
Die Anmeldeinformationen und Berechtigungen der IAM Rolle, die der [EC2-Instanz](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html), auf der Xtract Universal läuft, zugewiesen wurde, werden für die Authentisierung verwendet.

**Access key ID und Secret key**<br>
Hierüber authentifizieren Sie sich bei Amazon AWS. Über das Identiy and Access Managment ([IAM](https://console.aws.amazon.com/iam/home#/home)) können Sie diese Werte ermitteln.<br>
Nähere Informationen finden Sie in der [AWS Dokumentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html).

**Connect**<br>
Klicken Sie auf die Connect-Schaltfläche, nachdem Sie Access key ID und Secret key eingegeben haben. Wenn die Verbindung erfolgreich war, poppt ein Infofenster hoch, und Sie können anschließend Bucket name und Region auswählen.

**Bucket name und Region**<br>
Wählen Sie einen Bucket und die zu diesem Bucket zugehörige Region aus. In diesen Bucket werden die extrahierten Daten geschrieben.<br>
ACHTUNG: In den Drop Down-Listen werden alle Buckets und Regionen angezeigt. Sie können also auch eine falsche Kombination aus Bucket/Region auswählen. Prüfen Sie daher über die Test Connection-Schaltfläche, dass der Bucket erreichbar ist.

**Test Connection**<br>
Prüft, ob die Kombination aus Bucket und Region korrekt ist und der Bucket von XU aus mit den eingegebenen access keys beschreibbar ist.

**Server-side encryption**<br>
Verschlüsselt die Datei [serverseitig](https://docs.aws.amazon.com/AmazonS3/latest/dev/serv-side-encryption.html), nachdem Sie nach S3 hochgeladen wurden.<br>
HINWEIS: Diese Einstellungen beziehen sich nicht auf die Transportverschlüsselung zwischen Xtract Universal und S3. Transportverschlüsselung zwischen Xtract Universal und S3 ist standardmäßig aktiviert. 

- **None**
   Keine serverseitige Verschlüsselung der Daten.

- **SSE-S3**
   Verschlüsselung über den für den AWS-Account AWS-seitig automatisch vorhandenen Schlüssel ([S3 Managed Encryption Keys](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingServerSideEncryption.html)).

- **SSE-KMS und Key ID**
   Verschlüsselung über einen AWS-seitig selber kreierten Schlüssel ([AWS Key Management Services](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingKMSEncryption.html)). Der Schlüssel kann in AWS [hier](https://console.aws.amazon.com/iam/home#/encryptionKeys/) angelegt werden.


**CSV Settings**<br>
Die Einstellungsmöglichkeiten im Tab CSV Settings entsprechen denen der allgemeinen [http-csv](../csv-via-http) Settings.

![XU_S3_DestinationDetails2](/img/content/XU_S3_DestinationDetails2.png){:class="img-responsive"}
