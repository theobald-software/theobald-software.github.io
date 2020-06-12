
Alle Produkte von Theobald Software protokollieren alle auf einem System durchgeführten Schritte in Log-Dateien. 
Die Log-Dateien werden im Produktverzeichnis gespeichert:<br>
z.B.: `C:\Program Files\[Product Name]\logs`

Die Server-Logs enthalten drei Arten von Protokollen, die den Server betreffen, wie das Starten und Stoppen des
 Dienstes (Web), die Konfiguration (Config) und Informationen über den Prozess (run) jeder einzelnen Extraktion. 
 
Zusätzlich zu den Server-Logs gibt es ein Protokoll für jede [Extraktion](./extraktion-logging) und einen [Debug-Log](./debug-logging).
 
Um das Server-Log anzuzeigen, navigieren Sie zum Hauptmenü des Designers und klicken Sie auf **[Server > Log]**.

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

