Klicken Sie in der Administrator Workbench RSA1 im linken Baum auf *Open Hub Destination*. Klicken Sie mit der rechten Maustaste auf eine InfoArea und wählen Sie im Kontextmenu *Open Hub Destination* anlegen.

![OHS-Destination-01](/img/content/OHS-Destination-01.png){:class="img-responsive"}


Stellen Sie im Editiermodus der Destination den Typ auf *Drittanbieter* und tragen Sie die zuvor angelegte RFC-Destination ein, speichern und aktivieren Sie die Destination.

![OHS-Destination-02](/img/content/OHS-Destination-02.png){:class="img-responsive"} 


Klicken Sie in dem mittleren Baum der InfoAreas auf die neu angelegte Destination und wählen *Data Transfer Prozess anlegen*. Diese Aktion legt einen neuen Datentransfer und die zugehörigen Übertragungsregeln an (siehe Screenshots).

 
![OHS-Destination-03](/img/content/OHS-Destination-03.png){:class="img-responsive"}

Der DTP kann wie vom System vorgeschlagen gespeichert und aktiviert werden (je nach Bedarf sollte vor dem Aktivieren der Extraktionstyp von Delta auf Full gestellt werden). Im OHS-Baum sind Destination, Übertragungsregeln und DTP dann wie folgt angeordnet:

![OHS-Destination-04](/img/content/OHS-Destination-04.png){:class="img-responsive"}


Um den Transferprocess von SSIS aus anstoßen zu können, brauchen wir nun noch eine Prozesskette. Gehen Sie dazu von der Transaktion RSA1 in das Menü *Editieren -> Prozessketten*. Legen Sie dort eine neue Prozesskette an. In der Variante für die Kette muss *Start durch API* angekreuzt sein. Innerhalb der Prozesskette muss dann der DTP eingefügt werden: nach der Aktivierung steht die Kette zur Ausführung bereit.

![OHS-Destination-05](/img/content/OHS-Destination-05.png){:class="img-responsive"}