---
ref: destinationen-13
layout: page
title: Flat File - JSON
description: Flat File - JSON
product: xtract-universal
parent: destinationen
childidentifier: json-flat-file
permalink: /:collection/:path
weight: 11
lang: de_DE

---
Die JSON-Flat-File-Destination erzeugt eine generische JSON-Datei.


### Eine Destination hinzufügen

1. Navigieren Sie im Hauptfenster des Designers zu **Server > [Manage Destinations](./ziele-verwalten)**. Das Fenster "Manage Destination" wird geöffnet.
2. Klicken Sie auf **[Add]**, um eine neue Destination hinzufügen. Das Fenster "Destination Details" wird geöffnet.
3. Geben Sie einen **Namen** für die Destination ein.
4. Wählen Sie den Destinationstyp aus dem Dropdown-Menü aus.

### Destination Details

![JSON-Flat-Destination-Details](/img/content/xu/json/json-flat-Destination-Details.png){:class="img-responsive"}

**File output path**<br>
Geben Sie das Verzeichnis an, in dem die Flat Files gespeichert werden sollen.
Wenn das Verzeichnis nicht existiert, wird es erstellt.

{: .box-note }
**Hinweis:** Um Flat-Files auf ein Netzlaufwerk zu schreiben, muss Folgendes gegeben sein: <br>
\- Das Verzeichnis in **File output path** muss im UNC-Format angegeben sein.<br>
\- Der Benutzer, unter dem der Xtract Universal Dienst läuft, muss Schreibrechte auf das Verzeichnis haben. 

### Überprüfen des Extraktionsergebnisses
1. Überprüfen Sie das zuvor definierte Verzeichnis zum Speichern von JSON-Flat-Files.
2. Öffnen Sie die JSON-Flat-Datei mit einem Editor Ihrer Wahl.
![JSON-Flat-File](/img/content/xu/json/json_flat-file.png){:class="img-responsive"}