Die Verwendung der DeltaQ-Komponente macht die Erstellung einer RFC-Destination im SAP-System notwendig. <br>
Die im SAP-System vorzunehmenden Customizing-Einstellungen werden nachfolgend Schritt für Schritt erläutert.

### 1. RFC-Destination vom Typ R/3 anlegen
Legen Sie in der Transaktion *SM59* eine neue RFC-Destination vom Typ R/3 an, z.B. mit Namen **XTRACT01**, **Connection Type 3**. Es ist kein Verbindungstest für die Erstellung notwendig.

### 2. Funktionsbaustein RSAP_BIW_CONNECT_40 ausführen
Gehen Sie in die Transaktion *SE37* und führen Sie den Baustein **RSAP_BIW_CONNECT_40** mit den nachfolgenden Import-Parametern aus. <br>
Ausführung des Bausteins mittels Taste *F8*.

![DeltaQ-Customizing-02](/img/content/DeltaQ-Customizing-02.png){:class="img-responsive"}

{: .box-note }
**Hinweis** Dieser Schritt setzt voraus, dass das SAP-System veränderbar ist.

Importparameter | Beispielwert | Bemerkung
------------ | ------------- | ------------
I_LANGU | EN
I_SLOGSYS | T90CLNT090 | Logischer Name des Quellsystems. Falls Sie diesen nicht wissen, schauen Sie in die Tabelle **T000** für den jeweiligen Mandanten (Feld LOGSYS).
I_LOGSYS | XTRACT01 | 
I_STEXT | Xtract Destination
I_BASIC_IDOC | ZXTIDOC | Eindeutiger Name der RFC-Destinationen.
I_TSPREFIX | XT | Eindeutiger Name der RFC-Destinationen.
I_SAPRL | 700 | Automatisch vom SAP-System gesetzt.
I_RESTORE | X

![DeltaQ-Customizing-03](/img/content/DeltaQ-Customizing-03.png){:class="img-responsive"}

### 3. Löschen der RFC-Destination vom Typ R/3 
Aufruf der Transaktion *SM59* und Löschen der RFC-Destination vom Typ R/3 über **Detailed View > Menu > Delete**.

### 4. RFC-Destination vom Typ T anlegen
Anlage einer neuen Destination vom *Connection Type* **T=TCP/IP** mit identischem Namen und setzen nachfolgender Parameter.

Tab | Feld | Beispielwert | Bemerkung
---- | ------------ | ------------- | ------------
Technical Settings | RFC Destination | XTRACT01 |
Technical Settings | Connection Type | TCP/IP Connection |
Technical Settings | Description 1| Xtract Destination | 
Technical Settings | Activation Type | Registered Server Program |
Technical Settings | Program ID | XTRACT01 |
Technical Settings | Gateway Host | sap-erp-as05.example.com | Name oder IP-Adresse des SAP-Systems.
Technical Settings | Gateway service | sapgw00 | In der Form sapgwnn, wobei nn die SAP Instanznummer (zwischen *00* und *99*).
Special Options | Serializer | Classic Serializer | Wählen Sie den *Classic serializer* aus.

![DeltaQ-Customizing-04](/img/content/DeltaQ-Customizing-04.png){:class="img-responsive"}

### 5. Funktionsbaustein RSAS_RBWBCRL_STORE ausführen
Ausführung des Bausteins **RSAS_RBWBCRL_STORE** zur Aktivierung des Zielsystems.

Importparameter | Beispielwert 
------------ | -------------
I_RBWBCRL | 700 
I_RLOGSYS | XTRACT01

{: .box-note }
**Hinweis:** Der Parameter *I_RBWBCRL* ist die aktuelle SAP-System Release-Nummer.

![DeltaQ-Customizing-05](/img/content/DeltaQ-Customizing-05.png){:class="img-responsive"}

### 6. Registrierung der RFC-Destination  
In unserer [Knowledge Base](https://kb.theobald-software.com/sap/registering-rfc-server-in-sap-releases-in-kernel-release-720-and-higher) finden Sie die Anleitung zur Registrierung des RFC-Servers in SAP. 

{: .box-note }
**Hinweis** Dieser Schritt gilt ab der SAP Kernel-Version 720.

### 7. qRFC Monitor (QOUT Scheduler)
Aufruf der Transaktion *SMQS*. Markieren der zuvor angelegten RFC-Destination, z.B. **XTRACT01**. Klicken Sie dann auf die Schaltfläche ‘Register without activation’ und ändern Sie den Parameter *Max.Verb.* auf den Wert *10*. 
Erhöhung dieses Wertes bei paraller Ausführung mehrerer DeltaQ-Extraktionen auf derselben RFC-Destination.

![DeltaQ-Customizing-06](/img/content/DeltaQ-Customizing-06.png){:class="img-responsive" }

{: .box-note }
**Hinweis** Bei Fehlern des DeltaQ-Customizings im [DeltaQ Troubleshooting Guide](https://support.theobald-software.com/helpdesk/KB/View/14424-deltaq-troubleshooting-guide) nachschlagen.
