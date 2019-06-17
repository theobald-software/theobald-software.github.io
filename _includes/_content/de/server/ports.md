Die Server nutzen verschiedene Ports für die Kommunikation. Der Webserver nimmt Extraktionsaufrufe über HTTP(S) entgegen. 
Der Configuration Server kommuniziert mit dem Designer über einen dedizierten Port. <br>
Der jeweils verwendete Port hat einen Default-Wert, der überschrieben werden kann. Weitere Infos dazu finden Sie im Kapitel [Server Einstellungen](./server_einstellungen_in_xu_3_x).

Sollte der Service nicht starten, weil der Default-Port belegt ist, öffnen Sie die Datei *general.json* in den Ordnern:

- *config\server\web*
- *config\server\config* 

in Ihrem Installationsordner und legen Sie einen passenden Port fest.

Die in dieser Dokumentation verwendeten Ports sind auf unsere Systeme abgestimmt. Es ist möglich, dass auf Ihren Systemen andere Ports verwendet werden. Sollten einzelne Beispiele aufgrund der Portnummer nicht funktionieren, erfragen Sie die korrekten Ports bitte bei Ihrem Administrator.
