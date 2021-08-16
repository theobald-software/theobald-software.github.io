---
ref: ec-calling-bapis-and-function-modules-01
layout: page
title: Voraussetzungen
description: RFC-Destinationen pflegen
product: erpconnect
parent: rfc-client-funktionen-und-bapis
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=rfc-destinationen-pflegen
---

Um einen Aufruf vom SAP-System in ein Subsystem zu ermöglichen, muss das Subsystem dem SAP bekannt sein. <br>
Man spricht hierbei von einer RFC-Destination.

### Eine RFC-Destination anlegen

Eine vorhandene RFC-Destination ist Voraussetzung für den Aufruf von Funktionsbausteinen aus ABAP heraus.

1. Verwenden Sie die Transaktion **SM59**, um eine neue RFC-Destination anzulegen. <br>
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

Ein Beispiel für ein einfaches RFC-Server-Programm finden Sie in Abschnitt [RFC-Server](../rfc-server/rfc-server-beispiel).

{: .box-note }
**Hinweis**: Wenn die RFC-Verbindung (RFC Destination) auf Unicode eingestellt ist, muss die Eigenschaft *IsUnicode* des *RFCServer-Objekts* auf *True* gesetzt werden.  
