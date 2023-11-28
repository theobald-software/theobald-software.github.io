---
ref: xi-sap-connection-01
layout: page
title: Connection Manager
description: Der Connection Manager
product: xtract-is
parent: sap-verbindung
permalink: /:collection/:path
weight: 1
lang: de_DE
progressstate: 5
---

### SAP-Verbindung herstellen 
Jede Xtract IS Komponente benötigt einen Xtract IS Connection Manager, um auf das SAP-System zuzugreifen. 

{: .box-warning}
**Warnung!** **Fehlende Berechtigungen**
Um eine Verbindung zu SAP herzustellen, muss der Zugriff auf allgemeine Berechtigungsobjekte (RFC) verfügbar sein.
Stellen Sie sicher, dass der Zugriff auf die allgemeinen Berechtigungsobjekte möglich ist. Weitere Informationen finden Sie im Knowledge-Base-Artikel zu [SAP Zugriffsrechten](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights).


1. Um einen neuen Connection Manager zu erstellen, klicken Sie mit der rechten Maustaste in den Bereich "Solution Explorer" der Connection Manager und wählen Sie **Neue Verbindung**. 
Das Fenster "Add SSIS Connection Manager" wird geöffnet.
![Connection-Manager-01](/img/content/Connection-Manager-01.png){:class="img-responsive"}
2. Wählen Sie den XTRACT Connection Manager aus der Liste aus und klicken Sie auf **[Add]**. Der Xtract IS Connection Manager erscheint im Tab *Connection Managers*.
3. Um die SAP-Verbindung zu konfigurieren, doppelklicken Sie auf das Symbol Xtract IS Connection Manager. Das Fenster "Xtract IS Connection Manager" wird geöffnet.
![Connection-Manager](/img/content/Connection-Manager.png){:class="img-responsive" }
4. Ergänzen Sie alle notwendigen Daten (*Benutzername*, *Mandant*, *Passwort*, *Sprache* usw. siehe unten).
5. Klicken Sie auf **[Test connection]**, um die Verbindung zu Ihrem SAP-System zu überprüfen. <br>
Wenn der Verbindungstest erfolgreich ist, ist die Komponente Xtract IS einsatzbereit.

### SAP Quellsystem (1)
Es gibt zwei Möglichkeiten, sich mit einem SAP-Quellsystem zu verbinden:

1. Use Single Application Server (Verwendung eines Single Application Servers)
- **Application server**:  Name oder IP-Adresse des Applikationsservers (Eigenschaft Host) 
- **Instance number**: Systemnummer, eine Zahl zwischen 0 und 99 (Eigenschaft SystemNumber)

2. Use Load Balancing Server (message server) (Verwendung eines Load-Balancing / Message-Servers)
- **System ID**: Dreistellige System-ID (Eigenschaft SID, z.B. MSS) 
- **Message Server**: Name oder IP-Adresse des Message-Servers (Eigenschaft MessageServer) 
- **Logon group**: Logon-Gruppe (Eigenschaft LogonGroup, i.d.R. *PUBLIC*)

