In Xtract Universal stehen benutzerdefinierte Parameter (Custom Parameters), deren Werte man beim Aufruf setzen kann. Ein typischer Anwendungsfall ist, bei einer Table-Komponente die WHERE-Bedingung zu dynamisieren. Diese benutzerdefinierte Parameter stehen auch als SQL-Parameter in den SQL-Befehlen zur Verfügung, falls die Destination eine SQL-Datenbank ist. 
 
Folgende Table-Extraktion hat einen benutzerdefinierten Parameter *WNAME* in der WHERE-Clause:

![xu-customerparam-where](/img/content/xu-customerparam-where.png){:class="img-responsive"}

Die Extraktion benutzt eine Oracle-Destination, im Preparation Statement wird der benutzerdefinierte Parameter verwendet:

![xu-customerparam-destination](/img/content/xu-customerparam-destination.png){:class="img-responsive"}

Das Format der Variable ist abhängig von der Destination. Für die Variable WNAME wird z.B. :WNAME (mit Semikolon : vor dem Parametername) bei einer Oracle-Destination und @WMNAME (mit @ vor dem Parametername) bei einer SQL Server Destination verwendet. Das Format eines SQL-Parameters kann man sich z.B. im Insert-Statement anschauen.
Wie sonst auch bei benutzerdefinierten Parametern, müssen man darauf achten, keine Namenskonflikte zu erzeugen.<br> 
Der benutzerdefinierte Parameter im Beispiel darf z.B. nicht NAME1 heißen, weil im Row Processing Statement bereits der SQL-Parameter, der den Wert der Spalte *NAME1* enthält, so heißt.