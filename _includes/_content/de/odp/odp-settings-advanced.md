### Fortgeschrittene Einstellungen

![ODP Advanced Settings](/img/content/odp/advanced-settings.png){:class="img-responsive"}

#### Package Size
Die extrahierten Daten werden in Pakete mit der angegebenen Größe aufgeteilt.
Wenn der hier angegebene Wert 0 ist, wird die ODP-Standardgröße von SAP verwendet.
Die Default Package Size ist 14400000 bytes.

Beachten Sie, dass Ihr SAP-System die benötigten Hinweise beinhaltet, siehe [Technische Voraussetzungen](../odp#technische-voraussetzungen).

#### Adjust Currency Decimals

Standardmäßig haben Währungen in der SAP-Datenbank 2 Nachkommastellen.
Währungen ohne Nachkommastellen werden ebenfalls in diesem Format gespeichert, z.B. JPY, VND, KRW, etc.

Beispiel:

| Währung       | Tatsächlicher Betrag          | Betrag in der SAP-Datenbank |
| ------------- |:-------------:| -----:|
| JPY | 100	|1.00|
| KRW | 10000	|100.00|


Wenn Sie Währungen ohne Nachkommastellen extrahieren, wird der Wert in der SAP-Datenbank zurückgegeben, z.B. werden 100 JPY als 1.00 extrahiert.
Aktivieren Sie *Adjust Currency Decimals*, um die Kommastellen zu korrigieren.
Wenn *Adjust Currency Decimals* aktiv ist, werden Währungen ohne Nachkommastellen mit einem entsprechenden Faktor multipliziert, um die die Nachkommastellen auszugleichen.
*Adjust Currency Decimals* erfordert, dass das zugehörige Währungsfeld des Betrags-Feldes Teil des extrahierten Objekts ist.

{: .box-note }
**Hinweis:** Der Multiplikationsfaktor, der in *Adjust Currency Decimals*  verwendet wird, wird über die SAP Währungstabelle TCURX bestimmt.
Um auf die Tabelle zuzugreifen, muss folgendes Berechtigungsobjekt in SAP verfügbar sein: *S_TABU_NAM	ACTVT=03; TABLE=TCURX*.
