RFC-Kommunikation mit SAP kann zur Fehlersuche mittels Tracing aufgezeichnet werden.<br>
Das Standard-Logging ist immer aktiv und ist von Tracing-Einstellung unabhängig. 

{: .box-warning }
**Warnung!: Erhöhter Verbrauch des Festplattenspeichers** <br>
Bei der Aktivierung des Tracings wird eine große Menge an Informationen gesammelt. Das kann die Kapazität Ihrer Festplatten drastisch verringern.
Aktivieren Sie das Tracing nur bei Bedarf, z.B. auf Anfrage des Support-Teams.


### Aktivieren der Nachverfolgung (Tracing)
1. Im Hauptfenster des Designers, navigieren Sie zur Hauptmenüleiste und wählen Sie **Server > Manage Sources**.
![XU-Create-Connection-1](/img/content/server_manage_sources.png){:class="img-responsive"}
<br> Das Fenster "Manage Sources" wird geöffnet.
2. Wählen Sie die SAP-Quelle Ihrer fehlerhaften Extraktion und klicken Sie auf **[Edit]** (Bleistift-Symbol). 
![sap-source](/img/content/edit_sap_source.png){:class="img-responsive"}
3. Öffnen Sie den Tab *RFC Options* und klicken Sie auf **[...]**. Das Fenster "Browse For Folder" wird geöffnet.
![tracing-path](/img/content/xu_tracing_path.png){:class="img-responsive"}
4. Klicken Sie auf **[Make new Folder]**, um einen neuen Ordner zum Speichern der Tracing-Dateien zu erstellen, z.B.: `C:\Tracing`. 
5. Klicken Sie **[OK]** zur Bestätigung.
6. Reproduzieren Sie den Fehler. XML-Dateien werden mit den entsprechenden Informationen im Ordner `C:\Tracing` generiert. 
7. Erstellen Sie aus dem Tracing-Verzeichnis eine Zip-Datei (z.B. Trace.zip) und senden Sie die Zip-Datei an das Support-Team von Theobald Software (https://support.theobald-software.com).
8. Öffnen Sie das Fenster "Change Source" erneut und entfernen Sie den Eintrag aus dem Feld **Trace Directory**. 
![tracing-path](/img/content/xu_tracing_path.png){:class="img-responsive"}
