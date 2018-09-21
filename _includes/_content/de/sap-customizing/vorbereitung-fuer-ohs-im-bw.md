Um die OHS-Datenquelle nutzen zu können, ist es zunächst notwendig, im SAP BW einige Einstellungen vorzunehmen, die im Folgenden beschrieben sind. In Abhängigkeit des verwendeten SAP-Releases kann eine OHS-Extraktion mit Hilfe eines InfoSpokes (< BI 7.0) oder mit Hilfe einer OHS-Destination (BI 7.0 oder höher) erfolgen. SAP empfiehlt ab BI 7.0 nur noch die OHS-Destination zu verwenden. Entgegen dieser Empfehlung sei an dieser Stelle empfohlen, auch unter BI 7.0 InfoSpokes zu verwenden, da sich diese in der Praxis als deutlich robuster als die OHS-Destinations gezeigt haben.

Bitte beachten Sie auch, dass die folgende Anleitung zur Anlage von InfoSpokes / OHS-Destinations nur als Einstieg gesehen werden sollte. Bitte beachten Sie auch die entsprechenden Hinweise im SAP OSS.

**RFC-Destination**

Legen Sie zuerst in der Transaktion SM59 eine RFC-Destination vom Typ *T*(=TCP/IP) an. Der Aktivierungstyp muss *Registrierbares Serverprogramm* sein. Die Programm ID kann beliebig gewählt werden, muss aber zwingend hinterlegt und eindeutig sein. Merken Sie sich diese; sie wird später wieder benötigt.

![OHS-BW-01](/img/content/OHS-BW-01.png){:class="img-responsive"}

**InfoSpokes und Prozessketten (< BI 7.0)**

Bis zum Release BI 7.0 sind InfoSpokes der zentrale Dreh- und Angelpunkt für die Open Hub Services. Falls Sie bereits ein Release 7.0 nutzen, können Sie alternativ auch in das nächste Teilkapitel springen und erfahren, wie OHS-Destinations gehandhabt werden.

In der Transaktion RSA1 erhalten Sie über das Menü *Werkzeuge -> Open Hub Service -> Infospoke* editieren den Einstieg zum Anlegen eines Infospokes. Hinterlegen Sie dort eine Datenquelle (z.B. ein ODS-Objekt oder einen Cube)

![OHS-BW-02](/img/content/OHS-BW-02.png){:class="img-responsive"}

Im Reiter Destination definieren Sie den Infospoke so, dass eine Extraktion in ein Fremdsystem möglich ist (siehe Screenshot). Insbesondere muss hier die zuvor angelegte RFC-Destination eingetragen werden.

![OHS-BW-03](/img/content/OHS-BW-03.png){:class="img-responsive"}

Anschließend müssen noch die zu übertragenden Spalten und ggfs. eine Selektion gefüllt werden. Danach kann der Spoke gespeichert und aktiviert werden.

Als letzten Schritt benötigen wir eine Prozesskette. Gehen Sie dazu von der Transaktion RSA1 in das Menü Editieren -> Prozessketten und legen Sie dort eine neue Prozesskette an. In der Variante für die Kette muss Start durch *API* angekreuzt sein. Fügen Sie dann den vorher angelegten Infospoke in die Kette ein.

![OHS-BW-04](/img/content/OHS-BW-04.png){:class="img-responsive"}

Zum Schluss müssen Sie noch die Prozesskette speichern und aktivieren.

**OHS Destinations und Data Transfer Processes (BI 7.0)**

Ab BI 7.0 wird von SAP empfohlen, keine InfoSpokes mehr zu benutzen, sondern stattdessen wie im Folgenden beschrieben, OHS-Destinationen anzulegen.

Klicken Sie in der Administrator Workbench RSA1 im linken Baum auf *Open Hub Destination*. Klicken Sie mit der rechten Maustaste auf eine InfoArea und wählen Sie im Kontextmenu *Open Hub Destination* anlegen.

![OHS-BW-05](/img/content/OHS-BW-05.png){:class="img-responsive"}

Stellen Sie im Editiermodus der Destination den Typ auf *Drittanbieter*, tragen Sie die zuvor angelegte RFC-Destination ein, speichern und aktivieren Sie die Destination.

![OHS-BW-06](/img/content/OHS-BW-06.png){:class="img-responsive"}

Klicken Sie in dem mittleren Baum der InfoAreas auf die neu angelegte Destination und wählen *Data Transfer Prozess anlegen*. Diese Aktion legt einen neuen Datentransfer und die zugehörigen Übertragungsregeln an (siehe Screenshots).

![OHS-BW-07](/img/content/OHS-BW-07.png){:class="img-responsive"}

Der DTP kann wie vom System vorgeschlagen, gespeichert und aktiviert werden (je nach Bedarf sollte vor dem Aktivieren der Extraktionstyp von Delta auf Full gestellt werden). Im OHS-Baum sind Destination, Übertragungsregeln und DTP dann wie folgt angeordnet:

![OHS-BW-08](/img/content/OHS-BW-08.png){:class="img-responsive"}

Um den Transferprocess von Xtract QV aus anstoßen zu können, brauchen wir nun noch eine Prozesskette. Gehen Sie dazu von der Transaktion RSA1 in das Menü *Editieren -> Prozessketten*. Legen Sie dort eine neue Prozesskette an. In der Variante für die Kette muss *Start durch API* angekreuzt sein. Innerhalb der Prozesskette muss dann der DTP eingefügt werden: nach der Aktivierung steht die Kette zur Ausführung bereit.

![OHS-BW-09](/img/content/OHS-BW-09.png){:class="img-responsive"}