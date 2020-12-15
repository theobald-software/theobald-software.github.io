Die Verwendung der DeltaQ-Komponente macht die erstellung einer RFC-Destination im SAP-System notwendig. <br>
Diese Customizing-Einstellungen im SAP vorzunehmen werden nachfolgend als Schritt für Schritt Anweisung beschrieben.

{: .box-note }
**Note** Die Schritte des DeltaQ-Customizings außer dem Schritt, Logische Destination anlegen - optional, sind Mandanten abhängig.

### 1. RFC-Destination anlegen
Legen Sie in der Transaktion *SM59* eine neue RFC-Destination vom Typ R/3 an, z.B. mit Namen **XTRACT01**, **Connection Type 3**. Es wird kein Verbindungstest für die Erstellung notwendig.

### 2. Logische Destination anlegen - optional

{: .box-note }
**Note** Im Schritt, Funktionsbaustein RSAP_BIW_CONNECT_40 ausführen, wird automatisch die logische Destination angelegt. 

Legen Sie mit Hilfe der Transaktion *SALE* ein logisches System analog zum Namen der RFC-Destination an.

![DeltaQ-Customizing-01](/img/content/DeltaQ-Customizing-01.png){:class="img-responsive"}

### 3. Funktionsbaustein RSAP_BIW_CONNECT_40 ausführen
Gehen Sie in die Transaktion *SE37* und führen Sie den Baustein **RSAP_BIW_CONNECT_40** mit den nachfolgenden Import-Parameter aus. <br>
Ausführung des Bausteins mittels *F8*.

![DeltaQ-Customizing-02](/img/content/DeltaQ-Customizing-02.png){:class="img-responsive"}

{: .box-note }
**Note** Dieser Schritt setzt voraus, dass das SAP-System in veränderbar ist.

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

### 4. Löschen der RFC-Destination vom Typ R/3 
Aufruf der Transaktion *SM59* und löschen der RFC-Destination vom Typ R/3 über *Detailanzeige -> Menü Löschen*. <br>
Legen Sie dann eine neue Destination vom **Connection Typ T=TCP/IP** mit identischem Namen an und setzten die nachfolgenden Parameter.

Feld | Beispielwert | Bemerkung
------------ | ------------- | ------------
RFC Destination | XTRACT01 |
Connection Type | TCP/IP Connection |
Description 1| Xtract Destination | 
Activation Type | Registered Server Program |
Program ID | XTRACT01 |
Gateway Host | sap-erp-as05.example.com | Name oder IP-Adresse des SAP-Systems.
Gateway service | sapgw00 | In der Form sapgwNN, wobei NN die SAP Instanznummer, eine zweistellige Zahl zwischen *00* und *99*, ist.

![DeltaQ-Customizing-04](/img/content/DeltaQ-Customizing-04.png){:class="img-responsive"}

### 5. Funktionsbaustein Baustein RSAS_RBWBCRL_STORE ausführen
Ausführung des Bausteins **RSAS_RBWBCRL_STORE** zur Aktivierung des Zielsystems.

Importparameter | Beispielwert 
------------ | -------------
I_RBWBCRL | 700 
I_RLOGSYS | XTRACT01

![DeltaQ-Customizing-05](/img/content/DeltaQ-Customizing-05.png){:class="img-responsive"}

### 6. Registrierung der RFC-Destination  
In unserer [Knowledge Base](https://kb.theobald-software.com/sap/registering-rfc-server-in-sap-releases-in-kernel-release-720-and-higher) finden Sie die Anleitung zu der Registrierung des RFC Servers in SAP. 

{: .box-note }
**Note** Dieser Schritt gilt ab der SAP Kernel-Version 720.

### 7. qRFC Monitor (QOUT Scheduler)
Aufruf der Transaktion *SMQS*. Markieren der zuvor angelegten RFC-Destination, z.B. **XTRACT01**. Klicken Sie dann auf die Schaltfläche ‘Register without activation’ (or ‘Reg. o. Aktivierung’) und ändern Sie den Parameter Max.Verb. auf den Wert *10*. 
Erhöhung dieses Wertes bei paraller Ausführung mehrerer DeltaQ-Extraktionen auf derselben RFC-Destination.

![DeltaQ-Customizing-06](/img/content/DeltaQ-Customizing-06.png){:class="img-responsive" }

{: .box-note }
**Note** Bei Fehlern des DeltaQ-Customizings im [DeltaQ Troubleshooting Guide](https://kb.theobald-software.com/troubleshooting/deltaq-troubleshooting-guide) nachschlagen.
