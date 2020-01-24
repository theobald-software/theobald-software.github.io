---
ref: xu-getting-started-table-02
layout: page
title: 2. Eine neue Extraktion anlegen
description: 2 - Eine neue Extraktion anlegen
product: xtract-universal
parent: erste-schritte-mit-table
permalink: /:collection/:path
weight: 2
lang: de_DE
---
### SAP-Verbindung anlegen

1. Im Hauptfenster des Xtract Universal Designers navigieren Sie zur Menüleiste und wählen Sie den Menüpunkt **Server > Manage Sources**.<br>
![XU Quelle managen 1](/img/content/server_manage_sources.png){:class="img-responsive"}<br>
Das Fenster "Manage Sources" wird geöffnet.<br>
![XU Quelle managen 2](/img/content/xu_manage_source.png){:class="img-responsive"}<br>

2. Klicken Sie auf **[Add]**. Das Fenster "SAP Source Details" wird geöffnet.<br>
![SAP Quelle Details](/img/content/xu/sap_source-details.png){:class="img-responsive"}<br>
3. Geben Sie im Feld **Name** (1) einen frei wählbaren Verbindungsnamen ein. 
4. Geben Sie die SAP-Verbindungsdaten ein (2). <br>
- Um eine Verbindung zu einem Single-Application-Server herzustellen, füllen Sie die Felder **Host** und **System Number** aus. <br>
- Um eine Verbindung zu einem Message-Server über Load-Balancing herzustellen, füllen Sie die Felder **Message Server**, **Group** und **SID** aus. <br>
5. Setzen Sie die folgenden Parameter:
- Mandant (Client) und Sprache (Language) (3)
- Benutzer (User) und Passwort (Password) (4) <br>
6. Klicken Sie auf **[Verbindung testen]** (5), um die erfolgreiche Verbindung zu testen. <br>
Das Bestätigungsfenster wird geöffnet. <br>

{: .box-tip }
**Tipp:** Wenn Sie die Parameter nicht kennen, schauen Sie in Ihrer SAP-GUI nach oder fragen Sie Ihre SAP-Basis.

Die SAP-Verbindung ist erfolgreich aufgebaut.<br> 
![XU Verbindung testen 4](/img/content/xu_test_connection.png){:class="img-responsive"} <br>

#### Angelegte SAP-Verbindung überprüfen

1. Im Hauptfenster des Xtract Universal Designers navigieren Sie zur Menüleiste und wählen Sie den Menüpunkt **Server > Manage Sources**.<br>
Das Fenster "Manage Sources" wird geöffnet.<br>
Überprüfen Sie, ob die angelegte SAP-Verbindung aufgelistet ist.<br>
![XU Manage Sources Fenster](/img/content/xu_manage_source_2.png){:class="img-responsive"}

### Extraktion anlegen
Das folgende Beispiel zeigt die Erstellung einer Extraktion mit der Komponente "SAP Table or View".
1. Im Hauptfenster des Xtract Universal Designers klicken Sie auf **[Neu]** (1).
Das Fenster "Create Extraction" wird geöffnet.<br>
![Create-New-Table-Extraction](/img/content/xu_extraction_anlegen.png){:class="img-responsive"}<br>
2. Das Feld **Source** gibt die SAP-Verbindung an. Wählen Sie die zuvor angelegte SAP-Verbindung aus dem Dropdown-Menü (1).
![Table_or_View](/img/content/table/table_new_extraction.png){:class="img-responsive"}<br>
3. Geben Sie einen frei wählbaren, eindeutigen Namen für Ihre Extraktion ein (2).
4. Wählen Sie den Typ der Extraktion. Im aufgeführten Beispiel: **SAP-Tabelle oder View** (3). <br>
5. Klicken Sie auf **[OK]** zum Bestätigen.

{% include _content/de/table/extraktion-anlegen.md  %}