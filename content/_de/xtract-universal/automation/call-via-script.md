---
ref: xu-script-01
layout: page
title: Aufruf via Skript
description: Extraktion mit Windows Skript aufrufen
product: xtract-universal
parent: automation
permalink: /:collection/:path
weight: 7
lang: de_DE
---

In diesem Kapitel zeigen wir, wie man eine Extraktion in einem Skript aufrufen kann.Dazu werden wir das Kommandozeilenprogramm xu.exe nutzen.

## Aufruf via Windows-Skript

In diesem Beispiel zeigen wir, wie man eine Extraktion mit dem Windows Script ausführen kann. Wir erstellen eine Batch-Datei, in der wir dann das Kommandozeilenprogramm xu.exe aufrufen.

### Variablen definieren

Wir wollen die Standardausgabe und die Standardfehlerausgabe jeweils in eine Datei schreiben, dafür definieren wir die zwei Variablen
```
:: Execute an Xtract Universal extraction using the command tool xu.exe
:: clear screen  
cls
:: Turns off the command echoing feature
@echo off
:: write the output to a file
set XUOutputfile="C:\Data\xubatch\output.txt"
::write the log to a file
set XULogfile="C:\Data\xubatch\log.txt"
```
Wir definieren jeweils eine Variable mit dem Pfad zum Kommandozeilenprogramm, dem Namen und Port des Xtract Universal Servers sowie dem Namen der auszuführenden Extraktion.

```
::set the path to the installation folder
set XUCmd="C:\Program Files\XtractUniversal\xu.exe"
:: default is also localhost, so you skip it or change it  
set XUServer=localhost
:: default port is also 8065, so you skip it or change it  
set XUPort=8065
set XUExtraction=customers 
```

### Parameter dynamisch setzen 
Unsere Extraktion hat einen Parameter namens Country, dessen Wert wir dynamisch setzen wollen. 

```
:: the extraction has a variable Country that needs a country code of lenght 2, e.g. US
:: Skip this block if you don't use variable  
set v_country=US
:: Turns on the command echoing feature
@echo on
```

### Extraktion ausführen 
Nachdem wir nun alle notwenigen Variablen definiert haben, rufen wir das Kommandozeilenprogramm mit den entsprechenden Parametern auf. 

```
:: run the command tool with the right parameters
%XUCmd% -s %XUServer% -p %XUPort% -n %XUExtraction% -o Country=%v_country% 1>%XUOutputfile% 2>%XULogfile%
```

### Rückgabewert prüfen 
Nach der Ausführung prüfen wir nun den Rückgabewert und schreiben eine entsprechende Meldung. 
Ein Rückgabewert 0 zeigt eine fehlerfreie Ausführung an. 
Ein anderer Rückgabewert zeigt, dass ein Fehler während der Ausführung aufgetreten ist. 

```
:: check the last exit code
:: 0: successful
:: else unsuccessful
@echo off 
IF %ERRORLEVEL% EQU 0 ( 
 echo extraction %XUExtraction% is successful 
) ELSE (
 echo extraction %XUExtraction% is not successful. Error Code %ERRORLEVEL%. See log for details.
)
@echo on
```

### Liste von Extraktionen ausführen

Wir können auch eine Liste von Extraktionen anlegen, welche der Reihe nach ausgeführt werden. In dem Beispiel haben wir zwei Extraktionen mit den Namen customes und materials.

Beachten Sie, dass Sie in dem unteren Beispiel die Ausgabe mit >> in die bestehende Datei anhängen.

```
@echo off 
:: create an array with many values seperated by empty space 
set extraction_list=customers materials 
:: alternative 
:: set extraction_list[0] = customers 
:: set extraction_list[1] = materials 
@echo on

for %%e in (%extraction_list%) do ( 
	%XUCmd% -s %XUServer% -p %XUPort% -n %%e 1>>%XUOutputfile% 2>>%XULogfile%
)
```

### Log der Extraktionim in die Windows-Logs schreiben
Die Extraktionen von Xtract Universal können auch in die Windows Logs aufgenommen und im Event Viewer angezeigt werden.
Mehr dazu im Knowledge Base Artikel [How to insert Xtract Universal Extraction Events into the windows logs](https://kb.theobald-software.com/xtract-universal/how-to-insert-xtract-universal-extraction-events-into-the-windows-logs-and-show-them-in-the-event-viewer)


## Aufruf via PowerShell

Power Shell ist eine mächtige Skriptsprache. In diesem Kapitel zeigen wir, wie man eine Extraktion mit Power Shell ausführen kann. Im Skript rufen wir dann das Kommandozeilenprogramm xu.exe.

### Variablen definieren
Wir wollen die Standardausgabe und die Standardfehlerausgabe jeweils in eine Datei schreiben, dafür definieren wir die zwei Variablen
```
# Execute an Xtract Universal extraction using the command tool xu.exe 
# clear screen  
clear
# write the output to a file
$XUOutputfile = "C:\Data\powershell\output.txt"
# write the log to a file
$XULogfile = "C:\Data\powershell\log.txt"
```
Wir definieren jeweils eine Variable mit dem Pfad zum Kommandozeilenprogramm, dem Namen und Port des Xtract Universal Servers sowie dem Namen der auszuführenden Extraktion.

```
# set the path to the installation folder
$XUCmd = 'C:\Program Files\XtractUniversal\xu.exe'
  
$XUServer = "localhost"
$XUPort = "8065"
$XUExtraction = "SAPSalesCube" 
```
### Parameter dynamisch setzen
Unsere Extraktion hat einen Parameter, dessen Wert wir dynamisch setzen wollen. Der Wert soll den aktuellen Monat enthalten im Format YYYYMM, z.B. 201712


```
# the extraction has a variable CalendarMonth that needs a value in the format YYYYMM, e.g. 201712

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
```

### Extraktion ausführen 
Nachdem wir nun alle notwenigen Variablen definiert haben, rufen wir das Kommandozeilenprogramm mit den entsprechenden Parametern auf. 

```
:: run the command tool with the right parameters
%XUCmd% -s %XUServer% -p %XUPort% -n %XUExtraction% -o Country=%v_country% 1>%XUOutputfile% 2>%XULogfile%
```
### Rückgabewert prüfen 
Nachdem xu.exe beendet wurde, zeigt der Rückgabewert des Programms an.
Ein Rückgabewert 0 zeigt eine fehlerfreie Ausführung an. 
Ein anderer Rückgabewert zeigt, dass ein Fehler während der Ausführung aufgetreten ist. 

Nach der Ausführung prüfen wir nun den Rückgabewert und schreiben eine entsprechende Meldung. 

```
# check the last exit code
# 0: successful
# else unsuccessful
if($LASTEXITCODE -eq 0) {           
write-host -f Green "The last command executed successfully"          
} else {           
write-host -f Red "The last execution failed with error code $LASTEXITCODE!"
write-host $errorMessage
}
```

Im Blogartikel - Mastering SAP Access with Xtract Universal and Powershell beschreiben wir noch weitere Skripte und Beispiele:
https://blog.theobald-software.com/2018/04/26/mastering-sap-access-with-xtract-universal-and-powershell/ 
