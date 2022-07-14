---
ref: bc-getting-started-03
layout: page
title: Schritt 4 - Eine Extraktion ausführen
description: Schritt 4 - Eine Extraktion ausführen
product: board-connector
parent: erste-schritte
permalink: /:collection/:path
weight: 4
lang: de_DE
progressstate: 5
---

Dieser Schritt ist optional. Es wird gezeigt, wie das Extraktionsergebnis in einem Webbrowser dargestellt werden kann, um sicherzustellen, dass die Extraktion ordnungsgemäß abläuft und das benötigte Ergebnis liefert.
																																							 
							

### Definieren der Extraktionseigenschaften 			 

1. Wählen Sie im Hauptfenster von Board Connector Designer eine erstellte Tabellenextraktion aus.
2. Um die Extraktionseinstellungen zu öffnen, klicken Sie auf **[Run]**. 
![Extraction-Run](/img/content/BC-Run-Table-Extraction-Plants.png){:class="img-responsive"}
Das Fenster "Run Extraction" wird geöffnet.
3. Passen Sie die Details der Ausführung mit Parametern an, falls erforderlich. 

### Extraktionsparameter festlegen
1. Wählen Sie im Fenster "Run Extraction" ein Parameter aus, den Sie überschreiben möchten. Markieren Sie die zugehörige Checkbox.
2. Geben Sie den Wert ein. Die eigentliche Datenanfrage erfolgt über URL:
- Vor der Änderung eines Parameters:
`http://localhost:8097/?name=random_table`
- Nach Auswahl des Parameters **Rows**:
`http://localhost:8097/?name=random_table&rows=100`

3. Klicken Sie auf **[Run in Browser]**, um die Extraktion im Browser auszuführen. Die Einstellungen ändern sich zur Laufzeit, ein Neustart des Designers ist nicht erforderlich. 

{: .box-note }
**Hinweis** <br> Zusätzliche Parameter wie *Package size (Paketgröße)* oder *Row limit (Zeilenlimit)* usw. werden im Abschnitt [Extraktionseinstellungen](https://help.theobald-software.com/de/xtract-universal/table/extraktionseinstellungen) beschrieben. 


![Table-Extraction-Browser-Result](/img/content/run_ausgabe_browser_bc.png){:class="img-responsive"}
