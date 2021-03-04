---
ref: xu-getting-started-03
layout: page
title: 3. Eine Extraktion ausführen
description: Schritt 3 - Eine Extraktion ausführen
product: xtract-universal
parent: erste-schritte
permalink: /:collection/:path
weight: 3
lang: de_DE
progressstate: 5

---

Der Extract Universal Designer bietet die Möglichkeit Extraktionen auszuführen, indem Sie
Laufzeitparameter und andere Optionen übergeben.

### Extraktion ausführen 			 

Wählen Sie eine Extraktion aus der Liste der Exraktionen aus und klicken Sie auf **[Run]**, um das Fenster "Run Extraction" zu öffnen.
Alternativ öffnen Sie es per Rechtsklick auf die Extraktion oder durch die Menüleiste "Extraction".


![Run-Table-Extraktion](/img/content/xu/xu_run_extraction_dialogue.png){:class="img-responsive"}

Das "Run Extraction" Fenster beinhaltet:
- General Info (1)
- Runtime parameters (2)
- URL und Kommandozeile (3)
- Logs und Output (4)
- Buttons (5) 


### General Info (1)

Info Objekt |Details
------------ | ------------ |
Extraction name  | Name der Exraktion |
Source | Information über die Quelleigenschaften (Name, Host, Client, Benutzername, Instanznr., Sprache) |
Destination | Name of der Destination (Name, Typ, Pull Destination)|
Execution start | Zeitstempel für den Beginn der Extraction |
Time elapsed | Vergangene Zeit seit Beginn der Extraktion |
Rows extracted| Number of extracted rows |
Status | Status der Extraktion |
Duration |Dauer der Extraktion |

### Runtime parameters (2)

Die Tabs "Extraction", "Source" und "Custom" beinhalten die [Extraktionsparameter](../advanced-techniques/extraction-parameters) der Extraktion.
Wenn diese Parameter geändert werden, passen sich auch automatisch *URL und Kommandozeile (3)* entsprechend an.

#### Beispiel
1. Wählen Sie eine Checkbox aus, um einen Parameter zu überschreiben.
2. Tragen Sie den neuen Wert ein und bestätigen Sie ihn über die Eingabetaste.
- Extraktions-URL vor der Parameteränderung<br>
`http://localhost:8065?name=Plants`
- Extraktions-URL nach der Parameteränderung in **rows**:<br>
`http://localhost:8065?name=Plants&rows=100` 

![Run-Table-Extraction-param](/img/content/xu/xu_run_extraction_param.png){:class="img-responsive"}

{: .box-note }
**Hinweis:** Zusätzliche Parameter wie **Package size**, **Row limit**, etc. sind in [Extraktionseinstellungen](./../table/extraktionseinstellungen) beschrieben.


### URL und Kommandozeile (3)
In **URL** und **xu.exe** wird ein generierter String angezeigt, der sich automatisch aktualisiert wenn *Runtime Parameter(1)* geändert werden.
Benutzen Sie diese Strings, um eine Extraktion auch außerhalb vom Xtract Universal Designer durchzuführen.

#### URL
1. Kopieren Sie die URL mit dem Button rechts.
2. Geben Sie die URL in einem Webbrowser Ihrer Wahl ein.
3. Die Extraktion wird ausgeführt und das Ergebnis im Browser angezeigt. 
	
Dieses Vorgehen entspricht der "Run in browser"-Funktionalität, die über Rechtsklick auf eine Extraktion verfügbar ist.

![Table-Extraction-Browser-Result](/img/content/run_ausgabe_browser_xu.png){:class="img-responsive"}

#### xu.exe 
Der in **xu.exe** angezeigte Befehl ermöglicht es, Extraktionen mit einem Windows Task Scheduler zu planen.
Mehr Informationen bzgl. des Planens einer Extraktion mit **xu.exe** finden Sie unter [Exraktion einplanen](../fortgeschrittene-techniken/extraktion_einplanen).

Die Parameter "-s" (Server der Extraktion), "-p" (Listening-Port des Xtract Universal Servers) und "-n" (Name der Exraktion) werden für jede Extraktion generiert.

### Logs und Output (4) 
Wenn eine Extraktion ausgeführt wird, werden hier aktuelle Informationen angezeigt.

#### Log 
Im *Log* Tab werden die Protokolle der Extraktion in Echtzeit angezeigt.
Solange die Checkbox **Auto scroll to the end** aktiv ist, wird automatisch zum letzten Protokoll gescrollt.

#### xu.exe 
Im *xu.exe* Tab werden die Befehle der xu.exe Kommandozeile angezeigt. 
 
#### Output 
Im *Output* Tab werden die Ergebnisse der Extraktion bis zu max. 500 Zeilen angezeigt.
Die Anzahl der anzuzeigenden Zeilen kann über die Boxen **Display rows from line** angepasst werden.

![Run-Extraction-Output](/img/content/xu/xu_run_extraction_output.png){:class="img-responsive"}

### Run, Abort und Close (5) 
**[Run]** startet die Extraktion, **[Abort]** bricht sie ab und **[Close]** schließt das Fenster.


