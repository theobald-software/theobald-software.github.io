---
ref: xu-gooddata-03
layout: page
title: Einstellungen
description: Einstellungen
product: xtract-universal
parent: gooddata
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=gooddata-einstellungen
---

Sie können über **Extraction-Specific Settings** Einstellungen für jede Extraktion bezüglich des Ziels festlegen.


![GD-Extraction-Specific-Settings](/img/content/GD-Extraction-Specific-Settings.png){:class="img-responsive"}

Sie können sich zwischen zwei unterschiedlichen Wegen entscheiden, um Daten in GoodData zu integrieren:
     

**Upload data for ETL processing**

Verwenden Sie diese Methode, wenn Sie eigene ETL-Graphen in GoodDatas CloudConnect-Software erstellen möchten.<br>
Weitere Informationen bezüglich ETL-Erstellung nach dem Daten-Export finden Sie auf [dieser Seite](./eigenes-etl). 
                                                
**Upload file**<br>
Dateiname für die hochzuladenden Daten.
                                                

                                      
**Upload to DataSet without ETL**

Diese Methode lädt die extrahierten Daten direkt in ein GoodData DataSet.
                                      
**DataSet name**<br>
Bestimmen Sie hier den Namen des DataSet. Sie können zwischen dem SAP Objekt-Namen und dem Namen der Extraktion wählen oder auch einen eigenen Bezeichner definieren. Wenn Sie in den Verbindungseinstellungen Ihre Login-Informationen eingetragen und ein Projekt ausgewählt haben, erlaubt Ihnen die Drop-Down-Liste, schnell die Namen bereits existierender DataSets auszuwählen.
                                                
                                      
**Mode**

**Full/Create**: erstellt ein neues DataSet. Verwenden Sie diesen Modus, wenn Sie einen Export das erste Mal ausführen. Bitte beachten Sie unbedingt, dass ein bereits existierendes DataSet mit gleichem Namen sowie alle damit verknüpften Reports beim Export gelöscht werden!

**Truncate**: leert das DataSet und füllt es mit den extrahierten Datensätzen. Die Struktur des DataSet und existierende Reports bleiben dabei erhalten. Verwenden Sie diesen Modus, wenn das Ziel-DataSet bereits existiert und Sie es neu befüllen möchten.

**Incremental**: fügt die extrahierten Daten zum DataSet hinzu bzw. aktualisiert die Datensätze, für die ein passender Primärschlüssel gefunden wurde. Vorhandene Daten werden nicht gelöscht.
