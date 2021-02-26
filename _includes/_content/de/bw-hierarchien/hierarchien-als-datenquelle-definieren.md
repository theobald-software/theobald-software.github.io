### SAP-Verbindung Erstellen
Eine erfolgreiche SAP-Verbindung ist Voraussetzung für das Erstellen einer Extraktion. 
Folgen Sie der Vorgehensweise, die beschrieben ist in [SAP Verbindung](../einfuehrung/sap-verbindungen-anlegen), um eine SAP-Verbindung erstellen.

### Eine neue Extraktion anlegen
1. Im Hauptfenster des Designers klicken Sie auf **[New]**.
2. Das Feld  **Source** (1) zeigt die SAP-Verbindungen. Wählen Sie eine passende SAP-Verbindung aus dem Dropdown-Menü.
![Create-Hierarchy-Extraction](/img/content/xu/xu_select-bw-hierarchy.png){:class="img-responsive"}
3. Gegen Sie einen aussagekräftigen Namen für die Extraktion ein (2).
4. Wählen Sie **BW Hierarchy** (3).
5. Klicken Sie auf **[OK]** (4) zum Bestätigen.
Das Fenster "Extract SAP BW Hierarchies" öffnet sich.
6. Suchen nach **Hierarchy Names**, verwenden Sie dafür das (Lupensymbol).
![Search Hierarchy Names](/img/content/xu/xu_search_hierarchy_name.png){:class="img-responsive"}
Das Suchfenster **Look Up Hierarchy** öffnet sich.
![Look Up Hierarchy](/img/content/xu/xu_look-up-hierarchy.png){:class="img-responsive"}
3. Suche nach einer bestimmten Hierarchie über Name oder InfoObject (5). Sie können Platzhalter verwenden (*), wenn gewünscht.<br>
Die Resultate der Suche werden in der Vorschau geöffnet (6).
4. Wählen Sie einen Eintrag und bestätigen über **[OK]**.
Das Fenster "Extract SAP BW Hierarchies" zeigt die ausgewählten Werte an.<br>
Die Komponente speichert alle relevanten Daten für die weitere Verarbeitung.<br>
Die Einstellungen können nach dem Erstellen von Extraktionen jederzeit geändert werden.<br>

**Date To**<br>
![Date To ändern](/img/content/xu/xu_search-hierarchy-name-filled.png){:class="img-responsive"}
Der vorgegebene Wert von **Date To** ist *99991231*.  Um diesen Wert zu ändern, klicken Sie **[Run]** und überschreiben den Wert.
