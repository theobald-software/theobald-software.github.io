
### Über Query Variablen
BW-Queries haben oft definierte Variablen zum Erstellen von Filteroptionen. 
Abhängig vom Typ der BEx-Variablen (Einzelwert, Mehrfachwert, Intervall oder komplexe Auswahl) werden die Eingabefelder der Variablen aktiviert oder deaktiviert.
Anstatt einen Wert für die BEx-Variable hart einzugeben, können Sie Variablen mit Werten definieren, die zur Laufzeit dynamisch gesetzt werden können, siehe [Laufzeitparameter](./edit-runtime-parameters).

### Variablen anpassen
1. Führen Sie eine [Query-Suche](./eine-bw-cube-quelle-definieren#nach-bw-cube-oder-query-suchen) durch und wählen Sie ein Query mit definierten Variablen aus (1).
2. Laden Sie eine Echtzeitvorschau (2), falls erforderlich. 
![Edit Variables Button](/img/content/XU-BExQuery-Variable.png){:class="img-responsive"}
3. Klicken Sie auf **[Edit Variables]** (3). Das Fenster "Edit variables for [Name des Query]" wird geöffnet.
4. Felder mit verfügbaren Variablen werden aktiviert. 
Definieren Sie die Variablen mit Hilfe der Dropdown-Listenoptionen in den Feldern **Sign** und **Option**. 
Wählen Sie den Wertebereich, falls erforderlich. 
Die Logik der komplexen Auswahl beruht auf den üblichen Möglichkeiten. 
Die Spezifikation **Sign** definiert, ob die zugehörige Auswahl ein- oder ausgeschlossen werden soll.
5. Klicken Sie auf das Lupensymbol, um die auswählbaren Variablenwerte anzuzeigen.
![Edit Variables](/img/content/xfa/xfa_query_var.png){:class="img-responsive"}
6. Klicken Sie auf **[Ok]** zum Bestätigen. 
7. Klicken Sie auf **[Load Live Preview]** um eine Vorschau der gefilterten Ergebnisse anzuzeigen.
