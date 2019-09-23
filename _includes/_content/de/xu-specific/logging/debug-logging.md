Wenn Fehler auftreten, können Informationen aus dem Debug-Logging (Tracing) für die Fehleranalyse angefordert werden.<br> 
Führen Sie folgende Schritte aus, um das Debug-Logging zu aktivieren: 

1. Öffnen Sie die SAP-Verbindung und tragen Sie in das Feld *Trace Directory* einen gültigen Pfad zu einem leeren und existierenden Verzeichnis (z.B. C:\Data\Trace\) ein. 
    Um die SAP-Verbindung zu öffnen, wählen Sie im Designer den Menüeintrag Server -> Manage Services. Selektieren Sie Ihre Verbindung und klicken Sie auf Edit. 
2. Reproduzieren Sie den Fehler. XML-Dateien werden mit den entsprechenden Informationen generiert. 
3. Machen Sie aus dem Verzeichnis eine Zip-Datei (z.B. Trace.zip) und senden Sie sie unserem Support. 
4. Nach der Reproduktion des Fehlers entfernen Sie den Eintrag aus dem Feld *Trace Directory* , da das Tracing nicht mehr notwendig ist. 

![tracing-setting](/img/content/tracing-setting.jpg){:class="img-responsive"}

Bitte beachten Sie, dass das Debug-Logging in der Regel nur nach Aufforderung durch den Support aktiviert werden sollte. <br>
Beim Debug-Logging werden eine Vielzahl von Informationen gesammelt. Dies kann bei permanent aktiviertem Logging dazu führen, dass die Kapazitätsgrenzen des Speichers schnell erschöpft ist. <br>
Das Standard-Logging ist von dieser Einstellung unabhängig und wird auch bei einem inaktivem Debug-Logging ausgeführt.