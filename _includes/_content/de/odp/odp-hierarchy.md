
### Select Hierarchy

Wenn das Quellobjekkt vom Typ Hierarchy ist, öffnet sich das Fenster "Select Hierarchy".

1. Wählen Sie aus der Liste (1) eine Hierarchy aus.
2. Bestätigen Sie die Auswahl mit **[OK]**.
3. Wählen Sie die Segmente aus, die extrahiert werden sollen (3).
![Select-Hierarchy](/img/content/odp/select-hierarchy.png){:class="img-responsive"}

**Selected Hierarchy**<br>
Zeigt den Namen der ausgewählten Hierarchy an (2).

**Segment(s) to extract** <br>
Hierarchien werden über die API in 3 Segmente aufgeteilt und bereitgestellt.
Wählen Sie aus, welche Segmente der Hierarchy extrahiert werden sollen (3).
Die gewählten Segmente werden im Abschnitt *Fields* angezeigt.

| **Merges**      | Alle Segmente haben eine Node ID als Feld. <br> *Merges* setzt alle 3 Segmente automatisch anhand der Node ID zusammen. |
| **Elements**      | Das Segment *Elements* beinhaltet grundlegende Informationen über Elemente der Hierarchie z.B. Name, Parent, Child, etc.     |
| **Texts** | Das Segment *Texts* beinhaltet Beschreibungstexte zu den Elementen. <br> Die Sprache der Texte ist anhängig von der Spracheinstellung der SAP-Verbindung.     |
| **Intervals** | Das Segment *Intervals* beinhaltet zusätzliche Informationen, falls das Element ein Intervall ist.    |


{: .box-note }
**Hinweis:** Hierarchien können zur Laufzeit als [Laufzeitparameter](../extraktionen-ausfuehren-und-einplanen/extraktionsparameter#extraction) übergeben werden.