Siehe auch SAP Online-Help:[Load Balancing](https://help.sap.com/saphelp_nwpi711/helpdata/en/c4/3a644c505211d189550000e829fbbd/content.htm).


#### Zugriff über SAP-Router

Wenn Sie auf das SAP-System (Application-Server oder Message-Server) über einen SAP-Router zugreifen, setzen Sie den Routerstring unmittelbar vor dem Hostnamen bzw. dem Message-Server. <br>
Beispiel: <br>
Wenn der Anwendungsserver "hamlet" ist und der Router-String "/H/lear.theobald-software.com/H/" lautet, sollten Sie die Host Property auf "/H/lear.theobald-software.com/H/hamlet" setzen.

Siehe auch SAP Online-Help: [SAP-Router](https://help.sap.com/saphelp_nw70/helpdata/de/4f/992df1446d11d189700000e8322d00/content.htm) <br>

{: .box-tip }
**Tipp:** Falls Sie nicht wissen, welche Parameter einzugeben sind, können Sie die Informationen im SAP-Logon-Pad in den *Properties* nachschauen. Ansonsten fragen Sie Ihre SAP-Basis.
 

### Trace Directory (2)

Sie haben die Möglichkeit Debug-Informationen zu loggen. Wenn Sie Debug-Informationen loggen wollen, so muss im Connection Manager in das Feld [*Trace Directory*](https://support.theobald-software.com/helpdesk/KB/View/14455-how-to-activate-tracing-for-xtract-products) ein gültiger Pfad eintragen werden. <br> 

{: .box-warning }
**Warnung!: Erhöhter Verbrauch des Festplattenspeichers** <br>
Bei der Aktivierung des Debug-Logging wird eine große Menge an Informationen gesammelt. Dies kann die Kapazität Ihrer Festplatten drastisch verringern.
Aktivieren Sie das Debug-Logging nur bei Bedarf, z.B. auf Anfrage des Support-Teams.


### RFC Bibliotheken (3)

Die RFC API (Remote Function Call) erlaubt den Aufbau einer RFC-Verbindung zu einem ABAP basierten SAP-System von einem externen System, welches als Client oder Server mit dem SAP-System kommunizieren kann. <br>
Es gibt zwei Möglichkeiten die RFC-Bibliotheken in Xtract IS zu nutzen:
- Use classic RFC library (librfc32.dll) - Klassische RFC Bibliothek 
- Use NetWeaver RFC libraries - NetWeaver RFC Bibliothek (sapnwrfc.dll)

{: .box-tip }
**Empfehlung:** Verwenden Sie die nicht unterstützte librfc32.dll für einige Extraktionstypen, z.B. DeltaQ, da diese stabiler als die NetWeaver-RFC-Bibliothek läuft.

Weitere Informationen finden Sie auf der SAP Help-Seite [RFC API: Classical & SAP NetWeaver](https://help.sap.com/doc/saphelp_nw73ehp1/7.31.19/en-US/48/a994a77e28674be10000000a421937/frameset.htm).<br>
SAP hat den [Support für die librfc32.dll](https://blogs.sap.com/2012/08/15/support-for-classic-rfc-library-ends-march-2016/) eingestellt. 

Für ältere SAP-Systeme wie R/3 4.6C ist es notwendig, den Benutzernamen in Großbuchstaben anzugeben, wenn die NetWeaver-RFC-Bibliothek verwendet wird.

{: .box-note }
**Hinweis:** Wenn Sie die NetWeaver RFC-Bibliothek bei DeltaQ oder OHS-Extraktionen nutzen, muss die RFC-Destination in der SM59 auf Unicode eingestellt sein.

### Additions (4)
Klicken Sie im oberen Teil des "Xtract IS Connection Manager" auf **Additions** (4). Das Fenster "Xtract IS Connection Manager Additions" öffnet sich.
![XIS_ConnectionManager_AdditionsTab](/img/content/XIS_ConnectionManager_AdditionsTab.png){:class="img-responsive"}

#### SNC
Im Fenster "Xtract IS Connection Manager Additions" finden Sie verschiedene SNC (Secure Network Connection) Optionen.
Siehe auch [SAP-Verbindung mit SNC](./sap-verbindung-mit-snc). <br>


#### Expert Options

Seit 09/2017 werden SAP-Verbindungsparameter nicht mehr als einzelne *Connection Strings*, sondern als *Properties* gespeichert.
Für jede Komponente des *Connection Strings* existiert eine *Property*.

- **Legacy storage mode (connection string):**<br>
Die SAP-Verbindungsparameter werden über einen einzigen *Connection String* eingestellt (Standard in XIS-Versionen vor 09/2017).
Der *Connection String* unterstützt keine [sensitiven Umgebungsvariablen](./sensitive-umgebungsvariablen-in-ssis).
Sie können entweder *Connection Properties* oder einen *Connection String* verwenden, nicht beides.
- **Obfuscate Password:**<br>
Das SAP-Verbindungspasswort wird maskiert, so dass es nicht im Klartext gespeichert wird. 
Diese Option wird standardmäßig eingeschaltet, wenn der *Legacy storage mode* aktiviert wird.
- **Internal Table Function:**<br>
Gibt den Funktionsbaustein an, der für die interne Kommunikation von Xtract IS mit SAP (z.B. Abruf der Metadaten) verwendet wird.
Um den ausgewählten Funktionsbaustein zu ändern, geben Sie den Namen des Funktionsbausteins manuell ein. 
Die Verwendung eines anderen Funktionsbausteins kann erforderlich sein, wenn Sie innerhalb des Funktionsbausteins Berechtigungsbeschränkungen hinzufügen möchten.
- **AttachesSapGui:**<br>
Diese Option ist ausschließlich in den *Properties* des Connection Managers verfügbar und nicht in der GUI.
Es gibt Reports und BAPIs, die eine installierte SAP GUI voraussetzen.
In diesem Fall setzen Sie *AttachesSapGui* in den *Expert Options* des Connection Managers auf *True*.

{: .box-warning }
**Warning! 'sapgui' start failed.**
Wenn Sie Extraktionen ausführen, öffnet SAP manchmal Pop-Up Fenster, die eine Eingabe erfordern.
Um diese Pop-Up Fenster zu deaktivieren, öffnen Sie das SAP GUI Logon Pad und navigieren Sie zu **Options... > Security Settings**.
Klicken Sie auf die Schaltfläche **[Open Security Configuration]** und wählen Sie *Allow* als **Default Action**.
Wenden Sie die Änderungen an und schließen Sie das SAP GUI Logon Pad.

### Einer Xtract Component einen Connection Manager zuweisen

Xtract Connection Manager können Xtract Komponenten automatisch oder manuell zugewiesen werden.

#### Einen Connection Manager automatisch zuweisen

1. Erstellen Sie einen Connection Manager wie in [SAP-Verbindung herstellen ](./verbindungsmanager#sap-verbindung-herstellen) beschrieben.
2. Ziehen Sie eine Xtract Komponente in den Data Flow Task.  
3. Doppelklicken Sie auf die Xtract Komponente, um automatisch einen Connection Manager zuzuweisen.
Wenn mehrere Connection Manager verfügbar sind, öffnet sich das Fenster "Select Connection Manager".
Wählen Sie einen Connection manager aus der Dropdown-Liste aus und klicken Sie auf **[OK]**. <br>
![select-connection-manager](/img/content/xis/select-connection-manager.png)

#### Einen Connection Manager manuell zuweisen

1. Erstellen Sie einen Connection Manager wie in [SAP-Verbindung herstellen ](./verbindungsmanager#sap-verbindung-herstellen) beschrieben.
2. Ziehen Sie eine Xtract Komponente in den Data Flow Task.   
3. Wählen Sie die Xtract Komponente aus. Unter *Properties* öffnen Sie den *Show Advanced Editor* (1). Das Fenster "Advanced Editor" öffnet sich (2). 
4. Wählen Sie einen Connection Manager aus der Dropdown-Liste aus (3). 
5. Bestätigen Sie Ihre Auswahl mit **[OK]** (4).

{: .box-note }
**Hinweis:** Die Xtract BAPI Komponente *Advanced Editor* hat keinen *Advanced Editor*.
Um einen Connection Manager manuell einer Xtract BAPI Komponente zuzuweisen, öffnen Sie das Hauptfenster der Xtract BAPI Komponente.
Im Hauptfenster der Xtract BAPI Komponente gibt es ein Menü *Change Connection Manager*, über das ein Connection Manager zugewiesen wird.

![assign-connection-manager](/img/content/xis/assign-connection-manager.png)
