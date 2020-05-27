Grundsätzlich lässt sich jede Extraktion unter Angabe ihres Namens starten. 

Darüber hinaus gibt es auch die Möglichkeit, eigene Parameter in der Extraktion zu definieren und deren Werte dynamisch beim Aufruf zu setzen.

Das folgende Bild zeigt eine Where-Klausel, in der zwei Parameter @PlantLow und @PlantHigh definiert wurde.Das @-Symbol muss dem Namen eines Parameters unmittelbar vorangestellt werden.

![Extraction-User-Variables](/img/content/Extraction-User-Variables.png){:class="img-responsive"}

Klicken Sie nun auf den Run-Knopf und bestätigen Sie eine eventuelle Anfrage, ob die Änderungen übernommen werden sollen.<br>
Wenn Sie auf Basis dieser Where-Klausel den Run-Dialog öffnen, finden Sie die Variablen im zweiten Reiter wieder, um sie mit einem Wert zu bestücken. Xtract Universal erkennt anhand des @-Zeichens, dass es sich um eine Variable handelt.



![Run-Extraction-Custom-Defined-Parameters](/img/content/Run-Extraction-Custom-Defined-Parameters.png){:class="img-responsive"}

Dies ergibt folgende URL, um die Werte zu setzen: 
```
http://localhost:8085/?name=Plants&PlantLow=1000&PlantHigh=9999
```

Die Übergabe der Parameterwerte wird auch entsprechend im Protokoll wiedergegeben. Dazu klicken Sie auf den Button Log im Designer:

![User-Variables-In-Log](/img/content/User-Variables-In-Log.png){:class="img-responsive"}


**Parameter im SQL-Statement verwenden**

{% include _content/de/xu-specific/fortgeschrittene-techniken/parameter-in-sql.md %}
