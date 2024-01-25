---
ref: destinations-100
layout: page
title: Salesforce
description: Salesforce
product: xtract-universal
parent: destinationen
childidentifier: salesforce
permalink: /:collection/:path
weight: 100
lang: de_DE
progressstate: 5
---
Der folgende Abschnitt behandelt das Laden der SAP-Extraktionsdaten in ein Salesforce-Objekt.

## Voraussetzungen

**Salesforce Edition**<br>
Um die Salesforce-Zielumgebung zu verwenden, benötigen Sie ein Salesforce Account mit der Enterprise, Unlimited oder Performance Edition. <br>
Wichtig ist, dass die Salesforce Edition die Option Integration über *Webservice-API enthält*.

**Berechtigung** <br>
Für die Ausführung der Extraktion und das Einfügen der Daten braucht der Salesforce-Benutzer die API-aktiviert-Berechtigung. 

Falls das Salesforce-Objekt erstellt werden muss, werden außerdem folgende Berechtigungen benötigt: 
- *Alle Daten modifizieren*
- *Anwendung anpassen*
- *Profile und Berechtigungssätze verwalten*

## Verbindung

{% include _content/de/xu-specific/destinationen/general/connection.md %}	

### Destination Details
![sf-destination-details](/img/content/sf-destination-details.png){:class="img-responsive"}

**Username**<br>
Ihr Salesforce-Benutzername.

**Password**<br>
Das Passwort für das Salesforce-Benutzerkonto.

**Security Token**<br>
Das Sicherheitstoken, welches von Salesforce für API-Zugriffe vergeben wurde. Falls Sie Ihr Sicherheitstoken nicht kennen, können Sie sich über **Reset Security Token** ein neues generieren lassen.
Um Ihr Sicherheitstoken in Salesforce zurückzusetzen, gehen Sie in der oberen Navigationsleiste zu 
*your name > Setup > Personal Setup > My Personal Information > Reset My Security Token*.

**Test connection**<br>
Überprüft, ob die angegebenen Daten korrekt sind.

## Einstellungen

### Destination Settings öffnen

1. Eine bestehende Extraktion anlegen oder auswählen, siehe [Erste Schritte mit Xtract Universal](../erste-schritte/eine-neue-extraktion-anlegen).
2. Klicken Sie auf **[Destination]**. Das Fenster "Destination Settings" wird geöffnet.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

Die folgenden Einstellungen können für die Destination definiert werden. 
  
### Destination Settings - Destinationseinstellungen
![sf-destination-settings3](/img/content/sf-destination-settings3.PNG){:class="img-responsive"}

{% include _content/de/xu-specific/destinationen/general/file-name.md %}
{% include _content/de/xu-specific/destinationen/general/column-name-style.md %}
{% include _content/de/xu-specific/destinationen/general/date-conversion.md %}

### Preparation

bestimmt, was geschehen soll, bevor die Daten in ein Zielobjekt geschrieben werden.
- **Delete & Create**: Löscht das Objekt mit dem angegebenen Namen und erstellt ein neues Objekt mit den benötigten Einstellungen.
- **Create if not exists**: Erstellt ein neues Objekt, falls kein Objekt mit dem angegebenen Namen existiert.

### Row processing

bestimmt, wie die Daten in das Zielobjekt geschrieben werden sollen.
- **Insert**: Fügt alle neuen Datensätze in das Objekt ein.
- **Merge**: Fügt alle neuen Datensätze in das Objekt ein und aktualisiert bereits vorhandene Einträge anhand des Primärschlüssels.

### Concurrency mode

bestimmt, wie die Salesforce Bulk-API die Daten verarbeitet.
- **Parallel**: Alle Batches werden parallel zueinander verarbeitet.
- **Serial**: Alle Batches werden seriell verarbeitet.
Die parallele Verarbeitung von Batches kann zu Problemen mit der Datenbank führen, wodurch der Job fehlschlägt. Wenn dieses Problem bei Ihnen auftritt, wählen Sie die serielle Verarbeitung aus.



