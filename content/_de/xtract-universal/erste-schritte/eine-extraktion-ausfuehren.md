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


Dieser Schritt ist optional. Hier wird eine Exraktion direkt im Xtract Universal Designer durchgeführt, 
sowie deren Laufzeitparameter und andere Optionen definiert.


### Extraktion ausführen 			 

Um das "Run Extraction" Fenster zu öffnen, wählen Sie eine Extraktion aus der Liste der 
Extraktionen im Hauptfenster aus und klicken Sie auf **Run**. <br>
Die **Run**-Funktion ist in der Menüleiste, den GUI-Buttons oder über Rechtsklick auf die Extraktion verfügbar.

![Run-Table-Extraktion](/img/content/xu/xu_run_extraction_dialogue.png){:class="img-responsive"}
Das "Run Extraction" Fenster beinhaltet folgende Abschnitte:
- General Info (1)
- Runtime parameters (2)
- Extraktions-URL und Kommandozeile (xu.exe) (3)
- Logs, xu.exe und Output (4)
- Run, Abort und Close (5) 


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

Eine Beschreibung der Tabs "Extraction", "Source" und "Custom" befindet sich unter [Extraktionsparameter](../advanced-techniques/extraction-parameters).

#### Beispiel
1. Um Parameter zu überschreiben, wählen Sie die entsprechende Checkbox aus.
2. Tragen Sie den neuen Wert ein und bestätigen Sie die Eingabe mit **Eingabe**. Die Änderungen werden in der URL-Box und der Kommandozeile xu.exe angezeigt.
- Vor der Parameteränderung
`http://localhost:8065?name=Plants`
- Nach der Parameteränderung in **rows**:
`http://localhost:8065?name=Plants&rows=100` 

![Run-Table-Extraction-param](/img/content/xu/xu_run_extraction_param.png){:class="img-responsive"}

{: .box-note }
**Hinweis:** Zusätzliche Parameter wie *Package size*, *Row limit*, etc. sind in [Extraktionseinstellungen](./../table/extraktionseinstellungen) erläutert.


### Extraktions-URL und Kommandozeile (3)
Der Inhalt dieser Felder ändert sich entsprechend der Einstellungen in den "Runtime Parametern".
Die Änderungen werden aktiv, wenn die Einstellungen der "Runtime Parameter" entweder durch **[Eingabe]** bestätigt werden oder indem Sie nach Änderung der Parameter wieder die Zeile anwählen. 

#### URL
Hier wird die URL für die Extraktion in einem Browser angezeigt.
Kopieren Sie die URL mit dem Button rechts und geben Sie sie in einem Webbrowser Ihrer Wahl ein.
Dieses Vorgehen entspricht der "Run in browser"-Funktionalität, die über Rechtsklick auf eine Extraktion in der Liste der Extraktionen verfügbar ist.

![Table-Extraction-Browser-Result](/img/content/run_ausgabe_browser_xu.png){:class="img-responsive"}

#### xu.exe 
Hier wird der Befehl für die xu.exe Kommandozeile angezeigt.
Dieser Befehl ermöglicht es, Extraktionen mit einem Windows Task Scheduler zu planen.
Mehr Informationen bzgl. des Planens einer Extraktion mit xu.exe finden Sie unter [Exraktion einplanen](../fortgeschrittene-techniken/extraktion_einplanen).
Die Parameter "-s" (Server der Extraktion), "-p" (Listening-Port des Xtract Universal Servers) und "-n" (Name der Exraktion) werden für jede Extraktion generiert.

-------------------------------------------------
### Logs xu.exe und Output (4) 
Wenn eine Extraktion durchgeführt wird, werden hier Informationen über die Extraktion angezeigt.

#### Log 
Im "Log"-Tab werden die Protokolle der Extraktion in Echtzeit angezeigt.
Solange die Checkbox "Auto scroll to the end" aktiviert ist, fokussiert sich das Ausgabefenster automatisch auf das letzte Protokoll.


#### xu.exe 
Im "xu.exe"-Tab werden die Befehle der xu.exe Kommandozeile angezeigt. 
 
#### Output 
Im "Output"-Tab werden die Ergebnisse der Extraktion in max. 500 Zeilen angezeigt.
Die Anzahl der anzuzeigenden Zeilen kann über die Boxen "Display rows from line" angepasst werden.

![Run-Extraction-Output](/img/content/xu/xu_run_extraction_output.png){:class="img-responsive"}

### Run, Abort und Close (5) 
**[Run]** startet die Extraktion, **[Abort]** bricht sie ab und **[Close]** schließt das Fenster.


