### Column Mapping

Verwenden Sie **Column Mapping**, wenn Sie Daten in einer Zieldatei oder Zieleinheit ergänzen und Spalten manuell zugewiesen werden müssen.<br>
Das kann der Fall sein, wenn Sie Daten von zwei oder mehr Extraktionen in eine Zieldatei schreiben, in der sich die Spaltennamen von den Spaltennamen der Extraktionen unterscheiden.

{: .box-note }
**Hinweis:** Die Spaltennamen in der Extraktion und der Zieldatei müssen einzigartig sein. 
Wenn doppelte Spaltennamen detektiert werden, öffnet sich eine entsprechende Fehlermeldung.
Die Spaltennamen müssen korrigiert werden, bevor mit der Spaltenzuweisung begonnen werden kann.

1. Wenn Sie Daten in flache Dateien schreiben, muss folgendes gewährleistet sein:<br>
a) der Server, auf dem der XU-Dienst läuft und der Designer müssen beide Zugriff auf die Zieldatei haben.<br>
b) der angegebene [Pfad](#destination-details---destinationsdetails) und [Dateiname](#file-name) muss mit dem Pfad und dem Namen der Zieldatei überein stimmen.
c) der [Column Name Style](#column-name-style) der Extraktion muss mit der Zieldatei überein stimmen.
2. Wählen Sie im Abschnitt [Existing Files](#existing-files) die Option **Append results** aus.<br>
3. Klicken Sie auf **[Map]**, um Spalten zuzuweisen. Das Fenster "Column Mapping" öffnet sich.<br>
Unter *Destination Column* werden die Spaltennamen aus dem Header der Zieldatei angezeigt. 
Unter *Not Mapped* können Spalten markiert werden, bei denen keine Zuweisung erfolgen soll.
Unter *Source Columns* können SAP-Spalten zugewiesen werden.<br>
![Column-Mapping](/img/content/column-mapping.png){:class="img-responsive"}
4. a) Wenn die Spaltennamen in der Zieldatei dieselben sind wie in SAP, klicken Sie auf **[Auto map by name]**.<br>
b) Wenn die Spaltennamen nicht übereinstimmen, weisen Sie SAP-Spalten manuell über das entsprechende Dropdown-Menü zu.<br>
c) Wenn einer Spalte nichts zugewiesen werden soll, markieren Sie die entsprechende Checkbox unter *Not Mapped*.<br>
5. Klicken Sie auf **[OK]**, um Ihre Auswahl zu bestätigen.

Wenn Sie die Extraktion ausführen, wird die Zieldatei oder Zieleinheit entsprechend Ihrer Spaltenzuweisung erweitert.

{: .box-tip }
**Tipp:** Wenn sich eine Fehlermeldung öffnet, klicken Sie auf **[Show More]**, um eine Beschreibung der Fehlerursache zu finden.

