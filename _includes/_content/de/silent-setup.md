
Die Installation kann über die Eingabeaufforderung von Windows nicht interaktiv und ohne GUI durchgeführt werden.

Um die Installation im Silent-Modus zu starten, verwenden Sie den Switch `--unattended`. <br>
Verwenden Sie den [start](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/start)-Befehlt mit dem Switch `/wait`, um zu warten bis die Installation abgeschlossen ist. 

**Beispiel:**
```
start /wait XtractUniversalSetup.exe --unattended
```

{: .box-note }
**Hinweis:** Achten Sie auf die Groß- und Kleinschreibung der Parameter.
