### Parametrisierung mit Variablen

SSIS-Variablen speichern Werte, die von einem SQL Server Integration Services-Paket und dessen Containern, Tasks und Ereignishandlern zur Laufzeit verwendet werden können.<br>
Um SSIS-Variablen für die Parametrisierung von Xtract Komponenten verwenden zu können, fügen Sie vor dem Namen der Variable ein @-Symbol hinzu.

Das folgende Beispiel zeigt wie eine SSIS-Variable mit dem Namen *@vDate* als Parameter für in einer Xtract Komponente verwendet wird:

1. Wählen Sie ein Eingabefeld, das SSIS-Variablen unterstützt.
2. Geben Sie anstatt eines konstanten Werts den Namen einer SSIS-Variablen in der @-Notation ein (1).
3. Öffnen Sie das Fenster *Variables* und erstellen Sie eine neue SSIS-Variable mit demselben Namen, aber ohne das @-Symbol (2).<br>
![Variables](/img/content/xis/xis_vars.png){:class="img-reagierend"}
4. Stellen Sie sicher, dass der korrekte Datentyp ausgewählt ist.
5. Verwenden Sie die Variable, indem Sie Werte direkt in das *Value* Feld eintragen oder weisen Sie der Variable dynamisch Werte zu.

