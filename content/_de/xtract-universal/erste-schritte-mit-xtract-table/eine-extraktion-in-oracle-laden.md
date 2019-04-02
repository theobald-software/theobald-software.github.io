---
ref: xu-getting-started-table-05
layout: page
title: Schritt 4 - Eine Extraktion in eine Datenbank laden
description: Schritt 4 - Eine Extraktion in eine Datenbank laden
product: xtract-universal
parent: erste-schritte-mit-xtract-table
permalink: /:collection/:path
weight: 5
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=eine-extraktion-in-oracle-laden
---

### Verbindung zur Zieldatenbank definieren

Wir wollen nun examplarisch für eine Datenbank Destination, eine *Oracle-Datenbank* als Ziel anlegen.

- Klicken Sie nun auf **Destination**

![Load-Destinations](/img/content/destination_xu.png){:class="img-responsive"}

![Load-Manage-Shared-Destination](/img/content/Load-Manage-Shared-Destination.jpg){:class="img-responsive"}

- Klicken Sie auf **Add**

![Shared-Destinations](/img/content/Shared-Destinations.jpg){:class="img-responsive"}

- Geben Sie einen Namen für die Zielverbindung ins Feld **Name** ein
- Wählen Sie **Oracle** aus der **Type**- Auswahlliste aus

![Select-Destination-Type](/img/content/Select-Destination-Type.jpg){:class="img-responsive"}

- Füllen Sie die Felder **Host, Port, SID / Service Name, Username** und **Password**
- Klicken Sie auf **Test Connection**, um die Verbindung zu testen.

![Test-Connection-Successful](/img/content/Oracle-Destination-Details.jpg){:class="img-responsive"}

- Klicken Sie nun **OK** im Fenster Destination Details, um die Zielverbindung zu speichern. 
- Schließen Sie anschließend das Fenster *Shared Destination* mit **Close**
- Wählen Sie nun die angelegte Oracle Zielverbindung im Feld *Destination* aus und bestätigen mit **OK**

Die zuvor angelegte Zielverbindung *Oracle* kann jetzt für die Datenextraktion *plants* verwendet werden.

![Load-Shared-Destination-Oracle](/img/content/Load-Shared-Destination-Oracle.jpg){:class="img-responsive"}
             
- wählen SIe die Extraktion aus und Klicken Sie auf *Run*
- führen Sie nun die Extraktion über *run xu.exe* aus
            
**Extraktion in die Push-Destination Oracle laden**

- das Konsolenfenster öffnet sich und endet mit der Statusmeldung *Extraction finished successfully*

![Load-Shared-Destination-Oracle](/img/content/konsole_run_in_xu_exe.png){:class="img-responsive"}

**Ergebnis in der Oracle-Datenbank überprüfen**

- Im Oracle SQL Developer Studio können Sie das Ergebnis überprüfen. Die Tabelle wurde entsprechend angelegt.

![Oracle-Database-Metadata](/img/content/Oracle-Database-Metadata.jpg){:class="img-responsive"}

- Sie können sich auch den Inhalt anschauen

![Oracle-Database-Data](/img/content/Oracle-Database-Data.jpg){:class="img-responsive"}

