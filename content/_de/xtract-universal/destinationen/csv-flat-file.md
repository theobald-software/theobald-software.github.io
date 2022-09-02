---
ref: destinations-14
layout: page
title: Flat File - CSV
description: Flat File - CSV
product: xtract-universal
parent: destinationen
childidentifier: csv-flat-file
permalink: /:collection/:path
weight: 10
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=zielumgebungen
---

Die Destination *Flat File* erzeugt eine generische CSV-Datei. 

## Verbindung

### Eine Destination hinzufügen

1. Navigieren Sie im Hauptfenster des Designers zu **Server > [Manage Destinations](./ziele-verwalten)**. Das Fenster "Manage Destination" wird geöffnet.
2. Klicken Sie auf **[Add]**, um eine neue Destination hinzufügen. Das Fenster "Destination Details" wird geöffnet.
3. Geben Sie einen **Namen** für die Destination ein.
4. Wählen Sie den Destinationstyp aus dem Dropdown-Menü aus.


### Destination Details - Destinationsdetails
![CSV-Flat-Destination-Details](/img/content/xu/CSV-Flat-Destination-Details.png){:class="img-responsive"}


**File output path**<br>
Geben Sie das Verzeichnis an, in dem die Flat Files gespeichert werden sollen. 
Wenn das Verzeichnis nicht existiert, wird es erstellt.

{: .box-note }
**Hinweis:** Um Flat-Files auf ein Netzlaufwerk zu schreiben, muss Folgendes gegeben sein: <br>
\- Das Verzeichnis in **File output path** muss im [UNC-Format](https://docs.microsoft.com/de-de/dotnet/standard/io/file-path-formats#unc-paths) angegeben sein, z.B. `\\Server2\Share\Folder1`.<br>
\- Der Benutzer, unter dem der [Xtract Universal Dienst](../fortgeschrittene-techniken/service-account) läuft, muss Schreibrechte auf das Verzeichnis haben. 

{% include _content/de/xu-specific/destinationen/general/csv-settings.md %}														 

{% include _content/de/xu-specific/destinationen/general/convert-encoding.md %}	

### Column encryption
{% include _content/de/xu-specific/destinationen/general/column-encryption.md %}


## Einstellungen

### Destination Settings öffnen

1. Eine bestehende Extraktion anlegen oder auswählen (siehe auch [Erste Schritte mit Xtract Universal](../erste-schritte/eine-neue-extraktion-anlegen)).
2. Klicken Sie auf **[Destinations]**. Das Fenster "Destination Settings" wird geöffnet.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

Die folgenden Einstellungen können für die Destination definiert werden. 
  
### Destination Settings - Destinationseinstellungen

![XU_flatfile_csv_Destination](/img/content/XU_flatfile_csv_Destination.png){:class="img-responsive"}

{% include _content/de/xu-specific/destinationen/general/file-name.md %}

{% include _content/de/xu-specific/destinationen/general/column-name-style.md %}

{% include _content/de/xu-specific/destinationen/general/date-conversion.md %}

### Existing files 

**Replace file**: eine vorhandene Zieldatei wird überschrieben. <br>
**Append results**: Daten werden in einer bereits existierenden Zieldatei ergänzt. Siehe auch [Column Mapping](#column-mapping).<br>
**Abort extraction**: Der Prozess wird abgebrochen, falls eine Zieldatei bereits existiert.   

### File Splitting

**File Splitting**<br>
Schreibt die Extraktionsdaten einer einzelnen Extraktion in mehrere Dateien. 
Dabei wird an jeden Dateinamen *_part[nnn]* angehägt. 

**Max. file size** <br>
Geben Sie die Maximalgröße der einzelnen Dateien ein, die abgelegt werden sollen. 

{: .box-note }
**Note:** Die Option *Max. file size* wird nicht von gzip-Dateien unterstützt.
Die Größe von durch gzip-Verfahren komprimierten Dateien kann nicht im Voraus bestimmt werden.

### Column Mapping
Verwenden Sie **Column Mapping** wenn Sie Daten in einer bereits bestehende Zieldatei ergänzen und Sie Spalten manuell zuweisen müssen.
1. Wählen Sie im Abschnitt [Existing Files](#existing-files) die Option **Append results** aus.
1. Klicken Sie auf **[...]**, um die Datei auszuwählen, die Sie erweitern möchten.
Unterstützt werden .csv und .hyper Dateien.
2. Klicken Sie auf **[Map]**, um Spalten zuzuweisen. Das Fenster "Column Mapping" öffnet sich.<br>
![Column-Mapping](/img/content/column-mapping.png){:class="img-responsive"}
3. Wenn die Spaltennamen der Extraktion dieselben sind wie in der ausgewählten Datei, klicken Sie auf **[Auto map by name]**.<br>
Wenn die Spaltennamen nicht übereinstimmen, wählen Sie die entsprechenden SAP-Spalten über das Dropdown-Menü aus.
4. Klicken Sie auf **[OK]**, um Ihre Auswahl zu bestätigen.
5. Wenn Sie eine bestehende Datei ergänzen möchten, wählen Sie im Abschnitt [Existing Files](#existing-files) die Option **append results**.<br>
Wenn Sie eine neue Datei mit den Spaltennamen der gemappten Zieldatei erstellen möchten, wählen Sie die Option **Replace results**.
