Legen Sie zunächst eine neue Webservice-Operation an und benennen diese. 

Fügen Sie per Drag & Drop die Aktivität *Execute Table* im Ablaufdiagramm hinzu.

![WSD-NewActivity](/img/content/WSD-NewActivity.png){:class="img-responsive"}

Im Search Table Dialog können Sie die gewünschte SAP-Tabelle suchen und selektieren.

![WSD-SearchTableDialog](/img/content/WSD-SearchTableDialog.png){:class="img-responsive"}

Im Beispielfall selektieren wir einzelne Zeilen der SAP Tabelle. Rufen Sie hierfür den *Table Field Selection Dialog* im Menüfeld *Selected Fields* auf. Alternativ können Sie im Feld *Custom Function* einen Funktionsbaustein für die Tabellenextraktion verwenden.   

![WSD-TableFieldSelectionDialog](/img/content/WSD-TableFieldSelectionDialog.png){:class="img-responsive"}

Um im Aktitvitätsdialog das Mapping der Outputwerte  durchzuführen, müssen zunächst noch die entsprechenden 
*Custom Data Types* und *Parameter* angelegt werden. Bestätigen Sie den Aktivitätsdialog mit *OK* ohne weitere Einträge vorzunehmen und wechseln auf die Übersichtsseite. Dort können Sie die benötigten Werte anlegen. 

![WSD-NewDataTypeParameters](/img/content/WSD-NewDataTypeParameters.png){:class="img-responsive"}

Definieren Sie einen Namen für den Datentyp. Sie haben die Möglichkeit entweder mit New einen neuen Datentyp anzulegen oder über den Importbutton die gewünschten SAP-Tabellenfelder zu importieren.

![WSD-CustomDataTypeDialogTable](/img/content/WSD-CustomDataTypeDialogTable.png){:class="img-responsive"}

![WSD-ImportPropertiesDialog](/img/content/WSD-ImportPropertiesDialog.png){:class="img-responsive"}

Die geforderte SAP-Tabelle kann unter *Import Properties Dialog* gesucht und ausgewählt werden.

![WSD-ImportPropertiesDialog2](/img/content/WSD-ImportPropertiesDialog2.png){:class="img-responsive"}

Die Auswahl der zu importierenden Felder kann in der folgenden Dialogmaske eingeschränkt werden. <br>
Die Bezeichnungen der Felder können unter *Property Name* umbenannt werden.

![WSD-ImportPropertiesDialog3](/img/content/WSD-ImportPropertiesDialog3.png){:class="img-responsive"}

Bestätigen Sie Ihre Auswahl mit *OK*. 

![WSD-CustomDataTypeDialogTable2](/img/content/WSD-CustomDataTypeDialogTable2.png){:class="img-responsive"}

Anschließend muss ein Output oder Return-Parameter definiert werden. <br>
Falls Sie mehrere Ausgabeparameter haben, wählen Sie *Output* im *Feld* Direction.<br>
Der Output-Parameter enthält die Ergebnisse, wenn Sie den Webservice aufrufen.

![WSD-NewParameterDialogTable](/img/content/WSD-NewParameterDialogTable.png){:class="img-responsive"}

Optional: Soll die Tabelle später nach bestimmten Tabellenwerten gefiltert werden, kann zusätzlich ein 
Input-Parameter für die Filterfunktion angelegt werden. 

![WSD-NewParameterDialogTable2](/img/content/WSD-NewParameterDialogTable2.png){:class="img-responsive"}

In der Aktivität kann nun das Mapping der Output-Daten durchgeführt werden.

![WSD-ExecuteTableEdit](/img/content/WSD-ExecuteTableEdit.png){:class="img-responsive"}

Klicken Sie in der Sektion *Output Mapping* auf *New*, um einen neuen Eintrag anzulegen. Unter *Target* ist der Output-Parameter 
*SAP Customers* auswählbar. Nach Doppelklick auf den Wert steht unter Source die Ergebnistabelle *RESULT* zur Verfügung. 
Im Feld *Mapping Expression* kommen Sie über den Button auf der Rechten Seite in die Dialogmaske für das Mapping der Tabellenwerte. 


![WSD-ExecuteTableActivityDialog](/img/content/WSD-ExecuteTableActivityDialog.png){:class="img-responsive"}

Da die Quell- und Zielfelder die gleichen Namen haben, können Sie die Funktion Automap für das automatische Mapping verwenden. 

![WSD-MappingStructureDialog](/img/content/WSD-MappingStructureDialog.png){:class="img-responsive"}

Soll die Tabelle ohne Filterfunktion lediglich angezeigt werden, kann der Webservice direkt deployed werden.
