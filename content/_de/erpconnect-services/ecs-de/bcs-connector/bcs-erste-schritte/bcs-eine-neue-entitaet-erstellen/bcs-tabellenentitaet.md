---
ref: ecs-getting-started-creating-a-new-model-01
layout: page
title: Tabellenentität
description: Tabellenentität
product: erpconnect-services
parent: bcs-eine-neue-entitaet-erstellen
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=bcs-tabellenentitaet
---

Eine Entität in Ihrem Modell beschreibt die Datenstruktur eines Business-Objekts. In einem SAP System kann ein Business-Objekt durch eine Tabelle, eine View oder einen Funktionsbaustein und als BAPI dargestellt werden. 

In SharePoint BCS wird die Entität durch einen external content type (ECT) dargestellt.

Um eine neue Entität zu definieren, wählen Sie die *New* Schaltfläche unterhalb des *Entities* Feldes.

![BCS-Generic-New-Entity-01](/img/content/BCS-Generic-New-Entity-01.png){:class="img-responsive"}

Im *New Entity* Assistent, wählen Sie als Basis für die neue Entität den SAP Objekttyp Table.


**Table**- 	Wählen Sie diesen Objekttyp, wenn Ihre Entität innerhalb des SAP Systems durch eine Tabelle oder eine View dargestellt werden soll. <br>
**Function** -	Wählen Sie diesen Objekttyp, wenn Ihre Entität innerhalb des SAP Systems durch einen Funktionsbaustein oder einen BAPI dargestellt werden soll.

Betätigen Sie die *Next* Schaltfläche.<br>
Auf der nächsten Seite des *New Entity* Assistenten können Sie im SAP System nach der Tabelle suchen, die Ihre Entität repräsentieren soll.

Geben Sie in das *Type* Feld den Tabellennamen aus dem SAP System ein. Sie können auch die Wildcard Zeichen Prozent (%) oder Sternchen ( * ) als Platzhalter für keine oder mehrere unbekannte Zeichen oder den Unterstrich ( _ ) für ein einzelnes, unbekanntes Zeichen in Ihrer Suchbedingung verwenden.

Klicken sie auf die *Search* Schaltfläche, um eine Liste der Tabellen zu erhalten, die Ihren Suchkriterien entspricht.

![BCS-Generic-New-Entity-02](/img/content/BCS-Generic-New-Entity-02.png){:class="img-responsive"}

Wählen Sie die gewünschte Tabelle aus der Liste aus und betätigen Sie die *Finish* Schaltfläche.


Im *Entity Operations* Bereich des Formulars sehen Sie die für die Entität definierten Funktionen. Die Standardmethoden für SAP Tabellen sind 'Read Table' und 'Read Table Record'.


Die 'Read Table' Methode verweist auf die Standard BCS 'Finder'-Funktion und liefert alle Daten der Tabelle. Die 'Read Table Record' Funktion verweist auf die Standard 'Specific Finder'-Funktion und liefert sämtliche Details eines eindeutigen Datensatzes.

Sie können eine bestehende Funktionen ändern, indem Sie die *Edit* Schaltfläche betätigen. In diesem Beispiel ändern Sie die 'Read Table' Funktion durch das Hinzufügen eines Filters, so das die Funktion nur die Datensätze ermittelt, welche eine Beschreibung in der ausgewählten Sprache beinhalten.

Wählen Sie die 'Read Table' Funktion aus und betätigen die Edit Schaltfläche. Der *Edit Method Dialog* wird geöffnet.

![BCS-Edit-Table-Method](/img/content/BCS-Edit-Table-Method.png){:class="img-responsive"}

Die 'Read Table' Funktion hat keine Eingabeparameter und einen Rückgabewert 'MAKT'.

In der Filterliste 'Filter Parameters' sehen sie den Standardfilter 'Limit Filter'. welcher die Anzahl der Datensätze für die 'Read Table' Funktion auf 1000 begrenzt.

