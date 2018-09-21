---
layout: page
title: RFC-Destinationen pflegen
description: RFC-Destinationen pflegen
product: erpconnect
parent: administration
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=rfc-destinationen-pflegen
---

Um einen Aufruf vom SAP-System in ein Subsystem zu ermöglichen, muss das Subsystem dem SAP bekannt sein. Man spricht hierbei von einer RFC-Destination.

Sie ist erste Voraussetzung für das Übersenden von IDocs oder den Aufruf von Funktionsbausteinen aus ABAP heraus.

Um eine RFC-Destination anzulegen, gehen Sie in die Transaktion SM59 und klicken Sie auf den Button anlegen.

Folgende Felder sind auszufüllen:

- *Eindeutiger Name* der Destination*. 
- *Verbindungstyp* = T (für TCP/IP). 
- *Kurze Beschreibung*. 
- *ProgramID*: eindeutiger Name, mit dem sich das Server-Programm am Gateway registrieren kann. 
- Option *registrierbares Serverprogramm* wählen.

Vor dem ersten Test muss die Destination gespeichert werden.

![Maintain-RFC-Destination-001](/img/content/Maintain-RFC-Destination-001.png){:class="img-responsive"}

Sobald sich nun ein selbstgeschriebenes Server-Programm registriert hat, kann die Verbindung getestet werden (Button *Verbindung testen*). Ein Beispiel für ein einfaches RFC-Server-Programm finden Sie in Kapitel [RFC-Server -> Beispiel]() .

![Maintain-RFC-Destination-002](/img/content/Maintain-RFC-Destination-002.png){:class="img-responsive"}

**Unicode**

Falls die RFC-Verbindung (RFC Destination) auf Unicode eingestellt ist, muss die Eigenschaft *IsUnicode* des *RFCServer-Objekts* auf True gesetzt werden.  


