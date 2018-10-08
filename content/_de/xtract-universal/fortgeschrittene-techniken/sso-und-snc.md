---
layout: page
title: SSO und SNC
description: SSO und SNC
product: xtract-universal
parent: fortgeschrittene-techniken
permalink: /:collection/:path
weight: 6
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=sso-und-snc
---

Eine SAP-Verbindung ist über Single-Sign-On (SSO) mit Secure Network Communication (SNC) möglich. Bei dem SNC-Mechanismus  haben Sie die beiden Optionen Kerberos5 und NTLM. 


**Kerberos**

Bei der Kerberos Methode erfolgt die Authentifizierung des Clients über einen Kerberos Server. Dabei werden sogenannte Tickets zur Authentifizierung erstellt und an den Client übermittelt. Mit diesem Ticket authentifiziert sich der Client beim Server.

NTLM wird meistens aus Kompatibilitätsgründen verwendet. Kerberos 5 gilt als sicherer als NTLM und ist daher zu empfehlen. <br>
Weitere Details zu Kerberos: [http://technet.microsoft.com/en-us/library/bb742516.aspx](http://technet.microsoft.com/en-us/library/bb742516.aspx) 


**Double Hop-Problem**

Double Hop beschreibt die Weitergabe der Authentifizierungsdaten über zwei oder mehr Rechner (Hops) hingweg.

NTLM funktioniert aus technischen Gründen nur über einen Hop. Kerberos gibt aus Sicherheitsgründen die Authentifizierungsdaten standardmäßig ebenfalls nur über einen Hop weiter, allerdings kann Kerberos so konfiguriert werden, dass die Authentifizierungsdaten auch über zwei oder mehr Rechner (Hops) hingweg weitergegeben werden können.

NTLM können Sie nur verwenden, wenn Sie kein Double Hop-Problem haben. Wenn Sie z.B. einen Xtract Server einsetzen, dann müssen sich der Konsument der SAP-Daten und der Xtract Server auf demselben Rechner befinden, während der Domain-Controller und das SAP-System jeweils auf unterschiedlichen Rechern laufen können. In diesem Szenarion können Sie sowohl NTLM als auch Kerberos verwenden.

Wenn Sie z.B. einen Xtract Server einsetzen, wobei der Konsument der SAP-Daten und der Xtract Server auf unterschiedlichen Rechnern laufen, dann müssen Sie Kerberos verwenden, um das Double-Hop Problem lösen zu können. 

Dazu achten Sie auf die entsprechende Konfiguration: <br>
[http://blogs.technet.com/b/askds/archive/2008/06/13/understanding-kerberos-double-hop.aspx](http://blogs.technet.com/b/askds/archive/2008/06/13/understanding-kerberos-double-hop.aspx)

Weitere Informationen zur SSO-Konfiguration auf SAP-Seite finden Sie unter: <br>
[http://help.sap.com/saphelp_nw73/helpdata/en/44/0e2e0cc7330d19e10000000a114a6b/frameset.htm](http://help.sap.com/saphelp_nw73/helpdata/en/44/0e2e0cc7330d19e10000000a114a6b/frameset.htm)


**NTLM**

NTLM (kurz für NT LAN Manager) ist ein Authentifizierungsverfahren für Rechnernetze. Bei NTLM wird die SSO Authentifizierung über eine Challenge-Response-Authentifizierung zwischen dem Client und dem Server durchgeführt. <br>
Weitere Details zu NTLM: [https://technet.microsoft.com/en-us/library/hh831571.aspx](https://technet.microsoft.com/en-us/library/hh831571.aspx)

**Die DLLs herunterladen**

Sie müssen die relevanten DDLs von der SAP-Webseite herunterladen und in den Ordner %SYSTEMROOT%\System32 des Rechners ablegen, auf dem der Xtract Server läuft bzw. die SAP-Verbindung stattfindet. Diese DLLs sind für 32-Bit und 64-Bit Plattformen unterschiedlich und werden mit dem [SAP-Hinweis 2115486](http://service.sap.com/sap/support/notes/2115486) zur Verfügung gestellt. 

Die DLLs heißen: 

Für 32-Bit: 
 - Kerberos: gsskrb5.dll 
 - NTLM: gssntlm.dll
Für 64-Bit x86: 
 - Kerberos gx64krb5.dll 
 - NTLM: gx64ntlm.dll

Der folgende Knowledge Base Artikel beschreibt, wie Sie Ihr SAP-System mit SSO/SNC einrichten. Von dort können Sie auch die DLLs herunterladen:<br>
[http://my.theobald-software.com/index.php?/Knowledgebase/Article/View/87/3/snc-connection-with-sso](http://my.theobald-software.com/index.php?/Knowledgebase/Article/View/87/3/snc-connection-with-sso) 