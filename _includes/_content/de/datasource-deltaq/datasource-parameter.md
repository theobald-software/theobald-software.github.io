Bei den Paremetern kann es sich um Einzelwerte, einen Intervall oder um eine komplexe Selektion handeln. 

Bei einer komplexen Selektion springen Sie über den Edit-Link in ein neues Fenster ab.<br> 
Natürlich können in die Textfelder auch Variablen eingetragen werden (wie im Bild zu sehen).<br>
Bitte fügen Sie eine @ direkt vor den Wert, um es als Variable zu markieren.

Das folgende Bild zeigt eine komplexe Selektion:

![Parameters-2](/img/content/Parameters-2.png){:class="img-responsive"}

Das Feld Sign hat zwei Optionen: 
- Include 
- Exclude 

Mit dieser Funktion können Sie jene Werte wählen, die Sie für das Ergebnis ein- bzw. ausschließen wollen. 

Das Feld Option enthält den logischen Operator für die Bedingung: <br>

|Operator|Beschreibung|
|:----|:----|
|"=" | gleich |
|"!="| ungleich |
| "<" | Kleiner als |
|"<=" |Kleiner oder gleich |
|">"| Größer als |
|">=" |Größer oder gleich |
|"[]"| zwischen (Intervall) |
|"][" | nicht zwischen (Intervall) |
|"*" | enthält (Like)|

Die Spalte Low Value muss bei jedem Operator gefüllt werden.<br>
Die Spalte High Value wird nur von den Operatoren verwendet, welche einen zweiten Paramter erwarten. 


Auch Variablen und [Skript-Ausdrücke](../fortgeschrittene-techniken/script-ausdruecke) werden unterstützt.<br>
Parameter (Filter) sind nicht erlaubt für den Delta Update Modus, denn die Filter des Init Modus werden hier angewendet. 
