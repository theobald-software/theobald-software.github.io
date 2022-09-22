---
ref: ec-prerequisites-01
layout: page
title: Voraussetzungen
description: Voraussetzungen
product: erpconnect
parent: idocs-senden-und-empfangen
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=ein-order-idoc-versenden
---

### Eine RFC-Destination anlegen

Um einen Aufruf vom SAP-System in ein Subsystem zu ermöglichen, muss das Subsystem dem SAP bekannt sein. <br>
Man spricht hierbei von einer RFC-Destination.

Eine vorhandene RFC-Destination ist Voraussetzung für das Senden von IDocs.

1. Legen Sie mit der Transaktion **SM59** eine neue RFC-Destination an.
2. Füllen Sie für die RFC-Destination folgende Felder aus:<br>
![Maintain-RFC-Destination-001](/img/content/Maintain-RFC-Destination-001.png){:class="img-responsive"}
- *Eindeutiger Name* der Destination, z.B. ERPTEST. 
- *Verbindungstyp* = T (für TCP/IP). 
- *Kurze Beschreibung*. 
- *ProgramID*: eindeutiger Name, mit dem sich das Server-Programm am Gateway registrieren kann. 
- Option *registrierbares Serverprogramm* wählen.
3. Speichern Sie die Destination.<br>
4. Um die RFC-Destination zu testen, klicken Sie auf **[Test Connection]**, während das Programm läuft.<br>
Wenn alles in Ordnung ist, wird folgender Dialog angezeigt:
![rfcdestination02](/img/content/Maintain-RFC-Destination-002.png){:class="img-responsive"}  

{: .box-note }
**Hinweis**: Wenn die RFC-Destination auf Unicode eingestellt ist, muss die Eigenschaft *IsUnicode* des RFCServer-Objekts auf *True* gesetzt werden.  


### Einrichten einer IDoc-Testumgebung

Um Test-IDocs an Ihr Programm zu versenden, können Sie in Ihrem SAP-System eine Testumgebung erstellen.<br>
Die folgenden Schritte zeigen, wie Sie eine Testumgebung einrichten, die ein *MATMAS* IDocs versenden kann.
1. Richten Sie ein logisches Zielsystem ein, um IDocs versenden zu können. 
Verwenden Sie die Transaktion **SPRO**, um *Customizing* zu öffnen und folgen Sie dort dem Pfad *SAP Web Application Server -> ALE -> Sender- und Empfängersysteme vorbereiten -> Logische Systeme einrichten -> Logische Systeme benennen* (dieser Pfad ist gültig für Release 4.7). 
Tragen Sie dort den Namen und die Bezeichnung des neuen logischen Systems ein, z.B. ERPTEST.
2. Richten Sie mit der Transaktion **SM59** eine RFC-Destination ein, siehe [Eine RFC-Destination anlegen](#eine-rfc-destination-anlegen).
3. Legen Sie mit der Transaktion **WE21** einen IDoc-Port vom Typ *Transactional RFC* an. 
Tragen Sie als RFC-Destination die in Schritt 2 angelegte Destination ein. <br>
![IDoc-Test-Environment_001](/img/content/IDoc-Test-Environment_001.png){:class="img-responsive"}
4. Legen Sie mit der Transaktion **WE20** eine Partnervereinbarung unter dem in Schritt 1 definierten logischen System an. 
Fügen Sie über die Schaltfläche **[+]** einen Ausgangsparameter hinzu. 
Für dieses Beispiel wählen Sie *MATMAS* als Nachrichtentyp für Materialstammdaten, *MATMAS05* als IDoc-Basistyp und geben Sie den Port aus Schritt 3 als Empfängerport an.<br>
![IDoc-Test-Environment_002](/img/content/IDoc-Test-Environment_002.png){:class="img-responsive"}
5. Verwenden Sie die Transaktion **BD10**, um das Menü zum Versenden der Materialstammdaten-IDocszu öffnen. 
Tragen Sie das logische System und die zu versendende Materialnummer ein und führen Sie das Programm mit **[F8]** aus. 
Die entsprechenden IDocs werden erzeugt und an den hinterlegten Port verschickt. <br>
![IDoc-Test-Environment_003](/img/content/IDoc-Test-Environment_003.png){:class="img-responsive"}


### Einrichten des Empfangs von IDocs 

Die folgenden Schritte zeigen, wie Sie Ihr SAP-System so einrichten, um eingehende IDocs zu verarbeiten und Kundenaufträge zu erstellen.
1. Legen Sie mit der Transaktion **WE20** eine Partnervereinbarung an. <br>
Im Fall eines gesendeten ORDER-IDocs fungiert das externe System als Kunde. 
Die zugehörige Partnernummer ist die Kundennummer.<br>
Verwenden Sie *KU* als Partnertyp.
![IDoc-Receive-001](/img/content/IDoc-Receive-001.png){:class="img-responsive" width="600px"}<br>
2. Legen Sie einen Eingangsparameter vom Nachrichtentyp *ORDERS* an, der auf den Vorgangscode *ORDE* verweist. 
Damit kann SAP bei einem eingehenden IDoc die richtige Verarbeitungsroutine finden, um den Kundenauftrag anzulegen.
![IDoc-Receive-002](/img/content/IDoc-Receive-002.png){:class="img-responsive"}
3. Verwenden Sie die Transaktion **VOE2**, um eingehende Daten automatisch zu erfassen.
Die Transaktion erstellt eine neue Zeile in der Tabelle *EDSDC*.
Weisen Sie der Kundennummer, die das IDoc sendet folgende Parameter zu:
Verkaufsorganisation, Vertriebsweg Sparte und Verkaufstyp.<br>
![IDoc-Receive-003](/img/content/IDoc-Receive-003.png){:class="img-responsive"}

