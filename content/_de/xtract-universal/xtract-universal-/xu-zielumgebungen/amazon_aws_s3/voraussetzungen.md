---
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
- ein Amazon Web Services ([AWS]()) Account.
- die "[Access Keys]()" Ihres AWS Benutzers, bestehend aus "access key ID" und "secret access key".
- einen AWS S3 Bucket, in den Sie Dateien hochladen können.

**Hinweis:**<br>
Xtract Universal verwendet für den Upload nach S3 einen sog. [Multipart Upload](). Das heißt, die extrahierten Daten werden Stück für Stück als sogenannte Parts nach S3 geschickt und dort zwischengepuffert. Im Falle einer erfolgreichen Extraktion werden die einzelnen Parts dann zu einer Datei zusammengefügt. Diese Datei ist auf S3 erst dann sichtbar, wenn die Extraktion in XU erfolgreich abgeschlossen ist.

Im Falle eines Extraktionsabbruchs aufgrund von Exceptions in XU o.Ä., veranlasst XU das Löschen der einzelnen Parts auf S3-Seite. Im Falle von "unkontrollierten" Extraktionsabbrüchen, z.B. aufgrund von Netzwerkproblemen, kann XU ein Löschen der Multiparts nicht veranlassen.

Aus diesem Grund ist es empfehlenswert, auf S3-Seite ein automatisches Löschen von Parts, z.B. nach einem Tag, vorzunehmen. Die Einstellung findet man, indem man in S3 auf den Bucket klickt und auf den Management Tab wechselt. Dort klickt man unter "Lifecycle" auf "Add lifecycle rule" und fügt eine entsprechende Regel hinzu.

![S3_Multipart_Rule](/img/content/S3_Multipart_Rule.png){:class="img-responsive"}
