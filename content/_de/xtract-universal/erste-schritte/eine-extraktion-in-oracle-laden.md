---
ref: xu-getting-started-04
layout: page
title: 5.  Extraktion in eine Datenbank laden
description: Schritt 5 - Eine Extraktion in eine Datenbank laden
product: xtract-universal
parent: erste-schritte
permalink: /:collection/:path
weight: 5
progressstate: 5
lang: de_DE

---
Im Folgenden wird das Laden der Extraktion in eine Datenbank dargestellt. Als Zieldatenbank dient Microsoft SQL Server. 

Um eine Extraktion zu in die Microsoft SQL Server Datenbank zu laden, muss die Destination zunächst erstellt und definiert werden.

### Microsoft SQL Server Destination erstellen

1. Klicken Sie im Hauptfenster des Designers auf **[Destination]**, um die Destinationseinstellungen zu öffnen.
![Laden d. Destination](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

2. Im Fenster "Destination Settings" klicken Sie auf **[...]** (1), um die Destinationen zu verwalten. 
![Laden-Manage-Destination](/img/content/destinations_load_manage_shared.png){:class="img-responsive"}

3. Klicken Sie auf **[Add]** (2), um eine neue Destination hinzuzufügen.

4. Geben Sie einen Namen ein im Feld **Name**. Wählen Sie **SQLServer** aus der Dropdown-Liste **Type** (3). 
![Select-Destination-Type](/img/content/destination_details_sqlserver.png){:class="img-responsive"}

5. Füllen Sie im Abschnitt "Connection" die Felder **Server Name** und **Database Name** aus. 
6. Klicken Sie auf **[Test connection]** (4), um die Verbindung zur Datenbank zu überprüfen. 
![Test-Verbindung - erfolgreich](/img/content/sqlserver_destination-details.png){:class="img-responsive"}

7. Klicken Sie auf **[OK]** (5), um die Verbindung zu speichern. 

### Extraktion in die Microsoft SQL Server-Datenbank laden

1. Wählen Sie im Hauptfenster des Designers eine Extraktion mit einem beliebigen Ziel aus und klicken Sie auf **[Destination]**. 
![Lade-Destinations](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}
Das Fenster "Destination Settings".

2. Im Fenster "Destination Settings" wählen Sie Ihre erstellte Destination **SQLServer** aus der Dropdown-Liste aus. Hier können Sie auch die extraktionsspezifischen Einstellungen bei Bedarf ändern. Im Beispiel werden die Standardeinstellungen beibehalten:
![Load-Shared-Destination-SQLServer](/img/content/sqlserver_destination-settings.png){:class="img-responsive"}

9. Klicken Sie auf **[OK]**, um zum Hauptfenster des Designers zurückzukehren.       
4. Klicken Sie auf **[Run] > [run in xu.exe]** 
![Eine Extraktion ausführen](/img/content/run_extraction.png){:class="img-responsive"}
Das Kommandozeilenfenster wird geöffnet und ein erfolgreicher Extraktionsvorgang endet mit der Meldung *Extraction finished successfully*.
![Datenbank-Metadaten](/img/content/xu/konsole_run_in_xu_exe.png){:class="img-responsive"}


#### Extraktionsergebnis überprüfen
Öffnen Sie Ihr SQL Management Studio und überprüfen Sie das Vorhandensein  der erfolgreich extrahierten Tabelle. 

