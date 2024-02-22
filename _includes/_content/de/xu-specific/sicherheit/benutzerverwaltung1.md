
### Authentisierung- und Verschlüsselungsverfahren
Die Verbindung zwischen dem Designer und dem Server kann durch unterschiedliche Authentisierung- und Verschlüsselungsverfahren durchgeführt werden. 
![XU3_Designer_Authentication](/img/content/xu/authentication_xu.png){:class="img-responsive"}

Folgende Kombinationen von Transportverschlüsselung und Authentisierung werden unterstützt:

{: .box-note }
**Hinweis:** Um die Kerberos-Transportverschlüsselung zu verwenden oder einen Active Directory (AD) Benutzer zu authentifizieren, ist ein Kerberos Target Principal Name (TPN) erforderlich. 

TPN kann entweder ein User Principal Name (UPN) oder ein Service Principal Name (SPN) sein.<br>
Weitere Informationen zu diesem Thema, finden Sie im Knowledge-Base-Artikel [How to use target principal field (TPN)](https://kb.theobald-software.com/xtract-universal/target-principal-TPN).

| Authentisierungsmethode | Description | TPN required |
| :------ |:--- | :---: |
| Windows credentials (current user) | Der AD-Benutzer, der den Designer ausführt, authentisiert sich gegenüber dem Server per Kerberos. Alle zwischen Designer und Server ausgetauschten Daten werden per Kerberos verschlüsselt. | x |
| Windows credentials (different user)| Der AD-Benutzer, dessen Benutzername und Passwort in das Anmeldefenster eingegeben werden, authentisiert sich gegenüber dem Server per Kerberos. Alle zwischen Designer und Server ausgetauschten Daten werden per Kerberos verschlüsselt. | x|
| Custom credentials (TLS encryption) | Der Custom User, dessen Benutzername und Passwort in das Anmeldefenster eingegeben werden, authentisiert sich gegenüber dem Server. Alle zwischen Designer und Server ausgetauschten Daten werden per TLS verschlüsselt. Um TLS Transportverschlüsselung zu verwenden, wird ein [X.509 Serverzertifikat](./x.509-zertifikat-installieren) für den Service benötigt. Das Zertifikat kann in den [Server-Einstellungen](../server/server-einstellungen) hinterlegt werden. Im Anmeldefenster muss im Feld *Server* der DNS Hostname des Servers eingetragen werden, für den das Zertifikat ausgestellt wurde. | - |
| Custom credentials (Kerberos encryption)| Der Custom User, dessen Benutzername und Passwort in das Anmeldefenster eingegeben werden, authentisiert sich gegenüber dem Server. Alle zwischen Designer und Server ausgetauschten Daten werden per Kerberos verschlüsselt. | x |
| Anonymous (no encryption) | Es findet keine Authentisierung statt. Die zwischen Designer und Server ausgetauschten Daten werden ohne Transportverschlüsselung im Klartext übertragen. | - |

### Aktivieren von Authentifizierungsmethoden 
Diese unterschiedlichen Anmeldeoptionen können Sie in den [Server-Einstellungen](../server/server-einstellungen) aktivieren/deaktivieren.
1. Öffnen Sie im Hauptfenster **Server > Settings**.
![XU_security-manage-users](/img/content/server-settings_manage.png){:class="img-responsive"}
2. Wählen Sie den Tab *Configuration Server*.
![XU3_ServerSettings_authenticaion_methods](/img/content/xu/authentisierung_xu.png){:class="img-responsive"}
3. Aktivieren oder deaktivieren Sie Ihre Authentifizierungsmethoden.

### Benutzer und Benutzergruppen

Der Designer bietet eine [Zugriffsverwaltung](./zugriffsverwaltung) für Benutzer und Benutzergruppen. 
Dafür können sowohl Windows AD-Benutzer und -Gruppen als auch benutzerdefinierte Benutzer und Gruppen verwendet werden.
Benutzerdefinierte Benutzer und Gruppen müssen im Designer erst angelegt werden, bevor sie zur Verfügung stehen.

{: .box-note }
**Hinweis:** Windows AD-Benutzer und -Gruppen werden außerhalb des Designers erstellt. Achten Sie darauf, im Designer nur Windows AD *Security Groups* auswählen.
Benutzern, die einer *Distribution Group* zugewiesen wurden, wird beim Logon der Zugriff verweigert.

So erstellen Sie einen benutzerdefinierten Benutzer und weisen ihn einer Benutzergruppe zu:<br>
1. Navigieren Sie zu **Security > Manage Users**.
![XU_security-manage-users](/img/content/security-manage-users.png){:class="img-responsive"}
2. Kicken Sie auf **[Add]**, um einen neuen Benutzer hinzuzufügen.
Zum Zeitpunkt der Benutzeranlage müssen noch keine Rechte vergeben werden. Mehr Details im Abschnitt [Zugriffsverwaltung](./zugriffsverwaltung).
3. Navigieren Sie zu **Server > Settings**.
![XU_security-manage-users](/img/content/server-settings_manage.png){:class="img-responsive"}
4. Wählen Sie den Tab *Configuration Server* und aktivieren Sie die Checkbox *Restrict Designer access to the following users/groups*.
![XU_server-settings-add](/img/content/server-settings-add-group.png){:class="img-responsive"}
5. Klicken Sie auf **[New]**, um eine benutzerdefinierte Benutzergruppe anzulegen.
![XU_server-settings-add-groups](/img/content/server-seetings-create-user-group.png){:class="img-responsive"}
6. Navigieren Sie zu **Security > Manage Users**.
7. Klicken Sie auf **[Edit]**. Das Fenster "Create new user" öffnet sich.
![XU_server-settings-add](/img/content/user-management-groups.png){:class="img-responsive"}
8. Verwenden Sie die Pfeile **[<]** und **[>]**, um Benutzer Gruppen zuzuweisen und aus Gruppen zu entfernen.
Benutzerdefinierte Benutzer können nur benutzerdefinierten Benutzergruppen zugewiesen werden. Windows AD-Benutzer können nur Windows AD-Gruppen, nicht aber benutzerdefinierten Benutzergruppen zugewiesen werden. 

{: .box-tip }
**Empfehlung:** Fügen Sie Benutzer zu Benutzergruppen hinzu, um mehreren Benutzern gleichzeitig Zugang zu bestimmten Aktionen zu gewähren.

### Migration und Update

Da benutzerdefinierte Benutzer nur benutzerdefinierten Benutzergruppen und Windows AD-Benutzer nur Windows AD-Gruppen zugeordnet werden können, können die erstellten benutzerdefinierten Benutzergruppen bei der Migration auf eine neuere Produktversion verschwinden.
Dies hat keine Auswirkungen auf die Zugriffsverwaltung, aber der Zugriff auf Benutzerebene wird gelöst. 

Um den Zugriff auf Gruppenebene zu gewähren, müssen die Windows AD-Benutzer neu erstellten Windows AD-Gruppen zugewiesen werden.





