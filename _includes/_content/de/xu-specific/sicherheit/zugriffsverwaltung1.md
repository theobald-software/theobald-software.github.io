
### Zugriffssteuerung auf Serverebene - Server Settings

Die Zugriffssteuerung wird aktiviert, wenn die Checkbox **Restrict Designer access to the following users/groups** markiert wird.<br>
Danach können sich nur die aufgelisteten Benutzer bzw. Benutzergruppen am Designer anmelden.
![Server-Settings_](/img/content/Server-Settings.png){:class="img-responsive"}


#### Zugriffsrechte - Read, Modify, Create, Admin

Einem Benutzer oder einer Benutzergruppe können nachfolgende Rechte zugeordnet werden. Diese Rechte beziehen sich auf Aktionen (read, create, modify), die im Designer durchgeführt werden. 

| Typ der Rechte | Beschreibung |
| :------ |:--- | 
| Read | Mitglieder dieser Gruppe haben einen Lesezugriff, können aber keine Extraktionen editieren.|
| Modify | Mitglieder dieser Gruppe haben identische Zugriffsrechte, wie die Benutzer mit “Read”-Rechten. Darüber hinaus können Benutzer mit "Modify"-Rechten bestehende Extraktionen editieren, jedoch keine Extraktionen anlegen oder klonen.|
|Create| Mitglieder dieser Gruppe haben identische Zugriffsrechte, wie die Benutzer mit “Modify”-Rechten. Darüber hinaus können Benutzer mit "Create"-Rechten Extraktionen anlegen und klonen, aber keine Admin-Tätigkeiten ausführen.|
|Admin|Mitglieder dieser Gruppe haben alle Rechte, keine Beschränkungen und können Admin-Tätigkeiten ausführen. Zu Admin-Tätigkeiten gehört das Ändern von Server-Einstellungen, Zugriff auf Server-Logs oder das Bearbeiten von Benutzern und Verbindungen (SAP und Zielumgebungen). Zugriffseinschränkungen auf Extraktionen oder des Quellsystem werden ignoriert.|


### Zugriffssteuerung auf Extrakionsebene - Extraction Settings 
Eine Zugriffssteuerung kann auch auf Extraktionsebene vorgenommen werden. <br>
Öffnen Sie das Hauptfenster der Komponente und klicken Sie auf **[General Settings] > Tab *Security**. 
![Extraction-Settings_](/img/content/XU_Extraction_Security3.png){:class="img-responsive"}
Diese Zugriffssteuerung auf Extraktionsebene übersteuert die Einstellungen auf Serverebene.


### Zugriffsteuerung auf Source-Ebene - Einstellungen der Datenquelle
Eine Zugriffssteuerung kann auch auf Datenquellebene (Source-Ebene) vorgenommen werden. Diese Zugriffssteuerung übersteuert die Einstellungen auf Serverebene.
![Server-Settings_](/img/content/xu/sap_source-accesscontrol.png){:class="img-responsive"}


