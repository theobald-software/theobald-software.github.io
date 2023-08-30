
### Über Query Variablen
BW-Queries haben oft definierte Variablen zum Erstellen von Filteroptionen. 
Abhängig vom Typ der BEx-Variablen (Einzelwert, Mehrfachwert, Intervall oder komplexe Auswahl) werden die Eingabefelder der Variablen aktiviert oder deaktiviert.

Sie können BEx-Variablen mit Werten definieren, die zur Laufzeit dynamisch gesetzt werden, siehe [Laufzeitparameter](./edit-runtime-parameters).

### Variablen anpassen
1. Führen Sie eine [Query-Suche](./eine-bw-cube-quelle-definieren#nach-bw-cube-oder-query-suchen) durch und wählen Sie ein Query mit definierten Variablen aus (1).
2. Laden Sie eine Echtzeitvorschau über **[Load Live Preview]** (2). 
{% if page.product == "xtract-for-alteryx" %}![Edit Variables Button](/img/content/xfa/xfa_variables.png){:class="img-responsive"}{% else %}![Edit Variables Button](/img/content/XU-BExQuery-Variable.png){:class="img-responsive"}{% endif %}
3. Klicken Sie auf **[Edit Variables]** (3). Das Fenster "Edit variables for [Name des Query]" öffnet sich und die Felder mit verfügbaren Variablen werden aktiviert.
![Edit-Variables](/img/content/Edit-Variables.png){:class="img-responsive"}
4. Definieren Sie die Variablen mit Hilfe der Dropdown-Listenoptionen in den Spalten **Sign** und **Option**. <br>
Die Spezifikation **Sign** definiert, ob die zugehörige Auswahl in das Ergebnis ein- oder ausgeschlossen werden soll.<br>
Die Spezifikation **Option** definiert, ob wie die Auswahl getroffen wird. <br>
Um Mehrfachwerte und komplexe Auswahlen zu bearbeiten, klicken Sie auf **[Edit]**.
5. Falls verfügbar, klicken Sie auf das ![magnifying-glass](/img/content/icons/magnifying-glass.png) Symbol neben den Eingabefeldern, um eine Liste auswählbarer Variablenwerte anzuzeigen. Beispiel:<br>
![Edit Variables](/img/content/xfa/xfa_query_var.png){:class="img-responsive"}
Sie können einen Wert aus der Liste der Variablenwerte auswählen, einen Wert manuell eintragen oder einen [Laufzeitparameter](./edit-runtime-parameters) hinterlegen.
6. Klicken Sie auf **[OK]** um Ihre Eingabe zu bestätigen. 
7. Klicken Sie auf **[Load Live Preview]** um eine Vorschau der gefilterten Ergebnisse anzuzeigen.
