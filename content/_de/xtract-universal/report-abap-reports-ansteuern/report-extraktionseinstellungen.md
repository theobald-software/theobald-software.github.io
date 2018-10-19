---
ref: xu-abap-reports-05
layout: page
title: Extraktionseinstellungen
description: Extraktionseinstellungen
product: xtract-universal
parent: report-abap-reports-ansteuern
permalink: /:collection/:path
weight: 5
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=report-extraktionseinstellungen
---

Über den *Extraction Settings*-Link im Editor öffnet sich das Einstellungsfenster.

![Report-Extraction-Settings](/img/content/Report-Extraction-Settings.jpg){:class="img-responsive"} 

**Use Batch**<br>
definiert, ob der Report im Hintergrund ausgeführt werden soll. Das ist vor allem dann sinnvoll, wenn der Report eine ALV-Ausgabe hat.


**Batch Timeout**<br>
definiert die Zeitspanne in Sekunden, wie lange der Report im Hintergrund maximal laufen darf, bevor der Task abbricht.


**Batch Job Name**<br>
definiert den Namen des Jobs im SAP, unter dem der Report im Hintergrund ausgeführt wird.


**Spool Destination**<br>
definiert das Ausgabegerät (den Drucker) für den Spooljob.


**Custom Function**<br>
definiert den Namen des Funktionsbausteins, falls er vom Standardnamen (Z_XTRACT_IS_REMOTE_REPORT) abweicht.


**Automatic Column Detection**<br>
schaltet den Automatik-Mechanismus ein. In diesem Fall versucht die Komponente, die Spalten des Reports automatisch zu finden. Das manuelle Setzen der Spalten entfällt dann.


**Pattern for header detection**<br> 
Definiert ein Suchmuster (z.B. *header*) um den Tabellen-Kopf zu erkennen. Ist nur aktiv wenn Automatic Column Detection aktiviert ist.

**Pattern for skipping rows**<br> 
Definiert einen regulären Ausdruck als Suchmuster, um Datensätze aus dem Ergebnis zu entfernen. <br>
Mit dieser Eigenschaft können Sie z.B. die Kopfzeilen löschen, welche sich bei manchen Reports wiederholen.<br>
Um Datensätze zu entfernen, welche z.B. die Begriffe DESCTEXT oder LONGTEXT enthalten, setzen Sie den Wert DESCTEXT | LONGTEXT. Weitere Infos zu regulären Ausdrücken finden Sie in der [Microsoft Online Hilfe](https://docs.microsoft.com/de-de/dotnet/standard/base-types/regular-expression-language-quick-reference).