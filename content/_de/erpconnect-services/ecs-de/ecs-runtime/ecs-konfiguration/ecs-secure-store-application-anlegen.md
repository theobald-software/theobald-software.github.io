---
ref: ecs-configuration-03
layout: page
title: Secure Store Application anlegen
description: Secure Store Application anlegen
product: erpconnect-services
parent: ecs-konfiguration
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=ecs-secure-store-application-anlegen
---

Aus dem Startmenü Ihres SharePoint Server Systems öffnen Sie die Anwendung *SharePoint 2010 Central Administration*.

Wählen Sie den *Manage service applications* Verweis aus der *Application Management* Gruppe auf der *Central Administration* Startseite.

![ECS-SP-Manage-Service-Applications](/img/content/ECS-SP-Manage-Service-Applications.png){:class="img-responsive"}

Scrollen Sie die Liste der Dienste herunter und wählen den Eintrag *Secure Store Service*. Stellen Sie sicher, dass der Service gestartet ist. Betätigen Sie die *Manage* Schaltfläche auf dem Ribbon.

![ECS-SP-Manage-Secure-Store-Service-Application](/img/content/ECS-SP-Manage-Secure-Store-Service-Application.png){:class="img-responsive"}

Wenn Sie das erste Mal eine neue Secure Store Target Application erstellen werden Sie aufgefordert, einen neuen Schlüssel zu generieren der benötigt wird, um die Anmeldedaten zu verschlüsseln.

Im *Generate New Key* Dialogfenster geben Sie ein Kennwort ein und bestätigen dieses bitte. Betätigen Sie anschliessend die *OK* Schaltfläche.

![ECS-SP-Secure-Store-Generate-New-Key](/img/content/ECS-SP-Secure-Store-Generate-New-Key.png){:class="img-responsive"}

Auf der Hauptseite der *Secure Store Service Application* wählen Sie die *New* Schaltfläche vom Ribbon, um eine neue *Target Application* zu erstellen.

![ECS-SP-Secure-Store-New-Target-Application-01](/img/content/ECS-SP-Secure-Store-New-Target-Application-01.png){:class="img-responsive"}

Auf der *Target Application Settings* Seite geben Sie die folgenden Parameter an:


- **Target Application ID**	Eindeutige ID (Name) für die Secure Store Target Application, z.B. 'ERPConnectServices'.
- **Display Name**	Anzeigename für die Secure Store Target Application, z.B. 'ERPConnect Services Secure Store'.
- **Contact E-mail**	E-Mail Adresse für den primären Kontakt.
- **Target Application Type**	Wählen Sie 'Individual', um die SharePoint Anwenderkonten individuell mit den SAP Benutzerkonten zu verknüpfen. Wählen Sie 'Group', um alle Mitglieder einer oder mehrerer Gruppen mit einem einzelnen SAP Benutzerkonto zu verknüpfen.
- **Target Application Page URL** 	URL einer Internetseite, die den Benutzer auffordert, die Berechtigungsinformationen einzugeben, wenn diese nicht in der Target Application gefunden wird.

![ECS-SP-Secure-Store-New-Target-Application-02](/img/content/ECS-SP-Secure-Store-New-Target-Application-02.png){:class="img-responsive"}

Betätigen Sie die *Next* Schaltfläche. Im nachfolgenden Fenster definieren Sie die Felder für die Anmeldeinformationen des externen SAP Systems.

Ändern Sie *Field Name* im ersten Feld in 'SAP User Name' und ändern *Field Type* zu 'User Name'.

Ändern Sie *Field Name* im zweiten Feld zu 'SAP Password' und ändern *Field Type* zu 'Password'.

Nur das 'SAP Password' Feld muss während der Eingabe ausgeblendet werden.

![ECS-SP-Secure-Store-New-Target-Application-03](/img/content/ECS-SP-Secure-Store-New-Target-Application-03.png){:class="img-responsive"}

Betätigen Sie die *Next* Schaltfläche. Im nachfolgenden Fenster geben Sie einen oder mehrere Anwender als Administratoren der *Target Application* an.

![ECS-SP-Secure-Store-New-Target-Application-04](/img/content/ECS-SP-Secure-Store-New-Target-Application-04.png){:class="img-responsive"}

Bestätigen Sie mit *OK*, um die *Target Application* zu erstellen.

Sie sollten jetzt die neue *Target Application* auf der Hauptseite der *Secure Store Service Application* sehen.

![ECS-SP-Secure-Store-New-Target-Application-05](/img/content/ECS-SP-Secure-Store-New-Target-Application-05.png){:class="img-responsive"}

**Berechtigungen einrichten**

Um Berechtigungen in der *Secure Store Target Application* einzurichten, wählen Sie die Anwendung aus und betätigen dann den *Set* Befehl innerhalb der *Credentials* Gruppe im Ribbon.

![ECS-SP-Secure-Store-Set-Credentials-01](/img/content/ECS-SP-Secure-Store-Set-Credentials-01.png){:class="img-responsive"}

Im Set Credentials for Secure Store Target Application Dialogfenster geben Sie die nachfolgenden Werte an:


- **Credential Owner**	Benutzerkonto in SharePoint. Sie können das Verzeichnissymbol für die Auswahl benutzen..
- **SAP User Name**	Benutzername in SAP.
- **SAP Password**	Benutzerkennwort in SAP.
- **Confirm SAP Password**	Kontrolleingabe für das Kennwort in SAP.

![ECS-SP-Secure-Store-Set-Credentials-02](/img/content/ECS-SP-Secure-Store-Set-Credentials-02.png){:class="img-responsive"}

Bestätigen Sie mit *OK* , um die Angaben zu speichern. Wiederholen Sie die Schritte, um weitere Berechtigungen für andere Anwender zu speichern.

Schließen Sie das *SharePoint 2010 Central Administration* Fenster.