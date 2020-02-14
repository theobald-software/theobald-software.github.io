
Alle Produkte von Theobald Software protokollieren alle auf einem System durchgeführten Schritte in Log-Dateien. Es gibt zwei Arten von Log-Dateien: 
- Das Server Log, das Protokolle enthält, die den Server betreffen, wie z.B. das Starten und Stoppen des Servers. 
Das Server-Log enthält auch die Informationen über die Ausführung einer einzelnen Extraktion.
- Das Extraktionslog, das den Extraktionsprozess jeder einzelnen Extraktion protokolliert.
Um das Server-Log anzuzeigen, navigieren Sie zum Hauptmenü des Designers und klicken Sie **[Server > Log]**

![View-Server-Log](/img/content/View-Server-Log.png){:class="img-responsive"}

Die Logs werden pro Tag erstellt. Um zwischen den Logs zu wechseln, können Sie die Liste auf der linken Seite verwenden. 

### Log Levels
Jeder Log-Eintrag ist einem so genannten Log-Level zugewiesen. Es gibt folgende Log-Level:

- **Errors** sind Fehlermeldungen, die während des Extraktionsprozesses ausgegeben werden.
- **Information** - Statusmeldungen, über Vorgänge, die nicht zu einem Fehler führen.
- **Warnings** - Informationen über Probleme, die nicht zu einem Extraktionsfehler führen. Zum Beispiel Authentifizierungsfehler.
- **Debug Details** - detaillierte Informationen, die helfen, den Grund für aufgetretene Fehler zu finden.

Markieren Sie die die Kästchen oben links, um zu entscheiden, welche Log-Levels angezeigt werden sollen.

### Kopieren von Logs
Klicken Sie auf **[Copy To Clipboard]**, um das aktuelle Log in die Zwischenablage zu kopieren. Das kopierte Log kann an beliebiger Stelle eingefügt werden (z.B. in eine E-Mail).

Sowohl die Server- als auch die Extraktionslogs werden nach einer definierten Zeitspanne automatisch gelöscht. Der Zeitraum kann in der Serverkonfiguration eingestellt werden.

