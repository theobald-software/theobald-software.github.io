
Wenn Sie im Designer auf *Run* klicken, finden Sie im Reiter *Extraction Parameters* die folgenden Parameter, welche Sie überschreiben können. 

Wenn Sie einen Wert überschreiben, wird die URL entsprechend angepasst. 

![XU_extraction_parameters](/img/content/XU_extraction_parameters.jpg){:class="img-responsive"}

*preview*<br>
Um den Preview zu aktivieren. Default-Wert ist False.

*clearBuffer*<br>
Um den Ergebnis-Buffer zu leeren. Default-Wert ist False.

*source*<br>
Wenn Sie mehrere SAP Quellsysteme angelegt haben, z.B. sap_dev und sap_prod, können Sie über diesen Parameter auswählen, aus welchem SAP System die Daten extrahiert werden.

*destination*<br>
Wenn Sie mehrer Zielumgebungen angelegt haben, z.b. db_1 und db_2, können Sie über diesen Parameter auswählen, in welche Zielumgebung die extrahierten Daten geschrieben werden.

*wait*
Bestimmt, ob die http-Verbindung zum aufrufenden Client, bis zum Ende der Extraktion bestehen soll. Default-Wert is True.<br>
Wenn Sie den Wert auf False setzen, wird die Extraktion asynchron aufgerufen. Die http-Verbindung zwischen aufrufendem Client  (xu.exe bzw. Browser) und XU-Server wird getrennt, nachdem die Extraktion angestartet wurde. Das kann z.B. bei langlaufenden Extraktionen sinnvoll sein. Dadurch wird die Extraktion z.B. auch dann nicht abgebrochen, wenn der aufrufende Client geschlossen wird.<br>
In diesem Fall wird der Zeitstempel als Ergebnis zurückgeliefert. Der Zeitstempel kann verwendet werden, um das entsprechende Log aufzurufen. 

**Table**

Je nach Extraktionstyp stehen weitere Parameter zur Verfügung Für die Table-Extraktion stehen beispielsweise noch folgende Parameter zur Verfügung.

*rows*<br>
Um die maximale Anzahl der extrahierten Datensätze zu setzen. 

*where*<br>
Um die Where-Bedingung zu setzen. 

*packageSize*<br>
Um die Paketgröße zu setzen.  


