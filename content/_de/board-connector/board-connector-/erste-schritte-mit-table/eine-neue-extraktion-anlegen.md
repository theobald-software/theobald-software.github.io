---
layout: page
title: Schritt I- Eine neue Extraktion anlegen
description: Schritt I- Eine neue Extraktion anlegen
product: board-connector
parent: erste-schritte-mit-table
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /BOARD-Connector-DE/default.aspx?pageid=eine-neue-extraktion-anlegen
---

Nach dem Start des Designers, muss der Designer erst mit einem Server und damit mit einem Extraktion-Repository verbunden werden. Die Adresse ist im Fall eines lokalen Servers der localhost (wie im Screenshot), oder eben eine andere Netzwerk-Adresse, je nach dem, wo die Server-Komponente läuft. Der Standardport kann je nach Konfiguration abweichen. Wenn der Server auf einer anderen Maschine als der Designer läuft, dann achten Sie drauf, dass der Port nicht von Ihrem Firewall blockiert wird. Klicken Sie auf Connect, um Verbindung mit dem Server aufzunehmen. 

![Table-Extraction-01](/img/content/Table-Extraction-01.png){:class="img-responsive"}

Nach dem erfolgreichen Verbinden sind die Buttons für die Neuanlage und die Manipulation von Extraktionen aktiv. Die Liste im unteren Bereich der Maske füllt sich mit allen Extraktionen, die bereits auf dem Server angelegt sind. 

Klicken Sie auf *New*, um eine neue Extraktion anzulegen. 

Geben Sie der Extraktion einen eindeutigen Namen und definieren Sie, um welchen Typ von Extraktion es sich handelt. In unserem Fall wollen wir eine Tabelle extrahieren. 

![Table-Extraction-02](/img/content/Table-Extraction-02.png){:class="img-responsive"}

In der nächsten Maske öffnet sich zunächst der Verbindungsmanager, mit dem Sie die Verbindung zum SAP definieren. Sie haben die Möglichkeit eine Verbindungsvorlage (Shared Connection) zu wählen oder eine Neue (Custom Connection) anzulegen. In diesem Beispiel wählen wir Custom Connection. Füllen Sie die Felder *Client* (Mandant), *Username* (Benutzername), *Password* (Passwort) und *Language*(Sprache) so aus, wie wenn Sie sich regulär am SAP anmelden würden. Sie können sich entweder mit einem einzelnen SAP-Server oder per Load Balancing mit einem Message Server verbinden. Im ersten Fall muss der Host und die Systemnummer, im zweiten Fall der Message Server, die Logon-Gruppe und die System-ID (*SID*) mitgegeben werden. Testen Sie die Verbindung mit *Test Connection* und bestätigen Sie mit OK.

![Table-Extraction-03](/img/content/Table-Extraction-03.png){:class="img-responsive"}

Nun öffnet sich der leere Tabellen-Dialog. Klicken Sie auf den Suchen-Button, um eine Tabelle zu suchen.

![Table-Extraction-04](/img/content/Table-Extraction-04.png){:class="img-responsive"}

Im Suchen-Dialog geben Sie den Namen der zu extrahierenden Tabelle ein, klicken auf den *Suchen*-Button, wählen die gewünschte Tabelle aus und bestätigen Sie mit *OK*. 

![Table-Extraction-05](/img/content/Table-Extraction-05.png){:class="img-responsive"}

Die Anwendung kehrt nun zurück zum Hauptdialog. Die Spalten der Tabelle wurden aus dem SAP abgerufen und können durch Anklicken für die Extraktion gewählt werden (nicht gewählte Spalten werden auch nicht extrahiert).

![Table-Extraction-06](/img/content/Table-Extraction-06.png){:class="img-responsive"}

In das Textfeld können noch WHERE-Bedingungen eingeben werden. Diese müssen dem von SAP vorgegebenen Standard für OpenSQL entsprechen. Bitte beachten Sie auch das zwischen den Werten und Operatoren Leerzeichen vorhanden sein müssen.

Bestätigen Sie mit *OK*, um die Extraktion im Repository - also auf dem jeweiligen Server - zu speichern.  