Um einen neuen Filter zu erstellen, betätigen Sie die *New* Schaltfläche. Im *Edit Filter* Dialog legen Sie die Werte für die nachfolgenden Parameter fest:

**Name** = LanguageFilter

**Type** = Wildcard

**Default Value** = E

**Mapping** =  Wählen Sie die Option 'Field' und den Eintrag 'SPRAS'.

**Parameter Name** = Language (wird nach der Auswahl des verknüpften Feldes automatisch gesetzt) 

![BCS-Edit-Wildcard-Filter](/img/content/BCS-Edit-Wildcard-Filter.png){:class="img-responsive"}

Bestätigen Sie mit *OK*,  um den neuen Filter zu erstellen. Sie sehen nun den Wildcard Filter in der Filterliste ihres Entitätsmodells.

![BCS-Edit-Table-Method-with-New-Filter](/img/content/BCS-Edit-Table-Method-with-New-Filter.png){:class="img-responsive"}

Mit der *Preview* Funktion können Sie die 'Read Table' Funktion mit den beiden Filter aktivieren.

Betätigen Sie die *Preview* Schaltfläche. 

Der *Preview* Dialog zeigt eine Liste aller Datensätze. die durch die 'Read Table' Funktion auf Basis der Standardparameter 'Limit Filter' und 'LanguageFilter' ermittelt wurden.  

![BCS-Table-Method-Preview](/img/content/BCS-Table-Method-Preview.png){:class="img-responsive"}

Ändern Sie den Wert im *LanguageFilter* Feld von 'E' (für English) zu 'D' (für Deutsch).
Betätigen Sie die *Execute* Schaltfläche um die Read Table Funktion mit den neuen Filtern zu aktivieren.

![BCS-Table-Method-Preview-with-German-Language-Filter](/img/content/BCS-Table-Method-Preview-with-German-Language-Filter.png){:class="img-responsive"}

Schließen Sie mit *OK* den *Preview *Dialog.
Beenden Sie mit *OK* den *Edit Method* Dialog. Es sollte jetzt wieder das BCS Connector Hauptfenster aktiv sein. 

![BCS-MAKT-Entity](/img/content/BCS-MAKT-Entity.png){:class="img-responsive"}

Sie können die *New* Schaltfläche nutzen, um zusätzliche Enitätsfunktionen zu definieren:

- **Creator** – BCS Funktion für das Erstellen eines neuen Entitätseintrags im externen System.
- **Updater** – BCS Funktion für das Ändern eines bestehenden Entitätseintrags im externen System.
- **Deleter** – BCS Funktion zum Löschen eines bestehenden Entitätseintrags im externen System.

![BCS-New-Entity-Operation](/img/content/BCS-New-Entity-Operation.png){:class="img-responsive"}

Betätigen Sie die *Cancel* Schaltfläche, um zum BCS Connector Hauptfenster zu gelangen.

 
**Erstellen eines externen Content Type in SharePoint**

Sie können Ihr Modell jetzt im SharePoint BCS Metadata Store speichern. Jede Entität in Ihrem Modell wird einen External Content Type (ECT) in SharePoint generieren.

Auf dem BCSConnector Ribbon wählen Sie den Save Model  Befehl. Sie werden gefragt, ob Sie das Modell zu SharePoint übertragen möchten, bestätigen Sie die Frage mit derYes Schaltfläche.

Der *BCS Connector* baut nun eine Verbindung zum SharePoint BCS Metadata Store auf um das Modell zu übertragen. Bitte achten Sie darauf, dass Sie über ausreichende Rechte verfügen, um Daten in den BCS Metadata Store zu schreiben.

![BCS-Save-Model](/img/content/BCS-Save-Model.png){:class="img-responsive"}

Sie sollten nun eine Mitteilung über das erfolgreiche Speichern und die Übertragung des Modells auf den SharePoint Server erhalten.

![BCS-Successful-Model-Save](/img/content/BCS-Successful-Model-Save.png){:class="img-responsive"}
