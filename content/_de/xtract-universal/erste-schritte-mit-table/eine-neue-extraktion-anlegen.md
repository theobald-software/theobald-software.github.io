---
ref: xu-getting-started-table-03
layout: page
title: Schritt 2 - Eine neue Extraktion anlegen
description: Schritt 2 - Eine neue Extraktion anlegen
product: xtract-universal
parent: erste-schritte-mit-xtract-table
permalink: /:collection/:path
weight: 3
lang: de_DE
---
### SAP-Verbindung anlegen

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

### Extraktion anlegen

Klicken Sie auf *New*, um eine neue Extraktion anzulegen.

![Create-New-Table-Extraction](/img/content/xu_extraction_anlegen.png){:class="img-responsive"}

Wählen Sie die zuvor erstellte SAP-Verbindung und geben Sie der Extraktion einen eindeutigen Namen.

Anschließend definieren Sie, um welchen Typ von Extraktion es sich handelt. In unserem Fall wollen wir eine *Tabelle* aus SAP extrahieren. 

![Add-Extraction](/img/content/xu/xu_tabellen_extraktion_anlegen.png){:class="img-responsive"}

{% include _content/de/table/extraktion-anlegen.md  %}