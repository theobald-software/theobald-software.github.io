---
ref: bc-getting-started-table-04
layout: page
title: Schritt 4 - Eine Extraktion in BOARD laden
description: Schritt 4 - Eine Extraktion in BOARD laden
product: board-connector
parent: erste-schritte-mit-table
permalink: /:collection/:path
weight: 4
lang: de_DE
---

Der nächste Schritt ist das Laden einer Extraktion in BOARD mit dem DataReader. Im BOARD-Designer haben wir die Extraktion definiert, die die Werkstabelle *T001W* aus SAP extrahieren. In BOARD haben wir die Entität Werke definiert, in die wir die SAP-Daten laden wollen. Wählen Sie nun *Database -> DataReader -> SAP -> New Protocol*, um ein neues Protokoll zu erstellen.

![Load-Extraction-01](/img/content/Load-Extraction-01.png){:class="img-responsive"}

Erstellen Sie nun eine neue Verbindung für den BOARD Connector Server. Optional können Sie eine bestehende Verbindung auswählen. Setzen Sie einen *Namen* und die *URL* des BOARD Connector Servers (z.B. localhost:8098). Klicken Sie dann auf *OK*.

![Load-Extraction-02](/img/content/Load-Extraction-02.png){:class="img-responsive"}

Nun sehen Sie auf der Registerkarte *SAP* auf der linken Seite eine Liste aller aussteigenden Extraktionen, gruppiert nach Extraktionstypen. Wählen Sie nun die Extraktion *plants* aus.  Im folgenden Fenster sehen Sie nun die Liste aller verfügbaren Felder mit Beschreibung und Datentypinformationen.

![Load-Extraction-03](/img/content/Load-Extraction-03.png){:class="img-responsive"}

Wählen Sie nun die Registerkarte *MDB* und wählen Sie die Felder *Code* und *Desc* der Entität *Plants*.<br>.
Die ausgewählten Felder werden im oberen Bereich des Formulars angezeigt. Ordnen Sie in der Spalte *Position* jedes Feld Ihrer Entität einem SAP-Feld zu. Wählen Sie in der Spalte *Action* den entsprechenden Eintrag aus.

Füllen Sie nun das Feld *Titel* mit einem Namen aus und klicken Sie auf *OK*.

![Load-Extraction-04](/img/content/Load-Extraction-04.png){:class="img-responsive"}

Führen Sie nun den DataReader aus, um die SAP-Daten zu extrahieren.

![Load-Extraction-05](/img/content/Load-Extraction-05.png){:class="img-responsive"}

Nach dem Ausführen des DataReader sehen Sie im Protokoll, wie viele Zeilen in die Entität geladen wurden.