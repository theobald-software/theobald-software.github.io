---
ref: xfa-introduction-03
layout: page
title: SAP-Verbindung konfigurieren
description: SAP-Verbindung konfigurieren
product: xtract-for-alteryx
parent: einfuehrung
permalink: /:collection/:path
weight: 3
lang: de_DE
---

Wenn Sie eine XfA-Komponente auf den Workflow ziehen, müssen sie wie üblich zunächst die Verbindung zu dem gewünschten System konfigurieren. In dem DropDown-Menu auf der linken Seite sind alle Systeme verzeichnet, die bereits auf der lokalen Maschine angelegt wurden. Mit New legen Sie ein neues System an. In der Verbindungsmaske haben Sie die Möglichkeit, sich entweder zu einem Single Application Server oder per Load Balancing zu einem Messageserver zu verbinden.
Im ersten Fall müssen Sie Hostname und Systemnummer, im zweiten Fall Message Server, Gruppe und SID angeben.
Mandant und Sprache müssen wie bei der SAP GUI Anmeldung angegeben werden. 
Für die Authentifzierung werden im einfachsten Fall nur Username und Passwort (Plain) benötigt. Es werden aber auch andere Authentifzierungsmethoden unterstützt, z.B. SNC SSO oder Logon Tickets.
Welche RFC-Bibliothek verwendet wird ist Geschmackssache. Die librfc32 wurde mittlerweile von SAP abgekündigt und wird nicht mehr unterstützt. Allerdings funktioniert sie stabiler und verbraucht weniger Resourcen als die von SAP empfohlene Netweaver-Dll.
Die Angabe der Trace-Datei ist nur nach Aufforderung vom Support zu nutzen.

![Designer](/img/content/xfa/designer02.png){:class="img-responsive"}

