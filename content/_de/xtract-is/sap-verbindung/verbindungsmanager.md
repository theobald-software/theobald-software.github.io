---
layout: page
title: Der Verbindungsmanager
description: Der Verbindungsmanager
product: xtract-is
parent: sap-verbindung
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=verbindungsmanager
---

Jede Xtract IS Datenquelle benötigt einen Xtract IS Verbindungsmanager, um über ihn auf das SAP-System zuzugreifen. Um innerhalb eines SSIS Packages einen neuen Verbindungsmanager anzulegen, klicken Sie mit der rechten Maustaste unten in den Bereich für die Verbindungsmanager und wählen Sie *Neue Verbindung*. <br>
Wählen Sie den Verbindungsmanager XTRACT (siehe Bild).

![Connection-Manager-01](/img/content/Connection-Manager-01.png){:class="img-responsive"}

Um den Verbindungsmanager korrekt zu konfigurieren, klicken Sie doppelt auf das Verbindungsmanager-Symbol für die Xtract-Verbindung.

![Connection-Manager-02](/img/content/Connection-Manager-02.png){:class="img-responsive"}

Die folgende Maske öffnet sich. Sie müssen nun die Anmeldedaten (*Benutzername, Mandant, Passwort, Sprache*) und die Angaben zum Zielsystem ausfüllen. Falls Sie sich an einem einzelnen SAP-System anmelden möchten, füllen Sie die Textfelder Host und Systemnumber aus. Falls Sie sich per Load Balancing anmelden möchten, sind die Textfelder MessageServer, Logon-Gruppe (Group) und SID auszufüllen. Falls Sie nicht wissen, wie diese Parameter bei Ihnen korrekt zu füllen sind, fragen Sie Ihre SAP-Basis danach. 

![Connection-Manager](/img/content/Connection-Manager.png){:class="img-responsive"}

Wenn alles korrekt ausgefüllt ist, klicken Sie auf *Test Connection*, um zu prüfen, ob das SAP-System auch wirklich erreichbar ist. Wenn alles geklappt hat, kann es jetzt mit der Nutzung der Datenquellen losgehen.

Hinweis: Mit der Option *Encrypt Password* haben Sie die Möglichkeit, das Passwort innerhalb des Connection-Strings zu verschlüsseln. Dies ist nur dann sinnvoll und empfehlenswert, wenn Sie den Connection-String nicht dynamisch füllen (z.B. über eine separate XML-Konfigurationsdatei). Wenn der Connection-String extern abgelegt wird, nutzen Sie andere Möglichkeiten der Verschlüsselung, da ein verschlüsseltes Passwort nur im Connection-Manager geändert werden kann.

**RFC-Bibliotheken**<br>
Es werden sowohl die klassische RFC (librfc32) und die NetWeaver RFC-Bibliothek unterstützt.<br>
Hinweis: Wenn Sie die NetWeaver RFC-Bibliothek bei DeltaQ oder OHS-Extraktionen nutzen, muss die RFC-Destination in der SM59 auf Unicode eingestellt sein.

**Log Directory**<br>
Sie haben die Möglichkeit Debug-Informationen zu loggen. Wenn Sie Debug-Informationen loggen wollen, so muss im Connection Manager in das Feld *Log Directory* ein gültiger Pfad eintragen werden. 

Bitte beachten Sie, dass das Logging in der Regel nur nach Aufforderung durch den Support aktiviert werden sollte. Beim Logging werden eine Vielzahl von Informationen gesammelt. Dies kann bei permanent aktiviertem Logging dazu führen, dass die Kapazitätsgrenzen des Speichermediums schnell erschöpft ist. Das Standard Logging ist von dieser Einstellung unabhängig und wird auch bei einem leeren Trace Directory Eintrag ausgeführt.

**Additions**

**Force Codepage in Strings** <br>
Bei Daten aus non-Unicode SAP-Systemen werden Zeichenfolgen in einer Codepage konvertiert, die der des Quellsystems möglichst ähnlich ist (z.B. 1250 für Zentraleuropa). Mit Hilfe dieses Parameters kann die automatisch ermittelte Zielcodepage übersteuert werden.

**Alternate BAPI for Internal Table Queries**<br>
Unsere Produkte nutzen den Funktionsbaustein RFC_READ_TABLE um look-ups auszuführen und Metadaten aus SAP zu lesen. Die Ausführung dieses Funktionsbausteins kann in manchen SAP-Systemen gesperrt sein. Diese Option erlaubt einen Ersatz-Funktionsbaustein zu definieren, z.B. Z_XTRACT_IS_TABLE. 