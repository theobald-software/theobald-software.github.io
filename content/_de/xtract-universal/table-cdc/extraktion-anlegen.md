---
ref: xu-tablecdc-01
layout: page
title: Eine Table CDC Extraktion definieren
description: Tabellen extrahieren
product: xtract-universal
parent: table-cdc
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=eine-table-extraktion-definieren
---
{% include _content/de/tablecdc/extraktion-anlegen.md%}


### Die Extraktion zum ersten Mal Ausführen

Führen Sie die Extraktion ein mal aus, um eine Log-Tabelle in SAP zu erzeugen, die Änderungen an der ausgewählten SAP Tabelle oder Ansicht nachverfolgt. 

1. Im Hauptfenster des Designers wählen Sie die Extraktion aus.
2. Optional: Klicken Sie auf **[Destination]**, um der Extraktion die Destination zuzuweisen, in die Sie die Daten schreiben möchten (1).<br> 
![Table-CDC-Extraction](/img/content/tablecdc/table-cdc-extraction.png){:class="img-responsive"}
3. Klicken Sie auf **[Run]** (2). Das Fenster "Run Extraction" öffnet sich.<br>
![Table-CDC-Run](/img/content/tablecdc/table-cdc-run.png){:class="img-responsive"}
4. Klicken Sie auf **[Run]** (3), um die Extraktion auszuführen.
5. Wenn die Extraktion erfolgreich war, ändert sich der Status im Abschnitt *General Info* zu "finished successfully".<br>
Wenn ein Fehler aufgetreten ist, finden Sie nähere Informationen im Abschnitt *Log*.

Die Log-Tabelle in SAP ist jetzt angelegt und für die Table CDC Komponente verfügbar.
Die extrahierte SAP-Tabelle ist jetzt in Ihrer Destination angelegt.

{: .box-note }
**Hinweis:** Wenn Sie die Extraktion regelmäßig ausführen, wird der Inhalt der Log-Tabelle in SAP extrahiert und in die Destination geschrieben. 
Der Inhalt der Log-Tabelle in SAP wird nach jeder erfolgreichen Extraktion gelöscht. Daten, die noch nicht extrahiert wurden, werden nicht gelöscht.

{% include _content/de/tablecdc/table-cdc-loeschen.md%}
