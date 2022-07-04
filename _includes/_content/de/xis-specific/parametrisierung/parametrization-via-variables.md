### Parametrisierung mit Variablen

SSIS-Variablen speichern Werte, die von einem SQL Server Integration Services-Paket und dessen Containern, Tasks und Ereignishandlern zur Laufzeit verwendet werden können.<br>
Um SSIS-Variablen für die Parametrisierung von Xtract Komponenten verwenden zu können, fügen Sie vor dem Namen der Variable ein @-Symbol hinzu.

Das folgende Beispiel zeigt wie eine SSIS-Variable mit dem Namen *@vMONTH* als Parameter für eine BEx Variable in einer BW Cube Komponente verwendet wird:

1. Öffnen Sie *Variables* (1) im Hauptfenster der Komponente. Das Fenster "Edit BW Query Cube Variables" öffnet sich.
2. Anstatt einen konstanten Wert für *Calendar Month/Year* einzutragen, geben Sie den Namen einer SSIS-Variablen in der @-Notation ein (2).
3. Bestätigen Sie Ihre Eingabe mit **[OK]** und schließen Sie die Komponente.
4. Öffnen Sie das Fenster *Variables* und erstellen Sie eine neue SSIS-Variable mit demselben Namen, aber ohne das @-Symbol (3).
![Variables](/img/content/xis/xis_vars.png){:class="img-reagierend"}
5. Stellen Sie sicher, dass der korrekte Datentyp ausgewählt ist. In diesem Fall wählen Sie *String* als Datentyp.
6. Verwenden Sie die Variable, indem Sie Werte direkt in das *Value* Feld eintragen oder weisen Sie der Variable dynamisch Werte zu.

