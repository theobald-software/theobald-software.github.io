---
ref: bc-getting-started-04
layout: page
title: Schritt 4 - Eine Extraktion in BOARD laden
description: Schritt 4 - Eine Extraktion in BOARD laden
product: board-connector
parent: erste-schritte
permalink: /:collection/:path
weight: 4
lang: de_DE
progressstate: 3
---

Extraktionen können mit dem DataReader in BOARD geladen werden. Im folgenden Beispiel wird eine Extraktion "Plants" im BOARD Designer erstellt. 
Die Extraktion "Plants", die die Tabelle Plants *T001W* aus SAP extrahiert. 
In BOARD wird die Entität "Plants" definiert, um die SAP-Daten zu laden. 

1. Wählen Sie **Database > DataReader > SAP > New Protocol**, um ein neues Protokoll zu erstellen. <br>
![Load-Extraction-01](/img/content/Load-Extraction-01.png)
2. Erstellen Sie eine neue Verbindung für den BOARD-Connector-Server. Optional können Sie eine bestehende Verbindung auswählen. Legen Sie einen *Namen* und die *URL* des BOARD-Connector-Servers fest (z.B. localhost:8098). 
3. Klicken Sie auf **[OK]** zum Bestätigen. <br>
![Load-Extraction-02](/img/content/Load-Extraction-02.png)
4. Der Tab *SAP* auf der rechten Seite listet alle vorhandenen Extraktionen gruppiert nach Extraktionsart auf. 
5. Wählen Sie die Extraktion "Plants".  Im Detailfenster wird eine Liste aller verfügbaren Felder mit Beschreibung und Datentyp-Informationen angezeigt. <br>
![Load-Extraction-03](/img/content/Load-Extraction-03.png)
6. Wählen Sie den Tab *MDB* und markieren Sie die Felder **Code** und **Desc** der Entität **Plants**.<br>.
Die ausgewählten Felder werden im oberen Bereich des Formulars angezeigt. 
7. Ordnen Sie in der Spalte **Position** jedes Feld Ihrer Entität einem SAP-Feld zu.
8. Wählen Sie in der Spalte **Action** den entsprechenden Eintrag aus. Füllen Sie das Feld **Title** mit einem Namen aus und klicken Sie auf **[OK]**. <br>
![Load-Extraction-04](/img/content/Load-Extraction-04.png){:class="img-responsive"}
9. Führen Sie den DataReader aus, um die SAP-Daten zu extrahieren. <br>
![Load-Extraction-05](/img/content/Load-Extraction-05.png){:class="img-responsive"}

Nach dem Ausführen des DataReaders sehen Sie im Protokoll, wie viele Zeilen in die Entität geladen wurden.
