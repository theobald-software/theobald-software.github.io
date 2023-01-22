---
ref: xi-q-delta-07
layout: page
title: Daten- und Protokoll-Output
description: Daten- und Protokoll-Output
product: xtract-is
parent: xtract-is-deltaq
permalink: /:collection/:path
weight: 7
lang: de_DE
progressstate: 5
---
### DeltaQ-Ausgabe 

Eine DeltaQ-Quelle hat zwei Ausgaben:

- **DeltaQDataOutput:** <br>
Die Datenausgabe korreliert mit den angekreuzten Spalten einschließlich der RequestID.
- **DeltaQRequestLog:** <br>
Die Protokollausgabe hat die folgenden Spalten:
	- DataSource
	- RequestID
	- UpdateType
	- TimeStamp
	- MessageType
	- Message

{: .box-tip }
**Empfehlung:** Speziell bei Delta-Mechanismen ist ein detailliertes Protokoll bei der Fehlersuche sehr hilfreich.

![DeltaQ-DataOutput-01](/img/content/DeltaQ-DataOutput-01.png){:class="img-responsive"}
