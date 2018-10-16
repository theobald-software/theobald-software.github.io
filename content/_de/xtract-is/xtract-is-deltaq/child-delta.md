---
ref: xi-q-delta-05
layout: page
title: Delta
description: Delta
product: xtract-is
parent: xtract-is-deltaq
permalink: /:collection/:path
weight: 5
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=delta
---

Im letzten Beispiel haben wir ein *Full-Update* ausgeführt. <br>
Um ein echtes Delta-Verfahren zum Laufen zu bringen, muss das Delta zunächst initialisiert werden. Um das zu tun, stellen Sie den UpdateType auf Delta *Initialisation*. <br>
Lassen Sie Ihr Paket einmalig laufen und stellen Sie dann den UpdateType auf *Delta Update*. Dann werden nur noch die Änderungen seit der letzten Übertragung extrahiert.<br>
Ist das Delta einmal aktiviert, können Sie die anstehenden Sätze in der Delta-Queue in der Transaktion RSA7 ansehen.

![DeltaQ-Delta-01](/img/content/DeltaQ-Delta-01.png){:class="img-responsive"}

Sie müssen sicherstellen, dass ein Delta-Update korrekt verbucht, bevor das Nächste angestoßen wird. Der Anstoß eines neuen Delta-Updates löscht das Letzte.<br>
Ein **Repair** bezieht sich immer auf den letzten Delta-Update, welcher dann komplett wiederholt wird. Es spielt dabei keine Rolle, ob der letzte Delta-Update erfolgreich ausgeführt wurde oder nicht. Der Repair-Schritt kann gegebenfalls mehrmals ausgeführt werden.

Bevor Sie eine Datasource initialisieren (Delta Initialization - C), löschen Sie eine evtl. alte Initialisierung in der Transaktion RSA7. 
Sie können sich alte Initialisierungen, wenn Sie in den Settings der DeltaQ-Komponente auf *Request Maintenance* klicken. <br>
Hier würden Sie einen Eintrag pro Initialisierung finden. Daher sollte Sie in der Liste nie mehr als einen Eintrag haben. 

Falls im Moment keine neuen Daten zur Übertragung anstehen, wird ein entsprechender Protokollvermerk geschrieben und die Daten-Pipeline bleibt leer.

![DeltaQ-Delta-02](/img/content/DeltaQ-Delta-02.png){:class="img-responsive"}

Der folgende Datenviewer zeigt zunächst einen neu angelegten Datensatz (MATKL ist leer). Dann wurde die Warengruppe geändert und ein neuer Lauf durchgeführt. Jetzt steht im Feld MATKL der neue Wert. In einigen Fällen (z.B. 2LIS_01_S260 Sales Order) gibt es einen Storno Flag, der eventuelle Löschungen dokumentiert.

![DeltaQ-Delta-03](/img/content/DeltaQ-Delta-03.png){:class="img-responsive"}

![DeltaQ-Delta-04](/img/content/DeltaQ-Delta-04.png){:class="img-responsive"}

Weitere Informationon über das Delta-Verfahren finden Sie in der [SAP-Hilfe](http://help.sap.com/saphelp_nw73/helpdata/de/4f/18f6aa3fca410ae10000000a42189d/content.htm).