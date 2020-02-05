## Server Settings
Die Zugriffsverwaltung wird aktiviert, wenn die Checkbox *Restrict Designer access to the following users/groups angehakt wird*.<br>
Danach können sich nur noch die aufgelisteten Benutzer bzw. Benutzergruppen am Designer anmelden.

![Server-Settings_](/img/content/Server-Settings_.png){:class="img-responsive"}

**Read, Modify, Create, Admin**<br>
Einem Benutzer/Benutzergruppe können nachfolgende Rechte zugeordnet werden. Diese Rechte beziehen sich auf Aktionen die im Xtract Universal Designer durchgeführt werden. 

**Admin**: Mitglieder dieser Gruppe haben alle Rechte. Sie können alles, was Benutzer mit “Create”-Rechten können.<br>
Darüber hinaus haben sie Admin-Rechte wie das Ändern von Server Settings, Zugriff auf Server Logs oder das Bearbeiten von Benutzern und Verbindungen (SAP und Zielumgebungen). <br>Zugriffseinschränkungen auf Extraktionen oder Quellsystem werden ignoriert.

**Create**: Mitglieder dieser Gruppe können all das, was Benutzer mit “Modify”-Rechten können. 
Darüber hinaus können sie Extraktionen anlegen und klonen. Gruppenmitglieder können keine Admin-Tätigkeiten ausführen.

**Modify**: Mitglieder dieser Gruppe können all das, was Benutzer mit “Read”-Rechten können.<br>
Darüber hinaus können sie bestehende Extraktionen editieren, jedoch keine Extraktionen anlegen oder klonen. 

**Read**: Mitglieder dieser Gruppe können keine Extraktionen editieren, können sie jedoch lesend öffnen.



## Extraction Settings
Auch auf Extraktionsebene kann eine Zugriffssteuerung vorgenommen werden. Diese übersteuert die Einstellungen auf Serverebene.

![Server-Settings_](/img/content/XU_Extraction_Security.png){:class="img-responsive"}