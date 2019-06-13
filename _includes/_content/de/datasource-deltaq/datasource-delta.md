Im letzten Beispiel haben wir ein **Full-Update** ausgeführt. <br>
Ein Full Update fordert alle Daten an, die den von Ihnen festgelegten Selektionskriterien entsprechen.

**Schritt 1: Delta Initialisation** 

Um ein echtes Delta-Verfahren zum Laufen zu bringen, muss das Delta zunächst initialisiert werden. Um das zu tun, stellen Sie im Hauptfenster der Extraktion den UpdateMode auf ***Delta Initialisation***. <br>
Somit werden alle Daten angefordert, die den von Ihnen festgelegten Selektionskriterien entsprechen.<br>
Danach können Sie das Delta Update nutzen.

**Schritt 1 Alternativ: Delta Init (without data)** 

Hier werden keine Daten geladen. Danach können Sie aber das Delta Update nutzen.

**Schritt 2: Delta Update** 

Lassen Sie Ihr Paket einmalig laufen, und stellen Sie dann den UpdateType auf ***Delta Update***. <br>
Mit dem Delta Update werden nur noch die Änderungen seit der letzten Übertragung extrahiert.

**Optional: Delta Queue - RSA7** 

Ist das Delta einmal aktiviert, können Sie die anstehenden Sätze in der Delta-Queue in der Transaktion RSA7 ansehen.

![Delta](/img/content/Delta.png){:class="img-responsive"}

Falls im Moment keine neuen Daten zur Übertragung anstehen, wird ein entsprechender Protokollvermerk geschrieben und die Daten-Pipeline bleibt leer.

Sie müssen sicherstellen, dass ein Delta-Update korrekt verbucht wird, bevor das Nächste angestoßen wird. Der Anstoß eines neuen Delta-Updates löscht den Letzten.

**Optional: Repeat** 

Ein **Repeat** bezieht sich immer auf das letzte Delta-Update, welches dann komplett wiederholt wird. Es spielt dabei keine Rolle, ob das letzte Delta-Update erfolgreich ausgeführt wurde oder nicht. Ein Repeat kann gegebenfalls mehrmals ausgeführt werden.

Weitere Informationen über das Delta-Verfahren finden Sie in der SAP-Hilfe:<br>
[Delta Übertragung ins BI](http://help.sap.de/saphelp_nw70/helpdata/de/37/4f3ca8b672a34082ab3085d3c22145/content.htm)<br>
[Delta-Verfahren](https://help.sap.com/saphelp_nw70/helpdata/de/84/81eb588fc211d4b2c90050da4c74dc/content.htm?no_cache=true) 