---
ref: xu-advanced-techniques-09
layout: page
title: Aufruf mit Kommandozeile
description: Aufruf mit Kommandozeile
product: xtract-universal
parent: fortgeschrittene-techniken
permalink: /:collection/:path
weight: 9
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=aufruf-mit-kommandozeile
---

Im Installationsordner (z.B. C:\Program Files\XtractUniversal) finden Sie das Programm xu.exe, welches zur Ausführung einer Extraktion verwendet werden kann.<br>
```
"C:\Program Files\XtractUniversal\xu.exe" http://localhost:8065/?name=MyExtractionName
```

Sie können das Tool unter anderem verwenden, um die Extraktionen über eine Aufgabenplannung (Task Scheduler) auszuführen. In unserem [Blog][http://www.theobald-software.com/blog/2013/01/28/how-to-schedule-xtract-universal-extractions-with-the-windows-task-scheduler-to-load-data-from-sap/) finden Sie ein Beispiel dazu (auf Englisch). 

**Variablen**

Bei der Nutzung von Variablen müssen Sie dem Zeichen (&) ein Escape-Zeichen (^) voranstellen: 
```
"C:\Program Files\XtractUniversal\xu.exe" http://localhost:8065/?name=MyExtractionName^&Variable=Value
```

Wird die Extraktion über die Parameter aufgerufen, können über den -o Parameter beliebig viele Variablen hinzugefügt werden:<br>
-o variablenName=variablenWert -o variablenName2=variablenWert2 ...

**Vordefinierte Variablen**

Vordefinierte Variablen finden Sie unter [Extraktionsparameter](./extraktionsparameter). 

**Rückgabe**

Wenn eine Operation erfolgreich abgeschlossen wurde, gibt das Programm den Wert 0 zurück.<br>
Im Falle eines Fehlers, gibt es einen der folgenden Codes zurück:

|HTTP Statuscodes | Beschreibung |
|:----|:---| 
|404 | Extraktion existiert nicht |
|1001 | Ein undefinierter Fehler ist aufgetreten |
|1002 | Die Datei konnte nicht gefunden werden|     
|1013 | Ungültige Eingabedaten |
|1014 | Die Anzahl der Argumente ist ungültig |
|1015 | Der Name des Parameters ist unbekannt |
|1016 | Das Argument ist ungültig |
|1053 |  Die URL ist falsch |
|1087 | Der Parameter ist ungültig |

**Parameter**

-h        Gibt die Hilfe-Seite aus

-s        Server für die Extraktion

-p        Listener-Port des Xtract Universal Servers

-n        Name der Extraktion

-o        Fügt eine Variable hinzu

**Beispiele**
```
xu.exe http://localhost:8065/?name=MyExtractionName^&rows=200
xu.exe -s localhost -p 8065 -n MyExtractionName -o rows=200
xu.exe -s localhost -p 8065 -n MyExtractionName
xu.exe -h
```

**Aufruf in PowerShell** 

Das folgende Beispiel zeigt, wie man eine Extraktion in PowerShell mit Hilfe des Kommandotools xu.exe aufrufen kann. 
Im Beispiel hat die Extraktion hat eine dynamische Variable, welche im Skript gesetzt werden kann. 

Siehe unser [Blog](https://blog.theobald-software.com/2018/04/26/mastering-sap-access-with-xtract-universal-and-powershell/) über Xtract Universal und PowerShell für weitere Skripte und Beispiele. 

<details>
<summary>Hier klicken um PowerShell Script anzuzeigen</summary>
{% highlight javascript %}
# Execute an Xtract Universal extraction using the command tool xu.exe in a powershell script
# the extraction has a variable CalendarMonth that needs a value in the format YYYYMM, e.g. 201712
  
clear
# write the output to a file
$XUOutputfile = "C:\Data\powershell\output.txt"
# write the log to a file
$XULogfile = "C:\Data\powershell\log.txt"
  
# set the path to the installation folder
$XUCmd = 'C:\Program Files\XtractUniversal\xu.exe'
  
$XUServer = "localhost"
$XUPort = "8065"
$XUExtraction = "SAPSalesCube"
  
  
# BEGIN OF BLOCK FOR SETTING VARIABLE
# Skip this block if you don't use variable
  
# generate the calender month from the current date to be used as a variable
# e.g. Tuesday, December 19, 2017 10:40:32 AM
$myyear = (Get-Date -format "yyyy")
$mymonth = (Get-Date -format "MM")
# 201712
$myCalendarMonth = "$myyear$mymonth"
# another option Get-Date -format "yyyyMM"
  
# just if you use variables
# the extraction has a variable CalendarMonth, its value has the format YYYYMM
# set the variable for calendar month e.g. 201712
 
  
# END OF BLOCK FOR SETTING VARIABLE
  
  
# define error message
$errorMessage = @'
If the command completes an operation successfully, it returns an exit code of zero (0).
In case of an error, it will return one of the following (http status) codes:
HTTP Statuscodes (e.g. 404 when the extraction does not exist)
1001    An undefined error occured
1002    Could not find the specified file      
1013    Invalid input data
1014    The number of arguments is invalid
1015    The parameter name is unknown
1016    The argument is not valid
1053    Something is wrong with your URL
1087    The parameter is invalid
  
check the online help for further information
http://help.theobald-software.com/Xtract-Universal-EN/default.aspx?pageid=run-from-a-command-line
'@
  
  
# run the command tool with the right parameters
$res = &$XUCmd -s $XUServer -p $XUPort -n $XUExtraction -o CalenderMonth=$myCalenderMonth 1>$XUOutputfile 2>$XULogfile
  
# check the last exit code
# 0: successful
# else unsuccessful
if($LASTEXITCODE -eq 0) {
           
write-host -f Green "The last command executed successfully"          
} else {
           
write-host -f Red "The last execution failed with error code $LASTEXITCODE!"
write-host $errorMessage
}
{% endhighlight %}
</details>

Siehe auch <br> 
[How to insert Xtract Universal Extraction Events into the windows logs and show them in the Event Viewer](https://my.theobald-software.com/index.php?/Default/Knowledgebase/Article/View/148/0/how-to-insert-xtract-universal-extraction-events-into-the-windows-logs-and-show-them-in-the-event-viewer) (English)
