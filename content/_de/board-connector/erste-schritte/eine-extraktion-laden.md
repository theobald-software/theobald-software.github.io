---
ref: bc-getting-started-04
layout: page
title: Schritt 5 - Eine Extraktion in Board laden
description: Schritt 5 - Eine Extraktion in Board laden
product: board-connector
parent: erste-schritte
permalink: /:collection/:path
weight: 5
lang: de_DE
progressstate: 5
---

Extraktionen können mit dem Data Reader in Board geladen werden. Im folgenden Beispiel wird eine Extraktion "Plants" im Board Designer erstellt. 
Die Extraktion "Plants" extrahiert die Tabelle Plants *T001W* aus SAP.  

1. In Board, wählen Sie **[+ DATA READER]**, um einen neuen Data Reader anzulegen. Geben Sie einen Namen ein, im dargestellten Beispiel "Plants"; und eine Gruppe, im dargestellten Beispiel "Main Group". Wählen Sie den Quelltyp "SAP".
![Load-Extraction-01](/img/content/board/Load-Extraction-01.png)
2. Erstellen Sie eine neue Verbindung für den Board Connector Server. Optional können Sie auch eine bestehende Verbindung auswählen. Bestimmen Sie einen Namen im Feld *Name* und die *URL* des Board Connector Servers (z. B. localhost:8098).
3. Klicken Sie auf das Symbol "Verbinden" (1), um eine Liste von Extraktionen aus dem Board Connector zu ziehen.
4. Wählen Sie eine Extraktion (hier: T001W) aus dem Feld EXTRACTOR auf der rechten Seite aus. Die Metadaten der Extraktion (Feldnamen, Datentypen) werden im unteren Fenster aufgelistet.
![Load-Extraction-02](/img/content/board/Load-Extraction-02.png)
5. **Optional:** Geben Sie URL-Parameter an, die dem Verbindungsstring hinzugefügt werden sollen. 
Im abgebildeten Szenario wird eine WHERE-Bedingung angegeben, die die Extraktion auf die Einkaufsorganisation (EKORG) '1000' einschränkt. 
Weitere Informationen zu URL-Parametern finden Sie unter [Dynamische Verbindungsparameter](../fortgeschrittene-techniken/extraktionsparameter#parameters-tab-source).
6. Klicken Sie auf **[Browse Table]**, um eine Vorschau der extrahierten SAP-Daten zu erhalten. <br>
**Hinweis:** Die Vorschau zeigt je nach Art der Extraktion echte oder Dummy-Daten an.
![Load-Extraction-03](/img/content/board/Load-Extraction-03.png)
7. Klicken Sie auf **[MAPPING]**, um mit dem Mapping der Felder der Extraktion mit existierenden Board-Entitäten fortzufahren. 
8. Wählen Sie die entsprechenden Felder für die Zuordnung aus (z. B. WERKS, NAME1, usw.).
![Load-Extraction-04](/img/content/board/Load-Extraction-04.png)
9. Mappen Sie in der Spalte **Position** jedes Feld der Entität auf ein SAP-Feld. Wählen Sie den richtigen Modus für *Insert* oder *Update*. Im abgebildeten Beispiel ist für alle Felder der Modus "ADD NEW ITEM" ausgewählt.
10. Klicken Sie auf **[Browse Query]** und **[OK]**.
![Load-Extraction-05](/img/content/board/Load-Extraction-05.png)
11. Führen Sie den Data Reader aus, um die SAP-Daten zu extrahieren. <br>
![Load-Extraction-06](/img/content/board/Load-Extraction-06.png)
![Load-Extraction-06](/img/content/board/Load-Extraction-07.png)
Nach dem Ausführen des Data Readers zeigt das Board Protokoll an, wie viele Zeilen geladen wurden. <br>
