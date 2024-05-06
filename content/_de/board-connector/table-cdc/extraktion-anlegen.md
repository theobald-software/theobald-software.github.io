---
ref: bc-tablecdc-01
layout: page
title: Eine Table CDC Extraktion definieren
description: Tabellen extrahieren
product: board-connector
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
2. Klicken Sie auf **[Run]**. Das Fenster "Run Extraction" öffnet sich.
3. Klicken Sie auf **[Run in Browser]**, um die Extraktion auszuführen.

Die Log-Tabelle in SAP ist jetzt angelegt und für die Table CDC Komponente verfügbar.

{: .box-note }
**Hinweis:** Wenn Sie die Extraktion regelmäßig ausführen, wird der Inhalt der Log-Tabelle in SAP extrahiert und in die Destination geschrieben. 
Der Inhalt der Log-Tabelle in SAP wird nach jeder erfolgreichen Extraktion gelöscht. Daten, die noch nicht extrahiert wurden, werden nicht gelöscht.

{% include _content/de/tablecdc/table-cdc-loeschen.md%}
