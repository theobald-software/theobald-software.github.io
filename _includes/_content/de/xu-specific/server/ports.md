Der Xtract Universal Server läuft als Windows-Service und der Hauptprozess von diesem Service ist `C:\Program Files\XtractUniversal\XtractService.exe`. 

*xtractService.exe* startet zwei Listener-Prozesse und lauscht standardmäßig auf folgenden Ports:

Listener-Prozess| Standardport
------------ | -------------
*XtractWebServer.exe* 1 | 8065 (HTTP) und 8165 (HTTPS)
*XtractConfigServer.exe* | 8064

Die Server-Prozesse nutzen verschiedene Ports für die Kommunikation. Der Webserver nimmt Extraktionsaufrufe über HTTP(S) entgegen. 
Der Configuration-Server kommuniziert mit dem Xtract Universal Designer über einen dedizierten Port. <br>

Sollten manuelle Anpassungen der Portnummer notwendig sein, erfragen Sie die korrekten Ports bitte bei Ihrem Netzwerk-Team.

- `*\config\server\config\general.json`
![configuration-server-general-json](/img/content/configuration-server-general-json.png){:class="img-responsive"}
- `*\config\server\web\general.json`
![web-server-general-json](/img/content/web-server-general-json.png){:class="img-responsive"}

{: .box-note }
**Hinweis** Admin-User-Rechte sind für die Änderungen der Config-Dateien notwendig.

{: .box-warning }
**Warnung! Änderung der Standardports**<br>
Nach der manuelle Anpassung der Standardports, startet der Xtract Universal Dienst nicht.<br>
Die hinterlegten Ports sind bereits vergeben und müssen in den nachfolgenden Config-Dateien angepasst werden.<br>
`C:\Program Files\XtractUniversal\config\server\config\general.json`<br>
`C:\Program Files\XtractUniversal\config\server\web\general.json`

