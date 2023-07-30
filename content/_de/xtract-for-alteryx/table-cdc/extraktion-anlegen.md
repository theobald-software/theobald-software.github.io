---
ref: xfa-tablecdc-01
layout: page
title: Eine Table CDC Extraktion definieren
description: Tabellen extrahieren
product: xtract-for-alteryx
parent: table-cdc
permalink: /:collection/:path
weight: 2
lang: de_DE
---

{% include _content/de/tablecdc/extraktion-anlegen.md%}

### Die Extraktion zum ersten Mal Ausführen

Führen Sie die Extraktion ein mal aus, um eine Log-Tabelle in SAP zu erzeugen, die Änderungen an der ausgewählten SAP Tabelle oder Ansicht nachverfolgt. 

- Wenn die Option **[Extract table on first run]** in der Xtract Table CDC Komponente aktiv ist, enthält die extrahierte Tabelle alle Einträge der Originaltabelle.
- Wenn die Option **[Extract table on first run]** in der Xtract Table CDC Komponente nicht aktiv ist, ist die extrahierte Tabelle leer.

{: .box-note }
**Hinweis:** Wenn Sie die Extraktion regelmäßig ausführen, wird der Inhalt der Log-Tabelle in SAP extrahiert und in die Destination geschrieben. 
Der Inhalt der Log-Tabelle in SAP wird nach jeder erfolgreichen Extraktion gelöscht. Daten, die noch nicht extrahiert wurden, werden nicht gelöscht.