---
ref: xu-getting-started-table-03
layout: page
title: Schritt I- Eine neue Extraktion anlegen
description: Schritt I- Eine neue Extraktion anlegen
product: xtract-universal
parent: erste-schritte-mit-xtract-table
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=eine-neue-extraktion-anlegen
---

Nach dem Start des Designers, muss der Designer erst mit einem Server und damit mit einem Extraktion-Repository verbunden werden. Die Adresse ist im Fall eines lokalen Xtract Servers der localhost (wie im Screenshot), oder eben eine andere Netzwerk-Adresse, je nach dem, wo die Server-Komponente läuft. Der Standardport 8064 kann je nach Konfiguration abweichen. Wenn der Server auf einer anderen Maschine als der Designer läuft, dann achten Sie drauf, dass der Port nicht von Ihrem Firewall blockiert wird. Klicken Sie auf Connect, um Verbindung mit dem Server aufzunehmen. 

![Designer](/img/content/xu_connect_screen.png){:class="img-responsive"}

Nach dem erfolgreichen Verbinden sind die Buttons für die Neuanlage und die Manipulation von Extraktionen aktiv. Die Liste im unteren Bereich der Maske füllt sich mit allen Extraktionen, die bereits auf dem Server angelegt sind.

![Designer](/img/content/xu_3.x_initial_screen.png){:class="img-responsive"}

**SAP-Verbinung anlegen**

Wählen Sie den Menüpunkt **Server -> Manage Sources**.

![XU-Create-Connection-1](/img/content/server_manage_sources.png){:class="img-responsive"}

Klicken Sie auf **Add**.

![XU-Create-Connection-2](/img/content/xu_manage_sources.png){:class="img-responsive"}

Geben Sie den frei wählbaren Verbindungsnamen ins Feld **Name** ein. Anschließend müssen die SAP-Verbindungsdetails eingegeben werden. <br>

Folgende Parameter müssen gesetzt werden: <br>
- Mandant (Client)
- Sprache (Language)
- Benutzer (User) und 
- Passwort (Password). <br>

Wenn Sie sich mit einem Single-Applicationsserver verbinden wollen, dann füllen Sie die Felder Host und System Number. <br>

Wenn Sie sich über Load-Balancing mit einem Message-Server verbinden wollen, dann füllen Sie die Felder Message Server , Group und SID. <br>

Wenn Sie die Parameter nicht kennen, schauen Sie in Ihre SAP-GUI nach oder fragen Sie Ihre SAP-Basis. 

![XU-Create-Connection-3-A](/img/content/xu_source_details.png){:class="img-responsive"}

Anschließend klicken Sie auf *Test Connection*, um die erfolgreiche Verbindung zu testen. 

![XU-Create-Connection-3](/img/content/xu_test_connection.png){:class="img-responsive"}

Die SAP-Verbindung ist nun erfolgreich eingerichtet. 

![XU-Create-Connection-4](/img/content/xu_manage_source_2.png){:class="img-responsive"}

**Extraktion anlegen**

Klicken Sie auf *New*, um eine neue Extraktion anzulegen.

![Create-New-Table-Extraction](/img/content/xu_extraction_anlegen.png){:class="img-responsive"}

Wählen Sie die zuvor erstellte SAP-Verbindung und geben Sie der Extraktion einen eindeutigen Namen.

Anschließend definieren Sie, um welchen Typ von Extraktion es sich handelt. In unserem Fall wollen wir eine *Tabelle* aus SAP extrahieren. 

![Add-Extraction](/img/content/xu_tabellen_extraktion_anlegen.png){:class="img-responsive"}

Nun öffnet sich der leere Tabellen-Dialog. Klicken Sie auf den *Suchen*-Button, um eine Tabelle zu suchen.

![New-Table-Extraction](/img/content/xu_tabelle_suchen.png){:class="img-responsive"}

Im Suchen-Dialog geben Sie den Namen der zu extrahierenden Tabelle ein, klicken auf den *Suchen*-Button, wählen die gewünschte Tabelle aus und bestätigen Sie mit *OK*.

Wie Sie erkennen können, ist die Eingabe einer Wildcard (*) ebenfalls in der Suchleiste möglich.

![Look-Up-Table](/img/content/xu_tabelle_auswählen.png){:class="img-responsive"}

Die Anwendung kehrt nun zurück zum Hauptdialog. Die Spalten der Tabelle wurden aus dem SAP abgerufen und können durch Anklicken für die Extraktion gewählt werden <br>
Dabei ist es möglich über *Select All* oder *Select None* alle in der Tabelle verfügbareren Spalten an- oder abzuwählen oder einzeln die zu extrahierenden Spalten anzuwählen.

![Table-Form](/img/content/xu_felder_auswählen_where_bedingung.png){:class="img-responsive"}

In das Textfeld können noch WHERE-Bedingungen angegeben werden. Diese müssen dem von SAP vorgegebenen Standard für OpenSQL entsprechen.

Bestätigen Sie mit OK, um die Extraktion im Repository - also auf dem Server - zu speichern.

