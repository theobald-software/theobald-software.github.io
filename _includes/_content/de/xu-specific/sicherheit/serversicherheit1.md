Der Zugriff auf den Webserver kann durch Verwendung folgenden Optionen beschränkt werden:

- HTTPS - unrestricted
- HTTPS - Restricted to AD users with Designer read access

![webserver settings](/img/content/xu/server-settings-security.png){:class="img-responsive"}

### HTTPS - unrestricted
1. Wählen Sie die Option "HTTPS - unrestricted" aus.
2. Klicken Sie die Schaltfläche **[ Select X.509 certificate}** an. Der Dialog "Edit certificate location" wird geöffnet.
3. Wählen Sie unter **Local Machine > Personal** das für die Maschine erstellte [X.509 Zertifikat](./x.509-zertifikat-installieren) aus.
4. Bestätigen Sie mit **[OK]**. Der Dialog wird geschlossen.

### HTTPS - Restricted to AD users with Designer read access 

{: .box-warning}
**Warnung! Verbindung zum Server wird abgebrochen!** <br>
Wenn keine Benutzer hinterlegt sind und die Option "HTTPS - Restricted to AD users with Designer read access" aktiviert ist, wird die Verbindung zum XU Server abgebrochen.
Legen Sie Benutzer an und vergeben Sie die benötigten Rechte. Mehr Details dazu finden Sie im Abschnitt [Benutzerverwaltung](./sicherheit/benutzerverwaltung).


1. Wechseln Sie zum Tab *Configuation Server* und markieren Sie die Checkbox ["Restrict Designer access to the following users / groups"](./zugriffsverwaltung).
![configuration server tab](/img/content/xu/server-settings-configuration-tab.png){:class="img-responsive"}
2. Zum Suchen von [angelegten Benutzern oder Benutzergruppen](./sicherheit/benutzerverwaltung) klicken Sie auf **[Add]**. Der Dialog zum Suchen wird geöffnet. 
3. Suchen Sie nach den gewünschten Benutzern oder Benutzergruppen. Die Verwendung von Wildcards (*) wird unterstützt.
![Add Window](/img/content/xu/add-user.png){:class="img-responsive"}
4. Wechseln Sie zurück zum Tab *Web Server* und wählen Sie die Option "HTTPS - Restricted to AD users with Designer read access" aus.
![webserver settings https](/img/content/xu/server-settings-security-https.png){:class="img-responsive"}
5. Klicken Sie die Schaltfläche **[ Select X.509 certificate}** an. Der Dialog "Edit certificate location" wird geöffnet.
6. Wählen Sie unter **Local Machine > Personal** das für die Maschine erstellte [X.509 Zertifikat](./x.509-zertifikat-installieren) aus.
7. Bestätigen Sie mit **[OK]**. Der Dialog wird geschlossen.

Diese vorgenommenen Änderungen müssen durch den Neustart des XU-Server aktiviert werden.  

![Question Bild](/img/content/xu/restart-server.png){:class="img-responsive"}



 

