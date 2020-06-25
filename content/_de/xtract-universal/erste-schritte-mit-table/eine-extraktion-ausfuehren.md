---
ref: xu-getting-started-xu-04
layout: page
title: Eine Extraktion ausführen
description: Schritt 3 - Eine Extraktion ausführen
product: xtract-universal
parent: erste-schritte-mit-xu
permalink: /:collection/:path
weight: 3
lang: de_DE
---

Dieser Schritt ist optional. Es wird gezeigt, wie das Extraktionsergebnis in einem Webbrowser dargestellt werden kann, um sicherzustellen, dass die Extraktion ordnungsgemäß abläuft und das benötigte Ergebnis liefert.
																																							 
							

### Definieren der Extraktionseigenschaften 
																								  
																		 
																							   
										  
																																 
																					  
											   
																					   
								 

1. Wählen Sie im Hauptfenster von Xtract Universal Designer eine erstellte Tabellenextraktion aus.
2. Um die Extraktionseinstellungen zu öffnen, klicken Sie auf **[Run]**. 
![Run-Table-Extraktion](/img/content/Run-Table-Extraction-Plants.png){:class="img-responsive"}
Das Fenster "Run Extraction" wird geöffnet.
3. Passen Sie die Details der Ausführung mit Parametern an, falls erforderlich. 

### Extraktionsparameter festlegen
1. Wählen Sie im Fenster "Run Extraction" ein Parameter aus, den Sie überschreiben möchten. Markieren Sie das zugehörige Kästchen.
2. Geben Sie den Wert ein. Die eigentliche Datenanfrage erfolgt über URL:
- Vor der Änderung eines Parameters:
`http://localhost:8065?name=Plants`
- Nach Auswahl des Parameters **Rows**:
`http://localhost:8065?name=Plants&rows=100` 
![Run-Table-Extraktion-Param](/img/content/xu/xu_run_extraction_param.png)<br>
3. Führen Sie eine Extraktion in xu.exe aus. Die Einstellungen ändern sich zur Laufzeit, ein Neustart des Designers ist nicht erforderlich. 

{: .box-note }
**Hinweis** <br> Zusätzliche Parameter wie *Package size (Paketgröße)* oder *Row limit (Zeilenlimit)* usw. werden im Abschnitt [Extraktionseinstellungen](https://help.theobald-software.com/de/xtract-universal/table/extraktionseinstellungen) beschrieben. 


### Ausführen einer Extraktion in einem Browser
Klicken Sie auf **[Run in Browser]**, um eine Extraktion im Browser auszuführen. Ihr Standardbrowser öffnet sich und zeigt die Daten entsprechend den Kriterien und dem Format an. <br>

![Tabellen-Extraktion-Browser-Ergebnis](/img/content/run_ausgabe_browser_xu.png){:class="img-responsive"}

### Planen einer Extraktion

Das Planen von Extraktionen zu einem späteren Zeitpunkt ist mit dem Windows Task Scheduler möglich. Um die Task Scheduler-Funktionalität zu nutzen, führen Sie Xtract Universal über eine [Kommandozeile](../fortgeschrittene-techniken/extraktion_einplanen) aus.


