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
Der folgende Abschnitt beschreibt die Anwendung der Table Komponente. 

### Eine Tabelle Finden

Wählen die SAP Tabelle oder Ansicht, die Sie mit Table CDC nachverfolgen möchten.

1. Innerhalb des Hauptfensters der Komponente klicken Sie auf  **[Search]** ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) icon). Das Fenster “Table Lookup” öffnet sich.<br>
![Table-CDC](/img/content/tablecdc/table-cdc.png){:class="img-responsive"}
2. Geben Sie in das Feld **Table name** (1) den Namen der zu extrahierenden SAP Tabelle oder Ansicht ein. Verwenden Sie Wildcards (*), falls nötig.<br>
![Look-Up-Report](/img/content/table/table_look-up.png){:class="img-responsive"}
3. Klicken Sie auf **[Search]** ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) icon) (2). Die Suchergebnisse werden im Vorschaufenster angezeigt.
4. Wählen Sie die gewünschte Tabelle (3) aus und klicken Sie auf **[OK]** (4).

Alle relevanten Metadaten der Tabelle werden aus SAP abgerufen.
Die Anwendung kehrt zum Hauptfenster der Komponente zurück.

### Eine Table CDC Extraktion Einrichten

Richten Sie die Table CDC Komponente ein, um Daten zu extrahieren.

1. Wählen Sie die Spalten aus, die Sie extrahieren möchten.<br> ![Table-CDC-Setup](/img/content/tablecdc/table-cdc-kna1.png){:class="img-responsive"}
2. Optional: Wenn Sie bei der ersten Ausführung der Extraktion nicht die komplette SAP-Tabelle extrahieren möchten, deaktivieren Sie die Option **[Extract table on first run]**.
3. Klicken Sie auf **[Load Preview]**, um die ersten 1000 Datensätze der SAP Tabelle anzuzeigen.<br>
Die Spalte IUUC_OPERAT_FLAG zeigt an, ob die Daten eingefügt (I), aktualisiert (U) oder gelöscht (D) wurden.
4. Klicken Sie auf **[OK]**, um Ihre Eingaben zu bestätigen.
5. Führen Sie die Extraktion aus, um eine Log-Tabelle in SAP zu erzeugen, die Änderungen an der ausgewählten SAP Tabelle oder Ansicht nachverfolgt, siehe []().

{: .box-note }
**Hinweis:** Bevor Sie eine Extraktion löschen, klicken Sie ind er Table CDC Komponente auf **[Delete CDC resources]**, um die Log-Tabelle und alle dazugehörigen Elemente aus Ihrem SAP-System zu löschen. 


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
