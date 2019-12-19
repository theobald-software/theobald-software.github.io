---
ref: xfa-introduction-03
layout: page
title: SAP-Verbindung konfigurieren
description: SAP-Verbindung konfigurieren
product: xtract-for-alteryx
parent: einfuehrung
permalink: /:collection/:path
weight: 5
lang: de_DE
---

Wenn Sie eine XfA-Komponente auf den Workflow ziehen, müssen sie zunächst die Verbindung zu dem gewünschten SAP-System konfigurieren. <br>
In dem DropDown-Menu auf der linken Seite sind alle Systeme verzeichnet, die bereits auf der lokalen Maschine angelegt wurden. Mit New legen Sie ein neues System an. <br>
In der Verbindungsmaske haben Sie die Möglichkeit, sich entweder zu einem Single Application Server oder per Load Balancing zu einem Messageserver zu verbinden.<br>
Im ersten Fall müssen Sie Hostname und Systemnummer, im zweiten Fall Message Server, Gruppe und SID angeben.<br>
Mandant (z.B. 100 oder 800) und Sprache (z.B. DE oder EN) müssen wie bei der SAP GUI Anmeldung angegeben werden. <br>
Für die Authentifzierung werden im einfachsten Fall nur Username und Passwort (Plain) benötigt. <br>
Es werden aber auch andere Authentifzierungsmethoden unterstützt, z.B. SNC SSO oder Logon Tickets.<br>
Welche RFC-Bibliothek verwendet wird ist Geschmackssache. <br>
Die librfc32 wurde mittlerweile von SAP abgekündigt und wird nicht mehr unterstützt. Allerdings funktioniert sie stabiler und verbraucht weniger Resourcen als die von SAP empfohlene Netweaver-Dll.<br>
Die Angabe der Trace-Datei ist nur nach Aufforderung vom Support zu nutzen.

![Designer](/img/content/xfa/designer02.png){:class="img-responsive"}

**Debug-Logging**<br>

Wenn Fehler auftretten, können Informationen aus dem Debug-Logging (Tracing) für die Fehleranalyse angefordert werden.
Führen Sie folgende Schritte aus, um das Debug-Logging zu aktivieren:

- Öffnen Sie die SAP-Verbindung und tragen Sie in das Feld Trace Directory einen gültigen Pfad zu einem leeren und existierenden Verzeichnis (z.B. C:\Temp\Trace) ein. Um die SAP-Verbinung zu öffnen, wählen Sie im Designer den Menüeintrag Server -> Manage Services. Selektieren Sie Ihre Verbindung und klicken Sie auf Edit.
- Reproduzieren Sie den Fehler. XML-Dateien werden mit den entsprechenden Informationen generiert.
- Machen Sie aus dem Verzeichnis eine Zip-Datei (z.B. Trace.zip) und senden Sie sie unserem Support.
- Nach der Reproduktion des Fehlers entfernen Sie den Eintrag aus dem Feld Trace Directory , da das Tracing nicht mehr notwendig ist.

Bitte beachten Sie, dass das Debug-Logging in der Regel nur nach Aufforderung durch den Support aktiviert werden sollte.
Beim Debug-Logging werden eine Vielzahl von Informationen gesammelt. Dies kann bei permanent aktiviertem Logging dazu führen, 
dass die Kapazitätsgrenzen des Speichers schnell erschöpft ist.

