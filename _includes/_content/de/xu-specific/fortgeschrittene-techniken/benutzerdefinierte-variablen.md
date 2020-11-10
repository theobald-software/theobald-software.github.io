Abhängig von dem Extraktionstyp gibt es die Möglichkeit, eigene Parameter in der Extraktion zu definieren und deren Werte dynamisch beim Aufruf zu setzen.

Das folgende Bild zeigt eine Where-Bedingung, in der zwei Parameter @PlantLow und @PlantHigh definiert wurde.Das @-Symbol muss dem Namen eines Parameters unmittelbar vorangestellt werden.

![Extraction-User-Variables](/img/content/Extraction-User-Variables.png){:class="img-responsive"}

Klicken Sie nun auf den Run-Knopf und bestätigen Sie, dass die Änderungen übernommen werden sollen.<br>
Wenn Sie auf Basis dieser Where-Klausel den Run-Dialog öffnen, finden Sie die Parameter im Reiter **Custom** wieder, um sie mit einem Wert zu belegen. Xtract Universal erkennt anhand des @-Zeichens, dass es sich um einen Parameter handelt.

![Run-Extraction-Custom-Defined-Parameters](/img/content/Run-Extraction-Custom-Defined-Parameters.png){:class="img-responsive"}

Dies ergibt folgende URL, um die Werte zu setzen: 
```
http://localhost:8085/?name=Plants&PlantLow=1000&PlantHigh=9999
```

{: .box-note }
**Hinweis:** Der Tab "Custom" ist nur dann aktiv, wenn ein benutzerdefinierter Parameter definiert ist, z.B. in der [WHERE-Bedingung](../table/where-bedingung) bei einer Table-Komponente.

Die Übergabe der Parameterwerte wird auch entsprechend im Extraktionslog protokolliert. Dazu klicken Sie auf den Button Log im Designer:

![User-Variables-In-Log](/img/content/User-Variables-In-Log.png){:class="img-responsive"}
