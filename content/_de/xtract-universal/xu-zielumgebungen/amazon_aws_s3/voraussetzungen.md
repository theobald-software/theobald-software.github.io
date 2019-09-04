---
ref: xu-amazon-aws-s3-01
layout: page
title: Voraussetzungen
description: Voraussetzungen
product: xtract-universal
parent: amazon_aws_s3
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=voraussetzungen6
---

Sie benötigen:
- ein Amazon Web Services ([AWS](https://aws.amazon.com/de/)) Account.
- *entweder* die "[Access Keys](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html)" Ihres AWS Benutzers, bestehend aus "access key ID" und "secret access key". *Oder* eine IAM-Rolle, die an die [EC2-Instanz](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html), auf der Xtract Universal läuft, angebunden wurde.
- einen AWS S3 Bucket, in den Sie Dateien hochladen können.
- ausreichende Berechtigungen für das Auflisten/Lesen von und Schreiben nach S3 Buckets. Die Berechtigungen im nachfolgenden Screenshot funktionierten in unserer Testumgebung.
![IAM_permissions_for_S3_destination](/img/content/xu/S3_desination_IAM_permissions.png){:class="img-responsive"}

**Hinweis:**<br>
Xtract Universal verwendet für den Upload nach S3 einen sog. [Multipart Upload](https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html). Das heißt, die extrahierten Daten werden Stück für Stück als sogenannte Parts nach S3 geschickt und dort zwischengepuffert. Im Falle einer erfolgreichen Extraktion werden die einzelnen Parts dann zu einer Datei zusammengefügt. Diese Datei ist auf S3 erst dann sichtbar, wenn die Extraktion in XU erfolgreich abgeschlossen ist.

Im Falle eines Extraktionsabbruchs aufgrund von Exceptions in XU o.Ä., veranlasst XU das Löschen der einzelnen Parts auf S3-Seite. Im Falle von "unkontrollierten" Extraktionsabbrüchen, z.B. aufgrund von Netzwerkproblemen, kann XU ein Löschen der Multiparts nicht veranlassen.

Aus diesem Grund ist es empfehlenswert, auf S3-Seite ein automatisches Löschen von Parts, z.B. nach einem Tag, vorzunehmen. Die Einstellung findet man, indem man in S3 auf den Bucket klickt und auf den Management Tab wechselt. Dort klickt man unter "Lifecycle" auf "Add lifecycle rule" und fügt eine entsprechende Regel hinzu.

![S3_Multipart_Rule](/img/content/S3_Multipart_Rule.png){:class="img-responsive"}
