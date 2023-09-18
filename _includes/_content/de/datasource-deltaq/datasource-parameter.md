Selektionen filtern die extrahierten Daten.
Nicht alle Elemente einer DataSource unterstützen Selektionen.

### Selektionen bearbeiten 

{: .box-note }
 **Hinweis:** Definieren Sie keine Selektionen, wenn Sie den Update-Modus *Delta Update* verwenden, da die Selektionen des *Init*-Modus automatisch angewendet werden.

<!--- ab hier weiterübersetzen
-->

1. Wählen Sie im Abschnitt **OLTP-Felder** ein Element aus und klicken Sie auf *Edit* (Bearbeiten).
Das Fenster "Edit Selections" wird geöffnet.<br>
![DeltaQ-Edit](/img/content/DeltaQ-Edit.png){:class="img-responsive"}
2. Klicken Sie auf **[Add]**, um ein neues Filterkriterium hinzuzufügen.<br>
![DeltaQ-Edit](/img/content/DeltaQ-edit selections.png){:class="img-responsive"}
3. Wählen Sie *Include* in der **Sign** Spalte aus, um nur die gefilterten Daten in die Ausgabe einzubeziehen.<br>
Wählen Sie *Exclude* in der **Sign** Spalte aus, um die gefilterten Daten von der Ausgabe auszuschließen.
4. Wählen Sie einen Operator in der **Option** Spalte aus. Der Operator filtert Daten gemäß der folgenden Tabelle.

   | Operator   |      Meaning      |  
   |:---------|:------------- |
   |(Not)ContainsPattern |  True, wenn die Daten (nicht) übereinstimmen mit dem Muster in Operand 1. |
   |(Not)Equal |  True, wenn die Daten (nicht) dem Inhalt von Operand 1 entsprechen.|
   |GreaterOrEqual |  True, wenn die Daten größer oder gleich dem Inhalt von Operand 1 sind.|
   |GreaterThan |  True, wenn die Daten größer als der Inhalt von Operand 1 sind.|
   |LessOrEqual | True, wenn die Daten kleiner oder gleich dem Inhalt von Operand 1 sind.|
   |LessThan | True, wenn die Daten kleiner als der Inhalt von Operand 1 sind.|
   |(Not)Between | True, wenn Datenwerte (nicht) zwischen den Werten von Operand 1 und Operand 2 liegen. |
5. Geben Sie Werte direkt in die Eingabefelder **Low** und **High** ein. 
6. Klicken Sie auf **[OK]**, um Ihre Eingabe zu speichern.

Sie können mehrere Filter anwenden oder Filter löschen, indem Sie auf ![trashbin](/img/content/icons/trashbin.png) klicken.<br>
Die Anzahl der definierten Filter wird in eckigen Klammern neben der Option *Edit* angezeigt.