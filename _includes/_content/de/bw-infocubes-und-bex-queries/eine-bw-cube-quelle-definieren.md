Die Cube Datenquelle wurde entwickelt, um Daten aus SAP BW InfoCubes oder Queries (auch bekannt als BEx-Queries) abzuziehen.<br>

### Eine BW Cube finden
1. Im Hauptfenster der Komponente klicken Sie auf **[Suche]** (Fernglassymbol).
![Bw-Cube-Data-Source](/img/content/Bw-Cube-Data-Source.png){:class="img-responsive"}
Der Dialog "Look Up Cube or Query" öffnet sich.
![Look-Up-Cube](/img/content/Look-Up-Cube.png){:class="img-responsive"}
2. Wählen Sie *InfoCubes* oder *QueryCubes*.
3. Durch Eingabe eines Suchnamens in das Feld **Cube Name**, können Sie die Suche einschränken. Starten Sie die Suche duch klicken auf **[Suche]** (Fernglassymbol). Sie können Platzhalter verwenden(*), wenn gewünscht.

{: .box-note }
**Hinweis:** Beachten Sie, dass für jede Query, die in dieser Liste erscheinen soll, das Feld *Externen Zugriff  auf diese Query zulassen* im BEx Query Designer oder im BW Modeling Tool angehakt sein muss.

Mehr Details finden Sie im Kowledge Base-Artikel [Allow external access to BW Queries](https://kb.theobald-software.com/general/allow-external-access-to-bw-queries).
3. Wählen Sie ein Element aus der Liste aus.
5. Klicken Sie auf **[OK]**, um die Auswahl zu bestätigen.
![Cube-Details](/img/content/Cube-Details.png){:class="img-responsive"}
Auf der linken Seite des Editors werden alle Dimensionen, Maße und Dimensionseigenschaften angezeigt. Die Kennzahlen (Ordner Key Figures) und Properties (Eigenschaften) jeder Dimension werden hierarchisch in einer Baumansicht dargestellt.<br>

6. Um einzelne Parameter für die Extraktion zu wählen, ziehen Sie den gewünschten Knoten per Drag & Drop von der Baumanzeige in die Tabelle rechts. Bitte beachten Sie, dass die jeweilige Dimension automatisch mit selektiert wird, auch wenn Sie nur eine einzelne Eigenschaft hinüberziehen. Wenn Sie die Eigenschaft einer Dimension wählen, die noch nicht in der Ergebnismenge enthalten ist, wird die Dimension automatisch mit hinzugefügt.
[Cube-Details](/img/content/XU-Tableau-BExQuery.png){:class="img-responsive"}
7. Klicken Sie auf **[Run]**, nachdem Sie mindestens eine Kennzahl ausgewählt haben, um die Ausgabe der Extraktion im Browser zu sehen.
8. Um alle Eigenschaften einer Dimension oder alle Kennzahlen auszuwählen, klicken Sie mit der rechten Maustaste auf den entsprechenden Knoten und wählen Sie die Option *Select for Output*.
![Cube-Browser-Output](/img/content/Cube-Browser-Output.png){:class="img-responsive"}
9. Um das MDX-Statement zu sehen, das im Hintergrund generiert wird, klicken Sie auf den Link **[MDX anzeigen]** am oberen Rand des Editors. 
![Cube-Extraction-Mdx-Statement](/img/content/Cube-Extraction-Mdx-Statement.png){:class="img-responsive"}


