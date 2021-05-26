### Eine BW Cube Exktraktion definieren
1. Ein gültiger Verbindungsmanager, der mit einem SAP-System verbunden ist, ist Voraussetzung für das Erstellen einer Extraktion (siehe Abschnitt [Verbindungsmanager](../sap-verbindung/verbindungsmanager)).<br>
2. Klicken Sie doppelt auf das **[Icon]**. Das Fenster "Extract SAP BW/BEx Queries and Multidimensional Info Providers" öffnet sich.
3. Klicken Sie auf das **[Lupensymbol]**.
![Bw-Cube-Data-Source](/img/content/Bw-Cube-Data-Source.png){:class="img-responsive"}
Das Suchfenster "Look Up Cube or Query" öffnet sich.

### Eine BW Cube oder Query Extraktion finden
![Query-LookUp](/img/content/Query-LookUp.png){:class="img-responsive" }

4. Wählen Sie *InfoCubes* oder *QueryCubes*.
5. Durch Eingabe eines Suchnamens in das Feld **Cube Name**, können Sie die Suche einschränken. Starten Sie die Suche duch klicken auf das **[Lupensymbol]**. Sie können Platzhalter verwenden(*), wenn gewünscht.
6. Wählen Sie ein Element aus der Liste aus. 
7. Klicken Sie auf **[OK]**, um die Auswahl zu bestätigen.
![Cube-Details](/img/content/Cube-Details.png){:class="img-responsive"}

Auf der linken Seite des Editors werden alle Dimensionen, Maße und Dimensionseigenschaften angezeigt. Die Kennzahlen (Ordner Key Figures) und Properties (Eigenschaften) jeder Dimension werden hierarchisch in einer Baumansicht dargestellt.<br>

8. Um einzelne Parameter für die Extraktion zu wählen, ziehen Sie den gewünschten Knoten per Drag & Drop von der Baumanzeige in die Tabelle rechts. Bitte beachten Sie, dass die jeweilige Dimension automatisch mit selektiert wird, auch wenn Sie nur eine einzelne Eigenschaft hinüberziehen. Wenn Sie die Eigenschaft einer Dimension wählen, die noch nicht in der Ergebnismenge enthalten ist, wird die Dimension automatisch mit hinzugefügt.
9. Um alle Eigenschaften einer Dimension oder alle Kennzahlen auszuwählen, klicken Sie mit der rechten Maustaste auf den entsprechenden Knoten und wählen Sie die Option *Select for Output*.
9. Sobald mindestens eine Kennzahl gewählt ist, können Sie mit der Schaltfläche **[Preview}]** die Ergebnis-Tabelle erstellen.
10. Um das MDX-Statement zu sehen, das im Hintergrund generiert wird, klicken Sie auf den Link **[MDX anzeigen]** am oberen Rand des Editors. Dies dient aber nur zur Information.

