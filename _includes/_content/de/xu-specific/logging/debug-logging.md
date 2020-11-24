Alle Produkte von Theobald Software protokollieren alle auf einem System durchgeführten Schritte in Log-Dateien.
Im Falle der Fehlersuche kann das Theobald-Support-Team um die Übergabe von Rückverfolgungsinformationen bitten.

{: .box-warning }
**Warnung!: Erhöhter Verbrauch des Festplattenspeichers** <br>
Bei der Aktivierung des Debug-Logging wird eine große Menge an Informationen gesammelt. Dies kann die Kapazität Ihrer Festplatten drastisch verringern.
Aktivieren Sie das Debug-Logging nur bei Bedarf, z.B. auf Anfrage des Support-Teams.

Das Standard-Logging ist von Debug-Logging-Einstellung unabhängig und wird auch bei einem inaktivem Debug-Logging ausgeführt.


### Aktivieren der Nachverfolgung (Tracing)
1. Im Hauptfenster des Designers, navigieren Sie zur Hauptmenüleiste und wählen Sie **Server > Manage Sources**.
![XU-Create-Connection-1](/img/content/server_manage_sources.png){:class="img-responsive"}
<br> Das Fenster "Manage Sources" wird geöffnet.
2. Wählen Sie die SAP-Quelle Ihrer fehlerhaften Extraktion und klicken Sie auf **[Edit]** (Bleistift-Symbol). 
![sap-source](/img/content/edit_sap_source.png){:class="img-responsive"}
3. Unter der Subsektion **Miscellaneous** klicken auf **[...]**. Das Fenster "Browse For Folder" wird geöffnet.
![tracing-path](/img/content/xu_tracing_path.png){:class="img-responsive"}
4. Klicken Sie auf **[Make new Folder]**, um einen neuen Ordner zum Speichern der Tracing-Dateien zu erstellen, z.B.: `C:\trace` (1). Der erstellte Ordner erscheint im Feld **Trace directory**.
5. Klicken Sie **[OK]** zur Bestätigung.
6. Reproduzieren Sie den Fehler. XML-Dateien werden mit den entsprechenden Informationen im Ordner `C:\trace` generiert. 
7. Erstellen Sie aus dem Tracing-Verzeichnis eine Zip-Datei (z.B. Trace.zip) und senden Sie die Zip-Datei an das Support-Team von Theobald Software (support@theobald-software.com).
8. Öffnen Sie das Fenster "Source Details" wieder und entfernen Sie den Eintrag aus dem Feld **Trace Directory** (1), da das Tracing nicht mehr notwendig ist. 
![tracing-path](/img/content/xu_tracing_path.png){:class="img-responsive"}

Das Standard-Logging ist von dieser Einstellung unabhängig und wird auch bei einem inaktivem Debug-Logging ausgeführt.
