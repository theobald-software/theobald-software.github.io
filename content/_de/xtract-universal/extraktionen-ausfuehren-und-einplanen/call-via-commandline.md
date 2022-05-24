---
ref: xu-commandline-01
layout: page
title: Aufruf via Kommandozeile
description: Aufruf via Kommandozeile
product: xtract-universal
parent: extraktionen-ausfuehren-und-einplanen
permalink: /:collection/:path
weight: 3
lang: de_DE
---
Extraktionen können über die nachfolgenden Kommandozeilen-Tools ausgeführt werden:

| Kommandozeilen-Tool | Betriebssystem  | Verzeichnis |
|---|:---|---|
| `xu.exe` | Windows  | Das Kommandozeilen-Tool befindet sich nach der Installation in folgendem Programmverzeichnis (default): `C:\Program Files\XtractUniversal\xu.exe`. |
| `xu.elf` | Unix-, Linuxumgebung | [Download-Link](https://cdn-files.theobald-software.com/download/XtractUniversal/xu.elf.tar.gz) der Linux-Version des Kommandozeilen-Tools. |

{: .box-note }
**Hinweis:** Beide Versionen unterscheiden sich nicht in ihrer Funktionalität und können als eigenständige Programme auf beliebigen Rechnern kopiert und ausgeführt werden.<br> Achten Sie darauf, dass der Host des Xtract Universal Servers im Netzwerk erreichbar ist. 

### Extraktion aufrufen
Das Kommandozeilen-Tool *xu.exe* verbindet sich zu einem Xtract Universal Server (Service) und startet eine Extraktion mit den folgenden Laufzeitparametern:

| Laufzeit-<br>parameter   | Beschreibung | Syntax  |
|:---:|:---|:---|
| -h        |  Eine Kurzdokumentation des Kommandozeilen-Tools  |   `C:\Program Files\XtractUniversal>xu.exe -h` |
| -n   |  Name der Extraktion  | `C:\Program Files\XtractUniversal\xu.exe -n <name>` |
|   -s       |  Der Name oder die IP des Rechners, auf dem der Xtract Universal Service läuft. Der Standardwert ist localhost. Den aktuellen Wert finden Sie im "Run" Fenster des [Designers](../erste-schritte/designer-overview#hauptmenüleiste-1).|  `xu.exe -n <name> -s <host>`|
| -p    | Der Port, unter dem der Xtract Universal Service läuft. Der Standardwert ist 8065. <br> Den aktuellen Wert finden Sie im "Run" Fenster des [Designers](../erste-schritte/designer-overview#hauptmenüleiste-1)  | `xu.exe -n <name> -s <host> -p <port>` |
|  -o     | Parameter, deren Werte beim Ausführen der Extraktion gesetzt werden sollen. <br> Es können mehrere Parameter verwendet werden. | `xu.exe -n <name> -s <host> -p <port> -o "param1=<wert1>" -o "param2=<wert2>"`|
|  -e  | Verwendet [Transport Layer Security (TLS)](https://docs.microsoft.com/en-us/windows/win32/secauthn/transport-layer-security-protocol) (1.2 oder höher) für die Transportsicherheit. |   `xu.exe  -n <name> -s <host> -p <port> -e`|
| -a    |Bricht alle aktuell laufenden Instanzen der angegebenen Extraktion ab. | `xu.exe -a` |
|  -c   | Löscht den Result-Cache (Ergebnis Cache) für die angegebene Extraktion und deren Optionen.<br> Dies gilt nur für [Pull-Destinationen](../destinationen#pull--und-push-destinationen). | `xu.exe -c` |  

#### Beispiele
Rufen Sie das Kommandozeilen-Tool in folgender Form auf, um eine Extraktion auf dem Xtract Universal Server zu starten:
```
    xu.exe -n MaterialText
    xu.exe -n MaterialText -s 10.0.0.42 -p 80 -o "rows=1000"
    xu.exe -n MaterialText -s xusrv.corp.local -p 443 -o "rows=1000" -o "SPRAS=D" -e
    xu.exe -n MaterialText -a
    xu.exe "http://localhost:8065/?name=MaterialText&rows=1000"
```

### Rückgabewert 
Wenn eine Operation erfolgreich abgeschlossen wurde, gibt das Programm den Wert *0* zurück. Im Falle eines Fehlers, gibt das Programm einen der folgenden Codes zurück:

|HTTP Status-Codes	|Beschreibung|
|---|---|
|404 |	Extraktion existiert nicht|
|1001|	Ein undefinierter Fehler ist aufgetreten|
|1002|	Die Datei konnte nicht gefunden werden|
|1013|	Ungültige Eingabedaten|
|1014|	Die Anzahl der Argumente ist ungültig|
|1015|	Der Name des Parameters ist unbekannt|
|1016|	Das Argument ist ungültig|
|1040|	Timeout-Fehler: Wartezeit auf HTTP-Antwort des Kommandozeilen-Tools überschritten |
|1053|	Die Extraktions-URL ist falsch |
|1087|	Der Parameter ist ungültig |

### Standardausgabe und Standardfehlerausgabe
Die Ausgabe ist abhängig vom Destinationstyp der Extraktion. Bei einem erfolgreichen Aufruf wird der Rückgabewert *0* ausgegeben.

#### Standardausgabe bei Pull-Destinationen
Bei [Pull-Destinationen](../destinationen#pull--und-push-destinationen) (z.B. HTTP-CSV, HTTP-JSON, etc.) werden die extrahierten Daten im entsprechenden Format (z.B. CSV, JSON, etc.) in die Standardausgabe (stdout) geschrieben.

#### Standardausgabe bei Push-Destinations
Bei [Push-Destinationen](../destinationen#pull--und-push-destinationen) wird standardmäßig das [Log der Extraktion](../logging/log-zugriff-ueber-designer#extraktions-logs) im CSV-Format in die Standardausgabe (stdout) geschrieben. 

#### Standardfehlerausgabe
Log- und Fehlermeldungen werden in die Standardfehlerausgabe (stderr) geschrieben.

<!---
### Weitere Optionen zum Aufruf einer Extraktion

#### Synchroner vs. asynchroner Aufruf
Ein synchroner Aufruf einer Extraktion ist ein blockierender Aufruf. D.h. die Anwendung wartet, bis die Extraktion beendet wird und ein Rückgabecode zurückgegeben wird.

Ein asynchroner Aufruf einer Extraktion ist ein nichtblockierender Aufruf. D.h. es wird ein eindeutiger Zeitstempel der aufgerufenen Extraktion zurückgegeben und die Anwendung muss nicht warten, bis die Extraktion beendet wird. Mit dem eindeutigen Zeitstempel der aufgerufenen Extraktion kann z.B. der Status der Extraktion überprüft werden. 

|Beschreibung	|Syntax|
|:---|:---|
|Log-Ausgabe einer Extraktion unterdrücken (nur bei synchroner Extraktion mit Push-Destinationen) |`xu.exe -o quiet-push=true`|
|Aufruf synchroner Extraktion (Standard)|	`xu.exe -o wait=false`|
|Rückgabe des Zeitstempels einer Extraktion |`xu.exe -n <name> -o wait=false 1>>false_output1.txt 2>>false_output2.txt`|

{: .box-tip }
**Tipp:** Der XU-Server verfügt über weitere Funktionalitäten wie z.B. den Status eines (asynchronen) Extraktionsaufrufs prüfen, Logs oder Metadaten einer Extraktion abfragen usw. Diese Funktionalitäten werden nicht über das Kommandozeilen-Tool, sondern nur über [Webservices](./call-via-webservice#weitere-webservices) aufgerufen.
--->

### Basic Authentication via Kommandozeile

Das Kommandozeilen-Tool unterstützt die Ausführung von Extraktionen mit Basic Authentication.

Wenn Sie Extraktionen einplanen, indem Sie das Kommandozeilen-Tool ausführen, können Benutzerdaten für Basic Authentication als Argumente übergeben werden.
Während der definierte Xtract Universal Benutzername (Custom User) direkt übergeben werden kann, muss das Custom User Passwort in einer Base 64-Encoding Datei abgelegt sein, auf die das Kommandozeilen-Tool zugreifen kann.
Das Dateiformat kann frei gewählt werden, z.B. .txt, .json, .xml, und unterliegt keinen Restriktionen.

1. Erstellen Sie eine Passwort-Datei mit dem folgenden Befehl: `xu.exe -f <path to the location and name of the file>`, z.B. `xu.exe -f "C:\temp\<name of the password file>"`.<br>
Der Windows-Benutzer muss ausreichende Zugriffsrechte auf den Dateiordner besitzen. Die Passwort-Datei muss nicht im Vorfeld im Windows Explorer erstellt werden. 
![Windows Security Settings](/img/content/xu/security_settings_windows_folder.png){:class="img-responsive"}
2. Sie werden aufgefordert das korrespondierende Custom User Passwort einzugeben. Es muss mindestens 8 Zeichen lang sein.
3. Übergeben Sie den Benutzer und den Pfad der Passwort-Datei als Argumente im Kommandozeilen-Tool, z.B. <br>
`xu.exe -s todd.theobald.local -p 8165 -e -n MSEG -u Alice -b "C:\temp\password_custom_user"`.
4. **OPTIONAL:** Achten Sie beim Einplanen der Extraktionen darauf, dass der User-Kontext des Tasks ausreichende Zugriffsrechte auf die erstellte Passwortdatei besitzt.
![Windows Security Settings](/img/content/xu/security_settings_windows_task_scheduler.png){:class="img-responsive"}

{: .box-note }
**Note:** Für mehr Informationen, verwenden Sie den Befehl `xu.exe -h`. 

#### Weiterführende Links
- [Extraktion via Skript ausführen](https://kb.theobald-software.com/xtract-universal/call-extraction-via-script)
- [Extraktion via Scheduler ausführen](./call-via-scheduler)
- [Extraktion via ETL-Tool ausführen](./call-via-etl)
- [Creating extractions without using the Xtract Universal designer GUI](https://kb.theobald-software.com/xtract-universal/using-config-command-line-tool)
- [Execute & Schedule All Xtract Universal Extractions](https://kb.theobald-software.com/xtract-universal/execute_all_defined_xu_extractions)