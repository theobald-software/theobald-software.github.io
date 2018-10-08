---
layout: page
title: Schritt III- Eine Extraktion in Oracle laden
description: Schritt III- Eine Extraktion in Oracle laden
product: xtract-universal
parent: erste-schritte-mit-xtract-table
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=eine-extraktion-in-oracle-laden
---

Der nächste Schritt ist das Laden der Extraktion in eine Oracle Datenbank. 

Wir wollen nun eine Oracle-Datenbank als Ziel anlegen.

**Verbindung zur Oracle-Zieldatenbank definieren**

- Klicken Sie nun auf Destinations

![Load-Destinations](/img/content/Load-Destinations.jpg){:class="img-responsive"}

- Wählen Sie **Shared** und klicken Sie auf **Manage** ... 

![Load-Manage-Shared-Destination](/img/content/Load-Manage-Shared-Destination.jpg){:class="img-responsive"}

- Klicken Sie auf **Add**

![Shared-Destinations](/img/content/Shared-Destinations.jpg){:class="img-responsive"}

- Geben Sie eine Namen für die Zielverbinung ins Feld **Name **ein
- Wählen Sie **Oracle** aus der **Type**-Auswahlliste.

![Select-Destination-Type](/img/content/Select-Destination-Type.jpg){:class="img-responsive"}

- Füllen Sie die Felder **Data Source, User Id** und **Password** mit dem Datenbankserver, Benutzernamen und Passwort.
- Klicken Sie auf **Test Connection**, um die Verbindung zu testen.

![Test-Connection-Successful](/img/content/Test-Connection-Successful.jpg){:class="img-responsive"}

- Klicken Sie nun **OK** im Festner Destination Details, um die Zielverbindung zu speichern.   
- Wählen Sie nun die angelegte Zielverbindung und klicken Sie auf **Close** im Fenster Shared Destinations.
Die angelegte Zielverbindung aus der Auswahlliste **Shared** ist nun gewählt im Fenster **Destination**.


![Load-Shared-Destination-Oracle](/img/content/Load-Shared-Destination-Oracle.jpg){:class="img-responsive"}

**Einstellungen festlegen**

- Die Extraktionsspezifische Zieleinstellungen finden Sie unter **Extraction-Specific Settings**. Wir behalten die Standard-Einstellungen:


![Extraction-Specific-Settings-T001W](/img/content/Extraction-Specific-Settings-T001W.jpg){:class="img-responsive"}

- Klicken Sie auf OK und kehren Sie zum Designer zurück.             
**Extraktion ausführen**
            
Nun wollen wir die Extraktion in Oracle laden.
- Wählen Sie die Extraktion und klicken Sie auf Run 
- Klicken Sie nun auf Run in Browser und anschließend auf Close.

![Run-In-Browser-Oracle](/img/content/Run-In-Browser-Oracle.jpg){:class="img-responsive"}

- Der Broswer öffnet sich und die zeigt das Log an.


![Run-In-Browser-Result-Oracle](/img/content/Run-In-Browser-Result-Oracle.jpg){:class="img-responsive"}

**Ergebnis in der Oracle-Datenbank überprüfen**

- Im Oracle SQL Developer Studio können Sie das Ergebnis überprüfen. Die Tabelle wurde entsprechend angelegt.

![Oracle-Database-Metadata](/img/content/Oracle-Database-Metadata.jpg){:class="img-responsive"}

- Sie können sich auch den Inhalt anschauen

![Oracle-Database-Data](/img/content/Oracle-Database-Data.jpg){:class="img-responsive"}

