---
ref: xu-getting-started-table-02
layout: page
title: Schritt 2 - Eine neue Extraktion anlegen
description: Schritt 2 - Eine neue Extraktion anlegen
product: xtract-universal
parent: erste-schritte-mit-table
permalink: /:collection/:path
weight: 2
lang: de_DE
---
### SAP-Verbindung anlegen

1. Im Hauptfenster des Xtract Universal Designers navigieren Sie zur Menüleiste und wählen Sie den Menüpunkt **Server > Manage Sources**.<br>
![XU-Create-Connection-1](/img/content/server_manage_sources.png){:class="img-responsive"}<br>
Das Fenster "Manage Sources" wird geöffnet.<br>
![XU-Create-Connection-2](/img/content/xu_manage_source.png){:class="img-responsive"}<br>

2. Klicken Sie auf **[Add]**. Das Fenster "SAP Source Details" wird geöffnet.<br>
![XU-Create-Connection-3-A](/img/content/xu/sap_source-details.png){:class="img-responsive"}<br>
3. Geben Sie im Feld **Name** (1) einen frei wählbaren Verbindungsnamen ein. 
4. Geben Sie die SAP-Verbindungsdaten ein (2). <br>
- Um eine Verbindung zu einem Single-Application-Server herzustellen, füllen Sie die Felder **Host** und **System Number** aus. <br>
- Um eine Verbindung zu einem Message-Server über Load-Balancing herzustellen, füllen Sie die Felder **Message Server**, **Group** und **SID** aus. <br>
5. Setzen Sie die folgenden Parameter:
- Mandant (Client) und Sprache (Language) (3)
- Benutzer (User) und Passwort (Password) (4) <br>

**Tip:** Wenn Sie die Parameter nicht kennen, schauen Sie in Ihrer SAP-GUI nach oder fragen Sie Ihre SAP-Basis. <br>

6. Klicken Sie auf **[Verbindung testen]** (5), um die erfolgreiche Verbindung zu testen. <br>
Das Bestätigungsfenster wird geöffnet. <br>
Die SAP-Verbindung ist erfolgreich aufgebaut.<br> 
![XU-Create-Connection-3](/img/content/xu_test_connection.png){:class="img-responsive"} <br>

#### Angelegte SAP-Verbindung überprüfen
7. Im Hauptfenster des Xtract Universal Designers navigieren Sie zur Menüleiste und wählen Sie den Menüpunkt **Server > Manage Sources**.<br>
Das Fenster "Manage Sources" wird geöffnet.<br>
8. Überprüfen Sie, ob die angelegte SAP-Verbindung aufgelistet ist.<br>
![XU-Create-Connection-4](/img/content/xu_manage_source_2.png){:class="img-responsive"}

### Extraktion anlegen
Das folgende Beispiel zeigt die Erstellung einer Extraktion mit der Komponente "SAP Table or View".
1. Im Hauptfenster des Xtract Universal Designers klicken Sie auf **Neu** (1).
Das Fenster "Create Extraction" wird geöffnet.
![Create-New-Table-Extraction](/img/content/xu_extraction_anlegen.png){:class="img-responsive"}<br>
2. Das Feld **Source** gibt die SAP-Verbindung an. Wählen Sie die zuvor angelegte SAP-Verbindung aus dem Dropdown-Menü (2).
3. Geben Sie einen frei wählbaren, eindeutigen Namen für Ihre Extraktion ein (3).
4. Wählen Sie den Typ der Extraktion. Im aufgeführten Beispiel: **SAP-Tabelle oder View** (4). 
![Add-Extraction](/img/content/xu/xu_tabellen_extraktion_anlegen.png){:class="img-responsive"} <br>
5. Klicken Sie auf **OK** zum Bestätigen.

{% include _content/de/table/extraktion-anlegen.md  %}