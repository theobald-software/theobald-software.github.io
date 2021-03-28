### Einstellungen

1. Öffnen Sie die DeltaQ Extraktion.
2. Füllen Sie die Felder oben rechts aus. Zur Suche nach den hinterlegten Einstellungen, klicken Sie auf **Suchen** (Lupensymbol).Die Einstellungen sind definiert in [DeltaQ Customizing](../sap-customizing/customizing-fuer-deltaq).

![deltaq-tech-settings](/img/content/deltaq-tech-settings.png){:class="img-responsive"}

**Log. Destination** <br>ist das logische RFC-Zielsystem.

**Gateway Host** <br>ist der Name (oder IP-Adresse) Ihres SAP-Systems. <br>
Stellen Sie sicher, dass der Gateway-Host derselbe ist wie in Ihrer SAP-Verbindung. 

**Gateway Service** <br>ist in der Regel in der Form *sapgwNN*, wobei *NN* die Instanz-Nummer ihres SAP-Systems ist, z. B. eine Zahl zwischen *00* und *99*. <br>
*NN* muss dem Feld *System No* in der SAP-Verbindung bzw. dem Feld Instanz-Nummer im SAP-Logon entsprechen. 

**Program ID** <br>ist das registrierte RFC-Serverprogramm.

Die Werte **Gateway Host** und **Gateway Service** entsprechen den Werten in der SAP-Verbindung.

![sap-conn-app-ecc](/img/content/sap-conn-app-ecc.png){:class="img-responsive"}

### Überprüfen der Eingaben

Klicken Sie auf **[Customizing Check]**, um das DeltaQ-Customizing auf dem SAP-System zu validieren.
Stellen Sie sicher, dass alle Zeilen im Bericht grün sind.

![customizing-check-successfull](/img/content/customizing-check-successfull.png){:class="img-responsive"}
