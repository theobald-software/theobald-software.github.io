---
layout: page
title: Delta
description: Delta
product: board-connector
parent: datasource-deltaq
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /BOARD-Connector-DE/default.aspx?pageid=datasource-delta
---

Im letzten Beispiel haben wir ein Full-Update ausgeführt. Um ein echtes Delta-Verfahren zum Laufen zu bringen, muss das Delta zunächst initialisiert werden. Um das zu tun, stellen Sie im Hauptfenster der Extraktion den UpdateMode auf ***Delta Initialisation***. Lassen Sie Ihr Paket einmalig laufen, und stellen Sie dann den UpdateType auf ***Delta Update***. Dann werden nur noch die Änderungen seit der letzten Übertragung extrahiert.

Ist das Delta einmal aktiviert, können Sie die anstehenden Sätze in der Delta-Queue in der Transaktion RSA7 ansehen.

![Delta](/img/content/Delta.png){:class="img-responsive"}

Falls im Moment keine neuen Daten zur Übertragung anstehen, wird ein entsprechender Protokollvermerk geschrieben und die Daten-Pipeline bleibt leer.

Sie müssen sicherstellen, dass ein Delta-Update korrekt verbucht wird, bevor das Nächste angestoßen wird. Der Anstoß eines neuen Delta-Updates löscht den Letzten.

Ein **Repair** bezieht sich immer auf das letzte Delta-Update, welches dann komplett wiederholt wird. Es spielt dabei keine Rolle, ob das letzte Delta-Update erfolgreich ausgeführt wurde oder nicht. Der Repair-Schritt kann gegebenfalls mehrmals ausgeführt werden.

Weitere Informationon über das Delta-Verfahren finden Sie in der [SAP-Hilfe]().