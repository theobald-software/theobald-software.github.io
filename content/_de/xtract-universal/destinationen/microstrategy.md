---
ref: destinations-61
layout: page
title: Microstrategy
description: Microstrategy
product: xtract-universal
parent: destinationen
childidentifier: microstrategy
permalink: /:collection/:path
weight: 61
lang: de_DE
progressstate: 5
---

Der folgende Abschnitt behandelt das Laden der SAP-Extraktionsdaten in einen Microstrategy Server als Intelligent Cube. 


## Voraussetzungen

- Microstrategy Server inkl. JSON API: Version 10.10 oder höher. <br>
- Anmeldendaten mit den entsprechenden Berechtigungen für die Verbindung zur JSON API und zur Anlage von Datasets und Tabellen.

## Verbindung

{% include _content/de/xu-specific/destinationen/general/connection.md %}	

### Destination Details
![mstr-destination-details](/img/content/mstr-destination-details.png){:class="img-responsive"} 

**JSON Data API Server**<br>
Server API Endpoint, unter dem die JSON API erreichbar ist.<br>
(Beispiel: https://env-12345.customer.cloud.microstrategy.com/MicroStrategyLibrary/api/)

**Project Name**<br> 
Name des Projektes, in das die Daten geschrieben werden sollen. Der Standardordner ist "My Reports" in "My Personal Objects". Um einen anderen Order auszuwählen, siehe [Folder ID](#folder-id).

**Username**<br> 
Name des Benutzers.

**Password**<br> 
Passwort des Benutzers.

## Einstellungen
### Destination Settings öffnen

1. Eine bestehende Extraktion anlegen oder auswählen (siehe auch [Erste Schritte mit Xtract Universal](../erste-schritte/eine-neue-extraktion-anlegen)).
2. Klicken Sie auf **[Destinations]**. Das Fenster "Destination Settings" wird geöffnet.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

Die folgenden Einstellungen können für die Destination definiert werden. 
  
### Destination Settings - Destinationseinstellungen
![mstr-destinationen](/img/content/mstr-destinations.png){:class="img-responsive"}

{% include _content/de/xu-specific/destinationen/general/file-name.md %}

{% include _content/de/xu-specific/destinationen/general/column-name-style.md %}

{% include _content/de/xu-specific/destinationen/general/date-conversion.md %}

### Dataset ID

ID des Datasets mit dem gearbeitet werden soll. 
Diese kann entweder manuell gesetzt werden, oder wird automatisch vom Server bezogen. 
Wird in jedem Fall auch ins Log geschrieben. 


### Attributes and metrics

Attribute and Metriken (Kennzahlen) werden automatisch basiert auf dem Datentyp des Quellobjekts definiert. <br>
Um sie im Einzelfall anders definieren zu können, klicken Sie auf den entsprechenden Knopf, um die JSON-Definition zu generieren und ggf. zu ändern. 

![mstr-extraction-settings_metrics](/img/content/mstr-extraction-settings_metrics.PNG){:class="img-responsive"}

![mstr-extraction-settings_attr](/img/content/mstr-extraction-settings_attr.png){:class="img-responsive"}

### Folder ID

Optional. Geben Sie die ID eines in Microstrategy existierenden Projektordners an. Die Daten werden in dem definierten Ordner abgelegt. Die Verwendung von Unterordnern ist möglich.<br> 
Die ID eines Ordners wird in Microstrategy unter *Properties* angezeigt. 

![Folder-ID](/img/content/xu/microstrategy-folder.png){:class="img-responsive"}

### Update Policy
Beschreibt die Art, wie die Daten in MSTR geschrieben werden. <br>

|:---:|:---|
|  **DropAndCreate** | Default-Wert. Vorhandene Tabelle wird ggf. gelöscht und Daten werden eingefügt.  | 
|  **Add** | Verhält sich wie ein Insert und fügt Daten in die vorhandene Tabelle neu hinzu, sofern sie noch nicht in der Datenbank existieren. Dataset ID wird benötigt.  | 
| **Update**  | Aktualisiert die metrischen Werte im Datensatz, wenn bereits ein passender Schlüssel im Datensatz vorhanden ist; neue Datensätze werden ignoriert.  | 
|  **Upsert** |  Aktualisiert bestehende Datensätze und fügt dann neue hinzu. | 
|  **Replace** |  Verhält sich wie ein Truncate and Insert. Alle vorhandenen Daten werden gelöscht und durch die neuen ersetzt. Dataset ID wird benötigt. | 

