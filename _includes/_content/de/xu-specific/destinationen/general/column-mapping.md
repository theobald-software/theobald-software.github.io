### Column Mapping

Verwenden Sie **Column Mapping**, wenn Sie Daten in einer Zieldatei ergänzen und Spalten manuell zugewiesen werden müssen.<br>
Das kann der Fall sein, wenn man Daten von zwei oder mehr Extraktionen in eine Zieldatei schreibt, in der sich die Spaltennamen von den Spaltennamen der Extraktionen unterscheiden.

{: .box-note }
**Hinweis:** Die Spaltennamen in der Zieldatei müssen einzigartig sein. Doppelte Spaltennamen können nicht verarbeitet werden.

1. Stellen Sie sicher, dass der angegebene [Pfad](#destination-details---destinationsdetails) und [Dateiname](#file-name) mit dem Pfad und dem Namen der Zieldatei überein stimmt.
2. Wählen Sie im Abschnitt [Existing Files](#existing-files) die Option **Append results** aus.<br>
3. Klicken Sie auf **[Map]**, um Spalten zuzuweisen. Das Fenster "Column Mapping" öffnet sich.<br>
Unter *Destination Column* werden die Spaltennamen aus dem Header der Zieldatei angezeigt. 
Unter *Not Mapped* können Spalten markiert werden, bei denen keine Zuweisung erfolgen soll.
Unter *Source Columns* können SAP-Spalten zugewiesen werden.<br>
![Column-Mapping](/img/content/column-mapping.png){:class="img-responsive"}
4. Wenn die Spaltennamen in der Zieldatei dieselben sind wie in SAP, klicken Sie auf **[Auto map by name]**.<br>
Wenn die Spaltennamen nicht übereinstimmen, weisen Sie SAP-Spalten manuell über das entsprechende Dropdown-Menü zu.<br>
Wenn einer Spalte nichts zugewiesen werden soll, markieren Sie die entsprechende Checkbox unter *Not Mapped*.<br>
5. Klicken Sie auf **[OK]**, um Ihre Auswahl zu bestätigen.

Wenn Sie die Extraktion ausführen, wird die Zieldatei entsprechend Ihrer Spaltenzuweisung erweitert.

{: .box-tip }
**Tipp:** Wenn sich eine Fehlermeldung öffnet, klicken Sie auf **[Show More]**, um eine Beschreibung der Fehlerursache zu finden.

