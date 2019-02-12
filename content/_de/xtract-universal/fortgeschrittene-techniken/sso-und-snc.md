---
ref: xu-advanced-techniques-06
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

Eine SAP-Verbindung ist über Single-Sign-On (SSO) mit Secure Network Communication (SNC) möglich. Für den SNC-Mechanismus empfehlen wir die Nutzung der Kerberos Wrapper Library, s. unten. 


**Kerberos**

Bei der Kerberos Methode erfolgt die Authentifizierung des Clients über einen Kerberos Server. Dabei werden sogenannte Tickets zur Authentifizierung erstellt und an den Client übermittelt. Mit diesem Ticket authentifiziert sich der Client beim Server.

Weitere Details zu Kerberos finden Sie bei [Microsoft](http://technet.microsoft.com/en-us/library/bb742516.aspx).


**Double Hop-Problem**

Double Hop beschreibt die Weitergabe von Authentifizierungsdaten über zwei oder mehr Rechner (Hops) hingweg. Die Problematik stellt sich z.B. dann, wenn Sie sich aus einem BI-Frontend wie *Power BI* oder *alteryx* via Xtract Universal mit dem SAP-System verbinden, wobei Konsument der SAP-Daten (Ihre BI-Frontends) und der Xtract Universal Server auf unterschiedlichen Rechnern laufen.

Kerberos gibt zwar aus Sicherheitsgründen die Authentifizierungsdaten standardmäßig nur über einen Hop weiter. Allerdings kann Kerberos so konfiguriert werden, dass die Authentifizierungsdaten auch über zwei oder mehr Rechner (Hops) hingweg weitergegeben werden können.


Dazu achten Sie auf die entsprechende Konfiguration: <br>
[http://blogs.technet.com/b/askds/archive/2008/06/13/understanding-kerberos-double-hop.aspx](http://blogs.technet.com/b/askds/archive/2008/06/13/understanding-kerberos-double-hop.aspx)

Weitere Informationen zur SSO-Konfiguration auf SAP-Seite finden Sie in der [SAP Online Hilfe] (https://help.sap.com/viewer/e815bb97839a4d83be6c4fca48ee5777/7.5.9/DE-DE/440ebf6c9b2b0d1ae10000000a114a6b.html) 


**Die Kerberos Wrapper Library herunterladen**

Die relevanten dll-Dateien befindet sich als Anhang im [SAP Hinweis 2115486](https://launchpad.support.sap.com/#/notes/2115486). Bitte laden Sie diese herunter und legen Sie diese in einem beliebigen Ordner des Rechners ab, auf dem der Xtract Universal Server läuft bzw. die SAP-Verbindung stattfindet. Innerhalb von Xtract Universal können Sie dann in den Settings zur SAP Source auf den Ordner verweisen, in dem Sie die dll abgelegt haben. Es gibt für 32-Bit und 64-Bit Plattformen zwei unterschiedliche Versionen der Kerberos Wrapper Library:  

- Für 32-Bit: gsskrb5.dll 
- Für 64-Bit x86: gx64krb5.dll 


