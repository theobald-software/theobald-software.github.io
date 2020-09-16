Der Zugriff aud den Webserver kann durch Verwendung folgenden Optionen beschränkt werden:

- HTTPS - unrestricted (1)
- HTTPS - Restricted to AD users with Designer read access (2)

<!---![webserver settings](/img/content/XU3_ServerSettings_web_tab.png){:class="img-responsive"}--->

### HTTPS - unrestricted
1. HTTPS - unrestricted auswählen.
2. Die Schaltfläche **[ Select X.509 certificate}** anklicken. Der Dialog "Edit certificate location" wird geöffnet.
3. Wählen Sie unter **Local Machine > Personal** das für die Maschine erstellte [X.509 Zertifikat](./x.509-zertifikat-installieren) aus.
4. Bestätigen Sie mit **[OK]** zum Schließen des Dialogs.

### HTTPS - Restricted to AD users with Designer read access 

Warnung: Verbindung zum XU Server wird mit Fehlermeldung abgebrochen, falls keine Benutzer hinterlegt wurden.

Im Tab *Configuation Server* markieren Sie die Checkbox ["Restrict Designer Access ..."](./zugriffsverwaltung).

Über **[Add]** - neues Fenster öffnet sich, Suche nach entweder AD Usern oder in XU angelegte custom user  - [](./sicherheit/benutzerverwaltung)
 
<!---![Add Window](/img/content/XU3_ServerSettings_web_tab.png){:class="img-responsive"}--->

1. Im Tab *Web Server* wählen Sie HTTPS - Restricted to AD users with Designer read access aus.
2. Die Schaltfläche **[ Select X.509 certificate}** anklicken. Der Dialog "Edit certificate location" wird geöffnet.
3. Wählen Sie unter **Local Machine > Personal** das für die Maschine erstellte [X.509 Zertifikat](./x.509-zertifikat-installieren) aus.
4. Bestätigen Sie mit **[OK]** zum Schließen des Dialogs.

Diese vorgenommenen Änderungen müssen durch den Neustart des XU-Server aktiviert werden.  

<!---![Question Bild](/img/content/XU3_ServerSettings_web_tab.png){:class="img-responsive"}--->



 

